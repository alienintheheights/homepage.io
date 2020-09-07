import React from 'react'
import ReactPlayer from 'react-player'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { videoJson } from '../data/videos'
import { listFilter } from '../utils/listfilter'


export default function VideoLinks(props) {
    const displayCount = (props && props.number) || 0
    const useFeatured= (props && props.featured) || false
    const hideTitle = props && props.hideTitle
    return (
        <Grid container spacing={1}>
            {videoJson 
                && listFilter(videoJson, useFeatured, displayCount)
                .map( (value, index) => {
                    return (
                        <Grid  key={`fauxmat-video-${index}`} item xs={12} md={12}>
                            <Card>
                                <div className='fauxmat-title'>{!hideTitle && value.title}</div>
                                <CardContent  className='fauxmat-wide-grid-card'>
                                    <div className='player-wrapper'>
                                        <ReactPlayer 
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            config={{
                                                youtube : {playerVars: { controls: 1}}
                                            }}
                                            url={value.linkHtml}/>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
        </Grid>
    )
}
   