<template>
    <div>
        <div @click="$router.go(-1)">返回</div>
        搜索新闻
        <div @click="$router.replace($config._route.redirect)">返回
        </div>
    </div>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style scoped>

</style>
