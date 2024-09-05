function consultarCEP() {
  const cep = document.getElementById('cep').value.replace(/\D/g, ''); 
  if (cep.length === 8) { // Verifica se o CEP tem 8 dígitos
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
              if (data.erro) {
                  alert('CEP não encontrado');
                  limparCampos();
              } else {
                  preencherCampos(data);
              }
          })
          .catch(error => {
              console.error('Erro:', error);
              alert('Erro ao consultar o CEP');
          });
  } else {
      alert('CEP inválido');
      limparCampos();
  }
}

function preencherCampos(dados) {
  document.getElementById('logradouro').value = dados.logradouro || '';
  document.getElementById('bairro').value = dados.bairro || '';
  document.getElementById('cidade').value = dados.localidade || '';
  document.getElementById('estado').value = dados.uf || '';
}

function limparCampos() {
  document.getElementById('logradouro').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
}
