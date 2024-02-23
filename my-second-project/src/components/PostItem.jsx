import React from "react";
import Mybutton from '../components/UI/button/MyButton';

export default function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post-content__inner">
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className='post__btns'>
                    <Mybutton onClick={() => props.remove(props.post)} >
                        Удалить
                    </Mybutton>
                </div>
            </div>
        </div>
    )
};

