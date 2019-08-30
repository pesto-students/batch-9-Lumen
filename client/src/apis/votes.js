import axios from '../http/axios-votes';

const getBlogVotes = async (blogId) => {
    try {
        const response = await axios.get(`/${blogId}`);
        return response.data;
    } catch(e) {
        if(!e.response) {
            throw e
        } 
        throw new Error(e.response.data)
    }
}

const getMyVotes = async (blogId) => {
    try {
        const response = await axios.get(`/${blogId}/myvotes`);
        return response.data;
    } catch(e) {
        if(!e.response) {
            throw e
        } 
        throw new Error(e.response.data)
    }
}

const upVoteBlog = async (blogId) => {
    try {
        const response = await axios.post(`/${blogId}/up`);
        return response.data.vote;
    } catch(e) {
        if(!e.response) {
            throw e
        } 
        throw new Error(e.response.data)
    }
}
const downVoteBlog = async (blogId) => {
    try {
        const response = await axios.post(`/${blogId}/down`);
        return response.data.vote;
    } catch(e) {
        if(!e.response) {
            throw e
        } 
        throw new Error(e.response.data)
    }
}
export {
    getBlogVotes,
    getMyVotes,
    upVoteBlog,
    downVoteBlog,
}
