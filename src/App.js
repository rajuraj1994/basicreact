
import './App.css';
import MyRoutes from './MyRoutes';
// import { createStore } from 'redux';
// createStore is used to know for compiler that any reducer is our store
import { Provider } from 'react-redux';
//provider is used to pass data from reducer to components
// import cartReducer from './redux/reducers/cartReducer';
import store from './store';

const App=()=> {
  // const store=createStore(cartReducer)
  return (
    <Provider store={store}>
      <MyRoutes/>
    </Provider>
  );
}

export default App;
