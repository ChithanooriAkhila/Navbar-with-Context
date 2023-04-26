import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

// Write your code here
const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <Navbar />
          <div
            style={{
              backgroundColor: `${isDarkTheme ? 'black' : 'white'}`,
            }}
            className="about-container"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
              className="about-image"
            />
            <h1 style={{color: `${isDarkTheme ? 'white' : 'black'}`}}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
