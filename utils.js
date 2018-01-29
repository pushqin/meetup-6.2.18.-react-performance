export const generateStringArray = length =>{
    const stringArray=[];
    for(let p = 0;p<length;p++){
        stringArray.push(p);
    }
    return stringArray;
}

export const startTimer = (type)=> window[`s${type}`] = window.performance.now();
export const endTimer = (type)=>{
        window[`e${type}`] = window.performance.now()
        const res = `${type} took ${(window[`e${type}`] - window[`s${type}`])} ms`
        console.log('%c'+res,'color: blue; font-size: large');
}
export const listLength = 50;

export const consoleMonkey  = ()=> {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
        
        logger.scrollTop = logger.scrollHeight;
        
    }
};

export const clearConsole = () =>{
    var logger = document.getElementById('log');
    logger.innerHTML = "";
}
