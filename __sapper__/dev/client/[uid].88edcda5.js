import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, o as not_equal, p as validate_each_argument, r as set_data_dev, a as space, u as create_component, q as query_selector_all, c as claim_space, w as claim_component, x as mount_component, y as transition_in, z as add_render_callback, A as create_in_transition, B as transition_out, C as destroy_each, D as destroy_component, E as set_style } from './client.32ce4488.js';
import { f as fly } from './index.ff7bd4a9.js';

/* src/components/Button.svelte generated by Svelte v3.24.1 */

const file = "src/components/Button.svelte";

function create_fragment(ctx) {
	let div;
	let a;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			a = element("a");
			t = text(/*labelContact*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, /*labelContact*/ ctx[1]);
			a_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", /*link*/ ctx[0]);
			attr_dev(a, "class", "svelte-1i6vtul");
			add_location(a, file, 94, 1, 1940);
			attr_dev(div, "class", "svelte-1i6vtul");
			add_location(div, file, 93, 0, 1933);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, a);
			append_dev(a, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*link*/ 1) {
				attr_dev(a, "href", /*link*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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
	let { link } = $$props;
	let { state = false } = $$props;

	// Lets
	let labelContact = "Show contacts";

	const writable_props = ["adhoc", "link", "state"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Button", $$slots, []);

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(3, adhoc = $$props.adhoc);
		if ("link" in $$props) $$invalidate(0, link = $$props.link);
		if ("state" in $$props) $$invalidate(2, state = $$props.state);
	};

	$$self.$capture_state = () => ({ adhoc, link, state, labelContact, pin });

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(3, adhoc = $$props.adhoc);
		if ("link" in $$props) $$invalidate(0, link = $$props.link);
		if ("state" in $$props) $$invalidate(2, state = $$props.state);
		if ("labelContact" in $$props) $$invalidate(1, labelContact = $$props.labelContact);
		if ("pin" in $$props) pin = $$props.pin;
	};

	let pin;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*adhoc*/ 8) {
			// Check Local Storage
			 (async () => {
				if (typeof window !== "undefined") {
					if (localStorage.getItem(adhoc.id, "Saved")) {
						return $$invalidate(2, state = true);
					} else {
						return $$invalidate(2, state = false);
					}
				}
			})();
		}

		if ($$self.$$.dirty & /*adhoc*/ 8) {
			// Mark Checkbox
			 pin = async () => {
				if (!localStorage.getItem(adhoc.id)) {
					return localStorage.setItem(adhoc.id, "Saved");
				} else {
					return localStorage.removeItem(adhoc.id, "Saved");
				}
			};
		}
	};

	return [link, labelContact, state, adhoc];
}

class Button extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { adhoc: 3, link: 0, state: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*adhoc*/ ctx[3] === undefined && !("adhoc" in props)) {
			console.warn("<Button> was created without expected prop 'adhoc'");
		}

		if (/*link*/ ctx[0] === undefined && !("link" in props)) {
			console.warn("<Button> was created without expected prop 'link'");
		}
	}

	get adhoc() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set adhoc(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get link() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set link(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get state() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set state(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/locations/[uid].svelte generated by Svelte v3.24.1 */
const file$1 = "src/routes/locations/[uid].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (91:3) {:else}
function create_else_block(ctx) {
	let em;
	let t_value = /*adhoc*/ ctx[0].type + "";
	let t;

	const block = {
		c: function create() {
			em = element("em");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			em = claim_element(nodes, "EM", { style: true, class: true });
			var em_nodes = children(em);
			t = claim_text(em_nodes, t_value);
			em_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(em, "color", "var(--col-seco)");
			attr_dev(em, "class", "svelte-u3k3dv");
			add_location(em, file$1, 91, 4, 1871);
		},
		m: function mount(target, anchor) {
			insert_dev(target, em, anchor);
			append_dev(em, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*adhoc*/ ctx[0].type + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(em);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(91:3) {:else}",
		ctx
	});

	return block;
}

// (89:3) {#if adhoc.type === "designer"}
function create_if_block(ctx) {
	let em;
	let t_value = /*adhoc*/ ctx[0].type + "";
	let t;

	const block = {
		c: function create() {
			em = element("em");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			em = claim_element(nodes, "EM", { style: true, class: true });
			var em_nodes = children(em);
			t = claim_text(em_nodes, t_value);
			em_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(em, "color", "var(--col-tert)");
			attr_dev(em, "class", "svelte-u3k3dv");
			add_location(em, file$1, 89, 4, 1803);
		},
		m: function mount(target, anchor) {
			insert_dev(target, em, anchor);
			append_dev(em, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*adhoc*/ ctx[0].type + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(em);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(89:3) {#if adhoc.type === \\\"designer\\\"}",
		ctx
	});

	return block;
}

// (106:3) {#each adhoc.brief as item}
function create_each_block_1(ctx) {
	let li;
	let t_value = /*item*/ ctx[3] + "";
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
			attr_dev(li, "class", "svelte-u3k3dv");
			add_location(li, file$1, 106, 4, 2148);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*item*/ ctx[3] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(106:3) {#each adhoc.brief as item}",
		ctx
	});

	return block;
}

// (116:3) {#each adhoc.requirements as item}
function create_each_block(ctx) {
	let li;
	let t_value = /*item*/ ctx[3] + "";
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
			attr_dev(li, "class", "svelte-u3k3dv");
			add_location(li, file$1, 116, 4, 2303);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t_value !== (t_value = /*item*/ ctx[3] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(116:3) {#each adhoc.requirements as item}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
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
	let section1;
	let header1;
	let h20;
	let t7;
	let t8;
	let ul0;
	let t9;
	let section2;
	let header2;
	let h21;
	let t10;
	let t11;
	let ul1;
	let t12;
	let button;
	let div_intro;
	let current;
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

	button = new Button({
			props: {
				adhoc: /*adhoc*/ ctx[0],
				link: /*link*/ ctx[1]
			},
			$$inline: true
		});

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
			section1 = element("section");
			header1 = element("header");
			h20 = element("h2");
			t7 = text("Brief");
			t8 = space();
			ul0 = element("ul");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t9 = space();
			section2 = element("section");
			header2 = element("header");
			h21 = element("h2");
			t10 = text("Requirements");
			t11 = space();
			ul1 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t12 = space();
			create_component(button.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-w6u6cv\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			section0 = claim_element(div_nodes, "SECTION", {});
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
			section1 = claim_element(div_nodes, "SECTION", {});
			var section1_nodes = children(section1);
			header1 = claim_element(section1_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			h20 = claim_element(header1_nodes, "H2", {});
			var h20_nodes = children(h20);
			t7 = claim_text(h20_nodes, "Brief");
			h20_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t8 = claim_space(section1_nodes);
			ul0 = claim_element(section1_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(ul0_nodes);
			}

			ul0_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t9 = claim_space(div_nodes);
			section2 = claim_element(div_nodes, "SECTION", {});
			var section2_nodes = children(section2);
			header2 = claim_element(section2_nodes, "HEADER", { class: true });
			var header2_nodes = children(header2);
			h21 = claim_element(header2_nodes, "H2", {});
			var h21_nodes = children(h21);
			t10 = claim_text(h21_nodes, "Requirements");
			h21_nodes.forEach(detach_dev);
			header2_nodes.forEach(detach_dev);
			t11 = claim_space(section2_nodes);
			ul1 = claim_element(section2_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			t12 = claim_space(div_nodes);
			claim_component(button.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 93, 3, 1936);
			attr_dev(dt, "class", "svelte-u3k3dv");
			add_location(dt, file$1, 95, 4, 1971);
			attr_dev(dd, "class", "svelte-u3k3dv");
			add_location(dd, file$1, 96, 4, 1999);
			add_location(dl, file$1, 94, 3, 1962);
			attr_dev(header0, "class", "svelte-u3k3dv");
			add_location(header0, file$1, 87, 2, 1755);
			add_location(section0, file$1, 86, 1, 1743);
			add_location(h20, file$1, 102, 3, 2079);
			attr_dev(header1, "class", "svelte-u3k3dv");
			add_location(header1, file$1, 101, 2, 2067);
			attr_dev(ul0, "class", "svelte-u3k3dv");
			add_location(ul0, file$1, 104, 2, 2108);
			add_location(section1, file$1, 100, 1, 2055);
			add_location(h21, file$1, 112, 3, 2220);
			attr_dev(header2, "class", "svelte-u3k3dv");
			add_location(header2, file$1, 111, 2, 2208);
			attr_dev(ul1, "class", "svelte-u3k3dv");
			add_location(ul1, file$1, 114, 2, 2256);
			add_location(section2, file$1, 110, 1, 2196);
			attr_dev(div, "class", "svelte-u3k3dv");
			add_location(div, file$1, 85, 0, 1690);
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
			append_dev(div, section1);
			append_dev(section1, header1);
			append_dev(header1, h20);
			append_dev(h20, t7);
			append_dev(section1, t8);
			append_dev(section1, ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(ul0, null);
			}

			append_dev(div, t9);
			append_dev(div, section2);
			append_dev(section2, header2);
			append_dev(header2, h21);
			append_dev(h21, t10);
			append_dev(section2, t11);
			append_dev(section2, ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul1, null);
			}

			append_dev(div, t12);
			mount_component(button, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*adhoc*/ 1) && title_value !== (title_value = /*adhoc*/ ctx[0].title)) {
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

			if ((!current || dirty & /*adhoc*/ 1) && t2_value !== (t2_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t2, t2_value);
			if ((!current || dirty & /*adhoc*/ 1) && t4_value !== (t4_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t4, t4_value);
			if ((!current || dirty & /*adhoc*/ 1) && t5_value !== (t5_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t5, t5_value);

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

			const button_changes = {};
			if (dirty & /*adhoc*/ 1) button_changes.adhoc = /*adhoc*/ ctx[0];
			if (dirty & /*link*/ 2) button_changes.link = /*link*/ ctx[1];
			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);

			if (!div_intro) {
				add_render_callback(() => {
					div_intro = create_in_transition(div, fly, { duration: 320, y: 40, opacity: 1 });
					div_intro.start();
				});
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if_block.d();
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			destroy_component(button);
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

function instance$1($$self, $$props, $$invalidate) {
	let { adhoc } = $$props;
	let { link = "javascript:;" } = $$props;

	// Back
	const historyback = () => {
		if (typeof window !== "undefined") {
			window.history.back();
		}
	};

	const writable_props = ["adhoc", "link"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Buidu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Buidu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
		if ("link" in $$props) $$invalidate(1, link = $$props.link);
	};

	$$self.$capture_state = () => ({
		preload,
		fly,
		Button,
		adhoc,
		link,
		historyback
	});

	$$self.$inject_state = $$props => {
		if ("adhoc" in $$props) $$invalidate(0, adhoc = $$props.adhoc);
		if ("link" in $$props) $$invalidate(1, link = $$props.link);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [adhoc, link];
}

class U5Buidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, not_equal, { adhoc: 0, link: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Buidu5D",
			options,
			id: create_fragment$1.name
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

	get link() {
		throw new Error("<U5Buidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set link(value) {
		throw new Error("<U5Buidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Buidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uODhlZGNkYTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2xvY2F0aW9ucy9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0Ly8gRXhwb3J0ZWRcblx0ZXhwb3J0IGxldCBhZGhvYztcblx0ZXhwb3J0IGxldCBsaW5rO1xuXHRleHBvcnQgbGV0IHN0YXRlID0gZmFsc2U7XG5cblx0Ly8gTGV0c1xuXHRsZXQgbGFiZWxDb250YWN0ID0gXCJTaG93IGNvbnRhY3RzXCI7XG5cblx0Ly8gQ2hlY2sgTG9jYWwgU3RvcmFnZVxuXHQkOiAoYXN5bmMoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhZGhvYy5pZCwgXCJTYXZlZFwiKSkge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHN0YXRlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSgpO1xuXG5cdC8vIE1hcmsgQ2hlY2tib3hcblx0JDogcGluID0gYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWRob2MuaWQpKSB7XG5cdFx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWRob2MuaWQsIFwiU2F2ZWRcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShhZGhvYy5pZCwgXCJTYXZlZFwiKTtcblx0XHR9XG5cdH07XG48L3NjcmlwdD5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG5cdGRpdiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogY2FsYygxMHZoICsgKHZhcigtLXB0KSAqIDIpKTtcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKDEwdmggKyAodmFyKC0tcHQpICogMikpO1xuXHRcdGhlaWdodDogY2FsYygxMHZoICsgKHZhcigtLXB0KSAqIDIpKTtcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFBvc2l0aW9uICovXG5cdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHRwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtcHJpbWUpO1xuXHRcdGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jb2wtcHJpbWVsaWdodCk7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAyKSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGEsIGxhYmVsIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cdGEge1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0bWF4LWhlaWdodDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcHQpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1zZWNvKTtcblx0XHRjb2xvcjogdmFyKC0tY29sLXByaW1lKTtcblx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLXB0KTtcblx0fVxuXHRzdmcge1xuICAgICAgICAvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIuNSk7XG5cdFx0bWF4LWhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdGhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdG1pbi13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdG1heC13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuICAgICAgICAvKiBSZXN0ICovXG4gICAgICAgIHN0cm9rZTogdmFyKC0tY29sLWJsYWNrKTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuXHRcdGZpbGw6IG5vbmU7XG4gICAgfVxuPC9zdHlsZT5cblxuPCEtLSBIVE1MIC0tPlxuPGRpdj5cblx0PGEgaHJlZj17bGlua30+e2xhYmVsQ29udGFjdH08L2E+XG48L2Rpdj4iLCI8IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Ly8gVVJMICsgSURcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFnZS5wYXJhbXM7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkL1wiICsgdWlkO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgYWRob2MgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHsgYWRob2MgfTtcblx0XHR9XG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uIDspXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cdGltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uLnN2ZWx0ZVwiO1xuXG5cdC8vIEV4cG9ydGVkXG5cdGV4cG9ydCBsZXQgYWRob2M7XG5cdGV4cG9ydCBsZXQgbGluayA9IFwiamF2YXNjcmlwdDo7XCI7XG5cblx0Ly8gQmFja1xuXHRjb25zdCBoaXN0b3J5YmFjayA9ICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0d2luZG93Lmhpc3RvcnkuYmFjaygpO1xuXHRcdH1cblx0fTtcbjwvc2NyaXB0PlxuXG48IS0tIFNwZWNpYWwgLS0+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57YWRob2MudGl0bGV9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48c3ZlbHRlOm9wdGlvbnMgaW1tdXRhYmxlIC8+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRkaXYge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wdCkgKiAxLjUpO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDMpIDA7XG5cdH1cblx0dWwge1xuXHRcdHBhZGRpbmc6IHZhcigtLXB0KSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGxpIHtcblx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdH1cblx0c3ZnIHtcbiAgICAgICAgLyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuXHRcdGhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRtaW4td2lkdGg6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0bWF4LXdpZHRoOiBjYWxjKHZhcigtLXB0KSAqIDIpO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyKTtcbiAgICAgICAgLyogUmVzdCAqL1xuICAgICAgICBzdHJva2U6IHZhcigtLWNvbC1ibGFjayk7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMztcblx0XHRmaWxsOiBub25lO1xuXHRcdG1hcmdpbi1yaWdodDogdmFyKC0tcHQpO1xuXHR9XG5cdC8qIEZvbnRzICovXG5cdGR0LCBsaSwgYWRkcmVzcyB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG5cdGRkLCBlbSB7XG5cdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0fVxuPC9zdHlsZT5cblxuPCEtLSBIVE1MIC0tPlxuPGRpdiBpbjpmbHk9e3sgZHVyYXRpb246IDMyMCwgeTogNDAsIG9wYWNpdHk6IDEgfX0+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHR7I2lmIGFkaG9jLnR5cGUgPT09IFwiZGVzaWduZXJcIn1cblx0XHRcdFx0PGVtIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbC10ZXJ0KVwiPnthZGhvYy50eXBlfTwvZW0+XG5cdFx0XHR7OmVsc2V9XG5cdFx0XHRcdDxlbSBzdHlsZT1cImNvbG9yOiB2YXIoLS1jb2wtc2VjbylcIj57YWRob2MudHlwZX08L2VtPlxuXHRcdFx0ey9pZn1cblx0XHRcdDxoMT57YWRob2MudGl0bGV9PC9oMT5cblx0XHRcdDxkbD5cblx0XHRcdFx0PGR0PnthZGhvYy5hdXRob3J9PC9kdD5cblx0XHRcdFx0PGRkPnthZGhvYy5jaXR5fTwvZGQ+XG5cdFx0XHQ8L2RsPlxuXHRcdDwvaGVhZGVyPlxuXHQ8L3NlY3Rpb24+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8aDI+QnJpZWY8L2gyPlxuXHRcdDwvaGVhZGVyPlxuXHRcdDx1bD5cblx0XHRcdHsjZWFjaCBhZGhvYy5icmllZiBhcyBpdGVtfVxuXHRcdFx0XHQ8bGk+e2l0ZW19PC9saT5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L3VsPlxuXHQ8L3NlY3Rpb24+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8aDI+UmVxdWlyZW1lbnRzPC9oMj5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8dWw+XG5cdFx0XHR7I2VhY2ggYWRob2MucmVxdWlyZW1lbnRzIGFzIGl0ZW19XG5cdFx0XHRcdDxsaT57aXRlbX08L2xpPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvdWw+XG5cdDwvc2VjdGlvbj5cblx0XHQ8IS0tIDxhZGRyZXNzPlxuXHRcdFx0e2FkaG9jLmVtYWlsfVxuXHRcdDwvYWRkcmVzcz5cblx0XHQ8YWRkcmVzcz5cblx0XHRcdHsjaWYgYWRob2MucGhvbmUgIT0gbnVsbH1cblx0XHRcdFx0e2FkaG9jLnBob25lfVxuXHRcdFx0ey9pZn1cblx0XHQ8L2FkZHJlc3M+IC0tPlxuXHQ8IS0tIENUQSdzIC0tPlxuXHQ8QnV0dG9uIHthZGhvY30ge2xpbmt9Lz5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBOEZpQixHQUFZOzs7Ozs7Ozs0Q0FBWixHQUFZOzs7Ozs7Z0NBQW5CLEdBQUk7Ozs7Ozs7Ozs7Ozs7aUNBQUosR0FBSTs7Ozs7Ozs7Ozs7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
