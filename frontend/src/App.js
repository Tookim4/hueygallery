import { Provider } from "react-redux";
import {store} from './app/store'
import HomePage from "./pages/home-page";
import 'rsuite/dist/rsuite.min.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <HomePage/>
       </div>
    </Provider>
    
  );
}

export default App;
