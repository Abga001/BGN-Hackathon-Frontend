import React from "react"
import Story from "./Story"
import styled from "styled-components"
const Stories = () => {
    return (
        <StoriesWrapper>
            <Story image="https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
profileSrc="image.png"
title="History"
/>
<Story
image="https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
profileSrc="https://pbs.twimg.com/profile_images/1020939891457241088/
fcbu814K_400x400.jpg"
title="Food"
/>
<Story
image="https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmlueWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
profileSrc="https://pbs.twimg.com/profile_images/1020939891457241088/
fcbu814K_400x400.jpg"
title="Music"
/>
<Story
image="https://images.unsplash.com/photo-1587554656671-e211fc57927b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGFmcmljYW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
profileSrc="https://pbs.twimg.com/profile_images/1020939891457241088/
fcbu814K_400x400.jpg"
title="Clothing"
/>
        </StoriesWrapper>
    )
}

const StoriesWrapper = styled.div`
    display: flex;
    margin: 0 auto;
`
export default Stories