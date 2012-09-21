/**
 * @author pg
 */

var application = function()
{
	var onhoverColor = "#484846";
	var offhoverColor = "#C4C4BB";
	var that = {};
	var selectedPage = null;
	that.setSelectedPage = function(link)
	{
		selectedPage = link;
	}
	that.highlightSelectedPage = function()
	{
		var portfolio = document.getElementById("portfolio-items");
		var links = portfolio.getElementsByTagName("li");
		for (i = 0; i < links.length; i++)
		{
			var a = links[i].getElementsByTagName("a")[0];
			a.setAttribute("style", "color: " + offhoverColor);
		}
		if (selectedPage)
		{
			selectedPage.setAttribute("style", "color: " + onhoverColor);
		}
	}
	that.start = function()
	{
		//add some click handlers to the portfolio links
		var p = document.getElementById("portfolio-items");
		var l = p.getElementsByTagName("li");
		for (i = 0; i < l.length; i++)
		{
			l[i].onclick = function()
			{
				var a = this.getElementsByTagName("a")[0];
				app.setSelectedPage(a);
				app.highlightSelectedPage();
				//add some AJAX push state for the back button
				var stateObj = 
				{
					id : a.id
				};
				console.log(a.href);
				history.pushState(stateObj, "", a.href);
			}
			l[i].onmouseover = function()
			{
				//add some click handlers to the portfolio links
				var portfolio = document.getElementById("portfolio-items");
				var links = portfolio.getElementsByTagName("li");
				for (i = 0; i < l.length; i++)
				{
					var a = links[i].getElementsByTagName("a")[0];
					a.setAttribute("style", "color: " + offhoverColor);
				}
				var a = this.getElementsByTagName("a")[0];
				a.setAttribute("style", "color: " + onhoverColor);
			}
			l[i].onmouseout = function()
			{
				app.highlightSelectedPage();
			}
		}
		
		//bind some window functions
		window.onpopstate = function(event)
		{
			var url;
			//when we are redirected to home, just go to about
			if (location.href == "/")
			{
				url = location.origin + "/about";
			}
			else
			{
				var url = location.href;
			}
			
			new Ajax.Request(url, {
				method: 'get'
			});
			
			console.log("onpopstate");
			
			if (event.state)
			{
				var a = document.getElementById(event.state.id);
				app.setSelectedPage(a);
				app.highlightSelectedPage();
			}
		}
		

		if (selectedPage == null)
		{
			//we have come to this page by a non AJAX request
			//set the proper selected page
			var p = document.getElementById("portfolio-items");
			var l = p.getElementsByTagName("li");
			for (i = 0; i < l.length; i++)
			{
				var a = l[i].getElementsByTagName("a")[0];
				if (a.href == location.href)
				{
					app.setSelectedPage(a);
					app.highlightSelectedPage();
				}
			}
		}
	};
	return that;
}

var experience = function()
{
	var that = {};
	that.start = function()
	{
		$$(".experience").first().addClassName("experience-current");
	};
	return that;	
}

//globals
var app;
//main function to kick off all the apps

//DEBUG
window.onunload = function(event)
{
	console.log(event);
	console.log(history);
	return "you have left";
}

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



