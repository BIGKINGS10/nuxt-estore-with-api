export default defineEventHandler(async (event) => {
    // Handle query params

    //const { name } = getQuery(event)

    //handle post data
    //const { age } = await readBody(event);

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=M2HOLg2rEkw1sLLvB1FSvxcZCiZXIGPNBoV8zowL')


    return {
       // message: `Hello, ${name}! You are ${age} years old`
       data
    }
})