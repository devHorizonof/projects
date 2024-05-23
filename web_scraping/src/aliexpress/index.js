const {chromium } = require('playwright')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');


async function crawler(event, product) {

  event.sender.send('updated-progress', 2);
  const browser = await chromium.launch({
    headless: true,
    
  })
  
  const context = await browser.newContext({
    viewport: null, // Desativa o viewport padrão para personalizar as opções
    defaultCharacterEncoding: 'utf-8', // Define a codificação de caracteres para UTF-8

  });

  const page = await context.newPage();
  
  await page.goto('https://www.aliexpress.com/');
  event.sender.send('updated-progress', 5);
  const search = await page.$('input#search-words');
  
  await search.type(product.product);

  await page.keyboard.press('Enter');

  await page.waitForLoadState('load');

  event.sender.send('updated-progress', 8);
  await page.waitForTimeout(3000)
  const data = []
  
  // paginação
  for (let i = 1; i < 11; i++) {
    // Rola até o final da página
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    let selector = 'div.search-item-card-wrapper-gallery'
    const cards = await page.$$(selector)
    for ( let card of cards ) {
      const link = await card.$eval('a', anchor => anchor.getAttribute('href'));
      const name = await card.$('h3').then((e)=> {
        return e.textContent()
      })
      const vendas = await card.$('span').then((e)=> {
        return e.textContent()
      })
  
      const valor = await card.$('div[class*="multi--price-sale"]').then((e)=> {
        return e.textContent()
      });
      
      data.push({link, name, vendas, valor})
    }

    const isPresent = await page.$('.comet-pagination-next');
    event.sender.send('updated-progress', i * 8);
    if (isPresent) {
      await isPresent.click()
      await page.waitForLoadState('load');
    } else { 
      event.sender.send('updated-progress', i * 80);
     break;
    }

  }

  const csvWriter = createCsvWriter({
    path: `aliexpress-${product.product}.csv`,
    header: [
      { id: 'link', title: 'Link Produto' },
      { id: 'name', title: 'Nome do produto' },
      { id: 'vendas', title: 'Quantidade de Vendas' },
      { id: 'valor', title: 'Valor' },
      // Adicione mais colunas conforme necessário
    ]
  });

    // Escrever os dados no arquivo CSV
    await csvWriter.writeRecords(data);
 
    event.sender.send('updated-progress', 100);
    event.sender.send('done', `aliexpress-${product.product}.csv`);

    await browser.close();
}

module.exports = {crawler}