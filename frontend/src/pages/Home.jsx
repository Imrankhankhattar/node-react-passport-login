import React from 'react'
import { posts } from '../data'
import Card from '../components/Card'
function Home() {
    return (
        <div className='home'>
            {posts.map(post => <Card key={post.id} post={post}></Card>)}
        </div>
    )
}

export default Home
