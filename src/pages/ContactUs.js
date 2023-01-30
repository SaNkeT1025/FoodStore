import React, { Component } from 'react'

export class ContactUs extends Component {
  render() {
    return (
      <>
      <div class="container-fluid">
        <div class="row" style={{"height":"87.6vh"}}>
            <div class="col-6" style={{"backgroundColor":"#e3d105"}}>
                <div style={{"padding-left": "114px","padding-top" : "75px"}}>
                  <span style={{"font-size": "2rem"}}>Request A <span style={{"color":"white"}}><strong>Call Back</strong></span></span>
                </div>

                <div style={{"padding-left": "114px","padding-top" : "20px"}}>
                  <form>
                    <input required placeholder='Name' style={{"width": "480px","height":"40px","paddingLeft":"10px"}}></input><br></br>
                    <input required type="email" placeholder='Email' style={{"margin-top": "12px","width": "480px","height":"40px","paddingLeft":"10px"}}></input><br></br>
                    <input required placeholder='Phone' style={{"margin-top": "12px","width": "480px","height":"40px","paddingLeft":"10px"}}></input><br></br>
                    <textarea placeholder='Message' style={{"margin-top": "12px","width": "480px","height":"80px","paddingLeft":"10px"}}></textarea><br></br>
                    <button required type="submit" style={{"marginTop":"24px","width":"120px","border":"none","height":"40px"}}>Send</button>
                  </form>
                </div>
            </div>
            
          <div class="col-6" style={{"backgroundColor":"#e3d105"}}>
              <img src={require("../assets/dessert.jpg")} height="400px" width="400px" style={{"margin": "90px 0px 0px 10px", "width": "565px"}}></img>
          </div>
          </div>
      </div>
      </>
    )
  }
}

export default ContactUs