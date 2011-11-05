var application = function(spec){
	var that = {};
	that.start = function(){
		spec.waver.draw();
	};
	return that;
};

var waver = function(spec){
	var that = {};
	that.getContext = function(){
		return spec.context;
	}
	that.draw = function(){
		var context = spec.context;
		//draw head
		context.beginPath();
		context.moveTo(80,40);
		context.bezierCurveTo(150,50,100,135,55,130);
		context.bezierCurveTo(10,125,15,40,80,40);
		context.fillStyle = "#B5D1EA";
		context.fill();
		context.fillStyle = "black";
		//draw eyes
		context.fillRect(60,60,3,3);
		context.fillRect(90,65,3,3);
		//draw mouth
		context.moveTo(40,80);
		context.bezierCurveTo(30,120,50,110,80,100);
		context.strokeStyle = "black";
		context.lineWidth = 3;
		context.stroke(); 
		//draw text
		context.font = "40px serif";
		//context.fillText("\"", 143, 65);
		context.font = "25px sans-serif";
		context.fillText("Ohai! thanks for checkin'", 165, 60);
		context.fillText("me out!", 165, 100);
		context.font = "40px serif";
		//context.fillText("\"", 288 , 105);
		var openQuoteImg = new Image(); 
		var closeQuoteImg = new Image();
		openQuoteImg.onload = function(){  
	    	context.drawImage(openQuoteImg,140,35);    
	    };  
	    closeQuoteImg.onload = function(){  
	    	context.drawImage(closeQuoteImg,255,78);    
	    };  
	    openQuoteImg.src = 'http://localhost:3000/images/open_quote.gif'; 
	    closeQuoteImg.src = 'http://localhost:3000/images/close_quote.gif';
	};
	return that;
}

window.onload = function(){
	http://i822.photobucket.com/albums/zz147/sbj1811/open-quote.gif
	var canvas = document.getElementById("intro-canvas");
	var context = canvas.getContext("2d");
	var app = application({ waver: waver({canvas: canvas, context: context})});
	app.start();
}
