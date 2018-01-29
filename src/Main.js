import React from 'react';
import List from "./List";
import {generateStringArray,listLength,startTimer,endTimer,clearConsole} from './../utils';


class Main extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            stringArray: [],
            currentLength:listLength
        };
        this.buttonClick = this.buttonClick.bind(this);
    }
    
    componentWillMount(){
        this.setState({
            stringArray: generateStringArray(listLength),
        });
        console.log("componentWillMount");
    }
    
    componentDidUpdate() {
        endTimer('main')
    }
    
    buttonClick(where){
    
        startTimer('main')
        
        switch (where){
            case 'delete-first':
                this.setState({stringArray : this.state.stringArray.slice(1,this.state.stringArray.length),
                    currentLength:this.state.currentLength--});
                break;
            case 'delete-middle':
                this.setState({stringArray : (()=>{
                        this.state.stringArray.splice(parseInt(this.state.stringArray.length/2),1);
                        return this.state.stringArray;
                     })(),
                    currentLength:this.state.currentLength--
                });
                console.log(`Index ${parseInt(this.state.stringArray.length/2)} deleted`)
                break;
            case 'delete-last':
                this.setState({stringArray : this.state.stringArray.slice(0,this.state.stringArray.length-1),
                    currentLength:this.state.currentLength--});
                break;
          
            case 'add-first':
                this.setState({stringArray : (()=>{
                    this.state.stringArray.unshift(123123);
                    return this.state.stringArray;
                })(),
                    currentLength:this.state.currentLength++
                });
                break;
            case 'reload':
                this.setState({stringArray : generateStringArray(listLength) ,
                    currentLength:listLength});
                break;
        }

        console.log("click");
    }
    
    renderButton(key,text){
      return  (<button onClick={()=>this.buttonClick(key)}>
                  {text}
                  {console.log(`Button ${text} Render`)}
        </button>)
    }
    
    render(){
        return(
            <div  style={{color:'black',display: 'inline-block',width: '75%'}}>
                {console.log("Render Main")}
                <div style={{paddingBottom:'20px'}}>
                    {this.renderButton('delete-first',  'Delete first')}
                    {this.renderButton('delete-middle',  'Delete middle')}
                    {this.renderButton('delete-last',  'Delete last')}
                    {this.renderButton('add-first',  'Add first')}
                    {this.renderButton('add-middle',  'Add middle')}
                    {this.renderButton('add-last',  'Add last')}
                    {this.renderButton('reload',  'reload')}
                    
                    <button onClick={()=>clearConsole()}>
                        Clear Console
                    </button>
    
                </div>
                <List stringArray = {this.state.stringArray}/>
            </div>
        )
    }
};

export default Main;