import MainRoutes from './src/Routes/MainRoutes';
import { store } from './src/Redux/Store';
import { Provider } from 'react-redux';

export default function App() {
  
  return (
    <Provider store={store}>
        <MainRoutes />
    </Provider>
 
  )
}

