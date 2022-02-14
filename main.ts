input.onButtonPressed(Button.A, function on_button_pressed_a() {
    led.plot(2, 3)
    basic.pause(3000)
    led.unplot(2, 3)
})
basic.forever(function on_forever() {
    
})
