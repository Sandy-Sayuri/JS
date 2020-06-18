function açao(){
    let nome =window.prompt('qual é o seu nome ?')
    while (nome==null){
        window.prompt('[ERRO] nome invalido!! \n qual é o seu nome ?')
    }
    let idade=window.prompt(`Olá ${nome}! Quantos anos você tem`)
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade`)
}