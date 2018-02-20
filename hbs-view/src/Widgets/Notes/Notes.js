import React, {Component} from 'react';
import WidgetClasses from './../CSS/Widgets.css';
import classes from './Notes.css';

class Notes extends Component {

render() {
  return (
    <div className={WidgetClasses.widget}>
      <h4 className={WidgetClasses.widgetDescriptionNotes}>Notes</h4>
      <div className={classes.Notes}>
      <input className={classes.enterNote} type="text" ref="note" id="note" name="one_note" placeholder="Take a quick Note"></input>
        <ul className={classes.someNotes}>
          <li className={classes.oneNote}>This is a HardCoded Note</li>
        </ul>
      </div>
    </div>
  )
}

}

export default Notes;
