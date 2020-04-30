import React from 'react';
import './sectionTitle.css';

const sectionTitle = (props)=>{
    const{titleText}=props
    return(
    <h2 className="section-title">{titleText}</h2>
    )
}

export default sectionTitle;