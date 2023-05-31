<template>
    <div>
        <h2>Tracker</h2>
        <p>
            {{ data.thelast.sensorId }} <br />
            {{ data.thelast.location }} <br />
            {{ data.thelast.longitude }} <br />
            {{ data.thelast.latitude }} <br />
            {{ data.thelast.created_at }} <br />
            {{ counter }}
            
        </p>

      
    </div>
</template>

<script setup>
    import { useInterval } from '@vueuse/core'
    const counter = useInterval(5000);
    const { data } = await useFetch('https://www.osagie.dev/api/lastplace', { watch: [counter] });

    

    
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