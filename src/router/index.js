import Main from '../pages/Main';
import News from '../pages/News';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/news' element={<News />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
