<template>
    <div>
        <!-- <h5>Tracker</h5> -->
        <!-- <p> -->
            <!-- {{ data.thelast.sensorId }} <br />
            {{ data.thelast.location }} <br />
            {{ data.thelast.longitude }} <br />
            {{ data.thelast.latitude }} <br />
            {{ data.thelast.created_at }} <br /> -->
             <!-- {{ mapurl + data.thelast.longitude + ',' + data.thelast.latitude }} <br />
             {{ earthurl + data.thelast.longitude + ',' + data.thelast.latitude }} <br /> -->
             <!-- <a :href="mapurl + data.thelast.longitude + ',' + data.thelast.latitude" target="_blank">Google Map</a> <br />
             <a :href="earthurl + data.thelast.longitude + ',' + data.thelast.latitude" target="_blank">Google Earth</a> <br /> -->
            <!-- {{ counter }} -->

        <!-- </p> -->
        
        <!-- <div class="max-w-sm rounded overflow-hidden shadow-lg"> -->
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full h-1/16" src="https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2018/03/How-to-Build-a-Car-GPS-Tracking-System-main-image.jpg" alt="Real-time Locator">
                
                
                
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Sensor ID: {{ data.thelast.sensorId }}</div>
                    <span class="text-gray-700 text-base">This is a real-time tracker for the Sensor ID: FUTA</span><br />
                    <span class="text-gray-700 text-base"><b>THESIS TITLE: </b> Combating Human Kidnapping using Smart Objects and Internet of Things.</span><br />
                    <span class="text-gray-700 text-base"><b>Author:</b> Osagie Kingsley Omoruyi</span>
                    
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-indigo-700 rounded-full px-3 py-1 text-lg font-semibold text-white-1000 mr-2 mb-2">Longitude: {{ data.thelast.longitude }}</span>
                    <span class="inline-block bg-green-700 rounded-full px-3 py-1 text-lg font-semibold text-white-700 mr-2 mb-2">Latitude: {{ data.thelast.latitude }}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">{{ data.thelast.created_at }}</span>
                    <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                        <a :href="mapurl + data.thelast.longitude + ',' + data.thelast.latitude" target="_blank">Google Map</a> <br />
                    </span>
                    <span class="inline-block bg-indigo-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                        <a :href="earthurl + data.thelast.longitude + ',' + data.thelast.latitude" target="_blank">Google Earth</a> <br />
                    </span>
                </div>
        </div>

      
      

      
    </div>
</template>

<script setup>
    import { useInterval } from '@vueuse/core'
    import { Loader } from "@googlemaps/js-api-loader"

    const counter = useInterval(5000);
    const { data } = await useFetch('https://www.osagie.dev/api/lastplace', { watch: [counter] });
    //url = 'https://www.google.com/maps/search/?api=1&query=' + data.thelast.longitude + ',' + data.thelast.latitude
    const mapurl = 'https://www.google.com/maps/search/?api=1&query='
    const earthurl = 'https://earth.google.com/web/@'

    // const loader = new Loader({
    // apiKey: process.env.GOOGLE_MAP_API_KEY,
    // version: "weekly",
    
    // });

    // loader.load().then(async () => {
    // const { Map } = await google.maps.importLibrary("maps");

    // map = new Map(document.getElementById("map"), {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    // });
    // });


    
    

    
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