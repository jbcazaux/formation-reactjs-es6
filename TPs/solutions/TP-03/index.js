import React from 'react';
import ReactDOM from 'react-dom';
import StudentsApp from './StudentsApp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'typeface-roboto';

ReactDOM.render(
    <MuiThemeProvider>
        <StudentsApp/>
    </MuiThemeProvider>,
    document.getElementById('root')
);
