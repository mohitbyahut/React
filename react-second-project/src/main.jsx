import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

const createReact = React.createElement(
  'a',
  {href:'https://google.com', target:'_blanks' },
  'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  createReact
)
