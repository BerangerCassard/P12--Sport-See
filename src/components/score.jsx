import '../styles/score.css';
import {RadialBarChart, PolarAngleAxis, RadialBar, ResponsiveContainer} from "recharts";

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function Score(props) {


	if(Object.keys(props.scoreData).length > 0) {
		//console.log('good', props.scoreData.data)
		return <div className='score-container'>
			<h2 className='score-title'>Score</h2>
			<div className='score-result'>
				<h2>12%</h2>
				<p className='description'>de votre objectif</p>
			</div>
			<ResponsiveContainer
				width="100%"
				height="100%"
			>
				<RadialBarChart
					cx="50%"
					cy="55%"
					width={500}
					height={300}
					innerRadius={80}
					outerRadius={140}
					barSize={16}
					data={[{score: 80}]}
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
						dataKey="score"
						cornerRadius={50}
						fill='#FF0101'
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
