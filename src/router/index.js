import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Stories/Top.vue';
import New from '@/components/Stories/New.vue';
import Show from '@/components/Stories/Show.vue';
import Ask from '@/components/Stories/Ask.vue';
import Jobs from '@/components/Stories/Jobs.vue';
import Story from '@/components/Story/Story.vue';
import Favorites from '@/components/Favorites/Favorites.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/favorites',
			name: 'Favorites',
			component: Favorites
		},
		{
			path: '/',
			name: 'Top',
			component: Top
		},

		{
			path: '/show',
			name: 'Show',
			component: Show
		},
		{
			path: '/ask',
			name: 'Ask',
			component: Ask
		},
		{
			path: '/new',
			name: 'New',
			component: New
		},
		{
			path: '/jobs',
			name: 'Jobs',
			component: Jobs
		},
		{
			path: '/story/:id',
			name: 'Story',
			component: Story
		}
	],
	mode: 'history'
});
