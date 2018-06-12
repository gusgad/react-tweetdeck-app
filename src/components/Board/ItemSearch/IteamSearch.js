import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ItemSearch.css';
import { searchPosts } from '../../../actions/boardActions';


class ItemSearch extends Component {

    render() {
        return (
            <div className="ItemSearch">
                <h3>Posts</h3>
                <form>
                    <input type="text" placeholder="Search" onKeyUp={(e) => {this.props.searchPosts(e.target.value)}} />
                </form>
            </div>
        )
    }
};

ItemSearch.propTypes = {
    searchPosts: PropTypes.func.isRequired
};


export default connect(null, { searchPosts})(ItemSearch);

/******** EASTER EGG *********/
// It's gonna be legend..wait for it: https://www.youtube.com/watch?v=C19US6rqqAo
/****************************/