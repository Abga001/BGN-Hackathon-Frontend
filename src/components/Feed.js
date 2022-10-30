import React, { useEffect, useState } from "react";
import axios from "axios";
import Stories from "./Stories";
import styled from "styled-components";
import Messenger from "./Messenger";
import Post from "./Post";
import Pusher from 'pusher-js'
const pusher = new Pusher('aedcf8269706b7325736', {
cluster: 'eu'
});

const Feed = () => {
  const [postsData, setPostsData] = useState([]);
  const syncFeed = () => {
    axios.get("/posts").then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };
  useEffect(() => {
    const channel = pusher.subscribe('posts');
    channel.bind('inserted', (data) => {
    syncFeed()
    });
    },[])
  useEffect(() => {
    syncFeed();
  }, []);
  return (
    <FeedWrapper>
      <Stories />
      <Messenger />
      {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))}
      <Post
        profilePic="https://pbs.twimg.com/profile_
            images/1020939891457241088/fcbu814K_400x400.jpg"
        message="Awesome post on CSS Animation. Loved it"
        timestamp="1609512232424"
        imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/
            v1598295332/CSS_Animation_xrvhai.png"
        username="Nabendu"
      />
      <Post
        profilePic="https://pbs.twimg.com/profile_
            images/1020939891457241088/fcbu814K_400x400.jpg"
        message="BookList app in Vanilla JavaScript"
        timestamp="1509512232424"
        imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/
            v1609138312/Booklist-es6_sawxbc.png"
        username="TWD"
      />
    </FeedWrapper>
  );
};
const FeedWrapper = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Feed;
