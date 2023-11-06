controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.vibrate(500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.vibrate(500)
})
info.onLifeZero(function () {
    game.splash("Você perdeu, que pena! A sua planta morreu!")
})
info.onScore(6, function () {
    game.splash("Parabéns! Você cultivou o seu conhecimento da melhor forma!")
})
info.setScore(0)
info.setLife(3)
scene.setBackgroundImage(assets.image`cityscape`)
pause(5000)
game.splash("Seja bem-vindo")
game.onUpdate(function () {
	
})
