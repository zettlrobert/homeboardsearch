import React, { Component } from 'react';
import classes from './CSS/Header.css';
import Icon from 'react-icons-kit';
//Icons
import { ic_keyboard_arrow_up } from 'react-icons-kit/md/ic_keyboard_arrow_up';


class Header extends Component {

state = {
  "header" : classes.headerShow,
  "headline": classes.headlineShow,
  "arrowUp": classes.arrowUpShow,
  "taskLabel": classes.taskLabelShow
}

handleChange = () => {
  console.log("clicked");
  var header = (this.state.header === classes.header) ? classes.headerShow : classes.header;
  this.setState({header});

  var headline = (this.state.headline === classes.headline) ? classes.headlineShow : classes.headline;
  this.setState({headline});

  var arrowUp = (this.state.arrowUp === classes.arrowUp) ? classes.arrowUpShow : classes.arrowUp;
  this.setState({arrowUp});

  var taskLabel = (this.state.taskLabel === classes.taskLabel) ? classes.taskLabelShow : classes.taskLabel;
  this.setState({taskLabel});
}

render(){

  return(

    <div>
    <header className={this.state.header}>
    <h1 className={this.state.headline}>
      Homeboard Search
    </h1>
      <button onClick={this.handleChange.bind(this)} className={this.state.arrowUp}><Icon icon={ic_keyboard_arrow_up} size={150}/></button>
      <p className={this.state.taskLabel}>Slide Up Header</p>
    </header>
    </div>

    );
  }

}

export default Header;
