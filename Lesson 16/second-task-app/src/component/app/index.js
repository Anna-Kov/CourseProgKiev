import React from 'react'
import Header from '../header'
import List_header from '../list_header'
import Main from '../main'
import Post from '../post-1'
import Footer from '../footer'

const data=["Functional Programming","Ramda","Fantasy Land Spec","Node.js for all"]
const post=["Ramda"," Why Ramda?","What's Different?","Introductions","Philosophy"]

const App=()=>{
    return(
        <div className="body">
            <Header/>
            <List_header menu={data}/>
            <Main menu={post}/>
            <Post/>
            <Footer menu={post}/>
        </div>
    )
}

export default App