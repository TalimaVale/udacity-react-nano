import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = props => (
  <div>
    <p className="items">My Future Realities</p>
    <ol className="item-list">
      {props.items.map((item, index) => <Item key={index} item={item} />)}
    </ol>
  </div>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;