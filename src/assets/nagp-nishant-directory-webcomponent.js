function w() {
}
function G(e) {
  return e();
}
function U() {
  return /* @__PURE__ */ Object.create(null);
}
function S(e) {
  e.forEach(G);
}
function D(e) {
  return typeof e == "function";
}
function ae(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function me(e) {
  return Object.keys(e).length === 0;
}
const ge = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in ge;
function d(e, t) {
  e.appendChild(t);
}
function j(e, t, n) {
  e.insertBefore(t, n || null);
}
function q(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ce(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function h(e) {
  return document.createElement(e);
}
function J(e) {
  return document.createTextNode(e);
}
function F() {
  return J(" ");
}
function E(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function k(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function be(e) {
  return Array.from(e.childNodes);
}
function se(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function X(e, t) {
  e.value = t ?? "";
}
function z(e, t, n) {
  for (let l = 0; l < e.options.length; l += 1) {
    const i = e.options[l];
    if (i.__value === t) {
      i.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Y(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
function ve(e) {
  const t = {};
  for (const n of e)
    t[n.name] = n.value;
  return t;
}
let O;
function I(e) {
  O = e;
}
function ye() {
  if (!O)
    throw new Error("Function called outside component initialization");
  return O;
}
function Fe(e) {
  ye().$$.on_mount.push(e);
}
const L = [], Z = [];
let N = [];
const ee = [], ke = /* @__PURE__ */ Promise.resolve();
let V = !1;
function we() {
  V || (V = !0, ke.then(ue));
}
function P(e) {
  N.push(e);
}
const W = /* @__PURE__ */ new Set();
let M = 0;
function ue() {
  if (M !== 0)
    return;
  const e = O;
  do {
    try {
      for (; M < L.length; ) {
        const t = L[M];
        M++, I(t), xe(t.$$);
      }
    } catch (t) {
      throw L.length = 0, M = 0, t;
    }
    for (I(null), L.length = 0, M = 0; Z.length; )
      Z.pop()();
    for (let t = 0; t < N.length; t += 1) {
      const n = N[t];
      W.has(n) || (W.add(n), n());
    }
    N.length = 0;
  } while (L.length);
  for (; ee.length; )
    ee.pop()();
  V = !1, W.clear(), I(e);
}
function xe(e) {
  if (e.fragment !== null) {
    e.update(), S(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(P);
  }
}
function $e(e) {
  const t = [], n = [];
  N.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), N = t;
}
const Ce = /* @__PURE__ */ new Set();
function Ee(e, t) {
  e && e.i && (Ce.delete(e), e.i(t));
}
const Se = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...Se];
function Te(e, t, n, l) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), l || P(() => {
    const u = e.$$.on_mount.map(G).filter(D);
    e.$$.on_destroy ? e.$$.on_destroy.push(...u) : S(u), e.$$.on_mount = [];
  }), r.forEach(P);
}
function Me(e, t) {
  const n = e.$$;
  n.fragment !== null && ($e(n.after_update), S(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Be(e, t) {
  e.$$.dirty[0] === -1 && (L.push(e), we(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Le(e, t, n, l, i, r, u, c = [-1]) {
  const s = O;
  I(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: w,
    not_equal: i,
    bound: U(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: U(),
    dirty: c,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  u && u(o.root);
  let a = !1;
  if (o.ctx = n ? n(e, t.props || {}, (_, f, ...p) => {
    const v = p.length ? p[0] : f;
    return o.ctx && i(o.ctx[_], o.ctx[_] = v) && (!o.skip_bound && o.bound[_] && o.bound[_](v), a && Be(e, _)), f;
  }) : [], o.update(), a = !0, S(o.before_update), o.fragment = l ? l(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const _ = be(t.target);
      o.fragment && o.fragment.l(_), _.forEach(q);
    } else
      o.fragment && o.fragment.c();
    t.intro && Ee(e.$$.fragment), Te(e, t.target, t.anchor, t.customElement), ue();
  }
  I(s);
}
let fe;
typeof HTMLElement == "function" && (fe = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(G).filter(D);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, n) {
    this[e] = n;
  }
  disconnectedCallback() {
    S(this.$$.on_disconnect);
  }
  $destroy() {
    Me(this, 1), this.$destroy = w;
  }
  $on(e, t) {
    if (!D(t))
      return w;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const l = n.indexOf(t);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !me(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
const B = [];
function de(e, t = w) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(c) {
    if (ae(e, c) && (e = c, n)) {
      const s = !B.length;
      for (const o of l)
        o[1](), B.push(o, e);
      if (s) {
        for (let o = 0; o < B.length; o += 2)
          B[o][0](B[o + 1]);
        B.length = 0;
      }
    }
  }
  function r(c) {
    i(c(e));
  }
  function u(c, s = w) {
    const o = [c, s];
    return l.add(o), l.size === 1 && (n = t(i) || w), c(e), () => {
      l.delete(o), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: u };
}
const he = de([]);
async function Ne() {
  he.set([
    { name: "File 1", folder: "Folder 1" },
    { name: "File 2", folder: "Folder 1" },
    { name: "File 3", folder: "Folder 2" },
    { name: "File 4", folder: "Folder 2" }
  ]);
}
Ne();
const _e = de([]);
async function je() {
  _e.set([{ name: "Folder 1" }, { name: "Folder 2" }]);
}
je();
function te(e, t, n) {
  const l = e.slice();
  return l[13] = t[n], l;
}
function ne(e, t, n) {
  const l = e.slice();
  return l[16] = t[n], l;
}
function le(e) {
  let t, n, l, i, r, u, c, s = (
    /*folderList*/
    e[3]
  ), o = [];
  for (let a = 0; a < s.length; a += 1)
    o[a] = oe(ne(e, s, a));
  return {
    c() {
      t = h("label"), n = h("h5"), n.textContent = "Select Folder:", l = F(), i = h("select"), r = h("option"), r.textContent = "Select Folder";
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      r.__value = "", r.value = r.__value, k(i, "class", "in"), /*selectedFolder*/
      e[2] === void 0 && P(() => (
        /*select_change_handler_1*/
        e[11].call(i)
      ));
    },
    m(a, _) {
      j(a, t, _), d(t, n), d(t, l), d(t, i), d(i, r);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(i, null);
      z(
        i,
        /*selectedFolder*/
        e[2],
        !0
      ), u || (c = [
        E(
          i,
          "change",
          /*select_change_handler_1*/
          e[11]
        ),
        E(
          i,
          "change",
          /*handleFolderSelect*/
          e[8]
        )
      ], u = !0);
    },
    p(a, _) {
      if (_ & /*folderList*/
      8) {
        s = /*folderList*/
        a[3];
        let f;
        for (f = 0; f < s.length; f += 1) {
          const p = ne(a, s, f);
          o[f] ? o[f].p(p, _) : (o[f] = oe(p), o[f].c(), o[f].m(i, null));
        }
        for (; f < o.length; f += 1)
          o[f].d(1);
        o.length = s.length;
      }
      _ & /*selectedFolder, folderList*/
      12 && z(
        i,
        /*selectedFolder*/
        a[2]
      );
    },
    d(a) {
      a && q(t), ce(o, a), u = !1, S(c);
    }
  };
}
function oe(e) {
  let t, n = (
    /*folder*/
    e[16].name + ""
  ), l, i;
  return {
    c() {
      t = h("option"), l = J(n), t.__value = i = /*folder*/
      e[16].name, t.value = t.__value;
    },
    m(r, u) {
      j(r, t, u), d(t, l);
    },
    p(r, u) {
      u & /*folderList*/
      8 && n !== (n = /*folder*/
      r[16].name + "") && se(l, n), u & /*folderList*/
      8 && i !== (i = /*folder*/
      r[16].name) && (t.__value = i, t.value = t.__value);
    },
    d(r) {
      r && q(t);
    }
  };
}
function ie(e) {
  let t, n, l, i, r, u = (
    /*nestedFiles*/
    e[4]
  ), c = [];
  for (let s = 0; s < u.length; s += 1)
    c[s] = re(te(e, u, s));
  return {
    c() {
      t = h("label"), n = h("h5"), n.textContent = "Nested Files :", l = F(), i = h("select"), r = h("option"), r.textContent = "See all nested files";
      for (let s = 0; s < c.length; s += 1)
        c[s].c();
      r.__value = "", r.value = r.__value, k(i, "class", "in");
    },
    m(s, o) {
      j(s, t, o), d(t, n), d(t, l), d(t, i), d(i, r);
      for (let a = 0; a < c.length; a += 1)
        c[a] && c[a].m(i, null);
    },
    p(s, o) {
      if (o & /*nestedFiles*/
      16) {
        u = /*nestedFiles*/
        s[4];
        let a;
        for (a = 0; a < u.length; a += 1) {
          const _ = te(s, u, a);
          c[a] ? c[a].p(_, o) : (c[a] = re(_), c[a].c(), c[a].m(i, null));
        }
        for (; a < c.length; a += 1)
          c[a].d(1);
        c.length = u.length;
      }
    },
    d(s) {
      s && q(t), ce(c, s);
    }
  };
}
function re(e) {
  let t, n = (
    /*file*/
    e[13].name + ""
  ), l, i;
  return {
    c() {
      t = h("option"), l = J(n), t.__value = i = /*file*/
      e[13].name, t.value = t.__value;
    },
    m(r, u) {
      j(r, t, u), d(t, l);
    },
    p(r, u) {
      u & /*nestedFiles*/
      16 && n !== (n = /*file*/
      r[13].name + "") && se(l, n), u & /*nestedFiles*/
      16 && i !== (i = /*file*/
      r[13].name) && (t.__value = i, t.value = t.__value);
    },
    d(r) {
      r && q(t);
    }
  };
}
function qe(e) {
  let t, n, l, i, r, u, c, s, o, a, _, f, p, v, x, y, $, C, A, K, H, R, Q, m = (
    /*type*/
    e[1] === "File" && le(e)
  ), g = (
    /*type*/
    e[1] === "File" && /*selectedFolder*/
    e[2] && ie(e)
  );
  return {
    c() {
      t = h("div"), n = h("h4"), n.innerHTML = "<u>Directory Component</u>", l = F(), i = h("label"), r = h("h5"), r.textContent = "Enter Name:  ", u = F(), c = h("input"), s = F(), o = h("label"), a = h("h5"), a.textContent = "Select Type :  ", _ = F(), f = h("select"), p = h("option"), p.textContent = "Select Type", v = h("option"), v.textContent = "Folder", x = h("option"), x.textContent = "File", y = F(), m && m.c(), $ = F(), g && g.c(), C = F(), A = h("button"), A.innerHTML = "<b>Save</b>", K = F(), H = h("button"), H.innerHTML = "<b>Cancel</b>", this.c = w, k(n, "class", "component"), k(c, "type", "text"), k(c, "class", "in"), p.__value = "", p.value = p.__value, v.__value = "Folder", v.value = v.__value, x.__value = "File", x.value = x.__value, k(f, "class", "in"), /*type*/
      e[1] === void 0 && P(() => (
        /*select_change_handler*/
        e[10].call(f)
      )), k(A, "class", "saveBtn"), k(H, "class", "cancelBtn"), k(t, "class", "card");
    },
    m(b, T) {
      j(b, t, T), d(t, n), d(t, l), d(t, i), d(i, r), d(i, u), d(i, c), X(
        c,
        /*name*/
        e[0]
      ), d(t, s), d(t, o), d(o, a), d(o, _), d(o, f), d(f, p), d(f, v), d(f, x), z(
        f,
        /*type*/
        e[1],
        !0
      ), d(t, y), m && m.m(t, null), d(t, $), g && g.m(t, null), d(t, C), d(t, A), d(t, K), d(t, H), R || (Q = [
        E(
          c,
          "input",
          /*input_input_handler*/
          e[9]
        ),
        E(
          f,
          "change",
          /*select_change_handler*/
          e[10]
        ),
        E(
          f,
          "change",
          /*handleTypeChange*/
          e[7]
        ),
        E(
          A,
          "click",
          /*save*/
          e[5]
        ),
        E(
          H,
          "click",
          /*cancel*/
          e[6]
        )
      ], R = !0);
    },
    p(b, [T]) {
      T & /*name*/
      1 && c.value !== /*name*/
      b[0] && X(
        c,
        /*name*/
        b[0]
      ), T & /*type*/
      2 && z(
        f,
        /*type*/
        b[1]
      ), /*type*/
      b[1] === "File" ? m ? m.p(b, T) : (m = le(b), m.c(), m.m(t, $)) : m && (m.d(1), m = null), /*type*/
      b[1] === "File" && /*selectedFolder*/
      b[2] ? g ? g.p(b, T) : (g = ie(b), g.c(), g.m(t, C)) : g && (g.d(1), g = null);
    },
    i: w,
    o: w,
    d(b) {
      b && q(t), m && m.d(), g && g.d(), R = !1, S(Q);
    }
  };
}
function Ae(e, t, n) {
  let l = "", i = "", r = "", u = [], c = [], s = [];
  Fe(() => {
    const y = _e.subscribe((C) => {
      n(3, u = C);
    }), $ = he.subscribe((C) => {
      c = C;
    });
    y(), $();
  });
  const o = () => {
    if (i === "File")
      if (l === "" || l.trim() === "")
        alert("Please select valid File name !!");
      else if (r === "")
        alert("Please select valid folder !!");
      else {
        const y = { name: l, folder: r };
        c = [...c, y], alert(`Save file "${l}" in folder "${r}"`), a();
      }
    else if (l === "" || l.trim() === "")
      alert("Please select valid Folder name !!");
    else {
      const y = { name: l };
      n(3, u = [...u, y]), alert(`Save folder "${l}"`), a();
    }
  }, a = () => {
    n(0, l = ""), n(1, i = ""), n(2, r = "");
  }, _ = (y) => {
    n(1, i = y.target.value), i === "Folder" && n(2, r = "");
  }, f = (y) => {
    n(4, s = c.filter(($) => $.folder === r));
  };
  function p() {
    l = this.value, n(0, l);
  }
  function v() {
    i = Y(this), n(1, i);
  }
  function x() {
    r = Y(this), n(2, r), n(3, u);
  }
  return [
    l,
    i,
    r,
    u,
    s,
    o,
    a,
    _,
    f,
    p,
    v,
    x
  ];
}
class pe extends fe {
  constructor(t) {
    super();
    const n = document.createElement("style");
    n.textContent = ".saveBtn{background-color:rgb(189, 247, 193);margin-top:10px;margin-left:10px;width:44%;margin-bottom:10px;margin-left:15px}.saveBtn:hover{border-color:#05f821}.cancelBtn{background-color:rgb(242, 190, 190);margin-top:10px;width:44%;margin-bottom:10px;margin-left:4px}.cancelBtn:hover{border-color:red}label{margin-left:15px;display:flex;align-items:center;height:30px}label .in{flex-grow:1}.component{text-align:center;margin-top:5px;margin-left:5px;margin-bottom:5px;display:flex}.in{margin-left:10px;float:right;margin-right:15px}.card{width:300px;height:auto;background-color:#ffffff;border-radius:10px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.4);padding:2px;margin:1px;text-decoration-color:rgb(1, 24, 46);position:relative}", this.shadowRoot.appendChild(n), Le(
      this,
      {
        target: this.shadowRoot,
        props: ve(this.attributes),
        customElement: !0
      },
      Ae,
      qe,
      ae,
      {},
      null
    ), t && t.target && j(t.target, this, t.anchor);
  }
}
customElements.define("nishant-directory", pe);
const He = new pe({
  target: document.getElementById("app")
});
export {
  He as default
};
