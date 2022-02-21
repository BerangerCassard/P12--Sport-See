import '../styles/user-statistics.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DailyActivity from "../components/daily-activity";

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
			});

		fetch(`http://localhost:3000/user/${id}/activity`)
			.then(res => res.json())
			.then(user => {
				setActivity(user)
			})

		fetch(`http://localhost:3000/user/${id}/average-sessions`)
			.then(res => res.json())
			.then(user => {
				setSessions(user)

			})

		fetch(`http://localhost:3000/user/${id}/performance`)
			.then(res => res.json())
			.then(user => {
				setPerformance(user)
			})

	}, [] )
	//console.log('user data', data)


	return <div>
		<DailyActivity activityData={activity}/>
		user statistics {id}
	</div>
}

export default UserStatistics
