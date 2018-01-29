import React from 'react';
import ListItem from "./ListItem";

class List extends React.PureComponent{
    
    render(){
        return(
            <div style={{  'display': 'grid',
                'gridTemplateColumns': 'repeat(20, 1fr)',
                'gridGap': '10px',
                'gridAutoRows': 'minmax(100px, 100px)'}}>
                {console.log("Render List")}
                {this.props.stringArray.map(value=>{
                    return <ListItem key={value} value={value}/>
                })}
           </div>
        )
    }
};

export default List;