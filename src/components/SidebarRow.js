import React from "react"
import Avatar from "@mui/material/Avatar";
import styled from "styled-components"

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <SidebarRowWrapper>
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <p>{title}</p>
        </SidebarRowWrapper>
    )
}
const SidebarRowWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 7px;
    cursor: pointer;
    // background-color: #00a4e5;
    // border-radius: 10px;
    
    &:hover {
        background-color: lightgray;
        border-radius: 10px;
    }
    p{
        margin-left:20px;
        font-weight: 650;
        font-size: 15px;
        
    }
    .MuiSvgIcon-root{
        font-size:xx-large;
        color: #00a4e5;
        
    }`
export default SidebarRow