const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval (function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    if (hr < 10) hr = `0${dateToday.getHours()}`
    if (min < 10) min = `0${dateToday.getMinutes()}`
    if (sec < 10) sec = `0${dateToday.getSeconds()}`

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
})