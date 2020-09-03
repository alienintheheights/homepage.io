import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'

  
export default function About() {
    return (
        <Card>
            <Card.Body>
                <div className='fauxmat-dyna-split'>
                    <span className='fauxmat-split-larger ' >
                        <h1>Andrew Lienhard </h1>
                    Hi, I'm a software engineer and musician living in Houston, Texas.
                    This site is mostly about non-software things like <Link to='music'>music</Link> and <Link to='posts'>writing</Link>.
                    Be sure to also check out my wife's amazing
                    creations at <a href="http://sparrowandthenest.com">Sparrow and the Nest</a>.
                        <div className='fauxmat-pad'/> 
                        <div className='fauxmat-email'> email: andrew.lienhard@gmail.com</div>
                   
                    </span>  
                    <span className='fauxmat-split-smaller'> 
                        <img 
                            src="/img/us.jpg"  
                            alt='Andrew and Stephanie Lienhard'/>  
                    </span>
                </div> 
            </Card.Body>
                       
        </Card>
    )
}