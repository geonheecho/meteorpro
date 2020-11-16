import React from 'react';
import { BoardList } from './BoardList';
import { BoardForm } from './BoardForm';
import { BoardDetails } from './BoardDetails';

import { useTracker } from 'meteor/react-meteor-data';


import { Link, Route, BrowserRouter } from "react-router-dom";

export const Pages = () => {
    const logout = () => Meteor.logout();
    const user = useTracker(() => Meteor.user());

    return (

        <BrowserRouter>
            <div className="user" onClick={logout}>
                {user.username} 로그아웃
          </div>
            <div>
                <Link to="/BoardList">리스트</Link>
                 &nbsp;&nbsp;&nbsp;
                <Link to="/BoardForm">글쓰기</Link>
                &nbsp;&nbsp;&nbsp;
                {/* <Link to="/BoardDetails">detail</Link> */}
                {/* <Link to="/LoginForm">로그인</Link>
                &nbsp;&nbsp;&nbsp; */}
            </div>
            <div>
                <Route path="/BoardList" component={BoardList}></Route>
                <Route path="/BoardForm" component={BoardForm}></Route>
                <Route path="/BoardDetails/:_id" component={BoardDetails}></Route>
                {/* <Route path="/ExcelForm" component={ExcelForm}></Route> */}
                {/* <Route path="/LoginForm" component={LoginForm}></Route> */}
            </div>

        </BrowserRouter >
    )
}