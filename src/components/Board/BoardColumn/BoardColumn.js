import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './BoardColumn.css';
import { fetchComments, collapseOpenPost } from '../../../actions/boardActions';


import ItemSearch from '../ItemSearch/IteamSearch';
import ColumnItem from '../ColumnItem/ColumnItem';

class BoardColumn extends Component {
    
    render() {
        let feedItems;

        // if a feed column - add filtering
        if (this.props.columnType === 'feed' && this.props.items.length > 0) {
            let filteredPosts = this.props.items.filter((item) => {
                return item.title.includes(this.props.postSearchVal) ? true : false;
            });

            feedItems = filteredPosts.map(item => (
                <ColumnItem key={item.id} columnType={this.props.columnType} item={item} />
            ));
        }

        // else just iterate through post comments
        if (this.props.columnType === 'comments' && Object.keys(this.props.items).length > 0) {
            feedItems = this.props.items.comments.map(item => (
                <ColumnItem key={item.id} columnType={this.props.columnType} item={item} />
            ));
        }
        
        return (
            <div className="BoardColumn">
                {this.props.columnType === 'feed' ? (<ItemSearch className="ItemSearchElem" />) : (
                    <div className="BoardColumn-header">
                        <i className="fa fa-twitter fa-2x"></i>
                        <h4>{this.props.items.title}</h4>
                        <span onClick={() => {this.props.collapseOpenPost(this.props.items.id)}}><i className="fa fa-times"></i></span>
                    </div>
                    
                )}
                <div className={"Items " + (this.props.columnType === 'feed' ? 'feed' : 'comments')}>
                    {feedItems && Object.keys(feedItems).length > 0 ? (feedItems) : (<h2 className="Items-not-found">No posts found</h2>)}
                </div> 
            </div>
        );
    }
    
};

BoardColumn.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    collapseOpenPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    postSearchVal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

const mapStateToProps = state => ({
    posts: state.board.posts,
    postSearchVal: state.board.postSearchVal,
});

export default connect(mapStateToProps, { fetchComments, collapseOpenPost })(BoardColumn);