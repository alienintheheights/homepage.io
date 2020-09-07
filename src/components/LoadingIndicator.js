import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) => ({
    paper : {
        position        : 'absolute',
        height          : 500,
        width           : 800,
        backgroundColor : theme.palette.background.paper,
        border          : '2px solid #000',
        boxShadow       : theme.shadows[5],
        padding         : theme.spacing(2, 4, 3),
    },
}))

export default function LoadingIndicator() {

    const classes = useStyles()
    return (
        <div className={`loading-bar-fixed ${classes.root}` }>
            <LinearProgress />
        </div>)
}