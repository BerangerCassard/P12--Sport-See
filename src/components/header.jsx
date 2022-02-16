import '../styles/header.css'
import logo from '../assets/images/img.png'

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
			<div>Copyright, SportSee 2020</div>
		</div>
	</div>
}

export default Header
