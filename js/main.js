const namesURL = 'https://raw.githubusercontent.com/LeeConnelly12/BenedictCumberbatchNameGenerator/master/names.json'
let names;

$.getJSON(namesURL).then((data) => {
	names = data
});

$('#generateButton').on('click', () => {
    const randomFirstName = parseInt(Math.random() * names.firstNames.length);
    const randomLastName = parseInt(Math.random() * names.lastNames.length);
    const name = names.firstNames[randomFirstName] + ' ' + names.lastNames[randomLastName];
    $('#result').text(name);
});

