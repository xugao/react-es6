import React from 'react';
import {render} from 'react-dom';

import 'react-date-picker/index.css';
import DatePicker from 'react-date-picker';

class App extends React.Component {
  onChange(dateString, { dateMoment, timestamp }) {
    console.log(dateString);
  }

  render () {
    return (
        <div>
            <p>Hello React!</p>
            <DatePicker
              minDate={Date.now()}
              maxDate='2020-1-1'
              date={Date.now()}
              onChange={this.onChange}
            />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
