function converter(){
    let tc= window.prompt('Digite um teperatura em C(Celsius)')
    xx.innerHTML=""
    res.innerHTML+=`<h1><strong> A temperatura de ${tc},corresponde a...</h1></strong><br>`
    res.innerHTML+=`${tc+273.15} K (Kelvin)<br>`
    res.innerHTML+=`${tc*(9/5)+32} F (Fahrenheit)`


}