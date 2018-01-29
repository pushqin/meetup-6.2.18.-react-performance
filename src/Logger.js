import React from 'react'


class Logger extends React.Component {
    
    render(){
        return(
            <React.Fragment >
                <div id='log' style={{float:'right',width:'20%',overflow:'scroll',height:'600px'}} ></div>
            </React.Fragment>
            )
    }
}

export default Logger;