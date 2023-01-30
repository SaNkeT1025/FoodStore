import React, { Component } from 'react'
import BlogCard from './BlogCard'

export class Blog extends Component {
  render() {
    const foodBlogs = require('../Json/Blogs.json')
    let blogCards = foodBlogs.map(card => {
        return (
            <div class = "col-sm-3">
                <BlogCard blog = {card}></BlogCard>
            </div>
        )
    })
    return (
      <>
      <div class = "container">
        <div class = "row">
            {blogCards}
        </div>
      </div>
      
      </>
    )
  }
}

export default Blog