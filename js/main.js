// Add your own words to the wordlist. Be carefull to obey the showed syntax
const data = JSON.parse(`{
    "firstNames": [
        "Battlefield", "Bent", "Burnt", "Bubblegum","Bleached","Baffled","Beatle Juice","Beaten Dick","Beany","Bloody"
    ],

    "lastNames": [
        "Call of duty", "Cucumber", "Copper plate", "Cut throat", "Corn on a cob","Curry stain","Large snatch","Iron latch","Fresh batch","Match"
    ]
}`);

$('#generateButton').on('click', () => {
    const randomFirstName = parseInt(Math.random() * data.firstNames.length);
    const randomLastName = parseInt(Math.random() * data.lastNames.length);
    const name = data.firstNames[randomFirstName]+' '+data.lastNames[randomLastName];
    $('#result').text(name);
});