import React from 'react'
import { Link } from 'react-router-dom'

import {Card, Row, Col} from 'react-bootstrap'

  
export default function About() {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md={7} sm={12} lg={8}>
                        <h1>Andrew Lienhard </h1>
                    Hi, I'm a software engineer and musician living in Houston, Texas.
                    This site is mostly about non-software things like <Link to='music'>music</Link> and <Link to='posts'>writing</Link>.
                    Be sure to also check out my wife's amazing
                    creations at <a href="http://sparrowandthenest.com">Sparrow and the Nest</a>.
                       
                    </Col> 
                    <Col md={5} sm={12} lg={4}> 
                        <img 
                            src="/img/us.jpg"  
                            alt='Andrew and Stephanie Lienhard'/> 
                    </Col>
                </Row>
              
            </Card.Body>
                       
        </Card>
    )
}