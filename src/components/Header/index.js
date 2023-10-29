/* eslint-disable react/self-closing-comp */
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'
import './index.css'

class Header extends Component {
  logoutClicked = () => {
    Cookies.remove('spotiyfy_assignemnt')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <div className="nav-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </Link>
        <button
          type="button"
          className="logout-button"
          onClick={this.logoutClicked}
        >
          Logout
        </button>
      </div>
    )
  }
}
export default withRouter(Header)
