import '../styles/average-sessions.css';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend} from "recharts";


function AverageSessions(props) {

	function numbersToWeekDays () {
		const weekDays = ["L", 'M', 'M', 'J', 'V', 'S', 'D']
		let i
		for(i=0; i<weekDays.length; i++) {
			props.sessionsData.data.sessions[i].day = weekDays[i]
		}
	}

	//console.log('props', props.sessionsData)
	if(Object.keys(props.sessionsData).length > 0){

		numbersToWeekDays()

		return <div className='sessions-container'>
			<h2 className='sessions-title'>Durée moyenne des sessions</h2>
			<ResponsiveContainer
				width="100%"
				height="100%"
			>
				<LineChart
					width={500}
					height={300}
					data={props.sessionsData.data.sessions}
					margin={{
						top: 40,
						right: 10,
						left: 10,
						bottom: 30,
					}}
				>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{fill: "white", fontSize: "12", dy: 20}}
					/>
					<Tooltip />
					<Line
						type="monotone"
						dataKey="sessionLength"
						stroke="#FFFFFF"
						strokeWidth={2}
						dot={false}
						activeDot={{stroke: "#FF0000", r: 5}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	} else {
		return <div>

		</div>
	}


}

export default AverageSessions
