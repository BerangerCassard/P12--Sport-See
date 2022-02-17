import '../styles/home.css'
import {Link} from 'react-router-dom'

function Home() {
	return <div>

		<div className='main'>
			<h1>Bienvenue sur <span>SportSee</span></h1>
			<p> Projet 12 de la formation OpenClassrooms, réalisation d'un tableau de bord avec React et Recharts. Cliquez sur l'id d'un utilisateur pour voir ses données :</p>
			<Link to='/user/12'> user 12 </Link>
			<br/>
			<Link to='/user/18'> user 18 </Link>
		</div>
	</div>
}

export default Home
