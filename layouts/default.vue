<template>
    <div>
        <!-- <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">HOME</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header> -->
        
        <!-- output page content here-->

        <div class="container mx-auto p-4">
            <slot />

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px
    }

    .router-link-exact-active {
        color: #12b488;
    }

</style>