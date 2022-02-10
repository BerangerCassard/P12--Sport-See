import '../styles/user.css';
import React from 'react'

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/user/18')
			.then(res => res.json)
			.then(user => this.setState({user}), () => console.log('customer fetched'))
	}

	render() {
		return (
			<div>
				{console.log(this.state.user)}
			</div>
		);
	}


}

export default User;
