let proIco = document.getElementById('ico_pro');
let proItem = document.getElementById('pro');
	proItem.addEventListener("mouseenter", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   proIco.style.opacity = '1';
	});

	proItem.addEventListener("mouseout", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   proIco.style.opacity = '0';
	});

let contIco = document.getElementById('ico_contact');
let contItem = document.getElementById('contact');
	contItem.addEventListener("mouseenter", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   contIco.style.opacity = '1';
	});

	contItem.addEventListener("mouseout", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   contIco.style.opacity = '0';
	});

let techIco = document.getElementById('ico_technos');
let techItem = document.getElementById('technos');
	techItem.addEventListener("mouseenter", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   techIco.style.opacity = '1';
	});

	techItem.addEventListener("mouseout", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   techIco.style.opacity = '0';
	});

let webIco = document.getElementById('ico_web');
let webItem = document.getElementById('web');
	webItem.addEventListener("mouseenter", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   webIco.style.opacity = '1';
	});

	webItem.addEventListener("mouseout", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   webIco.style.opacity = '0';
	});

let motionIco = document.getElementById('ico_motion');
let motionItem = document.getElementById('motion');
	motionItem.addEventListener("mouseenter", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   motionIco.style.opacity = '1';
	});

	motionItem.addEventListener("mouseout", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   motionIco.style.opacity = '0';
	});

let picIco = document.getElementById('ico_pic');
let picItem = document.getElementById('pic');
	picItem.addEventListener("mouseenter", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   picIco.style.opacity = '1';
	});

	picItem.addEventListener("mouseout", function( event ) {   
	    // met en surbrillance la cible de mouseenter
	   picIco.style.opacity = '0';
	});


function load_moon_phases(obj){
	var gets=[]
	for (var i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}	
	
	var url = "http://www.icalendar37.net/lunar/api/?"+gets.join("&");
	fetch(url)
		.then(response => response.json())
		.then(json => {
			console.log(json)
			let today = new Date().getDate();
			let monthdate = new Date().getMonth();
			
			// let monnPhaseName = json.phaseName[];
			let moonPhase = json.phase[today];
			let month = json.nameMonth[monthdate];
			let phaseName = json.phaseName;
			// let moonPhase = json.phase[15];
			let moonWidget = document.getElementById('moon-widget');
			moonWidget.innerHTML = moonPhase.svg;
			let namephase = document.getElementById('name_phase');
			namephase.innerHTML = moonPhase.phaseName + "e";
			let monthWidget = document.getElementById('month');
			monthWidget.innerHTML = '<h2>' + today + '</h2>' + '<h4>' + month + '</h4>' ;
		})
}

document.addEventListener("DOMContentLoaded", function() { 
	var configMoon = {
		lang  		:'fr', // 'ca' 'de' 'en' 'es' 'fr' 'it' 'pl' 'pt' 'ru' 'zh' (*)
		month 		:new Date().getMonth(), // 1  - 12
		year  		:new Date().getFullYear(),
		size		:50, //pixels
		lightColor	:"white", //CSS color
		shadeColor	:"#111111", //CSS color
		sizeQuarter	:50, //pixels
		texturize	:true //true - false
	}
	configMoon.LDZ=new Date(configMoon.year,configMoon.month-1,1)/1000
	load_moon_phases(configMoon)
})


function getScrollPos(){
	return window.scrollY;
}
function getScrollPosSmooth(){
	return window.scrollY/6;
}

let previousScroll = 0 ;
let windowsizeY = window.innerHeight;
let documentSizeY = document.body.offsetHeight;
console.log(documentSizeY);

window.onmousemove = logMouseMoveX;

function logMouseMoveX(e) {
	let parrallax = document.getElementById('background_parallax');
	e = event || window.event;	
	mousePos = { x: e.clientY };
	


	if (getScrollPos() < windowsizeY*3.4) {
		parrallax.style.backgroundPosition = '5% -140px , 55% 320px , 60% 50px';
		
	} else if (getScrollPos() > windowsizeY*3.4) {
		parrallax.style.backgroundPosition = '15% -40px , 95% 320px , 110% 180px';
	}


}

