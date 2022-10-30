import React from 'react'
import Stories from './Stories'
import styled from 'styled-components'
import Messenger from './Messenger'
import Post from './Post'

const Feed = () => {
    return (
        <FeedWrapper>
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
margin: 0 auto;
max-width:900px;
padding: 30px 90px;
display: flex;
flex-direction: column;
align-items: center;

`
export default Feed