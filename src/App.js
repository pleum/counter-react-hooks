import React from 'react';
import { AppContextProvider } from './context';
import Counter from './Counter'
import User from './User'

const App = () => {
  return (
    <AppContextProvider>
      <div className="mw6 center ph2 ph4-ns">
        <header>
          <h1 className="normal lh-copy measure">
            Counter Application
          </h1>
        </header>
        <main>
          <User />
          <Counter />
        </main>
      </div>
    </AppContextProvider>
  );
};

export default App;
