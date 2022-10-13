// import { useState } from "react";
// import React from 'react';
import React, {Component} from "react";
class Timer extends Component{
    state = {
        time: new Date()
    }
    whatTime = () => {
        this.setState({
            time : new Date()
        });
    }
    render(){
        setTimeout(this.whatTime, 1000);
        return (<div>현재 시간 : {timeSet(this.state.time)}</div>);
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