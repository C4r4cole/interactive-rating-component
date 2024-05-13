const btn = document.getElementById('btn');
const thankU = document.getElementById('thankUstate');
const rate = document.getElementById('ratingState');

const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const score3 = document.getElementById('score3');
const score4 = document.getElementById('score4');
const score5 = document.getElementById('score5');

const yourScore = document.getElementById('yourScore');

function isRadioBtnChecked() {
	if (score1.checked) {
		yourScore.textContent = '1';
	}

	if (score2.checked) {
		yourScore.textContent = '2';
	}

	if (score3.checked) {
		yourScore.textContent = '3';
	}

	if (score4.checked) {
		yourScore.textContent = '4';
	}

	if (score5.checked) {
		yourScore.textContent = '5';
	}
}

btn.addEventListener(
	'click',
	() => {
		rate.hidden = true;
		thankU.hidden = false;
		isRadioBtnChecked();
	},
	false
);
