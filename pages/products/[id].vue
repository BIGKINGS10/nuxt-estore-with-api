<template>
    <div>
        <p>Product Details for {{ id }}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum cupiditate accusamus necessitatibus nulla, repellendus nisi velit fugiat ipsa laudantium delectus.</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

</script>

<style scoped>

</style>