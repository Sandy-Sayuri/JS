function conversor(){
    let distancia=window.prompt('Digite uma distância em metros(m)')
    dis1=Number.parseFloat(distancia)
    res.innerHTML=""
    tes.innerHTML=`<h1><strong>A distância de ${dis1} metros, corresponde a...</strong></h1>`
    tes.innerHTML+=`${dis1/1000} quilômetros (Km)<br>`
    tes.innerHTML+=`${dis1/100} hectômetros(Hm)<br>`
    tes.innerHTML+=`${dis1/10} decâmetros(Dam)<br>`
    tes.innerHTML+=`${dis1*10} decímetros(dm)<br>`
    tes.innerHTML+=`${dis1*100} centímetros (cm)<br>`
    tes.innerHTML+=`${dis1*1000} milímetros (mm)<br>`
}