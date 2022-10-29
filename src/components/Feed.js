import React from 'react'
import Stories from './Stories'
import styled from 'styled-components'
import Messenger from './Messenger'
import Post from './Post'
var url = require("url");
let country = url.parse(document.URL).pathname
country = country.substring(1)


const Feed = () => {
    return (
        <FeedWrapper>
            <h1>Everything {country.toUpperCase()}!</h1>
            <Stories />
            <Messenger />
            <Post     profilePic="https://pbs.twimg.com/profile_
            images/1020939891457241088/fcbu814K_400x400.jpg"
            message="Awesome post on CSS Animation. Loved it"
            timestamp="1609512232424"
            imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/
            v1598295332/CSS_Animation_xrvhai.png"
            username="Nabendu"
            />
            <Post                profilePic="https://pbs.twimg.com/profile_
            images/1020939891457241088/fcbu814K_400x400.jpg"
            message="BookList app in Vanilla JavaScript"
            timestamp="1509512232424"
            imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/
            v1609138312/Booklist-es6_sawxbc.png"
            username="TWD"
            />
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