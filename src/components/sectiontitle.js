import React from 'react'

function sectiontitle(props) {
    return (
        <div className=" ml-16 lg:py-8 md:py-4 md:ml-10">
            <h2 className="title text-4xl font-semibold pb-2 md:text-2xl">{props.title}</h2>
            <p className="text md:text-sm">{props.text}</p>
        </div>
    )
}
export default sectiontitle;