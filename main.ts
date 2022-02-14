input.onButtonPressed(Button.A, function () {
    led.plot(2, 3)
    basic.pause(3000)
    led.unplot(2, 3)
})
basic.forever(function () {
	
})
