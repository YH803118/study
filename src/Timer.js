
import React, {Component} from "react";
import './Timer.css';

class Timer extends Component{
    state = {
        time: new Date(),
        stop: false,
        timeUpList: []
    }
    whatTime = () => {
        this.setState({
            time : new Date()
        });
        console.log('setState');
    }
    
    
    render(){
        // let timeUpList = ['11:11:11'];
        const nowTime = timeSet(this.state.time);
        const timeStop = (timeUpList) =>{
            if(this.state.stop !== true){
                this.setState({
                    stop: true,
                    timeUpList: [...this.state.timeUpList,nowTime]
                })
            }
        }
        const timeStart = () =>{

            this.setState({
                stop: false
            })
        }

        if(!this.state.stop)
        setTimeout(this.whatTime, 1000);

        const TimeUp = () => {
            if(this.state.timeUpList.length !== 0){
                let timeArr = [];
                for(let i of this.state.timeUpList){
                    timeArr.push(<p key={i}>{i}</p>)
                }
                return (
                    <>
                        <p>* 멈춘 시간 목록 *</p>
                        {timeArr}
                    </>
                );
            }
        }

        return (<div id="main"><div id="watch">
            <div id='time'>현재 시간 : {nowTime} </div>
            <button className="watchBtn" onClick={timeStart}> Start </button> 
            <button className="watchBtn" onClick={timeStop}> Stop </button>
            </div>
            <div><TimeUp /></div>
            </div>
            );
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