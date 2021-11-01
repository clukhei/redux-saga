import React from 'react'
import { connect } from 'react-redux'
import { getNews } from '../actions'
import { Button } from "sgds-govtech-react";

let Bootton = ({getNews}) => (
    <Button isPrimary onClick={getNews}>Press to see anime quote</Button>
)

const mapDispatchToProps = {
    getNews: getNews
}

Bootton = connect(null, mapDispatchToProps)(Bootton)

export default Bootton;