import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed';

export default function Home() {
    return (
        <>
            <Topbar />
            <div style={{ display: 'fles', width: '100%' }}>
                <Sidebar />
                <Feed />
            </div>
        </>
    );
}
