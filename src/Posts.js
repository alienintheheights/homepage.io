import React, { useState, useEffect } from 'react'

import { Button, Row, Col } from 'react-bootstrap'


import LoadingIndicator from './LoadingIndicator'
import { WP_POSTS_URL } from './constants'

export default function Posts() {

    const handleOpen = (id) => {
        window.location='/#/post/' + id
    }

    // Post REST
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [noMoreData, setNoMoreData] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
  
    // REST API effects
    useEffect(() => {
        if (isLoading) return
        // make REST request
        const url = WP_POSTS_URL + pageNumber*1
        setIsLoading(true)
        fetch(url).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                if (response.status === 400) { // WP API returns 400 when pagination hits limit
                    setNoMoreData(true)
                } else {
                    throw new Error(response.data)
                }
            }
        }).then(json => {
            const updatedPosts = [...posts, ...json]
            setPosts(updatedPosts)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [pageNumber])
  
    
    const renderPagination = () => {
        return (
            <div className='fauxmat-pagination-buttons'>
                {!noMoreData && <Button disabled={isLoading} className='fauxmat-pagination-button' onClick={() => setPageNumber(pageNumber*1 + 1)}>Load More Posts</Button>}
            </div>
        )
    }

    return (
        <div id='fauxmat-postgrid' className='fauxmat'>
            <div>
                {isLoading &&  <LoadingIndicator/>}
                <Row>
                    {posts && posts.map((post, index) => {
                        const divStyle = {
                            backgroundRepeat : 'no-repeat',
                            backgroundSize   : 'cover',
                            backgroundImage  : 'url(' + (post['_embedded']['wp:featuredmedia'] ? post['_embedded']['wp:featuredmedia'][0].source_url : '') + ')'
                        }
                        return (
                            <Col sm={12} md={6} 
                                onClick={() => handleOpen(post.id)} 
                                className='fauxmat-grid-card' 
                                key={`post-${index}`}
                                style={divStyle}
                            >
                                <div className='fauxmat-post-masthead-list'>
                                    <div className='fauxmat-post-title-large' dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                                </div>
                            </Col> 
                        )})}
                </Row>    
            </div>
            {renderPagination()}
        </div>
    )
}