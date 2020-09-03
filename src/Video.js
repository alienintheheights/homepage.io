import React, {  useEffect }  from 'react'
import VideoLinks from './VideoLinks'

export default function Video() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className=''>
            <div className='fauxmat-jumbo'>
                Videos
            </div>
            <VideoLinks/>
        </div>)
}