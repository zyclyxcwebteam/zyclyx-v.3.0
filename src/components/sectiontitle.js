import React from 'react'

function sectiontitle(props) {
    return (
        <div className={` ${props.sectionStyles} ml-5`}>
            <h2 className="">{props.title}</h2>
            <p className="m-0">{props.text}</p>
        </div>
    )
}
export default sectiontitle;