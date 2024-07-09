import React from 'react'
import { Categories } from './Categories'
import { Link } from 'react-router-dom'

function Singlepage() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
        {Categories.map((category)=>(
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#category"><img src={category.img} className="rounded-circle img-fluid border" alt="category1"/></a>
                <h5 className="text-center mt-3 mb-3">{category.name}</h5>
                <Link to={`/go-shop/${category.id}`} className="text-center btn btn-success" >Go Shop</Link>
            </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Singlepage
