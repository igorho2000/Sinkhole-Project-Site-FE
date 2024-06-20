<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import router from "../router/index";
import TranslateButton from "../components/TranslateButton.vue";

const { BASE_URL } = import.meta.env;

const { t } = useI18n();

const page = ref(1);

function handleClick() {
	if (page.value < 4) {
		const next = page.value + 1;
		page.value = 0;
		setTimeout(() => {
			page.value = next;
		}, 1250);
	} else {
		router.push("/article");
		setTimeout(() => {
			page.value = 1;
		}, 2000);
	}
}
</script>

<template>
  <div class="homepage">
    <div class="homepage-sinkhole">
      <div class="homepage-sinkhole-pulser" />
      <div
        class="homepage-sinkhole-pulser"
        :style="{ animationDuration: '2500ms' }"
      />
    </div>
    <div class="homepage-translate">
      <!-- <TranslateButton /> -->
    </div>
    <Transition name="page">
      <div
        v-if="page === 1"
        class="homepage-main"
      >
        <div class="homepage-main-title">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 720 720"
            width="120"
            height="120"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="m304.5 294.1c5.2 5.5 4.6 12.3 4.6 19 0.1 30.6 0.1 61.1 0.3 91.7 0 12.8 2 25.7 18.4 24.8 15.5-0.9 17.4-13.1 17.4-26.2-0.3-64.1-0.2-128.2-0.2-192.3 0-7.4-1.2-15.2 3.6-21.7 4.9-6.5 11.6-9.5 19.6-6.7 11.4 3.9 12.3 13.6 12.3 23.7 0.1 61.9 0.2 123.7 0.2 185.6 0 39.5 0 79-0.1 118.5 0 12.4-0.6 25.6-17.5 25.6-16.3 0-18.1-12.3-18-25.2 0-8.9 0.4-17.9-0.3-26.8-0.9-9.9-5.9-17-16.9-17.1-11.8-0.1-18.1 6.4-18.3 17.9-0.3 27.6-0.2 55.2-0.4 82.8 0 7.4 0.2 14.9-0.3 22.3-0.6 10.2-5.5 17.3-16.3 17.7-11.8 0.5-18.2-6.5-18.6-17.8-0.5-21.6-0.2-43.2-0.2-64.8q-0.1-106.2-0.1-212.4c0-10 0.4-19.8 12.4-23.4 7-2.1 13.2-0.4 18.4 4.8zm153.2 105.5c-5.8 4.8-5.1 12.1-7.6 18.3-3.1 7.6-8.5 12.2-17.1 11.7-9.4-0.7-16-6.4-16.1-15.5-0.4-48.4-0.5-96.9 0.1-145.3 0.1-10.4 7.5-16.4 18-15.7 10.3 0.6 16.3 7.2 16.5 17.5 0.3 20.9 0 41.8 0 62.6 0 12.9 2.1 25.1 18.5 25 16.8-0.2 17.4-13.1 17.5-25.6 0-7.4 0.2-14.9 0.1-22.3-0.3-12.2 4.4-21 17.2-21.6 13.5-0.6 17.9 8.9 18 20.7 0.2 23.8 0.1 47.7 0.1 71.5 0.1 42.5 0.2 85 0.3 127.5 0.1 13.4-1.1 27.6-18.1 27.8-17.5 0.3-17.9-14.1-17.7-27.5 0.2-30.6 0.1-61.1 0.1-91.7 0-8.7-2.4-16.4-11-20.3-6.7-2.9-13.1-1.8-18.8 2.9zm-20.1 278.6c-7.2 5-17.1 4.4-23.3-8.6-2.4-5-2.1-11.6-2.1-17.5-0.1-52.8 0.1-105.6 0-158.4 0-12.8 1.3-25.5 17.7-25.4 16.3 0.1 17.7 12.7 17.7 25.5 0 53.5 0.1 107.1 0.1 160.7 0 7.4 0.3 15-10.1 23.7zm-133.9-633.2c4.6 4.5 5.4 10.3 5.4 16.4 0.1 55.9 0.2 111.8 0.2 167.7 0 12.3-3.4 22.9-18.4 22.5-13.5-0.4-17.2-9.8-17.1-21.5 0-55.9 0.1-111.7 0-167.6 0-9.7 2.4-17.9 11.8-22.1 6.9-3 13.1-1 18.1 4.6zm-76.9 176.9c4.6 4.6 5.3 10.4 5.3 16.5 0.1 55.9 0.2 111.8 0.2 167.6 0 12.4-3.4 22.9-18.4 22.5-13.5-0.3-17.1-9.7-17.1-21.4 0-55.9 0.1-111.8 0-167.6 0-9.7 2.5-17.9 11.9-22.1 6.8-3.1 13-1 18.1 4.5zm277.9 31.1c-10.3 0-18.6-8.2-18.6-18.5 0-10.2 8.3-18.5 18.6-18.5 10.2 0 18.5 8.3 18.5 18.5 0 10.3-8.3 18.5-18.5 18.5zm-290.2 241.3c-10.2 0-18.5-8.3-18.5-18.6 0-10.2 8.3-18.5 18.5-18.5 10.3 0 18.6 8.3 18.6 18.5 0 10.3-8.3 18.6-18.6 18.6z"
            />
          </svg>
          <div>
            <h1>{{ t("home.title") }}</h1>
            <h2>{{ t("home.subtitle") }}</h2>
          </div>
        </div>
        <div>
          <p>{{ t("home.team") }}</p>
          <p>{{ t("home.collab") }}</p>
        </div>
      </div>
    </Transition>
    <Transition name="page">
      <div
        v-if="page === 2"
        class="homepage-summary"
      >
        <p>{{ t("home.summary1") }}</p>
        <p>{{ t("home.summary2") }}</p>
      </div>
    </Transition>
    <Transition name="page">
      <div
        v-if="page === 3"
        class="homepage-image"
      >
	  	<img :src="`${BASE_URL}images/home2.png`">
        <h2>{{ t("home.causetitle") }}</h2>
        <h3>{{ t("home.causesubtitle") }}</h3>
      </div>
    </Transition>
    <Transition name="page">
      <div
        v-if="page === 4"
        class="homepage-image"
      >
	  	<img :src="`${BASE_URL}images/home1.png`">
        <h2>{{ t("home.quotetitle") }}</h2>
        <h3>{{ t("home.quotesubtitle") }}</h3>
        <p>{{ t("home.quoteperson") }}</p>
      </div>
    </Transition>
    <button
      :class="{ 'homepage-next': true, 'homepage-next-hide': page === 0 }"
      @click="handleClick"
    >
      <span>arrow_forward_ios</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.homepage {
	width: 100%;
	height: 100%;
	height: calc(var(--vh) * 100);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1,
	h2,
	h3,
	p {
		color: white;
	}

	&-sinkhole {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background: #888888;
		z-index: -1;

		&-pulser {
			width: min(60vw, 60vh);
			height: min(60vw, 60vh);
			border-radius: 50%;
			background: #111111;
			position: absolute;
			transform-origin: 42vmin 48vmin;
			animation: filtered 4500ms 0ms infinite alternate linear;
			will-change: filter, transform;
		}
	}

	&-translate {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	&-main {
		max-width: min(85vw, 800px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transform: scale(1);

		h1 {
			font-size: 2.5rem;
			margin-bottom: 0.5rem;
		}

		p {
			font-size: var(--font-ms);
		}

		svg {
			flex-shrink: 0;
		}

		&-title {
			display: flex;
			align-items: center;
			margin-bottom: 4rem;
		}

		@media (max-width: 1025px) {
			svg {
				margin-bottom: 1rem;
			}
			h1 {
				font-size: 2rem;
				margin-bottom: 1rem;
				text-align: center;
			}
			h2 {
				font-size: var(--font-ms);
				text-align: center;
			}
			p {
				font-size: var(--font-s);
			}
			&-title {
				flex-direction: column;
			}
		}
	}

	&-summary {
		max-width: min(80vw, 350px);
		background-color: var(--color-mirror);
		padding: 1rem;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		transform: scale(1);

		p {
			font-size: var(--font-m);
			text-align: justify;
		}
	}

	&-image {
		max-width: min(80vw, 380px);
		transform: scale(1);

		img {
			width: 100%;
		}

		h2 {
			font-size: 2rem;
			margin: 2rem 0 1rem;
		}

		h3 {
			font-size: var(--font-m);
			text-align: justify;
		}

		p {
			font-size: var(--font-s);
			text-align: right;
			margin-top: 2rem;
		}
	}

	&-next {
		position: absolute;
		bottom: 2rem;
		width: 3rem;
		height: 3rem;
		border: solid 2px white;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: opacity 0.3s ease-in-out;

		span {
			font-size: 2rem;
			color: white;
		}

		&-hide {
			opacity: 0;
			pointer-events: none;
			user-select: none;
		}
	}
}

.page-enter-active,
.page-leave-active {
	transition: transform 0.5s ease-in-out, opacity 0.4s ease-in-out;
}
.page-enter-from,
.page-leave-to {
	transform: scale(0);
	opacity: 0;
}

@keyframes filtered {
	0% {
		filter: blur(5vw);
		transform: scale(0.9);
	}
	100% {
		filter: blur(10vw);
		transform: scale(1.25);
	}
}
</style>
