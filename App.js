// App.js
import React from 'react';
import Logger from './src/Logger';
import Main from './src/Main';
import {consoleMonkey} from './utils'


class App extends React.Component {
    
    componentDidMount(){
        console.log("componentWillMount");
        consoleMonkey();
    }
    
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    

    render() {
        return (
            <React.Fragment>
                {console.log("Render App")}
                <Main style={{color:'black',display: 'inline-block',width: '75%'}}></Main>
                <Logger></Logger>
                
            </React.Fragment>
        );
    }
}

export default App;