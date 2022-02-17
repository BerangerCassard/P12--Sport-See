import '../styles/header.css'
import logo from '../assets/images/img.png'
import meditation from '../assets/images/img_1.png'
import natation from '../assets/images/img_2.png'
import bicycle from '../assets/images/img_3.png'
import weight from '../assets/images/img_4.png'

function Header() {
	return <div>
		<div className='header'>
			<img className='header__logo' src={logo}/>
			<nav className='header__nav'>
				<ul className='header-menu'>
					<li>Accueil</li>
					<li>Profil</li>
					<li>Réglage</li>
					<li>Communauté</li>
				</ul>
			</nav>
		</div>
		<div className='vertical-bar'>
			<div className='miniatures'>
				<img src={meditation}/>
				<img src={natation}/>
				<img src={bicycle}/>
				<img src={weight}/>
			</div>
			<div className='copyright'>Copyright, SportSee 2020</div>
		</div>
	</div>
}

export default Header
