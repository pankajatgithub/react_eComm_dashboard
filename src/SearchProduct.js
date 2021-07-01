import Header from './header'
import { useState } from 'react';


function SearchProduct() {
    return(
        <div>
            <Header />
            <h1>Search Product</h1>
            <br/>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" className="form-control" placeholder="Search Product" />
            </div>
        </div>

        
    )
    

}
export default SearchProduct;