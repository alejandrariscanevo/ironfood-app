import React from 'react';
import Styles from '../components/Template/style.css'
import dataProductsView from '../components/dataProductsView'
import Product from '../components/Products-2/Product'

function ProductsView(){
    return (
       <div class="grid-container">
           <header class="row">
                <div>
                    <a class="brand" href="/">IronFood</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
           </header>
           <main>
                <div class="row center">
                {dataProductsView.products.map((product) => (
                        <Product key={product._id} product={product}></Product>              
                    ))
                }                 
                </div>
           </main>
           <footer class="row center">
            All Rights Reserved
           </footer>
       </div> 
    );
}

export default ProductsView;