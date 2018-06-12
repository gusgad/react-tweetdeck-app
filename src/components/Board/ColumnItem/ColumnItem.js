import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ColumnItem.css';
import { fetchComments } from '../../../actions/boardActions';


class ColumnItem extends Component {
    
    render() {
        return (
            // if it's a feed column display 'title' (and enable a click) else 'name'
            <div className="ColumnItem" onClick={() => {
                this.props.columnType === 'feed' ? this.props.fetchComments(this.props.item.id, this.props.item.title) : null
                }}> 
                {this.props.columnType === 'feed' ? (<h4>{this.props.item.title}</h4>) : (
                    <h4>{this.props.item.name}</h4>
                )}
                
                <p>{this.props.item.body}</p>
            </div>
        );
    }
    
};

ColumnItem.propTypes = {
    fetchComments: PropTypes.func.isRequired,
};

export default connect(null, { fetchComments })(ColumnItem);