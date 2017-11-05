// import Config from './config.json'
// import Styles from './app.sass'
// import Content from './content/index'
import start from './startApp'
import layout from './layout'
import STATE from './state'

const targetDate = new Date("Nov 14, 2017 11:00:00").getTime()

// Start and Render app
const APP = start({ inner: layout() })
APP.render()

const countdownWrapper = STATE.appContainer.querySelector('[data-type=countdown]')
const backgroundGradient = document.querySelector('[data-type="background"]')


function displayTime() {
  const diff = targetDate - new Date().getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  const showDays = days > 0 ? `${days} days` : ''
  const showHours = (days > 0 || hours > 0) ? `${hours} hours` : ''
  const showMins = (days > 0 || hours > 0 || minutes > 0) ? `${minutes} minutes` : ''
  const showSecs = (days > 0 || hours > 0 || minutes > 0 || seconds > 0) ? `${seconds} seconds` : ''

  countdownWrapper.innerHTML = `Full results released in ${showDays}, ${showHours}, ${showMins}, ${showSecs}`
}
displayTime()
setInterval(displayTime, 1000)




let r = 1
const s = '100'
const l = '40'

setInterval(() => {
  backgroundGradient.style.background = `linear-gradient(
    ${90 + r}deg, 
    hsl(0, ${s}%, ${l}%), 
    hsl(50, ${s}%, ${l}%), 
    hsl(150, ${s}%, ${l}%),  
    hsl(200, ${s}%, ${l}%), 
    hsl(250, ${s}%, ${l}%),  
    hsl(300, ${s}%, ${l}%), 
    hsl(360, ${s}%, ${l}%)
  )`
  r += 0.2
  if (r > 360) r = 0
}, 24)


// const d = new Date()
// const year = () => d.getFullYear()
// const month = () => d.getMonth() + 1
// const day = () => d.getDate()
// const hour = () => d.getHours()
// const min = () => d.getMinutes()
// const sec = () => d.getSeconds()


// const daysPerMonth = [
//   () => 31, // jan
//   year => (year % 4) ? 28 : 29, // feb
//   () => 31, // mar
//   () => 30, // apr
//   () => 31, // may
//   () => 30, // jun
//   () => 31, // jul
//   () => 31, // aug
//   () => 30, // sep
//   () => 31, // oct
//   () => 30, // nov
//   () => 31, // dec
// ]

// const minToSec = m => m * 60
// const hourToSec = h => minToSec(h) * 60
// const dayToSec = d => hourToSec(d) * 24
// const monthToSec = (m, y) => dayToSec(m * daysPerMonth[m](y))
// const yearToSec = (m, y) => monthToSec(m, y) * 12

// function convertToSeconds(target) {
//   const { year, month, day, hour, min, sec } = target
//   // console.log({ year, month, day, hour, min, sec })

//   const total = parseInt(sec, 10) + minToSec(parseInt(min, 10)) + hourToSec(parseInt(hour, 10)) + dayToSec(parseInt(day, 10)) + monthToSec(parseInt(month, 10), parseInt(year, 10)) + yearToSec(parseInt(month, 10), parseInt(year, 10))
//   return total
// }

// function convertFromSeconds(s) {
//   const min = () => s % 360
//   const sec = () => min() % 60
//   return { s, sec: sec(), min: min() }
// }

// const difsec = () => (sec() - target.sec - 1)
// const difmin = () => (target.min - min())
// const difhour = () => (target.hour - hour())
// const difday = () => (target.day - day())
// const difmonth = () => ((target.month - 1) - (month() - 1))
// const difyear = () => target.year - year()

// setInterval(() => {
// console.log('seconds', sec())

//   const secondsLeft = {
//     year: difyear(),
//     month: difmonth(),
//     day: difday(),
//     hour: difhour(),
//     min: difmin(),
//     sec: 60 - difsec(),
//   }
//   console.table(secondsLeft)
// }, 1000)
