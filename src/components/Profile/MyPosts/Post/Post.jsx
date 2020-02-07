import React from 'react';
import s from './Posts.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://cdn.dribbble.com/users/375867/screenshots/2990078/red_beard_man_jumping_running_game_character_sprites_dribbble.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    );
};

export default Post;