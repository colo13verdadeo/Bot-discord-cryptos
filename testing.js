var getJSON = require('get-json');
moment = require('./obtener_tiempo.js');
const { json } = require('stream/consumers');
const wal = 'ac35f3a7fce938fa7b20a2e17518306c017b3c18';
getJSON(`https://axiesworld.firebaseapp.com/updateSpecific?wallet=0x${wal}`, function(error, response){
    console.log(response)
 /*   var numb = response['plant-vs-undead-token'].usd;
    numb = numb.toFixed(3);
console.log("$"+numb)*//*
console.log(response);
var timestamp = response.walletData.claim_timestamp*1000;
var date = new Date(timestamp);
var timestamp2 = response.walletData.next_claim_timestamp*1000;
var timestamp3 = response.walletData.lastupdate*1000;
var date2 = new Date(timestamp2);
var date3 = new Date(timestamp3);
var hoy = new Date();
//fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();

var fecha1 = moment(hoy);
var fecha2 = moment(date2);
var fecha3 = moment(date3);
var a=0
for(i=fecha2.diff(fecha1, 'days'); i<14; i++){
    a++
}
console.log('vvalor '+a)

console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia');
console.log(fecha1.diff(fecha3, 'minutes'))
var horasexp = fecha1.diff(fecha3, 'minutes')/60
horasexp = horasexp.toFixed(2)
var nuzz = 2.51
console.log(Math.trunc(nuzz))
console.log("^^^^^^")
console.log(horasexp)
console.log(hoy.getDate())
console.log(hoy)*/
})

