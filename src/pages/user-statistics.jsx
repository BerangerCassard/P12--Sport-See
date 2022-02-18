import '../styles/user-statistics.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function UserStatistics() {
	const {id} = useParams()
	const [data, setData] = useState({})
	const [activity, setActivity] = useState({})
	const [sessions, setSessions] = useState({})
	const [performance, setPerformance] = useState({})

	useEffect( () => {
		fetch(`http://localhost:3000/user/${id}`)
			.then(res => res.json())
			.then(user => {
				setData(user)
			})
	}, [] )
	console.log('user data', data)

	useEffect( () => {
		fetch(`http://localhost:3000/user/${id}/activity`)
			.then(res => res.json())
			.then(user => {
				setActivity(user)
			})
		}, []
	)
	console.log('activity', activity)

	useEffect( () => {
		fetch(`http://localhost:3000/user/${id}/average-sessions`)
			.then(res => res.json())
			.then(user => {
				setSessions(user)

			})
		}, []
	)
	console.log('average sessions', sessions)

	useEffect(() => {
		fetch(`http://localhost:3000/user/${id}/performance`)
			.then(res => res.json())
			.then(user => {
				setPerformance(user)
			})
	},[] )
	console.log('performance', performance)

	return <div>
		user statistics {id}
	</div>
}

export default UserStatistics
