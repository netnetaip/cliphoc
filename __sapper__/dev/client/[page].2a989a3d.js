import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, c as claim_space, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, O as set_data_dev, n as noop, V as set_style, L as globals, I as not_equal, J as validate_each_argument, K as validate_each_keys, F as empty, A as create_component, B as claim_component, C as mount_component, r as transition_in, w as transition_out, E as destroy_component, q as query_selector_all, P as update_keyed_each, H as check_outros, G as group_outros, T as outro_and_destroy_block } from './client.46625de6.js';

/* src/routes/[list]/_Post.svelte generated by Svelte v3.24.1 */

const file = "src/routes/[list]/_Post.svelte";

// (70:8) {:else}
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
			attr_dev(mark, "class", "svelte-f9h27g");
			add_location(mark, file, 70, 12, 1342);
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
		source: "(70:8) {:else}",
		ctx
	});

	return block;
}

// (68:8) {#if adhoc.type === "designer"}
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
			attr_dev(mark, "class", "svelte-f9h27g");
			add_location(mark, file, 68, 12, 1257);
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
		source: "(68:8) {#if adhoc.type === \\\"designer\\\"}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
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
		if (/*adhoc*/ ctx[0].type === "designer") return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
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
			attr_dev(h2, "class", "svelte-f9h27g");
			add_location(h2, file, 72, 8, 1421);
			attr_dev(dt, "class", "svelte-f9h27g");
			add_location(dt, file, 74, 12, 1469);
			attr_dev(dd, "class", "svelte-f9h27g");
			add_location(dd, file, 75, 12, 1505);
			add_location(dl, file, 73, 8, 1452);
			attr_dev(strong, "class", "svelte-f9h27g");
			add_location(strong, file, 77, 8, 1549);
			attr_dev(article, "class", "svelte-f9h27g");
			add_location(article, file, 66, 4, 1195);
			attr_dev(a, "href", a_href_value = "post/" + /*adhoc*/ ctx[0].id);
			attr_dev(a, "class", "svelte-f9h27g");
			add_location(a, file, 65, 0, 1164);
			add_location(hr, file, 80, 0, 1636);
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
		p: function update(ctx, [dirty]) {
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if_block.d();
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(hr);
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

function instance($$self, $$props, $$invalidate) {
	let { adhoc } = $$props;
	const writable_props = ["adhoc"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Post> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Post", $$slots, []);

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
	};

	$$self.$capture_state = () => ({ adhoc });

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [adhoc];
}

class Post extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { adhoc: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Post",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*adhoc*/ ctx[0] === undefined && !("adhoc" in props)) {
			console.warn("<Post> was created without expected prop 'adhoc'");
		}
	}

	get adhoc() {
		throw new Error("<Post>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set adhoc(value) {
		throw new Error("<Post>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/[list]/[page].svelte generated by Svelte v3.24.1 */

const { console: console_1 } = globals;
const file$1 = "src/routes/[list]/[page].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	return child_ctx;
}

// (104:2) {#each adhoc as adhoc (adhoc.id)}
function create_each_block(key_1, ctx) {
	let first;
	let post;
	let current;

	post = new Post({
			props: { adhoc: /*adhoc*/ ctx[0] },
			$$inline: true
		});

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			create_component(post.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(post.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(post, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const post_changes = {};
			if (dirty & /*adhoc*/ 1) post_changes.adhoc = /*adhoc*/ ctx[0];
			post.$set(post_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(post.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(post.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			destroy_component(post, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(104:2) {#each adhoc as adhoc (adhoc.id)}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let section;
	let header;
	let h1;
	let t1;
	let t2;
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	let each_value = /*adhoc*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*adhoc*/ ctx[0].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

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

			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Browse";
			add_location(h1, file$1, 100, 2, 1924);
			attr_dev(header, "class", "svelte-ye2v4");
			add_location(header, file$1, 99, 1, 1913);
			attr_dev(div, "class", "svelte-ye2v4");
			add_location(div, file$1, 102, 1, 1951);
			attr_dev(section, "class", "svelte-ye2v4");
			add_location(section, file$1, 98, 0, 1902);
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

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*adhoc*/ 1) {
				const each_value = /*adhoc*/ ctx[0];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page) {
	// URL
	const url = `https://6016e904f534300017a4509d.mockapi.io/board?page=${page}&limit=10`;

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

function instance$1($$self, $$props, $$invalidate) {
	let { adhoc = [] } = $$props;
	let { page } = $$props;
	const writable_props = ["adhoc", "page"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bpageu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bpageu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
		if ("page" in $$props) $$invalidate(1, page = $$props.page);
	};

	$$self.$capture_state = () => ({ preload, Post, adhoc, page });

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
		if ("page" in $$props) $$invalidate(1, page = $$props.page);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*adhoc*/ 1) {
			// DEVELOPER_CONSOLE_LOG
			 console.log("%c BROWSE adhoc ", "color:blue; font-weight:bold; font-size:14px", adhoc);
		}
	};

	return [adhoc, page];
}

class U5Bpageu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, not_equal, { adhoc: 0, page: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpageu5D",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*page*/ ctx[1] === undefined && !("page" in props)) {
			console_1.warn("<U5Bpageu5D> was created without expected prop 'page'");
		}
	}

	get adhoc() {
		throw new Error("<U5Bpageu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set adhoc(value) {
		throw new Error("<U5Bpageu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get page() {
		throw new Error("<U5Bpageu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set page(value) {
		throw new Error("<U5Bpageu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bpageu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2VdLjJhOTg5YTNkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL1tsaXN0XS9fUG9zdC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL1tsaXN0XS9bcGFnZV0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBhZGhvYztcbjwvc2NyaXB0PlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cbiAgICBhIHtcbiAgICAgICAgLyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMy41KSBjYWxjKHZhcigtLXB0KSAqIDMpIGNhbGModmFyKC0tcHQpICogMi41KTtcblx0fVxuICAgIGFydGljbGUge1xuICAgICAgICAvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IG5vbmU7XG5cdFx0bWF4LWhlaWdodDogbm9uZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuICAgIGFydGljbGUgPiBoMiB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgLyogU2l6aW5nICovXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXHR9XG4gICAgYXJ0aWNsZSA+IHN0cm9uZyB7XG5cdFx0cGFkZGluZy10b3A6IHZhcigtLXB0KTtcblx0fVxuXHQvKiBGb250cyAqL1xuXHRkdCwgc3Ryb25nIHtcblx0XHRmb250LXNpemU6IC45cmVtO1xuXHR9XG5cdGRkLCBtYXJrIHtcblx0XHRmb250LXNpemU6IC44cmVtO1xuXHR9XG5cdG1hcms6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCIjXCI7XG5cdH1cbjwvc3R5bGU+XG5cbjwhLS0gSFRNTCAtLT5cbjxhIGhyZWY9XCJwb3N0L3thZGhvYy5pZH1cIj5cbiAgICA8YXJ0aWNsZT5cbiAgICAgICAgeyNpZiBhZGhvYy50eXBlID09PSBcImRlc2lnbmVyXCJ9XG4gICAgICAgICAgICA8bWFyayBzdHlsZT1cImNvbG9yOiB2YXIoLS1jb2wtdGVydClcIj57YWRob2MudHlwZX08L21hcms+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgIDxtYXJrIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbC1zZWNvKVwiPnthZGhvYy50eXBlfTwvbWFyaz5cbiAgICAgICAgey9pZn1cbiAgICAgICAgPGgyPnthZGhvYy50aXRsZX08L2gyPlxuICAgICAgICA8ZGw+XG4gICAgICAgICAgICA8ZHQ+e2FkaG9jLmF1dGhvcn08L2R0PlxuICAgICAgICAgICAgPGRkPnthZGhvYy5jaXR5fTwvZGQ+XG4gICAgICAgIDwvZGw+XG4gICAgICAgIDxzdHJvbmc+e2FkaG9jLmFtb3VudH0ge2FkaG9jLmN1cnJlbmN5fSAvIHthZGhvYy5wYXl0eXBlfTwvc3Ryb25nPlxuICAgIDwvYXJ0aWNsZT5cbjwvYT5cbjxocj4iLCI8IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlKSB7XG5cdFx0Ly8gVVJMXG5cdFx0Y29uc3QgdXJsID0gYGh0dHBzOi8vNjAxNmU5MDRmNTM0MzAwMDE3YTQ1MDlkLm1vY2thcGkuaW8vYm9hcmQ/cGFnZT0ke3BhZ2V9JmxpbWl0PTEwYDtcblx0XHRjb25zb2xlLmxvZyhcIlVSTFwiLCB1cmwpO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgYWRob2MgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHsgYWRob2MgfTtcblx0XHR9XG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uIDspXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPCEtLSBDbGllbnQgLS0+XG48c2NyaXB0PlxuXHRpbXBvcnQgUG9zdCBmcm9tIFwiLi9fUG9zdC5zdmVsdGVcIjtcblxuXHQvLyBFeHBvcnRlZFxuXHRleHBvcnQgbGV0IGFkaG9jID0gW107XG5cblx0ZXhwb3J0IGxldCBwYWdlO1xuXG5cdC8vIERFVkVMT1BFUl9DT05TT0xFX0xPR1xuXHQkOiBjb25zb2xlLmxvZyhcIiVjIEJST1dTRSBhZGhvYyBcIiwgXCJjb2xvcjpibHVlOyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTRweFwiLCBhZGhvYyk7XG48L3NjcmlwdD5cblxuPCEtLSBTcGVjaWFsIC0tPlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+QnJvd3NlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48c3ZlbHRlOm9wdGlvbnMgaW1tdXRhYmxlIC8+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRzZWN0aW9uIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0bWF4LWhlaWdodDogbm9uZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bWluLXdpZHRoOiAxMDB2dztcblx0XHRtYXgtd2lkdGg6IDEwMHZ3O1xuXHRcdHdpZHRoOiAxMDB2dztcblx0XHQvKiBSZXN0ICovXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLXByaW1lKTtcblx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRcdG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG5cdH1cblx0c2VjdGlvbiA+IGRpdiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0fVxuXHRzZWN0aW9uID4gZGl2IHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0LyogUmVzdCAqL1xuXHRcdG92ZXJmbG93OiBhdXRvO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1lbmQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IDh2aDtcblx0XHRtYXgtaGVpZ2h0OiA4dmg7XG5cdFx0aGVpZ2h0OiA4dmg7XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG48L3N0eWxlPlxuXG48IS0tIEhUTUwgLS0+XG48c2VjdGlvbj5cblx0PGhlYWRlcj5cblx0XHQ8aDE+Qm9hcmQ8L2gxPlxuXHQ8L2hlYWRlcj5cblx0PGRpdj5cblx0XHR7I2VhY2ggYWRob2MgYXMgYWRob2MgKGFkaG9jLmlkKX1cblx0XHRcdDxQb3N0IHthZGhvY30vPlxuXHRcdHsvZWFjaH1cblx0PC9kaXY+XG48L3NlY3Rpb24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3lCQXNFa0QsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUFWLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBRlYsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUFWLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJL0MsR0FBSyxJQUFDLEtBQUs7Ozs7OzBCQUVQLEdBQUssSUFBQyxNQUFNOzs7MEJBQ1osR0FBSyxJQUFDLElBQUk7Ozs7MEJBRVYsR0FBSyxJQUFDLE1BQU07OzswQkFBRyxHQUFLLElBQUMsUUFBUTs7OzJCQUFLLEdBQUssSUFBQyxPQUFPOzs7Ozs7O2dCQVZuRCxHQUFLLElBQUMsSUFBSSxLQUFLLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBRnZCLEdBQUssSUFBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFPVixHQUFLLElBQUMsS0FBSztpRUFFUCxHQUFLLElBQUMsTUFBTTtpRUFDWixHQUFLLElBQUMsSUFBSTtpRUFFVixHQUFLLElBQUMsTUFBTTtpRUFBRyxHQUFLLElBQUMsUUFBUTttRUFBSyxHQUFLLElBQUMsT0FBTzs7bUZBWmpELEdBQUssSUFBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWhFUixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDc0dYLEdBQUs7O2tDQUFXLEdBQUssSUFBQyxFQUFFOzs7Z0NBQTdCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUFDLEdBQUs7Ozs7Ozs7Ozs7O2tDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFyR2UsT0FBTyxDQUFDLElBQUk7O09BRTNCLEdBQUcsNkRBQTZELElBQUk7O0NBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUc7OztPQUVoQixHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7S0FFNUIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHO1FBQ2YsS0FBSyxTQUFTLEdBQUcsQ0FBQyxJQUFJO1dBQ25CLEtBQUs7Ozs7Q0FHZixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSw2Q0FBNkM7Ozs7T0FTbkQsS0FBSztPQUVMLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSw4Q0FBOEMsRUFBRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
