<script setup>
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "../store/appStore";

import { articles } from "../assets/articles";
import { RouterLink } from "vue-router";

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
	appStore.articleMode = true;
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
					<div @click="handleExpandSection('overview')">
						<h2>{{ t("sections.overview") }}</h2>
						<button v-if="open !== 'overview'">
							<span>add</span>
						</button>
					</div>
					<p>
						{{ t("sections.overviewdesc") }}
					</p>
					<div
						:class="{
							'sidebar-articles': true,
							'sidebar-articles-active': open === 'overview',
							'sidebar-articles-activescroll':
								open === 'overview' &&
								overviewArticles.length > 2,
						}"
					>
						<button
							v-for="overview in overviewArticles"
							:class="{
								iscurrentarticle:
									currentArticle.title === overview.title &&
									open === 'overview',
							}"
							@click="handleClickArticle(overview.title)"
							:key="`overview-${overview.title}-tab`"
						>
							<div :class="{ iscause: overview.isCause }">
								<span>{{ overview.icon }}</span>
							</div>
							<h4>{{ t(`${overview.title}.title`) }}</h4>
							<span>arrow_forward_ios</span>
						</button>
					</div>
				</div>
				<div class="sidebar-section">
					<div @click="handleExpandSection('time')">
						<h2>{{ t("sections.time") }}</h2>
						<button v-if="open !== 'time'">
							<span>add</span>
						</button>
					</div>
					<p>{{ t("sections.timedesc") }}</p>
					<div
						:class="{
							'sidebar-articles': true,
							'sidebar-articles-active': open === 'time',
							'sidebar-articles-activescroll':
								open === 'time' && timeArticles.length > 2,
						}"
					>
						<button
							v-for="time in timeArticles"
							:class="{
								iscurrentarticle:
									currentArticle.title === time.title &&
									open === 'time',
							}"
							@click="handleClickArticle(time.title)"
							:key="`time-${time.title}-tab`"
						>
							<div :class="{ iscause: time.isCause }">
								<span>{{ time.icon }}</span>
							</div>
							<h4>{{ t(`${time.title}.title`) }}</h4>
							<span>arrow_forward_ios</span>
						</button>
					</div>
				</div>
				<div class="sidebar-section">
					<div @click="handleExpandSection('space')">
						<h2>{{ t("sections.space") }}</h2>
						<button v-if="open !== 'space'">
							<span>add</span>
						</button>
					</div>
					<p>{{ t("sections.spacedesc") }}</p>
					<div
						:class="{
							'sidebar-articles': true,
							'sidebar-articles-active': open === 'space',
							'sidebar-articles-activescroll':
								open === 'space' && spaceArticles.length > 2,
						}"
					>
						<button
							v-for="space in spaceArticles"
							:class="{
								iscurrentarticle:
									currentArticle.title === space.title &&
									open === 'space',
							}"
							@click="handleClickArticle(space.title)"
							:key="`space-${space.title}-tab`"
						>
							<div :class="{ iscause: space.isCause }">
								<span>{{ space.icon }}</span>
							</div>
							<h4>{{ t(`${space.title}.title`) }}</h4>
							<span>arrow_forward_ios</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar-controls">
			<RouterLink to="/"><span>home</span></RouterLink>
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
	height: calc(100%);
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
		height: min(600px, 60%);
		overflow-y: scroll;
		margin-bottom: 72px;
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
		padding: var(--font-s) 0 0 var(--font-s);
		border-bottom: solid 2px var(--color-border);

		&:nth-child(2) {
			margin-top: var(--font-l);
			border-top: solid 2px var(--color-border);
		}

		> div:first-child {
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
	}

	&-articles {
		width: 100%;
		max-height: 0px;
		margin: var(--font-s) 0 0;
		overflow-y: scroll;
		transition: max-height 0.3s ease-in-out;

		button {
			width: 100%;
			display: grid;
			grid-template-columns: 28px 1fr 36px;
			align-items: center;
			column-gap: var(--font-s);
			padding: var(--font-s) 0;
			border-top: 1px solid #a4a4a4;

			div {
				width: var(--font-xl);
				height: var(--font-xl);
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 5px;
				border: solid 2px var(--color-border);

				span {
					font-size: var(--font-l);
					color: var(--color-border);
				}
			}

			div.iscause {
				background-color: var(--color-border);

				span {
					color: white;
				}
			}

			h4 {
				text-align: left;
				font-size: var(--font-l);
				color: var(--color-border);
				transition: color 0.3s ease-in-out;
			}

			> span {
				margin-right: var(--font-s);
				font-size: var(--font-xl);
				opacity: 1;
				color: var(--color-border);
				transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
					color 0.3s ease-in-out;
			}

			&:hover {
				h4 {
					color: black;
				}
				> span {
					color: black;
					transform: translateX(6px);
				}
			}
		}

		button.iscurrentarticle {
			h4 {
				color: black;
			}
			> span {
				opacity: 0;
			}
		}

		&-active {
			max-height: 130px;
			margin: var(--font-s) 0 4px;
		}
		&-activescroll {
			&::-webkit-scrollbar {
				width: 6px;
			}
			&::-webkit-scrollbar-thumb {
				background-color: var(--color-border);
				border-radius: 6px;
			}
			&::-webkit-scrollbar-track {
				background-color: #a1a1a1;
				border-radius: 6px;
			}
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

		button,
		a {
			span {
				font-size: var(--font-xl);
			}
		}
	}
}
</style>
