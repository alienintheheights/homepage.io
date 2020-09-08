import React from 'react'

import Social from './Social'
export default function Footer() {
    return (
        <div className='fauxmat-footer'>
            <span>
                <Social/>
            </span>
            <span className='fauxmat-disclaimer'>
                Written from <a target='_new' href='https://github.com/alienintheheights/homepage.io'>scratch in ReactJS</a> by me. Copyright 2020. 
            </span>
        </div>
    )
}
