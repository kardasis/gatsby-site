import React from 'react'
import { Link } from 'gatsby'
import twitter_logo from '../images/hollow-cut-twitter.svg'
import linkedin_logo from '../images/hollow-cut-linkedin.svg'
import github_logo from '../images/hollow-cut-github.svg'

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center bg-pink px-48">
      <Link to="/" className="py-5 font-bold">
        Home
      </Link>
      <Link to="/about" className="py-5 font-bold">
        About
      </Link>
      <div className="flex flex-row gap-5">
        <Link to="https://twitter.com/kardasis">
          <img src={twitter_logo} className="w-10 opacity-50" />
        </Link>
        <Link to="https://github.com/kardasis">
          <img src={github_logo} className="w-10 opacity-50" />
        </Link> <Link to="https://www.linkedin.com/in/ari-kardasis-a1b0a834/">
          <img src={linkedin_logo} className="w-10 opacity-50" />
        </Link>
      </div>
    </nav>
  )
}
