import React from 'react'

import Social from './Social'
export default function Footer() {
    return (
        <div className='fauxmat-footer'>
            <span>
                <Social/>
            </span>
            <span className='fauxmat-disclaimer'>
                Written from scratch in ReactJS. Copyright 2020. 
            </span>
        </div>
    )
}
