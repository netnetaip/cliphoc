import { S as SvelteComponentDev, i as init, d as dispatch_dev, p as not_equal, u as validate_each_argument, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, o as set_data_dev, a as space, q as query_selector_all, c as claim_space, N as add_render_callback, O as create_in_transition, n as noop, B as destroy_each } from './client.6271b383.js';
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

// (65:3) {#each adhoc.brief as list}
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
			attr_dev(li, "class", "svelte-psj9rr");
			add_location(li, file, 65, 4, 1471);
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
		source: "(65:3) {#each adhoc.brief as list}",
		ctx
	});

	return block;
}

// (75:3) {#each adhoc.requirements as list}
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
			attr_dev(li, "class", "svelte-psj9rr");
			add_location(li, file, 75, 4, 1626);
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
		source: "(75:3) {#each adhoc.requirements as list}",
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
	let section2;
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

			t16 = space();
			section2 = element("section");
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
			section1_nodes.forEach(detach_dev);
			t16 = claim_space(div_nodes);
			section2 = claim_element(div_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			header2 = claim_element(section2_nodes, "HEADER", { class: true });
			var header2_nodes = children(header2);
			h21 = claim_element(header2_nodes, "H2", {});
			var h21_nodes = children(h21);
			t17 = claim_text(h21_nodes, "Requirements");
			h21_nodes.forEach(detach_dev);
			header2_nodes.forEach(detach_dev);
			t18 = claim_space(section2_nodes);
			ul1 = claim_element(section2_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			t19 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t20 = claim_text(button_nodes, "Show contacts");
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
			attr_dev(header0, "class", "svelte-psj9rr");
			add_location(header0, file, 42, 2, 843);
			attr_dev(strong, "class", "svelte-psj9rr");
			add_location(strong, file, 50, 2, 992);
			attr_dev(section0, "class", "svelte-psj9rr");
			add_location(section0, file, 41, 1, 831);
			add_location(h20, file, 61, 3, 1402);
			attr_dev(header1, "class", "svelte-psj9rr");
			add_location(header1, file, 60, 2, 1390);
			attr_dev(ul0, "class", "svelte-psj9rr");
			add_location(ul0, file, 63, 2, 1431);
			attr_dev(section1, "class", "svelte-psj9rr");
			add_location(section1, file, 59, 1, 1378);
			add_location(h21, file, 71, 3, 1543);
			attr_dev(header2, "class", "svelte-psj9rr");
			add_location(header2, file, 70, 2, 1531);
			attr_dev(ul1, "class", "svelte-psj9rr");
			add_location(ul1, file, 73, 2, 1579);
			attr_dev(section2, "class", "svelte-psj9rr");
			add_location(section2, file, 69, 1, 1519);
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "svelte-psj9rr");
			add_location(button, file, 79, 1, 1674);
			attr_dev(div, "class", "svelte-psj9rr");
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

			append_dev(div, t16);
			append_dev(div, section2);
			append_dev(section2, header2);
			append_dev(header2, h21);
			append_dev(h21, t17);
			append_dev(section2, t18);
			append_dev(section2, ul1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uMzAzZWE1MTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdC9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Ly8gVVJMICsgSURcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFnZS5wYXJhbXM7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkL1wiICsgdWlkO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgYWRob2MgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHsgYWRob2MgfTtcblx0XHR9XG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uIDspXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cblx0Ly8gRXhwb3J0ZWRcblx0ZXhwb3J0IGxldCBhZGhvYztcblxuXHQvLyBCYWNrXG5cdGNvbnN0IGhpc3RvcnliYWNrID0gKCkgPT4ge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG5cdFx0fVxuXHR9O1xuPC9zY3JpcHQ+XG5cbjwhLS0gU3BlY2lhbCAtLT5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPnthZGhvYy50aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPCEtLSBIVE1MIC0tPlxuPGRpdiBpbjpmbHk9e3sgZHVyYXRpb246IDMyMCwgeTogNDAsIG9wYWNpdHk6IDEgfX0+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8bWFyaz57YWRob2MudHlwZX08L21hcms+XG5cdFx0XHQ8aDE+e2FkaG9jLnRpdGxlfTwvaDE+XG5cdFx0XHQ8ZGw+XG5cdFx0XHRcdDxkdD57YWRob2MuYXV0aG9yfTwvZHQ+XG5cdFx0XHRcdDxkZD57YWRob2MuY2l0eX08L2RkPlxuXHRcdFx0PC9kbD5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c3Ryb25nPnthZGhvYy5hbW91bnR9IHthZGhvYy5jdXJyZW5jeX0gLyB7YWRob2MucGF5dHlwZX08L3N0cm9uZz5cblx0PC9zZWN0aW9uPlxuXHQ8IS0tICZuYnNwO1xuXHRcdDxzdHJvbmc+e2FkaG9jLmFtb3VudH0ge2FkaG9jLmN1cnJlbmN5fSAvIHthZGhvYy5wYXl0eXBlfTwvc3Ryb25nPlxuXHRcdHsjaWYgYWRob2MuY3VycmVuY3kgPT09IFwiVVNEXCJ9XG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT17YWRob2MuYW1vdW50fSt1c2QrdG8rZXVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuXHRcdFx0XHQ8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIi9zcHJpdGUuc3ZnI3BsdXNcIj48L3VzZT48L3N2Zz5cblx0XHRcdDwvYT5cblx0XHR7L2lmfSAtLT5cblx0PHNlY3Rpb24+XG5cdFx0PGhlYWRlcj5cblx0XHRcdDxoMj5CcmllZjwvaDI+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHVsPlxuXHRcdFx0eyNlYWNoIGFkaG9jLmJyaWVmIGFzIGxpc3R9XG5cdFx0XHRcdDxsaT57bGlzdH08L2xpPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvdWw+XG5cdDwvc2VjdGlvbj5cblx0PHNlY3Rpb24+XG5cdFx0PGhlYWRlcj5cblx0XHRcdDxoMj5SZXF1aXJlbWVudHM8L2gyPlxuXHRcdDwvaGVhZGVyPlxuXHRcdDx1bD5cblx0XHRcdHsjZWFjaCBhZGhvYy5yZXF1aXJlbWVudHMgYXMgbGlzdH1cblx0XHRcdFx0PGxpPntsaXN0fTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9zZWN0aW9uPlxuXHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5TaG93IGNvbnRhY3RzPC9idXR0b24+XG48L2Rpdj5cbjwhLS0gPGFkZHJlc3M+XG5cdHthZGhvYy5lbWFpbH1cbjwvYWRkcmVzcz5cbjxhZGRyZXNzPlxuXHR7I2lmIGFkaG9jLnBob25lICE9IG51bGx9XG5cdFx0e2FkaG9jLnBob25lfVxuXHR7L2lmfVxuPC9hZGRyZXNzPiAtLT5cbjwhLS0gQ1RBJ3MgLS0+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRkaXYsIHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0ZGl2IHtcblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdHNlY3Rpb24ge1xuXHRcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0aGVhZGVyIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0dWwsIHN0cm9uZyB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiBub25lO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogdmFyKC0tcHQpIDA7XG5cdH1cblx0bGkge1xuXHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0fVxuXHRidXR0b24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAyKSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLXB0KTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtc2Vjbyk7XG5cdFx0Y29sb3I6IHZhcigtLWNvbC1wcmltZSk7XG5cdFx0LyogVHJhbnNpdGlvbiAqL1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjQ0LCAwLjIxLCAwLCAxKTtcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHR9XG5cdGJ1dHRvbjphY3RpdmUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUzZCgwLjk2LCAwLjk2LCAxKTtcblx0fVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBaUVTLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQVVKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFoQ0gsR0FBSyxJQUFDLElBQUk7Ozs7MEJBQ1osR0FBSyxJQUFDLEtBQUs7Ozs7OzBCQUVWLEdBQUssSUFBQyxNQUFNOzs7MEJBQ1osR0FBSyxJQUFDLElBQUk7Ozs7MEJBR1IsR0FBSyxJQUFDLE1BQU07OzsyQkFBRyxHQUFLLElBQUMsUUFBUTs7OzJCQUFLLEdBQUssSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FkakQsR0FBSyxJQUFDLEtBQUs7OEJBNEJWLEdBQUssSUFBQyxLQUFLOzs7O2tDQUFoQixNQUFJOzs7OzRCQVVDLEdBQUssSUFBQyxZQUFZOzs7O2dDQUF2QixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBdENBLEdBQUssSUFBQyxLQUFLOzs7O2lFQU9WLEdBQUssSUFBQyxJQUFJO2lFQUNaLEdBQUssSUFBQyxLQUFLO2lFQUVWLEdBQUssSUFBQyxNQUFNO2lFQUNaLEdBQUssSUFBQyxJQUFJO2lFQUdSLEdBQUssSUFBQyxNQUFNO21FQUFHLEdBQUssSUFBQyxRQUFRO21FQUFLLEdBQUssSUFBQyxPQUFPOzs7NkJBY2hELEdBQUssSUFBQyxLQUFLOzs7O2lDQUFoQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dDQUFKLE1BQUk7Ozs7MkJBVUMsR0FBSyxJQUFDLFlBQVk7Ozs7K0JBQXZCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7O2tEQWxDTSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFwQ3hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTzs7U0FFbEMsR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNOztPQUNyQixHQUFHLEdBQUcsb0RBQW9ELEdBQUcsR0FBRzs7O09BRWhFLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7OztLQUU1QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7UUFDZixLQUFLLFNBQVMsR0FBRyxDQUFDLElBQUk7V0FDbkIsS0FBSzs7OztDQUdmLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDZDQUE2Qzs7OztPQVFuRCxLQUFLOzs7T0FHVixXQUFXO2FBQ0wsTUFBTSxLQUFLLFdBQVc7R0FDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
