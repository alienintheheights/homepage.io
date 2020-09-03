import React from 'react'
import Welcome from './Welcome'
import PhotoLinks from './PhotoLinks'
import MusicLinks from './MusicLinks'
import VideoLinks from './VideoLinks'
import Bandcamp from './Bandcamp'
import About from './About'

export default function Home() {
    return (
        <div id='fauxmat-home'>
            <Welcome/>
            <About/>
            <div id='fauxmat-home-list'>
                <Bandcamp/>
                <div className='fauxmat-jumbo fauxmat-music-photo'>
                    <div className='fauxmat-dyna-split'>
                        <span className='fauxmat-split-largest'>Links and photos</span>  
                        <span className='fauxmat-split-smallest'><a href='#etc'>more</a></span>
                    </div>
                </div>
                <PhotoLinks number='1'/>
                <div className='fauxmat-jumbo fauxmat-music-photo'>
                    <div className='fauxmat-dyna-split'>
                        <span className='fauxmat-split-largest'>Recent music sets</span>  
                        <span className='fauxmat-split-smallest'><a href='#music'>more</a></span>
                    </div>
                </div>
                <MusicLinks number='1'/>
                <div className='fauxmat-jumbo fauxmat-music-photo'>
                    <div className='fauxmat-dyna-split'>
                        <span className='fauxmat-split-largest'>Recent video projects</span>  
                        <span className='fauxmat-split-smallest'><a href='#videos'>more</a></span>
                    </div>
                </div>
                <VideoLinks number='1'/>
            </div>
        </div>)
}