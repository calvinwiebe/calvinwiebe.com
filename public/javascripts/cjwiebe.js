/**
 * @author pg
 */

var application = function(){
	var that = {};
	var selectedPage = null;
	that.setSelectedPage = function(link){
		selectedPage = link;
	}
	that.highlightSelectedPage = function(){
		var portfolio = document.getElementById("portfolio-items");
		var links = portfolio.getElementsByTagName("li");
		for(i = 0; i < links.length; i++){
			var a = links[i].getElementsByTagName("a")[0];
			a.setAttribute("style", "color: white");
		}
		selectedPage.setAttribute("style", "color: gray");
	}
	that.start = function(){
		//add some click handlers to the portfolio links
		var p = document.getElementById("portfolio-items");
		var l = p.getElementsByTagName("li");
		for(i = 0; i < l.length; i++){
			l[i].onclick = function(){
				//add some click handlers to the portfolio links
				var portfolio = document.getElementById("portfolio-items");
				var links = portfolio.getElementsByTagName("li");
				for(i = 0; i < l.length; i++){
					var a = links[i].getElementsByTagName("a")[0];
					a.setAttribute("style", "color: white");
				}
				var a = this.getElementsByTagName("a")[0];
				a.setAttribute("style", "color: gray");
				app.setSelectedPage(a);
			}
			l[i].onmouseover = function(){
				//add some click handlers to the portfolio links
				var portfolio = document.getElementById("portfolio-items");
				var links = portfolio.getElementsByTagName("li");
				for(i = 0; i < l.length; i++){
					var a = links[i].getElementsByTagName("a")[0];
					a.setAttribute("style", "color: white");
				}
				var a = this.getElementsByTagName("a")[0];
				a.setAttribute("style", "color: gray");
			}
			l[i].onmouseout = function(){
				app.highlightSelectedPage();
			}
			
		}
	};
	return that;
}

//globals
var app;

//main function to kick off all the apps
window.onload = function(){
	console.log("hey");
	var canvas = document.getElementById("intro-canvas");
	if (canvas)
	{
		var context = canvas.getContext("2d");
		var introApp = intro({ waver: waver({canvas: canvas, context: context})});
		introApp.start();
	}
	app = application();
	app.start();
}

