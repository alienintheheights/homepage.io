import React, {  useEffect }  from 'react'
import Bandcamp from '../components/Bandcamp'
import MusicLinks from '../components/MusicLinks'

export default function Music() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className=''>
            <div className='fauxmat-jumbo fauxmat-music-photo'>
                Solos and Collaborations
            </div>
            <div className=''>
                <Bandcamp/>
                <MusicLinks/>
            </div>
        </div>
    )
}