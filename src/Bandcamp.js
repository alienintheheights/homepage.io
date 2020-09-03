import React from 'react'
import {Card} from 'react-bootstrap'

export default function Bandcamp(props) {
    const bandcampUrl = '<iframe style="border: 0; width: 100%; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=3267196876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=large/transparent=true/" seamless><a href="http://thecoastalproject.bandcamp.com/album/the-coastal-project-love-on-a-sunday">The Coastal Project: Love on a Sunday by The Coastal Project</a></iframe>'

    return (
        <Card className='fauxmat-music-photo'>
            <Card.Header className='fauxmat-title'>
                        The Coastal Project, EP 2012
            </Card.Header>
            <Card.Body>
                <div className='fauxmat-dyna-split'>
                    <span className='fauxmat-split-larger' dangerouslySetInnerHTML={{__html: bandcampUrl}} />  
                    <span className='fauxmat-split-smaller'> 
                        <div className='fauxmat-about-text'>
                            <h2>Love On a Sunday</h2>
                               This <a href='https://thecoastalproject.bandcamp.com/album/the-coastal-project-love-on-a-sunday' 
                                target='_new'>bandcamp EP</a> is a collection of music I wrote in 2010/2011 featuring Erich Avinger, Paul Chester, Mike Sunjka,
                               Patrick Williams, Jr., Al Campbell, Steve Brown, Ken Mondshine and Steve Allison. 
                               They, of course, played better than the music deserved.
                               If purchased, this eight-track set includes all the sheet music. Hover over the image to hear individual tracks.
                        </div>
                    </span>
                           
                </div>
            </Card.Body>
        </Card>
             
    )
}