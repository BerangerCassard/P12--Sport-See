import '../styles/radar.css'
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Bar, BarChart, Legend, RadarChart, PolarGrid, PolarRadiusAxis,PolarAngleAxis} from "recharts";


function Radar(props) {
	console.log(props.performanceData.data.data)

	if(Object.keys(props.performanceData).length > 0) {
		return <div className='radar-container'>
			<ResponsiveContainer
				width="100%"
				height="100%">
				<RadarChart
					cx="50%"
					cy="50%"
					outerRadius="65%"
					data={props.performanceData.data.data}
					width={220}
					height={220}
					margin={{top: 5, right: 20, left: 0, bottom: 5}}
				>
					<PolarGrid />
					<PolarAngleAxis
						dataKey="kind"
						tick={{fill: 'white', fontSize: '10px'}}
						tickLine={false}
					/>
					<Radar
						dataKey="value"
						fill="#FF0101"
						fillOpacity={0.8}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	} else {
		return <div> </div>
	}

}

export default Radar
