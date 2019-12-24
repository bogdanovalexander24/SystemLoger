import React, { useRef } from 'react';
import { searchLog } from '../../actions/logActons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const SearchBar = ({ searchLog }) => {
  const text = useRef('');

  const onChange = e => {
    if (text.current.value !== '') {
      searchLog(e.target.value);
    }
  };

  return (
    <div>
      <nav style={{ marginBottom: '30px' }} className='blue'>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input onChange={onChange} id='search' type='search' ref={text} />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

SearchBar.propTypes = {
  searchLog: PropTypes.func.isRequired
};

export default connect(null, { searchLog })(SearchBar);
