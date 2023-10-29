import {useState} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'Username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const url = 'https://task-management-l5o7.onrender.com/login/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {jwtToken} = data
      const cookieData = JSON.stringify(jwtToken)

      Cookies.set('spotiyfy_assignemnt', cookieData, {
        expires: 30,
      })

      const {history} = props

      history.replace('/')
    }

    setUsername('')
    setPassword('')
  }

  return (
    <div className="login">
      <img
        className="logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="Username"
          name="Username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Log In</button>
        <a href="/forgot-password">Forgot your password?</a>
      </form>
    </div>
  )
}

export default Login
