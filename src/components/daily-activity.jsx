import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Bar, BarChart, Legend} from "recharts";
import {useEffect} from "react";
import '../styles/daily-activity.css'

/**
 * @param props
 * @return {JSX.Element}
 * @constructor
 */

const CustomTooltip = ({active, payload, label}) => {
	if(active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="custom-tooltip-text">{`${payload[0].value}kg`}</p>
				<p className="custom-tooltip-text">{`${payload[1].value}kCal`}</p>
			</div>
		)
	}
	return null
}
function DailyActivity (props) {

	function dateToNumber() {
		let i
		for(i=0; i<props.activityData.data.sessions.length; i++) {
			props.activityData.data.sessions[i].day = i+1
		}
	}

	if(Object.keys(props.activityData).length > 0) {

		dateToNumber();



		//console.log('props', props.activityData)
		return <div className='daily-container'>
			<h2 className='daily-title'>Activité quotidienne</h2>
			<ResponsiveContainer
				width='100%'
				className='daily-activity'>
				<BarChart
					width={500}
					height={300}
					data={props.activityData.data.sessions}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 40,
					}}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						vertical={false}/>
					<XAxis
						dataKey='day'
					/>
					<YAxis
						orientation='right'
						tickCount={3}/>
					<Tooltip content={<CustomTooltip/>}/>
					<Legend
						verticalAlign="top"
						align='right'
						height={36}
						iconType='cicle'
						iconSize='10'/>
					<Bar
						name='Poids (kg)'
						type='monotone'
						dataKey='kilogram'
						fill='#000000'
						barSize={9}
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						name='Calories brûlées (Kcal)'
						type='monotone'
						dataKey='calories'
						fill='#E60000'
						barSize={9}
						radius={[10, 10, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	} else {
		return <div>

		</div>
	}


}

export default DailyActivity
