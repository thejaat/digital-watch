let hour= document.getElementById('hour')
let minute = document.getElementById('minutes')
let second = document.getElementById('seconds')


setInterval(()=>{

    const currentTime = new Date()

    hour.innerHTML = (currentTime.getHours() < 10 ? "0": "" ) + currentTime.getHours()
    
    minute.innerHTML = (currentTime.getMinutes() < 10 ? "0": "" ) + currentTime.getMinutes()
    
    second.innerHTML = (currentTime.getSeconds() < 10 ? "0": "" ) + currentTime.getSeconds()
},1)



