// import Avatar from "@mui/material/Avatar";
import React from "react"
import styled from "styled-components"
const Story = ({ image, profileSrc, title }) => {
    return (
        <StoryWrapper imageUrl={`${image}`}>
            {/* <Avatar src={profileSrc} className='story__avatar' /> */}
            <h4>{title}</h4>
        </StoryWrapper>
    )
}

const StoryWrapper = styled.div`
    background-image: url(${props => props.imageUrl ? props.imageUrl : ''});
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 120px;
    box-shadow: 0px 5px 17px -7px rgba(0,0,0,0,.75);
    border-radius: 20px;
    border: 5px solid #00a4e5;
    margin-right: 10px;
    
    cursor: pointer;
    transition: transform 100ms ease-in;
    &:hover {
        transform: scale(1.07);
    }
    // .story__avatar {
    // margin: 10px;
    // border: 5px solid #FF8C00;
    // }
    h4 {
        position: absolute;
        bottom: 0px;
        left: 10px;
        text-align: center;

        color: white;
    }
`
export default Story