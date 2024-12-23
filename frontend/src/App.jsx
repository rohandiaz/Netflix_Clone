import React from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Body from './components/Body';
// import { store } from './redux/store.js'; // Ensure the correct path to the store
import store from "./redux/store.js";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Body />
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;