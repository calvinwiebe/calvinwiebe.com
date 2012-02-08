/**
 * @author pg
 */

var application = function(){
	var onhoverColor = "black";
	var offhoverColor = "#a5abb2";
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
			a.setAttribute("style", "color: " + offhoverColor);
		}
		if(selectedPage){
			selectedPage.setAttribute("style", "color: " + onhoverColor);
		}
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
					a.setAttribute("style", "color: " + offhoverColor);
				}
				var a = this.getElementsByTagName("a")[0];
				a.setAttribute("style", "color:" + onhoverColor);
				app.setSelectedPage(a);
				
				//html5: add a history state to correctly use
				//the back, forward and refresh buttons with AJAX
				window.history.pushState({}, a.innerHTML, a.innerHTML);
			}
			l[i].onmouseover = function(){
				//add some click handlers to the portfolio links
				var portfolio = document.getElementById("portfolio-items");
				var links = portfolio.getElementsByTagName("li");
				for(i = 0; i < l.length; i++){
					var a = links[i].getElementsByTagName("a")[0];
					a.setAttribute("style", "color: " + offhoverColor);
				}
				var a = this.getElementsByTagName("a")[0];
				a.setAttribute("style", "color: " + onhoverColor);
			}
			l[i].onmouseout = function(){
				app.highlightSelectedPage();
			}
			
		}
	};
	return that;
}

var experience = function(){
	var that = {};
	that.start = function(){
		$$(".experience").first().addClassName("experience-current");
	};
	return that;	
}

//globals
var app;
//main function to kick off all the apps
window.onload = function(){
	//if on the intro page, run the intro js
	var canvas = document.getElementById("intro-canvas");
	if (canvas)
	{
		var context = canvas.getContext("2d");
		var introApp = intro({ waver: waver({canvas: canvas, context: context})});
		introApp.start();
	}
	//run the main application js
	app = application();
	app.start();
}

