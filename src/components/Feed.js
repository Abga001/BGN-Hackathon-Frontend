import React from 'react'
import Stories from './Stories'
import styled from 'styled-components'
var url = require("url");
let country = url.parse(document.URL).pathname
country = country.substring(1)
const Feed = () => {
    return (
        <FeedWrapper>
            <h1>Everything {country.toUpperCase()}!</h1>
            <Stories />
        </FeedWrapper>
    )
}
const FeedWrapper = styled.div`
flex: 1;
padding: 30px 150px;
display: flex;
flex-direction: column;
align-items: center;
`
export default Feed