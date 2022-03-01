import '../styles/score.css';
import {RadialBarChart, PolarAngleAxis, RadialBar, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Bar, BarChart, Legend} from "recharts";

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function Score(props) {


	if(Object.keys(props.scoreData).length > 0) {
		//console.log('good', props.scoreData.data.todayScore)
		return <div className='score-container'>
			<ResponsiveContainer
				width="100%"
				height="100%"
			>
				<RadialBarChart
					cx="50%"
					cy="55%"
					innerRadius="70%"
					outerRadius="80%"
					barSize={16}
					data={props.scoreData.data.todayScore}
					startAngle={90}
					endAngle={450}
				>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						angleAxisId={0}
						tick={false}
					/>
					<RadialBar
						minAngle={15}
						dataKey="todayScore"
						cornerRadius={50}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	} else {
		return <div>

		</div>
	}

}

export default Score
