import React from 'react';
import ListItem from "./ListItem";

class List extends React.Component{
    
    render(){
        return(
            <div style={{  'display': 'grid',
                'grid-template-columns': 'repeat(20, 1fr)',
                'grid-gap': '10px',
                'grid-auto-rows': 'minmax(100px, 100px)'}}>
                {this.props.stringArray.map(value=>{
                    return <ListItem value={value}/>
                })}
           </div>
        )
    }
};

export default List;