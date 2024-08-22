// Write your code here
// Write your code here
//FIX8: To use Link component, it should be imported
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    //FIX9: When clicked on TeamCard, page should be navigated to the URL '/team-matches/${id}
    //FIX10: "exact" and "path" props are used in Route component to match routes
    //FIX11: "to" is the prop used to give the URL for navigation to Link component
    <li classNmae="team-item">
      <Link to={`/team-matches/${id}`} classNmae="link">
        <img src={teamImageURL} alt={name} classNmae="team-logo" />
        <p classNmae="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
