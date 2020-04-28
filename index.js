// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
let count = 0
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
  }, 2000)
  // 有时候退出游戏 会有新任务出现 ,点击接受任务 ,和寻找对局高度差不多, 水平方向更居中
  setTimeout(() => {
    robot.moveMouse(1920 / 2 - 75, 1080 - 70);
    robot.mouseToggle('down', 'left');
    robot.mouseToggle('up', 'left')
  }, 2000)
  // 按下d或f 再抬起 ,10s一次
  setTimeout(() => {
    let arr = ["D", "F"]
    let random = Math.floor(Math.random() * 2) //均衡获取0到1的随机整数
    robot.keyToggle(arr[random], 'down');
    setTimeout(() => {
      robot.keyToggle(arr[random], 'up');
    }, 100)

    // robot.keyTap("f")
    // setTimeout(() => { robot.keyToggle("d", "up") }, 300)
  }, 10000)
  // 退出对局
  setTimeout(() => {
    robot.moveMouse(1920 / 2 - 95, 1080 - 90 - 470);// 退出按钮宽度 x: 1920 / 2 - 220  ~  1920 / 2 - 50 , 减105刚好避免开始对局切换皮肤 ,同时可以点击到退出
    robot.mouseToggle('down', 'left');
    setTimeout(() => { robot.mouseToggle('up', 'left'), 0 })

  }, 5000)
  // setTimeout(() => { robot.keyToggle("d", 'up') }, 40)
  // robot.keyToggle("f", 'down')
  // setTimeout(() => { robot.keyToggle("f", 'up') }, 40)
  console.log(`已累计触发${++count}次`);
}, 6000)
console.log("启动成功,请以管理员身份启动,如果是,请忽略");
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