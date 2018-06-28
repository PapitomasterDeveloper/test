import React from 'react';
import PropTypes from 'prop-types'

class Clock extends React.Component {
    constructor(){
        super();
        this.state = this.getTime();
    }

    componentDidMount() {
        this.setTimer();
    }

    componentWillUnmount() {
        if(this.timeout){
            clearTimeout(this.timeout);
        }
    }

    setTimer() {
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        this.setState(this.getTime, this.setTimer);
    }
       
    getTime() {
        const currentTime = new Date();
    }

    render() {

        const {hours, minutes, seconds, ampm} = this.state;

        const currentTime = new Date(),
              hours = currentTime.getHours(),
              minutes = currentTime.getMinutes(),
              seconds = currentTime.getSeconds(),
              ampm = hours >= 12 ? 'pm' : 'am';

        return(
            <div className="clock">
                {
                    hours === 0 ? 12 :
                        (hours > 12) ?
                            hours - 12 : hours
                }:{
                    minutes > 9 ? seconds : `0${minutes}`
                }:{
                    seconds > 9 ? seconds : `0${seconds}`
                } {ampm}
            </div>
        )
    }
}

Clock.propTypes = {
    title: PropTypes.string,
    count: PropTypes.number,
    isOn: PropTypes.bool,
    onDisplay: PropTypes.symbols,
    symbol: PropTypes.object,

    user: PropTypes.node
}

Clock.propTypes = {
    counts: PropTypes.array,
    users: PropTypes.arrayOf(PropTypes.object),
    alarmColor: PropTypes.oneOf(['red', 'blue']),
    description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Title)
    ]),
}

Clock.propTypes = {
    basicObject: PropTypes.object,
    numbers: PropTypes
    .objectOf(PropTypes.numbers),
    messages: PropTypes
    .instanceOf(Message),
    contactList: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    })
   }

Clock.propTypes = {
    displayEle: PropTypes.element
}

Clock.propTypes = {
    title: PropTypes.name.isRequired,
}


export default Clock;