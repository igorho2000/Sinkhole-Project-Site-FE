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
function handleNavigateToThis() {
	window.scrollTo({
		top: appStore.stopDistance * props.index + 10,
		behavior: "smooth",
	});
	console.log("navigate to this");
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
			credit: content.title === 'credit',
		}"
		:style="{
			zIndex: 100 - index,
		}"
		@click="handleNavigateToThis"
	>
		<div
			v-if="content.title !== 'credit'"
			class="articleelement-header"
			:style="{
				backgroundImage: `url('${BASE_URL === '/' ? '/' : '/sinkhole/'}images/${content.title}-header.png')`,
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
		<div
			v-if="content.title !== 'credit'"
			class="articleelement-content"
			@scroll="handleNavigateToThis"
		>
			<div
				v-for="(sec, index) of content.content"
				:key="`${content.title}-sec-${index + 1}`"
			>
				<p v-if="sec === 'text'">
					{{ t(`${content.title}.text${index + 1}`) }}
				</p>
				<img
					v-else-if="sec === 'img'"
					class="img"
					:src="`${BASE_URL === '/' ? '/' : '/sinkhole/'}images/${content.title}-${index + 1}.png`"
				/>
				<div v-else-if="sec === 'caption'" class="caption">
					<p>{{ t(`${content.title}.captiontitle${index + 1}`) }}</p>
					<p>{{ t(`${content.title}.captiontext${index + 1}`) }}</p>
				</div>
				<div v-else-if="sec === 'dbimg'" class="dbimg">
					<img
						:src="`${BASE_URL === '/' ? '/' : '/sinkhole/'}images/${content.title}-${
							index + 1
						}-1.png`"
					/>
					<img
						:src="`${BASE_URL === '/' ? '/' : '/sinkhole/'}images/${content.title}-${
							index + 1
						}-2.png`"
					/>
				</div>
				<div v-else-if="sec === 'dbimgcaption'" class="dbimg">
					<div>
						<img
							:src="`${BASE_URL === '/' ? '/' : '/sinkhole/'}images/${content.title}-${
								index + 1
							}-1.png`"
						/>
						<div class="caption">
							<p>
								{{
									t(
										`${content.title}.captiontitle${
											index + 1
										}-1`
									)
								}}
							</p>
							<p>
								{{
									t(
										`${content.title}.captiontext${
											index + 1
										}-1`
									)
								}}
							</p>
						</div>
					</div>
					<div>
						<img
							:src="`${BASE_URL === '/' ? '/' : '/sinkhole/'}images/${content.title}-${
								index + 1
							}-2.png`"
						/>
						<div class="caption">
							<p>
								{{
									t(
										`${content.title}.captiontitle${
											index + 1
										}-2`
									)
								}}
							</p>
							<p>
								{{
									t(
										`${content.title}.captiontext${
											index + 1
										}-2`
									)
								}}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="articleelement-credit">
			<!-- <h2>
        <button @click="handleReturn">
          <span>arrow_back_ios</span>
        </button>{{ t("credits.open") }}
      </h2> -->
			<h3>{{ t("credits.description") }}</h3>
			<div class="articleelement-credit-positioner">
				<div>
					<h3>{{ t("credits.team") }}</h3>
					<p>{{ t("credits.team-1") }}</p>
					<p>{{ t("credits.team-2") }}</p>
					<p>{{ t("credits.team-3") }}</p>
					<p>{{ t("credits.team-4") }}</p>
					<p>{{ t("credits.team-5") }}</p>
					<p>{{ t("credits.team-6") }}</p>
					<p>{{ t("credits.team-7") }}</p>
				</div>
				<a
					href=""
					target="_blank"
					rel="noreferrer"
					><span>north_east</span>{{ t("credits.data") }}</a
				>
				<a
					href=""
					target="_blank"
					rel="noreferrer"
					><span>north_east</span>GitHub</a
				>
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
	height: 80%;
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
				button {
					position: absolute;
					top: 0.75rem;
					left: 0.5rem;
					display: flex;
				}
			}

			@media (max-width: 750px), (max-height: 750px) {
				padding: 0.5rem 1rem;
				width: calc(100% - 2rem);
				height: calc(100% - 1rem);

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
		transition: opacity 0.3s ease-in-out;

		&::-webkit-scrollbar {
			width: 6px;
		}
		&::-webkit-scrollbar-thumb {
			background-color: var(--color-border);
			border-radius: 6px;
		}
		&::-webkit-scrollbar-track {
			background-color: rgba(0, 0, 0, 0);
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
				width: min(600px, 100%);
				align-self: center;
			}

			.caption {
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
				width: min(700px, 85%);
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

	&-credit {
		width: min(400px, 100%);
		height: 100%;
		max-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		transition: opacity 0.3s ease-in-out;

		h2 {
			position: relative;
			display: flex;
			align-items: center;
			width: 100%;
			font-size: 2.5rem;
			padding-bottom: 8px;
			color: black;
			border-bottom: solid 2px black;
			overflow: hidden;

			button {
				height: 24px;
				display: none;
				position: absolute;
				left: 1.5rem;
				overflow: hidden;

				span {
					font-size: var(--font-xl);
					color: black;
				}
			}
		}

		> h3 {
			color: black;
			margin: var(--font-s) 0 var(--font-m);
			font-size: var(--font-l);
			overflow: hidden;
		}

		&-positioner {
			width: 100%;
			display: grid;
			grid-template-areas:
				"one one"
				"two three";
			grid-template-columns: 1fr 1fr;
			gap: var(--font-s);
			padding: 1rem;

			> div:first-child {
				grid-area: one;
				padding: 1rem;
				border-radius: 1rem;
				border: 2px solid var(--color-border);
				background-color: var(--color-background);
				overflow: hidden;

				h3 {
					font-size: var(--font-l);
					font-weight: 700;
					color: black;
					margin-bottom: 1rem;
				}

				p {
					font-size: var(--font-m);
					line-height: 1.5;
				}
			}

			a {
				position: relative;
				height: 4rem;
				display: flex;
				align-items: flex-end;
				padding: 1rem;
				border-radius: 1rem;
				border: 2px solid var(--color-border);
				font-size: var(--font-l);
				font-weight: 700;
				background-color: var(--color-background);
				transition: box-shadow 0.3s ease-in-out;

				span {
					position: absolute;
					right: 0.5rem;
					top: 0.5rem;
					font-size: var(--font-xl);
					color: var(--color-border);
				}

				&:hover {
					box-shadow: var(--color-border) 0px 0px 10px;
					cursor: pointer;
				}
			}
		}

		@media (max-width: 1025px) {
			h2 {
				padding-left: 3rem;
				button {
					display: block;
				}
			}
		}

		@media (max-width: 750px), (max-height: 750px) {
			h2 {
				font-size: 2rem;
			}

			> h3 {
				font-size: var(--font-m);
			}
			&-positioner > div:first-child {
				grid-area: one;
				padding: 1rem;
				border-radius: 1rem;
				border: 2px solid var(--color-border);
				background-color: var(--color-background);
				overflow: hidden;

				h3 {
					font-size: var(--font-m);
					font-weight: 700;
					color: black;
					margin-bottom: 1rem;
				}

				p {
					font-size: var(--font-s);
					line-height: 1.5;
				}
			}

			a {
				font-size: var(--font-m);
			}
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

	.articleelement-credit {
		opacity: 0.2;
	}
}

.onestepafter {
	top: -33%;
	background-color: #6a6a6a;

	.articleelement-content {
		opacity: 0;
	}
}

.morestepsafter {
	top: -116%;
	background-color: #6a6a6a;
}

.credit {
	box-shadow: none;
	background-color: var(--color-background);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
