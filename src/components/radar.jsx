import '../styles/radar.css'
import {LineChart, Line, XAxis, YAxis,RadialBar,Radar, ResponsiveContainer, CartesianGrid, Tooltip, Bar, BarChart, Legend, RadarChart, PolarGrid, PolarRadiusAxis,PolarAngleAxis} from "recharts";
import PropTypes from 'prop-types';


/**
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function RadarStats(props) {

	function numbersToStats() {
		const stats = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
		let i
		for (i=0; i<stats.length; i++) {
			props.performanceData.data.data[i].kind = stats[i]
		}
	}

	if(Object.keys(props.performanceData).length > 0) {
		numbersToStats()
		//console.log('radar', props.performanceData.data.data)
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

RadarStats.propTypes = {
	performanceData : PropTypes.object
}

export default RadarStats
