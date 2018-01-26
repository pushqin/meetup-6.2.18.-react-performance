import React from 'react'


class Logger extends React.Component {
    
    render(){
        return(
            <React.Fragment >
                <div style={{float:'right',width:'20%'}} > rerenders : {this.props.rerender}</div>
            </React.Fragment>
            )
    }
}

export default Logger;