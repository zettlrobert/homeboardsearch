import React, { Component } from 'react';
import classes from './CSS/Searchbar.css';
import axios from 'axios';


class Searchbar extends Component {

   sendInformation = () => {
    axios.post('http://localhost:3300/search', {
      query : this.refs.searchParam.value,
      webSearch : this.refs.checkbox1.checked,
      imageSearch : this.refs.image_search.checked

    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <div className={classes.searchWrapper}>
        <form>
          <input className={classes.inputBarAndSubmit} type="text" ref="searchParam" id="search" name="search_parameter" placeholder="Click to Enter Searchquerie"></input>

          <h3>Select Search Category:</h3>
          <div className={classes.checkOptions}>

              <div className={classes.options}>
                <input type="checkbox" id="checkbox_1" ref="checkbox1" name="queryOption" value="Web Search"></input>
                <label htmlFor="checkbox_1">Web Search</label>
              </div>

              <div className={classes.options}>
                <input className={classes.checkbox} type="checkbox" ref="image_search" id="checkbox_2" name="queryOption" value="Image"></input>
                <label htmlFor="checkbox_2">Image Search</label>
              </div>

              <div className={classes.options}>
                <input className={classes.checkbox} type="checkbox" id="checkbox_3" name="queryOption" value="News"></input>
                <label htmlFor="checkbox_3">News Search</label>
              </div>

              <div className={classes.options}>
                <input className={classes.checkbox} type="checkbox" id="checkbox_4" name="queryOption" value="Video"></input>
                <label htmlFor="checkbox_4">Video Search</label>
              </div>

              <div className={classes.options}>
                <input className={classes.checkbox} type="checkbox" id="checkbox_5" name="queryOption" value="PDF"></input>
                <label htmlFor="checkbox_5">PDF Search</label>
              </div>
          </div>

          <input className={classes.inputBarAndSubmit} onClick={this.sendInformation} type="button" value="Search"></input>
        </form>

      </div>
    );
  }
}

export default Searchbar;
