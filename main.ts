input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("Temp: ")
    basic.showNumber(Math.round(input.temperature()))
})
