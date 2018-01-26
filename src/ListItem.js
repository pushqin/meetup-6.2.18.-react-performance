import React from 'react';

class ListItem extends React.Component{
    
    render(){
        return(
            <div style={{padding:'5px',border:'1px solid green'}}>{this.props.value}</div>
        )
    }
};

export default ListItem;