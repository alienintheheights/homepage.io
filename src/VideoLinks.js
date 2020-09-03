import React from 'react'
import ReactPlayer from 'react-player'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { videoJson } from './data/videos'


export default function VideoLinks(props) {
    const displayCount = (props && props.number) || 0
    return (
        <Grid container spacing={1}>
            {videoJson 
                && videoJson.filter( (value, index) => (!displayCount || index < displayCount))
                .map( (value, index) => {
                    return (
                        <Grid  key={`fauxmat-video-${index}`} item xs={12} md={12}>
                            <Card>
                                <div className='fauxmat-title'>{value.title}</div>
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
   