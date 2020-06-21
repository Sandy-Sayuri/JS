  function calcular(){
    let n1=window.prompt('Qual é o valor de A?')
    let A= Number.parseFloat(n1)
    let n2= window.prompt('Qual é o valor de B?')
    let B=Number.parseFloat(n2)
    let n3=window.prompt('Qual é o valor de C?')
    let C=Number.parseFloat(n3)
    xx.innerHTML=""
    res.innerHTML=`<h1><strong> Calculo do Δ </strong></h1>`
    res.innerHTML+=`A equação atual é ${A}x2+${B}x+${C}=0<br>`
    res.innerHTML+=`O cálculo realizado será Δ=${B}2-4.${A}.${C}<br>`
    res.innerHTML+=`<p>O valor calculado foi <p1><strong>Δ=${B*B-4*A*C}</strong></p1></p>`
  }