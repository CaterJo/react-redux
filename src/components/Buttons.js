/**
 * 프리젠테이션 컴포넌트.
 * 
 */


import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = ({onCreate, onRemove}) =>{
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>생성</div>
            <div className="btn remove" onClick={onRemove}>제거</div>
        </div>
    );
}

// 데이터 타입 설정
Buttons.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
};

// 기본값 설정.
Buttons.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;

