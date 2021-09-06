setInterval(setClock, 1000)

var hoursHand = document.querySelector('[data-hour]')
var minutesHand = document.querySelector('[data-minute]')
var secondsHand = document.querySelector('[data-second]')

function setClock() {

    var currentDate = new Date()

    var secondsRatio = currentDate.getSeconds() / 60
    var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    var hoursRatio = (minutesRatio + currentDate.getHours()) / 12


    setRotation(secondsHand, secondsRatio)
    setRotation(minutesHand, minutesRatio)
    setRotation(hoursHand, hoursRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock()