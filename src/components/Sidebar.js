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
        <SidebarRow src="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg" title="Abdullah" />
        <SidebarRow Icon={EmojiFlags} title="Globe" />
        <SidebarRow Icon={People} title="Friends" />
        <SidebarRow Icon={Chat} title="Upload Caption" />
        <SidebarRow Icon={VideoLibrary} title="Upload Image/Video" />
        <SidebarRow Icon={ExpandMore} title="More" />
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div``

export default Sidebar