import App from './Components/App';
import React from 'React';
import { Provider } from 'react-redux';
import configureStore from './store';
import SplashScreen from './Components/SplashScreen'

const store = configureStore();

function setup() {
  class Root extends React.Component {
    render() {
      return (
        <SplashScreen logo={require('./Assets/logo.png')} duration={2000}>
          <Provider store={store}>
            <App />
          </Provider>
        </SplashScreen>
      );
    }
  }

  return Root;
}

module.exports = setup;
