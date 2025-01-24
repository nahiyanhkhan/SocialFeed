import React, { useState } from 'react';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="bg-light min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">SocialFeed</a>
                </div>
            </nav>
            <div className="container py-4">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8 col-lg-6">
                        <SearchBar setSearchTerm={setSearchTerm} />
                    </div>
                </div>
                <PostList searchTerm={searchTerm} />
            </div>
        </div>
    );
};

export default App;