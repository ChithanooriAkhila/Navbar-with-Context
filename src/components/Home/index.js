import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

// Write your code here
const Home = () => (
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
            className="home-container"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              alt="home"
              className="home-image"
            />
            <h1 style={{color: `${isDarkTheme ? 'white' : 'black'}`}}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
