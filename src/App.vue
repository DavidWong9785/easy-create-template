<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import Vue from 'vue';
export default {
	name: 'App',
	created() {
		document.body.addEventListener('focusout', () => {
			document.body.scrollTop = 0;
			window.scrollTo(0, 0);
			setTimeout(function () {
				document.body.scrollTop = 0;
				window.scrollTo(0, 0);
			}, 100);
		});
	},
};
</script>
