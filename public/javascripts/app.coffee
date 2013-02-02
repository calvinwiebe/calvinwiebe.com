window.onload = ->
  window.app = app = new App
  canvas = ($ "intro-canvas")
  if canvas
    context = canvas.getContext("2d")
    introApp = intro({ waver: waver({canvas: canvas, context: context})})
    introApp.start()
  
  app.start()

