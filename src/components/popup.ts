import { IPopup, IComponent } from '../types/popup'
// import styles from './popup.css'
let styles = require('./popup.css').default

function popup(options: IPopup) {
	return new Popup(options)
}

class Popup implements IComponent {
	// 创建容器
	temContainer: HTMLElement

	constructor(private settings: IPopup) {
		this.settings = Object.assign(
			{
				width: '100%',
				height: '100%',
				title: '',
				position: 'center',
				mask: 'true',
				content: function () {},
			},
			settings
		)
		this.init()
		// console.log(this.settings, 'class Popup')
	}

	// 初始化
	init() {
		console.log(styles, 'init')
		this.template()
	}
	// 创建模板
	template() {
		this.temContainer = document.createElement('div')

		this.temContainer.style.width = this.settings.width
		this.temContainer.style.height = this.settings.height

		this.temContainer.innerHTML = `
      <div class="${styles.popup}">
        <h3 class="${styles['popup-title']}">${this.settings.title}</h3>
        <i class="iconfont icon-guanbi"></i>
      </div>
      <div class="${styles['popup-content']}"></div>
    `
		document.body.appendChild(this.temContainer)

		switch (this.settings.position) {
			case 'center':
				this.temContainer.style.left =
					(window.innerWidth - this.temContainer.offsetWidth) / 2 + 'px'
				this.temContainer.style.top =
					(window.innerHeight - this.temContainer.offsetHeight) / 2 + 'px'
				break
			case 'left':
				break
			case 'center':
				break
		}
	}
	// 操作
	handle() {}
}

export default popup
