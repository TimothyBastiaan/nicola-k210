/**
 * 15 - 165
 * 
 * 0 -165
 */
let ypos = 0
let xPos = 0
serial.redirect(
SerialPin.P16,
SerialPin.P8,
BaudRate.BaudRate115200
)
let xServo = 90
let yServo = 90
let x = 100
let y = 100
let w = 120
let h = 40
basic.forever(function () {
    k210.nicola_face_reg(1)
    x = k210.return_x()
    y = k210.return_y()
    w = k210.return_width()
    h = k210.return_height()
    xPos = x + w / 2
    ypos = y + h / 2
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, yServo)
    pins.servoWritePin(AnalogPin.P2, xServo)
})
basic.forever(function () {
    if (xPos > 175 && xServo > 0) {
        xServo += -1
    } else if (xPos < 145 && xServo < 165) {
        xServo += 1
    }
    basic.pause(10)
})
basic.forever(function () {
    if (ypos > 130 && yServo > 15) {
        yServo += -1
    } else if (ypos < 110 && yServo < 165) {
        yServo += 1
    }
    basic.pause(10)
})
