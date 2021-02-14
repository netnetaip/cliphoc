import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, o as set_style, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, p as set_data_dev, n as noop, r as globals, u as not_equal, w as validate_each_argument, x as create_component, y as claim_component, z as mount_component, A as transition_in, B as transition_out, C as destroy_component, q as query_selector_all, D as check_outros, E as add_render_callback, F as create_in_transition, G as destroy_each, H as group_outros } from './client.9f1167df.js';
import { f as fly } from './index.ff7bd4a9.js';

/* src/routes/posts/_Post.svelte generated by Svelte v3.24.1 */

const file = "src/routes/posts/_Post.svelte";

function create_fragment(ctx) {
	let a;
	let article;
	let mark;
	let t0_value = /*adhoc*/ ctx[0].type + "";
	let t0;
	let t1;
	let h2;
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
	let a_href_value;
	let t12;
	let hr;

	const block = {
		c: function create() {
			a = element("a");
			article = element("article");
			mark = element("mark");
			t0 = text(t0_value);
			t1 = space();
			h2 = element("h2");
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
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			article = claim_element(a_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			mark = claim_element(article_nodes, "MARK", { style: true });
			var mark_nodes = children(mark);
			t0 = claim_text(mark_nodes, t0_value);
			mark_nodes.forEach(detach_dev);
			t1 = claim_space(article_nodes);
			h2 = claim_element(article_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, t2_value);
			h2_nodes.forEach(detach_dev);
			t3 = claim_space(article_nodes);
			dl = claim_element(article_nodes, "DL", {});
			var dl_nodes = children(dl);
			dt = claim_element(dl_nodes, "DT", {});
			var dt_nodes = children(dt);
			t4 = claim_text(dt_nodes, t4_value);
			dt_nodes.forEach(detach_dev);
			dd = claim_element(dl_nodes, "DD", {});
			var dd_nodes = children(dd);
			t5 = claim_text(dd_nodes, t5_value);
			dd_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			t6 = claim_space(article_nodes);
			strong = claim_element(article_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t7 = claim_text(strong_nodes, t7_value);
			t8 = claim_space(strong_nodes);
			t9 = claim_text(strong_nodes, t9_value);
			t10 = claim_text(strong_nodes, " / ");
			t11 = claim_text(strong_nodes, t11_value);
			strong_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			set_style(mark, "color", "#BBB");
			add_location(mark, file, 12, 2, 304);
			attr_dev(h2, "class", "svelte-7haa9v");
			add_location(h2, file, 13, 2, 352);
			add_location(dt, file, 15, 3, 385);
			add_location(dd, file, 16, 3, 412);
			add_location(dl, file, 14, 2, 377);
			attr_dev(strong, "class", "svelte-7haa9v");
			add_location(strong, file, 18, 2, 444);
			attr_dev(article, "class", "svelte-7haa9v");
			add_location(article, file, 6, 1, 81);
			attr_dev(a, "href", a_href_value = "post/" + /*adhoc*/ ctx[0].id);
			attr_dev(a, "class", "svelte-7haa9v");
			add_location(a, file, 5, 0, 53);
			add_location(hr, file, 21, 0, 528);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, article);
			append_dev(article, mark);
			append_dev(mark, t0);
			append_dev(article, t1);
			append_dev(article, h2);
			append_dev(h2, t2);
			append_dev(article, t3);
			append_dev(article, dl);
			append_dev(dl, dt);
			append_dev(dt, t4);
			append_dev(dl, dd);
			append_dev(dd, t5);
			append_dev(article, t6);
			append_dev(article, strong);
			append_dev(strong, t7);
			append_dev(strong, t8);
			append_dev(strong, t9);
			append_dev(strong, t10);
			append_dev(strong, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, hr, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*adhoc*/ 1 && t0_value !== (t0_value = /*adhoc*/ ctx[0].type + "")) set_data_dev(t0, t0_value);
			if (dirty & /*adhoc*/ 1 && t2_value !== (t2_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t2, t2_value);
			if (dirty & /*adhoc*/ 1 && t4_value !== (t4_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t4, t4_value);
			if (dirty & /*adhoc*/ 1 && t5_value !== (t5_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t5, t5_value);
			if (dirty & /*adhoc*/ 1 && t7_value !== (t7_value = /*adhoc*/ ctx[0].amount + "")) set_data_dev(t7, t7_value);
			if (dirty & /*adhoc*/ 1 && t9_value !== (t9_value = /*adhoc*/ ctx[0].currency + "")) set_data_dev(t9, t9_value);
			if (dirty & /*adhoc*/ 1 && t11_value !== (t11_value = /*adhoc*/ ctx[0].paytype + "")) set_data_dev(t11, t11_value);

			if (dirty & /*adhoc*/ 1 && a_href_value !== (a_href_value = "post/" + /*adhoc*/ ctx[0].id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (detaching) detach_dev(t12);
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

/* src/routes/posts/[page].svelte generated by Svelte v3.24.1 */

const { console: console_1 } = globals;
const file$1 = "src/routes/posts/[page].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[5] = i;
	return child_ctx;
}

// (55:2) {:else}
function create_else_block(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("List ended");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "List ended");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 55, 3, 1175);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(55:2) {:else}",
		ctx
	});

	return block;
}

// (52:2) {#if adhoc.length > 0}
function create_if_block_1(ctx) {
	let h1;
	let t0;
	let t1;
	let p;
	let t2;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Board");
			t1 = space();
			p = element("p");
			t2 = text("Here you can find posts by community. Scroll to search something. Bla, bla, bla.");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Board");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Here you can find posts by community. Scroll to search something. Bla, bla, bla.");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 52, 3, 1056);
			add_location(p, file$1, 53, 3, 1074);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(52:2) {#if adhoc.length > 0}",
		ctx
	});

	return block;
}

// (61:2) {#each adhoc as adhoc, i}
function create_each_block(ctx) {
	let post;
	let current;

	post = new Post({
			props: { adhoc: /*adhoc*/ ctx[1] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(post.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(post.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(post, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const post_changes = {};
			if (dirty & /*adhoc*/ 2) post_changes.adhoc = /*adhoc*/ ctx[1];
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
			destroy_component(post, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(61:2) {#each adhoc as adhoc, i}",
		ctx
	});

	return block;
}

// (65:1) {#if next && adhoc.length === limit}
function create_if_block(ctx) {
	let a;
	let t;

	const block = {
		c: function create() {
			a = element("a");
			t = text("Next page");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, "Next page");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "class", "more svelte-1p2bu5k");
			attr_dev(a, "href", /*next*/ ctx[2]);
			add_location(a, file$1, 65, 2, 1333);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*next*/ 4) {
				attr_dev(a, "href", /*next*/ ctx[2]);
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
		source: "(65:1) {#if next && adhoc.length === limit}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let section;
	let header;
	let t1;
	let hr;
	let t2;
	let div;
	let t3;
	let section_intro;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*adhoc*/ ctx[1].length > 0) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);
	let each_value = /*adhoc*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block1 = /*next*/ ctx[2] && /*adhoc*/ ctx[1].length === /*limit*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			header = element("header");
			if_block0.c();
			t1 = space();
			hr = element("hr");
			t2 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ucjnix\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			header = claim_element(section_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			if_block0.l(header_nodes);
			header_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			hr = claim_element(section_nodes, "HR", {});
			t2 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			if (if_block1) if_block1.l(section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Posts";
			attr_dev(header, "class", "svelte-1p2bu5k");
			add_location(header, file$1, 50, 1, 1019);
			add_location(hr, file$1, 58, 1, 1215);
			attr_dev(div, "class", "svelte-1p2bu5k");
			add_location(div, file$1, 59, 1, 1221);
			attr_dev(section, "class", "svelte-1p2bu5k");
			add_location(section, file$1, 49, 0, 962);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, header);
			if_block0.m(header, null);
			append_dev(section, t1);
			append_dev(section, hr);
			append_dev(section, t2);
			append_dev(section, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(section, t3);
			if (if_block1) if_block1.m(section, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(header, null);
				}
			}

			if (dirty & /*adhoc*/ 2) {
				each_value = /*adhoc*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (/*next*/ ctx[2] && /*adhoc*/ ctx[1].length === /*limit*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(section, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			if (!section_intro) {
				add_render_callback(() => {
					section_intro = create_in_transition(section, fly, { duration: 320, y: 40, opacity: 1 });
					section_intro.start();
				});
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			if_block0.d();
			destroy_each(each_blocks, detaching);
			if (if_block1) if_block1.d();
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

async function preload({ params }) {
	const page = +params.page;
	const limit = 50;

	// Fetch
	const res = await this.fetch(`https://6016e904f534300017a4509d.mockapi.io/board?page=${page}&limit=${limit}`);

	// Validate
	if (res.status === 200) {
		const adhoc = await res.json();
		return { adhoc, page, limit };
	}

	// Error
	this.error(500, "Problems with server. Be right back soon ;)");
}

function instance$1($$self, $$props, $$invalidate) {
	let { adhoc = [] } = $$props;
	let { page } = $$props;
	let { limit } = $$props;
	const writable_props = ["adhoc", "page", "limit"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bpageu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bpageu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(1, adhoc = $$props.adhoc);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
		if ("limit" in $$props) $$invalidate(0, limit = $$props.limit);
	};

	$$self.$capture_state = () => ({
		preload,
		fly,
		Post,
		adhoc,
		page,
		limit,
		next
	});

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(1, adhoc = $$props.adhoc);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
		if ("limit" in $$props) $$invalidate(0, limit = $$props.limit);
		if ("next" in $$props) $$invalidate(2, next = $$props.next);
	};

	let next;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*page*/ 8) {
			// Load More
			 $$invalidate(2, next = `/posts/${+page + 1}`);
		}

		if ($$self.$$.dirty & /*adhoc*/ 2) {
			// DEVELOPER_CONSOLE_LOG
			 console.log("%c BROWSE adhoc ", "color:blue; font-weight:bold; font-size:14px", adhoc);
		}
	};

	return [limit, adhoc, next, page];
}

class U5Bpageu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, not_equal, { adhoc: 1, page: 3, limit: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpageu5D",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*page*/ ctx[3] === undefined && !("page" in props)) {
			console_1.warn("<U5Bpageu5D> was created without expected prop 'page'");
		}

		if (/*limit*/ ctx[0] === undefined && !("limit" in props)) {
			console_1.warn("<U5Bpageu5D> was created without expected prop 'limit'");
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

	get limit() {
		throw new Error("<U5Bpageu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set limit(value) {
		throw new Error("<U5Bpageu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bpageu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2VdLmRmMTdjMjMwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Bvc3RzL19Qb3N0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdHMvW3BhZ2VdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IGFkaG9jO1xuPC9zY3JpcHQ+XG5cbjwhLS0gSFRNTCAtLT5cbjxhIGhyZWY9XCJwb3N0L3thZGhvYy5pZH1cIj5cblx0PGFydGljbGU+XG5cdFx0PCEtLSB7I2lmIGFkaG9jLnR5cGUgPT09IFwiZGVzaWduZXJcIn1cbiAgICAgICAgICAgIDxtYXJrIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbC10ZXJ0KVwiPnthZGhvYy50eXBlfTwvbWFyaz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPG1hcmsgc3R5bGU9XCJjb2xvcjogdmFyKC0tY29sLXNlY28pXCI+e2FkaG9jLnR5cGV9PC9tYXJrPlxuICAgICAgICB7L2lmfSAtLT5cblx0XHQ8bWFyayBzdHlsZT1cImNvbG9yOiAjQkJCXCI+e2FkaG9jLnR5cGV9PC9tYXJrPlxuXHRcdDxoMj57YWRob2MudGl0bGV9PC9oMj5cblx0XHQ8ZGw+XG5cdFx0XHQ8ZHQ+e2FkaG9jLmF1dGhvcn08L2R0PlxuXHRcdFx0PGRkPnthZGhvYy5jaXR5fTwvZGQ+XG5cdFx0PC9kbD5cblx0XHQ8c3Ryb25nPnthZGhvYy5hbW91bnR9IHthZGhvYy5jdXJyZW5jeX0gLyB7YWRob2MucGF5dHlwZX08L3N0cm9uZz5cblx0PC9hcnRpY2xlPlxuPC9hPlxuPGhyIC8+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRhIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IG5vbmU7XG5cdFx0bWF4LWhlaWdodDogbm9uZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGFydGljbGUge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGFydGljbGUgPiBoMiB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGFydGljbGUgPiBzdHJvbmcge1xuXHRcdHBhZGRpbmctdG9wOiB2YXIoLS1wdCk7XG5cdH1cbjwvc3R5bGU+XG4iLCI8IS0tIFNlcnZlciAtLT5cbjxzdmVsdGU6b3B0aW9ucyBpbW11dGFibGUgLz5cblxuPCEtLSBTZXJ2ZXIgLS0+XG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMgfSkge1xuXHRcdGNvbnN0IHBhZ2UgPSArcGFyYW1zLnBhZ2U7XG5cdFx0Y29uc3QgbGltaXQgPSA1MDtcblx0XHQvLyBGZXRjaFxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGh0dHBzOi8vNjAxNmU5MDRmNTM0MzAwMDE3YTQ1MDlkLm1vY2thcGkuaW8vYm9hcmQ/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YClcblxuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgYWRob2MgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHsgYWRob2MsIHBhZ2UsIGxpbWl0IH07XG5cdFx0fVxuXG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uIDspXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPCEtLSBDbGllbnQgLS0+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBmbHkgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcblx0aW1wb3J0IFBvc3QgZnJvbSBcIi4vX1Bvc3Quc3ZlbHRlXCI7XG5cblx0Ly8gRXhwb3J0ZWRcblx0ZXhwb3J0IGxldCBhZGhvYyA9IFtdO1xuXHRleHBvcnQgbGV0IHBhZ2U7XG5cdGV4cG9ydCBsZXQgbGltaXQ7XG5cblx0Ly8gTG9hZCBNb3JlXG5cdCQ6IG5leHQgPSBgL3Bvc3RzLyR7K3BhZ2UgKyAxfWA7XG5cblx0Ly8gREVWRUxPUEVSX0NPTlNPTEVfTE9HXG5cdCQ6IGNvbnNvbGUubG9nKFxuXHRcdFwiJWMgQlJPV1NFIGFkaG9jIFwiLFxuXHRcdFwiY29sb3I6Ymx1ZTsgZm9udC13ZWlnaHQ6Ym9sZDsgZm9udC1zaXplOjE0cHhcIixcblx0XHRhZGhvY1xuXHQpO1xuPC9zY3JpcHQ+XG5cbjwhLS0gU3BlY2lhbCAtLT5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlBvc3RzPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjwhLS0gSFRNTCAtLT5cbjxzZWN0aW9uIGluOmZseT17eyBkdXJhdGlvbjogMzIwLCB5OiA0MCwgb3BhY2l0eTogMSB9fT5cblx0PGhlYWRlcj5cblx0XHR7I2lmIGFkaG9jLmxlbmd0aCA+IDB9XG5cdFx0XHQ8aDE+Qm9hcmQ8L2gxPlxuXHRcdFx0PHA+SGVyZSB5b3UgY2FuIGZpbmQgcG9zdHMgYnkgY29tbXVuaXR5LiBTY3JvbGwgdG8gc2VhcmNoIHNvbWV0aGluZy4gQmxhLCBibGEsIGJsYS48L3A+XG5cdFx0ezplbHNlfVxuXHRcdFx0PGgxPkxpc3QgZW5kZWQ8L2gxPlxuXHRcdHsvaWZ9XG5cdDwvaGVhZGVyPlxuXHQ8aHI+XG5cdDxkaXY+XG5cdFx0eyNlYWNoIGFkaG9jIGFzIGFkaG9jLCBpfVxuXHRcdFx0PFBvc3Qge2FkaG9jfSAvPlxuXHRcdHsvZWFjaH1cblx0PC9kaXY+XG5cdHsjaWYgbmV4dCAmJiBhZGhvYy5sZW5ndGggPT09IGxpbWl0fVxuXHRcdDxhIGNsYXNzPVwibW9yZVwiIGhyZWY9e25leHR9Pk5leHQgcGFnZTwvYT5cblx0ey9pZn1cbjwvc2VjdGlvbj5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG5cdHNlY3Rpb24sIHNlY3Rpb24gPiBkaXYsIGhlYWRlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG5cdGEge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXHRzZWN0aW9uIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogMTAwJTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMHZ3O1xuXHRcdG1heC13aWR0aDogMTAwdnc7XG5cdFx0d2lkdGg6IDEwMHZ3O1xuXHRcdC8qIFJlc3QgKi9cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtcHJpbWUpO1xuXHRcdG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG5cdH1cblx0c2VjdGlvbiA+IGRpdiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHR9XG5cdHNlY3Rpb24gPiBkaXYge1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IG5vbmU7XG5cdFx0bWF4LWhlaWdodDogbm9uZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHRoZWFkZXIge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiBub25lO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDMpIGNhbGModmFyKC0tcHQpICogNik7XG5cdH1cblx0YSB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogbm9uZTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtICh2YXIoLS1wdCkgKiA2KSk7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMikgY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1wdCk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLXByaW1lbGlnaHQpO1xuXHRcdGNvbG9yOiB2YXIoLS1jb2wtYmxhY2spO1xuXHRcdG1hcmdpbjogY2FsYygodmFyKC0tcHQpICogMykpIDA7XG5cdH1cblx0YTpob3ZlciwgYTphY3RpdmUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMSk7XG5cdH1cblx0c3ZnIHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdG1heC1oZWlnaHQ6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0aGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdG1pbi13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRtYXgtd2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0d2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHN0cm9rZTogdmFyKC0tY29sLWJsYWNrKTtcblx0XHRzdHJva2Utd2lkdGg6IDIuNTtcblx0XHRmaWxsOiBub25lO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzBCQVk2QixHQUFLLElBQUMsSUFB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
