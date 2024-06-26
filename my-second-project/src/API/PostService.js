import axios from 'axios';

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            return response;
        } catch (error) {
            console.log(error);
        };
    };

    static async getByID(id) {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const response = await axios.get(url);
        return response;
    }; 
};