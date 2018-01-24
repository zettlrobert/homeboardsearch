import React, { Component } from 'react';
import classes from './CSS/Searchbar.css';
import axios from 'axios';


class Searchbar extends Component {

   sendInformation = () => {
    axios.post('http://localhost:3300/search', {
      query : this.refs.searchParam.value,
      webSearch : this.refs.webSearch.checked,
      imageSearch : this.refs.imageSearch.checked,
      newsSearch : this.refs.newsSearch.checked,
      videoSearch : this.refs.videoSearch.checked,
      pdfSearch : this.refs.pdfSearch.checked

    }).then( (res) => {console.log({res});
      this.props.onSearched(res.data);
    }).catch( (error) => {
      console.log(error);
    });
  }

////////////////////////////////////////////////////////////////////////
// ACCEESS SEARCH WITH REF to use in backend name for use in FrontEnd //
////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <div className={classes.searchWrapper}>
        <form>
          <input className={classes.inputBarAndSubmit} type="text" ref="searchParam" id="search" name="search_parameter" placeholder="Click to Enter Searchquerie"></input>

          <h3>Select Search Category:</h3>
          <div className={classes.checkOptions}>

              <div className={classes.options}>
                <input type="checkbox" ref="webSearch" id="checkbox_1" name="qO_webSearch" value="Web Search"></input>
                <label htmlFor="checkbox_1">Web Search</label>
              </div>

              <div className={classes.options}>
                <input type="checkbox" ref="imageSearch" id="checkbox_2" name="qO_imageSearch" value="Image"></input>
                <label htmlFor="checkbox_2">Image Search</label>
              </div>

              <div className={classes.options}>
                <input type="checkbox" ref="newsSearch" id="checkbox_3" name="qO_newsSearch" value="News"></input>
                <label htmlFor="checkbox_3">News Search</label>
              </div>

              <div className={classes.options}>
                <input type="checkbox" ref="videoSearch" id="checkbox_4" name="qO_videoSearch" value="Video"></input>
                <label htmlFor="checkbox_4">Video Search</label>
              </div>

              <div className={classes.options}>
                <input type="checkbox" ref="pdfSearch" id="checkbox_5" name="qO_pdfSearch" value="PDF"></input>
                <label htmlFor="checkbox_5">PDF Search</label>
              </div>
          </div>

          <input className={classes.sendQuery} onClick={this.sendInformation} type="button" value="Search"></input>
        </form>

      </div>
    );
  }
}

export default Searchbar;
