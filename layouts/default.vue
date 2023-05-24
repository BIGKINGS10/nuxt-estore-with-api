<template>
    <div>
        <header>
            <nav>
                <NuxtLin to="/">HOME</NuxtLin>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        
        <!-- output page content here-->

        <div>
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