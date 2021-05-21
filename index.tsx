import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {Collapse} from 'react-collapse';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

const App = () => {
const [open, setOpen] = useState(false);
    return (
      <div>
        <Hello name="React" />
        <button onClick={() => setOpen(!open)}>Toggle</button>
        <Collapse isOpened={open}>
          Start editing to see some magic happen :)
        </Collapse>
      </div>
    );
}

render(<App />, document.getElementById('root'));
