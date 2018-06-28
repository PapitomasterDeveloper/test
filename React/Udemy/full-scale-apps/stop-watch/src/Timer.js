import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);

        this.state = {
            clock: 0
        };
    }

    ticker = () =>
        this.setState({clock: new Date() - this.props.start})

    componentDidMount(){
        this.timer = setInterval(this.ticker, 50)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        var clock = Math.round(this.state.clock / 100);
        var seconds = (clock / 10).toFixed(1);
        var minutes = (clock / 10).toFixed(2);
        var hours = (clock / 10).toFixed(3);
        // console.log(this.props.start);
        // console.log(new Date() - this.props.start);
        return(
            <div className="">
                <p>You have been on this site since: </p> <br />
                <span> {seconds} </span>
                <p>Seconds.</p>
                <p>You have been on this site since: </p> <br />
                <span> {minutes} </span>
                <p>Minutes.</p>
                <p>You have been on this site since: </p> <br />
                <span> {hours} </span>
                <p>Hours.</p>
            </div>
        );
    }
}

export default Timer;