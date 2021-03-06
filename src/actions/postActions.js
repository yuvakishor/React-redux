import { FETCH_POSTS, NEW_POST,USER_REGISTER_FORM} from '../actions/types';

export const fetchPosts = () => dispatch => {
    console.log("action called")
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));

};
export const createPost = (postData) => dispatch => {
    console.log('action called')
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
};
export const userRegisterForm = (postData) => dispatch => {
    console.log('action called')
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: USER_REGISTER_FORM,
            payload: post
        }));
}

