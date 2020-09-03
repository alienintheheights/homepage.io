import React from 'react'
import {Container} from 'react-bootstrap'

import { HashRouter, Route, Switch } from 'react-router-dom'

import NavHome from './NavHome'
import Posts from './Posts'
import Post from './Post'
import Etc from './Etc'
import Music from './Music'
import Home from './Home'
import Video from './Video'
import About from './About'
import Footer from './Footer'

export default function Main() {
    return (
        <Container>
            <div className='fauxmat-home'>
                <NavHome/>
                <HashRouter basename="/">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/posts' component={Posts}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/post/:id' component={Post}/> 
                        <Route path='/etc' component={Etc}/> 
                        <Route path='/music' component={Music}/> 
                        <Route path='/videos' component={Video}/> 
                        <Route path='/about' component={About}/> 
                    </Switch>
                </HashRouter>
            </div>
            <Footer/>
        </Container>
    )
}