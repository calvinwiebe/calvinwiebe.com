//(x,y) of circle with radius,angle and x,y center = (x + radius*Math.cos(angle),y + radius*Math.sin(angle)) 
	
function Toast(x,y,s,speed){

	this.startx = x;
	this.starty = y; 
	this.s = s;
	this.speed = speed;
	this.fillStyle = "#f5deb3";
	this.clearS = this.s*1.5;
	this.draw = function(context){
		context.beginPath();
		//starts top left of crust
		context.moveTo(this.startx,this.starty);
		var x1 = this.startx;
		var y1 = this.starty;
		var x2 = x1 - 35*this.s;
		var y2 = y1 - 15*this.s;
		var endx = x1 + 20*this.s;
		var endy = y1 - 40*this.s;
		context.bezierCurveTo(x1,y1,x2,y2,endx,endy);
		//curve to top right of crust
		x1 = endx;
		y1 = endy;
		x2 = x1 + 60*this.s;
		y2 = y1 - 18*this.s;
		endx = x1 + 40*this.s;
		endy = y1 + 30*this.s;
		context.bezierCurveTo(x1,y1,x2,y2,endx,endy);
		//bottom right
		x1 = endx;
		y1 = endy;
		x2 = x1 + 10*this.s;
		y2 = y1 + 10*this.s;
		endx = x1 + 15*this.s;
		endy = y1 + 40*this.s;
		context.bezierCurveTo(x1,y1,x2,y2,endx,endy);
		//bottom middle
		x1 = endx;
		y1 = endy;
		x2 = x1 - 10*this.s;
		y2 = y1 + 10*this.s;
		endx = x1 - 50*this.s;
		endy = y1 + 20*this.s;
		context.bezierCurveTo(x1,y1,x2,y2,endx,endy);
		//bottom left
		x1 = endx;
		y1 = endy;
		x2 = x1 - 10*this.s;
		y2 = y1 + 2*this.s;
		endx = x1 - 15*this.s;
		endy = y1;
		context.bezierCurveTo(x1,y1,x2,y2,endx,endy);
		//back to start(top left)
		x1 = endx;
		y1 = endy;
		x2 = x1 - 10*this.s;
		y2 = y1 - 3*this.s;
		endx = this.startx;
		endy = this.starty;
		context.bezierCurveTo(x1,y1,x2,y2,endx,endy); 
		context.fillStyle = this.fillStyle;
		context.fill();
		context.strokeStyle = "black";
		context.lineWidth = 2;
		context.stroke(); 
		this.starty = this.starty + this.speed;
	};
}

function DroppingToast(x,y,s,speed){
	this.toast = new Toast(x,y,s,speed);
	this.toast.gravity = .2;
	this.toast.fillStyle = "#8b4513";
	console.log(this);
	this.draw = function(){
		this.toast.draw(application.context);
		this.toast.speed = this.toast.speed + this.toast.gravity;
	}
}

function Toaster(){

	this.toasts;
	this.init = function(){
		this.toasts = [];
		for(var i = 0;i < NUMBER_OF_TOASTS; i++){
			this.add();
		}
		setInterval('application.toaster.drawToasts()',5);
	}
	this.add = function(x,y,s){
			var x,y,s;
			if(!x) x = Math.random()*1900;
			if(!y) y = Math.random()*1000;
			if(!s) s = Math.random()*.8;
			var sizeRatio = Math.random()*1.2;
			var toast = new Toast(x,y,sizeRatio,s);
			this.toasts.push(toast);
	}	
	this.addDropping = function(x,y,s){
			var x,y,s;
			if(!x) x = Math.random()*1900;
			if(!y) y = Math.random()*1000;
			s = .01;
			var sizeRatio = Math.random()*1.2;
			var toast = new DroppingToast(x,y,sizeRatio,s);
			this.toasts.push(toast);
			toast.draw();
	}	
	this.drawToasts = function(){
		application.context.clear();
		for(var i = 0;i < this.toasts.length; i++){
			if(this.toasts[i].starty > 1100){
				this.toasts[i].starty = -50;
			}
			this.toasts[i].draw(application.context);
		}
	}
}
	

function Application(){

	this.canvas;
	this.context;
	this.toaster;

	this.begin = function(){
		this.canvas = document.getElementById("a");
		this.canvas.marginLeft = -10;
		this.context = this.canvas.getContext("2d");
		this.context.clear = function(){ this.clearRect(0,0,2000,2000); };
		this.toaster = new Toaster();
		this.toaster.init();
		window.onmousedown = function(e){
			x = e.pageX;
			y = e.pageY;
			s = Math.random()+2+(Math.random()*3);
			console.log(s);
			application.toaster.addDropping(x,y,s);
		}
	};


}

var NUMBER_OF_TOASTS = 30;
var application;
window.onload = function(){
	application = new Application();
	application.begin();
}