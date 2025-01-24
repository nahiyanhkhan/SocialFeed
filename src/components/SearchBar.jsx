import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
    return (
        <div className="input-group">
            <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
            </span>
            <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search by name..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;