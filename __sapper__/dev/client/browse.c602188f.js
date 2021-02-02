import { S as SvelteComponentDev, i as init, d as dispatch_dev, x as not_equal, y as validate_each_argument, L as validate_each_keys, v as validate_slots, M as globals, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, z as set_data_dev, q as query_selector_all, N as update_keyed_each, n as noop, O as destroy_block } from './client.024fdc6f.js';

/* src/routes/browse.svelte generated by Svelte v3.24.1 */

const { console: console_1 } = globals;
const file = "src/routes/browse.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	return child_ctx;
}

// (157:3) {#each list as list (list.id)}
function create_each_block(key_1, ctx) {
	let a;
	let article;
	let h3;
	let t0_value = /*list*/ ctx[0].title + "";
	let t0;
	let t1;
	let dl;
	let dt;
	let t2_value = /*list*/ ctx[0].author + "";
	let t2;
	let dd;
	let t3_value = /*list*/ ctx[0].city + "";
	let t3;
	let t4;
	let t5_value = /*list*/ ctx[0].country + "";
	let t5;
	let t6;
	let p;
	let t7_value = /*list*/ ctx[0].brief + "";
	let t7;
	let a_href_value;
	let t8;
	let hr;

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			a = element("a");
			article = element("article");
			h3 = element("h3");
			t0 = text(t0_value);
			t1 = space();
			dl = element("dl");
			dt = element("dt");
			t2 = text(t2_value);
			dd = element("dd");
			t3 = text(t3_value);
			t4 = text(", ");
			t5 = text(t5_value);
			t6 = space();
			p = element("p");
			t7 = text(t7_value);
			t8 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			article = claim_element(a_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			h3 = claim_element(article_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, t0_value);
			h3_nodes.forEach(detach_dev);
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
			t4 = claim_text(dd_nodes, ", ");
			t5 = claim_text(dd_nodes, t5_value);
			dd_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			t6 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			t7 = claim_text(p_nodes, t7_value);
			p_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			attr_dev(h3, "class", "svelte-1uteh1o");
			add_location(h3, file, 159, 6, 3425);
			add_location(dt, file, 161, 7, 3465);
			add_location(dd, file, 162, 7, 3495);
			add_location(dl, file, 160, 6, 3453);
			attr_dev(p, "class", "svelte-1uteh1o");
			add_location(p, file, 164, 6, 3550);
			attr_dev(article, "class", "svelte-1uteh1o");
			add_location(article, file, 158, 5, 3409);
			attr_dev(a, "href", a_href_value = "locations/" + /*list*/ ctx[0].id);
			attr_dev(a, "class", "svelte-1uteh1o");
			add_location(a, file, 157, 4, 3373);
			add_location(hr, file, 167, 4, 3599);
			this.first = a;
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, article);
			append_dev(article, h3);
			append_dev(h3, t0);
			append_dev(article, t1);
			append_dev(article, dl);
			append_dev(dl, dt);
			append_dev(dt, t2);
			append_dev(dl, dd);
			append_dev(dd, t3);
			append_dev(dd, t4);
			append_dev(dd, t5);
			append_dev(article, t6);
			append_dev(article, p);
			append_dev(p, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, hr, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*list*/ 1 && t0_value !== (t0_value = /*list*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*list*/ 1 && t2_value !== (t2_value = /*list*/ ctx[0].author + "")) set_data_dev(t2, t2_value);
			if (dirty & /*list*/ 1 && t3_value !== (t3_value = /*list*/ ctx[0].city + "")) set_data_dev(t3, t3_value);
			if (dirty & /*list*/ 1 && t5_value !== (t5_value = /*list*/ ctx[0].country + "")) set_data_dev(t5, t5_value);
			if (dirty & /*list*/ 1 && t7_value !== (t7_value = /*list*/ ctx[0].brief + "")) set_data_dev(t7, t7_value);

			if (dirty & /*list*/ 1 && a_href_value !== (a_href_value = "locations/" + /*list*/ ctx[0].id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(hr);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(157:3) {#each list as list (list.id)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section;
	let header;
	let h1;
	let t1;
	let t2;
	let div1;
	let div0;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_value = /*list*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*list*/ ctx[0].id;
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
			div1 = element("div");
			div0 = element("div");

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
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Browse";
			add_location(h1, file, 152, 2, 3294);
			attr_dev(header, "class", "svelte-1uteh1o");
			add_location(header, file, 151, 1, 3283);
			attr_dev(div0, "class", "svelte-1uteh1o");
			add_location(div0, file, 155, 2, 3329);
			attr_dev(div1, "class", "svelte-1uteh1o");
			add_location(div1, file, 154, 1, 3321);
			attr_dev(section, "class", "svelte-1uteh1o");
			add_location(section, file, 150, 0, 3272);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, header);
			append_dev(header, h1);
			append_dev(h1, t1);
			append_dev(section, t2);
			append_dev(section, div1);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*list*/ 1) {
				const each_value = /*list*/ ctx[0];
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, destroy_block, create_each_block, null, get_each_context);
			}
		},
		i: noop,
		o: noop,
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page, session) {
	// URL
	const url = "https://6016e904f534300017a4509d.mockapi.io/board";

	// Fetch
	const res = await this.fetch(url);

	// Validate
	if (res.status === 200) {
		const list = await res.json();
		return { list };
	}

	// Error
	this.error(500, "Problems with server. Be right back soon ;)");
}

function instance($$self, $$props, $$invalidate) {
	let { list = [] } = $$props;
	let { checkgroup = [] } = $$props;

	// DEVELOPER_FUNCTIONS
	let takeactionval;

	const takeaction = async () => {
		if (!sessionStorage.getItem("Session_state", takeactionval)) {
			return sessionStorage.setItem("Session_state", takeactionval);
		} else {
			return sessionStorage.removeItem("Session_state", takeactionval);
		}
	};

	const writable_props = ["list", "checkgroup"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Browse> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Browse", $$slots, []);

	$$self.$$set = $$props => {
		if ("list" in $$props) $$invalidate(0, list = $$props.list);
		if ("checkgroup" in $$props) $$invalidate(1, checkgroup = $$props.checkgroup);
	};

	$$self.$capture_state = () => ({
		preload,
		list,
		checkgroup,
		takeactionval,
		takeaction
	});

	$$self.$inject_state = $$props => {
		if ("list" in $$props) $$invalidate(0, list = $$props.list);
		if ("checkgroup" in $$props) $$invalidate(1, checkgroup = $$props.checkgroup);
		if ("takeactionval" in $$props) $$invalidate(2, takeactionval = $$props.takeactionval);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*list*/ 1) {
			// DEVELOPER_CONSOLE_LOG
			 console.log("%c BROWSE List ", "color:blue; font-weight:bold; font-size:14px", list);
		}

		if ($$self.$$.dirty & /*checkgroup*/ 2) {
			 console.log("%c BROWSE Checkgroup ", "color:green; font-weight:bold; font-size:14px", checkgroup);
		}

		if ($$self.$$.dirty & /*takeactionval*/ 4) {
			 (async () => {
				if (typeof window !== "undefined") {
					if (sessionStorage.getItem("Session_state", takeactionval)) {
						return $$invalidate(2, takeactionval = "Session_is_SET");
					} else {
						return $$invalidate(2, takeactionval = "Session_is_EMPTY");
					}
				}
			})();
		}
	};

	return [list, checkgroup];
}

class Browse extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, not_equal, { list: 0, checkgroup: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Browse",
			options,
			id: create_fragment.name
		});
	}

	get list() {
		throw new Error("<Browse>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set list(value) {
		throw new Error("<Browse>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get checkgroup() {
		throw new Error("<Browse>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set checkgroup(value) {
		throw new Error("<Browse>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Browse;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmM2MDIxODhmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jyb3dzZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBTZXJ2ZXIgLS0+XG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSwgc2Vzc2lvbikge1xuXHRcdC8vIFVSTFxuXHRcdGNvbnN0IHVybCA9IFwiaHR0cHM6Ly82MDE2ZTkwNGY1MzQzMDAwMTdhNDUwOWQubW9ja2FwaS5pby9ib2FyZFwiO1xuXHRcdC8vIEZldGNoXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuXHRcdC8vIFZhbGlkYXRlXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgbGlzdCA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHRyZXR1cm4geyBsaXN0IH07XG5cdFx0fVxuXHRcdC8vIEVycm9yXG5cdFx0dGhpcy5lcnJvcig1MDAsIFwiUHJvYmxlbXMgd2l0aCBzZXJ2ZXIuIEJlIHJpZ2h0IGJhY2sgc29vbiA7KVwiKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjwhLS0gQ2xpZW50IC0tPlxuPHNjcmlwdD5cblx0Ly8gaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXIuc3ZlbHRlXCI7XG5cdC8vIGltcG9ydCBGaWd1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2UvRmlndXJlLnN2ZWx0ZVwiO1xuXG5cdC8vIEV4cG9ydGVkXG5cdGV4cG9ydCBsZXQgbGlzdCA9IFtdO1xuXHRleHBvcnQgbGV0IGNoZWNrZ3JvdXAgPSBbXTtcblxuXHQvLyBERVZFTE9QRVJfQ09OU09MRV9MT0dcblx0JDogY29uc29sZS5sb2coXCIlYyBCUk9XU0UgTGlzdCBcIiwgXCJjb2xvcjpibHVlOyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6MTRweFwiLCBsaXN0KTtcblx0JDogY29uc29sZS5sb2coXCIlYyBCUk9XU0UgQ2hlY2tncm91cCBcIiwgXCJjb2xvcjpncmVlbjsgZm9udC13ZWlnaHQ6Ym9sZDsgZm9udC1zaXplOjE0cHhcIiwgY2hlY2tncm91cCk7XG5cdC8vIERFVkVMT1BFUl9GVU5DVElPTlNcblx0bGV0IHRha2VhY3Rpb252YWw7XG5cdCQ6IChhc3luYygpID0+IHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0aWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJTZXNzaW9uX3N0YXRlXCIsIHRha2VhY3Rpb252YWwpKSB7XG5cdFx0XHRcdHJldHVybiB0YWtlYWN0aW9udmFsID0gXCJTZXNzaW9uX2lzX1NFVFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRha2VhY3Rpb252YWwgPSBcIlNlc3Npb25faXNfRU1QVFlcIjtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG5cdGNvbnN0IHRha2VhY3Rpb24gPSBhc3luYyAoKSA9PiB7XG5cdFx0aWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiU2Vzc2lvbl9zdGF0ZVwiLCB0YWtlYWN0aW9udmFsKSkge1xuXHRcdFx0cmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJTZXNzaW9uX3N0YXRlXCIsIHRha2VhY3Rpb252YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcIlNlc3Npb25fc3RhdGVcIiwgdGFrZWFjdGlvbnZhbCk7XG5cdFx0fVxuXHR9O1xuPC9zY3JpcHQ+XG5cbjwhLS0gU3BlY2lhbCAtLT5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkJyb3dzZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPHN2ZWx0ZTpvcHRpb25zIGltbXV0YWJsZSAvPlxuXG48IS0tIENTUyAtLT5cbjxzdHlsZT5cblx0c2VjdGlvbiB7XG5cdFx0LyogRGlzcGxheSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwdnc7XG5cdFx0bWF4LXdpZHRoOiAxMDB2dztcblx0XHR3aWR0aDogMTAwdnc7XG5cdFx0LyogUmVzdCAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC1wcmltZSk7XG5cdFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuXHR9XG5cdHNlY3Rpb24gPiBkaXYsIHNlY3Rpb24gPiBkaXYgPiBkaXYsIGEsIGFydGljbGUge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdH1cblx0c2VjdGlvbiA+IGRpdiB7XG5cdFx0LyogU2l6aW5nICovXG5cdFx0bWluLWhlaWdodDogbm9uZTtcblx0XHRtYXgtaGVpZ2h0OiBub25lO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qIFJlc3QgKi9cblx0XHRvdmVyZmxvdzogYXV0bztcblx0fVxuXHRoZWFkZXIge1xuXHRcdC8qIERpc3BsYXkgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiA4dmg7XG5cdFx0bWF4LWhlaWdodDogOHZoO1xuXHRcdGhlaWdodDogOHZoO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1wdCkgKiAzKTtcblx0fVxuXHRhIHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0LyogUmVzdCAqL1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcHQpICogMy41KSBjYWxjKHZhcigtLXB0KSAqIDMpIGNhbGModmFyKC0tcHQpICogMi41KTtcblx0fVxuXHRhcnRpY2xlIHtcblx0XHQvKiBTaXppbmcgKi9cblx0XHRtaW4taGVpZ2h0OiBub25lO1xuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbiAgICBhcnRpY2xlID4gaDMsIGFydGljbGUgPiBwIHtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAvKiBTaXppbmcgKi9cbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cdH1cblx0YXJ0aWNsZSA+IHAge1xuXHRcdHBhZGRpbmctdG9wOiB2YXIoLS1wdCk7XG5cdH1cbjwvc3R5bGU+XG5cbjwhLS0gSFRNTCAtLT5cbjxzZWN0aW9uPlxuXHQ8aGVhZGVyPlxuXHRcdDxoMT5Cb2FyZDwvaDE+XG5cdDwvaGVhZGVyPlxuXHQ8ZGl2PlxuXHRcdDxkaXY+XG5cdFx0XHR7I2VhY2ggbGlzdCBhcyBsaXN0IChsaXN0LmlkKX1cblx0XHRcdFx0PGEgaHJlZj1cImxvY2F0aW9ucy97bGlzdC5pZH1cIj5cblx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdDxoMz57bGlzdC50aXRsZX08L2gzPlxuXHRcdFx0XHRcdFx0PGRsPlxuXHRcdFx0XHRcdFx0XHQ8ZHQ+e2xpc3QuYXV0aG9yfTwvZHQ+XG5cdFx0XHRcdFx0XHRcdDxkZD57bGlzdC5jaXR5fSwge2xpc3QuY291bnRyeX08L2RkPlxuXHRcdFx0XHRcdFx0PC9kbD5cblx0XHRcdFx0XHRcdDxwPntsaXN0LmJyaWVmfTwvcD5cblx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGhyPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbjwhLS0gPEZpbHRlciBiaW5kOmNoZWNrZ3JvdXAgYmluZDp0cmFuc2xhdGUgYmluZDpsaXN0cyBiaW5kOmxpc3QvPiAtLT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBK0pXLEdBQUksSUFBQyxLQUFLOzs7Ozt5QkFFVCxHQUFJLElBQUMsTUFBTTs7O3lCQUNYLEdBQUksSUFBQyxJQUFJOzs7eUJBQUksR0FBSSxJQUFDLE9BQU87Ozs7eUJBRTNCLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQVBJLEdBQUksSUFBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrREFFcEIsR0FBSSxJQUFDLEtBQUs7K0RBRVQsR0FBSSxJQUFDLE1BQU07K0RBQ1gsR0FBSSxJQUFDLElBQUk7K0RBQUksR0FBSSxJQUFDLE9BQU87K0RBRTNCLEdBQUksSUFBQyxLQUFLOztzRkFQSSxHQUFJLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQURyQixHQUFJOztpQ0FBVSxHQUFJLElBQUMsRUFBRTs7O2dDQUExQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUFDLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBMUpTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTzs7T0FFcEMsR0FBRyxHQUFHLG1EQUFtRDs7O09BRXpELEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7OztLQUU1QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7UUFDZixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7V0FDbEIsSUFBSTs7OztDQUdkLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDZDQUE2Qzs7OztPQVVuRCxJQUFJO09BQ0osVUFBVTs7O0tBTWpCLGFBQWE7O09BVVgsVUFBVTtPQUNWLGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWE7VUFDbEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsYUFBYTs7VUFFckQsY0FBYyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBakI5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLDhDQUE4QyxFQUFFLElBQUk7Ozs7SUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSwrQ0FBK0MsRUFBRSxVQUFVOzs7OztlQUl2RixNQUFNLEtBQUssV0FBVztTQUM1QixjQUFjLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxhQUFhOzZCQUNqRCxhQUFhLEdBQUcsZ0JBQWdCOzs2QkFFaEMsYUFBYSxHQUFHLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
