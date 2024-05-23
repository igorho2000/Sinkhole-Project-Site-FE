<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView } from "vue-router";
import { useAppStore } from "./store/appStore";

const { locale } = useI18n();

const appStore = useAppStore();

onBeforeMount(() => {
	appStore.checkIfMobile();

	let vh = window.innerHeight * 0.01;
	let vw = window.innerWidth;

	document.documentElement.style.setProperty("--vh", `${vh}px`);

	if (vw < 760) {
		appStore.isNarrowDevice = true;
	}

	window.addEventListener("resize", () => {
		let vh = window.innerHeight * 0.01;
		let vw = window.innerWidth;

		document.documentElement.style.setProperty("--vh", `${vh}px`);

		if (vw < 760) {
			appStore.isNarrowDevice = true;
		} else {
			appStore.isNarrowDevice = false;
		}
	});
});
onMounted(() => {
	document.title = appStore.lang === "en" ? "Sinkhole Analysis" : "天坑研究";
	localStorage.setItem("lang", appStore.lang);
	locale.value = appStore.lang;
});
</script>

<template>
	<router-view> </router-view>
</template>

<style lang="scss" scoped></style>
