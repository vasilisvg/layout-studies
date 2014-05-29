/* 
var blokkButton = '<section id="viewport-list"><h1><a href="#viewport-list">Viewport size</a></h1><ul><li><button class="zoom-button">240</button></li><li><button class="zoom-button">320</button></li><li><button class="zoom-button">480</button></li><li><button class="zoom-button">600</button></li><li><button class="zoom-button">768</button></li><li><button class="zoom-button">800</button></li><li><button class="zoom-button">960</button></li><li><button class="zoom-button">1024</button></li><li><button class="zoom-button">1280</button></li><li><button class="zoom-button">1300</button></li></ul></section><div><button id="blokk-button">blokk</button></div><div><button id="border-button">border</button>';
if (document.getElementById('tools') === null) {
	var tools = '<nav id="tools"></nav>';
	document.body.innerHTML += tools;
}
document.getElementById('tools').innerHTML += blokkButton;

document.getElementById('blokk-button').onclick = function(){
	blokkAll();
}
document.getElementById('border-button').onclick = function(){
	borderAll();
}
var zoomButtons = document.querySelectorAll('.zoom-button'),
	zoomI = 0;
while (zoomI < zoomButtons.length) {
	zoomButtons[zoomI].onclick = function(){
		//console.log (  );
		zoomViewport(this.innerText);
	}
	zoomI ++;
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



function zoomViewport( nextSize ){
	var intialWidth = document.documentElement.clientWidth;

	// If the requested width is the same width that's being viewed, do nothing
	if (intialWidth == nextSize) return;

	// First reset the viewport and the tools
	document.documentElement.style.webkitTransformOrigin = '50% 0';
	document.documentElement.style.webkitTransform = 'scale(1)';
	document.getElementById('vp').setAttribute('content','width=device-width, initial-scale=1');
	var deviceWidth = document.documentElement.clientWidth;

	// Now reset the tools
	document.getElementById('tools').style.webkitTransformOrigin = '50% 50%';
	document.getElementById('tools').style.webkitTransform = 'scale(1)';

	// Resize the viewport
	document.getElementById('vp').setAttribute('content','width='+nextSize+'px');

	// Check if the width of the document element has changed
	var curWidth = document.documentElement.clientWidth;
	console.log (deviceWidth + ' - ' + intialWidth + ' - ' + curWidth);

	// If the width is smaller that the initial width:
	if (curWidth < deviceWidth) {
		scaleAmount = (curWidth/deviceWidth);
		document.documentElement.style.webkitTransformOrigin = '50% 0';
		document.documentElement.style.webkitTransform = 'scale(' + scaleAmount + ')';
	}

	//if the new width is larger than the initial width:
	else {
		scaleAmount = (curWidth/deviceWidth);
		document.getElementById('tools').style.webkitTransformOrigin = '0 0';
		document.getElementById('tools').style.webkitTransform = 'scale(' + scaleAmount + ')';
	}
}
*/

function showCaption(){
	if ( document.querySelector('.explanation') !== null) {
		document.querySelector('.explanation').className = 'has-explanation';
	}
	else {
		document.querySelector('.has-explanation').className = 'explanation';
	}
}
