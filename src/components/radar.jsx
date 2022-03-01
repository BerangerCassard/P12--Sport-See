import '../styles/radar.css'
import {LineChart, Line, XAxis, YAxis,RadialBar, ResponsiveContainer, CartesianGrid, Tooltip, Bar, BarChart, Legend, RadarChart, PolarGrid, PolarRadiusAxis,PolarAngleAxis} from "recharts";

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function Radar(props) {

	if(Object.keys(props.performanceData).length > 0) {
		console.log('radar', props.performanceData.data.data)
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
						name='bob'
						dataKey="value"
						fill="#00000"
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
