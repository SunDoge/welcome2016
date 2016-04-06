var WINDOW_WIDTH = document.body.clientWidth;
var	WINDOW_HEIGHT = document.body.clientHeight;
var cxt, stars = [], STAR_COUNT = 80, maxDistance = WINDOW_WIDTH*WINDOW_WIDTH/150;
const colors = ['#F06292', '#F06292', '#BA68C8', '#64B5F6', '#4FC3F7', '#4DD0E1', '#81C784', '#FFB74D' ];

starry = function(){

	var canvas = document.getElementById('starrysky');
	var context = canvas.getContext('2d');
	canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    for(var i = 0; i < STAR_COUNT; i++){
		var star = new Star;
		stars.push(star);
	}
    setInterval(
    	function(){
    		render(context);
    	},
    	16
    	);
}

function Star()
{	
	this.color = colors[parseInt(Math.random() * colors.length)];
	this.x = parseInt(WINDOW_WIDTH * Math.random());
	this.y = parseInt(WINDOW_HEIGHT * Math.random());
	this.size = 1+2*Math.random();
	this.vx = 0.1;
	this.vy = 0.1;	
}

function distance(star1, star2)
{
	var x = star1.x - star2.x;
	var y = star1.y - star2.y;
	return x*x + y*y;
}

function line(cxt, star1, star2)
{
    cxt.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    cxt.shadowBlur = 0;
    cxt.beginPath();
    cxt.moveTo(star1.x, star1.y);
    cxt.lineTo(star2.x, star2.y);    
    cxt.stroke();
    cxt.closePath();
}

function render(cxt)
{
	cxt.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
	for(var i = 0; i < STAR_COUNT; i++){
		cxt.fillStyle = stars[i].color;
		cxt.shadowBlur = stars[i].size * 2;
		cxt.shadowColor = "#fff";
		cxt.beginPath();
		cxt.arc(stars[i].x, stars[i].y, stars[i].size, 0, Math.PI * 2);
		cxt.fill();
		cxt.closePath();
		for(var j = 0; j < STAR_COUNT; j++){
			if(distance(stars[i], stars[j]) < maxDistance){line(cxt, stars[i], stars[j]);}
		}

		stars[i].x += stars[i].vx;
		stars[i].y += stars[i].vy;

		if(stars[i].x > WINDOW_WIDTH){stars[i].x = 0;stars[i].y = Math.random() * WINDOW_HEIGHT}
		if(stars[i].y > WINDOW_HEIGHT){stars[i].y = 0;stars[i].x = Math.random() * WINDOW_WIDTH}	
	}
}

