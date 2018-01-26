import React from 'react';
import List from "./List";
import {generateStringArray,listLength} from './../utils';

class Main extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            stringArray: []
        };
    }
    
    componentWillMount(){
        this.setState({
            stringArray: generateStringArray(listLength),
            currentLength:listLength
        });
        console.log("componentWillMount");
    }
    
    buttonClick(where){
        
        switch (where){
            case 'f':
                this.setState({stringArray : this.state.stringArray.slice(1,this.state.stringArray.length),
                    currentLength:this.state.currentLength--});
              
                break;
            case 'm':
                this.setState({stringArray : (()=>{
                        this.state.stringArray.splice(parseInt(this.state.stringArray.length/2),1);
                        return this.state.stringArray;
                     })(),
                    currentLength:this.state.currentLength--
                });
                console.log(`Index ${parseInt(this.state.stringArray.length/2)} deleted`)
                break;
            case 'l':
                this.setState({stringArray : this.state.stringArray.slice(0,this.state.stringArray.length-1),
                    currentLength:this.state.currentLength--});
                break;
            case 'rr':
                this.setState({stringArray : generateStringArray(listLength) ,
                    currentLength:listLength});
                break;
        }

        console.log("click");
    }
    
    render(){
        return(
            <div>
                <div style={{paddingBottom:'20px'}}>
                    <button onClick={()=>this.buttonClick('f')}>
                        Delete Left
                    </button>
                    <button onClick={()=>this.buttonClick('m')}>
                        Delete Middle
                    </button>
                    <button onClick={()=>this.buttonClick('l')}>
                        Delete Right
                    </button>
                    <button onClick={()=>this.buttonClick('rr')}>
                        Reset
                    </button>
                </div>
                <List stringArray = {this.state.stringArray}/>
            </div>
        )
    }
};

export default Main;