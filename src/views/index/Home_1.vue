<template>
    <div class="Home">
        首页
        <ul>
            <li v-for="(item,index) in 50" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Home",
    created() {
        this.axios.get('./static/data/config.json').then(res => {

        })
    }
}
</script>

<style scoped>
    .Home{
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>
