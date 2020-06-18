function compras(){
     let nome=prompt('Que produto você está comprando')
     let valor=prompt(`Quando custa ${nome} que você está comprando?`)
     var1=Number.parseFloat(valor)
     let valor2=prompt(`Qual foi valor que você deu para pagar ${nome}?`)
     var2=Number.parseFloat(valor2)
     if(var1<var2){
      alert(`Você comprou ${nome} que custou R$ ${var1}.\n Deu R$ ${var2} em dinheiro e vai receber R$ ${var2-var1} de troco.\n Volte Sempre `)   
     }
     else if(var2<var1){
        alert(`Você comprou ${nome} que custou R$ ${var1}.\n Deu R$ ${var2} em dinheiro e vai dever R$ ${var1-var2} .\n Volte Sempre `)  
     }
    else{
        alert(`Você comprou ${nome} que custou R$ ${var1}.\n Deu R$ ${var2} em dinheiro e não irá receber troco`)
    }
     
    
}