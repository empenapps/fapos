import './App.css';
import Routes from './routes';
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './store/store';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';


function App() {

  return (
    <Provider store = {store}>
    <ThemeCustomization>
        <ScrollTop>
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
    </Provider>
  );
}

export default App;


