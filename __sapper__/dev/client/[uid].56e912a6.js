import { S as SvelteComponentDev, i as init, d as dispatch_dev, z as not_equal, p as validate_each_argument, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, o as set_data_dev, a as space, q as query_selector_all, c as claim_space, K as set_style, H as add_render_callback, I as create_in_transition, n as noop, w as destroy_each } from './client.01f143d0.js';
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

// (65:3) {#each adhoc.brief as item}
function create_each_block_1(ctx) {
	let li;
	let t_value = /*item*/ ctx[2] + "";
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
			attr_dev(li, "class", "svelte-1xw1ewo");
			add_location(li, file, 65, 4, 1491);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*item*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(65:3) {#each adhoc.brief as item}",
		ctx
	});

	return block;
}

// (74:3) {#each adhoc.requirements as item}
function create_each_block(ctx) {
	let li;
	let t_value = /*item*/ ctx[2] + "";
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
			attr_dev(li, "class", "svelte-1xw1ewo");
			add_location(li, file, 74, 4, 1632);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*item*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(74:3) {#each adhoc.requirements as item}",
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
	let mark;
	let t1_value = /*adhoc*/ ctx[0].type + "";
	let t1;
	let t2;
	let h1;
	let t3_value = /*adhoc*/ ctx[0].title + "";
	let t3;
	let t4;
	let dl;
	let dt;
	let t5_value = /*adhoc*/ ctx[0].author + "";
	let t5;
	let dd;
	let t6_value = /*adhoc*/ ctx[0].city + "";
	let t6;
	let t7;
	let strong;
	let t8_value = /*adhoc*/ ctx[0].amount + "";
	let t8;
	let t9;
	let t10_value = /*adhoc*/ ctx[0].currency + "";
	let t10;
	let t11;
	let t12_value = /*adhoc*/ ctx[0].paytype + "";
	let t12;
	let t13;
	let section1;
	let header1;
	let h20;
	let t14;
	let t15;
	let ul0;
	let t16;
	let header2;
	let h21;
	let t17;
	let t18;
	let ul1;
	let t19;
	let button;
	let t20;
	let div_intro;
	document.title = title_value = /*adhoc*/ ctx[0].title;
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
			mark = element("mark");
			t1 = text(t1_value);
			t2 = space();
			h1 = element("h1");
			t3 = text(t3_value);
			t4 = space();
			dl = element("dl");
			dt = element("dt");
			t5 = text(t5_value);
			dd = element("dd");
			t6 = text(t6_value);
			t7 = space();
			strong = element("strong");
			t8 = text(t8_value);
			t9 = space();
			t10 = text(t10_value);
			t11 = text(" / ");
			t12 = text(t12_value);
			t13 = space();
			section1 = element("section");
			header1 = element("header");
			h20 = element("h2");
			t14 = text("Brief");
			t15 = space();
			ul0 = element("ul");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t16 = text("\n\t\t \n\t\t");
			header2 = element("header");
			h21 = element("h2");
			t17 = text("Requirements");
			t18 = space();
			ul1 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t19 = space();
			button = element("button");
			t20 = text("Show contacts");
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
			mark = claim_element(header0_nodes, "MARK", { style: true });
			var mark_nodes = children(mark);
			t1 = claim_text(mark_nodes, t1_value);
			mark_nodes.forEach(detach_dev);
			t2 = claim_space(header0_nodes);
			h1 = claim_element(header0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, t3_value);
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(header0_nodes);
			dl = claim_element(header0_nodes, "DL", {});
			var dl_nodes = children(dl);
			dt = claim_element(dl_nodes, "DT", {});
			var dt_nodes = children(dt);
			t5 = claim_text(dt_nodes, t5_value);
			dt_nodes.forEach(detach_dev);
			dd = claim_element(dl_nodes, "DD", {});
			var dd_nodes = children(dd);
			t6 = claim_text(dd_nodes, t6_value);
			dd_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			header0_nodes.forEach(detach_dev);
			t7 = claim_space(section0_nodes);
			strong = claim_element(section0_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t8 = claim_text(strong_nodes, t8_value);
			t9 = claim_space(strong_nodes);
			t10 = claim_text(strong_nodes, t10_value);
			t11 = claim_text(strong_nodes, " / ");
			t12 = claim_text(strong_nodes, t12_value);
			strong_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t13 = claim_space(div_nodes);
			section1 = claim_element(div_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			header1 = claim_element(section1_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			h20 = claim_element(header1_nodes, "H2", {});
			var h20_nodes = children(h20);
			t14 = claim_text(h20_nodes, "Brief");
			h20_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t15 = claim_space(section1_nodes);
			ul0 = claim_element(section1_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(ul0_nodes);
			}

			ul0_nodes.forEach(detach_dev);
			t16 = claim_text(section1_nodes, "\n\t\t \n\t\t");
			header2 = claim_element(section1_nodes, "HEADER", { class: true });
			var header2_nodes = children(header2);
			h21 = claim_element(header2_nodes, "H2", {});
			var h21_nodes = children(h21);
			t17 = claim_text(h21_nodes, "Requirements");
			h21_nodes.forEach(detach_dev);
			header2_nodes.forEach(detach_dev);
			t18 = claim_space(section1_nodes);
			ul1 = claim_element(section1_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t19 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t20 = claim_text(button_nodes, "Show contacts");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(mark, "color", "#BBB");
			add_location(mark, file, 43, 3, 855);
			add_location(h1, file, 44, 3, 904);
			add_location(dt, file, 46, 4, 939);
			add_location(dd, file, 47, 4, 967);
			add_location(dl, file, 45, 3, 930);
			attr_dev(header0, "class", "svelte-1xw1ewo");
			add_location(header0, file, 42, 2, 843);
			attr_dev(strong, "class", "svelte-1xw1ewo");
			add_location(strong, file, 50, 2, 1012);
			attr_dev(section0, "class", "svelte-1xw1ewo");
			add_location(section0, file, 41, 1, 831);
			add_location(h20, file, 61, 3, 1422);
			attr_dev(header1, "class", "svelte-1xw1ewo");
			add_location(header1, file, 60, 2, 1410);
			attr_dev(ul0, "class", "svelte-1xw1ewo");
			add_location(ul0, file, 63, 2, 1451);
			add_location(h21, file, 70, 3, 1549);
			attr_dev(header2, "class", "svelte-1xw1ewo");
			add_location(header2, file, 69, 2, 1537);
			attr_dev(ul1, "class", "svelte-1xw1ewo");
			add_location(ul1, file, 72, 2, 1585);
			attr_dev(section1, "class", "svelte-1xw1ewo");
			add_location(section1, file, 59, 1, 1398);
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "svelte-1xw1ewo");
			add_location(button, file, 78, 1, 1680);
			attr_dev(div, "class", "svelte-1xw1ewo");
			add_location(div, file, 40, 0, 778);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, section0);
			append_dev(section0, header0);
			append_dev(header0, mark);
			append_dev(mark, t1);
			append_dev(header0, t2);
			append_dev(header0, h1);
			append_dev(h1, t3);
			append_dev(header0, t4);
			append_dev(header0, dl);
			append_dev(dl, dt);
			append_dev(dt, t5);
			append_dev(dl, dd);
			append_dev(dd, t6);
			append_dev(section0, t7);
			append_dev(section0, strong);
			append_dev(strong, t8);
			append_dev(strong, t9);
			append_dev(strong, t10);
			append_dev(strong, t11);
			append_dev(strong, t12);
			append_dev(div, t13);
			append_dev(div, section1);
			append_dev(section1, header1);
			append_dev(header1, h20);
			append_dev(h20, t14);
			append_dev(section1, t15);
			append_dev(section1, ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(ul0, null);
			}

			append_dev(section1, t16);
			append_dev(section1, header2);
			append_dev(header2, h21);
			append_dev(h21, t17);
			append_dev(section1, t18);
			append_dev(section1, ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul1, null);
			}

			append_dev(div, t19);
			append_dev(div, button);
			append_dev(button, t20);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*adhoc*/ 1 && title_value !== (title_value = /*adhoc*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*adhoc*/ 1 && t1_value !== (t1_value = /*adhoc*/ ctx[0].type + "")) set_data_dev(t1, t1_value);
			if (dirty & /*adhoc*/ 1 && t3_value !== (t3_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t3, t3_value);
			if (dirty & /*adhoc*/ 1 && t5_value !== (t5_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t5, t5_value);
			if (dirty & /*adhoc*/ 1 && t6_value !== (t6_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t6, t6_value);
			if (dirty & /*adhoc*/ 1 && t8_value !== (t8_value = /*adhoc*/ ctx[0].amount + "")) set_data_dev(t8, t8_value);
			if (dirty & /*adhoc*/ 1 && t10_value !== (t10_value = /*adhoc*/ ctx[0].currency + "")) set_data_dev(t10, t10_value);
			if (dirty & /*adhoc*/ 1 && t12_value !== (t12_value = /*adhoc*/ ctx[0].paytype + "")) set_data_dev(t12, t12_value);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uNTZlOTEyYTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdC9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Ly8gVVJMICsgSURcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFnZS5wYXJhbXM7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkL1wiICsgdWlkO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgYWRob2MgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHsgYWRob2MgfTtcblx0XHR9XG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uIDspXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cblx0Ly8gRXhwb3J0ZWRcblx0ZXhwb3J0IGxldCBhZGhvYztcblxuXHQvLyBCYWNrXG5cdGNvbnN0IGhpc3RvcnliYWNrID0gKCkgPT4ge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG5cdFx0fVxuXHR9O1xuPC9zY3JpcHQ+XG5cbjwhLS0gU3BlY2lhbCAtLT5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPnthZGhvYy50aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPCEtLSBIVE1MIC0tPlxuPGRpdiBpbjpmbHk9e3sgZHVyYXRpb246IDMyMCwgeTogNDAsIG9wYWNpdHk6IDEgfX0+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8bWFyayBzdHlsZT1cImNvbG9yOiAjQkJCXCI+e2FkaG9jLnR5cGV9PC9tYXJrPlxuXHRcdFx0PGgxPnthZGhvYy50aXRsZX08L2gxPlxuXHRcdFx0PGRsPlxuXHRcdFx0XHQ8ZHQ+e2FkaG9jLmF1dGhvcn08L2R0PlxuXHRcdFx0XHQ8ZGQ+e2FkaG9jLmNpdHl9PC9kZD5cblx0XHRcdDwvZGw+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHN0cm9uZz57YWRob2MuYW1vdW50fSB7YWRob2MuY3VycmVuY3l9IC8ge2FkaG9jLnBheXR5cGV9PC9zdHJvbmc+XG5cdDwvc2VjdGlvbj5cblx0PCEtLSAmbmJzcDtcblx0XHQ8c3Ryb25nPnthZGhvYy5hbW91bnR9IHthZGhvYy5jdXJyZW5jeX0gLyB7YWRob2MucGF5dHlwZX08L3N0cm9uZz5cblx0XHR7I2lmIGFkaG9jLmN1cnJlbmN5ID09PSBcIlVTRFwifVxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9e2FkaG9jLmFtb3VudH0rdXNkK3RvK2V1clwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0PHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIvc3ByaXRlLnN2ZyNwbHVzXCI+PC91c2U+PC9zdmc+XG5cdFx0XHQ8L2E+XG5cdFx0ey9pZn0gLS0+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8aDI+QnJpZWY8L2gyPlxuXHRcdDwvaGVhZGVyPlxuXHRcdDx1bD5cblx0XHRcdHsjZWFjaCBhZGhvYy5icmllZiBhcyBpdGVtfVxuXHRcdFx0XHQ8bGk+e2l0ZW19PC9saT5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L3VsPlxuXHRcdCZuYnNwO1xuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8aDI+UmVxdWlyZW1lbnRzPC9oMj5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8dWw+XG5cdFx0XHR7I2VhY2ggYWRob2MucmVxdWlyZW1lbnRzIGFzIGl0ZW19XG5cdFx0XHRcdDxsaT57aXRlbX08L2xpPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvdWw+XG5cdDwvc2VjdGlvbj5cblx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+U2hvdyBjb250YWN0czwvYnV0dG9uPlxuPC9kaXY+XG48IS0tIDxhZGRyZXNzPlxuXHR7YWRob2MuZW1haWx9XG48L2FkZHJlc3M+XG48YWRkcmVzcz5cblx0eyNpZiBhZGhvYy5waG9uZSAhPSBudWxsfVxuXHRcdHthZGhvYy5waG9uZX1cblx0ey9pZn1cbjwvYWRkcmVzcz4gLS0+XG48IS0tIENUQSdzIC0tPlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cblx0ZGl2LCBzZWN0aW9uIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdHNlY3Rpb24ge1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMSkgY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0fVxuXHRoZWFkZXIge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHR1bCwgc3Ryb25nIHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiB2YXIoLS1wdCkgMDtcblx0fVxuXHRsaSB7XG5cdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHR9XG5cdGJ1dHRvbiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAodmFyKC0tcHQpICogNikpO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDIpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcHQpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1zZWNvKTtcblx0XHRjb2xvcjogdmFyKC0tY29sLXByaW1lKTtcblx0XHRtYXJnaW46IDAgY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHRcdC8qIFRyYW5zaXRpb24gKi9cblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC40NCwgMC4yMSwgMCwgMSk7XG5cdFx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblx0fVxuXHRidXR0b246YWN0aXZlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlM2QoMC45NiwgMC45NiwgMSk7XG5cdH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQWlFUyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFTSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBL0JpQixHQUFLLElBQUMsSUFBSTs7OzswQkFDaEMsR0FBSyxJQUFDLEtBQUs7Ozs7OzBCQUVWLEdBQUssSUFBQyxNQUFNOzs7MEJBQ1osR0FBSyxJQUFDLElBQUk7Ozs7MEJBR1IsR0FBSyxJQUFDLE1BQU07OzsyQkFBRyxHQUFLLElBQUMsUUFBUTs7OzJCQUFLLEdBQUssSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQWRqRCxHQUFLLElBQUMsS0FBSzs4QkE0QlYsR0FBSyxJQUFDLEtBQUs7Ozs7a0NBQWhCLE1BQUk7Ozs7NEJBU0MsR0FBSyxJQUFDLFlBQVk7Ozs7Z0NBQXZCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFyQ0EsR0FBSyxJQUFDLEtBQUs7Ozs7aUVBT1UsR0FBSyxJQUFDLElBQUk7aUVBQ2hDLEdBQUssSUFBQyxLQUFLO2lFQUVWLEdBQUssSUFBQyxNQUFNO2lFQUNaLEdBQUssSUFBQyxJQUFJO2lFQUdSLEdBQUssSUFBQyxNQUFNO21FQUFHLEdBQUssSUFBQyxRQUFRO21FQUFLLEdBQUssSUFBQyxPQUFPOzs7NkJBY2hELEdBQUssSUFBQyxLQUFLOzs7O2lDQUFoQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dDQUFKLE1BQUk7Ozs7MkJBU0MsR0FBSyxJQUFDLFlBQVk7Ozs7K0JBQXZCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7O2tEQWpDTSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFwQ3hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTzs7U0FFbEMsR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNOztPQUNyQixHQUFHLEdBQUcsb0RBQW9ELEdBQUcsR0FBRzs7O09BRWhFLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7OztLQUU1QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7UUFDZixLQUFLLFNBQVMsR0FBRyxDQUFDLElBQUk7V0FDbkIsS0FBSzs7OztDQUdmLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDZDQUE2Qzs7OztPQVFuRCxLQUFLOzs7T0FHVixXQUFXO2FBQ0wsTUFBTSxLQUFLLFdBQVc7R0FDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
