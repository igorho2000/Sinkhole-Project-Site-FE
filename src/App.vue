<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView } from "vue-router";
import { useAppStore } from "./store/appStore";
import AnimationOverlay from "./components/AnimationOverlay.vue";

const { locale } = useI18n();

const appStore = useAppStore();

function setHeightWidthParams() {
	let vh = window.innerHeight * 0.01;
	let vw = window.innerWidth;

	document.documentElement.style.setProperty("--vh", `${vh}px`);

	if (vw > 1024 && !appStore.isMobileDevice) {
		appStore.isNarrowDevice = false;
		appStore.stopDistance = window.innerHeight;
	} else if (vw > 750) {
		appStore.isNarrowDevice = false;
		appStore.stopDistance = 1000;
	} else {
		appStore.isNarrowDevice = true;
	}
}

onBeforeMount(() => {
	appStore.checkIfMobile();

	setHeightWidthParams();

	window.addEventListener("resize", setHeightWidthParams);
});
onMounted(() => {
	document.title = appStore.lang === "en" ? "Sinkhole Analysis" : "天坑潛在成因分析";
	localStorage.setItem("lang", appStore.lang);
	locale.value = appStore.lang;
});
</script>

<template>
	<div class="app-wrapper">
		<router-view />
		<AnimationOverlay />
	</div>
</template>

<style lang="scss" scoped>
.app-wrapper {
	width: min(100%, 1440px);
}
</style>
