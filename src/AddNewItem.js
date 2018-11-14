import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewItem extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleAddItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
    return (
      <form onSubmit={this.handleAddItem}>
        <input
          type="text"
          placeholder="Enter Wish Here"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  };

};

AddNewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default AddNewItem;