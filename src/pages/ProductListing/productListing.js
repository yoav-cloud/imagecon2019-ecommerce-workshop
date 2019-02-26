import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";
import ProductGrid from "../../components/ProductGrid/productGrid";

const ProductListingPage = (props) => {

	useEffect(() => {
		props.appData.fetchProducts();
	}, []);

	return <div className="section">
		<div className="container">
			<div className="row">
				<div id="aside" className="col-md-3">
				</div>

				<div id="store" className="col-md-9">
					<div className="store-filter clearfix">
						<div className="store-sort">
							<label>
								Sort By:
								<select className="input-select">
									<option value="0">Popular</option>
									<option value="1">Position</option>
								</select>
							</label>

							<label>
								Show:
								<select className="input-select">
									<option value="0">20</option>
									<option value="1">50</option>
								</select>
							</label>
						</div>
						<ul className="store-grid">
							<li className="active"><i className="fa fa-th"/></li>
							<li><a href="#"><i className="fa fa-th-list"/></a></li>
						</ul>
					</div>

					<ProductGrid products={props.appData.products} />

					<div className="store-filter clearfix">
						<span className="store-qty">Showing 20-100 products</span>
						<ul className="store-pagination">
							<li className="active">1</li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>;



	//
	// <div>
	// 	<h1>PLP !!!!!!!!!!</h1>
	//
	// 	<ProductList products={props.appData.products}/>
	// </div>
	//
};


export default inject("appData")(ProductListingPage);