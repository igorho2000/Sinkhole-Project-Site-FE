<script setup>
import { computed } from "vue";
import { useAppStore } from "../store/appStore";
import { useI18n } from "vue-i18n";

const { BASE_URL } = import.meta.env;

const appStore = useAppStore();
const { t } = useI18n();

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
		<div
			class="articleelement-header"
			:style="{
				backgroundImage: `url('${BASE_URL}/src/assets/images/${content.title}-header.png')`,
			}"
		>
			<div class="articleelement-header-content">
				<button @click="handleReturn">
					<span>arrow_back_ios</span>
				</button>
				<h3>{{ t(`${content.title}.subtitle`) }}</h3>
				<h2>{{ t(`${content.title}.maintitle`) }}</h2>
			</div>
		</div>
		<div class="articleelement-content">
			<div
				v-for="(sec, index) of content.content"
				:key="`${content.title}-sec-${index + 1}`"
			>
				<p v-if="sec === 'text'">
					{{ t(`${content.title}.text${index + 1}`) }}
				</p>
				<img
					v-else-if="sec === 'img'"
					:src="`${BASE_URL}/src/assets/images/${content.title}-${
						index + 1
					}.png`"
				/>
				<div v-else-if="sec === 'caption'">
					<p>{{ t(`${content.title}.captiontitle${index + 1}`) }}</p>
					<p>{{ t(`${content.title}.captiontext${index + 1}`) }}</p>
				</div>
			</div>
		</div>
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
	flex-direction: column;
	background-color: white;
	border-radius: var(--font-l);
	box-shadow: var(--color-border) 0px 0px var(--font-m);
	transform: translateY(-50%);
	transition: top 0.4s ease-in-out, background-color 0.4s ease-in-out;

	@media (max-width: 1025px) {
		width: 90vw;
	}

	h2,
	h3 {
		color: white;
	}

	&-header {
		width: 100%;
		height: 30%;
		background-color: var(--color-border);
		background-size: cover;
		background-position: center;

		&-content {
			width: calc(100% - 4rem);
			height: calc(100% - 2rem);
			background-color: var(--color-overlay);
			padding: 1rem 2rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;

			button {
				display: none;
				span {
					font-size: var(--font-xl);
					color: white;
				}
			}

			h2 {
				font-size: 3rem;
			}

			h3 {
				font-size: var(--font-xl);
				margin-bottom: 0.5rem;
			}

			@media (max-width: 1025px) {
				button {
					position: absolute;
					top: 1rem;
					left: 1.25rem;
					display: flex;
				}
			}

			@media (max-width: 750px) {
				padding: 0.5rem 1rem;
				width: calc(100% - 2rem);
				height: calc(100% - 1rem);

				button {
					position: absolute;
					top: 0.75rem;
					left: 0.5rem;
					display: flex;
				}

				h2 {
					font-size: 1.75rem;
				}

				h3 {
					font-size: var(--font-l);
					margin-bottom: 0;
				}
			}
		}
	}

	&-content {
		width: calc(100% - 4rem);
		height: calc(70% - 4rem);
		margin: 2rem;
		overflow-y: auto;

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

		> div {
			display: flex;
			flex-direction: column;
			margin-bottom: 1.5rem;

			p {
				font-size: var(--font-m);
				line-height: 1.5;
			}

			.img {
				width: min(1200px, 100%);
				align-self: center;
			}

			div {
				align-self: center;
				max-width: min(400px, 100%);

				p {
					font-size: var(--font-s);
					text-align: center;

					&:first-child {
						font-weight: 700;
					}
				}
			}

			.dbimg {
				display: grid;
				width: min(1200px, 100%);
				align-self: center;
				grid-template-columns: 1fr 1fr;
				gap: 1rem;

				img {
					width: 100%;
				}

				.caption {
					margin-top: 1rem;
				}

				@media screen and (max-width: 750px) {
					width: min(350px, 85%);
					grid-template-columns: 1fr;
				}
			}

			&:last-child {
				margin-bottom: 0;
			}
		}

		@media (max-width: 750px) {
			width: calc(100% - 2rem);
			height: calc(70% - 2rem);
			margin: 1rem;
		}
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
