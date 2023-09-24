import React, { useState } from 'react';

function LikeButton() {
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        if (!liked) {
            setCount(1);
            setLiked(true);
        } else {
            setCount(0);
            setLiked(false);
        }
    };

    return (
        <div>
            <p>좋아요 {count}</p>
            <button onClick={handleClick} disabled={liked}>
                {liked ? '이미 좋아요를 누르셨습니다!' : 'LIKE'}
            </button>
        </div>
    );
}

export default LikeButton;
