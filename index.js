
// criando função para ter duas casas decimais nos campos que sao relacionados a dinheiro
function formatMoney (value){
  value = Math.ceil(value * 100) / 100   // arredondar a ultima cassa decimal para mais, para nn ter falta de valor
  value = value.toFixed(2)
  return value
}

function formatSplit (value){
  if(value == 1){
    return value + ' pessoa'
  } else {
    return value + ' pessoas'
  }
}

function update(){
  // Pegar os inputs que vao chegar no HTML e armazenar em variáveis
  let bill = Number(document.getElementById('yourBill').value)
  let tipPercent = document.getElementById('tipInput').value
  let split = document.getElementById('splitInput').value

  let tipValue = bill * (tipPercent / 100)
  let billTotal = bill + tipValue
  let billEach = billTotal / split

  document.getElementById('tipPercent').innerHTML = tipPercent + '%'
  document.getElementById('tipValue').innerHTML = 'R$ ' + formatMoney(tipValue) 
  document.getElementById('totalWithTip').innerHTML = 'R$ ' + formatMoney(billTotal)

  document.getElementById('splitValue').innerHTML = formatSplit(split)

  document.getElementById('billEach').innerHTML = 'R$ ' + formatMoney(billEach)

}

