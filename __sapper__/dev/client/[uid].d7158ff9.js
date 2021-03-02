import { S as SvelteComponentDev, i as init, d as dispatch_dev, p as not_equal, u as validate_each_argument, v as validate_slots, t as text, h as claim_text, l as insert_dev, b as detach_dev, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, m as append_dev, o as set_data_dev, a as space, q as query_selector_all, c as claim_space, N as add_render_callback, O as create_in_transition, n as noop, B as destroy_each } from './client.ee5588a5.js';
import { f as fly } from './index.ff7bd4a9.js';

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

// (54:3) {#if adhoc.hour}
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
		source: "(54:3) {#if adhoc.hour}",
		ctx
	});

	return block;
}

// (71:3) {#each adhoc.brief as list}
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
			attr_dev(li, "class", "svelte-1hmt41x");
			add_location(li, file, 71, 4, 1508);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*list*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(71:3) {#each adhoc.brief as list}",
		ctx
	});

	return block;
}

// (81:3) {#each adhoc.requirements as list}
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
			attr_dev(li, "class", "svelte-1hmt41x");
			add_location(li, file, 81, 4, 1663);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*list*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(81:3) {#each adhoc.requirements as list}",
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
	let t1_value = /*adhoc*/ ctx[0].title + "";
	let t1;
	let t2;
	let dl;
	let dt;
	let t3_value = /*adhoc*/ ctx[0].author + "";
	let t3;
	let dd;
	let t4_value = /*adhoc*/ ctx[0].city + "";
	let t4;
	let t5;
	let strong;
	let t6_value = /*adhoc*/ ctx[0].amount + "";
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
	document.title = title_value = /*adhoc*/ ctx[0].title;
	let if_block = /*adhoc*/ ctx[0].hour && create_if_block(ctx);
	let each_value_1 = /*adhoc*/ ctx[0].brief;
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*adhoc*/ ctx[0].requirements;
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
			t5 = text("\n\t\t \n\t\t");
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-w6u6cv\"]", document.head);
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
			t5 = claim_text(section0_nodes, "\n\t\t \n\t\t");
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
			add_location(h1, file, 44, 3, 893);
			add_location(dt, file, 46, 4, 928);
			add_location(dd, file, 47, 4, 956);
			add_location(dl, file, 45, 3, 919);
			attr_dev(header0, "class", "svelte-1hmt41x");
			add_location(header0, file, 42, 2, 843);
			attr_dev(strong, "class", "svelte-1hmt41x");
			add_location(strong, file, 51, 2, 1010);
			attr_dev(section0, "class", "svelte-1hmt41x");
			add_location(section0, file, 41, 1, 831);
			add_location(h20, file, 67, 3, 1439);
			attr_dev(header1, "class", "svelte-1hmt41x");
			add_location(header1, file, 66, 2, 1427);
			attr_dev(ul0, "class", "svelte-1hmt41x");
			add_location(ul0, file, 69, 2, 1468);
			attr_dev(section1, "class", "svelte-1hmt41x");
			add_location(section1, file, 65, 1, 1415);
			add_location(h21, file, 77, 3, 1580);
			attr_dev(header2, "class", "svelte-1hmt41x");
			add_location(header2, file, 76, 2, 1568);
			attr_dev(ul1, "class", "svelte-1hmt41x");
			add_location(ul1, file, 79, 2, 1616);
			attr_dev(section2, "class", "svelte-1hmt41x");
			add_location(section2, file, 75, 1, 1556);
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "svelte-1hmt41x");
			add_location(button, file, 85, 1, 1711);
			attr_dev(div, "class", "svelte-1hmt41x");
			add_location(div, file, 40, 0, 778);
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
			if (dirty & /*adhoc*/ 1 && title_value !== (title_value = /*adhoc*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*adhoc*/ 1 && t1_value !== (t1_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*adhoc*/ 1 && t3_value !== (t3_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t3, t3_value);
			if (dirty & /*adhoc*/ 1 && t4_value !== (t4_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t4, t4_value);
			if (dirty & /*adhoc*/ 1 && t6_value !== (t6_value = /*adhoc*/ ctx[0].amount + "")) set_data_dev(t6, t6_value);

			if (/*adhoc*/ ctx[0].hour) {
				if (if_block) ; else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(strong, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*adhoc*/ 1) {
				each_value_1 = /*adhoc*/ ctx[0].brief;
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

			if (dirty & /*adhoc*/ 1) {
				each_value = /*adhoc*/ ctx[0].requirements;
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

async function preload(page, session) {
	// URL + ID
	const { uid } = page.params;

	const url = "https://6016e904f534300017a4509d.mockapi.io/board/" + uid;

	// Fetch
	const res = await this.fetch(url);

	// Validate
	if (res.status === 200) {
		const adhoc = await res.json();
		return { adhoc };
	}

	// Error
	this.error(500, "Problems with server. Be right back soon ;)");
}

function instance($$self, $$props, $$invalidate) {
	let { adhoc } = $$props;

	// Back
	const historyback = () => {
		if (typeof window !== "undefined") {
			window.history.back();
		}
	};

	const writable_props = ["adhoc"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Buidu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Buidu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
	};

	$$self.$capture_state = () => ({ preload, fly, adhoc, historyback });

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [adhoc];
}

class U5Buidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, not_equal, { adhoc: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Buidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*adhoc*/ ctx[0] === undefined && !("adhoc" in props)) {
			console.warn("<U5Buidu5D> was created without expected prop 'adhoc'");
		}
	}

	get adhoc() {
		throw new Error("<U5Buidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set adhoc(value) {
		throw new Error("<U5Buidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Buidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uZDcxNThmZjkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdC9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Ly8gVVJMICsgSURcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFnZS5wYXJhbXM7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkL1wiICsgdWlkO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgYWRob2MgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHsgYWRob2MgfTtcblx0XHR9XG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uIDspXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cblx0Ly8gRXhwb3J0ZWRcblx0ZXhwb3J0IGxldCBhZGhvYztcblxuXHQvLyBCYWNrXG5cdGNvbnN0IGhpc3RvcnliYWNrID0gKCkgPT4ge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG5cdFx0fVxuXHR9O1xuPC9zY3JpcHQ+XG5cbjwhLS0gU3BlY2lhbCAtLT5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPnthZGhvYy50aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPCEtLSBIVE1MIC0tPlxuPGRpdiBpbjpmbHk9e3sgZHVyYXRpb246IDMyMCwgeTogNDAsIG9wYWNpdHk6IDEgfX0+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8IS0tIDxtYXJrPnthZGhvYy50eXBlfTwvbWFyaz4gLS0+XG5cdFx0XHQ8aDE+e2FkaG9jLnRpdGxlfTwvaDE+XG5cdFx0XHQ8ZGw+XG5cdFx0XHRcdDxkdD57YWRob2MuYXV0aG9yfTwvZHQ+XG5cdFx0XHRcdDxkZD57YWRob2MuY2l0eX08L2RkPlxuXHRcdFx0PC9kbD5cblx0XHQ8L2hlYWRlcj5cblx0XHQmbmJzcDtcblx0XHQ8c3Ryb25nPlxuXHRcdFx0e2FkaG9jLmFtb3VudH0mZXVybztcblx0XHRcdHsjaWYgYWRob2MuaG91cn1cblx0XHRcdFx0YW4gaG91clxuXHRcdFx0ey9pZn1cblx0XHQ8L3N0cm9uZz5cblx0PC9zZWN0aW9uPlxuXHQ8IS0tICZuYnNwO1xuXHRcdDxzdHJvbmc+e2FkaG9jLmFtb3VudH0ge2FkaG9jLmN1cnJlbmN5fSAvIHthZGhvYy5wYXl0eXBlfTwvc3Ryb25nPlxuXHRcdHsjaWYgYWRob2MuY3VycmVuY3kgPT09IFwiVVNEXCJ9XG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT17YWRob2MuYW1vdW50fSt1c2QrdG8rZXVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuXHRcdFx0XHQ8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIi9zcHJpdGUuc3ZnI3BsdXNcIj48L3VzZT48L3N2Zz5cblx0XHRcdDwvYT5cblx0XHR7L2lmfSAtLT5cblx0PHNlY3Rpb24+XG5cdFx0PGhlYWRlcj5cblx0XHRcdDxoMj5CcmllZjwvaDI+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHVsPlxuXHRcdFx0eyNlYWNoIGFkaG9jLmJyaWVmIGFzIGxpc3R9XG5cdFx0XHRcdDxsaT57bGlzdH08L2xpPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvdWw+XG5cdDwvc2VjdGlvbj5cblx0PHNlY3Rpb24+XG5cdFx0PGhlYWRlcj5cblx0XHRcdDxoMj5SZXF1aXJlbWVudHM8L2gyPlxuXHRcdDwvaGVhZGVyPlxuXHRcdDx1bD5cblx0XHRcdHsjZWFjaCBhZGhvYy5yZXF1aXJlbWVudHMgYXMgbGlzdH1cblx0XHRcdFx0PGxpPntsaXN0fTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9zZWN0aW9uPlxuXHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5TaG93IGNvbnRhY3RzPC9idXR0b24+XG48L2Rpdj5cbjwhLS0gPGFkZHJlc3M+XG5cdHthZGhvYy5lbWFpbH1cbjwvYWRkcmVzcz5cbjxhZGRyZXNzPlxuXHR7I2lmIGFkaG9jLnBob25lICE9IG51bGx9XG5cdFx0e2FkaG9jLnBob25lfVxuXHR7L2lmfVxuPC9hZGRyZXNzPiAtLT5cbjwhLS0gQ1RBJ3MgLS0+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRkaXYsIHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGFsaWduLWl0ZW1zOiBzdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBzdGFydDtcblx0XHRqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuXHRcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xuXHRcdGdyaWQtY29sdW1uLWdhcDogY2FsYyh2YXIoLS1wdCkgLyAyKTtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGRpdiB7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0fVxuXHRzZWN0aW9uIHtcblx0XHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IGluaGVyaXQ7XG5cdFx0bWF4LXdpZHRoOiBpbmhlcml0O1xuXHRcdHdpZHRoOiBpbmhlcml0O1xuXHR9XG5cdHN0cm9uZyB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0d2lkdGg6IGF1dG87XG5cdFx0LyogUmVzdCAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1naG9zdCk7XG5cdFx0Y29sb3I6IHZhcigtLWNvbC1zZWNvKTtcblx0XHRwYWRkaW5nOiB2YXIoLS1wdCkgY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1wdCk7XG5cdH1cblx0dWwge1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMikgMDtcblx0fVxuXHRsaSB7XG5cdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHR9XG5cdGJ1dHRvbiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDIpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcHQpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1zZWNvKTtcblx0XHRjb2xvcjogdmFyKC0tY29sLXByaW1lKTtcblx0XHQvKiBUcmFuc2l0aW9uICovXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuNDQsIDAuMjEsIDAsIDEpO1xuXHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cdH1cblx0YnV0dG9uOmFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZTNkKDAuOTYsIDAuOTYsIDEpO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkF1RVMsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBVUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXJDTCxHQUFLLElBQUMsS0FBSzs7Ozs7MEJBRVYsR0FBSyxJQUFDLE1BQU07OzswQkFDWixHQUFLLElBQUMsSUFBSTs7OzswQkFLZixHQUFLLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQWhCUCxHQUFLLElBQUMsS0FBSzswQkFpQlosR0FBSyxJQUFDLElBQUk7OEJBaUJSLEdBQUssSUFBQyxLQUFLOzs7O2tDQUFoQixNQUFJOzs7OzRCQVVDLEdBQUssSUFBQyxZQUFZOzs7O2dDQUF2QixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBNUNBLEdBQUssSUFBQyxLQUFLOzs7O2lFQVFaLEdBQUssSUFBQyxLQUFLO2lFQUVWLEdBQUssSUFBQyxNQUFNO2lFQUNaLEdBQUssSUFBQyxJQUFJO2lFQUtmLEdBQUssSUFBQyxNQUFNOztpQkFDUixHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7OzZCQWlCUixHQUFLLElBQUMsS0FBSzs7OztpQ0FBaEIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBSixNQUFJOzs7OzJCQVVDLEdBQUssSUFBQyxZQUFZOzs7OytCQUF2QixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7OztrREF4Q00sUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXBDeEIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPOztTQUVsQyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU07O09BQ3JCLEdBQUcsR0FBRyxvREFBb0QsR0FBRyxHQUFHOzs7T0FFaEUsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7O0tBRTVCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztRQUNmLEtBQUssU0FBUyxHQUFHLENBQUMsSUFBSTtXQUNuQixLQUFLOzs7O0NBR2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsNkNBQTZDOzs7O09BUW5ELEtBQUs7OztPQUdWLFdBQVc7YUFDTCxNQUFNLEtBQUssV0FBVztHQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
