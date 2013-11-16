var blokkButton = '<button id="blokk-button">blokk</button> <button id="border-button">border</button>';
document.getElementById('tools').innerHTML += blokkButton;

document.getElementById('blokk-button').onclick = function(){
	blokkAll();
}
document.getElementById('border-button').onclick = function(){
	borderAll();
}
document.querySelector("[href='#explanation']").onclick = function() {
	document.getElementById('explanation').className = 'is-active';
	document.getElementById('explanation').focus();
	return false;
}
document.querySelector("[href='#top']").onclick = function() {
	document.getElementById('explanation').className = '';
	document.querySelector("[href='#explanation']").focus();
	return false;
}
function blokkAll(){
	if (document.body.className.indexOf('blokk') < 0) {
		var pargs = document.querySelectorAll('.marginal-note, p, h1, h2'),
			i = 0,
			j = 0,
			withSpans = '';
		while (i < pargs.length) {
			j = 0;
			pText = pargs[i].textContent;
			pWords = pText.split(' ');
			while( j < pWords.length ) {
				withSpans += '<span>' + pWords[j] + '</span> ';
				j++;
			}
			pargs[i].innerHTML = withSpans;
			withSpans = '';
			document.body.className += (' blokk');
			i++;
		}
	}
	else {
		document.body.className = '';
	}
}
function borderAll() {
	if (document.getElementById('borderCSS') > -1) {
		var borderStylesheet = '<link rel="stylesheet" id="borderCSS" href="/blokk/border.css">';
		document.querySelector('head').innerHTML += borderStylesheet;
	}
	else {
		var olddiv = document.getElementById('borderCSS');
		document.querySelector('head').removeChild(olddiv);
	}
}

function showCaption(){
	if ( document.querySelector('.explanation') !== null) {
		document.querySelector('.explanation').className = 'has-explanation';
	}
	else {
		document.querySelector('.has-explanation').className = 'explanation';
	}
}
