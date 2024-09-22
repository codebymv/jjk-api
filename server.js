const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


let sorcerers = {
    'satoru gojo': {
        'age': 28,
        'birthName': 'Satoru Gojo',
        'birthdate': 'December 7, 1989', 
        'birthLocation': 'Japan',
        'technique': 'Limitless',
        'occupation': 'Jujutsu Sorcerer',
        'yearsActive': '2018-present',
        'affiliation': 'Jujutsu High',
        'children': 0
    },
    'megumi fushiguro':{
        'age': 15,
        'birthName': 'Megumi Fushiguro',
        'birthdate': 'December 22, 2001', 
        'birthLocation': 'Japan',
        'technique': 'Shikigami',
        'occupation': 'Jujutsu Sorcerer',
        'yearsActive': '2018-present',
        'affiliation': 'Jujutsu High',
        'children': 0
    },
    'nobara kugisaki': {
        'age': 16,
        'birthName': 'Nobara Kugisaki',
        'birthdate': 'August 7, 2001',
        'birthLocation': 'Japan',
        'technique': 'Straw Doll Technique',
        'occupation': 'Jujutsu Sorcerer',
        'yearsActive': '2018-present',
        'affiliation': 'Jujutsu High',
        'children': 0
    },
    'ryomen sukuna': {
        'age': 'over 1000',
        'birthName': 'Ryomen Sukuna',
        'birthdate': 'unknown',
        'birthLocation': 'Japan',
        'technique': 'Cursed Energy Manipulation',
        'occupation': 'Cursed Spirit',
        'yearsActive': 'unknown',
        'affiliation': 'none',
        'children': 0
    },
    'yuji itadori': {
        'age': 15,
        'birthName': 'Yuji Itadori',
        'birthdate': 'March 20, 2001',
        'birthLocation': 'Japan',
        'technique': 'Divergent Fist',
        'occupation': 'Jujutsu Sorcerer',
        'yearsActive': '2018-present',
        'affiliation': 'Jujutsu High',
        'children': 0
    },
    'toge inumaki': {
        'age': 16,
        'birthName': 'Toge Inumaki',
        'birthdate': 'November 23, 2001',
        'birthLocation': 'Japan',
        'technique': 'Cursed Speech',
        'occupation': 'Jujutsu Sorcerer',
        'yearsActive': '2018-present',
        'affiliation': 'Jujutsu High',
        'children': 0
    },
    'yuta okkotsu': {
        'age': 16,
        'birthName': 'Yuta Okkotsu',
        'birthdate': 'unknown',
        'birthLocation': 'Japan',
        'technique': 'Rika Orimoto',
        'occupation': 'Jujutsu Sorcerer',
        'yearsActive': 'unknown',
        'affiliation': 'Jujutsu High',
        'children': 0
    },
    'suguru geto': {
        'age': 28,
        'birthName': 'Suguru Geto',
        'birthdate': 'unknown',
        'birthLocation': 'Japan',
        'technique': 'Cursed Manipulation',
        'occupation': 'Cursed Spirit',
        'yearsActive': 'unknown',
        'affiliation': 'Cursed Spirits',
        'children': 0
    },
    'maki zenin': {
        'age': 18,
        'birthName': 'Maki Zenin',
        'birthdate': 'December 24, 2001',
        'birthLocation': 'Japan',
        'technique': 'Heavenly Restriction',
        'occupation': 'Jujutsu Sorcerer',
        'yearsActive': '2018-present',
        'affiliation': 'Jujutsu High',
        'children': 0
    },
    'mechamaru': {
        'age': 16,
        'birthName': 'Mechamaru',
        'birthdate': 'unknown',
        'birthLocation': 'Japan',
        'technique': 'Cursed Energy Manipulation',
        'occupation': 'Jujutsu Sorcerer',
        'yearsActive': 'unknown',
        'affiliation': 'Jujutsu High',
        'children': 0
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'technique': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'affiliation': 'unknown',
        'children': 'unknown'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const sorcererName = request.params.name.toLowerCase() // Changed from rapperName to sorcererName
    if(sorcerers[sorcererName]){ // Changed from rappers to sorcerers
        response.json(sorcerers[sorcererName]) // Changed from rappers to sorcerers
    }else{
        response.json(sorcerers['unknown']) // Changed from rappers to sorcerers
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})