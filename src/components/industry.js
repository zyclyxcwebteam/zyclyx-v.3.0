import React from 'react'
import '../styles/industry.css'
import Layout from '../components/layout';
import Section from '../components/SectionTitle/sectionTitle'

function industry(props) {
    return (
        <Layout>
        <div className="">
            <Section />
            <h1 className="">{props.number}</h1>
            <div>
            <h2 className="">{props.title}</h2>
            <p className="">{props.text}</p>
            </div> 

        </div>
        </Layout>
    )
}



export default industry;