$(document).ready(() => {

    const getCustomer = async() => {
        try {
            const customer = await get('/customerController/fetchCustomer')
            console.log(customer)
            document.getElementById("customers").innerHTML = `Hello ${customer.result}`
        } catch (error) {
            console.log(`customer.js getCustomer error : ${error}`)
        }
    }
    
    const getCustomerProduct = async() => {
        try {
            let category = ['bottle','can']
            const product = await post('/customerController/fetchCustomerProducts', {'category': category[1]})
            console.log(product)
            document.getElementById("products").innerHTML = `Available Products for ${category[1]} : ${product.result}`
        } catch (error) {
            console.log(`customer.js getCustomerProduct error : ${error}`)
        }
    }
    
    getCustomer()
    getCustomerProduct()

})