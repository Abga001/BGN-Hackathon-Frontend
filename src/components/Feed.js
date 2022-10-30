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
    axios.get("http://localhost:9000/posts").then((res) => {
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
      {
        postsData.map(entry => (
          <Post
            profilePic={entry.avatar}
            message={entry.text}
            timestamp={entry.timestamp}
            imgName={entry.imgName}
            username={entry.user}
          /> 
        ))
      }
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
