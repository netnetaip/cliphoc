import { w as writable, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, t as text, h as claim_text, l as insert_dev, b as detach_dev, e as element, a as space, f as claim_element, g as children, c as claim_space, j as attr_dev, k as add_location, m as append_dev, o as set_data_dev, n as noop, p as not_equal, r as globals, u as validate_each_argument, x as svg_element, y as xlink_attr, z as listen_dev, A as is_function, B as run_all, C as prevent_default, D as destroy_each, E as bubble, F as validate_store, G as component_subscribe, q as query_selector_all, H as add_render_callback, I as create_in_transition } from './client.8a9bd515.js';
import { f as fly } from './index.ff7bd4a9.js';

function preload(url) {
    const adhoc = writable(new Promise(() => { }));

    // Fetch
    const load = async () => {
        const res = await this.fetch(url);
        const data = await res.json();
        adhoc.set(Promise.resolve(data));
    };

    load();
    return adhoc;
}

/* src/routes/board/_post.svelte generated by Svelte v3.24.1 */

const file = "src/routes/board/_post.svelte";

// (17:3) {#if adhoc.hour}
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
		source: "(17:3) {#if adhoc.hour}",
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
	let t5_value = /*adhoc*/ ctx[0].amount + "";
	let t5;
	let t6;
	let a_href_value;
	let t7;
	let hr;
	let if_block = /*adhoc*/ ctx[0].hour && create_if_block(ctx);

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
			t5 = text(t5_value);
			t6 = text("€\n\t\t\t");
			if (if_block) if_block.c();
			t7 = space();
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
			t5 = claim_text(strong_nodes, t5_value);
			t6 = claim_text(strong_nodes, "€\n\t\t\t");
			if (if_block) if_block.l(strong_nodes);
			strong_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
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
			add_location(hr, file, 22, 0, 295);
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
			append_dev(strong, t5);
			append_dev(strong, t6);
			if (if_block) if_block.m(strong, null);
			insert_dev(target, t7, anchor);
			insert_dev(target, hr, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*adhoc*/ 1 && t0_value !== (t0_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*adhoc*/ 1 && t2_value !== (t2_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t2, t2_value);
			if (dirty & /*adhoc*/ 1 && t3_value !== (t3_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t3, t3_value);
			if (dirty & /*adhoc*/ 1 && t5_value !== (t5_value = /*adhoc*/ ctx[0].amount + "")) set_data_dev(t5, t5_value);

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

			if (dirty & /*adhoc*/ 1 && a_href_value !== (a_href_value = "post/" + /*adhoc*/ ctx[0].id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (if_block) if_block.d();
			if (detaching) detach_dev(t7);
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

const { console: console_1 } = globals;
const file$1 = "src/components/Filter.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (61:4) {#each labels as label}
function create_each_block(ctx) {
	let input;
	let input_id_value;
	let input_value_value;
	let t0;
	let label;
	let svg;
	let use;
	let use_xlink_href_value;
	let t1;
	let t2_value = /*label*/ ctx[9] + "";
	let t2;
	let t3;
	let label_for_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			input = element("input");
			t0 = space();
			label = element("label");
			svg = svg_element("svg");
			use = svg_element("use");
			t1 = space();
			t2 = text(t2_value);
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			input = claim_element(nodes, "INPUT", {
				id: true,
				name: true,
				type: true,
				value: true,
				class: true
			});

			t0 = claim_space(nodes);
			label = claim_element(nodes, "LABEL", { for: true, class: true });
			var label_nodes = children(label);
			svg = claim_element(label_nodes, "svg", { class: true }, 1);
			var svg_nodes = children(svg);
			use = claim_element(svg_nodes, "use", { "xlink:href": true }, 1);
			children(use).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t1 = claim_space(label_nodes);
			t2 = claim_text(label_nodes, t2_value);
			t3 = claim_space(label_nodes);
			label_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "id", input_id_value = /*label*/ ctx[9]);
			attr_dev(input, "name", "checkbox");
			attr_dev(input, "type", "radio");
			input.__value = input_value_value = /*label*/ ctx[9];
			input.value = input.__value;
			attr_dev(input, "class", "svelte-1i1au96");
			/*$$binding_groups*/ ctx[7][0].push(input);
			add_location(input, file$1, 61, 8, 1432);
			xlink_attr(use, "xlink:href", use_xlink_href_value = "/sprite.svg#" + /*label*/ ctx[9]);
			add_location(use, file$1, 70, 17, 1667);
			attr_dev(svg, "class", "svelte-1i1au96");
			add_location(svg, file$1, 70, 12, 1662);
			attr_dev(label, "for", label_for_value = /*label*/ ctx[9]);
			attr_dev(label, "class", "svelte-1i1au96");
			add_location(label, file$1, 69, 8, 1630);
		},
		m: function mount(target, anchor) {
			insert_dev(target, input, anchor);
			input.checked = input.__value === /*ssnType*/ ctx[0];
			insert_dev(target, t0, anchor);
			insert_dev(target, label, anchor);
			append_dev(label, svg);
			append_dev(svg, use);
			append_dev(label, t1);
			append_dev(label, t2);
			append_dev(label, t3);

			if (!mounted) {
				dispose = [
					listen_dev(input, "change", /*input_change_handler*/ ctx[6]),
					listen_dev(
						input,
						"change",
						function () {
							if (is_function(/*markit*/ ctx[1])) /*markit*/ ctx[1].apply(this, arguments);
						},
						false,
						false,
						false
					)
				];

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*ssnType*/ 1) {
				input.checked = input.__value === /*ssnType*/ ctx[0];
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(input);
			/*$$binding_groups*/ ctx[7][0].splice(/*$$binding_groups*/ ctx[7][0].indexOf(input), 1);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(label);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(61:4) {#each labels as label}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let form;
	let mounted;
	let dispose;
	let each_value = /*labels*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			form = element("form");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { class: true });
			var form_nodes = children(form);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(form_nodes);
			}

			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(form, "class", "svelte-1i1au96");
			add_location(form, file$1, 59, 0, 1364);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(form, null);
			}

			if (!mounted) {
				dispose = listen_dev(form, "submit", prevent_default(/*submit_handler*/ ctx[5]), false, true, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*labels, ssnType, markit*/ 7) {
				each_value = /*labels*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(form, null);
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
	let { adhoc } = $$props;
	let { adhocFiltered = [] } = $$props;

	// Props
	let labels = ["all", "coding", "design"];

	let ssnType;
	const writable_props = ["adhoc", "adhocFiltered"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Filter> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Filter", $$slots, []);
	const $$binding_groups = [[]];

	function submit_handler(event) {
		bubble($$self, event);
	}

	function input_change_handler() {
		ssnType = this.__value;
		$$invalidate(0, ssnType);
	}

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(4, adhoc = $$props.adhoc);
		if ("adhocFiltered" in $$props) $$invalidate(3, adhocFiltered = $$props.adhocFiltered);
	};

	$$self.$capture_state = () => ({
		adhoc,
		adhocFiltered,
		labels,
		ssnType,
		morbid,
		markit
	});

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(4, adhoc = $$props.adhoc);
		if ("adhocFiltered" in $$props) $$invalidate(3, adhocFiltered = $$props.adhocFiltered);
		if ("labels" in $$props) $$invalidate(2, labels = $$props.labels);
		if ("ssnType" in $$props) $$invalidate(0, ssnType = $$props.ssnType);
		if ("morbid" in $$props) morbid = $$props.morbid;
		if ("markit" in $$props) $$invalidate(1, markit = $$props.markit);
	};

	let morbid;
	let markit;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*ssnType, adhoc*/ 17) {
			// Filtering
			// $: adhocFiltered = adhoc.filter((tag) => tag.type === ssnType);
			 morbid = () => {
				if (ssnType) {
					$$invalidate(3, adhocFiltered = adhoc.filter(tag => tag.type === ssnType));
				}
			};
		}

		if ($$self.$$.dirty & /*ssnType*/ 1) {
			// Mark Checkbox
			 $$invalidate(1, markit = async () => {
				if (!sessionStorage.getItem(ssnType)) {
					return sessionStorage.setItem("ssnType", ssnType);
				}
			});
		}

		if ($$self.$$.dirty & /*ssnType*/ 1) {
			// DEVELOPMENT
			 console.log("%c ssnType ", "color:red; font-weight:bold; font-size:14px", ssnType);
		}

		if ($$self.$$.dirty & /*adhocFiltered*/ 8) {
			 console.log("%c adhocFiltered ", "color:green; font-weight:bold; font-size:14px", adhocFiltered);
		}
	};

	 (async () => {
		if (typeof window !== "undefined") {
			if (!sessionStorage.getItem("ssnType")) {
				return $$invalidate(0, ssnType = "all");
			} else {
				return $$invalidate(0, ssnType = sessionStorage.getItem("ssnType"));
			}
		}
	})();

	return [
		ssnType,
		markit,
		labels,
		adhocFiltered,
		adhoc,
		submit_handler,
		input_change_handler,
		$$binding_groups
	];
}

class Filter extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, not_equal, { adhoc: 4, adhocFiltered: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Filter",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*adhoc*/ ctx[4] === undefined && !("adhoc" in props)) {
			console_1.warn("<Filter> was created without expected prop 'adhoc'");
		}
	}

	get adhoc() {
		throw new Error("<Filter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set adhoc(value) {
		throw new Error("<Filter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get adhocFiltered() {
		throw new Error("<Filter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set adhocFiltered(value) {
		throw new Error("<Filter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/board/[page].svelte generated by Svelte v3.24.1 */

const { console: console_1$1 } = globals;
const file$2 = "src/routes/board/[page].svelte";

function create_fragment$2(ctx) {
	let t0;
	let section;
	let h1;
	let t1;
	let section_intro;

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h1 = element("h1");
			t1 = text(/*$res*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mlai1k\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h1 = claim_element(section_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, /*$res*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Board";
			add_location(h1, file$2, 62, 1, 1528);
			attr_dev(section, "class", "svelte-z8qrf9");
			add_location(section, file$2, 61, 0, 1471);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(h1, t1);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$res*/ 1) set_data_dev(t1, /*$res*/ ctx[0]);
		},
		i: function intro(local) {
			if (!section_intro) {
				add_render_callback(() => {
					section_intro = create_in_transition(section, fly, { duration: 320, y: 40, opacity: 1 });
					section_intro.start();
				});
			}
		},
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
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

function instance$2($$self, $$props, $$invalidate) {
	let $res;
	const res = preload(`https://6016e904f534300017a4509d.mockapi.io/board?page=1&limit=50`);
	validate_store(res, "res");
	component_subscribe($$self, res, value => $$invalidate(0, $res = value));
	let { adhoc = [] } = $$props;
	let { page } = $$props;
	let { limit } = $$props;
	const writable_props = ["adhoc", "page", "limit"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<U5Bpageu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bpageu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(2, adhoc = $$props.adhoc);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
		if ("limit" in $$props) $$invalidate(4, limit = $$props.limit);
	};

	$$self.$capture_state = () => ({
		preload,
		fly,
		Post,
		Filter,
		res,
		adhoc,
		page,
		limit,
		next,
		$res
	});

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(2, adhoc = $$props.adhoc);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
		if ("limit" in $$props) $$invalidate(4, limit = $$props.limit);
		if ("next" in $$props) next = $$props.next;
	};

	let next;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*page*/ 8) {
			// Load More
			 next = `/board/${+page + 1}`;
		}

		if ($$self.$$.dirty & /*adhoc*/ 4) {
			// DEVELOPER_CONSOLE_LOG
			 console.log("%c BROWSE adhoc ", "color:blue; font-weight:bold; font-size:14px", adhoc);
		}
	};

	return [$res, res, adhoc, page, limit];
}

class U5Bpageu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, not_equal, { adhoc: 2, page: 3, limit: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpageu5D",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*page*/ ctx[3] === undefined && !("page" in props)) {
			console_1$1.warn("<U5Bpageu5D> was created without expected prop 'page'");
		}

		if (/*limit*/ ctx[4] === undefined && !("limit" in props)) {
			console_1$1.warn("<U5Bpageu5D> was created without expected prop 'limit'");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2VdLjQ2NDFiOTA5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL3N0b3Jlcy5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYm9hcmQvX3Bvc3Quc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRmlsdGVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYm9hcmQvW3BhZ2VdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQodXJsKSB7XG4gICAgY29uc3QgYWRob2MgPSB3cml0YWJsZShuZXcgUHJvbWlzZSgoKSA9PiB7IH0pKTtcblxuICAgIC8vIEZldGNoXG4gICAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgYWRob2Muc2V0KFByb21pc2UucmVzb2x2ZShkYXRhKSk7XG4gICAgfVxuXG4gICAgbG9hZCgpO1xuICAgIHJldHVybiBhZGhvYztcbn0iLCI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IGFkaG9jO1xuPC9zY3JpcHQ+XG5cbjwhLS0gSFRNTCAtLT5cbjxhIGhyZWY9XCJwb3N0L3thZGhvYy5pZH1cIj5cblx0PGFydGljbGU+XG5cdFx0PGgyPlxuXHRcdFx0e2FkaG9jLnRpdGxlfVxuXHRcdDwvaDI+XG5cdFx0PGRsPlxuXHRcdFx0PGR0PnthZGhvYy5hdXRob3J9PC9kdD5cblx0XHRcdDxkZD57YWRob2MuY2l0eX08L2RkPlxuXHRcdDwvZGw+XG5cdFx0PHN0cm9uZz5cblx0XHRcdHthZGhvYy5hbW91bnR9JmV1cm87XG5cdFx0XHR7I2lmIGFkaG9jLmhvdXJ9XG5cdFx0XHRcdGFuIGhvdXJcblx0XHRcdHsvaWZ9XG5cdFx0PC9zdHJvbmc+XG5cdDwvYXJ0aWNsZT5cbjwvYT5cbjxociAvPlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cblx0YSB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0YXJ0aWNsZSB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0YXJ0aWNsZSA+IGgyIHtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMztcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0YXJ0aWNsZSA+IHN0cm9uZyB7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgLyAyKSAwO1xuXHR9XG48L3N0eWxlPlxuIiwiPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48c2NyaXB0PlxuICAgIC8vIEV4cG9ydHNcbiAgICBleHBvcnQgbGV0IGFkaG9jO1xuICAgIGV4cG9ydCBsZXQgYWRob2NGaWx0ZXJlZCA9IFtdO1xuXG4gICAgLy8gUHJvcHNcbiAgICBsZXQgbGFiZWxzID0gW1wiYWxsXCIsIFwiY29kaW5nXCIsIFwiZGVzaWduXCJdO1xuICAgIGxldCBzc25UeXBlO1xuXG4gICAgLy8gRmlsdGVyaW5nXG4gICAgLy8gJDogYWRob2NGaWx0ZXJlZCA9IGFkaG9jLmZpbHRlcigodGFnKSA9PiB0YWcudHlwZSA9PT0gc3NuVHlwZSk7XG5cbiAgICAkOiBtb3JiaWQgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNzblR5cGUpIHtcbiAgICAgICAgICAgIGFkaG9jRmlsdGVyZWQgPSBhZGhvYy5maWx0ZXIoKHRhZykgPT4gdGFnLnR5cGUgPT09IHNzblR5cGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIC8vIENoZWNrYm94IEZpbHRlcmluZ1xuICAgIC8vICQ6IGFkaG9jRmlsdGVyZWQgPSAoKSA9PiB7XG4gICAgLy8gICAgIHJldHVybiAoYWRob2MuZmlsdGVyKCh7IHR5cGUgfSkgPT5cbiAgICAvLyAgICAgICAgIGFkaG9jLmV2ZXJ5KCh0YWcpID0+IHR5cGUuaW5jbHVkZXMoc3NuVHlwZSkpXG4gICAgLy8gICAgICkpO1xuICAgIC8vIH07XG5cbiAgICAvLyBDaGVjayBMb2NhbCBTdG9yYWdlXG4gICAgJDogKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInNzblR5cGVcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNzblR5cGUgPSBcImFsbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChzc25UeXBlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInNzblR5cGVcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8vIE1hcmsgQ2hlY2tib3hcbiAgICAkOiBtYXJraXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzc25UeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzc25UeXBlXCIsIHNzblR5cGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIERFVkVMT1BNRU5UXG4gICAgJDogY29uc29sZS5sb2coXG5cdFx0XCIlYyBzc25UeXBlIFwiLFxuXHRcdFwiY29sb3I6cmVkOyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTRweFwiLFxuXHRcdHNzblR5cGVcblx0KTtcbiAgICAkOiBjb25zb2xlLmxvZyhcblx0XHRcIiVjIGFkaG9jRmlsdGVyZWQgXCIsXG5cdFx0XCJjb2xvcjpncmVlbjsgZm9udC13ZWlnaHQ6Ym9sZDsgZm9udC1zaXplOjE0cHhcIixcblx0XHRhZGhvY0ZpbHRlcmVkXG5cdCk7XG48L3NjcmlwdD5cblxuPCEtLSBIVE1MIC0tPlxuPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PlxuICAgIHsjZWFjaCBsYWJlbHMgYXMgbGFiZWx9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2xhYmVsfSBcbiAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICB2YWx1ZT17bGFiZWx9IFxuICAgICAgICAgICAgYmluZDpncm91cD17c3NuVHlwZX0gXG4gICAgICAgICAgICBvbjpjaGFuZ2U9e21hcmtpdH0gXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9e2xhYmVsfT5cbiAgICAgICAgICAgIDxzdmc+PHVzZSB4bGluazpocmVmPVwiL3Nwcml0ZS5zdmcje2xhYmVsfVwiIC8+PC9zdmc+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgey9lYWNofVxuPC9mb3JtPlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cbiAgICBmb3JtIHtcbiAgICAgICAgLyogRGlzcGxheSAqL1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICBncmlkLWdhcDogMCBjYWxjKHZhcigtLXB0KSAqIDIpO1xuICAgICAgICAvKiBTaXppbmcgKi9cbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBSZXN0ICovXG4gICAgICAgIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDIpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICAvKiBEaXNwbGF5ICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC8qIFNpemluZyAqL1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDkuNSk7XG5cdFx0bWF4LWhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiA5LjUpO1xuXHRcdGhlaWdodDogMTAwJTtcbiAgICAgICAgLyogUmVzdCAqL1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtZ2hvc3QpO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXB0KSAqIDEuNSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2wtc2Vjbyk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC1zZWNvKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbC1wcmltZSk7XG4gICAgfVxuICAgIGlucHV0OmNoZWNrZWQgKyBsYWJlbCA+IHN2ZyB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tY29sLXByaW1lKTtcbiAgICB9XG4gICAgc3ZnIHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIuNSk7XG5cdFx0bWF4LWhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdGhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdG1pbi13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdG1heC13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdHdpZHRoOiBjYWxjKHZhcigtLXB0KSAqIDIuNSk7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHN0cm9rZTogdmFyKC0tY29sLXNlY28pO1xuXHRcdHN0cm9rZS13aWR0aDogMi41O1xuXHRcdGZpbGw6IG5vbmU7XG5cdH1cbjwvc3R5bGU+XG4iLCI8c3ZlbHRlOm9wdGlvbnMgaW1tdXRhYmxlIC8+XG5cbjwhLS0gU2VydmVyIC0tPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdC8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcblx0Ly8gXHRjb25zdCBwYWdlID0gK3BhcmFtcy5wYWdlO1xuXHQvLyBcdGNvbnN0IGxpbWl0ID0gNTA7XG5cdC8vIFx0Ly8gRmV0Y2hcblx0Ly8gXHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWApXG5cblx0Ly8gXHQvLyBWYWxpZGF0ZVxuXHQvLyBcdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcblx0Ly8gXHRcdGNvbnN0IGFkaG9jID0gYXdhaXQgcmVzLmpzb24oKTtcblx0Ly8gXHRcdHJldHVybiB7IGFkaG9jLCBwYWdlLCBsaW1pdCB9O1xuXHQvLyBcdH1cblxuXHQvLyBcdC8vIEVycm9yXG5cdC8vIFx0dGhpcy5lcnJvcig1MDAsIFwiUHJvYmxlbXMgd2l0aCBzZXJ2ZXIuIEJlIHJpZ2h0IGJhY2sgc29vbiA7KVwiKTtcblx0Ly8gfVxuXG5cblx0Ly8gaW1wb3J0IGdldERhdGEgZnJvbSBcIi4uLy4uL3N0b3Jlcy9zdG9yZXNcIjtcbiAgXHQvLyBjb25zdCByZXNwb25zZSA9IGdldERhdGEoYGh0dHBzOi8vNjAxNmU5MDRmNTM0MzAwMDE3YTQ1MDlkLm1vY2thcGkuaW8vYm9hcmQ/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCk7XG48L3NjcmlwdD5cblxuPCEtLSBDbGllbnQgLS0+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBwcmVsb2FkIH0gZnJvbSBcIi4uLy4uL3N0b3Jlcy9zdG9yZXMuanNcIjtcblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cdGltcG9ydCBQb3N0IGZyb20gXCIuL19wb3N0LnN2ZWx0ZVwiO1xuXHRpbXBvcnQgRmlsdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpbHRlci5zdmVsdGVcIjtcblxuXHRjb25zdCByZXMgPSBwcmVsb2FkKGBodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkP3BhZ2U9MSZsaW1pdD01MGApO1xuXG5cdC8vIEV4cG9ydGVkXG5cdGV4cG9ydCBsZXQgYWRob2MgPSBbXTtcblx0ZXhwb3J0IGxldCBwYWdlO1xuXHRleHBvcnQgbGV0IGxpbWl0O1xuXG5cdC8vIExvYWQgTW9yZVxuXHQkOiBuZXh0ID0gYC9ib2FyZC8keytwYWdlICsgMX1gO1xuXG5cdC8vIERFVkVMT1BFUl9DT05TT0xFX0xPR1xuXHQkOiBjb25zb2xlLmxvZyhcblx0XHRcIiVjIEJST1dTRSBhZGhvYyBcIixcblx0XHRcImNvbG9yOmJsdWU7IGZvbnQtd2VpZ2h0OmJvbGQ7IGZvbnQtc2l6ZToxNHB4XCIsXG5cdFx0YWRob2Ncblx0KTtcblx0Ly8gJDogY29uc29sZS5sb2coXG5cdC8vIFx0XCIlYyBCUk9XU0UgQWRob2NTdG9yZSBcIixcblx0Ly8gXHRcImNvbG9yOmdyZWVuOyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTRweFwiLFxuXHQvLyBcdEFkaG9jU3RvcmVcblx0Ly8gKTtcbjwvc2NyaXB0PlxuXG48IS0tIFNwZWNpYWwgLS0+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Cb2FyZDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48IS0tIEhUTUwgLS0+XG48c2VjdGlvbiBpbjpmbHk9e3sgZHVyYXRpb246IDMyMCwgeTogNDAsIG9wYWNpdHk6IDEgfX0+XG5cdDxoMT57JHJlc308L2gxPlxuXHQ8IS0tIDxoZWFkZXI+XG5cdFx0eyNpZiBhZGhvYy5sZW5ndGggPiAwfVxuXHRcdFx0PGgxPkpvYiBib2FyZDwvaDE+XG5cdFx0XHQ8cD5Vc2UgZmlsdGVyIGZvciBlYXNpZXIgZmluZDwvcD5cblx0XHR7OmVsc2V9XG5cdFx0XHQ8aDE+TGlzdCBlbmRlZDwvaDE+XG5cdFx0ey9pZn1cblx0PC9oZWFkZXI+XG5cdDxGaWx0ZXIgYmluZDphZGhvYyAvPlxuXHQ8ZGl2PlxuXHRcdHsjZWFjaCBhZGhvYyBhcyBhZGhvY31cblx0XHRcdDxQb3N0IHthZGhvY30gLz5cblx0XHR7L2VhY2h9XG5cdDwvZGl2PlxuXHR7I2lmIG5leHQgJiYgYWRob2MubGVuZ3RoID09PSBsaW1pdH1cblx0XHQ8YSBjbGFzcz1cIm1vcmVcIiBocmVmPXtuZXh0fT5OZXh0IHBhZ2U8L2E+XG5cdHsvaWZ9IC0tPlxuPC9zZWN0aW9uPlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cblx0c2VjdGlvbiwgc2VjdGlvbiA+IGRpdiwgaGVhZGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblx0YSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR9XG5cdHNlY3Rpb24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwdnc7XG5cdFx0bWF4LXdpZHRoOiAxMDB2dztcblx0XHR3aWR0aDogMTAwdnc7XG5cdFx0LyogUmVzdCAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1wcmltZSk7XG5cdFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcblx0fVxuXHRzZWN0aW9uID4gZGl2IHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdH1cblx0c2VjdGlvbiA+IGRpdiB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGEge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4td2lkdGg6IG5vbmU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAodmFyKC0tcHQpICogNikpO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXB0KSAqIDIpIGNhbGModmFyKC0tcHQpICogMyk7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcHQpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1wcmltZWxpZ2h0KTtcblx0XHRjb2xvcjogdmFyKC0tY29sLWJsYWNrKTtcblx0XHRtYXJnaW46IGNhbGMoKHZhcigtLXB0KSAqIDMpKSAwO1xuXHRcdC8qIFRyYW5zaXRpb24gKi9cblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC40NCwgMC4yMSwgMCwgMSk7XG5cdFx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblx0fVxuXHRhOmhvdmVyLCBhOmFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZTNkKDAuOTYsIDAuOTYsIDEpO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUM3QixJQUFJLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkQ7QUFDQTtBQUNBLElBQUksTUFBTSxJQUFJLEdBQUcsWUFBWTtBQUM3QixRQUFRLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxRQUFRLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3RDLFFBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekMsTUFBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDTkksR0FBSyxJQUFDLEtBQUs7Ozs7OzBCQUdQLEdBQUssSUFBQyxNQUFNOzs7MEJB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
