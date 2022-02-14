import React from "react"
import {Image, Divider, Typography} from "antd";
import facebookLogo from "../../assets/images/facebook-807588_640.png"
import microsoftLogo from "../../assets/images/microsoft-80658_640.png"
import followLogo from "../../assets/images/follow-826033_640.png"
import youtubeLogo from "../../assets/images/icon-720944_640.png"

export function BusinessPartner() {

    return (
        <div style={{marginLeft:"auto", marginRight:"auto", textAlign:"center", background: "white"}}>
            <Divider orientation="left">
                <Typography.Title level={3}>合作企业</Typography.Title>
            </Divider>
            <Image.PreviewGroup>
                <Image width={200} src={facebookLogo} style={{paddingLeft:20}}/>
                <Image width={200} src={microsoftLogo}  style={{paddingLeft:20}}/>
                <Image width={200} src={followLogo}  style={{paddingLeft:20}}/>
                <Image width={200} src={youtubeLogo}  style={{paddingLeft:20}}/>
            </Image.PreviewGroup>
        </div>

    )

}