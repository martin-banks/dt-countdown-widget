// import Config from './config.json'
// import Styles from './app.sass'
// import Content from './content/index'
import start from './startApp'
import layout from './layout'


// Start and Render app
const APP = start({ inner: layout() })
APP.render()
