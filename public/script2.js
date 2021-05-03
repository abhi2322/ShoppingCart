 function addProducts(name,manuf,price,done){

    $.post('/api/products',{
        name:name,
        manufacturer:manuf,
        price:price
    },function(data){
        done(data)
    })
}

$(function(){

    let name=$('#ProductName')
    let manuf=$('#Manufacturer')
    let price=$('#Price')
    $('#btnAdd').click(function(){
        addProducts(name.val(),manuf.val(),price.val(),function(addedproduct){
            window.alert("ADDED"+addedproduct.name+"to Database")
        })
    })

})