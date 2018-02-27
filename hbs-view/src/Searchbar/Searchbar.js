import React, { Component } from 'react';
import classes from './CSS/Searchbar.css';
import axios from 'axios';


class Searchbar extends Component {
////////////////////////////////
//Send Information To Backend //
////////////////////////////////
   sendInformation = () => {
    axios.post('http://localhost:3300/search', {
      query : this.refs.searchParam.value,
      webSearch : this.refs.webSearch.checked,
      imageSearch : this.refs.imageSearch.checked,
      newsSearch : this.refs.newsSearch.checked,
      videoSearch : this.refs.videoSearch.checked,
      pdfSearch : this.refs.pdfSearch.checked

    }).then( (res) => {console.log({res});
      alert("Search Succesful");
      this.props.onSearched(res.data);
    }).catch( (error) => {
      console.log("Error sending Form: " + error);
    });
  }

////////////////////////////////////////////////////////////////////////
// ACCEESS SEARCH WITH REF to use in backend name for use in FrontEnd //
////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <div className={classes.searchWrapper}>
        <form className={classes.inputForm}>

          <div className={classes.checkOptions}>

              <div className={classes.options}>
                <label htmlFor="checkbox_1">
                  <input type="radio" ref="webSearch" id="checkbox_1" name="qO_Search" defaultChecked={true}></input>
                  Web</label>
              </div>

              <div className={classes.options}>
                <label htmlFor="checkbox_2">
                  <input type="radio" ref="imageSearch" id="checkbox_2" name="qO_Search" value="Image"></input>
                  Images</label>
              </div>

              <div className={classes.options}>
                <label htmlFor="checkbox_3">
                  <input type="radio" ref="newsSearch" id="checkbox_3" name="qO_Search" value="News"></input>
                  News</label>
              </div>

              <div className={classes.options}>
                <label htmlFor="checkbox_4">
                  <input type="radio" ref="videoSearch" id="checkbox_4" name="qO_Search" value="Video"></input>
                  Videos</label>
              </div>

              <div className={classes.options}>
                <label htmlFor="checkbox_5">
                  <input type="radio" ref="pdfSearch" id="checkbox_5" name="qO_Search" value="PDF"></input>
                  PDF files</label>
              </div>
          </div>

          <input className={classes.inputBarAndSubmit} type="text" ref="searchParam" id="search" name="search_parameter" placeholder="Enter your search Query"></input>
          <input className={classes.sendQuery} onClick={this.sendInformation} type="button" value="Search"></input>
        </form>

      </div>
    );
  }
}

export default Searchbar;
