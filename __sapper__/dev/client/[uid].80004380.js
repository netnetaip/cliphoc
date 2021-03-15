import { S as SvelteComponentDev, i as init, d as dispatch_dev, r as not_equal, A as validate_each_argument, v as validate_slots, t as text, h as claim_text, l as insert_dev, b as detach_dev, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, m as append_dev, o as set_data_dev, a as space, q as query_selector_all, c as claim_space, y as add_render_callback, z as create_in_transition, n as noop, G as destroy_each } from './client.e7cf2a80.js';
import { f as fly } from './index.ff7bd4a9.js';

/* src/routes/post/[uid].svelte generated by Svelte v3.24.1 */
const file = "src/routes/post/[uid].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (53:3) {#if upid.hour}
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
		source: "(53:3) {#if upid.hour}",
		ctx
	});

	return block;
}

// (70:3) {#each upid.brief as list}
function create_each_block_1(ctx) {
	let li;
	let t_value = /*list*/ ctx[2] + "";
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
			attr_dev(li, "class", "svelte-pcxtsr");
			add_location(li, file, 70, 4, 1451);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*upid*/ 1 && t_value !== (t_value = /*list*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(70:3) {#each upid.brief as list}",
		ctx
	});

	return block;
}

// (80:3) {#each upid.requirements as list}
function create_each_block(ctx) {
	let li;
	let t_value = /*list*/ ctx[2] + "";
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
			attr_dev(li, "class", "svelte-pcxtsr");
			add_location(li, file, 80, 4, 1605);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*upid*/ 1 && t_value !== (t_value = /*list*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(80:3) {#each upid.requirements as list}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div;
	let section0;
	let header0;
	let h1;
	let t1_value = /*upid*/ ctx[0].title + "";
	let t1;
	let t2;
	let dl;
	let dt;
	let t3_value = /*upid*/ ctx[0].author + "";
	let t3;
	let dd;
	let t4_value = /*upid*/ ctx[0].city + "";
	let t4;
	let t5;
	let strong;
	let t6_value = /*upid*/ ctx[0].amount + "";
	let t6;
	let t7;
	let t8;
	let section1;
	let header1;
	let h20;
	let t9;
	let t10;
	let ul0;
	let t11;
	let section2;
	let header2;
	let h21;
	let t12;
	let t13;
	let ul1;
	let t14;
	let button;
	let t15;
	let div_intro;
	document.title = title_value = /*upid*/ ctx[0].title;
	let if_block = /*upid*/ ctx[0].hour && create_if_block(ctx);
	let each_value_1 = /*upid*/ ctx[0].brief;
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*upid*/ ctx[0].requirements;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			section0 = element("section");
			header0 = element("header");
			h1 = element("h1");
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
			t7 = text("€\n\t\t\t");
			if (if_block) if_block.c();
			t8 = space();
			section1 = element("section");
			header1 = element("header");
			h20 = element("h2");
			t9 = text("Brief");
			t10 = space();
			ul0 = element("ul");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t11 = space();
			section2 = element("section");
			header2 = element("header");
			h21 = element("h2");
			t12 = text("Requirements");
			t13 = space();
			ul1 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t14 = space();
			button = element("button");
			t15 = text("Show contacts");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-2rmxq8\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			section0 = claim_element(div_nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			header0 = claim_element(section0_nodes, "HEADER", { class: true });
			var header0_nodes = children(header0);
			h1 = claim_element(header0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(header0_nodes);
			dl = claim_element(header0_nodes, "DL", {});
			var dl_nodes = children(dl);
			dt = claim_element(dl_nodes, "DT", {});
			var dt_nodes = children(dt);
			t3 = claim_text(dt_nodes, t3_value);
			dt_nodes.forEach(detach_dev);
			dd = claim_element(dl_nodes, "DD", {});
			var dd_nodes = children(dd);
			t4 = claim_text(dd_nodes, t4_value);
			dd_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			header0_nodes.forEach(detach_dev);
			t5 = claim_space(section0_nodes);
			strong = claim_element(section0_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t6 = claim_text(strong_nodes, t6_value);
			t7 = claim_text(strong_nodes, "€\n\t\t\t");
			if (if_block) if_block.l(strong_nodes);
			strong_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t8 = claim_space(div_nodes);
			section1 = claim_element(div_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			header1 = claim_element(section1_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			h20 = claim_element(header1_nodes, "H2", {});
			var h20_nodes = children(h20);
			t9 = claim_text(h20_nodes, "Brief");
			h20_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t10 = claim_space(section1_nodes);
			ul0 = claim_element(section1_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(ul0_nodes);
			}

			ul0_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t11 = claim_space(div_nodes);
			section2 = claim_element(div_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			header2 = claim_element(section2_nodes, "HEADER", { class: true });
			var header2_nodes = children(header2);
			h21 = claim_element(header2_nodes, "H2", {});
			var h21_nodes = children(h21);
			t12 = claim_text(h21_nodes, "Requirements");
			h21_nodes.forEach(detach_dev);
			header2_nodes.forEach(detach_dev);
			t13 = claim_space(section2_nodes);
			ul1 = claim_element(section2_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			t14 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t15 = claim_text(button_nodes, "Show contacts");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 44, 3, 856);
			add_location(dt, file, 46, 4, 890);
			add_location(dd, file, 47, 4, 917);
			add_location(dl, file, 45, 3, 881);
			attr_dev(header0, "class", "svelte-pcxtsr");
			add_location(header0, file, 42, 2, 807);
			attr_dev(strong, "class", "svelte-pcxtsr");
			add_location(strong, file, 50, 2, 961);
			attr_dev(section0, "class", "svelte-pcxtsr");
			add_location(section0, file, 41, 1, 795);
			add_location(h20, file, 66, 3, 1383);
			attr_dev(header1, "class", "svelte-pcxtsr");
			add_location(header1, file, 65, 2, 1371);
			attr_dev(ul0, "class", "svelte-pcxtsr");
			add_location(ul0, file, 68, 2, 1412);
			attr_dev(section1, "class", "svelte-pcxtsr");
			add_location(section1, file, 64, 1, 1359);
			add_location(h21, file, 76, 3, 1523);
			attr_dev(header2, "class", "svelte-pcxtsr");
			add_location(header2, file, 75, 2, 1511);
			attr_dev(ul1, "class", "svelte-pcxtsr");
			add_location(ul1, file, 78, 2, 1559);
			attr_dev(section2, "class", "svelte-pcxtsr");
			add_location(section2, file, 74, 1, 1499);
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "svelte-pcxtsr");
			add_location(button, file, 84, 1, 1653);
			attr_dev(div, "class", "svelte-pcxtsr");
			add_location(div, file, 40, 0, 742);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, section0);
			append_dev(section0, header0);
			append_dev(header0, h1);
			append_dev(h1, t1);
			append_dev(header0, t2);
			append_dev(header0, dl);
			append_dev(dl, dt);
			append_dev(dt, t3);
			append_dev(dl, dd);
			append_dev(dd, t4);
			append_dev(section0, t5);
			append_dev(section0, strong);
			append_dev(strong, t6);
			append_dev(strong, t7);
			if (if_block) if_block.m(strong, null);
			append_dev(div, t8);
			append_dev(div, section1);
			append_dev(section1, header1);
			append_dev(header1, h20);
			append_dev(h20, t9);
			append_dev(section1, t10);
			append_dev(section1, ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(ul0, null);
			}

			append_dev(div, t11);
			append_dev(div, section2);
			append_dev(section2, header2);
			append_dev(header2, h21);
			append_dev(h21, t12);
			append_dev(section2, t13);
			append_dev(section2, ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul1, null);
			}

			append_dev(div, t14);
			append_dev(div, button);
			append_dev(button, t15);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*upid*/ 1 && title_value !== (title_value = /*upid*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*upid*/ 1 && t1_value !== (t1_value = /*upid*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*upid*/ 1 && t3_value !== (t3_value = /*upid*/ ctx[0].author + "")) set_data_dev(t3, t3_value);
			if (dirty & /*upid*/ 1 && t4_value !== (t4_value = /*upid*/ ctx[0].city + "")) set_data_dev(t4, t4_value);
			if (dirty & /*upid*/ 1 && t6_value !== (t6_value = /*upid*/ ctx[0].amount + "")) set_data_dev(t6, t6_value);

			if (/*upid*/ ctx[0].hour) {
				if (if_block) ; else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(strong, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*upid*/ 1) {
				each_value_1 = /*upid*/ ctx[0].brief;
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

			if (dirty & /*upid*/ 1) {
				each_value = /*upid*/ ctx[0].requirements;
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
		},
		i: function intro(local) {
			if (!div_intro) {
				add_render_callback(() => {
					div_intro = create_in_transition(div, fly, { duration: 320, y: 40, opacity: 1 });
					div_intro.start();
				});
			}
		},
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (if_block) if_block.d();
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
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

async function preload(page) {
	const { uid } = page.params;
	const url = "https://6016e904f534300017a4509d.mockapi.io/board/" + uid;

	// Fetch
	const res = await this.fetch(url);

	// Validate
	if (res.status === 200) {
		const upid = await res.json();
		return { upid };
	}

	// Error
	this.error(404, "Post is no longer valid.");
}

function instance($$self, $$props, $$invalidate) {
	let { upid } = $$props;

	// Back
	const historyback = () => {
		if (typeof window !== "undefined") {
			window.history.back();
		}
	};

	const writable_props = ["upid"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Buidu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Buidu5D", $$slots, []);

	$$self.$$set = $$props => {
		if ("upid" in $$props) $$invalidate(0, upid = $$props.upid);
	};

	$$self.$capture_state = () => ({ preload, fly, upid, historyback });

	$$self.$inject_state = $$props => {
		if ("upid" in $$props) $$invalidate(0, upid = $$props.upid);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [upid];
}

class U5Buidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, not_equal, { upid: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Buidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*upid*/ ctx[0] === undefined && !("upid" in props)) {
			console.warn("<U5Buidu5D> was created without expected prop 'upid'");
		}
	}

	get upid() {
		throw new Error("<U5Buidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set upid(value) {
		throw new Error("<U5Buidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Buidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VpZF0uODAwMDQzODAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdC9bdWlkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48IS0tIFNlcnZlciAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHQvLyBGZXRjaFxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCggcGFnZSApIHtcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFnZS5wYXJhbXM7XG5cdFx0Y29uc3QgdXJsID0gXCJodHRwczovLzYwMTZlOTA0ZjUzNDMwMDAxN2E0NTA5ZC5tb2NrYXBpLmlvL2JvYXJkL1wiICsgdWlkO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgdXBpZCA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHRyZXR1cm4geyB1cGlkIH1cblx0XHR9XG5cdFx0Ly8gRXJyb3Jcblx0XHR0aGlzLmVycm9yKDQwNCwgXCJQb3N0IGlzIG5vIGxvbmdlciB2YWxpZC5cIik7XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBmbHkgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcblxuXHQvLyBFeHBvcnRzXG5cdGV4cG9ydCBsZXQgdXBpZDtcblxuXHQvLyBCYWNrXG5cdGNvbnN0IGhpc3RvcnliYWNrID0gKCkgPT4ge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG5cdFx0fVxuXHR9O1xuPC9zY3JpcHQ+XG5cbjwhLS0gU3BlY2lhbCAtLT5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPnt1cGlkLnRpdGxlfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48IS0tIEhUTUwgLS0+XG48ZGl2IGluOmZseT17eyBkdXJhdGlvbjogMzIwLCB5OiA0MCwgb3BhY2l0eTogMSB9fT5cblx0PHNlY3Rpb24+XG5cdFx0PGhlYWRlcj5cblx0XHRcdDwhLS0gPG1hcms+e3VwaWQudHlwZX08L21hcms+IC0tPlxuXHRcdFx0PGgxPnt1cGlkLnRpdGxlfTwvaDE+XG5cdFx0XHQ8ZGw+XG5cdFx0XHRcdDxkdD57dXBpZC5hdXRob3J9PC9kdD5cblx0XHRcdFx0PGRkPnt1cGlkLmNpdHl9PC9kZD5cblx0XHRcdDwvZGw+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHN0cm9uZz5cblx0XHRcdHt1cGlkLmFtb3VudH0mZXVybztcblx0XHRcdHsjaWYgdXBpZC5ob3VyfVxuXHRcdFx0XHRhbiBob3VyXG5cdFx0XHR7L2lmfVxuXHRcdDwvc3Ryb25nPlxuXHQ8L3NlY3Rpb24+XG5cdDwhLS0gJm5ic3A7XG5cdFx0PHN0cm9uZz57dXBpZC5hbW91bnR9IHt1cGlkLmN1cnJlbmN5fSAvIHt1cGlkLnBheXR5cGV9PC9zdHJvbmc+XG5cdFx0eyNpZiB1cGlkLmN1cnJlbmN5ID09PSBcIlVTRFwifVxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9e3VwaWQuYW1vdW50fSt1c2QrdG8rZXVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuXHRcdFx0XHQ8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIi9zcHJpdGUuc3ZnI3BsdXNcIj48L3VzZT48L3N2Zz5cblx0XHRcdDwvYT5cblx0XHR7L2lmfSAtLT5cblx0PHNlY3Rpb24+XG5cdFx0PGhlYWRlcj5cblx0XHRcdDxoMj5CcmllZjwvaDI+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHVsPlxuXHRcdFx0eyNlYWNoIHVwaWQuYnJpZWYgYXMgbGlzdH1cblx0XHRcdFx0PGxpPntsaXN0fTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9zZWN0aW9uPlxuXHQ8c2VjdGlvbj5cblx0XHQ8aGVhZGVyPlxuXHRcdFx0PGgyPlJlcXVpcmVtZW50czwvaDI+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHVsPlxuXHRcdFx0eyNlYWNoIHVwaWQucmVxdWlyZW1lbnRzIGFzIGxpc3R9XG5cdFx0XHRcdDxsaT57bGlzdH08L2xpPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvdWw+XG5cdDwvc2VjdGlvbj5cblx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+U2hvdyBjb250YWN0czwvYnV0dG9uPlxuPC9kaXY+XG48IS0tIDxhZGRyZXNzPlxuXHR7dXBpZC5lbWFpbH1cbjwvYWRkcmVzcz5cbjxhZGRyZXNzPlxuXHR7I2lmIHVwaWQucGhvbmUgIT0gbnVsbH1cblx0XHR7dXBpZC5waG9uZX1cblx0ey9pZn1cbjwvYWRkcmVzcz4gLS0+XG48IS0tIENUQSdzIC0tPlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cblx0ZGl2LCBzZWN0aW9uIHtcblx0XHQvKiBEaXNwbGF5ICovXG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRhbGlnbi1pdGVtczogc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogc3RhcnQ7XG5cdFx0anVzdGlmeS1pdGVtczogc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzdGFydDtcblx0XHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcblx0XHRncmlkLWNvbHVtbi1nYXA6IGNhbGModmFyKC0tcHQpIC8gMik7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHRkaXYge1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMyk7XG5cdH1cblx0c2VjdGlvbiB7XG5cdFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0fVxuXHRoZWFkZXIge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiBpbmhlcml0O1xuXHRcdG1heC13aWR0aDogaW5oZXJpdDtcblx0XHR3aWR0aDogaW5oZXJpdDtcblx0fVxuXHRzdHJvbmcge1xuXHRcdG1hcmdpbi10b3A6IGNhbGModmFyKC0tcHQpICogMik7XG5cdFx0LyogUmVzdCAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1naG9zdCk7XG5cdFx0Y29sb3I6IHZhcigtLWNvbC1zZWNvKTtcblx0XHRwYWRkaW5nOiB2YXIoLS1wdCkgY2FsYyh2YXIoLS1wdCkgKiAyKTtcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1wdCk7XG5cdH1cblx0dWwge1xuXHRcdG1hcmdpbjogdmFyKC0tcHQpIDA7XG5cdH1cblx0bGkge1xuXHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0fVxuXHRidXR0b24ge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBSZXN0ICovXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wdCkgKiAyKSBjYWxjKHZhcigtLXB0KSAqIDMpO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLXB0KTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtc2Vjbyk7XG5cdFx0Y29sb3I6IHZhcigtLWNvbC1wcmltZSk7XG5cdFx0LyogVHJhbnNpdGlvbiAqL1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjQ0LCAwLjIxLCAwLCAxKTtcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHR9XG5cdGJ1dHRvbjphY3RpdmUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUzZCgwLjk2LCAwLjk2LCAxKTtcblx0fVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBc0VTLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQVVKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFwQ0wsR0FBSSxJQUFDLEtBQUs7Ozs7O3lCQUVULEdBQUksSUFBQyxNQUFNOzs7eUJBQ1gsR0FBSSxJQUFDLElBQUk7Ozs7eUJBSWQsR0FBSSxJQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FmTixHQUFJLElBQUMsS0FBSzt5QkFnQlgsR0FBSSxJQUFDLElBQUk7NkJBaUJQLEdBQUksSUFBQyxLQUFLOzs7O2tDQUFmLE1BQUk7Ozs7MkJBVUMsR0FBSSxJQUFDLFlBQVk7Ozs7Z0NBQXRCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUEzQ0EsR0FBSSxJQUFDLEtBQUs7Ozs7K0RBUVgsR0FBSSxJQUFDLEtBQUs7K0RBRVQsR0FBSSxJQUFDLE1BQU07K0RBQ1gsR0FBSSxJQUFDLElBQUk7K0RBSWQsR0FBSSxJQUFDLE1BQU07O2dCQUNQLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7NEJBaUJQLEdBQUksSUFBQyxLQUFLOzs7O2lDQUFmLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBQUosTUFBSTs7OzswQkFVQyxHQUFJLElBQUMsWUFBWTs7OzsrQkFBdEIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7a0RBdkNNLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFuQ3hCLE9BQU8sQ0FBRSxJQUFJO1NBQzFCLEdBQUcsS0FBSyxJQUFJLENBQUMsTUFBTTtPQUNyQixHQUFHLEdBQUcsb0RBQW9ELEdBQUcsR0FBRzs7O09BRWhFLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7OztLQUU1QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7UUFDZixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7V0FDbEIsSUFBSTs7OztDQUdkLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDBCQUEwQjs7OztPQVFoQyxJQUFJOzs7T0FHVCxXQUFXO2FBQ0wsTUFBTSxLQUFLLFdBQVc7R0FDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
