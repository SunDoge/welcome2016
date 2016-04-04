var WINDOW_WIDTH = 800;
var	WINDOW_HEIGHT = 800;
var cxt;
var R = 100, X=200, Y=200, ball;
window.onload = function(){
	var canvas = document.getElementById('moon');
	var context = canvas.getContext('2d');
	canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    //drawStar(context, 400, 400, 18)
   
    ball = new Ball;
    setInterval(
    	function(){
    		moveBall(context);
    	},
    	50
    	);
}

/*function drawStar(cxt, x, y, deg)
{
	cxt.beginPath();
	for (var i = 0; i < 5; i++) {
		cxt.lineTo(Math.cos( (deg + i*72) / 180 * Math.PI ) * R + x, -Math.sin( (deg + i*72) / 180 * Math.PI) * R + y);
		cxt.lineTo(Math.cos( (deg + 36 + i*72) / 180 * Math.PI ) * r + x, -Math.sin( (deg + 36 + i*72) / 180 * Math.PI) * r + y);
	}
	cxt.closePath();


	cxt.fillStyle = "#fb3";
	cxt.strokeStyle = "#fd5";
	cxt.fill();
	cxt.stroke();

}*/

function drawMoon(cxt, x, y)
{	
	cxt.beginPath();
	cxt.arc(x, y, R, 0, 2*Math.PI);
	cxt.closePath();
	cxt.strokeStyle = "";
	cxt.fillStyle = "#fb3";
	cxt.fill();
	cxt.stroke();
	/*cxt.beginPath();
	cxt.arc(x-i, y-i, r, 0, 2*Math.PI);
	cxt.fillStyle = "#000000";
	cxt.closePath();
	cxt.fill();
	cxt.beginPath();
	cxt.arc()*/
}

function moveBall(cxt)
{
	cxt.globalCompositeOperation = "source-over";
    drawMoon(cxt, 200, 200);
    cxt.globalCompositeOperation = "lighter";
	cxt.beginPath();
	cxt.arc(ball.x, ball.y, R, 0, 2*Math.PI);
	cxt.fillStyle = "#000000";
	cxt.closePath();
	cxt.fill();
	ball.x += ball.vx;
	ball.y += ball.vy;
	console.log(ball);
	if((X-ball.x)>50){vx = 0; vy = 0;}
}

function Ball()
{
	this.x = X;
	this.y = Y;
	this.vx = 0.1;
	this.vy = 0.1;
}