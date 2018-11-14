import React, { Component } from 'react';
import AddNewItem from './AddNewItem';
import DeleteLastItem from './DeleteLastItem.js';
import ItemList from './ItemList';

class ShoppingList extends Component {
  state = {
    items: [],
  };

  handleAddNewItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  handleDeleteLastItem = () => {
    this.setState(() => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };
  
  render() {
    return (
      <div className='shopping-list'>
        <AddNewItem onAddItem={this.handleAddNewItem} />

        <DeleteLastItem
          onDeleteLastItem={this.handleDeleteLastItem}
          buttonDisabled={this.noItemsFound()}
        />

        <ItemList items={this.state.items} />
      </div>
    );
  };
};

export default ShoppingList;