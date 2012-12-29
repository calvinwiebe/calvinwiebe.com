/**
 * @author pg
 */

var application = function()
{
	var onhoverColor = "#484846";
	var offhoverColor = "#C4C4BB";
	var that = {};
	var selectedPage = null;
	that.loadingCircles = new LoadingCircles();
	that.loadingCircles.hide();
	that.setSelectedPage = function(link)
	{
		selectedPage = link;
	}
	that.highlightSelectedPage = function()
	{
		var portfolio = $("portfolio-items");
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
		var p = $("portfolio-items");
		var l = p.getElementsByTagName("li");
		for (i = 0; i < l.length; i++)
		{
			l[i].onclick = function()
			{
				app.loadingCircles.animate();
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
				var portfolio = $("portfolio-items");
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
			app.loadingCircles.animate();
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
				method: 'get',
				onSuccess: function() {
					app.loadingCircles.hide();	
				}
			});
			
			if (event.state)
			{
				var a = $(event.state.id);
				app.setSelectedPage(a);
				app.highlightSelectedPage();
			}
		}
		

		if (selectedPage == null)
		{
			//we have come to this page by a non AJAX request
			//set the proper selected page
			var p = $("portfolio-items");
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

var LoadingCircles = function()
{
	var that = {};
	var _self = $("loadingCircle");
	var circles = [];
	var intervals = [];
	var timeouts = [];
	var circleDoms = _self.childElements().grep(new Selector(".circle"));
	circleDoms.each(function (circle) {
		circles.push(new Circle(circle));
	}, that);
	that.animate = function()
	{
		var stagger = 400;
		var interval = 2000;
		var c = circles;
		var context = this;
		var f = function() {
			c.each(function (circle, i) {
				var t = function() {
					circle.show();
					circle.animate();
				}
				timeouts.push(setTimeout(t, stagger * i));
			}, context);
		};
		f();
		intervals.push(setInterval(f, interval));
	};
	that.hide = function()
	{
		circles.each(function (circle) {
			circle.hide();
		}, this);
		timeouts.each(function (timeout) {
			clearTimeout(timeout);
		});
		timeouts = [];
		clearInterval(intervals.pop());
	}
	return that;
}

var Circle = function(elem)
{
	var that = {};
	var _self = $(elem);
	that.animate = function()
	{
		var c = _self;
		new Effect.Opacity(c.id, {
			from: 0,
			to: 0.9,
			afterFinish: function() {
				new Effect.Opacity(c.id, {
					from: 0.9,
					to: 0	
				});
			} 
		});
	}
	that.hide = function()
	{
		_self.setStyle({
			visibility: "hidden"
		});
	}
	that.show = function()
	{
		_self.setStyle({
			visibility: "visible"
		});
	}
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
	var canvas = $("intro-canvas");
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



