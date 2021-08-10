def 红灯():
    亮灯(255, 0, 0, 1)
def 黄灯():
    亮灯(1023, 150, 0, 0.5)
    亮灯(0, 0, 0, 0.5)
def 绿灯():
    亮灯(0, 255, 0, 1)
def 亮灯(红色: number, 绿色: number, 蓝色: number, 秒数: number):
    pins.analog_write_pin(AnalogPin.P0, 红色)
    pins.analog_write_pin(AnalogPin.P1, 绿色)
    pins.analog_write_pin(AnalogPin.P2, 蓝色)
    basic.pause(秒数 * 1000)

def on_forever():
    for index in range(4):
        绿灯()
    for index2 in range(3):
        黄灯()
    for index3 in range(4):
        红灯()
basic.forever(on_forever)
