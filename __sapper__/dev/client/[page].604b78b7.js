import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, c as claim_space, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, o as set_data_dev, n as noop, p as set_style, r as globals, u as not_equal, w as validate_each_argument, x as create_component, y as claim_component, z as mount_component, A as transition_in, B as transition_out, C as destroy_component, D as svg_element, E as xlink_attr, q as query_selector_all, F as check_outros, G as add_render_callback, H as create_in_transition, I as destroy_each, J as group_outros } from './client.ab39cd0d.js';
import { f as fly } from './index.ff7bd4a9.js';

/* src/routes/posts/_Post.svelte generated by Svelte v3.24.1 */

const file = "src/routes/posts/_Post.svelte";

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
			attr_dev(mark, "class", "svelte-e32vu4");
			add_location(mark, file, 70, 12, 1318);
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
			attr_dev(mark, "class", "svelte-e32vu4");
			add_location(mark, file, 68, 12, 1233);
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
			attr_dev(h2, "class", "svelte-e32vu4");
			add_location(h2, file, 72, 8, 1397);
			attr_dev(dt, "class", "svelte-e32vu4");
			add_location(dt, file, 74, 12, 1445);
			attr_dev(dd, "class", "svelte-e32vu4");
			add_location(dd, file, 75, 12, 1481);
			add_location(dl, file, 73, 8, 1428);
			attr_dev(strong, "class", "svelte-e32vu4");
			add_location(strong, file, 77, 8, 1525);
			attr_dev(article, "class", "svelte-e32vu4");
			add_location(article, file, 66, 4, 1171);
			attr_dev(a, "href", a_href_value = "post/" + /*adhoc*/ ctx[0].id);
			attr_dev(a, "class", "svelte-e32vu4");
			add_location(a, file, 65, 0, 1140);
			add_location(hr, file, 80, 0, 1612);
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

/* src/routes/posts/[page].svelte generated by Svelte v3.24.1 */

const { console: console_1 } = globals;
const file$1 = "src/routes/posts/[page].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[4] = i;
	return child_ctx;
}

// (53:2) {:else}
function create_else_block$1(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("End of the list");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "End of the list");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 53, 3, 1070);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(53:2) {:else}",
		ctx
	});

	return block;
}

// (51:2) {#if adhoc.length > 0}
function create_if_block_1(ctx) {
	let h1;
	let t0;
	let t1_value = /*adhoc*/ ctx[0].length + "";
	let t1;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Board ");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Board ");
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 51, 3, 1027);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			append_dev(h1, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t1_value !== (t1_value = /*adhoc*/ ctx[0].length + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(51:2) {#if adhoc.length > 0}",
		ctx
	});

	return block;
}

// (58:2) {#each adhoc as adhoc, i}
function create_each_block(ctx) {
	let post;
	let current;

	post = new Post({
			props: { adhoc: /*adhoc*/ ctx[0] },
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
			destroy_component(post, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(58:2) {#each adhoc as adhoc, i}",
		ctx
	});

	return block;
}

// (62:1) {#if next && adhoc.length === 50}
function create_if_block$1(ctx) {
	let a;
	let svg;
	let use;
	let t;

	const block = {
		c: function create() {
			a = element("a");
			svg = svg_element("svg");
			use = svg_element("use");
			t = text("\n\t\t\t Load more");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			svg = claim_element(a_nodes, "svg", { class: true }, 1);
			var svg_nodes = children(svg);
			use = claim_element(svg_nodes, "use", { "xlink:href": true }, 1);
			children(use).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t = claim_text(a_nodes, "\n\t\t\t Load more");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			xlink_attr(use, "xlink:href", "/sprite.svg#plus");
			add_location(use, file$1, 63, 8, 1261);
			attr_dev(svg, "class", "svelte-1y6dfbc");
			add_location(svg, file$1, 63, 3, 1256);
			attr_dev(a, "class", "more svelte-1y6dfbc");
			attr_dev(a, "href", /*next*/ ctx[1]);
			add_location(a, file$1, 62, 2, 1224);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, svg);
			append_dev(svg, use);
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
		id: create_if_block$1.name,
		type: "if",
		source: "(62:1) {#if next && adhoc.length === 50}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let section;
	let header;
	let t1;
	let div;
	let t2;
	let section_intro;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*adhoc*/ ctx[0].length > 0) return create_if_block_1;
		return create_else_block$1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);
	let each_value = /*adhoc*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block1 = /*next*/ ctx[1] && /*adhoc*/ ctx[0].length === 50 && create_if_block$1(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			header = element("header");
			if_block0.c();
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
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
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			if (if_block1) if_block1.l(section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Posts";
			attr_dev(header, "class", "svelte-1y6dfbc");
			add_location(header, file$1, 49, 1, 990);
			attr_dev(div, "class", "svelte-1y6dfbc");
			add_location(div, file$1, 56, 1, 1115);
			attr_dev(section, "class", "svelte-1y6dfbc");
			add_location(section, file$1, 48, 0, 933);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, header);
			if_block0.m(header, null);
			append_dev(section, t1);
			append_dev(section, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(section, t2);
			if (if_block1) if_block1.m(section, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(header, null);
				}
			}

			if (dirty & /*adhoc*/ 1) {
				each_value = /*adhoc*/ ctx[0];
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

			if (/*next*/ ctx[1] && /*adhoc*/ ctx[0].length === 50) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block$1(ctx);
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

	// Fetch
	const res = await this.fetch(`https://6016e904f534300017a4509d.mockapi.io/board?page=${page}&limit=50`);

	console.log("URL", res);

	// Validate
	if (res.status === 200) {
		const adhoc = await res.json();
		return { adhoc, page };
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
		if ("page" in $$props) $$invalidate(2, page = $$props.page);
	};

	$$self.$capture_state = () => ({ preload, fly, Post, adhoc, page, next });

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
		if ("page" in $$props) $$invalidate(2, page = $$props.page);
		if ("next" in $$props) $$invalidate(1, next = $$props.next);
	};

	let next;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*page*/ 4) {
			// Next
			 $$invalidate(1, next = `/posts/${+page + 1}`);
		}

		if ($$self.$$.dirty & /*adhoc*/ 1) {
			// DEVELOPER_CONSOLE_LOG
			 console.log("%c BROWSE adhoc ", "color:blue; font-weight:bold; font-size:14px", adhoc);
		}
	};

	return [adhoc, next, page];
}

class U5Bpageu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, not_equal, { adhoc: 0, page: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpageu5D",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*page*/ ctx[2] === undefined && !("page" in props)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2VdLjYwNGI3OGI3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Bvc3RzL19Qb3N0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdHMvW3BhZ2VdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgYWRob2M7XG48L3NjcmlwdD5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG4gICAgYSB7XG4gICAgICAgIC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cbiAgICBhcnRpY2xlIHtcbiAgICAgICAgLyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbiAgICBhcnRpY2xlID4gaDIge1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIC8qIFNpemluZyAqL1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblx0fVxuICAgIGFydGljbGUgPiBzdHJvbmcge1xuXHRcdHBhZGRpbmctdG9wOiB2YXIoLS1wdCk7XG5cdH1cblx0LyogRm9udHMgKi9cblx0ZHQsIHN0cm9uZyB7XG5cdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0fVxuXHRkZCwgbWFyayB7XG5cdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0fVxuXHRtYXJrOjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6IFwiI1wiO1xuXHR9XG48L3N0eWxlPlxuXG48IS0tIEhUTUwgLS0+XG48YSBocmVmPVwicG9zdC97YWRob2MuaWR9XCI+XG4gICAgPGFydGljbGU+XG4gICAgICAgIHsjaWYgYWRob2MudHlwZSA9PT0gXCJkZXNpZ25lclwifVxuICAgICAgICAgICAgPG1hcmsgc3R5bGU9XCJjb2xvcjogdmFyKC0tY29sLXRlcnQpXCI+e2FkaG9jLnR5cGV9PC9tYXJrPlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICA8bWFyayBzdHlsZT1cImNvbG9yOiB2YXIoLS1jb2wtc2VjbylcIj57YWRob2MudHlwZX08L21hcms+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIDxoMj57YWRob2MudGl0bGV9PC9oMj5cbiAgICAgICAgPGRsPlxuICAgICAgICAgICAgPGR0PnthZGhvYy5hdXRob3J9PC9kdD5cbiAgICAgICAgICAgIDxkZD57YWRob2MuY2l0eX08L2RkPlxuICAgICAgICA8L2RsPlxuICAgICAgICA8c3Ryb25nPnthZGhvYy5hbW91bnR9IHthZGhvYy5jdXJyZW5jeX0gLyB7YWRob2MucGF5dHlwZX08L3N0cm9uZz5cbiAgICA8L2FydGljbGU+XG48L2E+XG48aHI+IiwiPCEtLSBTZXJ2ZXIgLS0+XG48c3ZlbHRlOm9wdGlvbnMgaW1tdXRhYmxlIC8+XG5cbjwhLS0gU2VydmVyIC0tPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcblx0XHRjb25zdCBwYWdlID0gK3BhcmFtcy5wYWdlO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgaHR0cHM6Ly82MDE2ZTkwNGY1MzQzMDAwMTdhNDUwOWQubW9ja2FwaS5pby9ib2FyZD9wYWdlPSR7cGFnZX0mbGltaXQ9NTBgKTtcblx0XHRjb25zb2xlLmxvZyhcIlVSTFwiLCByZXMpO1xuXG5cdFx0Ly8gVmFsaWRhdGVcblx0XHRpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRjb25zdCBhZGhvYyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHRyZXR1cm4geyBhZGhvYywgcGFnZSB9O1xuXHRcdH1cblxuXHRcdC8vIEVycm9yXG5cdFx0dGhpcy5lcnJvcig1MDAsIFwiUHJvYmxlbXMgd2l0aCBzZXJ2ZXIuIEJlIHJpZ2h0IGJhY2sgc29vbiA7KVwiKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjwhLS0gQ2xpZW50IC0tPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cdGltcG9ydCBQb3N0IGZyb20gXCIuL19Qb3N0LnN2ZWx0ZVwiO1xuXG5cdC8vIEV4cG9ydGVkXG5cdGV4cG9ydCBsZXQgYWRob2MgPSBbXTtcblx0ZXhwb3J0IGxldCBwYWdlO1xuXG5cdC8vIE5leHRcblx0JDogbmV4dCA9IGAvcG9zdHMvJHsrcGFnZSArIDF9YDtcblxuXHQvLyBERVZFTE9QRVJfQ09OU09MRV9MT0dcblx0JDogY29uc29sZS5sb2coXG5cdFx0XCIlYyBCUk9XU0UgYWRob2MgXCIsXG5cdFx0XCJjb2xvcjpibHVlOyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTRweFwiLFxuXHRcdGFkaG9jXG5cdCk7XG48L3NjcmlwdD5cblxuPCEtLSBTcGVjaWFsIC0tPlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+UG9zdHM8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPCEtLSBIVE1MIC0tPlxuPHNlY3Rpb24gaW46Zmx5PXt7IGR1cmF0aW9uOiAzMjAsIHk6IDQwLCBvcGFjaXR5OiAxIH19PlxuXHQ8aGVhZGVyPlxuXHRcdHsjaWYgYWRob2MubGVuZ3RoID4gMH1cblx0XHRcdDxoMT5Cb2FyZCB7YWRob2MubGVuZ3RofTwvaDE+XG5cdFx0ezplbHNlfVxuXHRcdFx0PGgxPkVuZCBvZiB0aGUgbGlzdDwvaDE+XG5cdFx0ey9pZn1cblx0PC9oZWFkZXI+XG5cdDxkaXY+XG5cdFx0eyNlYWNoIGFkaG9jIGFzIGFkaG9jLCBpfVxuXHRcdFx0PFBvc3Qge2FkaG9jfSAvPlxuXHRcdHsvZWFjaH1cblx0PC9kaXY+XG5cdHsjaWYgbmV4dCAmJiBhZGhvYy5sZW5ndGggPT09IDUwfVxuXHRcdDxhIGNsYXNzPVwibW9yZVwiIGhyZWY9e25leHR9PlxuXHRcdFx0PHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIvc3ByaXRlLnN2ZyNwbHVzXCIgLz48L3N2Zz5cblx0XHRcdCZuYnNwO0xvYWQgbW9yZVxuXHRcdDwvYT5cblx0ey9pZn1cbjwvc2VjdGlvbj5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG5cdHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogMTAwJTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMHZ3O1xuXHRcdG1heC13aWR0aDogMTAwdnc7XG5cdFx0d2lkdGg6IDEwMHZ3O1xuXHRcdC8qIFJlc3QgKi9cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtcHJpbWUpO1xuXHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcblx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcblx0fVxuXHRzZWN0aW9uID4gZGl2IHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHR9XG5cdHNlY3Rpb24gPiBkaXYge1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IG5vbmU7XG5cdFx0bWF4LWhlaWdodDogbm9uZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0b3ZlcmZsb3c6IGF1dG87XG5cdH1cblx0aGVhZGVyIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogOHZoO1xuXHRcdG1heC1oZWlnaHQ6IDh2aDtcblx0XHRoZWlnaHQ6IDh2aDtcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0YSB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiBhdXRvO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDEuNSkgY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1wdCk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLXByaW1lbGlnaHQpO1xuXHRcdGNvbG9yOiB2YXIoLS1jb2wtYmxhY2spO1xuXHRcdG1hcmdpbjogY2FsYygodmFyKC0tcHQpICogMykpIDA7XG5cdH1cblx0c3ZnIHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdG1heC1oZWlnaHQ6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0aGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdG1pbi13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRtYXgtd2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0d2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHN0cm9rZTogdmFyKC0tY29sLWJsYWNrKTtcblx0XHRzdHJva2Utd2lkdGg6IDIuNTtcblx0XHRmaWxsOiBub25lO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7eUJBc0VrRCxHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBQVYsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFGVixHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBQVYsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkvQyxHQUFLLElBQUMsS0FBSzs7Ozs7MEJBRVAsR0FBSyxJQUFDLE1BQU07OzswQkFDWixHQUFLLElBQUMsSUFBSTs7OzswQkFFVixHQUFLLElBQUMsTUFBTTs7OzBCQUFHLEdBQUssSUFBQyxRQUFROzs7MkJBQUssR0FBSyxJQUFDLE9BQU87Ozs7Ozs7Z0JBVm5ELEdBQUssSUFBQyxJQUFJLEtBQUssVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFGdkIsR0FBSyxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQU9WLEdBQUssSUFBQyxLQUFLO2lFQUVQLEdBQUssSUFBQyxNQUFNO2lFQUNaLEdBQUssSUFBQyxJQUFJO2lFQUVWLEdBQUssSUFBQyxNQUFNO2lFQUFHLEdBQUssSUFBQyxRQUFRO21FQUFLLEdBQUssSUFBQyxPQUFPOzttRkFaakQsR0FBSyxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaEVSLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkNrRE4sR0FBSyxJQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFBWixHQUFLLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQVdGLEdBQUk7Ozs7Ozs7Ozs7O2lDQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFackIsR0FBSyxJQUFDLE1BQU0sR0FBRyxDQUFDOzs7Ozs7NEJBT2QsR0FBSzs7OztnQ0FBVixNQUFJOzs7Ozs7OzswQkFJRixHQUFJLGlCQUFJLEdBQUssSUFBQyxNQUFNLEtBQUssRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFKeEIsR0FBSzs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Z0JBSUYsR0FBSSxpQkFBSSxHQUFLLElBQUMsTUFBTSxLQUFLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSjdCLE1BQUk7Ozs7OzswREFUVyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTNDNUIsT0FBTyxHQUFHLE1BQU07T0FDL0IsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJOzs7T0FFbkIsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLDJEQUEyRCxJQUFJOztDQUMzRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHOzs7S0FHbEIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHO1FBQ2YsS0FBSyxTQUFTLEdBQUcsQ0FBQyxJQUFJO1dBQ25CLEtBQUssRUFBRSxJQUFJOzs7O0NBSXJCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDZDQUE2Qzs7OztPQVVuRCxLQUFLO09BQ0wsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR1osSUFBSSxjQUFjLElBQUksR0FBRyxDQUFDOzs7OztJQUcxQixPQUFPLENBQUMsR0FBRyxDQUNiLGtCQUFrQixFQUNsQiw4Q0FBOEMsRUFDOUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
