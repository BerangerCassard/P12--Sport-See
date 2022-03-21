
class UserModel {
	constructor(id) {
		this.id = id
	}

	static fetchUserFromAPI = async function (id, option){
		let url = option ? `http://localhost:3000/user/${id}/${option}` : `http://localhost:3000/user/${id}`
		let response = await fetch(url)
		let data = await response.json()
		return data
	}
}



export default UserModel
