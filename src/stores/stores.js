// import { writable } from 'svelte/store';
// const store = writable([]);
// const counterStore = {
//     subscribe: store.subscribe,
//     items: items => { store.set(items) }
// }
// export default counterStore;


import { writable } from 'svelte/store';
export const AdhocStore = writable([]);