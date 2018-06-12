import { FETCH_POSTS, FETCH_COMMENTS, COLLAPSE_OPEN_POST, SEARCH_POSTS, RESET_OPEN_POST_IND } from '../actions/types';
import _ from 'lodash';

const initialState = {
    posts: [],
    openPosts: [],
    openPostInd: null,
    postSearchVal: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        case FETCH_COMMENTS:
            // in case the comments for this post are not open - add them to openPosts
            if(!_.find(state.openPosts, action.payload)) {
                return {
                    ...state,
                    openPosts: [...state.openPosts, action.payload],
                };
            } else {
                // else return old array
                return {
                    ...state,
                    openPosts: [...state.openPosts],
                    openPostInd: _.findIndex(state.openPosts, action.payload)
                };
            }
        

        case COLLAPSE_OPEN_POST:
            return {
                ...state,
                openPosts: state.openPosts.filter((post) => {
                    return post.id === action.payload ? false : true;
                }),
                openPostInd: 0
            };

        case SEARCH_POSTS:
            return {
                ...state,
                postSearchVal: action.payload
            };

        case RESET_OPEN_POST_IND:
            return {
                ...state,
                openPostInd: 0
            };
            
        default:
            return state;
    }
}