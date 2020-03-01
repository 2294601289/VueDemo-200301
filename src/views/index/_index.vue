<template>
    <div class="_index">
        <div class="_index-content">
            <router-view/>
        </div>
        <div class="_index-navigation">
            <van-tabbar v-model="tabbarActive" @change="tabbarChange">
                <van-tabbar-item name="/index/home" icon="home-o">
                    <span>首页</span>
                    <img
                            slot="icon"
                            slot-scope="props"
                            :src="props.active ? require('../../assets/image/home_1.png') : require('../../assets/image/home_2.png')"
                    >
                </van-tabbar-item>
                <van-tabbar-item name="/index/self">
                    <span>我的</span>
                    <img
                            slot="icon"
                            slot-scope="props"
                            :src="props.active ? require('../../assets/image/self_1.png') : require('../../assets/image/self_2.png')"
                    >
                </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabbarActive: 0
        }
    },
    created() {
        // 初始化时设置状态
        this.tabbarActive = this.$route.path
    },
    mounted() {
    },
    methods: {
        tabbarChange(val) {
            this.$router.replace({name: val})
        }
    }
}
</script>

<style scoped>
    ._index {
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
