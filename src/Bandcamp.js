import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'

const bandcampUrl = '<iframe style="border: 0; width: 100%; height: 390px;" src="https://bandcamp.com/EmbeddedPlayer/album=3267196876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=large/transparent=true/" seamless><a href="http://thecoastalproject.bandcamp.com/album/the-coastal-project-love-on-a-sunday">The Coastal Project: Love on a Sunday by The Coastal Project</a></iframe>'
export default function Bandcamp(props) {
    
    const hideTitle = props && props.hideTitle
    return (
        <Card className='fauxmat-music-photo'>
            {!hideTitle && <Card.Header className='fauxmat-title'>
                The Coastal Project, EP 2012
            </Card.Header>}
            <Card.Body>
                <Row>
                    <Col md={7} sm={12} lg={8}>
                        <div dangerouslySetInnerHTML={{__html: bandcampUrl}} />  
                    </Col> 
                    <Col md={5} sm={12} lg={4}> 
                        <div className='fauxmat-about-text'>
                            <h2>Love On a Sunday</h2>
                               This <a href='https://thecoastalproject.bandcamp.com/album/the-coastal-project-love-on-a-sunday' 
                                target='_new'>bandcamp EP</a> is a collection of music I wrote in 2010/2011 featuring Erich Avinger, Paul Chester, Mike Sunjka,
                               Patrick Williams, Jr., Al Campbell, Steve Brown, Ken Mondshine and Steve Allison. 
                               They, of course, played better than the music deserved.
                               If purchased, this eight-track set includes all the sheet music. Hover over the image to hear individual tracks.
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
             
    )
}