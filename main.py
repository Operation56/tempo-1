def on_button_pressed_a():
    led.plot(2, 3)
    basic.pause(3000)
    led.unplot(2, 3)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
