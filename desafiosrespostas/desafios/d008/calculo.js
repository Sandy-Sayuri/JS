function calculo(){
    produto=prompt('Qual é o produto que você está comprando?')
    preço=prompt(`Qual é o preço de ${produto}`)
    pre=Number.parseFloat(preço)
    oi.innerHTML=""
    res.innerHTML=`<h1>Calculando desconto de 10% para ${produto}</h1><br>`
    res.innerHTML+=`<p>O preço original era R$ ${preço}</p><br>`
    res.innerHTML+=`Você acaba de ganhar${pre*10/100} de desconto (-10)<br>`
    res.innerHTML+=`No fim, você vai pagar ${pre-(pre*(10/100))} no produto ${produto}`
}