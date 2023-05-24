<template>
    <div>
        <h2>About</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam vel voluptas nihil alias eos nam molestias culpa veniam eligendi.
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam vel voluptas nihil alias eos nam molestias culpa veniam eligendi.
        </p>

        <div>
            {{ data }}
        </div>
    </div>
</template>

<script setup>

    // const { data } = await useFetch('api/myendpoint?name=kingsley', {
    //     method: 'post',
    //     body: { age: 30 }
    // })
    // const { data } = await useFetch('api/myendpoint')
    const { data } = await useFetch('/api/currency/NGN')

</script>

<style scoped>

    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px
    }

</style>