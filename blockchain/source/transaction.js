export default class Transaction {
	constructor ({ from, to, amount }) {
		this.from = from
		this.to = to
		this.amount = amount
		this.timestamp = Date.now()
	}

	isValid () {
		if (!this.signature || this.signature.length === 0) {
      throw new Error('no signature found')
    }
	}
}
