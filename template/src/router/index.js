import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Main from '../views/Main/Main';

function Routes() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="main" component={Main} title="Main" />
      </Stack>
    </Router>
  );
}
export default Routes;
