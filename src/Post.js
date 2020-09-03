import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import LoadingIndicator from './LoadingIndicator'
import { WP_POST_URL } from './constants'

const cache = {}
export default function Post(props) {

    const isUrl = props.match  && props.match.params && props.match.params.id 
    const postId = isUrl?  props.match.params.id : props.id 
    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)
 
    useEffect(() => {
        if (cache[postId]) {
            setPost(cache[postId])
            return
        }
        setIsLoading(true)
        fetch(WP_POST_URL + postId + '?_embed')
          .then(res => res.json())
          .then(json => {
              cache[postId] = json
              setPost(json)
              setIsLoading(false)
          })
    }, [postId])

    const getTitle = (currentPost) => {
        return (
            <div id='fauxmat-post-masthead'>
                <div id='fauxmat-post-title' 
                    dangerouslySetInnerHTML={{__html: currentPost.title.rendered}} />
                <div id='fauxmat-post-author'>
                    <div className='fauxmat-post-date'>
                  first published <Moment format='MMMM D, YYYY'>{currentPost.date}</Moment>
                    </div>
                </div>
            </div>
        ) 
    }

    return (
        <div id='fauxmat-post'>
            {isLoading &&  <LoadingIndicator/>}
            {post && post.title && ( 
                <div id='fauxmat-post-inner'>
                    <div className='fauxmat-title'>
                        <span>{getTitle(post)}</span>
                        <span>{!isUrl && <a href={`#/post/${postId}`}>Open full page</a>}</span>
                    </div>
                    <div id='fauxmat-post-content-wrapper'>
                        <div id='fauxmat-post-content' dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                        <div className='fauxmat-post-date'>
                      last updated <Moment date={post.modified} />
                        </div>
                    </div>
                </div>)}
        </div>
    )
}