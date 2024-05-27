<script setup>
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "../store/appStore";

import { articles } from "../assets/articles";

const { t } = useI18n();
const appStore = useAppStore();
const props = defineProps(["position"]);

const open = ref("overview");

const overviewArticles = computed(() => {
	return articles.filter((article) => article.section === "overview");
});
const timeArticles = computed(() => {
	return articles.filter((article) => article.section === "time");
});
const spaceArticles = computed(() => {
	return articles.filter((article) => article.section === "space");
});
const currentArticle = computed(() => {
	const index = Math.floor(props.position / appStore.stopDistance);
	return articles[index] ? articles[index] : articles[articles.length - 1];
});

watch(currentArticle, () => {
	if (currentArticle.value.section !== open.value) {
		open.value = currentArticle.value.section;
	}
});

function handleExpandSection(section) {
	open.value = section;
}

function handleClickArticle(title) {
	window.scrollTo({
		top:
			appStore.stopDistance *
				articles.findIndex((article) => article.title === title) +
			10,
		behavior: "smooth",
	});
}
</script>

<template>
	<div class="sidebar">
		<h1>{{ t("sidebar.title") }}</h1>
		<h3>{{ t("sidebar.subtitle") }}</h3>
		<div class="sidebar-sectionswrapper">
			<div class="sidebar-sections">
				<div class="sidebar-cause">
					<div class="sidebar-cause-item">
						<div></div>
						<p>{{ t("sidebar.cause") }}</p>
					</div>
					<div class="sidebar-cause-item">
						<div></div>
						<p>{{ t("sidebar.nocause") }}</p>
					</div>
				</div>
				<div class="sidebar-section">
					<div>
						<h2>{{ t("sections.overview") }}</h2>
						<button
							@click="handleExpandSection('overview')"
							v-if="open !== 'overview'"
						>
							<span>add</span>
						</button>
					</div>
					<p>
						{{ t("sections.overviewdesc") }}
					</p>
					<div></div>
				</div>
				<div class="sidebar-section">
					<div>
						<h2>{{ t("sections.time") }}</h2>
						<button
							@click="handleExpandSection('time')"
							v-if="open !== 'time'"
						>
							<span>add</span>
						</button>
					</div>
					<p>{{ t("sections.timedesc") }}</p>
					<div></div>
				</div>
				<div class="sidebar-section">
					<div>
						<h2>{{ t("sections.space") }}</h2>
						<button
							@click="handleExpandSection('space')"
							v-if="open !== 'space'"
						>
							<span>add</span>
						</button>
					</div>
					<p>{{ t("sections.spacedesc") }}</p>
					<div></div>
				</div>
			</div>
		</div>
		<div class="sidebar-controls">
			<button><span>home</span></button>
			<button><span>home</span></button>
			<button><span>home</span></button>
			<button><span>home</span></button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.sidebar {
	position: relative;
	width: min(100%, 500px);
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 2.5rem;
		padding-bottom: 8px;
		border-bottom: solid 2px black;
	}

	h3 {
		margin-top: var(--font-s);
		font-size: var(--font-l);
	}

	&-sectionswrapper {
		margin-top: 1rem;
		height: min(600px, 65%);
		overflow-y: scroll;
	}

	&-sections {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	&-cause {
		display: flex;
		justify-content: flex-end;
		margin-top: var(--font-l);
		column-gap: 12px;
		flex-shrink: 0;

		&-item {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			column-gap: 6px;

			&:first-child div {
				background-color: var(--color-border);
			}

			div {
				width: var(--font-m);
				height: var(--font-m);
				border-radius: 5px;
				border: solid 2px var(--color-border);
			}

			p {
				font-size: var(--font-m);
				font-weight: 700;
			}
		}
	}

	&-section {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--font-m);
		border-bottom: solid 2px var(--color-border);

		&:nth-child(2) {
			margin-top: var(--font-l);
			border-top: solid 2px var(--color-border);
		}

		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;

			h2 {
				font-size: var(--font-l);
			}

			span {
				font-size: var(--font-l);
				cursor: pointer;
			}
		}

		p {
			font-size: var(--font-m);
			margin-top: var(--font-s);
		}

		&:last-child {
			margin-bottom: var(--font-l);
		}
	}

	&-controls {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 50%;
		display: flex;
		justify-content: center;
		column-gap: var(--font-xl);
		padding: var(--font-l) 0 var(--font-xl);
		background-color: var(--color-background);
		transform: translateX(-50%);

		button {
			span {
				font-size: var(--font-xl);
			}
		}
	}
}
</style>
