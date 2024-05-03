import React from 'react'

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary text-white">
      <div className="container-fluid justify-content-center p-3">
      <h4 className="text-center">{props.content}</h4>
      </div>
    </nav>
  )
}

export default Header