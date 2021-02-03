import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, o as not_equal, a as space, p as create_component, q as query_selector_all, c as claim_space, r as claim_component, u as mount_component, w as set_data_dev, x as transition_in, y as add_render_callback, z as create_in_transition, A as transition_out, B as destroy_component, C as set_style } from './client.68906be4.js';
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

// (88:3) {:else}
function create_else_block(ctx) {
	let em;
	let t0;
	let t1_value = /*adhoc*/ ctx[0].type + "";
	let t1;

	const block = {
		c: function create() {
			em = element("em");
			t0 = text("#");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			em = claim_element(nodes, "EM", { style: true });
			var em_nodes = children(em);
			t0 = claim_text(em_nodes, "#");
			t1 = claim_text(em_nodes, t1_value);
			em_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(em, "color", "var(--col-seco)");
			add_location(em, file$1, 88, 4, 1834);
		},
		m: function mount(target, anchor) {
			insert_dev(target, em, anchor);
			append_dev(em, t0);
			append_dev(em, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t1_value !== (t1_value = /*adhoc*/ ctx[0].type + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(em);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(88:3) {:else}",
		ctx
	});

	return block;
}

// (86:3) {#if adhoc.type === "designer"}
function create_if_block(ctx) {
	let em;
	let t0;
	let t1_value = /*adhoc*/ ctx[0].type + "";
	let t1;

	const block = {
		c: function create() {
			em = element("em");
			t0 = text("#");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			em = claim_element(nodes, "EM", { style: true });
			var em_nodes = children(em);
			t0 = claim_text(em_nodes, "#");
			t1 = claim_text(em_nodes, t1_value);
			em_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(em, "color", "var(--col-tert)");
			add_location(em, file$1, 86, 4, 1765);
		},
		m: function mount(target, anchor) {
			insert_dev(target, em, anchor);
			append_dev(em, t0);
			append_dev(em, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adhoc*/ 1 && t1_value !== (t1_value = /*adhoc*/ ctx[0].type + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(em);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(86:3) {#if adhoc.type === \\\"designer\\\"}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let title_value;
	let t0;
	let div;
	let section;
	let header;
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
	let p;
	let t7;
	let t8;
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
			section = element("section");
			header = element("header");
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
			p = element("p");
			t7 = text("Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.\n\t\t\tNulla ullamco ut nostrud Lorem quis officia dolore adipisicing.\n\t\t\tEx Lorem officia reprehenderit velit aute voluptate aliquip\n\t\t\texercitation in. Nulla anim ex amet do aliqua sunt laborum anim\n\t\t\tad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip\n\t\t\texcepteur. Elit irure sunt eu proident sit. Consectetur in\n\t\t\tconsectetur ex sint exercitation enim amet laboris nisi. Cillum\n\t\t\tesse non ut id quis aliquip duis amet officia eu irure aliquip\n\t\t\tsint quis. Magna voluptate dolor in esse aliqua esse adipisicing\n\t\t\tcommodo. Amet laboris id sit pariatur labore nostrud laborum\n\t\t\tvelit exercitation ea veniam minim mollit duis. Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.\n\t\t\tNulla ullamco ut nostrud Lorem quis officia dolore adipisicing.\n\t\t\tEx Lorem officia reprehenderit velit aute voluptate aliquip\n\t\t\texercitation in. Nulla anim ex amet do aliqua sunt laborum anim\n\t\t\tad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip\n\t\t\texcepteur. Elit irure sunt eu proident sit. Consectetur in\n\t\t\tconsectetur ex sint exercitation enim amet laboris nisi. Cillum\n\t\t\tesse non ut id quis aliquip duis amet officia eu irure aliquip\n\t\t\tsint quis. Magna voluptate dolor in esse aliqua esse adipisicing\n\t\t\tcommodo. Amet laboris id sit pariatur labore nostrud laborum\n\t\t\tvelit exercitation ea veniam minim mollit duis.");
			t8 = space();
			create_component(button.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-w6u6cv\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			section = claim_element(div_nodes, "SECTION", {});
			var section_nodes = children(section);
			header = claim_element(section_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			if_block.l(header_nodes);
			t1 = claim_space(header_nodes);
			h1 = claim_element(header_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, t2_value);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(header_nodes);
			dl = claim_element(header_nodes, "DL", {});
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
			header_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", { class: true });
			var p_nodes = children(p);
			t7 = claim_text(p_nodes, "Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.\n\t\t\tNulla ullamco ut nostrud Lorem quis officia dolore adipisicing.\n\t\t\tEx Lorem officia reprehenderit velit aute voluptate aliquip\n\t\t\texercitation in. Nulla anim ex amet do aliqua sunt laborum anim\n\t\t\tad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip\n\t\t\texcepteur. Elit irure sunt eu proident sit. Consectetur in\n\t\t\tconsectetur ex sint exercitation enim amet laboris nisi. Cillum\n\t\t\tesse non ut id quis aliquip duis amet officia eu irure aliquip\n\t\t\tsint quis. Magna voluptate dolor in esse aliqua esse adipisicing\n\t\t\tcommodo. Amet laboris id sit pariatur labore nostrud laborum\n\t\t\tvelit exercitation ea veniam minim mollit duis. Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.\n\t\t\tNulla ullamco ut nostrud Lorem quis officia dolore adipisicing.\n\t\t\tEx Lorem officia reprehenderit velit aute voluptate aliquip\n\t\t\texercitation in. Nulla anim ex amet do aliqua sunt laborum anim\n\t\t\tad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip\n\t\t\texcepteur. Elit irure sunt eu proident sit. Consectetur in\n\t\t\tconsectetur ex sint exercitation enim amet laboris nisi. Cillum\n\t\t\tesse non ut id quis aliquip duis amet officia eu irure aliquip\n\t\t\tsint quis. Magna voluptate dolor in esse aliqua esse adipisicing\n\t\t\tcommodo. Amet laboris id sit pariatur labore nostrud laborum\n\t\t\tvelit exercitation ea veniam minim mollit duis.");
			p_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			t8 = claim_space(div_nodes);
			claim_component(button.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 90, 3, 1900);
			attr_dev(dt, "class", "svelte-1vditmf");
			add_location(dt, file$1, 92, 4, 1935);
			attr_dev(dd, "class", "svelte-1vditmf");
			add_location(dd, file$1, 93, 4, 1963);
			add_location(dl, file$1, 91, 3, 1926);
			attr_dev(header, "class", "svelte-1vditmf");
			add_location(header, file$1, 84, 2, 1717);
			attr_dev(p, "class", "svelte-1vditmf");
			add_location(p, file$1, 96, 2, 2008);
			add_location(section, file$1, 83, 1, 1705);
			attr_dev(div, "class", "svelte-1vditmf");
			add_location(div, file$1, 82, 0, 1652);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, section);
			append_dev(section, header);
			if_block.m(header, null);
			append_dev(header, t1);
			append_dev(header, h1);
			append_dev(h1, t2);
			append_dev(header, t3);
			append_dev(header, dl);
			append_dev(dl, dt);
			append_dev(dt, t4);
			append_dev(dl, dd);
			append_dev(dd, t5);
			append_dev(section, t6);
			append_dev(section, p);
			append_dev(p, t7);
			append_dev(div, t8);
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
					if_block.m(header, t1);
				}
			}

			if ((!current || dirty & /*adhoc*/ 1) && t2_value !== (t2_value = /*adhoc*/ ctx[0].title + "")) set_data_dev(t2, t2_value);
			if ((!current || dirty & /*adhoc*/ 1) && t4_value !== (t4_value = /*adhoc*/ ctx[0].author + "")) set_data_dev(t4, t4_value);
			if ((!current || dirty & /*adhoc*/ 1) && t5_value !== (t5_value = /*adhoc*/ ctx[0].city + "")) set_data_dev(t5, t5_value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uOGNjNWUwZDQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2xvY2F0aW9ucy9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0Ly8gRXhwb3J0ZWRcblx0ZXhwb3J0IGxldCBhZGhvYztcblx0ZXhwb3J0IGxldCBsaW5rO1xuXHRleHBvcnQgbGV0IHN0YXRlID0gZmFsc2U7XG5cblx0Ly8gTGV0c1xuXHRsZXQgbGFiZWxDb250YWN0ID0gXCJTaG93IGNvbnRhY3RzXCI7XG5cblx0Ly8gQ2hlY2sgTG9jYWwgU3RvcmFnZVxuXHQkOiAoYXN5bmMoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhZGhvYy5pZCwgXCJTYXZlZFwiKSkge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHN0YXRlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSgpO1xuXG5cdC8vIE1hcmsgQ2hlY2tib3hcblx0JDogcGluID0gYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWRob2MuaWQpKSB7XG5cdFx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWRob2MuaWQsIFwiU2F2ZWRcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShhZGhvYy5pZCwgXCJTYXZlZFwiKTtcblx0XHR9XG5cdH07XG48L3NjcmlwdD5cblxuPCEtLSBDU1MgLS0+XG48c3R5bGU+XG5cdGRpdiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogY2FsYygxMHZoICsgKHZhcigtLXB0KSAqIDIpKTtcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKDEwdmggKyAodmFyKC0tcHQpICogMikpO1xuXHRcdGhlaWdodDogY2FsYygxMHZoICsgKHZhcigtLXB0KSAqIDIpKTtcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFBvc2l0aW9uICovXG5cdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHRwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtcHJpbWUpO1xuXHRcdGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jb2wtcHJpbWVsaWdodCk7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAyKSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHR9XG5cdGEsIGxhYmVsIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cdGEge1xuXHRcdC8qIFNpemluZyAqL1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0bWF4LWhlaWdodDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcHQpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1zZWNvKTtcblx0XHRjb2xvcjogdmFyKC0tY29sLXByaW1lKTtcblx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLXB0KTtcblx0fVxuXHRzdmcge1xuICAgICAgICAvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIuNSk7XG5cdFx0bWF4LWhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdGhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdG1pbi13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdG1heC13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuICAgICAgICAvKiBSZXN0ICovXG4gICAgICAgIHN0cm9rZTogdmFyKC0tY29sLWJsYWNrKTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuXHRcdGZpbGw6IG5vbmU7XG4gICAgfVxuPC9zdHlsZT5cblxuPCEtLSBIVE1MIC0tPlxuPGRpdj5cblx0PGEgaHJlZj17bGlua30+e2xhYmVsQ29udGFjdH08L2E+XG48L2Rpdj4iLCI8IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Ly8gVVJMICsgSURcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFnZS5wYXJhbXM7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkL1wiICsgdWlkO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgYWRob2MgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHsgYWRob2MgfTtcblx0XHR9XG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDUwMCwgXCJQcm9ibGVtcyB3aXRoIHNlcnZlci4gQmUgcmlnaHQgYmFjayBzb29uIDspXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmx5IH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG5cdGltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uLnN2ZWx0ZVwiO1xuXG5cdC8vIEV4cG9ydGVkXG5cdGV4cG9ydCBsZXQgYWRob2M7XG5cdGV4cG9ydCBsZXQgbGluayA9IFwiamF2YXNjcmlwdDo7XCI7XG5cblx0Ly8gQmFja1xuXHRjb25zdCBoaXN0b3J5YmFjayA9ICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0d2luZG93Lmhpc3RvcnkuYmFjaygpO1xuXHRcdH1cblx0fTtcbjwvc2NyaXB0PlxuXG48IS0tIFNwZWNpYWwgLS0+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57YWRob2MudGl0bGV9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48c3ZlbHRlOm9wdGlvbnMgaW1tdXRhYmxlIC8+XG5cbjwhLS0gQ1NTIC0tPlxuPHN0eWxlPlxuXHRkaXYge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdC8qIFJlc3QgKi9cblx0XHRwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wdCkgKiAxLjUpO1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKSBjYWxjKHZhcigtLXB0KSAqIDMpIDA7XG5cdH1cblx0cCB7XG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0fVxuXHRzdmcge1xuICAgICAgICAvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXB0KSAqIDIuNSk7XG5cdFx0bWF4LWhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdGhlaWdodDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdG1pbi13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuXHRcdG1heC13aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1wdCkgKiAyLjUpO1xuICAgICAgICAvKiBSZXN0ICovXG4gICAgICAgIHN0cm9rZTogdmFyKC0tY29sLWJsYWNrKTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuXHRcdGZpbGw6IG5vbmU7XG5cdFx0bWFyZ2luLXJpZ2h0OiB2YXIoLS1wdCk7XG5cdH1cblx0LyogRm9udHMgKi9cblx0ZHQsIHAsIGFkZHJlc3Mge1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0fVxuXHRkZCB7XG5cdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0fVxuPC9zdHlsZT5cblxuPCEtLSBIVE1MIC0tPlxuPGRpdiBpbjpmbHk9e3sgZHVyYXRpb246IDMyMCwgeTogNDAsIG9wYWNpdHk6IDEgfX0+XG5cdDxzZWN0aW9uPlxuXHRcdDxoZWFkZXI+XG5cdFx0XHR7I2lmIGFkaG9jLnR5cGUgPT09IFwiZGVzaWduZXJcIn1cblx0XHRcdFx0PGVtIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbC10ZXJ0KVwiPiN7YWRob2MudHlwZX08L2VtPlxuXHRcdFx0ezplbHNlfVxuXHRcdFx0XHQ8ZW0gc3R5bGU9XCJjb2xvcjogdmFyKC0tY29sLXNlY28pXCI+I3thZGhvYy50eXBlfTwvZW0+XG5cdFx0XHR7L2lmfVxuXHRcdFx0PGgxPnthZGhvYy50aXRsZX08L2gxPlxuXHRcdFx0PGRsPlxuXHRcdFx0XHQ8ZHQ+e2FkaG9jLmF1dGhvcn08L2R0PlxuXHRcdFx0XHQ8ZGQ+e2FkaG9jLmNpdHl9PC9kZD5cblx0XHRcdDwvZGw+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHA+XG5cdFx0XHRWb2x1cHRhdGUgZWEgYWxpcXVpcCBuaXNpIGNvbnNlcXVhdCBpcHN1bSBpcHN1bSBlbmltIG5vbiBMb3JlbS5cblx0XHRcdE51bGxhIHVsbGFtY28gdXQgbm9zdHJ1ZCBMb3JlbSBxdWlzIG9mZmljaWEgZG9sb3JlIGFkaXBpc2ljaW5nLlxuXHRcdFx0RXggTG9yZW0gb2ZmaWNpYSByZXByZWhlbmRlcml0IHZlbGl0IGF1dGUgdm9sdXB0YXRlIGFsaXF1aXBcblx0XHRcdGV4ZXJjaXRhdGlvbiBpbi4gTnVsbGEgYW5pbSBleCBhbWV0IGRvIGFsaXF1YSBzdW50IGxhYm9ydW0gYW5pbVxuXHRcdFx0YWQuIEN1cGlkYXRhdCB2b2x1cHRhdGUgZGVzZXJ1bnQgc2ludCBlbGl0IGlwc3VtIGFsaXF1aXAgYWxpcXVpcFxuXHRcdFx0ZXhjZXB0ZXVyLiBFbGl0IGlydXJlIHN1bnQgZXUgcHJvaWRlbnQgc2l0LiBDb25zZWN0ZXR1ciBpblxuXHRcdFx0Y29uc2VjdGV0dXIgZXggc2ludCBleGVyY2l0YXRpb24gZW5pbSBhbWV0IGxhYm9yaXMgbmlzaS4gQ2lsbHVtXG5cdFx0XHRlc3NlIG5vbiB1dCBpZCBxdWlzIGFsaXF1aXAgZHVpcyBhbWV0IG9mZmljaWEgZXUgaXJ1cmUgYWxpcXVpcFxuXHRcdFx0c2ludCBxdWlzLiBNYWduYSB2b2x1cHRhdGUgZG9sb3IgaW4gZXNzZSBhbGlxdWEgZXNzZSBhZGlwaXNpY2luZ1xuXHRcdFx0Y29tbW9kby4gQW1ldCBsYWJvcmlzIGlkIHNpdCBwYXJpYXR1ciBsYWJvcmUgbm9zdHJ1ZCBsYWJvcnVtXG5cdFx0XHR2ZWxpdCBleGVyY2l0YXRpb24gZWEgdmVuaWFtIG1pbmltIG1vbGxpdCBkdWlzLiBWb2x1cHRhdGUgZWEgYWxpcXVpcCBuaXNpIGNvbnNlcXVhdCBpcHN1bSBpcHN1bSBlbmltIG5vbiBMb3JlbS5cblx0XHRcdE51bGxhIHVsbGFtY28gdXQgbm9zdHJ1ZCBMb3JlbSBxdWlzIG9mZmljaWEgZG9sb3JlIGFkaXBpc2ljaW5nLlxuXHRcdFx0RXggTG9yZW0gb2ZmaWNpYSByZXByZWhlbmRlcml0IHZlbGl0IGF1dGUgdm9sdXB0YXRlIGFsaXF1aXBcblx0XHRcdGV4ZXJjaXRhdGlvbiBpbi4gTnVsbGEgYW5pbSBleCBhbWV0IGRvIGFsaXF1YSBzdW50IGxhYm9ydW0gYW5pbVxuXHRcdFx0YWQuIEN1cGlkYXRhdCB2b2x1cHRhdGUgZGVzZXJ1bnQgc2ludCBlbGl0IGlwc3VtIGFsaXF1aXAgYWxpcXVpcFxuXHRcdFx0ZXhjZXB0ZXVyLiBFbGl0IGlydXJlIHN1bnQgZXUgcHJvaWRlbnQgc2l0LiBDb25zZWN0ZXR1ciBpblxuXHRcdFx0Y29uc2VjdGV0dXIgZXggc2ludCBleGVyY2l0YXRpb24gZW5pbSBhbWV0IGxhYm9yaXMgbmlzaS4gQ2lsbHVtXG5cdFx0XHRlc3NlIG5vbiB1dCBpZCBxdWlzIGFsaXF1aXAgZHVpcyBhbWV0IG9mZmljaWEgZXUgaXJ1cmUgYWxpcXVpcFxuXHRcdFx0c2ludCBxdWlzLiBNYWduYSB2b2x1cHRhdGUgZG9sb3IgaW4gZXNzZSBhbGlxdWEgZXNzZSBhZGlwaXNpY2luZ1xuXHRcdFx0Y29tbW9kby4gQW1ldCBsYWJvcmlzIGlkIHNpdCBwYXJpYXR1ciBsYWJvcmUgbm9zdHJ1ZCBsYWJvcnVtXG5cdFx0XHR2ZWxpdCBleGVyY2l0YXRpb24gZWEgdmVuaWFtIG1pbmltIG1vbGxpdCBkdWlzLlxuXHRcdDwvcD5cblx0XHQ8IS0tIDxhZGRyZXNzPlxuXHRcdFx0e2FkaG9jLmVtYWlsfVxuXHRcdDwvYWRkcmVzcz5cblx0XHQ8YWRkcmVzcz5cblx0XHRcdHsjaWYgYWRob2MucGhvbmUgIT0gbnVsbH1cblx0XHRcdFx0e2FkaG9jLnBob25lfVxuXHRcdFx0ey9pZn1cblx0XHQ8L2FkZHJlc3M+IC0tPlxuXHQ8L3NlY3Rpb24+XG5cdDwhLS0gQ1RBJ3MgLS0+XG5cdDxCdXR0b24ge2FkaG9jfSB7bGlua30vPlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs2QkE4RmlCLEdBQVk7Ozs7Ozs7OzRDQUFaLEdBQVk7Ozs7OztnQ0FBbkIsR0FBSTs7Ozs7Ozs7Ozs7OztpQ0FBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNUZGLEtBQUs7T0FDTCxJQUFJO09BQ0osS0FBSyxHQUFHLEtBQUs7OztLQUdwQixZQUFZLEdBQUcsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUl0QixNQUFNLEtBQUssV0FBVztTQUM1QixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTzs2QkFDbEMsS0FBSyxHQUFHLElBQUk7OzZCQUVaLEtBQUssR0FBRyxLQUFLOzs7Ozs7OztJQU1wQixHQUFHO1NBQ0EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTzs7WUFFdEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQytEVixHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFBVixHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFGVixHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFBVixHQUFLLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTNDLEdBQUssSUFBQyxLQUFLOzs7OzswQkFFVixHQUFLLElBQUMsTUFBTTs7OzBCQUNaLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7MENBekRWLEdBQUssSUFBQyxLQUFLOzs7Z0JBaURaLEdBQUssSUFBQyxJQUFJLEtBQUssVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUZBakR4QixHQUFLLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OzsrRUFzRFosR0FBSyxJQUFDLEtBQUs7K0VBRVYsR0FBSyxJQUFDLE1BQU07K0VBQ1osR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7OztrREFYSixRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWhGeEIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPOztTQUVsQyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU07O09BQ3JCLEdBQUcsR0FBRyxvREFBb0QsR0FBRyxHQUFHOzs7T0FFaEUsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7O0tBRTVCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztRQUNmLEtBQUssU0FBUyxHQUFHLENBQUMsSUFBSTtXQUNuQixLQUFLOzs7O0NBR2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsNkNBQTZDOzs7O09BU25ELEtBQUs7T0FDTCxJQUFJLEdBQUcsY0FBYzs7O09BRzFCLFdBQVc7YUFDTCxNQUFNLEtBQUssV0FBVztHQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
