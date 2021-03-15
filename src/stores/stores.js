import { writable } from 'svelte/store';

const resjson = () => {
	const { subscribe, set } = writable({});
	return {
		subscribe,
		set: query => set(query)
	};
}

export const stored = resjson();