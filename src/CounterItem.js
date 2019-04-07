import React from 'react';

const CounterItemButton = ({ children, onClick }) => {
  return (
    <div
      className="f6 link dim ph2 pv1 di white bg-black pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const CounterItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="ba pa2 mb2 flex items-baseline justify-between">
      <div>[{item.id}]</div>
      <div>{item.count}</div>
      <div>
        <CounterItemButton onClick={onIncrement}>Increment</CounterItemButton>
        <CounterItemButton onClick={onDecrement}>Decrement</CounterItemButton>
        <CounterItemButton onClick={onRemove}>Remove</CounterItemButton>
      </div>
    </div>
  );
};

export default CounterItem;
