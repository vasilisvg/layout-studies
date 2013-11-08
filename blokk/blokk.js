var blokkButton = '<button id="blokk-button">blokk</button>';
document.body.innerHTML += blokkButton;

document.getElementById('blokk-button').onclick = function(){
	blokkAll();
}

function blokkAll(){
	if (document.body.className.indexOf('blokk') < 0) {
		var pargs = document.querySelectorAll('p, h1'),
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