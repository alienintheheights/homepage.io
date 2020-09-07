import React from 'react'
import { HELLOS } from '../constants'

function getTwoRandomNumbers() {
    const entries = Object.entries(HELLOS)
    const randomInt1 =  Math.floor(Math.random() * Math.floor(entries.length))
    const randomInt2 =  Math.floor(Math.random() * Math.floor(entries.length))
    if (randomInt1 === randomInt2) return getTwoRandomNumbers()
    return [randomInt1, randomInt2]
}

function getRandomGreeting(index) {
    const keys = Object.keys(HELLOS)
    const selectedKey = keys[index]
    return HELLOS[selectedKey]
}

export default function Welcome() {
    const [random1, random2] = getTwoRandomNumbers()
    return (
        <div className='fauxmat-jumbo'>
                Welcome <small className='fauxmat-disclaimer'>{getRandomGreeting(random1)}, {getRandomGreeting(random2)}</small>
        </div>
    )
}