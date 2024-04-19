import React from 'react';
import Avatar from 'react-avatar';

import '../styles/_item.scss';
import { FiChevronRight } from "react-icons/fi";

const profilePhoto = (avatar) =>{
    if(avatar) return 'http://localhost:3001/imagens/'+ avatar;
    return 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png';
} 

const Item = ({ name, phone, avatar }) => {

    return (
        <div className='contact-item'>
            <Avatar
                className='react-avatar'
                src={profilePhoto(avatar)}
                round={true}
                size={60}
            />
            <div className='text-container'>
                <span className='name'>{name}</span>
                <span className='phone'>{phone}</span>

            </div>
            <FiChevronRight className='chevron-right-icon' />
        </div>
    );
}

export default Item;