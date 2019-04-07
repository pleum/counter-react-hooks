import React, { useContext } from 'react';
import { AppContext } from './context';
import CounterItem from './CounterItem';

const CounterButton = ({ children, onClick }) => {
  return (
    <div
      className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Counter = () => {
  const [{ counter }, dispatch] = useContext(AppContext);
  const actionAddCounter = () => dispatch({ type: 'ADD_COUNTER' });
  const actionRemoveAllCounters = () =>
    dispatch({ type: 'REMOVE_ALL_COUNTER' });

  const actionIncrementCounter = id =>
    dispatch({ type: 'INCREMENT_COUNTER', id });
  const actionDecrementCounter = id =>
    dispatch({ type: 'DECREMENT_COUNTER', id });
  const actionRemoveCounter = id => dispatch({ type: 'REMOVE_COUNTER', id });

  return (
    <div>
      <h2 className="normal">Counter Component</h2>
      <div>
        <CounterButton onClick={actionAddCounter}>Add Counter</CounterButton>
        <CounterButton onClick={actionRemoveAllCounters}>
          Remove All Counters
        </CounterButton>
      </div>
      <div>
        {Object.keys(counter.items).map(key => {
          const item = counter.items[key];
          return (
            <CounterItem
              key={key}
              item={item}
              onIncrement={() => actionIncrementCounter(item.id)}
              onDecrement={() => actionDecrementCounter(item.id)}
              onRemove={() => actionRemoveCounter(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
