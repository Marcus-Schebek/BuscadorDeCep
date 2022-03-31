let cep = document.getElementById("cep");
let btn = document.getElementById('formBtn')
let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let estado =  document.getElementById("estado")
let cidade = document.getElementById("cidade")
let numero = document.getElementById("numero")

const preencherFormulario = async (endereco) => {
  logradouro.value = endereco.logradouro;
  bairro.value = endereco.bairro;
  estado.value = endereco.uf;
  cidade.value = endereco.localidade;
};

const cleanForm = () => {
  logradouro.value = '';
  bairro.value = '';
  estado.value = '';
  cidade.value = '';
  numero.value = '';
  cep.value = '';
}

const pesquisarCep = async () => {
  console.log('ta funcionando até aqui')
  const url = `https://viacep.com.br/ws/${cep.value}/json/`;
  const data = await fetch(url);
  const endereco = await data.json();
  if (endereco.hasOwnProperty('erro')){
    alert("CEP Inávlido");
    cep.value = '';
  } else {
    preencherFormulario(endereco);
  }
};

cep.addEventListener("focusout", pesquisarCep);
btn.addEventListener("click", cleanForm)
