function Verificar(){
    let a=prompt('qual é o ano que você quer verificar?')
    let ano=Number.parseInt(a)
    res.innerHTML=`<h1><strong>Analisando o ano de ${ano}</strong></h1>`
    if(ano%4==0){
        res.innerHTML+=`<p>O ano de ${ano}<p1> É BISSEXTO\u{2714}</p1></p>`
    }
    else{
        res.innerHTML+=`<p>O ano de ${ano}<p2> NÃO É BISSEXTO\u{274C}</p2></p>` 
    }
}