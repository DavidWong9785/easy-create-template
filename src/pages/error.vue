<template>
    <div class="errorPage" @touchmove.prevent>
        <p>这个页面飞到太空去了...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
};
</script>


<style lang="less" scoped>
.errorPage {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	p {
		font-size: 30px;
		text-align: center;
		color: #b8b8b8;
	}
}
</style>
