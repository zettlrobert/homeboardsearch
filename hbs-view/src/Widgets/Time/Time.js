import React, {Component} from 'react';
import WidgetClasses from './../CSS/Widgets.css';
import classes from './Time.css';



class Time extends Component {

constructor(props) {
  super(props);
  this.updateDate = this.updateDate.bind(this);

  this.state = {
    time: new Date().toLocaleTimeString(),
    date: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),

  }
  this.interval = setInterval(this.updateDate, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}


updateDate() {
  this.setState({
    time: new Date().toLocaleTimeString(),
    date: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),

  });
}


render() {

  return (
    <div className={WidgetClasses.widgetTime}>

    <div className={classes.WatchContainer}>
      <h4 className={WidgetClasses.widgetDescriptionTime}>Date and Time</h4>
      <div className={classes.Watch}>
        <p className={classes.WatchTick}>{this.state.time}</p>
        <p className={classes.Date}>{this.state.date}/{this.state.month}/{this.state.day}</p>
      </div>
    </div>

    </div>
  );
}

componentDidMount(){
  console.log("Time Working");
}

}

export default Time;
