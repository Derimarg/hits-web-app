import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Feed from '../../components/Feed/Feed';

export default function Home() {
    return (
        <>
            <Topbar />
            <div style={{ display: 'fles', width: '100%' }}>
                <Feed />
            </div>
        </>
    );
}
