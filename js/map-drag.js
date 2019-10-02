// Увеличение/уменьшение карты по клику на кнопку

let map = document.getElementById('map');
let buttonPlus = document.getElementById('plus');
let buttonMinus = document.getElementById('minus');
let marker = document.getElementsByClassName('country-marker');
let outer = document.querySelector('.outer');

let zoom = 1;
let m;

buttonPlus.onclick = function (event) {
	if (zoom < 1) zoom = 1;
	zoom += 1;
	m = 1 / zoom;
	if (zoom < 10) {
		map.style.transform = 'scale('+ zoom +')';

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
  console.log(zoom);
buttonMinus.onclick = function (event) {
	zoom -= 1;
	// if (zoom <=1) return;
	if (zoom <=1) {
		map.style.top = '0px';
		map.style.left = '0px';
		map.style.transform = 'scale(1)';
		// map.style.transform = 'translateX(0px) translateY(0px)';
	  return false;
}
	m = 1 / zoom;
	map.style.transform = 'scale(' + zoom + ')';

	for ( let i = 0; i < marker.length; i++ ){
		let dsc = marker[i].querySelector('.description');

		marker[i].onmouseenter = function(event) {
			dsc.style.transform = 'scale('+ m +')';
		}
		marker[i].onmouseleave = function () {
			dsc.style.transform = 'scale(0)';
		}
	}
  return zoom;
}

// Drag’n’Drop
/* Базовый алгоритм Drag’n’Drop выглядит так:
При mousedown – готовим элемент к перемещению, если необходимо (например, создаём его копию).
Затем при mousemove передвигаем элемент на новые координаты путём смены left/top и position:absolute.
При mouseup – остановить перенос элемента и произвести все действия, связанные с окончанием Drag’n’Drop.*/

let wrapper = document.querySelector('.outer');

map.onmousedown = function(event) {
  // document.removeEventListener('mousemove', onMouseMove);

  let shiftX = event.clientX - map.getBoundingClientRect().left;
  let shiftY = event.pageY - map.getBoundingClientRect().top;

  // координаты родительского блока:
  let wrapperLeft = wrapper.getBoundingClientRect().left;
  let wrapperTop = wrapper.getBoundingClientRect().top;
  const wrapperWidth = wrapper.getBoundingClientRect().width;
  const wrapperHeight = wrapper.getBoundingClientRect().height;

  map.style.position = 'absolute';
  map.style.cursor = 'move';
  let mapMarginTop = -50;
  // console.log(mapMarginTop);
  //document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  // переносит карту на координаты (pageX, pageY),
  // дополнительно учитывая изначальный сдвиг относительно указателя мыши
  // движение относительно родителя (за его пределами внутренний блок невидим, т.к. задано overflow: hidden;)
  function moveAt(pageX, pageY) {
    map.style.left = pageX - shiftX - wrapperLeft + 'px';
    map.style.top = pageY - shiftY - wrapperTop - mapMarginTop + 'px';
    console.log(map.style.top);
    console.log(wrapperTop);
    console.log(shiftY);
    console.log(pageYOffset);
    console.log(event.clientY);

    return map.style.left,map.style.top;
  }

  function onMouseMove(event) {
    // if (map.style.transform == 'scale(1)') return false;
    //не позволяем точке события (курсор и точка карты, где он нажат) выйти за пределы родителя
    if(parseInt(map.style.left) + shiftX > 0
    && parseInt(map.style.left) + shiftX < wrapperWidth
    && parseInt(map.style.top) + mapMarginTop + shiftY > 0 &&parseInt(map.style.top) + mapMarginTop + shiftY < wrapperHeight) {
      moveAt(event.pageX, event.pageY);
    }
    else {
      // отвязываем мышь от точки карты, с которой "ушли за горизонт"
        document.removeEventListener('mousemove', onMouseMove);
        return false;
    }

  }

  // передвигаем карту при событии mousemove
  document.addEventListener('mousemove', onMouseMove);

  // отпустить мышь, удалить ненужные обработчики
  map.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    map.onmouseup = null;
  };

};
  // отключаем встроенный в браузер Drag’n’Drop
map.ondragstart = function() {
  return false;
};
