import React from 'react';
import Avatar from 'react-avatar';

import '../styles/_item.scss';
import { FiChevronRight } from "react-icons/fi";

const Item = ({ name, phone }) => {
    return (
        <div className='contact-item'>
            <Avatar
                className='react-avatar'
                src="https://conteudo.imguol.com.br/c/entretenimento/c8/2017/07/11/master-chief-1499797287317_v2_4x3.jpg"
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