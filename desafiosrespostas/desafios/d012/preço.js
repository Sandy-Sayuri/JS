function Verificar(){
    let anterior=prompt('Qual era o preço anterior do produto?')
    let ant=Number.parseFloat(anterior)
    let atual=prompt('Qual é o preço atual do produto?')
    let atu=Number.parseFloat(atual)
    xx.innerHTML=""
    res.innerHTML=`<h1> Analisando os valores informados</h1>`
    res.innerHTML+=`O produto custava R$${ant} e agora custa R$${atu}<br>`
    if(ant>atu){
        res.innerHTML+=`Hoje o produto está caro<br>`
        res.innerHTML+=`O preço subiu R$ ${ant-atu} em relação ao preço anterior<br>`
        res.innerHTML+=`Uma variação de ${(atu*100)/ant} % para cima<br>`
    }
    else{
        res.innerHTML+=`o produto custava ${ant} e agora custa R$${atu}.<br>`
        res.innerHTML+=`Hoje o produto está barato.<br>`
        res.innerHTML+=`O preço caiu R$${atu-ant} em relação ao preço anterior`
        res.innerHTML+=`Uma variação de ${(atu*100)/ant}% pra baixo.`
    }
}