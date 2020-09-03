import React from 'react'
import {Card} from 'react-bootstrap'
import { linkJson } from './data/links'

export default function PhotoLinks(props) {
    const displayCount = (props && props.number) || 0
    return (
        <div>
            {linkJson 
            && linkJson.filter( (value, index) => (!displayCount || index < displayCount))
            .map( (value, index) => {
                return (
                    <Card key={`fauxmat-links-${index}`} className='fauxmat-link-photo'>
                        <div dangerouslySetInnerHTML={{__html: value.photoLink}} />
                        <Card.Body>
                            <div dangerouslySetInnerHTML={{__html: value.linkHtml}} />
                            <div className='fauxmat-pad'></div>
                            <div className='fauxmat-photo-credit'>Unrelated photo: {value.photoCredit}</div>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>)
}