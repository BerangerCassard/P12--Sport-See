import '../styles/user-statistics.css'
import {useParams} from "react-router-dom";

function UserStatistics() {

	const {id} = useParams()
	console.log(id)


	return <div>
		user statistics {id}
	</div>
}

export default UserStatistics
