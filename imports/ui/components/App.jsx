/**
 * Created by manhhailua on 1/1/17.
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TopBar from './TopBar';
import Content from './Content';
import BottomBar from './BottomBar';

// App component - represents the whole app
class App extends Component {

  render() {
    return (
      <Paper>
        <TopBar />
        <Content />
        <BottomBar />
      </Paper>
    );
  }
}

export default App;
