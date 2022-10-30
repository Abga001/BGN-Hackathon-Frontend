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
import { useStateValue } from '../StateProvider'

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue()

    return (
        <SidebarWrapper>
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={EmojiFlags} title="Globe" />
        <SidebarRow Icon={People} title="Friends" />
        {/* <SidebarRow Icon={Chat} title="Upload Caption" /> */}
        <SidebarRow Icon={VideoLibrary} title="Upload Image/Video" />
        {/* <SidebarRow Icon={ExpandMore} title="More" /> */}
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div``

export default Sidebar