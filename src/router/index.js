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
			path: '/hackernewsboard/favorites',
			name: 'Favorites',
			component: Favorites
		},
		{
			path: '/hackernewsboard/',
			name: 'Top',
			component: Top
		},

		{
			path: '/hackernewsboard/show',
			name: 'Show',
			component: Show
		},
		{
			path: '/hackernewsboard/ask',
			name: 'Ask',
			component: Ask
		},
		{
			path: '/hackernewsboard/new',
			name: 'New',
			component: New
		},
		{
			path: '/hackernewsboard/jobs',
			name: 'Jobs',
			component: Jobs
		},
		{
			path: '/hackernewsboard/story/:id',
			name: 'Story',
			component: Story
		}
	],
	mode: 'history'
});
