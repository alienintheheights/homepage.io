import React from 'react'
import {Card} from 'react-bootstrap'
import { musicJson } from './data/music'


export default function MusicLinks(props) {
    const displayCount = (props && props.number) || 0
    return (
        <div>
            {musicJson && 
             musicJson.filter( (value, index) => (!displayCount || index < displayCount))
                .map( (value, index) => {
                    return (
                        <Card key={`fauxmat-music-${index}`} className='fauxmat-music-photo'>
                            <Card.Header className='fauxmat-title'>
                                {value.title}
                            </Card.Header>
                            <Card.Body>
                                <div dangerouslySetInnerHTML={{__html: value.linkHtml}} />
                            </Card.Body>
                        </Card>
                    )
                })}
        </div>
    )
}