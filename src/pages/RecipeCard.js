import React, { Component } from 'react'
import '../css/RecipeCards.css'
import { useAuth0 } from "@auth0/auth0-react";

function RecipeCard(props) {

  const {isAuthenticated} = useAuth0();
  function placeOrderClicked() {
  
    if(isAuthenticated) {
      alert("Order Placed Successfully");
    }
    else {
      alert("Please Log In/Register first.");
    }
  
  }
  return (
    <div class="card mt-5 rounded-3 cardLayout ml-3" style = {{marginLeft: "15%", "font-family": "'Montserrat', 'sans-serif'"}}>
    <img class="card-img-top" src={props.recipeProp.image} alt="Card cap"/>
    <div class="card-body">
        <h5 class="card-title text-center" style = {{"font-size": "19px"}}>{props.recipeProp.name}</h5>
        <p class="card-text text-center cardTextCust">{props.recipeProp.price}</p>
        <button class = "btn btn-success" onClick ={()=>placeOrderClicked()}>Order Now</button>
    </div>
  </div>
  )
}

export default RecipeCard





















// const RecipeCard = () => {

//   const isAuthenticated = useAuth0();

//     placeOrderClicked = () => {
    
//     console.log(isAuthenticated)
//     if(isAuthenticated) {
//       alert("Order Placed Successfully");
//     }
//     else {
//       alert("Please Log In/Register first.");
//     }
    
//   }
//     return (
//         <div class="card mt-5 rounded-3 cardLayout ml-3" style = {{marginLeft: "15%", "font-family": "'Montserrat', 'sans-serif'"}}>
//             <img class="card-img-top" src={this.props.recipeProp.image} alt="Card cap"/>
//             <div class="card-body">
//                 <h5 class="card-title text-center" style = {{"font-size": "19px"}}>{this.props.recipeProp.name}</h5>
//                 <p class="card-text text-center cardTextCust">{this.props.recipeProp.price}</p>
//                 <button class = "btn btn-success" onClick ={()=>placeOrderClicked()}>Order Now</button>
//             </div>
//       </div>
//     )
// }

// export default RecipeCard