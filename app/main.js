import '../public/style.css';

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home'

ReactDOM.render(
    <Router>
        <Home />
    </Router>,
    document.getElementById('app')
)
