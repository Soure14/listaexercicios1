var hora_homem=10
var hora_extra=15
var Trabalho_horas_extras=3
var Sal_Bruto=(8*hora_homem)+(Trabalho_horas_extras*hora_extra)
var Sal_liq=Sal_Bruto-(Sal_Bruto*0.1)
console.log("Salario Bruto: "+Sal_Bruto)
console.log("Salario liquido: "+Sal_liq)