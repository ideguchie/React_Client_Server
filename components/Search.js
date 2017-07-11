import React, {Component} from 'react';
import TextBox from './TextBox.js';
import axios from 'axios';
import '../css/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();

    var searchText = this.state.searchText.trim();
    if (!searchText) {
      return;
    }

    axios
    .get(this.props.url + searchText)
    .then(res => {
      console.log(res);
    })
    .catch(res => {
      console.log(res);
    });

    // this.setState({
    //   searchText: "",
    // });

  }

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  render() {
    return (
      <div className="search">
        <form className="searchForm" onSubmit={this.handleSearch}>
          <TextBox value={this.state.searchText}
            divClassName='search-div'
            textClassName='search-text-input'
            placeholder='Search'
            onChange={this.setValue.bind(this, 'searchText')} />

          <input title="Search" type="submit" value='Search' />
        </form>
      </div>
    );
  }
}

export default Search;
