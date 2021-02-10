import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, o as set_style, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, p as set_data_dev, n as noop, r as globals, u as not_equal, w as validate_each_argument, x as create_component, y as claim_component, z as mount_component, A as transition_in, B as transition_out, C as destroy_component, q as query_selector_all, D as check_outros, E as add_render_callback, F as create_in_transition, G as destroy_each, H as group_outros } from './client.53dc4695.js';
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
			mark = claim_element(article_nodes, "MARK", { style: true, class: true });
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
			dt = claim_element(dl_nodes, "DT", { class: true });
			var dt_nodes = children(dt);
			t4 = claim_text(dt_nodes, t4_value);
			dt_nodes.forEach(detach_dev);
			dd = claim_element(dl_nodes, "DD", { class: true });
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
			attr_dev(mark, "class", "svelte-axzvaj");
			add_location(mark, file, 75, 2, 1467);
			attr_dev(h2, "class", "svelte-axzvaj");
			add_location(h2, file, 76, 8, 1521);
			attr_dev(dt, "class", "svelte-axzvaj");
			add_location(dt, file, 78, 12, 1569);
			attr_dev(dd, "class", "svelte-axzvaj");
			add_location(dd, file, 79, 12, 1605);
			add_location(dl, file, 77, 8, 1552);
			attr_dev(strong, "class", "svelte-axzvaj");
			add_location(strong, file, 81, 8, 1649);
			attr_dev(article, "class", "svelte-axzvaj");
			add_location(article, file, 69, 4, 1238);
			attr_dev(a, "href", a_href_value = "post/" + /*adhoc*/ ctx[0].id);
			attr_dev(a, "class", "svelte-axzvaj");
			add_location(a, file, 68, 0, 1207);
			add_location(hr, file, 84, 0, 1736);
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
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "List ended");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-4m0w9g");
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
			h1 = claim_element(nodes, "H1", { class: true });
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
			attr_dev(h1, "class", "svelte-4m0w9g");
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
			attr_dev(a, "class", "more svelte-4m0w9g");
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
			attr_dev(header, "class", "svelte-4m0w9g");
			add_location(header, file$1, 50, 1, 1019);
			add_location(hr, file$1, 58, 1, 1215);
			attr_dev(div, "class", "svelte-4m0w9g");
			add_location(div, file$1, 59, 1, 1221);
			attr_dev(section, "class", "svelte-4m0w9g");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2VdLmQxNzZmYTA2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Bvc3RzL19Qb3N0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdHMvW3BhZ2VdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgYWRob2M7XG48L3NjcmlwdD5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG4gICAgYSB7XG4gICAgICAgIC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cbiAgICBhcnRpY2xlIHtcbiAgICAgICAgLyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbiAgICBhcnRpY2xlID4gaDIge1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIC8qIFNpemluZyAqL1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblx0fVxuICAgIGFydGljbGUgPiBzdHJvbmcge1xuXHRcdHBhZGRpbmctdG9wOiB2YXIoLS1wdCk7XG5cdH1cblx0LyogRm9udHMgKi9cblx0aDIge1xuXHRcdGZvbnQtc2l6ZTogY2FsYyguNXJlbSArIDN2dyk7XG5cdH1cblx0ZHQsIGRkIHtcblx0XHRmb250LXNpemU6IGNhbGMoLjVyZW0gKyAydncpO1xuXHR9XG5cdHN0cm9uZywgbWFyayB7XG5cdFx0Zm9udC1zaXplOiBjYWxjKC41cmVtICsgMS41dncpO1xuXHR9XG5cdG1hcms6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCIjXCI7XG5cdH1cbjwvc3R5bGU+XG5cbjwhLS0gSFRNTCAtLT5cbjxhIGhyZWY9XCJwb3N0L3thZGhvYy5pZH1cIj5cbiAgICA8YXJ0aWNsZT5cbiAgICAgICAgPCEtLSB7I2lmIGFkaG9jLnR5cGUgPT09IFwiZGVzaWduZXJcIn1cbiAgICAgICAgICAgIDxtYXJrIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbC10ZXJ0KVwiPnthZGhvYy50eXBlfTwvbWFyaz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPG1hcmsgc3R5bGU9XCJjb2xvcjogdmFyKC0tY29sLXNlY28pXCI+e2FkaG9jLnR5cGV9PC9tYXJrPlxuICAgICAgICB7L2lmfSAtLT5cblx0XHQ8bWFyayBzdHlsZT1cImNvbG9yOiAjQkJCXCI+e2FkaG9jLnR5cGV9PC9tYXJrPlxuICAgICAgICA8aDI+e2FkaG9jLnRpdGxlfTwvaDI+XG4gICAgICAgIDxkbD5cbiAgICAgICAgICAgIDxkdD57YWRob2MuYXV0aG9yfTwvZHQ+XG4gICAgICAgICAgICA8ZGQ+e2FkaG9jLmNpdHl9PC9kZD5cbiAgICAgICAgPC9kbD5cbiAgICAgICAgPHN0cm9uZz57YWRob2MuYW1vdW50fSB7YWRob2MuY3VycmVuY3l9IC8ge2FkaG9jLnBheXR5cGV9PC9zdHJvbmc+XG4gICAgPC9hcnRpY2xlPlxuPC9hPlxuPGhyPiIsIjwhLS0gU2VydmVyIC0tPlxuPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9KSB7XG5cdFx0Y29uc3QgcGFnZSA9ICtwYXJhbXMucGFnZTtcblx0XHRjb25zdCBsaW1pdCA9IDUwO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgaHR0cHM6Ly82MDE2ZTkwNGY1MzQzMDAwMTdhNDUwOWQubW9ja2FwaS5pby9ib2FyZD9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gKVxuXG5cdFx0Ly8gVmFsaWRhdGVcblx0XHRpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRjb25zdCBhZGhvYyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHRyZXR1cm4geyBhZGhvYywgcGFnZSwgbGltaXQgfTtcblx0XHR9XG5cblx0XHQvLyBFcnJvclxuXHRcdHRoaXMuZXJyb3IoNTAwLCBcIlByb2JsZW1zIHdpdGggc2VydmVyLiBCZSByaWdodCBiYWNrIHNvb24gOylcIik7XG5cdH1cbjwvc2NyaXB0PlxuXG48IS0tIENsaWVudCAtLT5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZseSB9IGZyb20gXCJzdmVsdGUvdHJhbnNpdGlvblwiO1xuXHRpbXBvcnQgUG9zdCBmcm9tIFwiLi9fUG9zdC5zdmVsdGVcIjtcblxuXHQvLyBFeHBvcnRlZFxuXHRleHBvcnQgbGV0IGFkaG9jID0gW107XG5cdGV4cG9ydCBsZXQgcGFnZTtcblx0ZXhwb3J0IGxldCBsaW1pdDtcblxuXHQvLyBMb2FkIE1vcmVcblx0JDogbmV4dCA9IGAvcG9zdHMvJHsrcGFnZSArIDF9YDtcblxuXHQvLyBERVZFTE9QRVJfQ09OU09MRV9MT0dcblx0JDogY29uc29sZS5sb2coXG5cdFx0XCIlYyBCUk9XU0UgYWRob2MgXCIsXG5cdFx0XCJjb2xvcjpibHVlOyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTRweFwiLFxuXHRcdGFkaG9jXG5cdCk7XG48L3NjcmlwdD5cblxuPCEtLSBTcGVjaWFsIC0tPlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+UG9zdHM8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPCEtLSBIVE1MIC0tPlxuPHNlY3Rpb24gaW46Zmx5PXt7IGR1cmF0aW9uOiAzMjAsIHk6IDQwLCBvcGFjaXR5OiAxIH19PlxuXHQ8aGVhZGVyPlxuXHRcdHsjaWYgYWRob2MubGVuZ3RoID4gMH1cblx0XHRcdDxoMT5Cb2FyZDwvaDE+XG5cdFx0XHQ8cD5IZXJlIHlvdSBjYW4gZmluZCBwb3N0cyBieSBjb21tdW5pdHkuIFNjcm9sbCB0byBzZWFyY2ggc29tZXRoaW5nLiBCbGEsIGJsYSwgYmxhLjwvcD5cblx0XHR7OmVsc2V9XG5cdFx0XHQ8aDE+TGlzdCBlbmRlZDwvaDE+XG5cdFx0ey9pZn1cblx0PC9oZWFkZXI+XG5cdDxocj5cblx0PGRpdj5cblx0XHR7I2VhY2ggYWRob2MgYXMgYWRob2MsIGl9XG5cdFx0XHQ8UG9zdCB7YWRob2N9IC8+XG5cdFx0ey9lYWNofVxuXHQ8L2Rpdj5cblx0eyNpZiBuZXh0ICYmIGFkaG9jLmxlbmd0aCA9PT0gbGltaXR9XG5cdFx0PGEgY2xhc3M9XCJtb3JlXCIgaHJlZj17bmV4dH0+TmV4dCBwYWdlPC9hPlxuXHR7L2lmfVxuPC9zZWN0aW9uPlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cblx0c2VjdGlvbiwgc2VjdGlvbiA+IGRpdiwgaGVhZGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblx0YSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR9XG5cdHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwdnc7XG5cdFx0bWF4LXdpZHRoOiAxMDB2dztcblx0XHR3aWR0aDogMTAwdnc7XG5cdFx0LyogUmVzdCAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1wcmltZSk7XG5cdFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcblx0fVxuXHRzZWN0aW9uID4gZGl2IHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdH1cblx0c2VjdGlvbiA+IGRpdiB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGEge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAodmFyKC0tcHQpICogNikpO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDIpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcHQpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1wcmltZWxpZ2h0KTtcblx0XHRjb2xvcjogdmFyKC0tY29sLWJsYWNrKTtcblx0XHRtYXJnaW46IGNhbGMoKHZhcigtLXB0KSAqIDMpKSAwO1xuXHR9XG5cdHN2ZyB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdGhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRtaW4td2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0bWF4LXdpZHRoOiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdHdpZHRoOiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRzdHJva2U6IHZhcigtLWNvbC1ibGFjayk7XG5cdFx0c3Ryb2tlLXdpZHRoOiAyLjU7XG5cdFx0ZmlsbDogbm9uZTtcblx0fVxuXHQvKiBGb250ICovXG5cdGgxIHtcblx0XHRmb250LXNpemU6IGNhbGMoLjVyZW0gKyA1dncpO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzBCQTJFNkIsR0FBSyxJQUFDLElBQUk7Ozs7MEJBQzFCLEdBQUssSUFBQyxLQUFLOzs7OzswQkFFUCxHQUFLLElBQUMsTUFBTTs7OzBCQUNaLEdBQUssSUFBQyxJQUFJOzs7OzBCQUVWLEdBQUssSUFBQyxNQUFNOzs7MEJBQUcsR0FBSyxJQUFDLFFBQVE7OzsyQkFBSyxHQUFLLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFiakQsR0FBSyxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFPTSxHQUFLLElBQUMsSUFBSTtpRUFDMUIsR0FBSyxJQUFDLEtBQUs7aUVBRVAsR0FBSyxJQUFDLE1BQU07aUVBQ1osR0FBSyxJQUFDLElBQUk7aUVBRVYsR0FBSyxJQUFDLE1BQU07aUVBQUcsR0FBSyxJQUFDLFFBQVE7bUVBQUssR0FBSyxJQUFDLE9BQU87O21GQWJqRCxHQUFLLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW5FUixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NDZ0VJLEdBQUk7Ozs7Ozs7OztpQ0FBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFkckIsR0FBSyxJQUFDLE1BQU0sR0FBRyxDQUFDOzs7Ozs7NEJBU2QsR0FBSzs7OztnQ0FBVixNQUFJOzs7Ozs7OzswQkFJRixHQUFJLGlCQUFJLEdBQUssSUFBQyxNQUFNLGVBQUssR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUozQixHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7OztnQkFJRixHQUFJLGlCQUFJLEdBQUssSUFBQyxNQUFNLGVBQUssR0FBSzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FKaEMsTUFBSTs7Ozs7OzBEQVhXLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBNUM1QixPQUFPLEdBQUcsTUFBTTtPQUMvQixJQUFJLElBQUksTUFBTSxDQUFDLElBQUk7T0FDbkIsS0FBSyxHQUFHLEVBQUU7OztPQUVWLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSywyREFBMkQsSUFBSSxVQUFVLEtBQUs7OztLQUd0RyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7UUFDZixLQUFLLFNBQVMsR0FBRyxDQUFDLElBQUk7V0FDbkIsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLOzs7O0NBSTVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDZDQUE2Qzs7OztPQVVuRCxLQUFLO09BQ0wsSUFBSTtPQUNKLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFHYixJQUFJLGNBQWMsSUFBSSxHQUFHLENBQUM7Ozs7O0lBRzFCLE9BQU8sQ0FBQyxHQUFHLENBQ2Isa0JBQWtCLEVBQ2xCLDhDQUE4QyxFQUM5QyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
