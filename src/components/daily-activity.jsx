import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip} from "recharts";


function DailyActivity (props) {
	console.log('props', props.activityData.data)
	return <ResponsiveContainer width='100%' height='100%'>
			<LineChart
			width={500}
			height={300}
			data={props.activityData.data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey='day'/>
				<YAxis/>
				<Tooltip/>
				<Line type='monotone' dataKey='kilogram'/>
				<Line type='monotone' dataKey='calories'/>


			</LineChart>
		</ResponsiveContainer>

}

export default DailyActivity
