import { S as SvelteComponentDev, i as init, d as dispatch_dev, r as not_equal, C as validate_each_argument, u as validate_store, w as component_subscribe, v as validate_slots, t as text, h as claim_text, l as insert_dev, b as detach_dev, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, m as append_dev, o as set_data_dev, a as space, q as query_selector_all, c as claim_space, A as add_render_callback, B as create_in_transition, n as noop, I as destroy_each } from './client.634530f3.js';
import { s as stored, f as fly } from './index.8ff67941.js';

/* src/routes/post/[uid].svelte generated by Svelte v3.24.1 */
const file = "src/routes/post/[uid].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (51:3) {#if $stored.hour}
function create_if_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("an hour");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "an hour");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(51:3) {#if $stored.hour}",
		ctx
	});

	return block;
}

// (68:3) {#each $stored.brief as list}
function create_each_block_1(ctx) {
	let li;
	let t_value = /*list*/ ctx[2] + "";
	let t;

	const block = {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li, "class", "svelte-pcxtsr");
			add_location(li, file, 68, 4, 1517);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$stored*/ 1 && t_value !== (t_value = /*list*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(68:3) {#each $stored.brief as list}",
		ctx
	});

	return block;
}

// (78:3) {#each $stored.requirements as list}
function create_each_block(ctx) {
	let li;
	let t_value = /*list*/ ctx[2] + "";
	let t;

	const block = {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li, "class", "svelte-pcxtsr");
			add_location(li, file, 78, 4, 1674);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$stored*/ 1 && t_value !== (t_value = /*list*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(78:3) {#each $stored.requirements as list}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div;
	let section0;
	let header0;
	let h1;
	let t1_value = /*$stored*/ ctx[0].title + "";
	let t1;
	let t2;
	let dl;
	let dt;
	let t3_value = /*$stored*/ ctx[0].author + "";
	let t3;
	let dd;
	let t4_value = /*$stored*/ ctx[0].city + "";
	let t4;
	let t5;
	let strong;
	let t6_value = /*$stored*/ ctx[0].amount + "";
	let t6;
	let t7;
	let t8;
	let section1;
	let header1;
	let h20;
	let t9;
	let t10;
	let ul0;
	let t11;
	let section2;
	let header2;
	let h21;
	let t12;
	let t13;
	let ul1;
	let t14;
	let button;
	let t15;
	let div_intro;
	document.title = title_value = /*$stored*/ ctx[0].title;
	let if_block = /*$stored*/ ctx[0].hour && create_if_block(ctx);
	let each_value_1 = /*$stored*/ ctx[0].brief;
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*$stored*/ ctx[0].requirements;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			section0 = element("section");
			header0 = element("header");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			dl = element("dl");
			dt = element("dt");
			t3 = text(t3_value);
			dd = element("dd");
			t4 = text(t4_value);
			t5 = space();
			strong = element("strong");
			t6 = text(t6_value);
			t7 = text("€\n\t\t\t");
			if (if_block) if_block.c();
			t8 = space();
			section1 = element("section");
			header1 = element("header");
			h20 = element("h2");
			t9 = text("Brief");
			t10 = space();
			ul0 = element("ul");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t11 = space();
			section2 = element("section");
			header2 = element("header");
			h21 = element("h2");
			t12 = text("Requirements");
			t13 = space();
			ul1 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t14 = space();
			button = element("button");
			t15 = text("Show contacts");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-157bnol\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			section0 = claim_element(div_nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			header0 = claim_element(section0_nodes, "HEADER", { class: true });
			var header0_nodes = children(header0);
			h1 = claim_element(header0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(header0_nodes);
			dl = claim_element(header0_nodes, "DL", {});
			var dl_nodes = children(dl);
			dt = claim_element(dl_nodes, "DT", {});
			var dt_nodes = children(dt);
			t3 = claim_text(dt_nodes, t3_value);
			dt_nodes.forEach(detach_dev);
			dd = claim_element(dl_nodes, "DD", {});
			var dd_nodes = children(dd);
			t4 = claim_text(dd_nodes, t4_value);
			dd_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			header0_nodes.forEach(detach_dev);
			t5 = claim_space(section0_nodes);
			strong = claim_element(section0_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t6 = claim_text(strong_nodes, t6_value);
			t7 = claim_text(strong_nodes, "€\n\t\t\t");
			if (if_block) if_block.l(strong_nodes);
			strong_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t8 = claim_space(div_nodes);
			section1 = claim_element(div_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			header1 = claim_element(section1_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			h20 = claim_element(header1_nodes, "H2", {});
			var h20_nodes = children(h20);
			t9 = claim_text(h20_nodes, "Brief");
			h20_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t10 = claim_space(section1_nodes);
			ul0 = claim_element(section1_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(ul0_nodes);
			}

			ul0_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t11 = claim_space(div_nodes);
			section2 = claim_element(div_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			header2 = claim_element(section2_nodes, "HEADER", { class: true });
			var header2_nodes = children(header2);
			h21 = claim_element(header2_nodes, "H2", {});
			var h21_nodes = children(h21);
			t12 = claim_text(h21_nodes, "Requirements");
			h21_nodes.forEach(detach_dev);
			header2_nodes.forEach(detach_dev);
			t13 = claim_space(section2_nodes);
			ul1 = claim_element(section2_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			t14 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t15 = claim_text(button_nodes, "Show contacts");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 42, 3, 889);
			add_location(dt, file, 44, 4, 926);
			add_location(dd, file, 45, 4, 956);
			add_location(dl, file, 43, 3, 917);
			attr_dev(header0, "class", "svelte-pcxtsr");
			add_location(header0, file, 40, 2, 837);
			attr_dev(strong, "class", "svelte-pcxtsr");
			add_location(strong, file, 48, 2, 1003);
			attr_dev(section0, "class", "svelte-pcxtsr");
			add_location(section0, file, 39, 1, 825);
			add_location(h20, file, 64, 3, 1446);
			attr_dev(header1, "class", "svelte-pcxtsr");
			add_location(header1, file, 63, 2, 1434);
			attr_dev(ul0, "class", "svelte-pcxtsr");
			add_location(ul0, file, 66, 2, 1475);
			attr_dev(section1, "class", "svelte-pcxtsr");
			add_location(section1, file, 62, 1, 1422);
			add_location(h21, file, 74, 3, 1589);
			attr_dev(header2, "class", "svelte-pcxtsr");
			add_location(header2, file, 73, 2, 1577);
			attr_dev(ul1, "class", "svelte-pcxtsr");
			add_location(ul1, file, 76, 2, 1625);
			attr_dev(section2, "class", "svelte-pcxtsr");
			add_location(section2, file, 72, 1, 1565);
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "svelte-pcxtsr");
			add_location(button, file, 82, 1, 1722);
			attr_dev(div, "class", "svelte-pcxtsr");
			add_location(div, file, 38, 0, 772);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, section0);
			append_dev(section0, header0);
			append_dev(header0, h1);
			append_dev(h1, t1);
			append_dev(header0, t2);
			append_dev(header0, dl);
			append_dev(dl, dt);
			append_dev(dt, t3);
			append_dev(dl, dd);
			append_dev(dd, t4);
			append_dev(section0, t5);
			append_dev(section0, strong);
			append_dev(strong, t6);
			append_dev(strong, t7);
			if (if_block) if_block.m(strong, null);
			append_dev(div, t8);
			append_dev(div, section1);
			append_dev(section1, header1);
			append_dev(header1, h20);
			append_dev(h20, t9);
			append_dev(section1, t10);
			append_dev(section1, ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(ul0, null);
			}

			append_dev(div, t11);
			append_dev(div, section2);
			append_dev(section2, header2);
			append_dev(header2, h21);
			append_dev(h21, t12);
			append_dev(section2, t13);
			append_dev(section2, ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul1, null);
			}

			append_dev(div, t14);
			append_dev(div, button);
			append_dev(button, t15);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$stored*/ 1 && title_value !== (title_value = /*$stored*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*$stored*/ 1 && t1_value !== (t1_value = /*$stored*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*$stored*/ 1 && t3_value !== (t3_value = /*$stored*/ ctx[0].author + "")) set_data_dev(t3, t3_value);
			if (dirty & /*$stored*/ 1 && t4_value !== (t4_value = /*$stored*/ ctx[0].city + "")) set_data_dev(t4, t4_value);
			if (dirty & /*$stored*/ 1 && t6_value !== (t6_value = /*$stored*/ ctx[0].amount + "")) set_data_dev(t6, t6_value);

			if (/*$stored*/ ctx[0].hour) {
				if (if_block) ; else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(strong, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*$stored*/ 1) {
				each_value_1 = /*$stored*/ ctx[0].brief;
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(ul0, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*$stored*/ 1) {
				each_value = /*$stored*/ ctx[0].requirements;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (!div_intro) {
				add_render_callback(() => {
					div_intro = create_in_transition(div, fly, { duration: 320, y: 40, opacity: 1 });
					div_intro.start();
				});
			}
		},
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (if_block) if_block.d();
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page) {
	const { uid } = page.params;
	const url = "https://6016e904f534300017a4509d.mockapi.io/board/" + uid;

	// Fetch
	const res = await this.fetch(url);

	// Validate
	if (res.status === 200) {
		const query = await res.json();
		return stored.set(query);
	}

	// Error
	this.error(404, "Post is no longer valid.");
}

function instance($$self, $$props, $$invalidate) {
	let $stored;
	validate_store(stored, "stored");
	component_subscribe($$self, stored, $$value => $$invalidate(0, $stored = $$value));

	const historyback = () => {
		if (typeof window !== "undefined") {
			window.history.back();
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Buidu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Buidu5D", $$slots, []);

	$$self.$capture_state = () => ({
		stored,
		preload,
		fly,
		historyback,
		$stored
	});

	return [$stored];
}

class U5Buidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Buidu5D",
			options,
			id: create_fragment.name
		});
	}
}

export default U5Buidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uYzM2MGM0YmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdC9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRpbXBvcnQgeyBzdG9yZWQgfSBmcm9tIFwiLi4vLi4vc3RvcmVzL3N0b3Jlc1wiO1xuXHQvLyBGZXRjaFxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCggcGFnZSApIHtcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFnZS5wYXJhbXM7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkL1wiICsgdWlkO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHN0b3JlZC5zZXQocXVlcnkpO1xuXHRcdH1cblx0XHQvLyBFcnJvclxuXHRcdHRoaXMuZXJyb3IoNDA0LCBcIlBvc3QgaXMgbm8gbG9uZ2VyIHZhbGlkLlwiKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZseSB9IGZyb20gXCJzdmVsdGUvdHJhbnNpdGlvblwiO1xuXG5cdC8vIEJhY2tcblx0Y29uc3QgaGlzdG9yeWJhY2sgPSAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcblx0XHR9XG5cdH07XG48L3NjcmlwdD5cblxuPCEtLSBTcGVjaWFsIC0tPlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+eyRzdG9yZWQudGl0bGV9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjwhLS0gSFRNTCAtLT5cbjxkaXYgaW46Zmx5PXt7IGR1cmF0aW9uOiAzMjAsIHk6IDQwLCBvcGFjaXR5OiAxIH19PlxuXHQ8c2VjdGlvbj5cblx0XHQ8aGVhZGVyPlxuXHRcdFx0PCEtLSA8bWFyaz57JHN0b3JlZC50eXBlfTwvbWFyaz4gLS0+XG5cdFx0XHQ8aDE+eyRzdG9yZWQudGl0bGV9PC9oMT5cblx0XHRcdDxkbD5cblx0XHRcdFx0PGR0Pnskc3RvcmVkLmF1dGhvcn08L2R0PlxuXHRcdFx0XHQ8ZGQ+eyRzdG9yZWQuY2l0eX08L2RkPlxuXHRcdFx0PC9kbD5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c3Ryb25nPlxuXHRcdFx0eyRzdG9yZWQuYW1vdW50fSZldXJvO1xuXHRcdFx0eyNpZiAkc3RvcmVkLmhvdXJ9XG5cdFx0XHRcdGFuIGhvdXJcblx0XHRcdHsvaWZ9XG5cdFx0PC9zdHJvbmc+XG5cdDwvc2VjdGlvbj5cblx0PCEtLSAmbmJzcDtcblx0XHQ8c3Ryb25nPnskc3RvcmVkLmFtb3VudH0geyRzdG9yZWQuY3VycmVuY3l9IC8geyRzdG9yZWQucGF5dHlwZX08L3N0cm9uZz5cblx0XHR7I2lmICRzdG9yZWQuY3VycmVuY3kgPT09IFwiVVNEXCJ9XG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT17JHN0b3JlZC5hbW91bnR9K3VzZCt0bytldXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG5cdFx0XHRcdDxzdmc+PHVzZSB4bGluazpocmVmPVwiL3Nwcml0ZS5zdmcjcGx1c1wiPjwvdXNlPjwvc3ZnPlxuXHRcdFx0PC9hPlxuXHRcdHsvaWZ9IC0tPlxuXHQ8c2VjdGlvbj5cblx0XHQ8aGVhZGVyPlxuXHRcdFx0PGgyPkJyaWVmPC9oMj5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8dWw+XG5cdFx0XHR7I2VhY2ggJHN0b3JlZC5icmllZiBhcyBsaXN0fVxuXHRcdFx0XHQ8bGk+e2xpc3R9PC9saT5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L3VsPlxuXHQ8L3NlY3Rpb24+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8aDI+UmVxdWlyZW1lbnRzPC9oMj5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8dWw+XG5cdFx0XHR7I2VhY2ggJHN0b3JlZC5yZXF1aXJlbWVudHMgYXMgbGlzdH1cblx0XHRcdFx0PGxpPntsaXN0fTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9zZWN0aW9uPlxuXHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5TaG93IGNvbnRhY3RzPC9idXR0b24+XG48L2Rpdj5cbjwhLS0gPGFkZHJlc3M+XG5cdHskc3RvcmVkLmVtYWlsfVxuPC9hZGRyZXNzPlxuPGFkZHJlc3M+XG5cdHsjaWYgJHN0b3JlZC5waG9uZSAhPSBudWxsfVxuXHRcdHskc3RvcmVkLnBob25lfVxuXHR7L2lmfVxuPC9hZGRyZXNzPiAtLT5cbjwhLS0gQ1RBJ3MgLS0+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRkaXYsIHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGFsaWduLWl0ZW1zOiBzdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBzdGFydDtcblx0XHRqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuXHRcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xuXHRcdGdyaWQtY29sdW1uLWdhcDogY2FsYyh2YXIoLS1wdCkgLyAyKTtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGRpdiB7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0fVxuXHRzZWN0aW9uIHtcblx0XHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IGluaGVyaXQ7XG5cdFx0bWF4LXdpZHRoOiBpbmhlcml0O1xuXHRcdHdpZHRoOiBpbmhlcml0O1xuXHR9XG5cdHN0cm9uZyB7XG5cdFx0bWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHQvKiBSZXN0ICovXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLWdob3N0KTtcblx0XHRjb2xvcjogdmFyKC0tY29sLXNlY28pO1xuXHRcdHBhZGRpbmc6IHZhcigtLXB0KSBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLXB0KTtcblx0fVxuXHR1bCB7XG5cdFx0bWFyZ2luOiB2YXIoLS1wdCkgMDtcblx0fVxuXHRsaSB7XG5cdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHR9XG5cdGJ1dHRvbiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDIpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcHQpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1zZWNvKTtcblx0XHRjb2xvcjogdmFyKC0tY29sLXByaW1lKTtcblx0XHQvKiBUcmFuc2l0aW9uICovXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuNDQsIDAuMjEsIDAsIDEpO1xuXHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cdH1cblx0YnV0dG9uOmFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZTNkKDAuOTYsIDAuOTYsIDEpO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFvRVMsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUFBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBVUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUFBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQXBDTCxHQUFPLElBQUMsS0FBSzs7Ozs7NEJBRVosR0FBTyxJQUFDLE1BQU07Ozs0QkFDZCxHQUFPLElBQUMsSUFBSTs7Ozs0QkFJakIsR0FBTyxJQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FmVCxHQUFPLElBQUMsS0FBSzs0QkFnQmQsR0FBTyxJQUFDLElBQUk7Z0NBaUJWLEdBQU8sSUFBQyxLQUFLOzs7O2tDQUFsQixNQUFJOzs7OzhCQVVDLEdBQU8sSUFBQyxZQUFZOzs7O2dDQUF6QixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkVBM0NBLEdBQU8sSUFBQyxLQUFLOzs7O3FFQVFkLEdBQU8sSUFBQyxLQUFLO3FFQUVaLEdBQU8sSUFBQyxNQUFNO3FFQUNkLEdBQU8sSUFBQyxJQUFJO3FFQUlqQixHQUFPLElBQUMsTUFBTTs7bUJBQ1YsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7OzsrQkFpQlYsR0FBTyxJQUFDLEtBQUs7Ozs7aUNBQWxCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBQUosTUFBSTs7Ozs2QkFVQyxHQUFPLElBQUMsWUFBWTs7OzsrQkFBekIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7a0RBdkNNLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFoQ3hCLE9BQU8sQ0FBRSxJQUFJO1NBQzFCLEdBQUcsS0FBSyxJQUFJLENBQUMsTUFBTTtPQUNyQixHQUFHLEdBQUcsb0RBQW9ELEdBQUcsR0FBRzs7O09BRWhFLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7OztLQUU1QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7UUFDZixLQUFLLFNBQVMsR0FBRyxDQUFDLElBQUk7U0FDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLOzs7O0NBR3hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDBCQUEwQjs7Ozs7Ozs7T0FRckMsV0FBVzthQUNMLE1BQU0sS0FBSyxXQUFXO0dBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
