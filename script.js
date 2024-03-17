let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")

function clock(){
  setInterval(()=>{
    let date = new Date()
    let h = (date.getHours())%12
    let m = date.getMinutes()
    let s = date.getSeconds()
    hour.innerHTML = h<10?"0"+h:h
    minute.innerHTML = m<10?"0"+m:m
    second.innerHTML = s<10?"0"+s:s
  }),1000
}

clock()