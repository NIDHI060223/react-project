import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Categories } from './CategoryApi';

function Singlepage() {

  const { id } = useParams();
  const filteredCategories  = Categories.find(category => category.id.toString() === id);
  console.log(filteredCategories.name)
  
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className="col-12 col-md-4 p-5 mt-3" key = {filteredCategories.id} >
                <a href="#category"><img src={`/assets/img/${filteredCategories.img}`} className="rounded-circle img-fluid border" alt="category1"/></a>
                <h5 className="text-center mt-3 mb-3">{filteredCategories.name}</h5>
                <Link to={`/go-shop/${filteredCategories.id}`} className="text-center btn btn-success" >Go Shop</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Singlepage
