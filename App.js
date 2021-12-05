/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import * as React from "react";

import HomeStack from "./appList/routes/HomeStack";
import SplashScreen from "./appList/components/SplashScreen";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      component: <SplashScreen />,
    };
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.setState({ component: <HomeStack /> });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      this.state.component
    );
  }
}

export default App;
