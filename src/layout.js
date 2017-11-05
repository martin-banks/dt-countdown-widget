import Styles from './app.sass'
import Content from './content/index'

// Template content
function layout() {
	const template = `<section class="${Styles.wrapper}">
		<div class="${Styles.background__gradient}" data-type="background"></div>
		<div class="${Styles.card} ${Styles.card__flex}">
			<h4 class="${Styles.text} ${Styles.text__head}">
				${Content.header.title} 
			</h4>
			<h2 class="${Styles.text} ${Styles.text__head}" data-type="countdown"></h2>
		</div>
	</section>`

	return template
}

export default layout
