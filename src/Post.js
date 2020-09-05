import React, { useState, useEffect, useRef } from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import LoadingIndicator from './LoadingIndicator'
import { WP_POST_URL, WP_COMMENTS_URL } from './constants'

import { sortBy } from 'lodash'

const cache = {}
export default function Post(props) {

    const isUrl = props.match  && props.match.params && props.match.params.id 
    const postId = isUrl?  props.match.params.id : props.id 
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
   
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

    // comments
    useEffect(() => {
        setIsLoading(true)
        fetch(WP_COMMENTS_URL + postId)
          .then(res => res.json())
          .then(json => {
              const commentStream = sortBy(json, ['parent', 'date'])
              setComments(commentStream)
              setIsLoading(false)
          })
    }, [postId])

    const commentRef = useRef(null)
    const scrollToBottom = () => {
        commentRef.current.scrollIntoView({
            behavior : 'smooth'
        })
    }
    const postRef = React.useRef(null)
    const scrollToTop = () => {
        postRef.current.scrollIntoView({
            behavior : 'smooth'
        })
    }

    const getTitle = (currentPost) => {
        return (
            <div ref={postRef} className='fauxmat-post-masthead'>
                <div id='fauxmat-post-title' 
                    dangerouslySetInnerHTML={{__html: currentPost.title.rendered}} />
                <div id='fauxmat-post-masthead-image' style={getMastImage(currentPost)} />         
                <div id='fauxmat-post-author'>
                    {currentPost['_embedded']['author'][0] && (
                        <span>
                            <img className='fauxmat-post-author-avatar' alt='avatar' src={currentPost['_embedded']['author'][0].avatar_urls[48]}/>
                            {currentPost['_embedded']['author'][0].name}
                        </span>
                    )}
                    <span className='fauxmat-post-date'>
                        <Moment format='MMMM D, YYYY'>{post.date}</Moment>
                    </span>
                </div>

                <div id='fauxmat-post-comment-teaser'>
                    {(comments.length>0) && (<span>
                        <div onClick={() => scrollToBottom()}>Comments ({comments.length})</div>
                    </span>)}
                    {(post.modified !== post.date) && <span>last updated <Moment format='MMMM D, YYYY' date={post.modified}/></span>}
                </div>
               
            </div>
        ) 
    }

    const getMastImage = (currentPost) => {
        return {
            backgroundRepeat   : 'no-repeat',
            backgroundSize     : 'cover',
            backgroundPosition : 'center',
            backgroundImage    : 'url(' + currentPost['_embedded']['wp:featuredmedia'][0].source_url + ')'
        }
    }

    const getComment = (thread) => {
        return  (
            <div key={`comment-${thread.id}`} className='fauxmat-comment-body-wrapper'>
                <div className='fauxmat-comment-post-author'>
                    {thread.author_url && <a href={thread.author_url}><img className='fauxmat-post-author-avatar' alt='avatar' src={thread.author_avatar_urls[48]}/></a>}
                    {!thread.author_url && <img className='fauxmat-post-author-avatar' alt='avatar' src={thread.author_avatar_urls[48]}/>}
                    {thread.author_name}
                </div>
                <div className='fauxmat-post-date'>
                    <Moment format='MMMM D, YYYY hh:mm:ss A' date={thread.date}/>
                </div>
                <div className='fauxmat-comment-body' dangerouslySetInnerHTML={{__html: thread.content.rendered}}/>
            </div>
        ) 
    }
                
    const singleComment = comments.length > 1
    const commentMessage = (!singleComment ? '' : comments.length) + ' Comment' + (singleComment ? 's': '') 
    return (
        <div id='fauxmat-post'>
            {isLoading &&  <LoadingIndicator/>}
            {post && post.title && 
                <div id='fauxmat-post-inner'>
                    <div className='fauxmat-post-title-wrapper'>
                        <span>{getTitle(post)}</span>
                        <span>{!isUrl && <a href={`#/post/${postId}`}>Open full page</a>}</span>
                    </div>
                    <div id='fauxmat-post-content-wrapper'>
                        <div id='fauxmat-post-content' dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                     
                        {comments.length>0 && <div ref={commentRef}  id='fauxmat-post-comments-wrapper'>
                            <h2>{comments.length && commentMessage}</h2>
                            <div id='fauxmat-post-comments-replies'>
                                {comments.filter(c => c.parent === 0).map((thread, index) => {
                                    const childThreads = comments.filter(c => c.parent === thread.id)
                                    if (childThreads.length) {
                                        return (
                                            <div key={`comment-parent-${thread.id}`}>
                                                {getComment(thread)}
                                                <div className='fauxmat-post-reply-thread'>
                                                    {childThreads.map(subthread => {
                                                        return (
                                                            getComment(subthread)
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return getComment(thread)
                                    }
                                   
                                })}
                            </div>
                        </div>}
                        <div  id='fauxmat-post-comment-teaser' onClick={() => scrollToTop()}>Top</div>
       
                    </div>
                </div>}
        </div>
    )
}