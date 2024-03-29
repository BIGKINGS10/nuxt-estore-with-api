// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-mapbox'],
    app: {
        head: {
            title: 'Nuxt e-Store',
            meta: [
                { name: 'description', content: 'Nuxt 3 Js e-store project'}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    },
    
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    },

    mapbox: {
        accessToken: process.env.MAPBOX_API_KEY
    }

})
