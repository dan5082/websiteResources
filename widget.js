!function(e) {
    function t(o) {
        if (n[o])
            return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/js/", t(0)
}([function(e, t, n) {
    e.exports = n(35)
}, function(e, t, n) {
    !function(e, n) {
        n(t)
    }(this, function(e) {
        function t(e, t, n) {
            this.nodeName = e, this.attributes = t, this.children = n, this.key = t && t.key
        }
        function n(e, n) {
            var o,
                r,
                i,
                a,
                l;
            for (l = arguments.length; l-- > 2;)
                I.push(arguments[l]);
            for (n && n.children && (I.length || I.push(n.children), delete n.children); I.length;)
                if ((i = I.pop()) instanceof Array)
                    for (l = i.length; l--;)
                        I.push(i[l]);
                else
                    null != i && i !== !0 && i !== !1 && ("number" == typeof i && (i = String(i)), a = "string" == typeof i, a && r ? o[o.length - 1] += i : ((o || (o = [])).push(i), r = a));
            var s = new t(e, n || void 0, o || H);
            return B.vnode && B.vnode(s), s
        }
        function o(e, t) {
            if (t)
                for (var n in t)
                    e[n] = t[n];
            return e
        }
        function r(e) {
            return o({}, e)
        }
        function i(e, t) {
            for (var n = t.split("."), o = 0; o < n.length && e; o++)
                e = e[n[o]];
            return e
        }
        function a(e) {
            return "function" == typeof e
        }
        function l(e) {
            return "string" == typeof e
        }
        function s(e) {
            var t = "";
            for (var n in e)
                e[n] && (t && (t += " "), t += n);
            return t
        }
        function u(e, t) {
            return n(e.nodeName, o(r(e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
        }
        function p(e, t, n) {
            var o = t.split(".");
            return function(t) {
                for (var r = t && t.target || this, a = {}, s = a, u = l(n) ? i(t, n) : r.nodeName ? r.type.match(/^che|rad/) ? r.checked : r.value : t, p = 0; p < o.length - 1; p++)
                    s = s[o[p]] || (s[o[p]] = !p && e.state[o[p]] || {});
                s[o[p]] = u, e.setState(a)
            }
        }
        function c(e) {
            !e._dirty && (e._dirty = !0) && 1 == Y.push(e) && (B.debounceRendering || D)(f)
        }
        function f() {
            var e,
                t = Y;
            for (Y = []; e = t.pop();)
                e._dirty && z(e)
        }
        function d(e) {
            var t = e && e.nodeName;
            return t && a(t) && !(t.prototype && t.prototype.render)
        }
        function h(e, t) {
            return e.nodeName(m(e), t || G)
        }
        function b(e, t) {
            return l(t) ? e instanceof Text : l(t.nodeName) ? !e._componentConstructor && y(e, t.nodeName) : a(t.nodeName) ? !e._componentConstructor || e._componentConstructor === t.nodeName || d(t) : void 0
        }
        function y(e, t) {
            return e.normalizedNodeName === t || A(e.nodeName) === A(t)
        }
        function m(e) {
            var t = r(e.attributes);
            t.children = e.children;
            var n = e.nodeName.defaultProps;
            if (n)
                for (var o in n)
                    void 0 === t[o] && (t[o] = n[o]);
            return t
        }
        function v(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function g(e, t, n, o, r) {
            if ("className" === t && (t = "class"), "class" === t && o && "object" == typeof o && (o = s(o)), "key" === t)
                ;
            else if ("class" !== t || r)
                if ("style" === t) {
                    if ((!o || l(o) || l(n)) && (e.style.cssText = o || ""), o && "object" == typeof o) {
                        if (!l(n))
                            for (var i in n)
                                i in o || (e.style[i] = "");
                        for (var i in o)
                            e.style[i] = "number" != typeof o[i] || J[i] ? o[i] : o[i] + "px"
                    }
                } else if ("dangerouslySetInnerHTML" === t)
                    o && (e.innerHTML = o.__html || "");
                else if ("o" == t[0] && "n" == t[1]) {
                    var u = e._listeners || (e._listeners = {});
                    t = A(t.substring(2)), o ? u[t] || e.addEventListener(t, w, !!X[t]) : u[t] && e.removeEventListener(t, w, !!X[t]), u[t] = o
                } else if ("list" !== t && "type" !== t && !r && t in e)
                    x(e, t, null == o ? "" : o), null != o && o !== !1 || e.removeAttribute(t);
                else {
                    var p = r && t.match(/^xlink\:?(.+)/);
                    null == o || o === !1 ? p ? e.removeAttributeNS("http://www.w3.org/1999/xlink", A(p[1])) : e.removeAttribute(t) : "object" == typeof o || a(o) || (p ? e.setAttributeNS("http://www.w3.org/1999/xlink", A(p[1]), o) : e.setAttribute(t, o))
                }
            else
                e.className = o || ""
        }
        function x(e, t, n) {
            try {
                e[t] = n
            } catch (e) {}
        }
        function w(e) {
            return this._listeners[e.type](B.event && B.event(e) || e)
        }
        function _(e) {
            if (v(e), e instanceof Element) {
                e._component = e._componentConstructor = null;
                var t = e.normalizedNodeName || A(e.nodeName);
                (K[t] || (K[t] = [])).push(e)
            }
        }
        function C(e, t) {
            var n = A(e),
                o = K[n] && K[n].pop() || (t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e));
            return o.normalizedNodeName = n, o
        }
        function k() {
            for (var e; e = Q.pop();)
                B.afterMount && B.afterMount(e), e.componentDidMount && e.componentDidMount()
        }
        function O(e, t, n, o, r, i) {
            Z++ || ($ = r && void 0 !== r.ownerSVGElement, ee = e && !(q in e));
            var a = S(e, t, n, o);
            return r && a.parentNode !== r && r.appendChild(a), --Z || (ee = !1, i || k()), a
        }
        function S(e, t, n, o) {
            for (var r = t && t.attributes && t.attributes.ref; d(t);)
                t = h(t, n);
            if (null == t && (t = ""), l(t))
                return e && e instanceof Text && e.parentNode ? e.nodeValue != t && (e.nodeValue = t) : (e && N(e), e = document.createTextNode(t)), e;
            if (a(t.nodeName))
                return R(e, t, n, o);
            var i = e,
                s = String(t.nodeName),
                u = $,
                p = t.children;
            if ($ = "svg" === s || "foreignObject" !== s && $, e) {
                if (!y(e, s)) {
                    for (i = C(s, $); e.firstChild;)
                        i.appendChild(e.firstChild);
                    e.parentNode && e.parentNode.replaceChild(i, e), N(e)
                }
            } else
                i = C(s, $);
            var c = i.firstChild,
                f = i[q];
            if (!f) {
                i[q] = f = {};
                for (var b = i.attributes, m = b.length; m--;)
                    f[b[m].name] = b[m].value
            }
            return !ee && p && 1 === p.length && "string" == typeof p[0] && c && c instanceof Text && !c.nextSibling ? c.nodeValue != p[0] && (c.nodeValue = p[0]) : (p && p.length || c) && j(i, p, n, o, !!f.dangerouslySetInnerHTML), P(i, t.attributes, f), r && (f.ref = r)(i), $ = u, i
        }
        function j(e, t, n, o, r) {
            var i,
                a,
                l,
                s,
                u = e.childNodes,
                p = [],
                c = {},
                f = 0,
                d = 0,
                h = u.length,
                y = 0,
                m = t && t.length;
            if (h)
                for (var g = 0; g < h; g++) {
                    var x = u[g],
                        w = x[q],
                        _ = m ? (a = x._component) ? a.__key : w ? w.key : null : null;
                    null != _ ? (f++, c[_] = x) : (ee || r || w || x instanceof Text) && (p[y++] = x)
                }
            if (m)
                for (var g = 0; g < m; g++) {
                    l = t[g], s = null;
                    var _ = l.key;
                    if (null != _)
                        f && _ in c && (s = c[_], c[_] = void 0, f--);
                    else if (!s && d < y)
                        for (i = d; i < y; i++)
                            if (a = p[i], a && b(a, l)) {
                                s = a, p[i] = void 0, i === y - 1 && y--, i === d && d++;
                                break
                            }
                    s = S(s, l, n, o), s && s !== e && (g >= h ? e.appendChild(s) : s !== u[g] && (s === u[g + 1] && v(u[g]), e.insertBefore(s, u[g] || null)))
                }
            if (f)
                for (var g in c)
                    c[g] && N(c[g]);
            for (; d <= y;)
                s = p[y--], s && N(s)
        }
        function N(e, t) {
            var n = e._component;
            if (n)
                U(n, !t);
            else {
                e[q] && e[q].ref && e[q].ref(null), t || _(e);
                for (var o; o = e.lastChild;)
                    N(o, t)
            }
        }
        function P(e, t, n) {
            var o;
            for (o in n)
                t && o in t || null == n[o] || g(e, o, n[o], n[o] = void 0, $);
            if (t)
                for (o in t)
                    "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || g(e, o, n[o], n[o] = t[o], $)
        }
        function T(e) {
            var t = e.constructor.name,
                n = te[t];
            n ? n.push(e) : te[t] = [e]
        }
        function E(e, t, n) {
            var o = new e(t, n),
                r = te[e.name];
            if (W.call(o, t, n), r)
                for (var i = r.length; i--;)
                    if (r[i].constructor === e) {
                        o.nextBase = r[i].nextBase, r.splice(i, 1);
                        break
                    }
            return o
        }
        function M(e, t, n, o, r) {
            e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || r ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = o), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && B.syncComponentUpdates === !1 && e.base ? c(e) : z(e, 1, r)), e.__ref && e.__ref(e))
        }
        function z(e, t, n, i) {
            if (!e._disable) {
                var l,
                    s,
                    u,
                    p,
                    c = e.props,
                    f = e.state,
                    b = e.context,
                    y = e.prevProps || c,
                    v = e.prevState || f,
                    g = e.prevContext || b,
                    x = e.base,
                    w = e.nextBase,
                    _ = x || w,
                    C = e._component;
                if (x && (e.props = y, e.state = v, e.context = g, 2 !== t && e.shouldComponentUpdate && e.shouldComponentUpdate(c, f, b) === !1 ? l = !0 : e.componentWillUpdate && e.componentWillUpdate(c, f, b), e.props = c, e.state = f, e.context = b), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !l) {
                    for (e.render && (s = e.render(c, f, b)), e.getChildContext && (b = o(r(b), e.getChildContext())); d(s);)
                        s = h(s, b);
                    var S,
                        j,
                        P = s && s.nodeName;
                    if (a(P)) {
                        var T = m(s);
                        u = C, u && u.constructor === P && T.key == u.__key ? M(u, T, 1, b) : (S = u, u = E(P, T, b), u.nextBase = u.nextBase || w, u._parentComponent = e, e._component = u, M(u, T, 0, b), z(u, 1, n, !0)), j = u.base
                    } else
                        p = _, S = C, S && (p = e._component = null), (_ || 1 === t) && (p && (p._component = null), j = O(p, s, b, n || !x, _ && _.parentNode, !0));
                    if (_ && j !== _ && u !== C) {
                        var R = _.parentNode;
                        R && j !== R && (R.replaceChild(j, _), S || (_._component = null, N(_)))
                    }
                    if (S && U(S, j !== _), e.base = j, j && !i) {
                        for (var W = e, F = e; F = F._parentComponent;)
                            (W = F).base = j;
                        j._component = W, j._componentConstructor = W.constructor
                    }
                }
                !x || n ? Q.unshift(e) : l || (e.componentDidUpdate && e.componentDidUpdate(y, v, g), B.afterUpdate && B.afterUpdate(e));
                var I,
                    H = e._renderCallbacks;
                if (H)
                    for (; I = H.pop();)
                        I.call(e);
                Z || i || k()
            }
        }
        function R(e, t, n, o) {
            for (var r = e && e._component, i = r, a = e, l = r && e._componentConstructor === t.nodeName, s = l, u = m(t); r && !s && (r = r._parentComponent);)
                s = r.constructor === t.nodeName;
            return r && s && (!o || r._component) ? (M(r, u, 3, n, o), e = r.base) : (i && !l && (U(i, !0), e = a = null), r = E(t.nodeName, u, n), e && !r.nextBase && (r.nextBase = e, a = null), M(r, u, 1, n, o), e = r.base, a && e !== a && (a._component = null, N(a))), e
        }
        function U(e, t) {
            B.beforeUnmount && B.beforeUnmount(e);
            var n = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var o = e._component;
            if (o)
                U(o, t);
            else if (n) {
                n[q] && n[q].ref && n[q].ref(null), e.nextBase = n, t && (v(n), T(e));
                for (var r; r = n.lastChild;)
                    N(r, !t)
            }
            e.__ref && e.__ref(null), e.componentDidUnmount && e.componentDidUnmount()
        }
        function W(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state || (this.state = {})
        }
        function F(e, t, n) {
            return O(n, e, {}, !1, t)
        }
        var B = {},
            I = [],
            H = [],
            L = {},
            A = function(e) {
                return L[e] || (L[e] = e.toLowerCase())
            },
            V = "undefined" != typeof Promise && Promise.resolve(),
            D = V ? function(e) {
                V.then(e)
            } : setTimeout,
            G = {},
            q = "undefined" != typeof Symbol ? Symbol.for("preactattr") : "__preactattr_",
            J = {
                boxFlex: 1,
                boxFlexGroup: 1,
                columnCount: 1,
                fillOpacity: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                fontWeight: 1,
                lineClamp: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                strokeOpacity: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1
            },
            X = {
                blur: 1,
                error: 1,
                focus: 1,
                load: 1,
                resize: 1,
                scroll: 1
            },
            Y = [],
            K = {},
            Q = [],
            Z = 0,
            $ = !1,
            ee = !1,
            te = {};
        o(W.prototype, {
            linkState: function(e, t) {
                var n = this._linkedStates || (this._linkedStates = {});
                return n[e + t] || (n[e + t] = p(this, e, t))
            },
            setState: function(e, t) {
                var n = this.state;
                this.prevState || (this.prevState = r(n)), o(n, a(e) ? e(n, this.props) : e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), c(this)
            },
            forceUpdate: function() {
                z(this, 2)
            },
            render: function() {}
        }), e.h = n, e.cloneElement = u, e.Component = W, e.render = F, e.rerender = f, e.options = B
    })
}, , , , , , , , , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.desktopWrapperStyle = {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 2147483647,
        borderRadius: "10px",
        width: "370px",
        background: "rgb(229, 229, 229)",
        boxSizing: "content-box",
        boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
        overflow: "hidden"
    }, t.desktopClosedWrapperStyle = {
        position: "fixed",
        bottom: "40px",
        right: "0px",
        zIndex: 2147483647,
        width: "410px",
        boxSizing: "content-box",
        overflow: "hidden",
        minHeight: "90px"
    }, t.mobileClosedWrapperStyle = {
        position: "fixed",
        bottom: 18,
        right: 18,
        zIndex: 2147483647,
        borderRadius: "50%",
        background: "rgb(229, 229, 229)",
        boxSizing: "content-box"
    }, t.mobileOpenWrapperStyle = {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 2147483647,
        width: "100%",
        height: "100%",
        background: "rgb(229, 229, 229)",
        overflowY: "visible",
        boxSizing: "content-box"
    }, t.desktopTitleStyle = {
        height: "40px",
        lineHeight: "30px",
        fontSize: "20px",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 0 5px 20px",
        fontFamily: "Lato, sans-serif",
        color: "#fff",
        cursor: "pointer",
        borderBottom: "1px solid #0078e0"
    }, t.mobileTitleStyle = {
        height: 52,
        width: 52,
        cursor: "pointer",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        webkitBoxShadow: "1px 1px 4px rgba(101,119,134,.75)",
        boxShadow: "1px 1px 4px rgba(101,119,134,.75)"
    }
}, , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    function o(e) {
        if (null == e)
            throw new TypeError("Cannot destructure undefined")
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        s = n(1),
        u = function(e) {
            function t() {
                return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e), l(t, [{
                key: "render",
                value: function(e, t) {
                    return e.isOpened, o(t), (0, s.h)("div", null, (0, s.h)("svg", {
                        style: {
                            marginRight: 15,
                            marginTop: 6,
                            verticalAlign: "middle"
                        },
                        fill: "#FFFFFF",
                        height: "15",
                        viewBox: "0 0 15 15",
                        width: "15",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, s.h)("line", {
                        x1: "1",
                        y1: "15",
                        x2: "15",
                        y2: "1",
                        stroke: "white",
                        "stroke-width": "1"
                    }), (0, s.h)("line", {
                        x1: "1",
                        y1: "1",
                        x2: "15",
                        y2: "15",
                        stroke: "white",
                        "stroke-width": "1"
                    })))
                }
            }]), t
        }(s.Component);
    t.default = u
}, function(e, t, n) {
    "use strict";
    function o(e) {
        if (null == e)
            throw new TypeError("Cannot destructure undefined")
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        u = n(1),
        p = n(10),
        c = function(e) {
            function t() {
                return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e), s(t, [{
                key: "render",
                value: function(e, t) {
                    var n = e.color,
                        r = e.onClick;
                    return o(t), (0, u.h)("div", {
                        style: l({
                            background: n
                        }, p.mobileTitleStyle),
                        onClick: r
                    }, (0, u.h)("svg", {
                        style: {
                            paddingTop: 4
                        },
                        fill: "#FFFFFF",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, u.h)("path", {
                        d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
                    }), (0, u.h)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })))
                }
            }]), t
        }(u.Component);
    t.default = c
}, function(e, t, n) {
    "use strict";
    function o(e) {
        if (null == e)
            throw new TypeError("Cannot destructure undefined")
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        s = n(1),
        u = function(e) {
            function t() {
                return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e), l(t, [{
                key: "shouldComponentUpdate",
                value: function() {
                    return !1
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = e.intergramId,
                        r = e.host,
                        i = e.iFrameSrc,
                        a = e.isMobile,
                        l = e.conf;
                    o(t);
                    var u = encodeURIComponent(JSON.stringify(l));
                    return (0, s.h)("iframe", {
                        src: i + "?id=" + n + "&host=" + r + "&conf=" + u,
                        width: a ? "100%" : 370,
                        height: a ? "94%" : 353,
                        frameborder: "0",
                        style: "display: block"
                    })
                }
            }]), t
        }(s.Component);
    t.default = u
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.defaultConfiguration = {
        titleClosed: "Let's Chat!",
        titleOpen: "Ask!",
        introMessage: "Hi, how can I help you today?",
        autoResponse: "Daniel will be with you in a minute...",
        autoNoResponse: "It looks like Daniel is super busy. Could you please tell us your email and he'll get back to you ASAP",
        mainColor: "#1f8ceb",
        alwaysUseFloatingButton: !1
    }
}, function(e, t, n) {
    "use strict";
    function o(e) {
        if (null == e)
            throw new TypeError("Cannot destructure undefined")
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        s = n(1),
        u = function(e) {
            function t() {
                return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e), l(t, [{
                key: "render",
                value: function(e, t) {
                    return e.isOpened, o(t), (0, s.h)("div", {
                        style: {
                            position: "relative",
                            cursor: "pointer"
                        },
                        onClick: this.props.onClick
                    }, (0, s.h)("div", {
                        className: "desktop-closed-message",
                        style: {
                            background: "#1f8ceb",
                            letterSpacing: "1px",
                            color: "#fff",
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: "130px",
                            marginTop: "23px",
                            borderRadius: "5px",
                            padding: "15px 20px",
                            boxShadow: "#8e8d8d -3px 2px 20px"
                        }
                    }, "Hi, how can I help you?", (0, s.h)("div", {
                        style: {
                            width: 0,
                            height: 0,
                            position: "absolute",
                            top: "12px",
                            right: "-10px",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            borderLeft: "10px solid #1f8ceb"
                        }
                    })), (0, s.h)("div", {
                        className: "desktop-closed-message-avatar",
                        style: {
                            background: "#fff",
                            display: "block",
                            position: "absolute",
                            top: "10px",
                            right: "40px",
                            height: "60px",
                            width: "60px",
                            borderRadius: "999px",
                            boxShadow: "#8e8d8d -3px 2px 20px",
                            border: "2px solid #1f8ceb"
                        }
                    }, (0, s.h)("img", {
                        src: "https://cdn1.telesco.pe/file/ZmZbKm5v7cJvVioCADxkE1SCkFh0P54IZmXF2jAhe2mxT22oVyJeDuEZMjI4YJ65lobS-981hkJgacb32rJtvVxFhFXhPN5Lkpm7wsLZcJYyvUS0603UygqcjQ-wyczzqcaFyZeLD70YLyphZJ0s44LLrKPhF7xBLEk_vMcuVdSUaK8NVZJ64bl-46ysSZOOkVzYClZ_MG4BSmr0nsyRSodWxVpcmtKW7Wz4Crv0qmRgJceaKp_lyXewCfFGsgalJT2L0Zgk_YbYLAuyLt439YW2LqZ5wmgjR_R0hNaJNZaLRHlAqj3YfbXW0lWOxh_E0bNseTJv_sefKBrO5PPblQ.jpg",
                        alt: "Avatar",
                        style: {
                            width: "100%",
                            height: "auto",
                            borderRadius: "999px"
                        }
                    }), (0, s.h)("div", {
                        style: {
                            background: "#d0021b",
                            width: "20px",
                            height: "20px",
                            borderRadius: "999px",
                            position: "absolute",
                            right: "-5px",
                            bottom: "-5px",
                            textAlign: "center",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "0.8em",
                            lineHeight: "20px"
                        }
                    }, "1")))
                }
            }]), t
        }(s.Component);
    t.default = u
}, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {
        if (window.intergramId) {
            var e = document.createElement("div");
            e.id = "intergramRoot", document.getElementsByTagName("body")[0].appendChild(e);
            var t = window.intergramServer || "https://www.intergram.xyz",
                n = t + "/chat.html",
                o = window.location.host || "unknown-host",
                r = i({}, u.defaultConfiguration, window.intergramCustomizations);
            (0, a.render)((0, a.h)(s.default, {
                intergramId: window.intergramId,
                host: o,
                isMobile: window.screen.width < 500,
                iFrameSrc: n,
                conf: r
            }), e);
            try {
                var l = new XMLHttpRequest;
                l.open("POST", t + "/usage-start?host=" + o), l.send()
            } catch (e) {}
        } else
            console.error("Please set window.intergramId (see example at github.com/idoco/intergram)")
    }
    var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        a = n(1),
        l = n(36),
        s = o(l),
        u = n(33);
    window.attachEvent ? window.attachEvent("onload", r) : window.addEventListener("load", r, !1)
}, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        u = n(1),
        p = n(32),
        c = o(p),
        f = n(31),
        d = o(f),
        h = n(30),
        b = o(h),
        y = n(34),
        m = o(y),
        v = n(10),
        g = function(e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.onClick = function() {
                    return e.setState({
                        pristine: !1,
                        isChatOpen: !e.state.isChatOpen
                    })
                }, e.state.isChatOpen = !1, e.state.pristine = !0, e
            }
            return a(t, e), s(t, [{
                key: "render",
                value: function(e, t) {
                    var n = e.conf,
                        o = e.isMobile,
                        r = t.isChatOpen,
                        i = t.pristine,
                        a = void 0;
                    return a = r || !o && !n.alwaysUseFloatingButton ? o ? v.mobileOpenWrapperStyle : r ? l({}, v.desktopWrapperStyle) : l({}, v.desktopClosedWrapperStyle) : l({}, v.mobileClosedWrapperStyle), (0, u.h)("div", {
                        style: a
                    }, !o && !n.alwaysUseFloatingButton || r ? r ? (0, u.h)("div", {
                        style: l({
                            background: n.mainColor
                        }, v.desktopTitleStyle),
                        onClick: this.onClick
                    }, (0, u.h)("div", {
                        style: {
                            paddingTop: "4px"
                        }
                    }, r ? n.titleOpen : n.titleClosed), (0, u.h)(b.default, {
                        isOpened: r
                    })) : (0, u.h)(m.default, {
                        onClick: this.onClick
                    }) : (0, u.h)(d.default, {
                        color: n.mainColor,
                        onClick: this.onClick
                    }), (0, u.h)("div", {
                        style: {
                            display: r ? "block" : "none",
                            height: o ? "100%" : ""
                        }
                    }, i ? null : (0, u.h)(c.default, this.props)))
                }
            }]), t
        }(u.Component);
    t.default = g
}]);
//# sourceMappingURL=widget.js.map
