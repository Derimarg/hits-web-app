import React from "react";
import Topbar from "../../../components/Topbar/Topbar";
import Sidebar from '../../../components/Sidebar/Sidebar'
import Feed from '../../../components/Feed/Feed';
import Rightbar from '../../../components/Rightbar/Rightbar'
import './home.css';

export default function Homev2() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
}
