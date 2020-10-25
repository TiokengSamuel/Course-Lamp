import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import ColorPanel from './ColorPanel/ColorPanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import SidePanel from './SidePanel/SidePanel';

export const App = () => (
  <Grid columns="equal" className="app" style={{ background: '#eee' }}>
    <ColorPanel/>
    <SidePanel/>
    <Grid.Column>
      <Messages/>
    </Grid.Column>
    
    <MetaPanel/>
  </Grid>
)


