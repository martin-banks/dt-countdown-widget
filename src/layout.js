import Styles from './app.sass'
import Content from './content/index'

// Template content
function layout() {
	const template = `<section class="${Styles.wrapper}">
		<h1>${Content.header.title}</h1>
		<h3>${Content.header.intro}</h3>
	</section>`

	return template
}

export default layout
