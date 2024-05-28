<script setup>
import { useI18n } from "vue-i18n";
import { useAppStore } from "../store/appStore";

const props = defineProps(["dark"]);

const { t, locale } = useI18n();
const appStore = useAppStore();

function toggleLang() {
	const changeTo = appStore.lang === "en" ? "ch" : "en";
	localStorage.setItem("lang", changeTo);
	locale.value = changeTo;
	appStore.toggleLang(changeTo);
}
</script>

<template>
	<button
		@click="toggleLang"
		:class="{ translatebutton: true, 'translatebutton-dark': dark }"
	>
		{{ t("oppositeLanguage") }}
	</button>
</template>

<style scoped lang="scss">
.translatebutton {
	width: 2rem;
	border: solid 1px white;
	border-radius: 5px;
	background: transparent;
	color: white;
	font-weight: 700;
	padding: 2px 4px;
	cursor: pointer;
	overflow: hidden;

	&-dark {
		border: solid 1px black;
		color: black;
	}
}
</style>
