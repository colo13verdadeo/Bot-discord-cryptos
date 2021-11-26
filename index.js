//Necesario
//Sacar dias Requisito
const moment = require('./obtener_tiempo.js');
//const { channel } = require('diagnostics_channel');

const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const { scheduleJob } = require('node-schedule');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});
//constantes de puppeteer.
const puppeteer = require('puppeteer');
//constantes de Coingreko.
var getJSON = require('get-json');
const { json } = require('stream/consumers');
//Temporizador
 const schedule = require('node-schedule');
const { count } = require('console');
//Abreviaciones
const chanelcuentas = "794707365730975806";


//Canales
const chanel = "862082574096531456";

//Extras
cola = 0;


//funciones
function say(message) {//client.channels.cache.get("juegos");
switch(message.content){
    case '!slp': sayelslp(message);  break;
    case '!pvu': sayelPVU(message);  break;
    case '!axs': sayelAXS(message); break;
    case '!cyt': sayelCYT(message); break;
    case '!ccw': message.channel.send("En desarrollo, aun no esta la moneda!! (CCW)"); setTimeout(() => message.delete(), 10000); break;
    case '!eth': sayelETH(message); break;
    default: break;
}}
async function esperar(){
    await sleep(1000*1);
}
function esperar3(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//Funcion testandolo
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


/*getJSON('https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=usd', function(error, response){
    var numb = response['plant-vs-undead-token'].usd;*/

function sayelAXS(message){
    getJSON('https://api.coingecko.com/api/v3/simple/price?ids=axie-infinity&vs_currencies=usd', function(error, response){
        var numb = response['axie-infinity'].usd;
    numb = numb.toFixed(2);
    esperar();
//        message.guild.channels.cache.get(chanel).send("PVU a "+"$"+numb);
const exampleEmbed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('AXS')
.setURL('https://www.coingecko.com/es/monedas/axie-infinity')
.setAuthor('Axie Infinity (AXS)', 'https://assets.coingecko.com/coins/images/13029/small/axie_infinity_logo.png?1604471082', 'https://www.coingecko.com/es/monedas/axie-infinity')
.setDescription("$"+numb+"   (DOLARES/USD)")
.setThumbnail('https://es.crypto-economy.com/wp-content/uploads/sites/2/2021/07/axies-logo.jpg')/*
.addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
)*//*
.addField('Titulo', 'Descripcion', true)*//*
.setImage('https://es.crypto-economy.com/wp-content/uploads/sites/2/2021/07/axies-logo.jpg')*/
.setTimestamp()
.setFooter('Actualizado hace ', 'https://assets.coingecko.com/coins/images/13029/small/axie_infinity_logo.png?1604471082');

message.channel.send({ embeds: [exampleEmbed] });


})
}
function sayelslp(message){
        getJSON('https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=usd', function(error, response){
            var numb = response['smooth-love-potion'].usd;
        numb = numb.toFixed(3);
        esperar();
//        message.guild.channels.cache.get(chanel).send("PVU a "+"$"+numb);
const exampleEmbed = new MessageEmbed()
	.setColor('#ea899a')
	.setTitle('SLP')
	.setURL('https://www.coingecko.com/es/monedas/smooth-love-potion')
	.setAuthor('Smooth Love Potion (SLP)', 'https://assets.coingecko.com/coins/images/10366/small/SLP.png?1578640057', 'https://discord.js.org')
	.setDescription("$"+numb+"   (DOLARES/USD)")
	.setThumbnail('https://cryptoshitcompra.com/wp-content/uploads/2021/07/slp-850x550.png')/*
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)*/
	/*.addField('Titulo', 'Descripcion', true)*//*
	.setImage('https://cryptoshitcompra.com/wp-content/uploads/2021/07/slp-850x550.png')*/
	.setTimestamp()
	.setFooter('Actualizado hace ', 'https://assets.coingecko.com/coins/images/10366/small/SLP.png?1578640057');

message.channel.send({ embeds: [exampleEmbed] });
    
    
    })

}
function sayelPVU(message){
    getJSON('https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=usd', function(error, response){
        var numb = response['plant-vs-undead-token'].usd;
    numb = numb.toFixed(4);
    esperar();
//        message.guild.channels.cache.get(chanel).send("PVU a "+"$"+numb);
const exampleEmbed = new MessageEmbed()
.setColor('#2d572c')
.setTitle('PVU')
.setURL('https://www.coingecko.com/es/monedas/axie-infinity')
.setAuthor('Plant vs Undead Token (PVU)', 'https://assets.coingecko.com/coins/images/17461/small/token-200x200.png?1627883446', 'https://www.coingecko.com/es/monedas/plant-vs-undead-token')
.setDescription("$"+numb+"   (DOLARES/USD)")
.setThumbnail('https://www.mmoingame.com/wp-content/uploads/2021/07/Plant-vs-Undead.jpg')/*
.addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
)*//*
.addField('Titulo', 'Descripcion', true)*//*
.setImage('https://www.mmoingame.com/wp-content/uploads/2021/07/Plant-vs-Undead.jpg')*/
.setTimestamp()
.setFooter('Actualizado hace ', 'https://assets.coingecko.com/coins/images/17461/small/token-200x200.png?1627883446');

message.channel.send({ embeds: [exampleEmbed] });


})
}
function sayelCYT(message){
    getJSON('https://api.coingecko.com/api/v3/simple/price?ids=coinary-token&vs_currencies=usd', function(error, response){
        var numb = response['coinary-token'].usd;
    numb = numb.toFixed(4);
    esperar();
//        message.guild.channels.cache.get(chanel).send("PVU a "+"$"+numb);
const exampleEmbed = new MessageEmbed()
.setColor('#6F2B3D')
.setTitle('CYT')
.setURL('https://www.coingecko.com/es/monedas/coinary-token')
.setAuthor('Coinary Token (CYT)', 'https://assets.coingecko.com/coins/images/17622/small/CYT-LOGO-1.png?1628669366', 'https://www.coingecko.com/es/monedas/coinary-token')
.setDescription("$"+numb+"   (DOLARES/USD)")
.setThumbnail('https://dragonary.com/wp-content/uploads/CoversSocialGoogle.jpg')/*
.addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
)*//*
.addField('Titulo', 'Descripcion', true)/**//*
.setImage('https://dragonary.com/wp-content/uploads/CoversSocialGoogle.jpg')*/
.setTimestamp()
.setFooter('Actualizado hace ', 'https://assets.coingecko.com/coins/images/17622/small/CYT-LOGO-1.png?1628669366');

message.channel.send({ embeds: [exampleEmbed] });


})
}
function sayelETH(message){
    getJSON('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', function(error, response){
        var numb = response['ethereum'].usd;
    numb = numb.toFixed(2);
    esperar();
//        message.guild.channels.cache.get(chanel).send("PVU a "+"$"+numb);
const exampleEmbed = new MessageEmbed()
.setColor('#7F7F7F')
.setTitle('ETH')
.setURL('https://www.coingecko.com/es/monedas/ethereum')
.setAuthor('Ethereum (ETH)', 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', 'https://www.coingecko.com/es/monedas/ethereum')
.setDescription("$"+numb+"   (DOLARES/USD)")
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png')/*
.addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
)*//*
.addField('Titulo', 'Descripcion', true)*//*
.setImage('https://enqueinvertir.com/wp-content/uploads/2021/06/La-magia-de-ETH-en-cinco-anos-de-miles-a-millones-de-dolares.jpg')*/
.setTimestamp()
.setFooter('Actualizado hace ', 'https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png');

message.channel.send({ embeds: [exampleEmbed] });


})
}
//Funcion bot automatico
async function norm(message){
try{    message.channel.messages.fetch( {limit: 20}).then(messages =>{
    message.channel.bulkDelete(messages, true);
})}catch(error){
}

    cola--; 
    sayelslp(message);
    await sleep(100*6)
    sayelAXS(message);
    await sleep(100*6)
    sayelPVU(message);
    await sleep(100*6)
    sayelCYT(message);
    await sleep(100*6)
    sayelETH(message);
    await sleep(100*6)/*
    await sleep(100*6)
    getJSON('https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=usd', function(error, response){
        var numb = response['smooth-love-potion'].usd;
        numb = numb.toFixed(5);
        message.guild.channels.cache.get(chanel).send("SLP a "+"$"+numb);
        
    
    
    }
    )
    await sleep(100*6)
    getJSON('https://api.coingecko.com/api/v3/simple/price?ids=axie-infinity&vs_currencies=usd', function(error, response){
        var numb = response['axie-infinity'].usd;
        numb = numb.toFixed(5);
        message.guild.channels.cache.get(chanel).send("AXS a "+"$"+numb);
        
    
    
    }
    )
    await sleep(100*6)
    getJSON('https://api.coingecko.com/api/v3/simple/price?ids=coinary-token&vs_currencies=usd', function(error, response){
        var numb = response['coinary-token'].usd;
        numb = numb.toFixed(5);
        message.guild.channels.cache.get(chanel).send("CYT a "+"$"+numb);
        
    
    
    }
    )*/
    
//    message.guild.channels.cache.get(chanel).send("welcome in this channel!");
}
//Fin bot automatico
//Dar dias de diferencias
async function darslp(response){
    try{
        producbec = response.walletData.ingame_slp;
    }catch{
        producbec = response.ingame_slp;
    }
    return producbec
}
function dardias(response){
    try{
        producbec = response.walletData.ingame_slp;
        var timestamp = response.walletData.claim_timestamp*1000;
    }catch{
        producbec = response.ingame_slp;
        var timestamp = response.claim_timestamp*1000;
    }
var date = new Date(timestamp);

//fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
try{var timestamp2 = response.walletData.next_claim_timestamp*1000;
    var timestamp3 = response.walletData.lastupdate*1000;
    var date3 = new Date(timestamp3);
} catch{
    console.log(response)
    var timestamp2 = response.next_claim_timestamp*1000;
    var timestamp3 = response.lastupdate*1000;
    var date3 = new Date(timestamp3);
    console.log('---------- SEPARACION0 --------------')
}
var date2 = new Date(timestamp2);
var fecha2 = moment(date2);
var hoy = new Date();
var fecha1 = moment(hoy);
var a=0
for(i=fecha2.diff(fecha1, 'days'); i<14; i++){
a++
}
if(a===636){console.error('Alerta de ERROR: ', a, ' ', fecha2, '-_-', fecha1)}
return a;
}
//Prirey
function prireycheck(response){
    try{
        producbec = response.walletData.ingame_slp;
        var timestamp = response.walletData.claim_timestamp*1000;
    }catch{
        producbec = response.ingame_slp;
        var timestamp = response.claim_timestamp*1000;
    }
var date = new Date(timestamp);

//fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
try{var timestamp2 = response.walletData.next_claim_timestamp*1000;
    var timestamp3 = response.walletData.lastupdate*1000;
    var date3 = new Date(timestamp3);
} catch{
    console.log(response)
    var timestamp2 = response.next_claim_timestamp*1000;
    var timestamp3 = response.lastupdate*1000;
    var date3 = new Date(timestamp3);

    console.log('---------- SEPARACION e--------------')
}
var date2 = new Date(timestamp2);
var fecha2 = moment(date2);
var hoy = new Date();
var fecha1 = moment(hoy);
var a=0
auxpri2 = dardias(response)
if(auxpri2===0){auxpri2 = 1}
if(producbec===undefined){producbec = 1}
auxpri = producbec/auxpri2
console.log(auxpri2,'<< cantidad >>', producbec)
if(auxpri >=80){
    console.log(`Sii ${auxpri}`)
    return false
}else{ console.log(`Nooo ${auxpri} <<< `); return true} 
}


async function prirey(response = 2, line=null){
    console.log(' c ')
    if(response === 2){
        getJSON(`https://axiesworld.firebaseapp.com/updateSpecific?wallet=0x${line}`, function(error, response){
            if(response === 2){console.error('ACa erorr');} else{
                if(prireycheck(response) === false){return false} else{
                    contadorpri=contadorpri+1
                    console.log('101010101101001010101001010010101010101001011010001010101010', typeof(ListaPri))
                    ListaPri.push(line+'  ')

                    return true;
                
                }
            }
        })
    }
    if(prireycheck(response) === false){console.log('=== FAlse'); return false} else{ console.log('===== TRUE');
        return true;

}
}



//Funcion PVU Congreko
//Funcion PVU.
//Fin funcion PVU.

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });}

//Arranque
client.on("ready", () => {
    console.log(`Estoy listo! ${client.user.tag}`);


    const guildsz = client.guilds.cache.get(chanelcuentas); 
    let commands
    if(guildsz){
commands = guildsz.commands;
    } else{
        client.application?.commands;
    }
    commands?.create({ 
    name: '0x', 
    description: 'Añade tu direccion roning que aparece en tu beca (NO TU WALLET RONING)',
    options: [
        {
            name: 'direccion_del_becado',
            description: 'Roning de la CUENTA BECA',
            required: true,
            type: 'STRING'
        }
    ]
    })
    commands?.create({ 
        name: 'aprirey', 
        description: 'Incerta la Clave Secreta',
        options: [
            {
                name: 'clave',
                description: 'Utilidad de Prirey',
                required: true,
                type: 'STRING'
            }
        ]
        })
 });
 //Temporizador (ADD-ON)
 // ADD-ON Temporizador
 /*
 schedule.scheduleJob('*//*2 * * * * *', ()  => {  console.log('stopped task'); 

})
*/

 //Eventos
 client.on("messageCreate", async (message, ssa) => {
    if(message.channel.id === chanelcuentas){

    }
     if(message.channel.id === chanel){
   switch(message.content){
    
    case '!axs' || '!AXS': say(message); break;
    case '!pvu': say(message); break; 
    case '!ccw': say(message); break; 
    case '!slp': say(message);  break; 
    case '!PVU': say(message); break; 
    case '!CCW': say(message); break; 
    case '!SLP': say(message);  break; 
    case '!eth': say(message); break;
    case '!cyt' || '!CYT': say(message); break;
    case '!fixch': norm(message); break;
   default:   if(cola === 0){cola++; console.log(cola); await sleep(1000*60*60*6); norm(message);  /*setTimeout(() => message.delete(), 1000*3);*/break; } else{break;}//message.channel.send("There was an error while muting the member");
}}
 });
 
 client.on('interactionCreate', async interaction=>{
    if(!interaction.isCommand()){return};
    const { commandName, options } = interaction;
    if (commandName === '0x'){
        count(options.getString('direccion_del_becado'))
        direccionbec = options.getString('direccion_del_becado') || '11';
        if(direccionbec === 11){interaction.reply({content: 'La direccion es inexsistente', ephemeral: true})} else {
        getJSON(`https://axiesworld.firebaseapp.com/updateSpecific?wallet=0x${direccionbec}`, function(error, response){
            esperar();
        //Calcular horas
        try{var timestamp2 = response.walletData.next_claim_timestamp*1000;
            var timestamp3 = response.walletData.lastupdate*1000;
            var date3 = new Date(timestamp3);
        } catch{
            console.log(response)
            var timestamp2 = response.next_claim_timestamp*1000;
            var timestamp3 = response.lastupdate*1000;
            var date3 = new Date(timestamp3);

            console.log('---------- SEPARACION --------------')
            console.log(timestamp2)
            console.log('---------- SEPARACIO22N --------------')
        }
        
        var date2 = new Date(timestamp2);
var hoy = new Date();
        var fecha1 = moment(hoy);
var fecha2 = moment(date2);
        var fecha3 = moment(date3);
        var horasexp = fecha1.diff(fecha3, 'minutes')/60
        horasexp = horasexp.toFixed(2)
        //Calcular dias
        try{
            producbec = response.walletData.ingame_slp;
            var timestamp = response.walletData.claim_timestamp*1000;
        }catch{
            producbec = response.ingame_slp;
            var timestamp = response.claim_timestamp*1000;
        }
var date = new Date(timestamp);

//fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();


var a=0
for(i=fecha2.diff(fecha1, 'days'); i<14; i++){
    a++
}
console.log(fecha2);
console.log(fecha1);
console.log(a);
if(a===0)a=1

try{
   MMR= response.walletData.pvpData.elo
        interaction.reply({
            content: `La wallet: ${direccionbec} tiene ${producbec} SLP por reclamar.
            Promedio de SLP al DIA ${producbec/a}
            MMR de ${MMR}
            Ultima actualizacion hace ${horasexp} horas
            `, 
            ephemeral: true,
        })} catch{
            console.log(producbec, '-', a, '-', horasexp, '-', MMR)
            interaction.reply({
                content: `Surgio un error, porfavor reportamelo! ERROR: possible cannot read property of undefined`, ephemeral: true,
            })
            console.log(response)
        }
        })}
        

    }
    if (commandName === 'aprirey'){
        if(options.getString('clave') != 'ronin'){
            interaction.reply({
                content: `Contraseña incorrecta`, ephemeral: true,
            })
        }else{
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream('prirey.txt')
          });
          ListaPri = [' ']
          contadorpri=0
          lineReader.on('line', async function (line) {
            if(prirey(2,line) === true){
                
                contadorpri++;
                console.log('Contador ZAZ', contadorpri, '   <<<>>>>')
            }
            
          });
          await sleep(2600);
            if(contadorpri !=0){
                
        if(contadorpri !=0){
                try{
            interaction.reply({
            content: `Hay actualmente ${contadorpri} becados con menos de la media
            La lista es:
${ListaPri}`, 
            ephemeral: true,
        })} catch{
                interaction.reply({
                    content: `Surgio un error, porfavor reportamelo! ERROR: No se2, reportamelo`, ephemeral: true,
                })
                console.log(response)
                console.log('...Separame...')

                console.log(a)
            }}
            else{
                try{
                    interaction.reply({
                        content: `No debiste llegar aca, reportamelo`, 
                        ephemeral: true,
                    })} catch{
                        console.log('Error en el catch')
                    }
            }} else{ 
                console.log(contadorpri,' Contador de prirey')
                interaction.reply({
                    content: `No hay becados por debajo de la media. [${ListaPri}]
                    De haberlo, porfavor reportarmelo`, ephemeral: true,
                })
        }

    }}


 }) 
 
 client.login("---");