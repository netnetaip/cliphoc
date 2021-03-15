import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, o as set_data_dev, n as noop, p as globals, r as not_equal, q as query_selector_all, u as transition_out, w as check_outros, x as transition_in, y as add_render_callback, z as create_in_transition, A as validate_each_argument, B as create_component, C as claim_component, D as mount_component, E as destroy_component, F as group_outros, G as destroy_each } from './client.99acff61.js';
import { f as fly } from './index.ff7bd4a9.js';

/* src/routes/board/_post.svelte generated by Svelte v3.24.1 */

const file = "src/routes/board/_post.svelte";

// (18:3) {:else}
function create_else_block(ctx) {
	let t0_value = /*adhoc*/ ctx[0].amount + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			t0 = text(t0_value);
			t1 = text("€");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, t0_value);
			t1 = claim_text(nodes, "€");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t0_value !== (t0_value = /*adhoc*/ ctx[0].amount + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(18:3) {:else}",
		ctx
	});

	return block;
}

// (16:3) {#if adhoc.hour}
function create_if_block(ctx) {
	let t0_value = /*adhoc*/ ctx[0].amount + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			t0 = text(t0_value);
			t1 = text("€/h");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, t0_value);
			t1 = claim_text(nodes, "€/h");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t0_value !== (t0_value = /*adhoc*/ ctx[0].amount + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(16:3) {#if adhoc.hour}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let a;
	let article;
	let h2;
	let t0_value = /*adhoc*/ ctx[0].title + "";
	let t0;
	let t1;
	let dl;
	let dt;
	let t2_value = /*adhoc*/ ctx[0].author + "";
	let t2;
	let dd;
	let t3_value = /*adhoc*/ ctx[0].city + "";
	let t3;
	let t4;
	let strong;
	let a_href_value;
	let t5;
	let hr;

	function select_block_type(ctx, dirty) {
		if (/*adhoc*/ ctx[0].hour) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			a = element("a");
			article = element("article");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			dl = element("dl");
			dt = element("dt");
			t2 = text(t2_value);
			dd = element("dd");
			t3 = text(t3_value);
			t4 = space();
			strong = element("strong");
			if_block.c();
			t5 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			article = claim_element(a_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			h2 = claim_element(article_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(article_nodes);
			dl = claim_element(article_nodes, "DL", {});
			var dl_nodes = children(dl);
			dt = claim_element(dl_nodes, "DT", {});
			var dt_nodes = children(dt);
			t2 = claim_text(dt_nodes, t2_value);
			dt_nodes.forEach(detach_dev);
			dd = claim_element(dl_nodes, "DD", {});
			var dd_nodes = children(dd);
			t3 = claim_text(dd_nodes, t3_value);
			dd_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			t4 = claim_space(article_nodes);
			strong = claim_element(article_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			if_block.l(strong_nodes);
			strong_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-3u30rx");
			add_location(h2, file, 7, 2, 93);
			add_location(dt, file, 11, 3, 133);
			add_location(dd, file, 12, 3, 160);
			add_location(dl, file, 10, 2, 125);
			attr_dev(strong, "class", "svelte-3u30rx");
			add_location(strong, file, 14, 2, 192);
			attr_dev(article, "class", "svelte-3u30rx");
			add_location(article, file, 6, 1, 81);
			attr_dev(a, "href", a_href_value = "post/" + /*adhoc*/ ctx[0].id);
			attr_dev(a, "class", "svelte-3u30rx");
			add_location(a, file, 5, 0, 53);
			add_location(hr, file, 23, 0, 322);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, article);
			append_dev(article, h2);
			append_dev(h2, t0);
			append_dev(article, t1);
			append_dev(article, dl);
			append_dev(dl, dt);
			append_dev(dt, t2);
			append_dev(dl, dd);
			append_dev(dd, t3);
			append_dev(article, t4);
			append_dev(article, strong);
			if_block.m(strong, null);
			insert_dev(target, t5, anchor);
			insert_dev(target, hr, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*adhoc*/ 1 && t0_value !== (t0_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*adhoc*/ 1 && t2_value !== (t2_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t2, t2_value);
			if (dirty & /*adhoc*/ 1 && t3_value !== (t3_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t3, t3_value);

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(strong, null);
				}
			}

			if (dirty & /*adhoc*/ 1 && a_href_value !== (a_href_value = "post/" + /*adhoc*/ ctx[0].id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if_block.d();
			if (detaching) detach_dev(t5);
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

/* src/routes/board/[paginate].svelte generated by Svelte v3.24.1 */

const { console: console_1 } = globals;
const file$1 = "src/routes/board/[paginate].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (53:2) {:else}
function create_else_block_1(ctx) {
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
			add_location(h1, file$1, 53, 3, 1144);
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
		id: create_else_block_1.name,
		type: "else",
		source: "(53:2) {:else}",
		ctx
	});

	return block;
}

// (50:2) {#if apid.length > 0}
function create_if_block_2(ctx) {
	let h1;
	let t0;
	let t1;
	let p;
	let t2;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Job board");
			t1 = space();
			p = element("p");
			t2 = text("Use filter for easier find");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Job board");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Use filter for easier find");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 50, 3, 1075);
			add_location(p, file$1, 51, 3, 1097);
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
		id: create_if_block_2.name,
		type: "if",
		source: "(50:2) {#if apid.length > 0}",
		ctx
	});

	return block;
}

// (64:1) {:else}
function create_else_block$1(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("Ooopsy!");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, "Ooopsy!");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file$1, 64, 2, 1301);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(64:1) {:else}",
		ctx
	});

	return block;
}

// (58:1) {#if apid}
function create_if_block_1(ctx) {
	let div;
	let current;
	let each_value = /*apid*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "svelte-z8qrf9");
			add_location(div, file$1, 58, 2, 1218);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*apid*/ 1) {
				each_value = /*apid*/ ctx[0];
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
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
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
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(58:1) {#if apid}",
		ctx
	});

	return block;
}

// (60:3) {#each apid as adhoc}
function create_each_block(ctx) {
	let post;
	let current;

	post = new Post({
			props: { adhoc: /*adhoc*/ ctx[3] },
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
			if (dirty & /*apid*/ 1) post_changes.adhoc = /*adhoc*/ ctx[3];
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
		source: "(60:3) {#each apid as adhoc}",
		ctx
	});

	return block;
}

// (67:1) {#if apid.length = 50}
function create_if_block$1(ctx) {
	let a;
	let t;

	const block = {
		c: function create() {
			a = element("a");
			t = text("Next page");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, "Next page");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", /*next*/ ctx[1]);
			attr_dev(a, "class", "svelte-z8qrf9");
			add_location(a, file$1, 67, 2, 1349);
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
		id: create_if_block$1.name,
		type: "if",
		source: "(67:1) {#if apid.length = 50}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let section;
	let header;
	let t1;
	let current_block_type_index;
	let if_block1;
	let t2;
	let section_intro;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*apid*/ ctx[0].length > 0) return create_if_block_2;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);
	const if_block_creators = [create_if_block_1, create_else_block$1];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*apid*/ ctx[0]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let if_block2 = (/*apid*/ ctx[0].length = 50) && create_if_block$1(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			header = element("header");
			if_block0.c();
			t1 = space();
			if_block1.c();
			t2 = space();
			if (if_block2) if_block2.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mlai1k\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			header = claim_element(section_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			if_block0.l(header_nodes);
			header_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			if_block1.l(section_nodes);
			t2 = claim_space(section_nodes);
			if (if_block2) if_block2.l(section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Board";
			attr_dev(header, "class", "svelte-z8qrf9");
			add_location(header, file$1, 48, 1, 1039);
			attr_dev(section, "class", "svelte-z8qrf9");
			add_location(section, file$1, 47, 0, 982);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, header);
			if_block0.m(header, null);
			append_dev(section, t1);
			if_blocks[current_block_type_index].m(section, null);
			append_dev(section, t2);
			if (if_block2) if_block2.m(section, null);
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

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block1 = if_blocks[current_block_type_index];

				if (!if_block1) {
					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block1.c();
				}

				transition_in(if_block1, 1);
				if_block1.m(section, t2);
			}

			if (/*apid*/ ctx[0].length = 50) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block$1(ctx);
					if_block2.c();
					if_block2.m(section, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block1);

			if (!section_intro) {
				add_render_callback(() => {
					section_intro = create_in_transition(section, fly, { duration: 320, y: 40, opacity: 1 });
					section_intro.start();
				});
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			if_block0.d();
			if_blocks[current_block_type_index].d();
			if (if_block2) if_block2.d();
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
	const { paginate } = params;
	const limit = 50;
	const res = await this.fetch(`https://6016e904f534300017a4509d.mockapi.io/board?page=${paginate}&limit=${limit}`);

	// Validate
	if (res.status === 200) {
		const apid = await res.json();
		return { apid, paginate, limit };
	}

	// Error
	this.error(500, "Problems with server. Be right back soon.");
}

function instance$1($$self, $$props, $$invalidate) {
	let { paginate } = $$props;
	let { apid } = $$props;
	const writable_props = ["paginate", "apid"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bpaginateu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bpaginateu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("paginate" in $$props) $$invalidate(2, paginate = $$props.paginate);
		if ("apid" in $$props) $$invalidate(0, apid = $$props.apid);
	};

	$$self.$capture_state = () => ({ preload, fly, Post, paginate, apid, next });

	$$self.$inject_state = $$props => {
		if ("paginate" in $$props) $$invalidate(2, paginate = $$props.paginate);
		if ("apid" in $$props) $$invalidate(0, apid = $$props.apid);
		if ("next" in $$props) $$invalidate(1, next = $$props.next);
	};

	let next;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*paginate*/ 4) {
			// Load More
			 $$invalidate(1, next = `/board/${+paginate + 1}`);
		}

		if ($$self.$$.dirty & /*apid*/ 1) {
			// DEVELOPER_CONSOLE_LOG
			 console.log("%c Stored ", "color:blue; font-weight:bold; font-size:14px", apid);
		}
	};

	return [apid, next, paginate];
}

class U5Bpaginateu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, not_equal, { paginate: 2, apid: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpaginateu5D",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*paginate*/ ctx[2] === undefined && !("paginate" in props)) {
			console_1.warn("<U5Bpaginateu5D> was created without expected prop 'paginate'");
		}

		if (/*apid*/ ctx[0] === undefined && !("apid" in props)) {
			console_1.warn("<U5Bpaginateu5D> was created without expected prop 'apid'");
		}
	}

	get paginate() {
		throw new Error("<U5Bpaginateu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set paginate(value) {
		throw new Error("<U5Bpaginateu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get apid() {
		throw new Error("<U5Bpaginateu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set apid(value) {
		throw new Error("<U5Bpaginateu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bpaginateu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2luYXRlXS5mM2UwNmJjZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9ib2FyZC9fcG9zdC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2JvYXJkL1twYWdpbmF0ZV0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgYWRob2M7XG48L3NjcmlwdD5cblxuPCEtLSBIVE1MIC0tPlxuPGEgaHJlZj1cInBvc3Qve2FkaG9jLmlkfVwiPlxuXHQ8YXJ0aWNsZT5cblx0XHQ8aDI+XG5cdFx0XHR7YWRob2MudGl0bGV9XG5cdFx0PC9oMj5cblx0XHQ8ZGw+XG5cdFx0XHQ8ZHQ+e2FkaG9jLmF1dGhvcn08L2R0PlxuXHRcdFx0PGRkPnthZGhvYy5jaXR5fTwvZGQ+XG5cdFx0PC9kbD5cblx0XHQ8c3Ryb25nPlxuXHRcdFx0eyNpZiBhZGhvYy5ob3VyfVxuXHRcdFx0XHR7YWRob2MuYW1vdW50fSZldXJvOy9oXG5cdFx0XHR7OmVsc2V9XG5cdFx0XHRcdHthZGhvYy5hbW91bnR9JmV1cm87XG5cdFx0XHR7L2lmfVxuXHRcdDwvc3Ryb25nPlxuXHQ8L2FydGljbGU+XG48L2E+XG48aHIgLz5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG5cdGEge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGFydGljbGUge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGFydGljbGUgPiBoMiB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGFydGljbGUgPiBzdHJvbmcge1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpIC8gMikgMDtcblx0fVxuPC9zdHlsZT5cbiIsIjxzdmVsdGU6b3B0aW9ucyBpbW11dGFibGUgLz5cblxuPCEtLSBTZXJ2ZXIgLS0+XG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0Ly8gRmV0Y2hcblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMgfSkge1xuXHRcdGNvbnN0IHsgcGFnaW5hdGUgfSA9IHBhcmFtcztcblx0XHRjb25zdCBsaW1pdCA9IDUwO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGh0dHBzOi8vNjAxNmU5MDRmNTM0MzAwMDE3YTQ1MDlkLm1vY2thcGkuaW8vYm9hcmQ/cGFnZT0ke3BhZ2luYXRlfSZsaW1pdD0ke2xpbWl0fWApXG5cdFx0Ly8gVmFsaWRhdGVcblx0XHRpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRjb25zdCBhcGlkID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRcdHJldHVybiB7IGFwaWQsIHBhZ2luYXRlLCBsaW1pdCB9XG5cdFx0fVxuXG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uLlwiKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjwhLS0gQ2xpZW50IC0tPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cdGltcG9ydCBQb3N0IGZyb20gXCIuL19wb3N0LnN2ZWx0ZVwiO1xuXHQvLyBpbXBvcnQgRmlsdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpbHRlci5zdmVsdGVcIjtcblxuXHQvLyBFeHBvcnRlZFxuXHRleHBvcnQgbGV0IHBhZ2luYXRlO1xuXHRleHBvcnQgbGV0IGFwaWQ7XG5cblx0Ly8gTG9hZCBNb3JlXG5cdCQ6IG5leHQgPSBgL2JvYXJkLyR7K3BhZ2luYXRlICsgMX1gO1xuXG5cdC8vIERFVkVMT1BFUl9DT05TT0xFX0xPR1xuXHQkOiBjb25zb2xlLmxvZyhcblx0XHRcIiVjIFN0b3JlZCBcIixcblx0XHRcImNvbG9yOmJsdWU7IGZvbnQtd2VpZ2h0OmJvbGQ7IGZvbnQtc2l6ZToxNHB4XCIsXG5cdFx0YXBpZFxuXHQpO1xuPC9zY3JpcHQ+XG5cbjwhLS0gU3BlY2lhbCAtLT5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkJvYXJkPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjwhLS0gSFRNTCAtLT5cbjxzZWN0aW9uIGluOmZseT17eyBkdXJhdGlvbjogMzIwLCB5OiA0MCwgb3BhY2l0eTogMSB9fT5cblx0PGhlYWRlcj5cblx0XHR7I2lmIGFwaWQubGVuZ3RoID4gMH1cblx0XHRcdDxoMT5Kb2IgYm9hcmQ8L2gxPlxuXHRcdFx0PHA+VXNlIGZpbHRlciBmb3IgZWFzaWVyIGZpbmQ8L3A+XG5cdFx0ezplbHNlfVxuXHRcdFx0PGgxPkxpc3QgZW5kZWQ8L2gxPlxuXHRcdHsvaWZ9XG5cdDwvaGVhZGVyPlxuXHQ8IS0tIDxGaWx0ZXIgLz4gLS0+XG5cdHsjaWYgYXBpZH1cblx0XHQ8ZGl2PlxuXHRcdFx0eyNlYWNoIGFwaWQgYXMgYWRob2N9XG5cdFx0XHRcdDxQb3N0IHthZGhvY30gLz5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L2Rpdj5cblx0ezplbHNlfVxuXHRcdDxwPk9vb3BzeSE8L3A+XG5cdHsvaWZ9XG5cdHsjaWYgYXBpZC5sZW5ndGggPSA1MH1cblx0XHQ8YSBocmVmPXtuZXh0fT5OZXh0IHBhZ2U8L2E+XG5cdHsvaWZ9XG48L3NlY3Rpb24+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRzZWN0aW9uLCBzZWN0aW9uID4gZGl2LCBoZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXHRhIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cblx0c2VjdGlvbiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0bWF4LWhlaWdodDogbm9uZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bWluLXdpZHRoOiAxMDB2dztcblx0XHRtYXgtd2lkdGg6IDEwMHZ3O1xuXHRcdHdpZHRoOiAxMDB2dztcblx0XHQvKiBSZXN0ICovXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLXByaW1lKTtcblx0XHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuXHR9XG5cdHNlY3Rpb24gPiBkaXYge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0fVxuXHRzZWN0aW9uID4gZGl2IHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0aGVhZGVyIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogbm9uZTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0YSB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogbm9uZTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtICh2YXIoLS1wdCkgKiA2KSk7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMikgY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1wdCk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLXByaW1lbGlnaHQpO1xuXHRcdGNvbG9yOiB2YXIoLS1jb2wtYmxhY2spO1xuXHRcdG1hcmdpbjogY2FsYygodmFyKC0tcHQpICogMykpIDA7XG5cdFx0LyogVHJhbnNpdGlvbiAqL1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjQ0LCAwLjIxLCAwLCAxKTtcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHR9XG5cdGE6aG92ZXIsIGE6YWN0aXZlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlM2QoMC45NiwgMC45NiwgMSk7XG5cdH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzBCQWtCSyxHQUFLLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQUFaLEdBQUssSUFBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRlosR0FBSyxJQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFBWixHQUFLLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUmIsR0FBSyxJQUFDLEtBQUs7Ozs7OzBCQUdQLEdBQUssSUFBQyxNQUFNOzs7MEJBQ1osR0FBSyxJQUFDLElBQUk7Ozs7Ozs7OztnQkFHVixHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBVkgsR0FBSyxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQUduQixHQUFLLElBQUMsS0FBSztpRUFHUCxHQUFLLElBQUMsTUFBTTtpRUFDWixHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7bUZBUEgsR0FBSyxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BSlgsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkMwRFAsR0FBSTs7OztnQ0FBVCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBQyxHQUFJOzs7OytCQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBUUUsR0FBSTs7Ozs7Ozs7OztpQ0FBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBbEJSLEdBQUksSUFBQyxNQUFNLEdBQUcsQ0FBQzs7Ozs7Ozs7OztlQVFoQixHQUFJOzs7Ozs7MkJBU0osR0FBSSxJQUFDLE1BQU0sR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBQWhCLEdBQUksSUFBQyxNQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFuQkgsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBMUM1QixPQUFPLEdBQUcsTUFBTTtTQUM3QixRQUFRLEtBQUssTUFBTTtPQUNyQixLQUFLLEdBQUcsRUFBRTtPQUNWLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSywyREFBMkQsUUFBUSxVQUFVLEtBQUs7OztLQUUxRyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7UUFDZixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7V0FDbEIsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLOzs7O0NBSS9CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDJDQUEyQzs7OztPQVdqRCxRQUFRO09BQ1IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR1osSUFBSSxjQUFjLFFBQVEsR0FBRyxDQUFDOzs7OztJQUc5QixPQUFPLENBQUMsR0FBRyxDQUNiLFlBQVksRUFDWiw4Q0FBOEMsRUFDOUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
