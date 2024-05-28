<script setup>
import { computed } from "vue";
import { useAppStore } from "../store/appStore";

const appStore = useAppStore();

const props = defineProps(["position", "index", "content"]);

const moreStepsBefore = computed(() => {
	return props.position < appStore.stopDistance * (props.index - 1);
});

const oneStepBefore = computed(() => {
	return (
		props.position >= appStore.stopDistance * (props.index - 1) &&
		props.position < appStore.stopDistance * props.index
	);
});

const active = computed(() => {
	return (
		props.position >= appStore.stopDistance * props.index &&
		props.position <= appStore.stopDistance * (props.index + 1)
	);
});

const oneStepAfter = computed(() => {
	return (
		props.position > appStore.stopDistance * (props.index + 1) &&
		props.position <= appStore.stopDistance * (props.index + 2)
	);
});

const moreStepsAfter = computed(() => {
	return props.position > appStore.stopDistance * (props.index + 2);
});

function handleReturn() {
	appStore.articleMode = false;
}
</script>

<template>
	<div
		:class="{
			articleelement: true,
			onestepbefore: oneStepBefore,
			onestepafter: oneStepAfter,
			morestepsbefore: !active && moreStepsBefore,
			morestepsafter: !active && moreStepsAfter,
		}"
		:style="{
			zIndex: 100 - index,
		}"
	>
		<button @click="handleReturn">Back</button>
		{{ index }}
	</div>
</template>

<style scoped lang="scss">
.articleelement {
	position: absolute;
	left: var(--font-m);
	top: 50%;
	width: calc(100% - 2 * var(--font-m));
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: var(--font-l);
	box-shadow: var(--color-border) 0px 0px var(--font-m);
	transform: translateY(-50%);
	transition: top 0.4s ease-in-out, background-color 0.4s ease-in-out;

	@media (max-width: 1025px) {
		width: 90vw;
	}
}

.morestepsbefore {
	top: 216%;
	background-color: #6a6a6a;
}

.onestepbefore {
	top: 133%;
	background-color: #6a6a6a;
}

.onestepafter {
	top: -33%;
	background-color: #6a6a6a;
}

.morestepsafter {
	top: -116%;
	background-color: #6a6a6a;
}
</style>
