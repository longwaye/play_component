import './main.css'
import popup from './components/popup'

let listItem = document.querySelectorAll('#list li')

for (let i = 0; i < listItem.length; i++) {
	listItem[i].addEventListener('click', function () {
		// console.log(listItem[i].getAttribute('data-url'), '------main.ts-----')
		// console.log(this.dataset, '------main.ts-----')
		let url = this.dataset.url
		let title = this.dataset.title
		console.log(popup, 'main')

		popup({
			width: '880px',
			height: '556px',
			position: 'center',
			mask: true,
			title: title,
			content: () => {
				'xxxxx'
			},
		})
	})
}
