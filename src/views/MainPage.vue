<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { useAppStore } from "../store/appStore";
import { articles } from "../assets/articles";

import ArticleElement from "../components/ArticleElement.vue";
import SideBar from "../components/SideBar.vue";

const appStore = useAppStore();
const position = ref(0);

function handleScroll(e) {
	position.value = Math.round(window.scrollY);
}

onMounted(() => {
	document.addEventListener("scroll", (e) => handleScroll(e));
});
onUnmounted(() => {
	document.removeEventListener("scroll", (e) => handleScroll(e));
});
</script>

<template>
	<div
		class="mainpage"
		:style="{
			height: `calc(100vh + ${
				articles.length * appStore.stopDistance
			}px)`,
			height: `calc(var(--vh) * 100 + ${
				articles.length * appStore.stopDistance
			}px)`,
		}"
	>
		<div class="mainpage-positioner">
			<div class="mainpage-positioner-sidebar">
				<SideBar :position="position" />
			</div>
			<div class="mainpage-positioner-articles">
				<ArticleElement
					v-for="(article, index) in articles"
					:position="position"
					:index="index"
					:content="article"
					:key="`${article.section}-${article.title}`"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.mainpage {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-x: visible;

	.mainpage-positioner {
		position: fixed;
		top: 0;
		left: 50%;
		width: min(calc(90vw), calc(1440px - 4 * var(--font-l)));
		height: 100vh;
		height: calc(var(--vh) * 100);
		display: flex;
		column-gap: var(--font-l);
		justify-content: center;
		align-items: center;
		transform: translateX(-50%);
		overflow-y: hidden;
		transition: left 0.3s ease-in-out;

		&-sidebar {
			width: 400px;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&-articles {
			position: relative;
			flex: 1;
			height: 100%;
			overflow-y: hidden;
		}

		@media (max-width: 1025px) {
			left: 5vw;
			width: 200vw;
			transform: none;
			column-gap: 8vw;

			&:hover {
				left: -95vw;
			}

			&-sidebar {
				min-width: 90vw;
				width: 90vw;
			}

			&-articles {
				flex: auto;
				flex-wrap: nowrap;
				min-width: 90vw;
				width: 90vw;
			}
		}

		@media (max-width: 760px) {
			column-gap: calc(8vw - 8px);
		}
	}
}
</style>
