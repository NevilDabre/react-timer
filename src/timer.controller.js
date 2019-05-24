import React, { Component } from 'react'
import moment from 'moment'
import './App.css'


class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0,
            isOn: false,
            start: new Date()
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }

    startTimer() {
         this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
          })
          this.timer = setInterval(() =>{
            let newTime = Date.now() - this.state.start;
          this.setState({
            time: moment.utc(newTime).format('HH:mm:ss:SSS')
          })
        }, 100);

    }

    stopTimer(){
        this.setState({
            time: 0,
            isOn: false,
            start: new Date()
        })
        clearInterval(this.timer)
    }

    render() {
        let buttonStart = !this.state.isOn ? <button className="start-button" onClick={this.startTimer}>Start</button> : null
        let buttonStop = this.state.isOn ? <button className="start-button" onClick={this.stopTimer}>Stop</button> : null
        return (
            <div>
                <h2 className="timer-text">{this.state.time}</h2>
                {buttonStart} {buttonStop}

            </div>
        )
    }
}

export default Timer