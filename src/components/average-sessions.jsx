import '../styles/average-sessions.css';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend} from "recharts";


function AverageSessions(props) {

	//console.log('props', props.sessionsData)
	if(Object.keys(props.sessionsData).length > 0){
		return <div className='sessions-container'>
			<h2 className='sessions-title'>Durée moyenne des sessions</h2>
			<ResponsiveContainer
				width="100%"
				height="100%">
				<LineChart
					width={500}
					height={300}
					data={props.sessionsData.data.sessions}
					margin={{
						top: 5,
						right: 30,
						left: 0,
						bottom: 40,
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
