import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <>
      <div style={{"backgroundColor":"#e3d105","height":"10px"}}></div>
      <div style={{"paddingTop":"60px","marginLeft":"48%"}}>
        <img src={require("../assets/fork-knife-plate.png")} height="60px" width="60px" style={{"mixBlendMode":"hard-light"}} ></img>
      </div>
      <div style={{"textAlign":"center","paddingTop":"12px","paddingLeft":"130px","paddingRight":"130px"}}>
        <p>There's enough food for everyone. That restaurant serves excellent food. We cannot exist without food or water. She didn't went out to buy some food. Instead she ordered it online through our food store site.</p>
      </div>
      <div class="container" style={{"marginTop":"30px"}}>
        <div class="row">
          <div class="col-4" style={{"backgroundColor":"black","marginLeft":"210px","color":"white"}}>
              <h6 style={{"paddingTop":"15px","paddingLeft":"10px"}}>Best Food</h6>
              <p style={{"paddingLeft":"10px"}}>An eating plan that helps manage your weight includes a variety of healthy foods. Add an array of colors to your plate and think of it as eating the rainbow. Dark, leafy greens, oranges, and tomatoes—even fresh herbs—are loaded with vitamins, fiber, and minerals. Adding frozen peppers, broccoli, or onions to stews and omelets gives them a quick and convenient boost of color and nutrients.</p>
          </div>
          <div class="col-4" style={{"paddingTop":"30px","paddingLeft":"20px"}}>
            <img src={require("../assets/pexels-valeria-boltneva-1639563.jpg") } height="250px" width="350px" ></img>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default About