import { S as SvelteComponentDev, i as init, d as dispatch_dev, L as globals, I as not_equal, J as validate_each_argument, K as validate_each_keys, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, c as claim_space, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, O as set_data_dev, q as query_selector_all, P as update_keyed_each, n as noop, W as destroy_block, V as set_style } from './client.ae857d9e.js';

/* src/routes/[list]/[page].svelte generated by Svelte v3.24.1 */

const { console: console_1 } = globals;
const file = "src/routes/[list]/[page].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	return child_ctx;
}

// (156:5) {:else}
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
			attr_dev(mark, "class", "svelte-1u9c2pz");
			add_location(mark, file, 156, 6, 3085);
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
		source: "(156:5) {:else}",
		ctx
	});

	return block;
}

// (154:5) {#if adhoc.type === "designer"}
function create_if_block_1(ctx) {
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
			attr_dev(mark, "class", "svelte-1u9c2pz");
			add_location(mark, file, 154, 6, 3009);
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
		id: create_if_block_1.name,
		type: "if",
		source: "(154:5) {#if adhoc.type === \\\"designer\\\"}",
		ctx
	});

	return block;
}

// (151:2) {#each adhoc as adhoc (adhoc.id)}
function create_each_block(key_1, ctx) {
	let a;
	let article;
	let t0;
	let h2;
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
	let t8_value = /*adhoc*/ ctx[0].currency + "";
	let t8;
	let t9;
	let t10_value = /*adhoc*/ ctx[0].paytype + "";
	let t10;
	let a_href_value;
	let t11;
	let hr;

	function select_block_type(ctx, dirty) {
		if (/*adhoc*/ ctx[0].type === "designer") return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			a = element("a");
			article = element("article");
			if_block.c();
			t0 = space();
			h2 = element("h2");
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
			t7 = space();
			t8 = text(t8_value);
			t9 = text(" / ");
			t10 = text(t10_value);
			t11 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			article = claim_element(a_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			if_block.l(article_nodes);
			t0 = claim_space(article_nodes);
			h2 = claim_element(article_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(article_nodes);
			dl = claim_element(article_nodes, "DL", {});
			var dl_nodes = children(dl);
			dt = claim_element(dl_nodes, "DT", { class: true });
			var dt_nodes = children(dt);
			t3 = claim_text(dt_nodes, t3_value);
			dt_nodes.forEach(detach_dev);
			dd = claim_element(dl_nodes, "DD", { class: true });
			var dd_nodes = children(dd);
			t4 = claim_text(dd_nodes, t4_value);
			dd_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			t5 = claim_space(article_nodes);
			strong = claim_element(article_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t6 = claim_text(strong_nodes, t6_value);
			t7 = claim_space(strong_nodes);
			t8 = claim_text(strong_nodes, t8_value);
			t9 = claim_text(strong_nodes, " / ");
			t10 = claim_text(strong_nodes, t10_value);
			strong_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-1u9c2pz");
			add_location(h2, file, 158, 5, 3158);
			attr_dev(dt, "class", "svelte-1u9c2pz");
			add_location(dt, file, 160, 6, 3197);
			attr_dev(dd, "class", "svelte-1u9c2pz");
			add_location(dd, file, 161, 6, 3227);
			add_location(dl, file, 159, 5, 3186);
			attr_dev(strong, "class", "svelte-1u9c2pz");
			add_location(strong, file, 163, 5, 3265);
			attr_dev(article, "class", "svelte-1u9c2pz");
			add_location(article, file, 152, 4, 2956);
			attr_dev(a, "href", a_href_value = "post/" + /*adhoc*/ ctx[0].id);
			attr_dev(a, "class", "svelte-1u9c2pz");
			add_location(a, file, 151, 3, 2925);
			add_location(hr, file, 166, 3, 3358);
			this.first = a;
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, article);
			if_block.m(article, null);
			append_dev(article, t0);
			append_dev(article, h2);
			append_dev(h2, t1);
			append_dev(article, t2);
			append_dev(article, dl);
			append_dev(dl, dt);
			append_dev(dt, t3);
			append_dev(dl, dd);
			append_dev(dd, t4);
			append_dev(article, t5);
			append_dev(article, strong);
			append_dev(strong, t6);
			append_dev(strong, t7);
			append_dev(strong, t8);
			append_dev(strong, t9);
			append_dev(strong, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, hr, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(article, t0);
				}
			}

			if (dirty & /*adhoc*/ 1 && t1_value !== (t1_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*adhoc*/ 1 && t3_value !== (t3_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t3, t3_value);
			if (dirty & /*adhoc*/ 1 && t4_value !== (t4_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t4, t4_value);
			if (dirty & /*adhoc*/ 1 && t6_value !== (t6_value = /*adhoc*/ ctx[0].amount + "")) set_data_dev(t6, t6_value);
			if (dirty & /*adhoc*/ 1 && t8_value !== (t8_value = /*adhoc*/ ctx[0].currency + "")) set_data_dev(t8, t8_value);
			if (dirty & /*adhoc*/ 1 && t10_value !== (t10_value = /*adhoc*/ ctx[0].paytype + "")) set_data_dev(t10, t10_value);

			if (dirty & /*adhoc*/ 1 && a_href_value !== (a_href_value = "post/" + /*adhoc*/ ctx[0].id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if_block.d();
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(hr);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(151:2) {#each adhoc as adhoc (adhoc.id)}",
		ctx
	});

	return block;
}

// (169:2) {#if next}
function create_if_block(ctx) {
	let a;
	let t;

	const block = {
		c: function create() {
			a = element("a");
			t = text("More...");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, "More...");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "class", "more svelte-1u9c2pz");
			attr_dev(a, "href", /*next*/ ctx[1]);
			add_location(a, file, 169, 3, 3389);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*next*/ 2) {
				attr_dev(a, "href", /*next*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(169:2) {#if next}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section;
	let header;
	let h1;
	let t1;
	let t2;
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t3;
	let each_value = /*adhoc*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*adhoc*/ ctx[0].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	let if_block = /*next*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			header = element("header");
			h1 = element("h1");
			t1 = text("Board");
			t2 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ygz96u\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			header = claim_element(section_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			h1 = claim_element(header_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Board");
			h1_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			t3 = claim_space(div_nodes);
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Browse";
			add_location(h1, file, 147, 2, 2853);
			attr_dev(header, "class", "svelte-1u9c2pz");
			add_location(header, file, 146, 1, 2842);
			attr_dev(div, "class", "svelte-1u9c2pz");
			add_location(div, file, 149, 1, 2880);
			attr_dev(section, "class", "svelte-1u9c2pz");
			add_location(section, file, 145, 0, 2831);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, header);
			append_dev(header, h1);
			append_dev(h1, t1);
			append_dev(section, t2);
			append_dev(section, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(div, t3);
			if (if_block) if_block.m(div, null);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*adhoc*/ 1) {
				const each_value = /*adhoc*/ ctx[0];
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, destroy_block, create_each_block, t3, get_each_context);
			}

			if (/*next*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (if_block) if_block.d();
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

async function preload(page, limit) {
	// URL
	const url = `https://6016e904f534300017a4509d.mockapi.io/board?page=${page}&limit=${limit}`;

	console.log("URL", url);

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
	let { adhoc = [] } = $$props;
	let { checkgroup = [] } = $$props;
	let { page } = $$props;
	let { limit = 10 } = $$props;
	const writable_props = ["adhoc", "checkgroup", "page", "limit"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bpageu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bpageu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
		if ("checkgroup" in $$props) $$invalidate(2, checkgroup = $$props.checkgroup);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
		if ("limit" in $$props) $$invalidate(4, limit = $$props.limit);
	};

	$$self.$capture_state = () => ({
		preload,
		adhoc,
		checkgroup,
		page,
		limit,
		next
	});

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
		if ("checkgroup" in $$props) $$invalidate(2, checkgroup = $$props.checkgroup);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
		if ("limit" in $$props) $$invalidate(4, limit = $$props.limit);
		if ("next" in $$props) $$invalidate(1, next = $$props.next);
	};

	let next;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*adhoc*/ 1) {
			// DEVELOPER_CONSOLE_LOG
			 console.log("%c BROWSE adhoc ", "color:blue; font-weight:bold; font-size:14px", adhoc);
		}

		if ($$self.$$.dirty & /*checkgroup*/ 4) {
			 console.log("%c BROWSE Checkgroup ", "color:green; font-weight:bold; font-size:14px", checkgroup);
		}
	};

	 $$invalidate(1, next = `/2/10`);
	return [adhoc, next, checkgroup, page, limit];
}

class U5Bpageu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, not_equal, {
			adhoc: 0,
			checkgroup: 2,
			page: 3,
			limit: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpageu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*page*/ ctx[3] === undefined && !("page" in props)) {
			console_1.warn("<U5Bpageu5D> was created without expected prop 'page'");
		}
	}

	get adhoc() {
		throw new Error("<U5Bpageu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set adhoc(value) {
		throw new Error("<U5Bpageu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get checkgroup() {
		throw new Error("<U5Bpageu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set checkgroup(value) {
		throw new Error("<U5Bpageu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get page() {
		throw new Error("<U5Bpageu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set page(value) {
		throw new Error("<U5Bpageu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get limit() {
		throw new Error("<U5Bpageu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set limit(value) {
		throw new Error("<U5Bpageu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bpageu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2VdLjg1ZDRlZmE4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL1tsaXN0XS9bcGFnZV0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gU2VydmVyIC0tPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIGxpbWl0KSB7XG5cdFx0Ly8gVVJMXG5cdFx0Y29uc3QgdXJsID0gYGh0dHBzOi8vNjAxNmU5MDRmNTM0MzAwMDE3YTQ1MDlkLm1vY2thcGkuaW8vYm9hcmQ/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YDtcblx0XHRjb25zb2xlLmxvZygnVVJMJywgdXJsKTtcblx0XHQvLyBGZXRjaFxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2godXJsKTtcblx0XHQvLyBWYWxpZGF0ZVxuXHRcdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGFkaG9jID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRcdHJldHVybiB7IGFkaG9jIH07XG5cdFx0fVxuXHRcdC8vIEVycm9yXG5cdFx0dGhpcy5lcnJvcig1MDAsIFwiUHJvYmxlbXMgd2l0aCBzZXJ2ZXIuIEJlIHJpZ2h0IGJhY2sgc29vbiA7KVwiKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjwhLS0gQ2xpZW50IC0tPlxuPHNjcmlwdD5cblx0Ly8gRXhwb3J0ZWRcblx0ZXhwb3J0IGxldCBhZGhvYyA9IFtdO1xuXHRleHBvcnQgbGV0IGNoZWNrZ3JvdXAgPSBbXTtcblxuXHRleHBvcnQgbGV0IHBhZ2U7XG5cdGV4cG9ydCBsZXQgbGltaXQgPSAxMDtcblxuXHQkOiBuZXh0ID0gYC8yLzEwYDtcblxuXHQvLyBERVZFTE9QRVJfQ09OU09MRV9MT0dcblx0JDogY29uc29sZS5sb2coXCIlYyBCUk9XU0UgYWRob2MgXCIsIFwiY29sb3I6Ymx1ZTsgZm9udC13ZWlnaHQ6Ym9sZDsgZm9udC1zaXplOjE0cHhcIiwgYWRob2MpO1xuXHQkOiBjb25zb2xlLmxvZyhcIiVjIEJST1dTRSBDaGVja2dyb3VwIFwiLCBcImNvbG9yOmdyZWVuOyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTRweFwiLCBjaGVja2dyb3VwKTtcbjwvc2NyaXB0PlxuXG48IS0tIFNwZWNpYWwgLS0+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Ccm93c2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxzdmVsdGU6b3B0aW9ucyBpbW11dGFibGUgLz5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG5cdHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogMTAwJTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMHZ3O1xuXHRcdG1heC13aWR0aDogMTAwdnc7XG5cdFx0d2lkdGg6IDEwMHZ3O1xuXHRcdC8qIFJlc3QgKi9cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtcHJpbWUpO1xuXHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcblx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcblx0fVxuXHRzZWN0aW9uID4gZGl2LCBhLCBhcnRpY2xlIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHR9XG5cdHNlY3Rpb24gPiBkaXYge1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IG5vbmU7XG5cdFx0bWF4LWhlaWdodDogbm9uZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0b3ZlcmZsb3c6IGF1dG87XG5cdH1cblx0aGVhZGVyIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogOHZoO1xuXHRcdG1heC1oZWlnaHQ6IDh2aDtcblx0XHRoZWlnaHQ6IDh2aDtcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0YSB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMuNSkgY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDIuNSk7XG5cdH1cblx0YXJ0aWNsZSB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG4gICAgYXJ0aWNsZSA+IGgyIHtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMztcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAvKiBTaXppbmcgKi9cbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cdH1cblx0YXJ0aWNsZSA+IHN0cm9uZyB7XG5cdFx0cGFkZGluZy10b3A6IHZhcigtLXB0KTtcblx0fVxuXHQvKiBGb250cyAqL1xuXHRkdCwgc3Ryb25nIHtcblx0XHRmb250LXNpemU6IC45cmVtO1xuXHR9XG5cdGRkLCBtYXJrIHtcblx0XHRmb250LXNpemU6IC44cmVtO1xuXHR9XG5cdG1hcms6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCIjXCI7XG5cdH1cbjwvc3R5bGU+XG5cbjwhLS0gSFRNTCAtLT5cbjxzZWN0aW9uPlxuXHQ8aGVhZGVyPlxuXHRcdDxoMT5Cb2FyZDwvaDE+XG5cdDwvaGVhZGVyPlxuXHQ8ZGl2PlxuXHRcdHsjZWFjaCBhZGhvYyBhcyBhZGhvYyAoYWRob2MuaWQpfVxuXHRcdFx0PGEgaHJlZj1cInBvc3Qve2FkaG9jLmlkfVwiPlxuXHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHR7I2lmIGFkaG9jLnR5cGUgPT09IFwiZGVzaWduZXJcIn1cblx0XHRcdFx0XHRcdDxtYXJrIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbC10ZXJ0KVwiPnthZGhvYy50eXBlfTwvbWFyaz5cblx0XHRcdFx0XHR7OmVsc2V9XG5cdFx0XHRcdFx0XHQ8bWFyayBzdHlsZT1cImNvbG9yOiB2YXIoLS1jb2wtc2VjbylcIj57YWRob2MudHlwZX08L21hcms+XG5cdFx0XHRcdFx0ey9pZn1cblx0XHRcdFx0XHQ8aDI+e2FkaG9jLnRpdGxlfTwvaDI+XG5cdFx0XHRcdFx0PGRsPlxuXHRcdFx0XHRcdFx0PGR0PnthZGhvYy5hdXRob3J9PC9kdD5cblx0XHRcdFx0XHRcdDxkZD57YWRob2MuY2l0eX08L2RkPlxuXHRcdFx0XHRcdDwvZGw+XG5cdFx0XHRcdFx0PHN0cm9uZz57YWRob2MuYW1vdW50fSB7YWRob2MuY3VycmVuY3l9IC8ge2FkaG9jLnBheXR5cGV9PC9zdHJvbmc+XG5cdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdDwvYT5cblx0XHRcdDxocj5cblx0XHR7L2VhY2h9XG5cdFx0eyNpZiBuZXh0fVxuXHRcdFx0PGEgY2xhc3M9XCJtb3JlXCIgaHJlZj17bmV4dH0+TW9yZS4uLjwvYT5cblx0XHR7L2lmfVxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3lCQTRKNEMsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUFWLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBRlYsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUFWLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTVDLEdBQUssSUFBQyxLQUFLOzs7OzswQkFFVixHQUFLLElBQUMsTUFBTTs7OzBCQUNaLEdBQUssSUFBQyxJQUFJOzs7OzBCQUVQLEdBQUssSUFBQyxNQUFNOzs7MEJBQUcsR0FBSyxJQUFDLFFBQVE7OzsyQkFBSyxHQUFLLElBQUMsT0FBTzs7Ozs7OztnQkFWbkQsR0FBSyxJQUFDLElBQUksS0FBSyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBRmpCLEdBQUssSUFBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUVBT2hCLEdBQUssSUFBQyxLQUFLO2lFQUVWLEdBQUssSUFBQyxNQUFNO2lFQUNaLEdBQUssSUFBQyxJQUFJO2lFQUVQLEdBQUssSUFBQyxNQUFNO2lFQUFHLEdBQUssSUFBQyxRQUFRO21FQUFLLEdBQUssSUFBQyxPQUFPOzttRkFaM0MsR0FBSyxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBa0JELEdBQUk7Ozs7Ozs7OztpQ0FBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBbkJwQixHQUFLOztrQ0FBVyxHQUFLLElBQUMsRUFBRTs7O2dDQUE3QixNQUFJOzs7Ozs7eUJBa0JELEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FsQkYsR0FBSzs7Ozs7O2dCQWtCUCxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXRLWSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUs7O09BRWxDLEdBQUcsNkRBQTZELElBQUksVUFBVSxLQUFLOztDQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHOzs7T0FFaEIsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7O0tBRTVCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztRQUNmLEtBQUssU0FBUyxHQUFHLENBQUMsSUFBSTtXQUNuQixLQUFLOzs7O0NBR2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsNkNBQTZDOzs7O09BT25ELEtBQUs7T0FDTCxVQUFVO09BRVYsSUFBSTtPQUNKLEtBQUssR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsOENBQThDLEVBQUUsS0FBSzs7OztJQUNyRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLCtDQUErQyxFQUFFLFVBQVU7Ozs7a0JBSmhHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
