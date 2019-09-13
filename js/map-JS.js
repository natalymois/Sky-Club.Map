let map = document.getElementById('map');
let buttonPlus = document.getElementById('plus');
let buttonMinus = document.getElementById('minus');
let marker = document.getElementsByClassName('country-marker');

let zoom = 1;
let m;

buttonPlus.onclick = function (event) {
	zoom += 1;
	m = 1 / zoom;
	if (zoom < 10) {
		map.style.transform = 'scale('+ zoom +') translateX(-100px) translateY(-100px)';

		for ( let i = 0; i < marker.length; i++ ) {
			let dsc = marker[i].querySelector('.description');

			marker[i].onmouseenter = function(event) {
				dsc.style.transform = 'scale('+ m +')';
			}
			marker[i].onmouseleave = function () {
				dsc.style.transform = 'scale(0)';
			}
		}
	}
	return zoom;
}

buttonMinus.onclick = function (event) {
	if (zoom ==1) return;
	zoom -= 1;
	m = 1 / zoom;
	map.style.transform = 'scale(' + zoom + ') translateX(-100px) translateY(-100px)';

	for ( let i = 0; i < marker.length; i++ ){
		let dsc = marker[i].querySelector('.description');

		marker[i].onmouseenter = function(event) {
			dsc.style.transform = 'scale('+ m +')';
		}
		marker[i].onmouseleave = function () {
			dsc.style.transform = 'scale(0)';
		}
	}
	if (zoom ==1) {
		map.style.transform = 'translateX(0px) translateY(0px)';
	}
}
