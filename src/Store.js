import { createStore } from 'redux'
// import { createStoreHook } from 'react-redux';

import rootReducer from './Components/UseRedux/Reducer/Index'

//  const store = createStoreHook(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer);

 export default store