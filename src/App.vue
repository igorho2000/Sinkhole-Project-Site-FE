<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView } from "vue-router";
import { useAppStore } from "./store/appStore";
import AnimationOverlay from "./components/AnimationOverlay.vue";

const { locale } = useI18n();

const appStore = useAppStore();

onBeforeMount(() => {
	appStore.checkIfMobile();

	let vh = window.innerHeight * 0.01;
	let vw = window.innerWidth;

	document.documentElement.style.setProperty("--vh", `${vh}px`);

	if (vw < 1025) {
		appStore.isNarrowDevice = true;
	}

	appStore.stopDistance = window.innerHeight;

	window.addEventListener("resize", () => {
		let vh = window.innerHeight * 0.01;
		let vw = window.innerWidth;

		document.documentElement.style.setProperty("--vh", `${vh}px`);

		if (vw < 1025) {
			appStore.isNarrowDevice = true;
		} else {
			appStore.isNarrowDevice = false;
		}

		appStore.stopDistance = window.innerHeight;
	});
});
onMounted(() => {
	document.title = appStore.lang === "en" ? "Sinkhole Analysis" : "天坑研究";
	localStorage.setItem("lang", appStore.lang);
	locale.value = appStore.lang;
});
</script>

<template>
	<div class="app-wrapper">
		<router-view> </router-view>
		<AnimationOverlay />
	</div>
</template>

<style lang="scss" scoped>
.app-wrapper {
	width: min(100%, 1440px);
}
</style>
