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
            <MusicLinks number='1' hideTitle={true} />
            <Bandcamp hideTitle={true} />
            <VideoLinks featured={true} hideTitle={true}/>
            <PhotoLinks number='1'/>
         
        </div>)
}