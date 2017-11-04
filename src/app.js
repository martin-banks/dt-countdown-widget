// import Config from './config.json'
// import Styles from './app.sass'
// import Content from './content/index'
import start from './startApp'
import layout from './layout'

const target = {
  year: '2017',
  month: '05',
  day: '05',
  hour: '14',
  min: '30',
  sec: '30',
}

// Start and Render app
const APP = start({ inner: layout() })
APP.render()

// const d = new Date()
const year = () => (new Date()).getFullYear()
const month = () => (new Date()).getMonth() + 1
const day = () => (new Date()).getDate()
const hour = () => (new Date()).getHours()
const min = () => (new Date()).getMinutes()
const sec = () => (new Date()).getSeconds()
const daysPerMonth = [
  () => 31, // jan
  year => (year % 4) ? 28 : 29, // feb
  () => 31, // mar
  () => 30, // apr
  () => 31, // may
  () => 30, // jun
  () => 31, // jul
  () => 31, // aug
  () => 30, // sep
  () => 31, // oct
  () => 30, // nov
  () => 31, // dec
]

const minToSec = m => m * 60
const hourToSec = h => minToSec(h) * 60
const dayToSec = d => hourToSec(d) * 24
const monthToSec = (m, y) => dayToSec(m * daysPerMonth[m](y))
const yearToSec = (m, y) => monthToSec(m, y) * 12

function convertToSeconds(target) {
  const { year, month, day, hour, min, sec } = target
  // console.log({ year, month, day, hour, min, sec })

  const total = parseInt(sec, 10) + minToSec(parseInt(min, 10)) + hourToSec(parseInt(hour, 10)) + dayToSec(parseInt(day, 10)) + monthToSec(parseInt(month, 10), parseInt(year, 10)) + yearToSec(parseInt(month, 10), parseInt(year, 10))
  return total
}

function convertFromSeconds(s) {
  const min = () => s % 360
  const sec = () => min() % 60
  return { s, sec: sec(), min: min() }
}

const difsec = () => (target.sec - sec() - 1)
const difmin = () => (target.min - min())
const difhour = () => (target.hour - hour())
const difday = () => (target.day - day())
const difmonth = () => ((target.month - 1) - (month() - 1))
const difyear = () => target.year - year())

setInterval(() => {
console.log('seconds', sec())

  const secondsLeft = {
    year: difyear(),
    month: difmonth(),
    day: difday(),
    hour: difhour(),
    min: difmin(),
    sec: difsec(),
  }
  console.table(secondsLeft)
}, 1000)
