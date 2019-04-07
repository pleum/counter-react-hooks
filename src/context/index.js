import React, { useReducer } from 'react';

const AppContext = React.createContext();

const initialState = {
  counter: {
    id: 1,
    items: {
      0: {
        count: 0,
        id: 0
      }
    }
  },
  user: {
    name: 'Pleum'
  }
};

const counterReducer = (state, action) => {
  console.log('Counter Reducer', state, action);
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        id: state.id + 1,
        items: { ...state.items, [state.id]: { count: 0, id: state.id } }
      };
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            count: state.items[action.id].count + 1
          }
        }
      };
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            count: state.items[action.id].count - 1
          }
        }
      };
    case 'REMOVE_COUNTER':
      const newState = {
        ...state
      };
      delete newState.items[action.id];
      return newState;
    case 'REMOVE_ALL_COUNTER':
      return initialState.counter;
    default:
      return state;
  }
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
};

const rootReducer = ({ counter, user }, action) => ({
  counter: counterReducer(counter, action),
  user: userReducer(user, action)
});

const AppContextProvider = props => {
  return (
    <AppContext.Provider value={useReducer(rootReducer, initialState)}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
