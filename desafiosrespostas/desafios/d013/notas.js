function nota(){
    nome=prompt('Qual é o nome do aluno')
  nota1=prompt(`primeira nota de ${nome}:`)
  n1=Number.parseFloat(nota1)
  nota2=prompt(`Segunda nota de ${nome}:`)
  n2=Number.parseFloat(nota2)
  res.innerHTML=`<h1>Analisando a situação de ${nome}<br>`
  res.innerHTML+=`Com as notas ${n1} e ${n2},a média é ${(n1+n2)/2}<br>`
  if((n1+n2)/2<3){
    res.innerHTML+=`<p>Com média abaixo de 3.0, o aluno esta<p1>REPROVADO</p1> </p>`
  }
  else if((n1+n2)/2>=3 && (n1+n2)/2<=6){
      res.innerHTML+=`<p>Com média acima de 6.0,o aluno está em<p2> RECUPERAÇÃO</p2></p>`
  }
  else{
      res.innerHTML+=`<p>Com média acima de 6.0, o aluno está<p3> APROVAO<p3><p>`
  }  
}