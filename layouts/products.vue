<template>
    <div>
        <header>
            <nav>
                <NuxtLin to="/products">HOME</NuxtLin>
               
            </nav>
        </header>
        
        <!-- output page content here-->

        <div>
            <slot />

        </div>



        <footer>
            <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
        </footer>
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