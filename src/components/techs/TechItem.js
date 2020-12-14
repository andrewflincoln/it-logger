import React from 'react'
import PropTypes from 'prop-types'
import { deleteTech } from '../../actions/techActions'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'



const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id)
    M.toast({html: 'Tech deleted'})
  }


  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={() => onDelete(tech.id)}>delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
}

export default connect(null, { deleteTech })(TechItem)
