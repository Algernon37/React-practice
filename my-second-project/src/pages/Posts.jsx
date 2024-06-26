import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import PostService from '../API/PostService';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../components/hooks/usePosts';
import { useFetching } from '../components/hooks/useFetching';
import getPageCount from '../utils/arrayForPages';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'ааа', body: 'бб' },
        { id: 2, title: 'ггг', body: 'аа' },
        { id: 3, title: 'ввв', body: 'яя' }
    ])

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setlimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(response.headers['x-total-count']);
        setTotalPages(getPageCount(totalCount, limit));
    });


    useEffect(() => {
        fetchPosts();
    }, [page]);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    function changePage(page) {
        setPage(page);
    };


    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {isPostsLoading
                ?
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Loader />
                </div>
                :
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов JS" />
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;