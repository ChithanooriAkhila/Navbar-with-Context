// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const onChangeTheme = () => {
            toggleTheme()
          }
          return (
            <div
              className={
                isDarkTheme ? 'dark-navbar-container' : 'light-navbar-container'
              }
            >
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
                }
                alt="website logo"
              />

              <ul className="list-container">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                {/* <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li> */}
              </ul>
              <button type="button" onClick={onChangeTheme} data-testid="theme">
                <img
                  src={
                    !isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  }
                  alt="theme"
                />
              </button>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavBar
