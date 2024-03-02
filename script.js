function infForm() {
  const altura = parseFloat(document.querySelector('#altura').value) 
  const peso = parseFloat(document.querySelector('#peso').value) 
  
  if (altura && peso) {
    return { altura, peso }
  } else {
    console.log('Por favor, preencha os campos de altura e peso.') 
    alert('Por favor, preencha os campos de altura e peso.') 
    return null 
  }
}

function calcImc() {
  // Obter os dados do formulário
  const dados = infForm() 

  if (!dados || isNaN(dados.peso) || isNaN(dados.altura) || dados.altura <= 0) {
    console.error('Dados inválidos!') 
    return
  }

  const imc = dados.peso / (dados.altura * dados.altura) 

  const padraoElement = document.getElementById("padrao") 
  const imcElement = document.getElementById("imc") 
  
  if (imc <= 18) {
    padraoElement.innerHTML = 'Abaixo do normal.' 
  } else if (imc <= 24.9) {
    padraoElement.innerHTML = 'Normal.' 
  } else if (imc <= 34.9) {
    padraoElement.innerHTML = 'Sobrepeso.' 
  } else if (imc <= 39.9) {
    padraoElement.innerHTML = 'Obesidade. Grau II.' 
  } else {
    padraoElement.innerHTML = 'Obesidade. Grau III.' 
  }
  
  imcElement.innerHTML = imc.toFixed(2) 
}


const button = document.querySelector('#enviar') 
button.addEventListener('click', function(event) {
  event.preventDefault()  
  calcImc() 
}) 