const { ipcRenderer } = require('electron');

document.getElementById('btn-search').addEventListener('click', async () => {
  try {
    const inputValue = document.querySelector('input#product-name').value;
    ipcRenderer.send('executar-playwright', { product: inputValue});
  } catch (error) {
    console.error('Erro ao chamar Playwright:', error);
  }
});


ipcRenderer.on('updated-progress', (event, value) => {
  // Cria um novo elemento div
  const elemento = document.getElementById('progress-task')
  const div = document.getElementById('alerts')

  if (div.style.display != "none") {
    div.style.display = "none"
  }

  if (!elemento) {
    const novaDiv = document.createElement('div');
  
    // Define os atributos necessários
    novaDiv.id = 'progress-task';
    novaDiv.className = 'progress-bar progress-bar-striped progress-bar-animated';
    novaDiv.role = 'progressbar';
    novaDiv.setAttribute('aria-valuenow', `${value}`);
    novaDiv.setAttribute('aria-valuemin', '0');
    novaDiv.setAttribute('aria-valuemax', '100');
    novaDiv.textContent = `${value}%`; // Insere o texto inicial
    novaDiv.style.width = '0%'
    // Adiciona o novo elemento ao DOM, por exemplo, dentro de um elemento existente com id 'container'
    const container = document.getElementById('progress-container');
    container.appendChild(novaDiv);
  } else {
    if (elemento.getAttribute('aria-valuenow') == 100) {
      elemento.setAttribute('aria-valuenow', `0`);
      elemento.textContent = `${0}%`; // Insere o texto inicial
      elemento.style.width = `${0}%`; // Insere o texto inicial

    } else {

      elemento.setAttribute('aria-valuenow', `${value}`);
      elemento.textContent = `${value}%`; // Insere o texto inicial
      elemento.style.width = `${value}%`; // Insere o texto inicial
    }
  }
});

ipcRenderer.on('done', (event, name) => { 
  const div = document.getElementById('alerts')
  const elemento = document.getElementById('alert-done')

  elemento.style.display = 'block'
  elemento.textContent = `Arquivo ${name} salvo com sucesso`
  div.style.display = 'block'
})