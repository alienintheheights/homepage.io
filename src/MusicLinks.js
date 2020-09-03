import React from 'react'
import {Card} from 'react-bootstrap'
import { musicJson } from './data/music'
import { listFilter } from './utils/listfilter'


export default function MusicLinks(props) {
    const displayCount = (props && props.number) || 0
    const useFeatured= (props && props.featured) || false
    return (
        <div>
            {musicJson && 
             listFilter(musicJson, useFeatured, displayCount)
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