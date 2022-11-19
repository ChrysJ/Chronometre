const btnStart = document.getElementById('btn-start');
const btnReset = document.getElementById('btn-reset');
const btnTimeout = document.querySelector('.btn-timeout');
const reset = document.querySelector('.reset');
const displayMins = document.getElementById('display-mins');
const displaySeconds = document.getElementById('display-seconds');
const displayHours = document.getElementById('display-hours');

let totalSeconds = 0;
let min = 0;
const minutes = Math.floor(totalSeconds / 60);
let clearTimer;
let noAddTimer = true;

// ----------------------------------------------------------Timer

btnStart.addEventListener('click', () => {
	btnTimeout.classList.add('transform-timeout');
	reset.classList.add('resetshow');
	clearTimer = false;
	const addseconds = () => {
		noAddTimer = false;
		setInterval((timeout) => {
			if (totalSeconds == 60) {
				min++;
				totalSeconds = 0;
				totalSeconds < 10 ? displaySeconds.textContent = `0${totalSeconds}` : displaySeconds.textContent = `${totalSeconds}`;
				minutes < 10 ? displayMins.textContent = `0${min}` : displayMins.textContent = `${min}`;
			}
			
			else if (clearTimer === true) {
				clearInterval(timeout);
			} else {
				totalSeconds++;
				totalSeconds < 10 ? displaySeconds.textContent = `0${totalSeconds}` : displaySeconds.textContent = `${totalSeconds}`;
			}
		}, 1000);
	};
	if (noAddTimer === true) {
		addseconds();
	}
});

// ----------------------------------------------------------TimeOut

btnTimeout.addEventListener('click', () => {
	btnTimeout.classList.remove('transform-timeout');
	const timenot = () => {
		clearTimer = true;
	};
	timenot();
});

// ----------------------------------------------------------Reset

reset.addEventListener('click', () => {
	
	btnTimeout.classList.remove('transform-timeout');
	reset.classList.remove('resetshow');
	const rezet = () => {
		clearTimer = true;
		min = 0;
		totalSeconds = 0;
		displayMins.textContent = `0${min}`;
		displaySeconds.textContent = `0${totalSeconds}`;
	};
	rezet();
});

// ----------------------------------------------------------Heure Local

const localhours = () => {
	let now = new Date();
	let heure = ('0' + now.getHours()).slice(-2);
	let minute = ('0' + now.getMinutes()).slice(-2);
	displayHours.textContent = `${heure} : ${minute}`;
};
localhours();