import React from 'react';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

export const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({ html: 'Technician deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.secondName}
        <a onClick={onDelete} href='!#' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.TechItem = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
