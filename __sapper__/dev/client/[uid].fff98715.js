import { S as SvelteComponentDev, i as init, d as dispatch_dev, p as not_equal, u as validate_each_argument, v as validate_slots, t as text, h as claim_text, l as insert_dev, b as detach_dev, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, m as append_dev, o as set_data_dev, a as space, q as query_selector_all, c as claim_space, N as add_render_callback, O as create_in_transition, n as noop, B as destroy_each } from './client.64335f8f.js';
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

// (53:3) {#if adhoc.hour}
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
		source: "(53:3) {#if adhoc.hour}",
		ctx
	});

	return block;
}

// (70:3) {#each adhoc.brief as list}
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
			attr_dev(li, "class", "svelte-1ssdar7");
			add_location(li, file, 70, 4, 1490);
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
		source: "(70:3) {#each adhoc.brief as list}",
		ctx
	});

	return block;
}

// (80:3) {#each adhoc.requirements as list}
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
			attr_dev(li, "class", "svelte-1ssdar7");
			add_location(li, file, 80, 4, 1645);
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
		source: "(80:3) {#each adhoc.requirements as list}",
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
	let t10;
	let section1;
	let header1;
	let h20;
	let t11;
	let t12;
	let ul0;
	let t13;
	let section2;
	let header2;
	let h21;
	let t14;
	let t15;
	let ul1;
	let t16;
	let button;
	let t17;
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
			t9 = text("€\n\t\t\t");
			if (if_block) if_block.c();
			t10 = space();
			section1 = element("section");
			header1 = element("header");
			h20 = element("h2");
			t11 = text("Brief");
			t12 = space();
			ul0 = element("ul");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t13 = space();
			section2 = element("section");
			header2 = element("header");
			h21 = element("h2");
			t14 = text("Requirements");
			t15 = space();
			ul1 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t16 = space();
			button = element("button");
			t17 = text("Show contacts");
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
			mark = claim_element(header0_nodes, "MARK", {});
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
			t9 = claim_text(strong_nodes, "€\n\t\t\t");
			if (if_block) if_block.l(strong_nodes);
			strong_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t10 = claim_space(div_nodes);
			section1 = claim_element(div_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			header1 = claim_element(section1_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			h20 = claim_element(header1_nodes, "H2", {});
			var h20_nodes = children(h20);
			t11 = claim_text(h20_nodes, "Brief");
			h20_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t12 = claim_space(section1_nodes);
			ul0 = claim_element(section1_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(ul0_nodes);
			}

			ul0_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t13 = claim_space(div_nodes);
			section2 = claim_element(div_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			header2 = claim_element(section2_nodes, "HEADER", { class: true });
			var header2_nodes = children(header2);
			h21 = claim_element(header2_nodes, "H2", {});
			var h21_nodes = children(h21);
			t14 = claim_text(h21_nodes, "Requirements");
			h21_nodes.forEach(detach_dev);
			header2_nodes.forEach(detach_dev);
			t15 = claim_space(section2_nodes);
			ul1 = claim_element(section2_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			t16 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t17 = claim_text(button_nodes, "Show contacts");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(mark, file, 43, 3, 855);
			add_location(h1, file, 44, 3, 884);
			add_location(dt, file, 46, 4, 919);
			add_location(dd, file, 47, 4, 947);
			add_location(dl, file, 45, 3, 910);
			attr_dev(header0, "class", "svelte-1ssdar7");
			add_location(header0, file, 42, 2, 843);
			attr_dev(strong, "class", "svelte-1ssdar7");
			add_location(strong, file, 50, 2, 992);
			attr_dev(section0, "class", "svelte-1ssdar7");
			add_location(section0, file, 41, 1, 831);
			add_location(h20, file, 66, 3, 1421);
			attr_dev(header1, "class", "svelte-1ssdar7");
			add_location(header1, file, 65, 2, 1409);
			attr_dev(ul0, "class", "svelte-1ssdar7");
			add_location(ul0, file, 68, 2, 1450);
			attr_dev(section1, "class", "svelte-1ssdar7");
			add_location(section1, file, 64, 1, 1397);
			add_location(h21, file, 76, 3, 1562);
			attr_dev(header2, "class", "svelte-1ssdar7");
			add_location(header2, file, 75, 2, 1550);
			attr_dev(ul1, "class", "svelte-1ssdar7");
			add_location(ul1, file, 78, 2, 1598);
			attr_dev(section2, "class", "svelte-1ssdar7");
			add_location(section2, file, 74, 1, 1538);
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "svelte-1ssdar7");
			add_location(button, file, 84, 1, 1693);
			attr_dev(div, "class", "svelte-1ssdar7");
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
			if (if_block) if_block.m(strong, null);
			append_dev(div, t10);
			append_dev(div, section1);
			append_dev(section1, header1);
			append_dev(header1, h20);
			append_dev(h20, t11);
			append_dev(section1, t12);
			append_dev(section1, ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(ul0, null);
			}

			append_dev(div, t13);
			append_dev(div, section2);
			append_dev(section2, header2);
			append_dev(header2, h21);
			append_dev(h21, t14);
			append_dev(section2, t15);
			append_dev(section2, ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul1, null);
			}

			append_dev(div, t16);
			append_dev(div, button);
			append_dev(button, t17);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uZmZmOTg3MTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdC9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Ly8gVVJMICsgSURcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFnZS5wYXJhbXM7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkL1wiICsgdWlkO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgYWRob2MgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHsgYWRob2MgfTtcblx0XHR9XG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uIDspXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cblx0Ly8gRXhwb3J0ZWRcblx0ZXhwb3J0IGxldCBhZGhvYztcblxuXHQvLyBCYWNrXG5cdGNvbnN0IGhpc3RvcnliYWNrID0gKCkgPT4ge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG5cdFx0fVxuXHR9O1xuPC9zY3JpcHQ+XG5cbjwhLS0gU3BlY2lhbCAtLT5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPnthZGhvYy50aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPCEtLSBIVE1MIC0tPlxuPGRpdiBpbjpmbHk9e3sgZHVyYXRpb246IDMyMCwgeTogNDAsIG9wYWNpdHk6IDEgfX0+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8bWFyaz57YWRob2MudHlwZX08L21hcms+XG5cdFx0XHQ8aDE+e2FkaG9jLnRpdGxlfTwvaDE+XG5cdFx0XHQ8ZGw+XG5cdFx0XHRcdDxkdD57YWRob2MuYXV0aG9yfTwvZHQ+XG5cdFx0XHRcdDxkZD57YWRob2MuY2l0eX08L2RkPlxuXHRcdFx0PC9kbD5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c3Ryb25nPlxuXHRcdFx0e2FkaG9jLmFtb3VudH0mZXVybztcblx0XHRcdHsjaWYgYWRob2MuaG91cn1cblx0XHRcdFx0YW4gaG91clxuXHRcdFx0ey9pZn1cblx0XHQ8L3N0cm9uZz5cblx0PC9zZWN0aW9uPlxuXHQ8IS0tICZuYnNwO1xuXHRcdDxzdHJvbmc+e2FkaG9jLmFtb3VudH0ge2FkaG9jLmN1cnJlbmN5fSAvIHthZGhvYy5wYXl0eXBlfTwvc3Ryb25nPlxuXHRcdHsjaWYgYWRob2MuY3VycmVuY3kgPT09IFwiVVNEXCJ9XG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT17YWRob2MuYW1vdW50fSt1c2QrdG8rZXVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuXHRcdFx0XHQ8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIi9zcHJpdGUuc3ZnI3BsdXNcIj48L3VzZT48L3N2Zz5cblx0XHRcdDwvYT5cblx0XHR7L2lmfSAtLT5cblx0PHNlY3Rpb24+XG5cdFx0PGhlYWRlcj5cblx0XHRcdDxoMj5CcmllZjwvaDI+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHVsPlxuXHRcdFx0eyNlYWNoIGFkaG9jLmJyaWVmIGFzIGxpc3R9XG5cdFx0XHRcdDxsaT57bGlzdH08L2xpPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvdWw+XG5cdDwvc2VjdGlvbj5cblx0PHNlY3Rpb24+XG5cdFx0PGhlYWRlcj5cblx0XHRcdDxoMj5SZXF1aXJlbWVudHM8L2gyPlxuXHRcdDwvaGVhZGVyPlxuXHRcdDx1bD5cblx0XHRcdHsjZWFjaCBhZGhvYy5yZXF1aXJlbWVudHMgYXMgbGlzdH1cblx0XHRcdFx0PGxpPntsaXN0fTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9zZWN0aW9uPlxuXHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5TaG93IGNvbnRhY3RzPC9idXR0b24+XG48L2Rpdj5cbjwhLS0gPGFkZHJlc3M+XG5cdHthZGhvYy5lbWFpbH1cbjwvYWRkcmVzcz5cbjxhZGRyZXNzPlxuXHR7I2lmIGFkaG9jLnBob25lICE9IG51bGx9XG5cdFx0e2FkaG9jLnBob25lfVxuXHR7L2lmfVxuPC9hZGRyZXNzPiAtLT5cbjwhLS0gQ1RBJ3MgLS0+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRkaXYsIHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1lbmQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0ZGl2IHtcblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdHNlY3Rpb24ge1xuXHRcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0aGVhZGVyIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0dWwsIHN0cm9uZyB7XG5cdFx0cGFkZGluZzogdmFyKC0tcHQpIDA7XG5cdH1cblx0c3Ryb25nIHtcblx0XHRtYXJnaW4tdG9wOiB2YXIoLS1wdCk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLWdob3N0KTtcblx0XHRjb2xvcjogdmFyKC0tY29sLXNlY28pO1xuXHRcdHBhZGRpbmc6IHZhcigtLXB0KSBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLXB0KTtcblx0fVxuXHRsaSB7XG5cdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHR9XG5cdGJ1dHRvbiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDIpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcHQpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1zZWNvKTtcblx0XHRjb2xvcjogdmFyKC0tY29sLXByaW1lKTtcblx0XHQvKiBUcmFuc2l0aW9uICovXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuNDQsIDAuMjEsIDAsIDEpO1xuXHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cdH1cblx0YnV0dG9uOmFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZTNkKDAuOTYsIDAuOTYsIDEpO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFzRVMsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBVUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXJDSCxHQUFLLElBQUMsSUFBSTs7OzswQkFDWixHQUFLLElBQUMsS0FBSzs7Ozs7MEJBRVYsR0FBSyxJQUFDLE1BQU07OzswQkFDWixHQUFLLElBQUMsSUFBSTs7OzswQkFJZixHQUFLLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQWZQLEdBQUssSUFBQyxLQUFLOzBCQWdCWixHQUFLLElBQUMsSUFBSTs4QkFpQlIsR0FBSyxJQUFDLEtBQUs7Ozs7a0NBQWhCLE1BQUk7Ozs7NEJBVUMsR0FBSyxJQUFDLFlBQVk7Ozs7Z0NBQXZCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RUEzQ0EsR0FBSyxJQUFDLEtBQUs7Ozs7aUVBT1YsR0FBSyxJQUFDLElBQUk7aUVBQ1osR0FBSyxJQUFDLEtBQUs7aUVBRVYsR0FBSyxJQUFDLE1BQU07aUVBQ1osR0FBSyxJQUFDLElBQUk7aUVBSWYsR0FBSyxJQUFDLE1BQU07O2lCQUNSLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7NkJBaUJSLEdBQUssSUFBQyxLQUFLOzs7O2lDQUFoQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dDQUFKLE1BQUk7Ozs7MkJBVUMsR0FBSyxJQUFDLFlBQVk7Ozs7K0JBQXZCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7O2tEQXZDTSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBcEN4QixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87O1NBRWxDLEdBQUcsS0FBSyxJQUFJLENBQUMsTUFBTTs7T0FDckIsR0FBRyxHQUFHLG9EQUFvRCxHQUFHLEdBQUc7OztPQUVoRSxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7S0FFNUIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHO1FBQ2YsS0FBSyxTQUFTLEdBQUcsQ0FBQyxJQUFJO1dBQ25CLEtBQUs7Ozs7Q0FHZixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSw2Q0FBNkM7Ozs7T0FRbkQsS0FBSzs7O09BR1YsV0FBVzthQUNMLE1BQU0sS0FBSyxXQUFXO0dBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
