const stripe = require('stripe')('sk_test_2DalIouoBjH6S0ynLrEptrMZ')

exports.handler = async function(event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    }) 

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'aud'
    })
}