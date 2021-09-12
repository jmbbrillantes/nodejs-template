const customerModels = {

    fetchCustomer : async() => {
        try {
            const customers = ["Jade", "Jane"]

            return {status: 'success', result: customers}
            
        } catch (error) {
            throw(error)
        }
    },

    fetchCustomerProducts : async({category}) => {
        try {
            console.log(`category: ${category}`)
            products = (category == 'bottle') ? ["red horse","royal","coke"] : (category == 'can') ? ['argentina','delimondo','cdo'] : ''

            return {status: 'success', result: products}
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = customerModels;