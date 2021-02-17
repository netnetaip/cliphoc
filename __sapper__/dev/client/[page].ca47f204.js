import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, o as set_data_dev, n as noop, p as validate_each_argument, r as listen_dev, u as prevent_default, w as destroy_each, x as bubble, y as globals, z as not_equal, A as create_component, B as claim_component, C as mount_component, D as transition_in, E as transition_out, F as destroy_component, q as query_selector_all, G as check_outros, H as add_render_callback, I as create_in_transition, J as group_outros } from './client.17fa09ad.js';
import { f as fly } from './index.ff7bd4a9.js';

/* src/routes/board/_post.svelte generated by Svelte v3.24.1 */

const file = "src/routes/board/_post.svelte";

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
			mark = claim_element(article_nodes, "MARK", {});
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
			add_location(mark, file, 12, 2, 304);
			attr_dev(h2, "class", "svelte-7haa9v");
			add_location(h2, file, 13, 2, 332);
			add_location(dt, file, 15, 3, 365);
			add_location(dd, file, 16, 3, 392);
			add_location(dl, file, 14, 2, 357);
			attr_dev(strong, "class", "svelte-7haa9v");
			add_location(strong, file, 18, 2, 424);
			attr_dev(article, "class", "svelte-7haa9v");
			add_location(article, file, 6, 1, 81);
			attr_dev(a, "href", a_href_value = "post/" + /*adhoc*/ ctx[0].id);
			attr_dev(a, "class", "svelte-7haa9v");
			add_location(a, file, 5, 0, 53);
			add_location(hr, file, 21, 0, 508);
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

/* src/components/Filter.svelte generated by Svelte v3.24.1 */

const file$1 = "src/components/Filter.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (16:8) {#each labels as label}
function create_each_block(ctx) {
	let option;
	let t_value = /*label*/ ctx[2] + "";
	let t;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			option = claim_element(nodes, "OPTION", { value: true });
			var option_nodes = children(option);
			t = claim_text(option_nodes, t_value);
			option_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			option.__value = option_value_value = /*label*/ ctx[2];
			option.value = option.__value;
			add_location(option, file$1, 16, 12, 416);
		},
		m: function mount(target, anchor) {
			insert_dev(target, option, anchor);
			append_dev(option, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(16:8) {#each labels as label}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let form;
	let select;
	let t0;
	let t1;
	let mounted;
	let dispose;
	let each_value = /*labels*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			form = element("form");
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			t1 = text(label);
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { class: true });
			var form_nodes = children(form);
			select = claim_element(form_nodes, "SELECT", { name: true, id: true, class: true });
			var select_nodes = children(select);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(select_nodes);
			}

			select_nodes.forEach(detach_dev);
			t0 = claim_space(form_nodes);
			t1 = claim_text(form_nodes, label);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(select, "name", "labels");
			attr_dev(select, "id", "labels");
			attr_dev(select, "class", "svelte-1851zsd");
			add_location(select, file$1, 14, 4, 337);
			attr_dev(form, "class", "svelte-1851zsd");
			add_location(form, file$1, 13, 0, 301);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, select);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			append_dev(form, t0);
			append_dev(form, t1);

			if (!mounted) {
				dispose = listen_dev(form, "submit", prevent_default(/*submit_handler*/ ctx[1]), false, true, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*labels*/ 1) {
				each_value = /*labels*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
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

function instance$1($$self, $$props, $$invalidate) {
	let labels = ["designer", "developer", "all"];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Filter> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Filter", $$slots, []);

	function submit_handler(event) {
		bubble($$self, event);
	}

	$$self.$capture_state = () => ({ labels });

	$$self.$inject_state = $$props => {
		if ("labels" in $$props) $$invalidate(0, labels = $$props.labels);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [labels, submit_handler];
}

class Filter extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Filter",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/board/[page].svelte generated by Svelte v3.24.1 */

const { console: console_1 } = globals;
const file$2 = "src/routes/board/[page].svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[5] = i;
	return child_ctx;
}

// (56:2) {:else}
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
			add_location(h1, file$2, 56, 3, 1229);
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
		source: "(56:2) {:else}",
		ctx
	});

	return block;
}

// (53:2) {#if adhoc.length > 0}
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
			add_location(h1, file$2, 53, 3, 1110);
			add_location(p, file$2, 54, 3, 1128);
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
		source: "(53:2) {#if adhoc.length > 0}",
		ctx
	});

	return block;
}

// (64:2) {#each adhoc as adhoc, i}
function create_each_block$1(ctx) {
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
		id: create_each_block$1.name,
		type: "each",
		source: "(64:2) {#each adhoc as adhoc, i}",
		ctx
	});

	return block;
}

// (68:1) {#if next && adhoc.length === limit}
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
			attr_dev(a, "class", "more svelte-18vc8q9");
			attr_dev(a, "href", /*next*/ ctx[2]);
			add_location(a, file$2, 68, 2, 1413);
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
		source: "(68:1) {#if next && adhoc.length === limit}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let t0;
	let section;
	let header;
	let t1;
	let hr0;
	let t2;
	let filter;
	let t3;
	let hr1;
	let t4;
	let div;
	let t5;
	let section_intro;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*adhoc*/ ctx[1].length > 0) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);

	filter = new Filter({
			props: { adhoc: /*adhoc*/ ctx[1] },
			$$inline: true
		});

	let each_value = /*adhoc*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
			hr0 = element("hr");
			t2 = space();
			create_component(filter.$$.fragment);
			t3 = space();
			hr1 = element("hr");
			t4 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			if (if_block1) if_block1.c();
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
			hr0 = claim_element(section_nodes, "HR", {});
			t2 = claim_space(section_nodes);
			claim_component(filter.$$.fragment, section_nodes);
			t3 = claim_space(section_nodes);
			hr1 = claim_element(section_nodes, "HR", {});
			t4 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			if (if_block1) if_block1.l(section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Board";
			attr_dev(header, "class", "svelte-18vc8q9");
			add_location(header, file$2, 51, 1, 1073);
			add_location(hr0, file$2, 59, 1, 1269);
			add_location(hr1, file$2, 61, 1, 1295);
			attr_dev(div, "class", "svelte-18vc8q9");
			add_location(div, file$2, 62, 1, 1301);
			attr_dev(section, "class", "svelte-18vc8q9");
			add_location(section, file$2, 50, 0, 1016);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, header);
			if_block0.m(header, null);
			append_dev(section, t1);
			append_dev(section, hr0);
			append_dev(section, t2);
			mount_component(filter, section, null);
			append_dev(section, t3);
			append_dev(section, hr1);
			append_dev(section, t4);
			append_dev(section, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(section, t5);
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

			const filter_changes = {};
			if (dirty & /*adhoc*/ 2) filter_changes.adhoc = /*adhoc*/ ctx[1];
			filter.$set(filter_changes);

			if (dirty & /*adhoc*/ 2) {
				each_value = /*adhoc*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
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
			transition_in(filter.$$.fragment, local);

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
			transition_out(filter.$$.fragment, local);
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
			destroy_component(filter);
			destroy_each(each_blocks, detaching);
			if (if_block1) if_block1.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
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

function instance$2($$self, $$props, $$invalidate) {
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
		Filter,
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
			 $$invalidate(2, next = `/board/${+page + 1}`);
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
		init(this, options, instance$2, create_fragment$2, not_equal, { adhoc: 1, page: 3, limit: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpageu5D",
			options,
			id: create_fragment$2.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2VdLmNhNDdmMjA0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2JvYXJkL19wb3N0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZpbHRlci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2JvYXJkL1twYWdlXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBhZGhvYztcbjwvc2NyaXB0PlxuXG48IS0tIEhUTUwgLS0+XG48YSBocmVmPVwicG9zdC97YWRob2MuaWR9XCI+XG5cdDxhcnRpY2xlPlxuXHRcdDwhLS0geyNpZiBhZGhvYy50eXBlID09PSBcImRlc2lnbmVyXCJ9XG4gICAgICAgICAgICA8bWFyayBzdHlsZT1cImNvbG9yOiB2YXIoLS1jb2wtdGVydClcIj57YWRob2MudHlwZX08L21hcms+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgIDxtYXJrIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbC1zZWNvKVwiPnthZGhvYy50eXBlfTwvbWFyaz5cbiAgICAgICAgey9pZn0gLS0+XG5cdFx0PG1hcms+e2FkaG9jLnR5cGV9PC9tYXJrPlxuXHRcdDxoMj57YWRob2MudGl0bGV9PC9oMj5cblx0XHQ8ZGw+XG5cdFx0XHQ8ZHQ+e2FkaG9jLmF1dGhvcn08L2R0PlxuXHRcdFx0PGRkPnthZGhvYy5jaXR5fTwvZGQ+XG5cdFx0PC9kbD5cblx0XHQ8c3Ryb25nPnthZGhvYy5hbW91bnR9IHthZGhvYy5jdXJyZW5jeX0gLyB7YWRob2MucGF5dHlwZX08L3N0cm9uZz5cblx0PC9hcnRpY2xlPlxuPC9hPlxuPGhyIC8+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRhIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IG5vbmU7XG5cdFx0bWF4LWhlaWdodDogbm9uZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGFydGljbGUge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGFydGljbGUgPiBoMiB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGFydGljbGUgPiBzdHJvbmcge1xuXHRcdHBhZGRpbmctdG9wOiB2YXIoLS1wdCk7XG5cdH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuICAgIC8vIFByb3BzXG4gICAgbGV0IGxhYmVscyA9IFtcImRlc2lnbmVyXCIsIFwiZGV2ZWxvcGVyXCIsIFwiYWxsXCJdO1xuXG4gICAgLy8gLy8gQ2hlY2tib3ggRmlsdGVyaW5nXG4gICAgLy8gY29uc3Qgc3ViYnlodWJieSA9ICgpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIChjYXJkcyA9IGxpc3QuZmlsdGVyKCh7IHRhZ3MgfSkgPT5cbiAgICAvLyAgICAgICAgIGNoZWNrZ3JvdXAuZXZlcnkoKHRhZykgPT4gdGFncy5pbmNsdWRlcyh0YWcpKVxuICAgIC8vICAgICApKTtcbiAgICAvLyB9O1xuPC9zY3JpcHQ+XG5cbjwhLS0gSFRNTCAtLT5cbjxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD5cbiAgICA8c2VsZWN0IG5hbWU9XCJsYWJlbHNcIiBpZD1cImxhYmVsc1wiPlxuICAgICAgICB7I2VhY2ggbGFiZWxzIGFzIGxhYmVsfVxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bGFiZWx9PntsYWJlbH08L29wdGlvbj5cbiAgICAgICAgey9lYWNofVxuICAgIDwvc2VsZWN0PlxuICAgIHtsYWJlbH1cbjwvZm9ybT5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG4gICAgZm9ybSwgc2VsZWN0IHtcbiAgICAgICAgLyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzZWxlY3Qge1xuICAgICAgICAvKiBBcHBlYXJhbmNlICovXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAvKiBSZXN0ICovXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMikgY2FsYyh2YXIoLS1wdCkgKiAzKTtcbiAgICB9XG48L3N0eWxlPlxuIiwiPCEtLSBTZXJ2ZXIgLS0+XG48c3ZlbHRlOm9wdGlvbnMgaW1tdXRhYmxlIC8+XG5cbjwhLS0gU2VydmVyIC0tPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcblx0XHRjb25zdCBwYWdlID0gK3BhcmFtcy5wYWdlO1xuXHRcdGNvbnN0IGxpbWl0ID0gNTA7XG5cdFx0Ly8gRmV0Y2hcblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWApXG5cblx0XHQvLyBWYWxpZGF0ZVxuXHRcdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGFkaG9jID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRcdHJldHVybiB7IGFkaG9jLCBwYWdlLCBsaW1pdCB9O1xuXHRcdH1cblxuXHRcdC8vIEVycm9yXG5cdFx0dGhpcy5lcnJvcig1MDAsIFwiUHJvYmxlbXMgd2l0aCBzZXJ2ZXIuIEJlIHJpZ2h0IGJhY2sgc29vbiA7KVwiKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjwhLS0gQ2xpZW50IC0tPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cdGltcG9ydCBQb3N0IGZyb20gXCIuL19wb3N0LnN2ZWx0ZVwiO1xuXHRpbXBvcnQgRmlsdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpbHRlci5zdmVsdGVcIjtcblxuXHQvLyBFeHBvcnRlZFxuXHRleHBvcnQgbGV0IGFkaG9jID0gW107XG5cdGV4cG9ydCBsZXQgcGFnZTtcblx0ZXhwb3J0IGxldCBsaW1pdDtcblxuXHQvLyBMb2FkIE1vcmVcblx0JDogbmV4dCA9IGAvYm9hcmQvJHsrcGFnZSArIDF9YDtcblxuXHQvLyBERVZFTE9QRVJfQ09OU09MRV9MT0dcblx0JDogY29uc29sZS5sb2coXG5cdFx0XCIlYyBCUk9XU0UgYWRob2MgXCIsXG5cdFx0XCJjb2xvcjpibHVlOyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTRweFwiLFxuXHRcdGFkaG9jXG5cdCk7XG48L3NjcmlwdD5cblxuPCEtLSBTcGVjaWFsIC0tPlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+Qm9hcmQ8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPCEtLSBIVE1MIC0tPlxuPHNlY3Rpb24gaW46Zmx5PXt7IGR1cmF0aW9uOiAzMjAsIHk6IDQwLCBvcGFjaXR5OiAxIH19PlxuXHQ8aGVhZGVyPlxuXHRcdHsjaWYgYWRob2MubGVuZ3RoID4gMH1cblx0XHRcdDxoMT5Cb2FyZDwvaDE+XG5cdFx0XHQ8cD5IZXJlIHlvdSBjYW4gZmluZCBwb3N0cyBieSBjb21tdW5pdHkuIFNjcm9sbCB0byBzZWFyY2ggc29tZXRoaW5nLiBCbGEsIGJsYSwgYmxhLjwvcD5cblx0XHR7OmVsc2V9XG5cdFx0XHQ8aDE+TGlzdCBlbmRlZDwvaDE+XG5cdFx0ey9pZn1cblx0PC9oZWFkZXI+XG5cdDxocj5cblx0PEZpbHRlciB7YWRob2N9IC8+XG5cdDxocj5cblx0PGRpdj5cblx0XHR7I2VhY2ggYWRob2MgYXMgYWRob2MsIGl9XG5cdFx0XHQ8UG9zdCB7YWRob2N9IC8+XG5cdFx0ey9lYWNofVxuXHQ8L2Rpdj5cblx0eyNpZiBuZXh0ICYmIGFkaG9jLmxlbmd0aCA9PT0gbGltaXR9XG5cdFx0PGEgY2xhc3M9XCJtb3JlXCIgaHJlZj17bmV4dH0+TmV4dCBwYWdlPC9hPlxuXHR7L2lmfVxuPC9zZWN0aW9uPlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cblx0c2VjdGlvbiwgc2VjdGlvbiA+IGRpdiwgaGVhZGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblx0YSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR9XG5cdHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwdnc7XG5cdFx0bWF4LXdpZHRoOiAxMDB2dztcblx0XHR3aWR0aDogMTAwdnc7XG5cdFx0LyogUmVzdCAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1wcmltZSk7XG5cdFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcblx0fVxuXHRzZWN0aW9uID4gZGl2IHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdH1cblx0c2VjdGlvbiA+IGRpdiB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0YSB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogbm9uZTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtICh2YXIoLS1wdCkgKiA2KSk7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMikgY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1wdCk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLXByaW1lbGlnaHQpO1xuXHRcdGNvbG9yOiB2YXIoLS1jb2wtYmxhY2spO1xuXHRcdG1hcmdpbjogY2FsYygodmFyKC0tcHQpICogMykpIDA7XG5cdFx0LyogVHJhbnNpdGlvbiAqL1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjQ0LCAwLjIxLCAwLCAxKTtcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHR9XG5cdGE6aG92ZXIsIGE6YWN0aXZlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlM2QoMC45NiwgMC45NiwgMSk7XG5cdH1cblx0c3ZnIHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdG1heC1oZWlnaHQ6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0aGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdG1pbi13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRtYXgtd2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0d2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHN0cm9rZTogdmFyKC0tY29sLWJsYWNrKTtcblx0XHRzdHJva2Utd2lkdGg6IDIuNTtcblx0XHRmaWxsOiBub25lO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzBCQVlTLEdBQUssSUFBQyxJQUFJOzs7OzBCQUNaLEdBQUssSUFBQyxLQUFLOzs7OzswQkFFVixHQUFLLElBQUMsTUFBTTs7OzBCQUNaLEdBQUssSUFBQyxJQUFJOzs7OzBCQUVQLEdBQUssSUFBQyxNQUFNOzs7MEJBQUcsR0FBSyxJQUFDLFFBQVE7OzsyQkFBSyxHQUFLLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQWIzQyxHQUFLLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQU9kLEdBQUssSUFBQyxJQUFJO2lFQUNaLEdBQUssSUFBQyxLQUFLO2lFQUVWLEdBQUssSUFBQyxNQUFNO2lFQUNaLEdBQUssSUFBQyxJQUFJO2lFQUVQLEdBQUssSUFBQyxNQUFNO2lFQUFHLEdBQUssSUFBQyxRQUFRO21FQUFLLEdBQUssSUFBQyxPQUFPOzttRkFiM0MsR0FBSyxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
