import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POST, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POST);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const posts = data?.posts || [];

    const loggedIn = Auth.loggedIn();

    return (
        <main>
            <div className="flex-row justify-space-between">
                {loggedIn && (
                    <div className="col-12 mb-3">
                        <PostForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <PostList
                            posts={posts}
                            title="Some Feed for Post(s)..."
                        />
                    )}
                </div>

            </div>
        </main>
    );
};

export default Home;
