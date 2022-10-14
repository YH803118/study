
import React, {Component} from "react";
import './Timer.css';

class Timer extends Component{
    state = {
        time: new Date(),
        stop: false
    }
    whatTime = () => {
        this.setState({
            time : new Date()
        });
        console.log('setState');
    }
    
    
    render(){
        const timeStop = () =>{
            this.setState({
                stop: true
            })
        }
        const timeStart = () =>{
            this.setState({
                stop: false
            })
        }

        if(!this.state.stop)
        setTimeout(this.whatTime, 1000);

        return (<div id="watch">
            <div id='time'>현재 시간 : {timeSet(this.state.time)} </div>
            <button className="watchBtn" onClick={timeStart}> Start </button> 
            <button className="watchBtn" onClick={timeStop}> Stop </button>
            </div>);
    }
}

function timeSet(time) {
    var hours = ('0' + time.getHours()).slice(-2); 
    var minutes = ('0' + time.getMinutes()).slice(-2);
    var seconds = ('0' + time.getSeconds()).slice(-2); 

    var timeString = hours + ':' + minutes  + ':' + seconds;
    return timeString;
}
export default Timer;