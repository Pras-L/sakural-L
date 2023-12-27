const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

global.mupar = 'OnLasdan'
global.org = '4SVXAlaZC9Ix9LK5O33M7qeZ'
global.openai = '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'
global.APIs = {
can: 'https://pnggilajacn.my.id',
xteam: 'https://api.xteam.xyz', 
nrtm: 'https://fg-nrtm.ddns.net',
bg: 'http://bochil.ddns.net',
lol : 'https://api.lolhuman.xyz' , 
fgmods: 'https://api-fgmods.ddns.net',
violetics : 'https://violetics.pw',
zenz: 'https://zenzapi.xyz',
xzn: 'https://skizo.tech',
ibeng: 'https://api.ibeng.tech', 

}

global.APIKeys = {
'https://pnggilajacn.my.id': 'ItsukaChan',
'https://api.xteam.xyz': 'd90a9e986e18778b',
'https://zenzapis.xyz': '675e34de8a', 
'https://api-fgmods.ddns.net': 'Pa5SYPbA',
'https://zenzapi.xyz': '01ABEB1E11',
'https://violetics.pw': 'beta',
'https://api.lolhuman.xyz': 'haikalgans',
'https://skizo.tech': 'konekocyz', 
'https://api.ibeng.tech' : 'QeyZTULyQg', 

}

global.owner = ['6288807761628'] 
global.ownernomer = "6288807761628"
global.socialmedia = " "
global.sakuraurl = ' '
global.packgename = "by" 
global.author = "L. y" 
global.title = 'Xynab'
global.welcome = true //fale mati true nyala
global.left = true //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})