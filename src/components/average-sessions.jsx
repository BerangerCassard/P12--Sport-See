import '../styles/average-sessions.css';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend} from "recharts";
import PropTypes from 'prop-types';
import ModelA from "../model/fetch";
import UserModel from "../model/UserModel";

/**
 * @param active
 * @param payload
 * @param label
 * @return {JSX.Element|null}
 * @constructor
 */
const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip-sessions">
				<p className="label">{`${payload[0].value} min`}</p>
			</div>
		);
	}

	return null;
};

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function AverageSessions(props) {


	// const test = () => {
	// 	const A = new ModelA('3')
	// 	console.log("A", A)
	// 	const B = A.getData()
	// 	console.log('b', B)
	// }
	//
	// test()

	//const a = UserModel('12').fetchUserFromAPI()

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
			{/*{UserModel.fetchUserFromAPI()}*/}
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
						top: 80,
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
					<Tooltip content={<CustomTooltip />} />
					<Line
						type="basis"
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

AverageSessions.propTypes = {
	sessionsData : PropTypes.object
}

export default AverageSessions
