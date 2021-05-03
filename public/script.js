
function fetchProducts(calfun){
    $.get('/api/products',(products)=>{
        calfun(products)
    })
}

function getProductCard(product){
    return(`
    <div class="col-4 card border-warning mx-3 p-2">
        <h4 class="product-name">${product.name}</h4>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="row">
            <div class="col p-3">
                Rs.${product.price}
            </div>
            <button class="col btn btn-primary m-3 p-1">BUY</button>
 </div>`)
}

$(function(){
    let product_list=$('#product-list')
    fetchProducts((products)=>{
        product_list.empty()
        for(product of products){
            product_list.append(getProductCard(product))
        }
    })
})


