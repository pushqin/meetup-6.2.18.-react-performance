// App.js
import React from 'react';
import Logger from './src/Logger';
import Main from './src/Main';



class App extends React.Component {
    
    componentWillMount(){
      
        console.log("componentWillMount");
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
                <Main style={{color:'black'}}></Main>
                <Logger rerender={12} ></Logger>
            </React.Fragment>
        );
    }
}

export default App;