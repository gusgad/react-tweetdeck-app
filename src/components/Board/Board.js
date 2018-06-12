import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Board.css';
import { fetchPosts, resetOpenPostInd } from '../../actions/boardActions';
import DragSortableList from 'react-drag-sortable';

import Header from './Header/Header';
import BoardColumn from './BoardColumn/BoardColumn';

class Board extends Component {

    componentWillMount() {
        this.props.resetOpenPostInd();
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        // 255 is the our column width
        if (nextProps.openPostInd !== this.props.openPostInd && nextProps.openPostInd !== 0) {
            this.refs.Board.scrollLeft = (225 * nextProps.openPostInd + 255) - ((window.innerWidth-255)/2);
        }
    }

    render() {

        let openPostList = this.props.openPosts.map((openPost) => {
            // wrapping the tag in the object as 'react-drag-sortable' requires
            return {content: (<BoardColumn columnType="comments" items={openPost} />), classes:['BoardColumn-item']}
        });

        // placeholder we display behind the dragged column
        const columnPlaceholder = (
            <div className="placeholderContent"> DROP HERE !</div>
        );

        return (
            <div className="Board" ref="Board">
                <Header />
                <div className="BoardColumns">
                    <BoardColumn columnType="feed" items={this.props.posts.slice(0, 10)} />
                    <DragSortableList items={openPostList} placeholder={columnPlaceholder} dropBackTransitionDuration={0.3} type="horizontal"/>
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    resetOpenPostInd: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    openPosts: PropTypes.array.isRequired,
    postSearchVal: PropTypes.string,
    openPostInd: PropTypes.number
};

const mapStateToProps = state => ({
    posts: state.board.posts,
    openPosts: state.board.openPosts,
    postSearchVal: state.board.postSearchVal,
    openPostInd: state.board.openPostInd
});

export default connect(mapStateToProps, { fetchPosts, resetOpenPostInd })(Board);