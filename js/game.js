var level = 1;     // Level counter  
var levelShow = 1;
var GameTime = 60; // 60 sec for game

var Timer              // Timer --
var LevelTimer = null; // LevelTimer
var FirstLevelTimer = null;

var LevelConfig = [];

// Questions
var Questions = [];
Questions[0] = 'H<sub>2</sub>O';
Questions[1] = 'NaCl';
Questions[2] = 'CaO';
Questions[3] = 'NaOH';
Questions[4] = 'C<sub>6</sub>H<sub>6</sub>';
Questions[5] = 'CO<sub>2</sub>';
Questions[6] = '2Ag<sub>2</sub>O';
Questions[7] = 'CaCO<sub>3</sub>';
Questions[8] = 'Na<sub>2</sub>CO<sub>3</sub>';
Questions[9] = 'NH<sub>4</sub>HCO<sub>3</sub>';
Questions[10] = 'FeSO<sub>4</sub>';
Questions[11] = 'CaSiO<sub>3</sub>';
Questions[12] = 'AgNO<sub>3</sub>';
Questions[13] = 'Mn<sub>2</sub>O<sub>7</sub>';
Questions[14] = 'Pb<sub>3</sub>O<sub>4</sub>';
Questions[15] = 'Na<sub>2</sub>CO<sub>3</sub>';
Questions[16] = 'CaCO<sub>3</sub>';
Questions[17] = '2Ag<sub>2</sub>O';
Questions[18] = 'NaCl';
Questions[19] = 'N<sub>2</sub>O';
Questions[20] = 'N<sub>2</sub>O<sub>5</sub>';


fakeSym = [];

fakeSym[0] = 'ю';
fakeSym[1] = 'Я';
fakeSym[2] = 'ж';
fakeSym[3] = 'Щ';



var AnswerNum; // Answer number



LevelConfig[1] = {
	Xcount: 2,    // horizontal cells
	Ycount: 2,    // vertical cells
	Qmin  : 0,    // Question array min
	Qmax  : 20,   // Question array max
	Amin  : 0,    // Answer array min
	Amax  : 20,   // Answer array max
	sort  : false // Change questions
}

LevelConfig[2] = {
	Xcount: 3,
	Ycount: 2,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[3] = {
	Xcount: 3,
	Ycount: 3,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[4] = {
	Xcount: 4,
	Ycount: 3,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[5] = {
	Xcount: 4,
	Ycount: 4,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[6] = {
	Xcount: 5,
	Ycount: 5,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[7] = {
	Xcount: 6,
	Ycount: 6,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[8] = {
	Xcount: 7,
	Ycount: 7,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[9] = {
	Xcount: 8,
	Ycount: 8,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[10] = {
	Xcount: 9,
	Ycount: 9,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[11] = {
	Xcount: 10,
	Ycount: 10,
	Qmin  : 0,
	Qmax  : 20,
	Amin  : 0,
	Amax  : 20,
	sort  : false
}

LevelConfig[12] = {
	Xcount  : 10,
	Ycount  : 10,
	Qmin    : 0,
	Qmax    : 20,
	Amin    : 0,
	Amax    : 20,
	sort    : true,
	sorttime: 10
}

LevelConfig[13] = {
	Xcount  : 10,
	Ycount  : 10,
	Qmin    : 0,
	Qmax    : 20,
	Amin    : 0,
	Amax    : 20,
	sort    : true,
	sorttime: 9
}

LevelConfig[14] = {
	Xcount  : 10,
	Ycount  : 10,
	Qmin    : 0,
	Qmax    : 20,
	Amin    : 0,
	Amax    : 20,
	sort    : true,
	sorttime: 8
}

LevelConfig[15] = {
	Xcount  : 10,
	Ycount  : 10,
	Qmin    : 0,
	Qmax    : 20,
	Amin    : 0,
	Amax    : 20,
	sort    : true,
	sorttime: 7
}

LevelConfig[16] = {
	Xcount  : 10,
	Ycount  : 10,
	Qmin    : 0,
	Qmax    : 20,
	Amin    : 0,
	Amax    : 20,
	sort    : true,
	sorttime: 6
}

LevelConfig[17] = {
	Xcount  : 10,
	Ycount  : 10,
	Qmin    : 0,
	Qmax    : 20,
	Amin    : 0,
	Amax    : 20,
	sort    : true,
	sorttime: 5
}


// Generating random integer in range
function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

// Insert function
String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

// Get random question in range 
function getQuestion() {
	var array = Questions.slice(LevelConfig[level].Qmin, LevelConfig[level].Qmax);
	var arrayCount = LevelConfig[level].Xcount * LevelConfig[level].Ycount;
	var newArray = [];
	for (i = 1; i <= arrayCount; i++) {
		var num = getRandom(0, array.length-1); 
		newArray.push( array[num] );
	}
	var num = getRandom(0, newArray.length-1);

	var thisAnswer = Questions[getRandom(LevelConfig[level].Amin, LevelConfig[level].Amax)];
	thisAnswer = thisAnswer.replace(/<sub>/g, '*');
	thisAnswer = thisAnswer.replace(/<\/sub>/g, '&');
	thisAnswer = thisAnswer.insert(getRandom(0, thisAnswer.length-1), fakeSym[getRandom(0, fakeSym.length-1)]); 
	thisAnswer = thisAnswer.replace(/\*/g, '<sub>');
	thisAnswer = thisAnswer.replace(/&/g, '</sub>');
	newArray[num] = thisAnswer;

	return [newArray, num]; 
}

function ShowWindow(text) {
	$('.popup .content').html(text);
	$('.popup').css('z-index', '100').animate({'opacity': '1'}, 2000);
}

var score = 0;
function UpdateScore() {
	score = score + (level * 20);
	$('.score span').text(score);
}

function getLevelQuestion() { 
	var oldArray = [], newArray = [];
	$('.table .cell').each(function() {
		if ($(this).hasClass('life')) {
			oldArray.push($(this).attr('data-question'));
		} else {
			oldArray.push($(this).html());
		}
	})

	var Answer = oldArray[AnswerNum-1];
	var arrayCount = oldArray.length;

	for (i = 0; i <= arrayCount; i++) {
		var num = getRandom(0, oldArray.length-1); 
		newArray.push( oldArray[num] );
		if (oldArray[num] == Answer) AnswerNum = i;
		oldArray.splice(num, 1);
	}

	AnswerNum++;

	$('.table .cell').each(function(index) {
		$(this).html(newArray[index]);
	});

}

var TimeNow = GameTime;       // Timer;

function PrettyTime() {
	var minutes = Math.floor(TimeNow / 60);
	var seconds = TimeNow - minutes * 60; 
	var PrettyTime = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
	$('.time').text(PrettyTime);
}

function counterdownTimer() {
	TimeNow--;
	if (TimeNow < 0) {
		clearInterval(Timer);
		$('.twitter').attr('href', 'http://twitter.com/share?text=I scored ' + $('.score span').text() + '&url=http://nickbrit.github.io/sciencerio/&hashtags=')
		ShowWindow('<h4>Game Over</h4>Your score: ' + $('.score span').text());
	} else {
		PrettyTime();
	}
}

function BuildBricks() {
	if (FirstLevelTimer != null) {
		clearInterval(LevelTimer);
		clearTimeout(FirstLevelTimer);
		FirstLevelTimer = null;
		LevelTimer = null;
	}

	var Xcount = LevelConfig[level].Xcount;
	var Ycount = LevelConfig[level].Ycount;
	var BrickWidth = 100/Xcount;
	var BrickHeight = 500/100*BrickWidth;
	var Table = '';

	var thisQuestion = getQuestion();
	var thisQ = thisQuestion[0];
	AnswerNum = thisQuestion[1] + 1;

	var count = 1;
	for (i = 1; i <= Ycount; i++) {
		Table += '<div class="row">';
		for (j = 1; j <= Xcount; j++) {
			var life = Math.floor(Math.random()*2001);
			if (life == 96) {
				Table += '<div class="cell life" data-number="' + count + '" style="width: ' + BrickWidth + '%; height: ' + BrickHeight + 'px; line-height: ' + BrickHeight + 'px;" data-question="' + thisQ[count-1] + '"><img src="img/life.svg" alt=""></div>';
			} else {
				Table += '<div class="cell" data-number="' + count + '" style="width: ' + BrickWidth + '%; height: ' + BrickHeight + 'px; line-height: ' + BrickHeight + 'px;">' + thisQ[count-1] + '</div>';
			}
			count++
		}
		Table += '</div>';
	}
	$('.table').html(Table);

	if (LevelConfig[level].sort) { 
		FirstLevelTimer = setTimeout(function() {
			LevelTimer = setInterval(getLevelQuestion, LevelConfig[level].sorttime * 1000)
		}, LevelConfig[level].sorttime * 1000);
	}
}


$(document).ready(function() {

	PrettyTime();

	//Start timer
	Timer = setInterval(counterdownTimer, 1000);

	BuildBricks();

	$('.table').on('click', '.life', function(e) {
		e.stopImmediatePropagation();
		TimeNow += 60;
		$(this).html($(this).attr('data-question')).removeClass('life');
	})

	$('.table').on('click', '.cell', function() {
		var num = parseInt($(this).attr('data-number'));
		if (num == AnswerNum) {
	 		UpdateScore();
	 		if (level < 17) level ++;
	 		levelShow++;
	 		$('.score .title').text('Level ' + levelShow);
			BuildBricks();
		} else {
			var error = $('<div class="error"></div>');
			$(this).append(error);
			error.animate({
			    'opacity': '1'
				},
				{
				     duration: 100,
				     complete: function(){
				        error.animate({
						    'opacity': '0'
							},
							{
							     duration: 100,
							     complete: function(){
							        error.remove();
							}
						});
				}
			});

		}
	})

	$('.load-game').click(function(e) {
		e.preventDefault();
		level = 1;       
		TimeNow = GameTime; 

		clearInterval(Timer);
		clearInterval(LevelTimer);
		clearTimeout(FirstLevelTimer);

		Timer = null;            
		LevelTimer = null;
		FirstLevelTimer = null;
		AnswerNum = 0;
		score = 0;

		$('.score span').text(score);

		levelShow = 1;
		$('.score .title').text('Level ' + levelShow);

		PrettyTime();

		Timer = setInterval(counterdownTimer, 1000);

		BuildBricks();

		$('.popup').css({'opacity': 0, 'z-index': ''});

	})


})