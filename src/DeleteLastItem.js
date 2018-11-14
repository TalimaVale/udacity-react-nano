import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = props => {
  const handleDeleteLastItem = event => {
    props.onDeleteLastItem();
  }

  return (
    <button onClick={handleDeleteLastItem} disabled={props.buttonDisabled}>
      Delete Last Entry
    </button>
  );
};

DeleteLastItem.propTypes = {
  onDeleteLastItem: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.func.isRequired,
};

export default DeleteLastItem;