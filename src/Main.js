import React from 'react'
import {Container} from 'react-bootstrap'

import { HashRouter, Route, Switch } from 'react-router-dom'

import NavHome from './components/NavHome'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Etc from './pages/Etc'
import Music from './pages/Music'
import Home from './pages/Home'
import Video from './pages/Video'
import About from './components/About'
import Footer from './components/Footer'

export default function Main() {
    return (
        <div id='fauxmat-root'>
            <Container>
                <NavHome/>
                <HashRouter basename="/">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/blog/:lp?' component={Blog}/>
                        <Route exact path='/home' component={Home}/>
                        <Route path='/post/:id/:fp?' component={Post}/> 
                        <Route exact path='/etc' component={Etc}/> 
                        <Route exact path='/music' component={Music}/> 
                        <Route exact path='/videos' component={Video}/> 
                        <Route exact path='/about' component={About}/> 
                    </Switch>
                </HashRouter>
                <Footer/>
            </Container>
        </div>
    )
}