import '../styles/nutriments.css';
import calories from '../assets/images/calories.png'
import protein from '../assets/images/protein.png'
import glucides from '../assets/images/glucides.png'
import lipides from '../assets/images/lipides.png'


function Nutriments(props) {

	if(Object.keys(props.caloriesData).length > 0) {
		//console.log('calories props', props.caloriesData.data.keyData)
		return <div className='nutriments-container'>
			<div className='nutriment-wrapper'>
				<img className='nutriment-logo' src={calories}/>
				<div className='description-wrapper'>
					<h3 className='title'>{props.caloriesData.data.keyData.calorieCount}kCal</h3>
					<p className='subtitle'>Calories</p>
				</div>
			</div>
			<div className='nutriment-wrapper'>
				<img className='nutriment-logo' src={protein}/>
				<div className='description-wrapper'>
					<h3 className='title'>{props.caloriesData.data.keyData.proteinCount}g</h3>
					<p className='subtitle'>Proteines</p>
				</div>
			</div>
			<div className='nutriment-wrapper'>
				<img className='nutriment-logo' src={glucides}/>
				<div className='description-wrapper'>
					<h3 className='title'>{props.caloriesData.data.keyData.carbohydrateCount}g</h3>
					<p className='subtitle'>Glucides</p>
				</div>
			</div>
			<div className='nutriment-wrapper'>
				<img className='nutriment-logo' src={lipides}/>
				<div className='description-wrapper'>
					<h3 className='title'>{props.caloriesData.data.keyData.lipidCount}g</h3>
					<p className='subtitle'>Lipides</p>
				</div>
			</div>

		</div>
	} else {
		return <div>

		</div>
	}
}

export default Nutriments
