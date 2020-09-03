import React, {  useEffect }  from 'react'
import PhotoLinks from './PhotoLinks'

export default function Etc() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className=''>
            <div className='fauxmat-jumbo fauxmat-music-photo'>
                Links <small>(with unrelated photos)</small>
            </div>
            <PhotoLinks/>
            <div className='fauxmat-disclaimer'>Note: many of these links go to an S3 bucket on Amazon. Don't mind the strange URLs.</div>
        </div>)
}