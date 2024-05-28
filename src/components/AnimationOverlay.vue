<script setup>
import { useAppStore } from "../store/appStore";

const appStore = useAppStore();
</script>

<template>
	<Teleport to="body">
		<Transition name="fade">
			<div class="animationoverlay" v-if="appStore.showAnimation">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped lang="scss">
.animationoverlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: calc(100vh + 100vw);
	height: calc(var(--vh) * 100 + 100vw);
	opacity: 1;
	z-index: 1000;
	overflow: hidden;

	div {
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 100vw;
		height: 100vw;
		border-radius: 50%;
		background: var(--color-gradient);
		transform: translateX(-50%);
		animation: expand 2s ease-in-out;
		animation-fill-mode: forwards;
	}

	div:nth-child(1) {
		animation-delay: 0s;
	}

	div:nth-child(2) {
		animation-delay: 0.4s;
	}

	div:nth-child(3) {
		animation-delay: 0.7s;
	}

	div:nth-child(4) {
		animation-delay: 0.9s;
	}

	div:nth-child(5) {
		animation-delay: 1.1s;
	}
}
@keyframes expand {
	0% {
		transform: translateX(-50%) scale(1);
	}
	100% {
		transform: translateX(-50%) scale(6);
	}
}
.fade-leave-active {
	transition: opacity 0.4s;
}
.fade-leave-to {
	opacity: 0;
}
</style>
