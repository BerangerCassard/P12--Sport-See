import '../styles/calories.css';

function Calories(props) {

	if(Object.keys(props).length > 0) {
		console.log('calories props', props.caloriesData.data)
		return <div>
			<div>
				<div>
					<h3></h3>
					<p>Calories</p>
				</div>
			</div>
			<div>
				<div>
					<h3></h3>
					<p>Proteines</p>
				</div>
			</div>
			<div>
				<div>
					<h3></h3>
					<p>Glucides</p>
				</div>
			</div>
			<div>
				<div>
					<h3></h3>
					<p>Lipides</p>
				</div>
			</div>

		</div>
	} else {
		return <div>

		</div>
	}
}

export default Calories
