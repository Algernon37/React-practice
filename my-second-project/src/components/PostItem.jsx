import React from "react";
import MyButton from '../components/UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

export default function PostItem(props) {
    const navigate = useNavigate(); 
    return (
        <div className="post">
            <div className="post__content">
                <div className="post-content__inner">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className='post__btns'>
                    <MyButton onClick={() => navigate(`/posts/${props.post.id}`)} > {/* Используйте navigate, а не router */}
                        Открыть 
                    </MyButton>
                    <MyButton onClick={() => props.remove(props.post)} >
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    );
}
