let currentProgress = 0;

function init() {
	setProgressBar(currentProgress);
} //запускается при загрузке



$('#1').click(function(event) {
	changeProgress(1);
});

$('#3').click(function(event) {
	changeProgress(3)
});

$('#7').click(function(event) {
	changeProgress(7);
}); //при клике на кнопки меняется значения progress-bar



function changeProgress(increase) {
	currentProgress += increase; 
	if (currentProgress > 100) {
		setProgressBar(100);
	}  // не дает больше 100% писать
	else {
		setProgressBar(currentProgress);
	}
}

function setProgressBar(number) {
	$('.progress-bar').css('width', number + '%').text(number + '%');
}
// выставляем новые значения прогресс-бара и пишем текст внутри прогресс-бара


$(document).ready(init);



