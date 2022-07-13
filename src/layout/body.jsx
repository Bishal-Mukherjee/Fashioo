import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/home';
import UserRegistration from '../views/user-registration';
import PartnerRegistration from '../views/partner-registration';
import CompleteUserProfile from '../views/complete-user-profile';
import CompletePartnerProfile from '../views/complete-partner-profile';
import Consultancy from '../views/consultancy';
import Profile from '../views/user-profile';
import ChangeUserName from '../views/user-profile/ChangeUserName';
import ChangePassword from '../views/user-profile/ChangePassword';
import Login from '../views/login';
import UserDashboard from '../views/user-dashboard';
import About from '../views/about';

import PartnerDashboard from '../views/partner-dashboard';

import Blogs from '../views/blogs-home';
import BlogPage from '../views/blog-page';
import CreateBlogPost from '../views/create-blog-post';
import PartnerProfiles from '../views/partner-profiles';
import PartnerProfile from '../views/partner-profile';

function Body() {
    return (
        <div>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/about-us' exact>
                    <About />
                </Route>
                <Route path='/user-registration' exact>
                    <UserRegistration />
                </Route>
                <Route path='/partner-registration' exact>
                    <PartnerRegistration />
                </Route>
                <Route path='/complete-user-profile' exact>
                    <CompleteUserProfile />
                </Route>
                <Route path='/complete-partner-profile' exact>
                    <CompletePartnerProfile />
                </Route>
                <Route path='/consultancy' exact>
                    <Consultancy />
                </Route>
                <Route path='/user-profile'>
                    <Profile />
                </Route>
                <Route path='/change-user-name'>
                    <ChangeUserName />
                </Route>
                <Route path='/change-password'>
                    <ChangePassword />
                </Route>
                <Route path='/login' exact>
                    <Login />
                </Route>
                <Route path='/user-dashboard' exact>
                    <UserDashboard />
                </Route>
                <Route path='/partner-dashboard' exact>
                    <PartnerDashboard />
                </Route>
                <Route path='/blogs' exact>
                    <Blogs />
                </Route>
                <Route path='/blog-page' exact>
                    <BlogPage />
                </Route>
                <Route path='/create-blog-post' exact>
                    <CreateBlogPost />
                </Route>
                <Route path='/partner-profiles' exact>
                    <PartnerProfiles />
                </Route>
                <Route path='/partner-profile' exact>
                    <PartnerProfile />
                </Route>
            </Switch>
        </div>
    );
}

export default Body;
