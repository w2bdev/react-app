import React, {Component} from 'react';

class SearchBox extends Component {
    render() {
        const {isActive , handleSearch} = this.props

        let searchBarClass = ["header-search-bar"];

        if (isActive) 
            searchBarClass.push("active");
        
        return (

            <div className={searchBarClass.join(" ")}>
                <form action="#" method="POST" name="search_bar_form">
                    <div className="form-group">
                        <div className="left-icon">
                            <i className="ti-search"></i>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="header-search"
                            placeholder="Search..."/>
                        <a onClick={handleSearch} className="right-icon">
                            <i className="ti-close"></i>
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBox;
