import React from 'react'
import SidebarRow from './SidebarRow'
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMore,
  } from "@mui/icons-material";
import styled from 'styled-components'

const Sidebar = () => {
    return (
        <SidebarWrapper>
        {/* <SidebarRow src={user.photoURL} title={user.displayName} url={window.location.href}  /> */}
        {/* Replace globe URL with the url you get when you open globe with live server */}
        <SidebarRow Icon={EmojiFlags} title="Globe" url={`http://127.0.0.1:5500/ex_prac/bgn-hackathon/globe.html`} />
        <SidebarRow Icon={People} title="Friends" url={window.location.href} />
        <SidebarRow Icon={Chat} title="Upload Caption" url={window.location.href}/>
        <SidebarRow Icon={VideoLibrary} title="Upload Image/Video" url={window.location.href}/>
        <SidebarRow Icon={ExpandMore} title="More" url={window.location.href}/>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
`

export default Sidebar