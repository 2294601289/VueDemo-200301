<template>
    <div class="_index">
        <div class="_index-content">
            <router-view/>
        </div>
        <div class="_index-navigation">
            链接
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
    ._index{
        width: 100%;
        height: 100%;
    }
    ._index-content {
        background: aquamarine;
        width: 100%;
        height: calc(100% - 50px);
        overflow: hidden;
    }

    ._index-navigation {
        background: aqua;
        width: 100%;
        height: 50px;
    }
</style>
