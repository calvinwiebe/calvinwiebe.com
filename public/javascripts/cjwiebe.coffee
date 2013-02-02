#
# @author pg
#

window.LoadingCircles = class LoadingCircles
  constructor: ->
    @_self = ($ "loadingCircle")
    @circles = []
    @intervals = []
    @timeouts = []
    @circleDoms = @_self.childElements().grep(new Selector(".circle"))
    @circleDoms.each (circle) => @circles.push new Circle circle

  animate: ->
    stagger = 400
    interval = 2000
    context = this
    f = =>
      @circles.each (circle, i) =>
        t = =>
          circle.show()
          circle.animate()
        @timeouts.push setTimeout t, stagger * i
    f()
    @intervals.push(setInterval(f, interval))
  hide: ->
    @circles.each (circle) ->   circle.hide()
    @timeouts.each (timeout) ->  clearTimeout timeout
    @timeouts = []
    clearInterval @intervals.pop()

window.Circle = class Circle
  constructor: (elem) ->
    @_self = ($ elem)
  
  animate: ->
    new Effect.Opacity(@_self.id, {
      from: 0,
      to: 0.9,
      afterFinish: =>
        new Effect.Opacity(@_self.id, {
          from: 0.9,
          to: 0
        })
    })
  
  hide: ->
    @_self.setStyle({
      visibility: "hidden"
    })
  
  show: ->
    @_self.setStyle { visibility: "visible"}

window.Experience = class Experience
  start: ->
    $$(".experience").first().addClassName("experience-current")

window.App = class App
  
  constructor: ->
    @onhoverColor = "#484846"
    @offhoverColor = "#C4C4BB"
    @selectedPage = null
    @loadingCircles = new LoadingCircles
    @loadingCircles.hide()
  
  setSelectedPage: (link) ->
    @selectedPage = link
  
  highlightSelectedPage: ->
    portfolio = ($ "portfolio-items")
    links = portfolio.getElementsByTagName("li")
    for link in links
      a = link.getElementsByTagName("a")[0]
      a.setAttribute("style", "color: " + @offhoverColor)
      @selectedPage.setAttribute("style", "color: " + @onhoverColor) if @selectedPage
  
  start: ->
    #add some click handlers to the portfolio links
    p = ($ "portfolio-items")
    listItems = p.getElementsByTagName("li")
    __this = @
    for listItem in listItems
      listItem.onclick = ->
        __this.loadingCircles.animate()
        a = this.getElementsByTagName("a")[0]
        __this.setSelectedPage a
        __this.highlightSelectedPage
        #add some AJAX push state for the back button
        stateObj =
          id : a.id
        
        console.log a.href
        history.pushState stateObj, "", a.href
      
      listItem.onmouseover = ->
        #add some click handlers to the portfolio links
        portfolio = ($ "portfolio-items")
        links = portfolio.getElementsByTagName("li")
        for l in listItems
          a = l.getElementsByTagName("a")[0]
          a.setAttribute "style", "color: " + __this.offhoverColor
        a = this.getElementsByTagName("a")[0]
        a.setAttribute "style", "color: " + __this.onhoverColor
      
      listItem.onmouseout = => @highlightSelectedPage()
    
    #bind some window functions
    window.onpopstate = (event) =>
      @loadingCircles.animate()
      url
      #when we are redirected to home, just go to about
      url = if location.href is '/' then location.origin + '/about' else location.href
      
      new Ajax.Request(url, {
          method: 'get',
          onSuccess: => @loadingCircles.hide()
        }
      )
      
      if event.state
        a = ($ event.state.id)
        @setSelectedPage a
        @highlightSelectedPage
      
    if not @selectedPage
      #we have come to this page by a non AJAX request
      #set the proper selected page
      p = ($ "portfolio-items")
      l = p.getElementsByTagName "li"
      for listItem in listItems
        a = listItem.getElementsByTagName("a")[0]
        if a.href is location.href
          @setSelectedPage a
          @highlightSelectedPage
