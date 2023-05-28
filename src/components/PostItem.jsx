import React from 'react';

const PostItem = (props) => {
    const star = []
    for (let i = 0; i < props.post.mark; i++) {
        star.push("⭐")
    }
    return (
        <div className="post">
            <button onClick={() => props.remove(props.post)} className="close-button">X</button>
            <hr/>
            <h3>{props.post.name}</h3>
            <p>Оценка: <span>{star}</span></p>
            <h5 className="comment">{props.post.comment}</h5>
        </div>
    );
};

export default PostItem;