export default function uuid () {
	const r = () => Math.random().toString(16).slice(-4)

	return r() + r() + '-' + r() + '-' + r() + '-' + r() + '-' + r() + r() + r()
}
