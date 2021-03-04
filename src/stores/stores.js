import { writable } from 'svelte/store'

export function preload(url) {
    const adhoc = writable(new Promise(() => {}));

    // Fetch
    const load = async () => {
        const res = await this.fetch(url);
        const data = await res.json();
        adhoc.set(Promise.resolve(data));
    }

    load();
    return adhoc;
}