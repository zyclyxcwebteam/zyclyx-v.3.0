import React from 'react'

function sectiontitle(props) {
    return (
        <div className={` ${props.color}`}>
            <h2 className="">{props.title}</h2>
            <p className="">{props.text}</p>
        </div>
    )
}
export default sectiontitle;