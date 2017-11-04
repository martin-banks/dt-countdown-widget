/* eslint import/prefer-default-export: 0 */
import Styles from '../styleguide/styleguide.sass'

export function h1({ value }) {
	return `<h1 class="${Styles.text__h1}">${value}</h1>`
}
export function h2({ value }) {
	return `<h2 class="${Styles.text__h2}">${value}</h2>`
}
export function h3({ value }) {
	return `<h3 class="${Styles.text__h3}">${value}</h3>`
}
export function h4({ value }) {
	return `<h4 class="${Styles.text__h4}">${value}</h4>`
}
export function h5({ value }) {
	return `<h5 class="${Styles.text__h5}">${value}</h5>`
}
export function h6({ value }) {
	return `<h6 class="${Styles.text__h6}">${value}</h6>`
}


