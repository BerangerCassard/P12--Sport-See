import '../styles/user-statistics.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DailyActivity from "../components/daily-activity";
import AverageSessions from "../components/average-sessions";
import RadarStats from "../components/radar";
import Score from "../components/score";
import Nutriments from "../components/nutriments";
import UserModel from "../model/UserModel";

function UserStatistics() {
	const {id} = useParams()

	const [data, setData] = useState({})
	const [activity, setActivity] = useState({})
	const [sessions, setSessions] = useState({})
	const [performance, setPerformance] = useState({})

	useEffect( () => {

		UserModel
			.fetchUserFromAPI(id, 'activity')
			.then(user => {
				setActivity(user)
			})

		UserModel
			.fetchUserFromAPI(id)
			.then(user => {
				setData(user)
				console.log(user)
			})

		UserModel
			.fetchUserFromAPI(id, 'average-sessions')
			.then(user => {
				setSessions(user)
			})

		UserModel
			.fetchUserFromAPI(id, 'performance')
			.then(user => {
				setPerformance(user)
			})

	}, [] )
	//console.log('user data', data.data)

	if(Object.keys(data).length > 0) {
		return <div className='page-wrapper'>
			<div className='hello-wrapper'>
				<h1> Bonjour <span className='red'>{data.data.userInfos.firstName}</span></h1>
				<p>Félicitation ! vous avez explosé vos objectifs hier &#128079;</p>
			</div>
			<div className="statistics-container">
				<div>
					<DailyActivity activityData={activity}/>
					<br/>
					<div className='substatistics'>
						<AverageSessions sessionsData={sessions}/>
						<RadarStats performanceData={performance}/>
						<Score scoreData={data}/>
					</div>
				</div>
				<Nutriments caloriesData={data}/>

			</div>
		</div>
	} else {
		return <div>

		</div>
	}

}

export default UserStatistics
