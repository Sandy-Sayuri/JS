function reajuste(){
    nome=prompt(`Qual é o nome do funcionário?`)
    salario=prompt(`Qual é o salário de ${nome}`)
    sal=Number.parseFloat(salario)
    porcentagem=prompt(`O salário de ${nome} ai ser reajustado em qual porcentagem?`)
    por=Number.parseFloat(porcentagem)
    xx.innerHTML=""
    res.innerHTML=`<h1> ${nome} recebeu um aumento salarial!</h1>\n`
    res.innerHTML+=`O salário atual era R$ ${sal}\n`
    res.innerHTML+=`Com um aumento de ${por}% , o salário vai aumentar R$${sal*(por/100)} no próximo mês\n`
    res.innerHTML+=`E apartir dai ,${nome} vai passar a ganhar R$ ${sal+(sal*(por/100))}`
}