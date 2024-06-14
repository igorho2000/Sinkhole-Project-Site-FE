// Cleaned

import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "../store/appStore";

import HomePage from "../views/HomePage.vue";
import MainPage from "../views/MainPage.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomePage,
	},
	{
		path: "/article",
		name: "article",
		component: MainPage,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFoundRedirect",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHistory(
		import.meta.env.BASE_URL === "/" ? "/" : "/sinkhole/"
	),
	base: import.meta.env.BASE_URL === "/" ? "/" : "/sinkhole/",
	routes,
});

router.beforeEach((to, from, next) => {
	const appStore = useAppStore();

	if (from.name) {
		appStore.showAnimation = true;
		setTimeout(() => {
			next();
		}, 1500);
		setTimeout(() => {
			appStore.showAnimation = false;
		}, 1920);
	} else {
		next();
	}
});

export default router;
