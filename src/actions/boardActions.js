import { FETCH_POSTS, FETCH_COMMENTS, COLLAPSE_OPEN_POST, SEARCH_POSTS, RESET_OPEN_POST_IND } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        });
    });
};

export const fetchComments = (id, title) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
    .then(comments => {
        dispatch({
            type: FETCH_COMMENTS,
            payload: {
                id,
                title,
                comments
            }
        });
    });
};

export const collapseOpenPost = (id) => dispatch => {
    dispatch({
        type: COLLAPSE_OPEN_POST,
        payload: id
    });
};

export const searchPosts = (searchStr) => dispatch => {
    dispatch({
        type: SEARCH_POSTS,
        payload: searchStr
    });
};

export const resetOpenPostInd = () => dispatch => {
    dispatch({
        type: RESET_OPEN_POST_IND
    });
};