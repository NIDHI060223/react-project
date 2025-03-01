import React from 'react'
import { Clothes } from './Clothapi'
import { Link } from 'react-router-dom'

function Shop() {
   
  return (
    <div>
      <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>



    <div className="container py-5">
        <div className="row">

            <div className="col-lg-3">
                <h1 className="h2 pb-4">Categories</h1>
                <ul className="list-unstyled templatemo-accordion">
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#gender">
                            Gender
                            <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul className="collapse show list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#men">Men</a></li>
                            <li><a className="text-decoration-none" href="#women">Women</a></li>
                        </ul>
                    </li>
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#sale">
                            Sale
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#sport">Sport</a></li>
                            <li><a className="text-decoration-none" href="#luxury">Luxury</a></li>
                        </ul>
                    </li>
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#product">
                            Product
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul id="collapseThree" className="collapse list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#bag">Bag</a></li>
                            <li><a className="text-decoration-none" href="#sweather">Sweather</a></li>
                            <li><a className="text-decoration-none" href="#sunglass">Sunglass</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="col-lg-9">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-inline shop-top-menu pb-3 pt-1">
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none mr-3" href="#all">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none mr-3" href="#men">Men's</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none" href="#women">Women's</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="d-flex">
                            <select className="form-control">
                                <option>Featured</option>
                                <option>A to Z</option>
                                <option>Item</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Clothes.map((cloth)=>(
                        <div className="col-md-4" key={cloth.id}>
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={`/assets/img/${cloth.img}`} alt="shop1"/>
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                        <li><Link className="btn btn-success text-white mt-2" to={`/view-cloth/${cloth.id}`}><i className="far fa-eye"></i></Link></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <a href="shop-single.html" className="h3 text-decoration-none">{cloth.name}</a>
                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li>{cloth.size}</li>
                                    <li className="pt-2">
                                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                    </li>
                                </ul>
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p className="text-center mb-0">{cloth.price}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                    
                </div>
                <div div="row">
                    <ul className="pagination pagination-lg justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#1" tabIndex="-1">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#2">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#3">3</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>


    <section className="bg-light py-5">
        <div className="container my-4">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Our Brands</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="col-lg-9 m-auto tempaltemo-carousel">
                    <div className="row d-flex flex-row">
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                                <i className="text-light fas fa-chevron-left"></i>
                            </a>
                        </div>

                        <div className="col">
                            <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                                <div className="carousel-inner product-links-wap" role="listbox">

                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="#1"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                                            </div>


                                            <div className="col-3 p-md-5">
                                                <a href="#2"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#3"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#4"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="#1"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#2"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#3"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#4"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="#1"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#2"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#3"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#4"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                <i className="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Shop
