
class Model {
	constructor(id) {
		this.id = id
	}

	dataMethod = () => {
		let data;

		fetch(`http://localhost:3000/user/${this.id}`)
			.then(res => res.json())
			.then(user => {
				data = user
		})
	    return data
	}


}

export default Model
