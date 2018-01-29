import React from 'react';

class ListItem extends React.Component{
    
    getGrayRandomColor(){
        var value = Math.random() * 0xFF | 0;
        var grayscale = (value << 16) | (value << 8) | value;
        return grayscale.toString(16);
    }
    
    getRandomColor(){
        return Math.floor(Math.random()*16777215).toString(16)
    }
    render(){
            return(
                <div style={{padding:'5px',border:'1px solid green',backgroundColor:`#${this.getRandomColor()}`}}>
                {console.log("ListItem Render")}
                
                {this.props.value}
            </div>
        )
    }
};

export default ListItem;