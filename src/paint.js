const string = `.face * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body{
  background-color: rgba(250,225,35,1);
}

.nose{
  border: 5px solid black ;
  position: relative;
  left: 50%;
  top:220px;
  height: 120px;
  width: 80px;
  margin-left: -40px;
  border-radius: 50%;
  background-color: rgba(250,225,35,1);
  z-index: 100;

  transform-origin: bottom ;
  animation: wave 1s infinite linear;
}
.nose::after{
  position: absolute;
  content: '';
  top: 55%;
  left: 50%;
  margin-left: -30px;
  background-color: rgba(250,225,35,1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.eye{
  position: absolute;
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  top:100px;
  left:50%;
  margin-left: -100px;
  background-color: white; 
}
.eye.left{
  transform: translateX(-100px);
  
}
.eye.right{
  transform: translateX(100px);
}
.eye::after{
  position: absolute;
  content: '';
  width: 30px;
  height: 30px;
  background:black;
  border-radius: 50%;
  left: 50%;
  margin-left: -14px;
  top:81px
}
.eye::before{
  position: absolute;
  content: '';
  width: 60px;
  height: 60px;
  background-color:#0099ff;
  border: 4px solid black;
  border-radius: 50%;
  left: 50%;
  margin-left: -34px;
  top:62px
}
.eyelash{
  position: absolute;
  top: -50px;
  left: 90px;
  height: 50px;
  width: 10px;
  background-color: #000;
}
.eyelash::before{
  content: '';
  position: absolute;
  height: 50px;
  width: 10px;
  background-color: #000;
  transform: translateX(-60px) rotate(-30deg) translateY(10px);
}
.eyelash::after{
  content: '';
  position: absolute;
  height: 50px;
  width: 10px;
  background-color: #000;
  transform: translateX(60px) rotate(30deg) translateY(10px);
}
.blush-group{
  position: relative;
  min-height:186px ;
}
.blush{
  position: absolute;
  border: 5px solid red;
  border-radius: 50%;
  background-color: rgba(250,225,35,1);
  width: 90px;
  height: 90px;
  left: 50%;
  margin-left: -45px;
  top: 120px;
}
.blush.left{
  transform: translateX(-165px);
}
.blush.right{
  transform: translateX(165px);
}
.blush.left::after{
  content: '';
  position: absolute;
  background-color: rgba(250,225,35,1) ;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  top:40px;
  transform: translateX(8px);
}
.blush.right::after{
  content: '';
  position: absolute;
  background-color: rgba(250,225,35,1) ;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  top:40px;
  transform: translateX(-5px);
  }
.freckle{
  position: absolute;
  background-color: red;
  width:10px;
  height: 10px;
  border-radius: 50%;
  left: 50%;
  margin-left: -5px;
  top:160px;
}
.freckle.left{
  transform: translateX(-165px);
}
.freckle.right{
  transform: translateX(165px);
}
.freckle.left::before{
  content: '';
  position: absolute;
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: -16px;
  right: 22px;
}
.freckle.left::after{
  content: '';
  position: absolute;
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: -25px;
  left: 8px;
}
.freckle.right::before{
  content: '';
  position: absolute;
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: -25px;
  right: 8px;
}
.freckle.right::after{
  content: '';
  position: absolute;
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: -16px;
  left: 22px;
}
.mouth-group{
  position: relative;
  min-height:220px ;
  overflow: hidden;
}
.lip-up{
  position: absolute;
  border: 5px solid black;
  width: 440px;
  height: 170px;
  border-radius: 50%/0 0 160px 160px;
  border-color: transparent transparent black transparent;
  top: -100px;
  left: 50%;
  margin-left: -220px;
  background-color: rgba(250,225,35,1) ;
  z-index: 99;
}
.lip-up::before{
  content: '';
  position: absolute;
  border: 5px solid black;
  width: 25px;
  height: 25px;
  border-color: transparent black transparent transparent;
  transform: translateX(22px) translateY(78px) rotate(55deg);
}
.lip-up::after{
  content: '';
  position: absolute;
  border: 5px solid black;
  border-radius: 5%;
  width: 25px;
  height: 25px;
  border-color: transparent black transparent transparent;
  transform: translateX(354px) translateY(103px) rotate(-60deg);
}
.lip-down{
  position: absolute;
  border: 5px solid black;
  width: 336px;
  height: 180px;
  border-radius: 50%/0 0 175px 175px;
  border-color: transparent black black black;
  top: 12px;
  left: 50%;
  margin-left: -168px;
  background-color: saddlebrown;
  overflow: hidden;
}
.lip-down::before{
  position: absolute;
  content: '';
  border: 5px solid black;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background-color: pink;
  left: 25%;
  top:120px;
}
.lip-down::after{
  position: absolute;
  content: '';
  border: 5px solid black;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background-color: pink;
  left: 45%;
  top:120px;
  border-color: transparent transparent black black;
  transform: rotate(160deg);
}
.tooth{
  position: absolute;
  border: 5px solid black;
  background-color: white;
  width: 50px;
  height: 45px;
  left: 50%;
  margin-left: -25px;
  top:68px
}
.tooth.left{
  transform: rotate(8deg) translateX(-40px);
}
.tooth.right{
  transform: rotate(-8deg) translateX(40px);
}
@keyframes wave{
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(15deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
`

const words = document.querySelector('#words')
const type = document.querySelector('#type')
let n = 1
const run = function () {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  words.innerText = string.substr(0, n)
  type.innerHTML = string.substr(0, n)
  words.scrollTop = 99999 //每次都滚到底
}
let time = 50
const start = () => {
  id = setInterval(run, time)
}
const stop = () => {
  window.clearInterval(id)
}
pause.onclick = stop
play.onclick = start
slow.onclick = () => {
  stop()
  time = 100
  start()
}
normal.onclick = () => {
  stop()
  time = 30
  start()
}
fast.onclick = () => {
  stop()
  time = 0
  start()
}

start()