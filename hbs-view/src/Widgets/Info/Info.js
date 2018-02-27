import React, {Component} from 'react';
import WidgetClasses from './../CSS/Widgets.css';
import classes from './Info.css';

class Info extends Component {

  render() {

    return (
        <div className={WidgetClasses.widgetInfo}>
          <div className={classes.InfoContainer}>
            <h4 className={WidgetClasses.widgetDescriptionInfo}>Additional Information</h4>
              <ul className={classes.ulInfo}>
                <li className={classes.infoItem}>Here comes some Additional Information</li>
                <li className={classes.infoItem}>Widget Settings coming soon!</li>
              </ul>
          </div>
        </div>
    );
  }
}

export default Info;
