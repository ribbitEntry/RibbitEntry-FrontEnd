import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { SearchIcon } from '../../assets/index';
import './css/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  HandleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  SearchContent = () => {
    const { searchText } = this.state;

    axios
      .get(`http://ribbit-api.entrydsm.hs.kr/api/search?word=${searchText}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        const UserData = res.data;
        this.props.GetSearchData(UserData, UserData[0].nickname);
        console.log(UserData);
      })
      .catch((error) => {
        this.props.GetSearchData(false, searchText);
      });
    this.setState({
      searchText: '',
    });
  };

  EnterKeyDown = (e) => {
    const { history } = this.props;

    if (e.key === 'Enter') {
      history.push(`/search/?word=${this.state.searchText}`);
      this.SearchContent();
    }
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className="Header__Search" id="Header__Search">
        <div className="Search__Container">
          <input
            autoComplete="off"
            className="SearchContainer__Input"
            name="searchText"
            type="text"
            value={searchText}
            onChange={e => this.HandleInput(e)}
            onKeyPress={e => this.EnterKeyDown(e)}
            placeholder="리빗 검색하기"
          />
          <Link
            to={`/search/?word=${searchText}`}
            onClick={searchText ? null : e => e.preventDefault()}
          >
            <img
              className="SearchContainer__Icon"
              src={SearchIcon}
              alt="돋보기"
              onClick={() => this.SearchContent()}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
