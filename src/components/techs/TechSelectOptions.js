import React, { useEffect } from 'react';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {`${t.firstName} ${t.lastName}`}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired
};

const mapStateToProprs = state => ({
  tech: state.tech
});

export default connect(mapStateToProprs, { getTechs })(TechSelectOptions);
