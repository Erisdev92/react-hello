import React from "react"


const Card = ()=> {

    return (
    <div className="card m-3 h-80">
  <img className="card-img-top" src="https://picsum.photos/500/325" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dicta minima fugiat doloribus rem debitis, ipsum quas ut tempora. Autem unde laudantium in tempore. Incidunt deleniti aut doloribus laboriosam ut!</p>
    <a href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
  </div>
</div>

)}

export default Card