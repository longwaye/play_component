
export interface IPopup {
	width?: string
	height?: string
	title?: string
	position?: string
	mask?: boolean
	content?: () => void
}

export interface IComponent {
	temContainer: HTMLElement
	init: () => void
	template: () => void
	handle: () => void
}
