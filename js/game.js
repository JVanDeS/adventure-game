// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Op vakantie gaan!';
document.getElementById('level_title').innerHTML = 'Start je vakantie!';
document.getElementById('uitleg').innerHTML = 'Je gaat voor je verjaardag met wat vrienden op vakantie naar de Amazone van Zuid-Amerika. Klik op de knop om op reis te gaan!'
document.getElementById('option2').style.visibility = 'hidden';
document.getElementById('option3').style.visibility = 'hidden';



// jquery variant
//$('#option1').html('Dit is keuze 1');
var HasObject = false;

// https://www.youtube.com/watch?v=4ba1BqJ4S2M

function start() {
	console.log("start()");
}



function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Je besluit in de tent te blijven.';
	opt1.setAttribute("onClick", "Level1_die();");

	document.getElementById('level_title').innerHTML = 'In het bos';
	document.getElementById('level_image').src = 'img/bos.jpg';

	document.getElementById('uitleg').innerHTML = 'Jullie waren geland en er stond meteen een busje te wachten op het vliegveld. Jullie werden naar de rand van de amazone gebracht en kregen een GPS telefoon van de reisorganisatie. Jullie worden nog een stukje verder het bos in gereden en worden daar gedropt. Je besluit een kamp te gaan maken aangezien het al donker word en iedereen moe is.'
	document.getElementById('uitleg2').innerHTML = '<b>BOEM</b> Midden in de nacht hoor je een grote knal, je kijkt naast je en al je vrienden zijn weg. Wat doe je?'

	// only allow option 2 if user has a phone in his inventory

	var opt2 = document.getElementById('option2');
	document.getElementById('option2').style.visibility = 'visible';
	opt2.innerHTML = 'Je gaat naar buiten';
	opt2.setAttribute("onClick", "Level2_1();");

	var opt3 = document.getElementById('option3');
	document.getElementById('option3').style.visibility = 'visible';
	opt3.innerHTML = 'Het is niks, je slaapt verder.'
	opt3.setAttribute("onClick", "Level_sleep();");
}

function Level1_die() {
	console.log("Level1_die()");

	var opt1 = document.getElementById('option1')
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Klik om door te gaan...'
	opt1.setAttribute("onClick", "Leveldie();");

	document.getElementById('uitleg').innerHTML = 'Je hebt besloten in de tent te blijven. Je hoort buiten geritsel dat steeds dichter bij de tent komt.'
	document.getElementById('uitleg2').innerHTML = 'Het is nu naast de tent en opeens is er een grote flits....'
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option3').style.visibility = 'hidden';

}

function Leveldie() {
	console.log("Leveldie()");

	document.getElementById('uitleg').innerHTML = 'Jouw slechte keuzes hebben jou geleid tot je dood'
	document.getElementById('uitleg2').innerHTML = ''
	document.getElementById('level_title').innerHTML = 'Dead';
	document.getElementById('level_image').src = 'img/gameover.jpg';
	document.getElementById('option1').style.visibility = 'visible';
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option3').style.visibility = 'hidden';

	var opt1 = document.getElementById('option1');
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Opnieuw proberen';
	opt1.setAttribute("onClick", "location.reload();");

}

function Level2_1() {
	console.log("Level2_1()");

	document.getElementById('uitleg').innerHTML = 'Er staat een man buiten, je hoort hem wat woorden mompelen.'
	document.getElementById('uitleg2').innerHTML = 'Iets over een geheim in het bos. Wat doe je?'
	document.getElementById('level_title').innerHTML = 'In het bos';
	document.getElementById('level_image').src = 'img/manbos.jpg';

	var opt1 = document.getElementById('option1');
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Je volgt hem stiekem';
	opt1.setAttribute("onClick", "Level2_2();");

	var opt2 = document.getElementById('option2');
	document.getElementById('option2').style.visibility = 'visible';
	opt2.innerHTML = 'Je valt hem aan';
	opt2.setAttribute("onClick", "Level2_3();");

	var opt3 = document.getElementById('option3');
	document.getElementById('option3').style.visibility = 'visible';
	opt3.innerHTML = 'Je spreekt hem aan';
	opt3.setAttribute("onClick", "Level2_die();");
}

function Level2_die() {
	console.log("Level2_die()");

	document.getElementById('uitleg').innerHTML = 'Je spreekt hem aan en dan.'
	document.getElementById('uitleg2').innerHTML = 'Ziet hij je, gaat schreeuwen, rent op je af en dan...'
	document.getElementById('level_title').innerHTML = 'In het bos';
	document.getElementById('level_image').src = 'img/manbos.jpg';
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option3').style.visibility = 'hidden';

	var opt1 = document.getElementById('option1');
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Klik om door te gaan';
	opt1.setAttribute("onClick", "Leveldie();");
}

function Level2_3() {
	console.log("Level2_3()");

	document.getElementById('uitleg').innerHTML = 'Je valt hem aan maar hebt geen wapen om hem goed neer te slaan. Jullie rollen over de grond en hij krijgt de overmacht.'
	document.getElementById('uitleg2').innerHTML = 'Hij zit nu op jou je te slaan. Het word zwart voor je ogen'
	document.getElementById('level_title').innerHTML = 'In het bos';
	document.getElementById('level_image').src = 'img/manbos.jpg';
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option3').style.visibility = 'hidden';

	var opt1 = document.getElementById('option1');
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Klik om door te gaan';
	opt1.setAttribute("onClick", "Leveldie();");

}

function Level_sleep() {
	console.log("Level_sleep()");

	document.getElementById('uitleg').innerHTML = 'Je ligt verder te slapen, en opeens schiet er iets door je tent heen.'
	document.getElementById('uitleg2').innerHTML = 'Je word licht in je hoofd en merkt dat je een injectie naald in hebt gekregen. Dan word alles donker.'
	document.getElementById('level_title').innerHTML = 'In tent'
	document.getElementById('level_image').src = 'img/intent.jpg'
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option3').style.visibility = 'hidden';

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik om door te gaan';
	opt1.setAttribute("onClick", "Level2_4();");
}

function Level2_4() {
	console.log("Level2_4()");

	document.getElementById('uitleg').innerHTML = 'Je word wakker in een of andere tempel.'
	document.getElementById('uitleg2').innerHTML = 'Ergens in de tempel hoor je allemaal mensen en hele rare muziek.'
	document.getElementById('level_title').innerHTML = 'Ergens??'
	document.getElementById('level_image').src = 'img/tempel.jpg'

	var opt1 = document.getElementById('option1');
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Je gaat naar links';
	opt1.setAttribute("onClick", "Level3_1();");

	var opt2 = document.getElementById('option2');
	document.getElementById('option2').style.visibility = 'visible';
	opt2.innerHTML = 'Je gaat rechtdoor';
	opt2.setAttribute("onClick", "Level3_2();");

	var opt3 = document.getElementById('option3');
	document.getElementById('option3').style.visibility = 'visible';
	opt3.innerHTML = 'Je gaat naar rechts';
	opt3.setAttribute("onClick", "Level3_3();");
}

function Level2_2() {
	console.log("Levl2_2()");

	document.getElementById('uitleg').innerHTML = 'Je volgt hem tot dat je in een of andere tempel zit.'
	document.getElementById('uitleg2').innerHTML = 'Eenmaal daar hoor je allemaal mensen diep in de tempel en ook nog eens rare muziek. Je hebt nu 3 keuzes wat doe je?'
	document.getElementById('level_title').innerHTML = 'Ergens??'
	document.getElementById('level_image').src = 'img/tempel.jpg'

	var opt1 = document.getElementById('option1');
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Je gaat naar links';
	opt1.setAttribute("onClick", "Level3_1();");

	var opt2 = document.getElementById('option2');
	document.getElementById('option2').style.visibility = 'visible';
	opt2.innerHTML = 'Je gaat rechtdoor en volgt de man verder';
	opt2.setAttribute("onClick", "Level3_2();");

	var opt3 = document.getElementById('option3');
	document.getElementById('option3').style.visibility = 'visible';
	opt3.innerHTML = 'Je gaat naar rechts';
	opt3.setAttribute("onClick", "Level3_3();");
}

function Level3_1() {
	console.log("Level3_1()");

	document.getElementById('uitleg').innerHTML = 'Je komt in een rare kleine kamer en als je naar binnen gaat dan gaat de deur achter je dicht.'
	document.getElementById('uitleg2').innerHTML = 'De muren bewegen en je merkt dat de kamer steeds kleiner word. Je zit in een oude val!'
	document.getElementById('level_title').innerHTML = 'Ergens??'
	document.getElementById('level_image').src = 'img/Trapped.jpg'
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option3').style.visibility = 'hidden';

	var opt1 = document.getElementById('option1');
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Je wacht het maar af....';
	opt1.setAttribute("onClick", "Leveldie();");
}

function Level3_2() {
	console.log("Levl3_2()");

	document.getElementById('uitleg').innerHTML = 'Je volgt hem verder in de tempel'
	document.getElementById('uitleg2').innerHTML = 'Eenmaal daar hoor je allemaal mensen diep in de tempel en ook nog eens rare muziek. Je hebt nu 3 keuzes wat doe je?'
	document.getElementById('level_title').innerHTML = 'Ergens??'
	document.getElementById('level_image').src = 'img/tempel.jpg'

	var opt1 = document.getElementById('option1');
	document.getElementById('option1').style.visibility = 'visible';
	opt1.innerHTML = 'Je gaat naar links';
	opt1.setAttribute("onClick", "Level3_1();");

	var opt2 = document.getElementById('option2');
	document.getElementById('option2').style.visibility = 'visible';
	opt2.innerHTML = 'Je gaat rechtdoor en volgt de man verder';
	opt2.setAttribute("onClick", "Level3_2();");

	var opt3 = document.getElementById('option3');
	document.getElementById('option3').style.visibility = 'visible';
	opt3.innerHTML = 'Je gaat naar rechts';
	opt3.setAttribute("onClick", "Level3_3();");
}

function Level3_4() {
	console.log("Level3_4()");

	document.getElementById('uitleg').innerHTML = ''
}