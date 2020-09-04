import React, { useState, useEffect } from 'react'

import { Button, Row, Col } from 'react-bootstrap'
import Moment from 'react-moment'
//import { debounce } from 'lodash'

import LoadingIndicator from './LoadingIndicator'
import { WP_POSTS_URL, WP_PER_PAGE } from './constants'


// cache REST
const cache = []
export default function Posts() {

   
    const handleOpen = (id) => {
        window.location='/#/post/' + id
    }


    // Post REST
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [noMoreData, setNoMoreData] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
  
    /**
     * We're doing a bottomless list so we need to keep track of all requests.
     * 
     * @param {*} currentPage 
     * @param {*} json 
     */
    const getSumOfPosts = (currentPage, json) => {
        if (json) cache.push(...json)
        return cache.filter((row, index) => (index < currentPage * WP_PER_PAGE))
    }
    
    // REST API effects
    useEffect(() => {
        // check cache
        if (cache.length >= pageNumber * WP_PER_PAGE) {
            setPosts(getSumOfPosts(pageNumber))
            return
        }
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
            setPosts(getSumOfPosts(pageNumber, json))
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [pageNumber])
  
    /**
    // scrolling effects
    useEffect(() => {
        const container = document.querySelector('#fauxmat-postgrid')  
        if (container) {
            // Bind to the end of scroll event
            container.addEventListener('ps-y-reach-end', debounce(value =>  {
                const total = posts.length
                console.log('Do I need more data?', isLoading, posts, cache)
                if (!total || isLoading || noMoreData || total === cache.length  ) return
                console.log('***I need more data!', posts, cache)
                //setPageNumber(pageNumber*1 + 1)
            }), 2500)
        }
    }, [posts, pageNumber, isLoading, noMoreData])
    */

    const renderPagination = () => {
        return (
            <div className='fauxmat-pagination-buttons'>
                {pageNumber > 1 && 
              <Button disabled={isLoading} color="secondary" onClick={() => setPageNumber(pageNumber*1 - 1)}>Less</Button>}
                {!noMoreData && <Button disabled={isLoading} color="secondary" onClick={() => setPageNumber(pageNumber*1 + 1)}>More</Button>}
            </div>
        )
    }

    return (
        <div id='fauxmat-postgrid' className='fauxmat'>
            <div>
                {isLoading &&  <LoadingIndicator/>}
                {posts && posts.map((post, index) => {
                    const divStyle = {
                        backgroundRepeat : 'no-repeat',
                        backgroundSize   : 'cover',
                        backgroundImage  : 'url(' + post['_embedded']['wp:featuredmedia'][0].source_url + ')'
                    }
                    return (
                        <div onClick={() => handleOpen(post.id)} 
                            className='fauxmat-grid-card' 
                            key={`post-${index}`}
                            style={divStyle}>
                            <Row>
                                <Col sm={9} className='fauxmat-post-masthead'>
                                    <div className='fauxmat-post-title-large' dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                                    <span className='fauxmat-post-date'>
                                        <Moment format='MMMM D, YYYY'>{post.date}</Moment>
                                    </span>
                                </Col>   
                                <Col sm={3}>
                                   
                                </Col>
                            </Row>    
                        </div>
                    )})}
                {renderPagination()}
            </div>
        </div>
    )
}