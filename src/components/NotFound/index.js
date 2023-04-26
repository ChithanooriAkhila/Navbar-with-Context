import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

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
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="about-image"
            />
            <h1 style={{color: `${isDarkTheme ? 'white' : 'black'}`}}>
              Lost Your Way?
            </h1>
            <p style={{color: `${isDarkTheme ? 'white' : 'black'}`}}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
