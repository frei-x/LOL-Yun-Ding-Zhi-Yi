// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// // Speed up the mouse.
robot.setMouseDelay(0);
// 键盘延迟
robot.setKeyboardDelay(0)
setInterval(function () {
  // 寻找对局
  setTimeout(() => {
    robot.moveMouse(1920 / 2 - 150, 1080 - 70);
    robot.mouseToggle('down', 'left');
    setTimeout(() => { robot.mouseToggle('up', 'left') }, 0)
  }, 0)

  // 接受对局
  setTimeout(() => {
    robot.moveMouse(1920 / 2, 1080 - 100 - 140);
    robot.mouseToggle('down', 'left');
    robot.mouseToggle('up', 'left')
    // 按下d 再抬起
    setTimeout(() => {
      robot.keyToggle('d', 'down');
      robot.keyTap("f")
      setTimeout(() => { robot.keyToggle("d", "up") }, 300)
    }, 1000)
  }, 2000)

  // 退出对局
  setTimeout(() => {
    robot.moveMouse(1920 / 2 - 95, 1080 - 90 - 470);// 退出按钮宽度 x: 1920 / 2 - 220  ~  1920 / 2 - 50 , 减105刚好避免开始对局切换皮肤 ,同时可以点击到退出
    robot.mouseToggle('down', 'left');
    setTimeout(() => { robot.mouseToggle('up', 'left'), 0 })

  }, 5000)
  // setTimeout(() => { robot.keyToggle("d", 'up') }, 40)
  // robot.keyToggle("f", 'down')
  // setTimeout(() => { robot.keyToggle("f", 'up') }, 40)
}, 6000)

// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// console.log(screenSize);
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;dfdf
// robot.typeString("Hello World");
// setTimeout(() => {
//   robot.moveMouse(1920 / 2, 1080 / 2);
// }, 3000)
// for (var x = 0; x < width; x++) {
//   y = height * Math.sin((twoPI * x) / width) + height;
//   robot.moveMouse(x, y);
// }