function 红灯 () {
    亮灯(255, 0, 0, 1)
}
function 黄灯 () {
    亮灯(1023, 150, 0, 0.5)
    亮灯(0, 0, 0, 0.5)
}
function 绿灯 () {
    亮灯(0, 255, 0, 1)
}
function 亮灯 (红色: number, 绿色: number, 蓝色: number, 秒数: number) {
    pins.analogWritePin(AnalogPin.P0, 红色)
    pins.analogWritePin(AnalogPin.P1, 绿色)
    pins.analogWritePin(AnalogPin.P2, 蓝色)
    basic.pause(秒数 * 1000)
}
let 亮灯时间 = 0
let tm = TM1637.create(
DigitalPin.P10,
DigitalPin.P11,
7,
4
)
let 时间 = 18
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        绿灯()
        tm.showNumber(8888)
    } else if (input.buttonIsPressed(Button.B)) {
        红灯()
        tm.showNumber(9999)
    } else {
        if (时间 > 9) {
            亮灯时间 = 时间 - 9
            tm.showNumber(亮灯时间)
            绿灯()
        } else if (时间 <= 9 && 时间 > 6) {
            亮灯时间 = 时间 - 6
            tm.showNumber(亮灯时间)
            黄灯()
        } else {
            亮灯时间 = 时间 - 0
            tm.showNumber(亮灯时间)
            红灯()
        }
    }
    时间 += -1
    if (时间 <= 0) {
        时间 = 18
    }
})
