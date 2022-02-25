import '../styles/user-statistics.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DailyActivity from "../components/daily-activity";
import AverageSessions from "../components/average-sessions";
import Radar from "../components/radar";
import Score from "../components/score";
import Calories from "../components/calories";

function UserStatistics() {
	const {id} = useParams()

	const [data, setData] = useState({})
	const [activity, setActivity] = useState({})
	const [sessions, setSessions] = useState({})
	const [performance, setPerformance] = useState({})

	useEffect( () => {
		fetch(`http://localhost:3000/user/${id}/activity`)
			.then(res => res.json())
			.then(user => {
				setActivity(user)
			});

		fetch(`http://localhost:3000/user/${id}`)
			.then(res => res.json())
			.then(user => {
				setData(user)
			});


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
	// console.log('user data', data.data.userInfos.firstName)


	return <div className='page-wrapper'>
		<div className='hello-wrapper'>
			{/*<h1> Bonjour <span className='red'>{data.data.userInfos.firstName}</span></h1>*/}
			<p>Félicitation ! vous avez explosé vos objectifs hier</p>
		</div>
		<div className="statistics-container">
			<div>
				<DailyActivity activityData={activity}/>
				<br/>
				<div className='substatistics'>
					<AverageSessions sessionsData={sessions}/>
					<Radar performanceData={performance}/>
					<Score scoreData={data}/>
				</div>
			</div>
			<div>
				<Calories caloriesData={data}/>
			</div>
		</div>


	</div>
}

export default UserStatistics
