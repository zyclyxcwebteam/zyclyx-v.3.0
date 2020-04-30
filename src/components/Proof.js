import React from 'react'

const Proof = (props) => {
    return (
        <div className="proof-1 mx-auto bg-light text-center p-4">
            <h4 className="pb-2">{props.title}</h4>
    <p className="">{props.text}</p>
        </div>
    )
}
export default Proof;