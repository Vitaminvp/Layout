var btn = document.createElement('input');
btn.type = "button";
btn.value = "Открыть";
btn.classList.add('btn', 'btn-default');
btn.style.display = 'block';
btn.style.margin = '50px auto';

document.body.appendChild(btn);

btn.addEventListener("click", function () {
	myModal();
}, false);


function myModal2() {
	timerStop();
	var divMod2 = document.createElement("div");
	divMod2.className = "modWrap";
	var divCont2 = document.createElement("div");
	divCont2.className = "modCont";
	var spanMod2 = document.createElement("span");
	spanMod2.className = "close";
	spanMod2.innerHTML = "&times";
	divCont2.innerHTML = ";)";
	divCont2.appendChild(spanMod2);
	divMod2.appendChild(divCont2);
	document.body.appendChild(divMod2);
	spanMod2.onclick = function () {
		divMod2.remove()
	};
	window.onclick = function (event) {
		if (event.target == divMod2) divMod2.remove();
	};
}

function myModal() {
	var divMod = document.createElement("div");
	divMod.className = "modWrap";
	var divCont = document.createElement("div");
	divCont.className = "modCont";
	var spanMod = document.createElement("span");
	spanMod.className = "close";
	spanMod.innerHTML = "&times";
	divCont.appendChild(spanMod);

	Timer.createWrapper(divCont);
	Timer.createTimeTable(divCont);
	Timer.createButtons(divCont);

	divMod.appendChild(divCont);
	document.body.appendChild(divMod);
	spanMod.onclick = function () {
		divMod.remove()
	};
	window.onclick = function (event) {
		if (event.target == divMod) divMod.remove();
	};
}

var Timer = {

	createWrapper(divCont) {
		var div = divCont;
		div.classList.add('wrapper');
		div.style.margin = '50px auto';
		div.style.padding = '100px';
		div.style.textAlign = 'center';
		div.style.width = '400px';
	},

	createTimeTable(divCont) {
		timeTable = document.createElement('p');
		timeTable.id = 'timeTable';
		timeTable.classList.add('btn', 'btn-default');
		timeTable.style.display = 'block';
		timeTable.style.marginBottom = '5px';
		timeTable.innerHTML = '00 : 00 : 00 <span style="color:red; font-size:smaller">: 000</span>';
		divCont.appendChild(timeTable);
	},

	createButtons(divCont) {
		buttonsWrp = document.createElement('div');
		divCont.appendChild(buttonsWrp);
		var startBtn = document.createElement('button');
		startBtn.type = 'button';
		startBtn.style.marginRight = '3px';
		startBtn.style.width = '80px';
		startBtn.classList.add('btn', 'btn-default');
		startBtn.innerHTML = 'Открыть';
		startBtn.id = 'Start';
		startBtn.addEventListener("click", myModal2);
		buttonsWrp.appendChild(startBtn);
		timerStart();
	}
}

function setNullsBefore(m, n) {
	var m = String(m);
	while (m.length < n) {
		m = "0" + m;
	}
	return m;
}

function timerStart() {


	startTime = 120000;       // Время задаеться здесь, в милисекундах.


	timerTime = setInterval(
		function () {
			ms = startTime - 10;
			startTime = ms;
			if (ms <= 0) {
				myModal2();
			}
			s = Math.floor(ms / 1000);
			min = Math.floor(s / 60);
			h = Math.floor(min / 60);
			timeTable.innerHTML = setNullsBefore(h % 24, 2) + ' : ' + setNullsBefore(min % 60, 2) + ' : ' + setNullsBefore(s % 60, 2) + ' <span style="color:red; font-size:smaller">: ' + setNullsBefore(ms % 1000, 3) + '</span>';
		}, 10);
}

function timerStop() {
	clearInterval(timerTime);
	timeTable.innerHTML = '00 : 00 : 00 <span style="color:red; font-size:smaller">: 000</span>';

}
