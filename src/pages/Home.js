import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <>
          <div class="container-fluid">
            <div class="row" style ={{height: "87.6vh"}}>
              <div class="col-5 text-white" style={{"backgroundColor":"black"}}>
                  <h1 style={{"padding-left": "76px","padding-top": "45px"}}>Discover<br></br>
                  Restaurants<br></br>
                  that deliver near<br></br>
                  You
                  </h1>
                  <p style={{"padding-left": "76px","padding-top": "12px"}}>Straight out of the oven to your doorstep.
                  Let deliciousness twirl in your mouth.
                  Eat the food you dream about at affordable prices.
                  Best Service to fulfill your expectations.
                  No need to come to us just call is.
                  </p>
                  <div style={{"padding-left": "76px","padding-top": "12px"}}><button class="btn " style={{"color":"white","borderColor":"white","borderRadius":"0","width": "26%",height: "40px","padding":"0"}}>
                    <Link style ={{"text-decoration": "none", color: "White"}}  to = "/recipe">
                      Order Now
                    </Link>
                    </button></div>
                  
              </div>
              <div class="col-7 text-white" style={{"backgroundColor":"black"}}>
                    <img  src={require("../assets/burger.png")} style={{height: "31rem", marginLeft: "9%"}}></img>
              </div>
             
            </div>
          </div>
      </>
    )
  }
}

export default Home