import React from 'react'

import '../css/Home.css'

const Home = () => {
    return (
        <>

            <div className='home-title'>
                <h1>機械学習手法の選択</h1>
            </div>

            <section className='home-kind'>
                <p>DB connection for big date</p>
                <p>light data is no need db connection because process in only API server</p>
                <p>data upload fuinction</p>
                <p>show data like table with static</p>
                <p>some graph</p>
                <p>some analysis and create model file</p>
            </section>

            <section className='home-kind'>
                <h2>教師あり学習</h2>
                <p> aaaa </p>
            </section>

            <section className='home-kind'>
                <h2>教師なし学習</h2>
                <p> iiii </p>
            </section>


        </>
    )
}

export default Home
