import React from 'react'
import {Card} from 'react-bootstrap'
import { linkJson } from './data/links'
import { listFilter } from './utils/listfilter'

export default function PhotoLinks(props) {
    const displayCount = (props && props.number) || 0
    const useFeatured= (props && props.featured) || false
    return (
        <div>
            {linkJson &&
            listFilter(linkJson, useFeatured, displayCount)
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