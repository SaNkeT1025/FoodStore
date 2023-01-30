import React, { Component } from 'react'
import '../css/cards.css'

export class BlogCard extends Component {
  render() {
    return (
        <div class="card mt-4 mb-5 rounded-0 border-secondary" style= {{width: "16.5rem", borderWidth: "1px",
        borderColor: "#000000c7"}}>
            <span class = "date">{this.props.blog.date}</span>
            <img class="card-img-top imgCard" src={this.props.blog.image} alt="Card cap"/>
            <div class="card-body border-top cardBodyCustom" style = {{height: "14rem"}}>
                <h5 class="card-title cardTitleCustom">{this.props.blog.title}</h5>
                <p class="card-text cardTextCustom">{this.props.blog.text}</p>
            </div>
      </div>
    )
  }
}

export default BlogCard