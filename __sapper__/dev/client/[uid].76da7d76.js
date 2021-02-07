import { S as SvelteComponentDev, i as init, d as dispatch_dev, I as not_equal, J as validate_each_argument, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, O as set_data_dev, a as space, q as query_selector_all, c as claim_space, Q as add_render_callback, R as create_in_transition, n as noop, U as destroy_each, V as set_style } from './client.46625de6.js';
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

// (125:3) {:else}
function create_else_block(ctx) {
	let mark;
	let t_value = /*adhoc*/ ctx[0].type + "";
	let t;

	const block = {
		c: function create() {
			mark = element("mark");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			mark = claim_element(nodes, "MARK", { style: true, class: true });
			var mark_nodes = children(mark);
			t = claim_text(mark_nodes, t_value);
			mark_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(mark, "color", "var(--col-seco)");
			attr_dev(mark, "class", "svelte-1ltjez2");
			add_location(mark, file, 125, 4, 2529);
		},
		m: function mount(target, anchor) {
			insert_dev(target, mark, anchor);
			append_dev(mark, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*adhoc*/ ctx[0].type + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(mark);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(125:3) {:else}",
		ctx
	});

	return block;
}

// (123:3) {#if adhoc.type === "designer"}
function create_if_block(ctx) {
	let mark;
	let t_value = /*adhoc*/ ctx[0].type + "";
	let t;

	const block = {
		c: function create() {
			mark = element("mark");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			mark = claim_element(nodes, "MARK", { style: true, class: true });
			var mark_nodes = children(mark);
			t = claim_text(mark_nodes, t_value);
			mark_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(mark, "color", "var(--col-tert)");
			attr_dev(mark, "class", "svelte-1ltjez2");
			add_location(mark, file, 123, 4, 2457);
		},
		m: function mount(target, anchor) {
			insert_dev(target, mark, anchor);
			append_dev(mark, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*adhoc*/ ctx[0].type + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(mark);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(123:3) {#if adhoc.type === \\\"designer\\\"}",
		ctx
	});

	return block;
}

// (148:3) {#each adhoc.brief as item}
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
			attr_dev(li, "class", "svelte-1ltjez2");
			add_location(li, file, 148, 4, 3185);
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
		source: "(148:3) {#each adhoc.brief as item}",
		ctx
	});

	return block;
}

// (158:3) {#each adhoc.requirements as item}
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
			attr_dev(li, "class", "svelte-1ltjez2");
			add_location(li, file, 158, 4, 3340);
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
		source: "(158:3) {#each adhoc.requirements as item}",
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
	let t1;
	let h1;
	let t2_value = /*adhoc*/ ctx[0].title + "";
	let t2;
	let t3;
	let dl;
	let dt;
	let t4_value = /*adhoc*/ ctx[0].author + "";
	let t4;
	let dd;
	let t5_value = /*adhoc*/ ctx[0].city + "";
	let t5;
	let t6;
	let strong;
	let t7_value = /*adhoc*/ ctx[0].amount + "";
	let t7;
	let t8;
	let t9_value = /*adhoc*/ ctx[0].currency + "";
	let t9;
	let t10;
	let t11_value = /*adhoc*/ ctx[0].paytype + "";
	let t11;
	let t12;
	let section1;
	let header1;
	let h20;
	let t13;
	let t14;
	let ul0;
	let t15;
	let section2;
	let header2;
	let h21;
	let t16;
	let t17;
	let ul1;
	let t18;
	let button;
	let t19;
	let div_intro;
	document.title = title_value = /*adhoc*/ ctx[0].title;

	function select_block_type(ctx, dirty) {
		if (/*adhoc*/ ctx[0].type === "designer") return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);
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
			if_block.c();
			t1 = space();
			h1 = element("h1");
			t2 = text(t2_value);
			t3 = space();
			dl = element("dl");
			dt = element("dt");
			t4 = text(t4_value);
			dd = element("dd");
			t5 = text(t5_value);
			t6 = space();
			strong = element("strong");
			t7 = text(t7_value);
			t8 = space();
			t9 = text(t9_value);
			t10 = text(" / ");
			t11 = text(t11_value);
			t12 = space();
			section1 = element("section");
			header1 = element("header");
			h20 = element("h2");
			t13 = text("Brief");
			t14 = space();
			ul0 = element("ul");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t15 = space();
			section2 = element("section");
			header2 = element("header");
			h21 = element("h2");
			t16 = text("Requirements");
			t17 = space();
			ul1 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t18 = space();
			button = element("button");
			t19 = text("Show contacts");
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
			if_block.l(header0_nodes);
			t1 = claim_space(header0_nodes);
			h1 = claim_element(header0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, t2_value);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(header0_nodes);
			dl = claim_element(header0_nodes, "DL", {});
			var dl_nodes = children(dl);
			dt = claim_element(dl_nodes, "DT", { class: true });
			var dt_nodes = children(dt);
			t4 = claim_text(dt_nodes, t4_value);
			dt_nodes.forEach(detach_dev);
			dd = claim_element(dl_nodes, "DD", { class: true });
			var dd_nodes = children(dd);
			t5 = claim_text(dd_nodes, t5_value);
			dd_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			header0_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			strong = claim_element(div_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t7 = claim_text(strong_nodes, t7_value);
			t8 = claim_space(strong_nodes);
			t9 = claim_text(strong_nodes, t9_value);
			t10 = claim_text(strong_nodes, " / ");
			t11 = claim_text(strong_nodes, t11_value);
			strong_nodes.forEach(detach_dev);
			t12 = claim_space(div_nodes);
			section1 = claim_element(div_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			header1 = claim_element(section1_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			h20 = claim_element(header1_nodes, "H2", {});
			var h20_nodes = children(h20);
			t13 = claim_text(h20_nodes, "Brief");
			h20_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t14 = claim_space(section1_nodes);
			ul0 = claim_element(section1_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(ul0_nodes);
			}

			ul0_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t15 = claim_space(div_nodes);
			section2 = claim_element(div_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			header2 = claim_element(section2_nodes, "HEADER", { class: true });
			var header2_nodes = children(header2);
			h21 = claim_element(header2_nodes, "H2", {});
			var h21_nodes = children(h21);
			t16 = claim_text(h21_nodes, "Requirements");
			h21_nodes.forEach(detach_dev);
			header2_nodes.forEach(detach_dev);
			t17 = claim_space(section2_nodes);
			ul1 = claim_element(section2_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			t18 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t19 = claim_text(button_nodes, "Show contacts");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 127, 3, 2598);
			attr_dev(dt, "class", "svelte-1ltjez2");
			add_location(dt, file, 129, 4, 2633);
			attr_dev(dd, "class", "svelte-1ltjez2");
			add_location(dd, file, 130, 4, 2661);
			add_location(dl, file, 128, 3, 2624);
			attr_dev(header0, "class", "svelte-1ltjez2");
			add_location(header0, file, 121, 2, 2409);
			attr_dev(section0, "class", "svelte-1ltjez2");
			add_location(section0, file, 120, 1, 2397);
			attr_dev(strong, "class", "svelte-1ltjez2");
			add_location(strong, file, 141, 2, 3024);
			add_location(h20, file, 144, 3, 3116);
			attr_dev(header1, "class", "svelte-1ltjez2");
			add_location(header1, file, 143, 2, 3104);
			attr_dev(ul0, "class", "svelte-1ltjez2");
			add_location(ul0, file, 146, 2, 3145);
			attr_dev(section1, "class", "svelte-1ltjez2");
			add_location(section1, file, 142, 1, 3092);
			add_location(h21, file, 154, 3, 3257);
			attr_dev(header2, "class", "svelte-1ltjez2");
			add_location(header2, file, 153, 2, 3245);
			attr_dev(ul1, "class", "svelte-1ltjez2");
			add_location(ul1, file, 156, 2, 3293);
			attr_dev(section2, "class", "svelte-1ltjez2");
			add_location(section2, file, 152, 1, 3233);
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "svelte-1ltjez2");
			add_location(button, file, 162, 1, 3388);
			attr_dev(div, "class", "svelte-1ltjez2");
			add_location(div, file, 119, 0, 2344);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, section0);
			append_dev(section0, header0);
			if_block.m(header0, null);
			append_dev(header0, t1);
			append_dev(header0, h1);
			append_dev(h1, t2);
			append_dev(header0, t3);
			append_dev(header0, dl);
			append_dev(dl, dt);
			append_dev(dt, t4);
			append_dev(dl, dd);
			append_dev(dd, t5);
			append_dev(div, t6);
			append_dev(div, strong);
			append_dev(strong, t7);
			append_dev(strong, t8);
			append_dev(strong, t9);
			append_dev(strong, t10);
			append_dev(strong, t11);
			append_dev(div, t12);
			append_dev(div, section1);
			append_dev(section1, header1);
			append_dev(header1, h20);
			append_dev(h20, t13);
			append_dev(section1, t14);
			append_dev(section1, ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(ul0, null);
			}

			append_dev(div, t15);
			append_dev(div, section2);
			append_dev(section2, header2);
			append_dev(header2, h21);
			append_dev(h21, t16);
			append_dev(section2, t17);
			append_dev(section2, ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul1, null);
			}

			append_dev(div, t18);
			append_dev(div, button);
			append_dev(button, t19);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*adhoc*/ 1 && title_value !== (title_value = /*adhoc*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(header0, t1);
				}
			}

			if (dirty & /*adhoc*/ 1 && t2_value !== (t2_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t2, t2_value);
			if (dirty & /*adhoc*/ 1 && t4_value !== (t4_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t4, t4_value);
			if (dirty & /*adhoc*/ 1 && t5_value !== (t5_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t5, t5_value);
			if (dirty & /*adhoc*/ 1 && t7_value !== (t7_value = /*adhoc*/ ctx[0].amount + "")) set_data_dev(t7, t7_value);
			if (dirty & /*adhoc*/ 1 && t9_value !== (t9_value = /*adhoc*/ ctx[0].currency + "")) set_data_dev(t9, t9_value);
			if (dirty & /*adhoc*/ 1 && t11_value !== (t11_value = /*adhoc*/ ctx[0].paytype + "")) set_data_dev(t11, t11_value);

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
			if_block.d();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uNzZkYTdkNzYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdC9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBTZXJ2ZXIgLS0+XG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSwgc2Vzc2lvbikge1xuXHRcdC8vIFVSTCArIElEXG5cdFx0Y29uc3QgeyB1aWQgfSA9IHBhZ2UucGFyYW1zO1xuXHRcdGNvbnN0IHVybCA9IFwiaHR0cHM6Ly82MDE2ZTkwNGY1MzQzMDAwMTdhNDUwOWQubW9ja2FwaS5pby9ib2FyZC9cIiArIHVpZDtcblx0XHQvLyBGZXRjaFxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2godXJsKTtcblx0XHQvLyBWYWxpZGF0ZVxuXHRcdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGFkaG9jID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRcdHJldHVybiB7IGFkaG9jIH07XG5cdFx0fVxuXHRcdC8vIEVycm9yXG5cdFx0dGhpcy5lcnJvcig1MDAsIFwiUHJvYmxlbXMgd2l0aCBzZXJ2ZXIuIEJlIHJpZ2h0IGJhY2sgc29vbiA7KVwiKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZseSB9IGZyb20gXCJzdmVsdGUvdHJhbnNpdGlvblwiO1xuXG5cdC8vIEV4cG9ydGVkXG5cdGV4cG9ydCBsZXQgYWRob2M7XG5cblx0Ly8gQmFja1xuXHRjb25zdCBoaXN0b3J5YmFjayA9ICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0d2luZG93Lmhpc3RvcnkuYmFjaygpO1xuXHRcdH1cblx0fTtcbjwvc2NyaXB0PlxuXG48IS0tIFNwZWNpYWwgLS0+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57YWRob2MudGl0bGV9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48c3ZlbHRlOm9wdGlvbnMgaW1tdXRhYmxlIC8+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRkaXYsIHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDMpIDA7XG5cdH1cblx0dWwsIHN0cm9uZyB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiBub25lO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogdmFyKC0tcHQpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0bGkge1xuXHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0fVxuXHRzdmcge1xuICAgICAgICAvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdG1heC1oZWlnaHQ6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0aGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdG1pbi13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRtYXgtd2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuICAgICAgICAvKiBSZXN0ICovXG4gICAgICAgIHN0cm9rZTogdmFyKC0tY29sLWJsYWNrKTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyLjU7XG5cdFx0ZmlsbDogbm9uZTtcblx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLXB0KTtcblx0fVxuXHRidXR0b24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiBub25lO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gKHZhcigtLXB0KSAqIDYpKTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAyKSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLXB0KTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtc2Vjbyk7XG5cdFx0Y29sb3I6IHZhcigtLWNvbC1wcmltZSk7XG5cdFx0bWFyZ2luOiBjYWxjKCh2YXIoLS1wdCkgKiAzKSkgMDtcblx0fVxuXHQvKiBGb250cyAqL1xuXHRkdCwgbGksIHN0cm9uZyB7XG5cdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdH1cblx0ZGQsIG1hcmsge1xuXHRcdGZvbnQtc2l6ZTogLjg1cmVtO1xuXHR9XG5cdG1hcms6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCIjXCI7XG5cdH1cbjwvc3R5bGU+XG5cbjwhLS0gSFRNTCAtLT5cbjxkaXYgaW46Zmx5PXt7IGR1cmF0aW9uOiAzMjAsIHk6IDQwLCBvcGFjaXR5OiAxIH19PlxuXHQ8c2VjdGlvbj5cblx0XHQ8aGVhZGVyPlxuXHRcdFx0eyNpZiBhZGhvYy50eXBlID09PSBcImRlc2lnbmVyXCJ9XG5cdFx0XHRcdDxtYXJrIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbC10ZXJ0KVwiPnthZGhvYy50eXBlfTwvbWFyaz5cblx0XHRcdHs6ZWxzZX1cblx0XHRcdFx0PG1hcmsgc3R5bGU9XCJjb2xvcjogdmFyKC0tY29sLXNlY28pXCI+e2FkaG9jLnR5cGV9PC9tYXJrPlxuXHRcdFx0ey9pZn1cblx0XHRcdDxoMT57YWRob2MudGl0bGV9PC9oMT5cblx0XHRcdDxkbD5cblx0XHRcdFx0PGR0PnthZGhvYy5hdXRob3J9PC9kdD5cblx0XHRcdFx0PGRkPnthZGhvYy5jaXR5fTwvZGQ+XG5cdFx0XHQ8L2RsPlxuXHRcdDwvaGVhZGVyPlxuXHQ8L3NlY3Rpb24+XG5cdDwhLS0gJm5ic3A7XG5cdFx0PHN0cm9uZz57YWRob2MuYW1vdW50fSB7YWRob2MuY3VycmVuY3l9IC8ge2FkaG9jLnBheXR5cGV9PC9zdHJvbmc+XG5cdFx0eyNpZiBhZGhvYy5jdXJyZW5jeSA9PT0gXCJVU0RcIn1cblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXthZGhvYy5hbW91bnR9K3VzZCt0bytldXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG5cdFx0XHRcdDxzdmc+PHVzZSB4bGluazpocmVmPVwiL3Nwcml0ZS5zdmcjcGx1c1wiPjwvdXNlPjwvc3ZnPlxuXHRcdFx0PC9hPlxuXHRcdHsvaWZ9IC0tPlxuXHRcdDxzdHJvbmc+e2FkaG9jLmFtb3VudH0ge2FkaG9jLmN1cnJlbmN5fSAvIHthZGhvYy5wYXl0eXBlfTwvc3Ryb25nPlxuXHQ8c2VjdGlvbj5cblx0XHQ8aGVhZGVyPlxuXHRcdFx0PGgyPkJyaWVmPC9oMj5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8dWw+XG5cdFx0XHR7I2VhY2ggYWRob2MuYnJpZWYgYXMgaXRlbX1cblx0XHRcdFx0PGxpPntpdGVtfTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9zZWN0aW9uPlxuXHQ8c2VjdGlvbj5cblx0XHQ8aGVhZGVyPlxuXHRcdFx0PGgyPlJlcXVpcmVtZW50czwvaDI+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHVsPlxuXHRcdFx0eyNlYWNoIGFkaG9jLnJlcXVpcmVtZW50cyBhcyBpdGVtfVxuXHRcdFx0XHQ8bGk+e2l0ZW19PC9saT5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L3VsPlxuXHQ8L3NlY3Rpb24+XG5cdDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlNob3cgY29udGFjdHM8L2J1dHRvbj5cbjwvZGl2PlxuPCEtLSA8YWRkcmVzcz5cblx0e2FkaG9jLmVtYWlsfVxuPC9hZGRyZXNzPlxuPGFkZHJlc3M+XG5cdHsjaWYgYWRob2MucGhvbmUgIT0gbnVsbH1cblx0XHR7YWRob2MucGhvbmV9XG5cdHsvaWZ9XG48L2FkZHJlc3M+IC0tPlxuPCEtLSBDVEEncyAtLT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQTZIMEMsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUFWLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBRlYsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUFWLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBeUIzQyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFVSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQS9CTCxHQUFLLElBQUMsS0FBSzs7Ozs7MEJBRVYsR0FBSyxJQUFDLE1BQU07OzswQkFDWixHQUFLLElBQUMsSUFBSTs7OzswQkFXUixHQUFLLElBQUMsTUFBTTs7OzBCQUFHLEdBQUssSUFBQyxRQUFROzs7MkJBQUssR0FBSyxJQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQTNHakQsR0FBSyxJQUFDLEtBQUs7OztnQkF3RlosR0FBSyxJQUFDLElBQUksS0FBSyxVQUFVOzs7Ozs7OEJBeUJ2QixHQUFLLElBQUMsS0FBSzs7OztrQ0FBaEIsTUFBSTs7Ozs0QkFVQyxHQUFLLElBQUMsWUFBWTs7OztnQ0FBdkIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBM0hBLEdBQUssSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2lFQTZGWixHQUFLLElBQUMsS0FBSztpRUFFVixHQUFLLElBQUMsTUFBTTtpRUFDWixHQUFLLElBQUMsSUFBSTtpRUFXUixHQUFLLElBQUMsTUFBTTtpRUFBRyxHQUFLLElBQUMsUUFBUTttRUFBSyxHQUFLLElBQUMsT0FBTzs7OzZCQU1oRCxHQUFLLElBQUMsS0FBSzs7OztpQ0FBaEIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBSixNQUFJOzs7OzJCQVVDLEdBQUssSUFBQyxZQUFZOzs7OytCQUF2QixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7OztrREF0Q00sUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXJIeEIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPOztTQUVsQyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU07O09BQ3JCLEdBQUcsR0FBRyxvREFBb0QsR0FBRyxHQUFHOzs7T0FFaEUsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7O0tBRTVCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztRQUNmLEtBQUssU0FBUyxHQUFHLENBQUMsSUFBSTtXQUNuQixLQUFLOzs7O0NBR2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsNkNBQTZDOzs7O09BUW5ELEtBQUs7OztPQUdWLFdBQVc7YUFDTCxNQUFNLEtBQUssV0FBVztHQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
