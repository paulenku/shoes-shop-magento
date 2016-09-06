﻿(function (h, f, ba) {
    function v(a, b) {
        return function () {
            try {
                return a.apply(this, arguments)
            } catch (c) {
                ra(c, b)
            }
        }
    }

    function ra(a, b) {
        if (.01 > Math.random())try {
            (new V).log("jserrs", P, a.message, b, z.href, K, "string" == typeof a.stack && a.stack.replace(/\n/g, "\\n"))
        } catch (e) {
            var c = ["cp: " + b, a.name + ": " + a.message, "debug: " + K, "code: " + P, "stack: " + a.stack];
            (new Image).src = "//an.yandex.ru/jserr/101500?cnt-class=100&errmsg=" + encodeURIComponent(c.join("; ").replace(/\r?\n/g, "\\n"))
        }
    }

    function cb(a, b, c) {
        return h.setTimeout(v(a,
            c || "setTimeout"), b)
    }

    function x() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, e = c; e--;)a[b[e]] = "";
        try {
            for (var d = h.location, e = c; e--;) {
                var g = b[e];
                a[g] = "" + d[g]
            }
        } catch (f) {
            z && (a = z)
        }
        return a
    }

    function za(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function ga(a) {
        return -1 !== ("" + h.navigator.userAgent).toLowerCase().search(a)
    }

    function Ga(a, b) {
        if (!a || !b)return !1;
        for (var c = [], e = 0; e < b.length; e++)c.push(b[e].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g,
            "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return (new RegExp("\\.(" + c.join("|") + ")$", "i")).test(a)
    }

    function db(a) {
        a = a.target || a.srcElement;
        if (!a)return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (var b = a && a.nodeName && a.nodeName.toString().toLowerCase(); a && a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b || !a.href);)b = (a = a.parentNode) &&
            a.nodeName && a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    }

    function eb(a, b) {
        return (a ? a.replace(/^www\./, "") : "") == (b ? b.replace(/^www\./, "") : "")
    }

    function fb(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }

        return a && b ? c(a) == c(b) : a || b ? !1 : !0
    }

    function Ha() {
        var a = h.performance || h.webkitPerformance, b = [];
        if (a = a && a.timing) {
            var c = a.navigationStart;
            if (c)for (b = [a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart -
            a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - c, a.redirectEnd - a.redirectStart, a.redirectCount], b.push(a.domInteractive && a.domLoading ? a.domInteractive - a.domLoading : null), b.push(a.domContentLoadedEventStart && a.domContentLoadedEventEnd ? a.domContentLoadedEventEnd - a.domContentLoadedEventStart : null), b.push(a.domComplete ? a.domComplete - c : null), b.push(a.loadEventStart ? a.loadEventStart - c : null), b.push(a.loadEventStart && a.loadEventEnd ? a.loadEventEnd - a.loadEventStart : null), b.push(a.domContentLoadedEventStart ?
            a.domContentLoadedEventStart - c : null), a = 0; a < b.length; a++)c = b[a], null !== c && (0 > c || 36E5 < c) && (b[a] = null)
        }
        return b
    }

    function gb(a) {
        var b = [], c = a._lastPerformanceTiming, e = Ha();
        if (c)for (var d = 0, g = c.length; d < g; d++)null === e[d] ? b.push(e[d]) : b.push(c[d] === e[d] ? "" : e[d]); else b = e;
        a._lastPerformanceTiming = e;
        return b.join(",")
    }

    function hb() {
        var a;
        if ("object" == typeof h.chrome && h.chrome.loadTimes) {
            if (a = h.chrome.loadTimes(), a.requestTime && a.firstPaintTime)return ~~(1E3 * (a.firstPaintTime - a.requestTime))
        } else if (h.performance &&
            h.performance.timing && (a = h.performance.timing, a.navigationStart && a.msFirstPaint))return a.msFirstPaint - a.navigationStart;
        return null
    }

    function ib(a) {
        var b = f.referrer || "";
        if ((new RegExp("^https?://" + z.host + "/")).test(b))return !1;
        for (var c = a.patterns, e = 0; e < c.length; e++)if (b.match(new RegExp(c[e], "i"))) {
            var d = a.params || [];
            if (d.length)for (var y = g.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20")), h = 0; h < d.length; h++) {
                if (y == g.safeDecodeURIComponent(d[h]))return !0
            } else return !0
        }
        return !1
    }

    function Ia(a,
                b) {
        var c = !1;
        if (a && "string" != typeof a && a.length)for (var e = 0; e < a.length; e++) {
            var d = a[e].selector, g = a[e].text, h = d.charAt(0), d = d.slice(1);
            if ("#" == h) {
                if (h = f.getElementById(d))c = !0, b && D.unshift([h, h.innerHTML]), h.innerHTML = g
            } else if ("." == h)for (h = l.getElementsByClassName(d), d = 0; d < h.length; d++) {
                var c = !0, k = h[d], ha = g;
                b && D.unshift([k, k.innerHTML]);
                k.innerHTML = ha
            }
        }
        return c
    }

    function Ja() {
        for (var a = 0; a < D.length; a++)D[a][0].innerHTML = D[a][1]
    }

    function jb(a, b) {
        var c, e, d = "", h;
        a = a && a.replace(/^\?/, "");
        b = b && b.replace(/^#/,
                "") || "";
        if (a)for (e = a.split("&"), c = 0; c < e.length; c++)h = e[c].split("="), "_openstat" === h[0] && (d = h[1]);
        var f = b.split("?");
        for (c = 0; c < f.length; c++) {
            var k = f[c].split("&");
            for (e = 0; e < k.length; e++)h = k[e].split("="), "_openstat" === h[0] && (d = h[1])
        }
        d && (d = -1 < d.indexOf(";") ? g.safeDecodeURIComponent(d) : M.decode(d.replace(/[-*_]/g, function (a) {
            return {"*": "+", "-": "/", _: "="}[a] || a
        })));
        return d && (c = d.split(";"), 4 == c.length) ? {service: c[0], campaign: c[1], ad: c[2], source: c[3]} : null
    }

    function Ka(a) {
        try {
            delete h[a]
        } catch (b) {
            h[a] =
                ba
        }
    }

    function La(a) {
        var b = f.createElement("script");
        b.type = "text/javascript";
        b.async = !0;
        b.src = a;
        try {
            var c = f.getElementsByTagName("html")[0];
            f.getElementsByTagName("head")[0] || c.appendChild(f.createElement("head"));
            var e = f.getElementsByTagName("head")[0];
            e.insertBefore(b, e.firstChild)
        } catch (d) {
        }
    }

    function kb(a, b, c, e, d) {
        function y(a) {
            var b = (new Date).getTime();
            a && b < a && (U += a - b + 20);
            g.setTimeout(function () {
                y(b)
            }, 20, "timeCorrector")
        }

        function S() {
            var a = (new Date).getTime() + U;
            a < V && (a = V + 10);
            return V = a
        }

        function A() {
            return Math.round((S() -
                ra) / 50)
        }

        function ha(a, b) {
            b = Math.max(0, Math.min(b, 65535));
            g.mergeArrays(a, [b >> 8, b & 255])
        }

        function m(a, b) {
            g.mergeArrays(a, [b & 255])
        }

        function n(a, b) {
            for (b = Math.max(0, b | 0); 127 < b;)g.mergeArrays(a, [b & 127 | 128]), b >>= 7;
            g.mergeArrays(a, [b])
        }

        function p(a, b) {
            255 < b.length && (b = b.substr(0, 255));
            g.mergeArrays(a, [b.length]);
            for (var c = 0; c < b.length; c++)ha(a, b.charCodeAt(c))
        }

        function r(a, b) {
            n(a, b.length);
            for (var c = 0; c < b.length; c++)n(a, b.charCodeAt(c))
        }

        function w(a, b, c, d, e, g) {
            for (var h; c && (h = l.getElementSize(c)) && (!h[0] || !h[1]);)c = l.getElementParent(c);
            if (!c)return null;
            h = c[B];
            if (!h || 0 > h)return null;
            var f = {mousemove: 2, click: 32, dblclick: 33, mousedown: 4, mouseup: 30, touch: 12}[b];
            if (!f)return null;
            var q = l.getElementXY(c);
            c = [];
            m(c, f);
            n(c, a);
            n(c, h);
            n(c, Math.max(0, d[0] - q[0]));
            n(c, Math.max(0, d[1] - q[1]));
            /^mouse(up|down)|click$/.test(b) && (a = e || g, m(c, 2 > a ? 1 : a == (e ? 2 : 4) ? 4 : 2));
            return c
        }

        function z(a, b, c, d) {
            b = b[B];
            if (!b || 0 > b)return null;
            var e = [];
            m(e, 31);
            n(e, a);
            n(e, b);
            n(e, c[0]);
            n(e, c[1]);
            m(e, 0);
            m(e, 0);
            m(e, d);
            return e
        }

        function I(a, b) {
            var c =
                [];
            m(c, 3);
            n(c, a);
            n(c, b[0]);
            n(c, b[1]);
            return c
        }

        function C(a, b, c) {
            var d = [];
            c = c[B];
            if (!c || 0 > c)return null;
            m(d, 16);
            n(d, a);
            n(d, b[0]);
            n(d, b[1]);
            n(d, c);
            return d
        }

        function L(a, b, c) {
            var d = [];
            m(d, 28);
            n(d, a);
            n(d, b[0]);
            n(d, b[1]);
            n(d, c[0]);
            n(d, c[1]);
            return d
        }

        function J(a, b, c, d) {
            var e = [];
            m(e, 5);
            n(e, a);
            ha(e, b);
            m(e, c);
            a = d[B];
            if (!a || 0 > a)a = 0;
            n(e, a);
            return e
        }

        function X(a, b) {
            var c, d;
            0 == b.length ? d = c = "" : 100 >= b.length ? (c = b, d = "") : 200 >= b.length ? (c = b.substr(0, 100), d = b.substr(100)) : (c = b.substr(0, 97), d = b.substr(b.length - 97));
            var e = [];
            m(e, 29);
            n(e, a);
            r(e, c);
            r(e, d);
            return e
        }

        function t(a) {
            var b = [];
            m(b, 27);
            n(b, a);
            return b
        }

        function Y(a) {
            var b = [];
            m(b, 14);
            n(b, a);
            return b
        }

        function N(a) {
            var b = [];
            m(b, 15);
            n(b, a);
            return b
        }

        function T(a, b) {
            var c = [];
            m(c, 17);
            n(c, a);
            n(c, b[B]);
            return c
        }

        function ba(a, b) {
            var c = [];
            m(c, 18);
            n(c, a);
            n(c, b[B]);
            return c
        }

        function aa(a, b, c) {
            var d = [];
            m(d, 19);
            n(d, a);
            n(d, b[B]);
            p(d, String(c));
            return d
        }

        function lb(a) {
            var b = a[B];
            if (!b || 0 > b || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || u(a.form))return null;
            var c =
                l.getFormNumber(a.form);
            if (0 > c)return null;
            var d;
            d = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }[a.type] : {SELECT: 1, TEXTAREA: 5}[a.nodeName];
            if ("number" != typeof d)return null;
            for (var e = -1, g = a.form.elements, h = g.length, f = 0, q = 0; f < h; f++)if (g[f].name == a.name) {
                if (g[f] == a) {
                    e = q;
                    break
                }
                q++
            }
            if (0 > e)return null;
            g = [];
            m(g, 7);
            n(g, b);
            n(g, c);
            n(g, d);
            r(g, a.name || "");
            n(g, e);
            return g
        }

        function fa(a, b) {
            var c = l.getFormNumber(b);
            if (0 > c)return null;
            for (var d = b.elements, e = d.length, h = [], f = 0; f < e; f++)if (!l.isEmptyField(d[f])) {
                var q = d[f][B];
                q && 0 < q && g.mergeArrays(h, [q])
            }
            d = [];
            m(d, 11);
            n(d, a);
            n(d, c);
            n(d, h.length);
            for (c = 0; c < h.length; c++)n(d, h[c]);
            return d
        }

        function ca() {
            var a = [];
            m(a, 13);
            return a
        }

        function E(a, b, c) {
            a = a.apply(h, b);
            na.append(a, c)
        }

        function G(a) {
            if (a[B])a:{
                var b = A(), c = a[B];
                if (0 < c) {
                    var d = [];
                    a = l.getElementRegion(a);
                    var e = sa[c], g = a[0] + "x" + a[1], h = a[2] + "x" + a[3];
                    g != e.pos && (e.pos = g, m(d, 9),
                        n(d, b), n(d, c), n(d, a[0]), n(d, a[1]));
                    h != e.size && (e.size = h, m(d, 10), n(d, b), n(d, c), n(d, a[2]), n(d, a[3]));
                    if (d.length) {
                        a = d;
                        break a
                    }
                }
                a = null
            } else {
                (c = l.getElementParent(a)) && G(c);
                a[B] = P;
                sa[P] = {};
                P++;
                if (a.nodeName)if (c = +a[B], !isFinite(c) || 0 >= c)b = null; else {
                    var d = 64, e = 0, f = l.getElementParent(a), g = f && f[B] ? f[B] : 0;
                    0 > g && (g = 0);
                    var h = a.nodeName.toUpperCase(), q = ja[h];
                    q || (d |= 2);
                    var y = l.getElementNeighborPosition(a);
                    y || (d |= 4);
                    var u = l.getElementRegion(a);
                    (f = f ? l.getElementRegion(f) : null) && u[0] == f[0] && u[1] == f[1] && u[2] == f[2] &&
                    u[3] == f[3] && (d |= 8);
                    sa[c].pos = u[0] + "x" + u[1];
                    sa[c].size = u[2] + "x" + u[3];
                    a.id && "string" == typeof a.id && (d |= 32);
                    (f = l.calcTextChecksum(a)) && (d |= 16);
                    var S = l.calcAttribChecksum(a);
                    S && (e |= 2);
                    var k;
                    b:{
                        k = l.getElementChildren(l.getElementParent(a), a.tagName);
                        for (var H = 0; H < k.length; H++)if ((!k[H].id || "string" != typeof k[H].id) && l.calcAttribChecksum(k[H]) == S && l.calcTextChecksum(k[H]) == f) {
                            k = !0;
                            break b
                        }
                        k = !1
                    }
                    k && (d |= 1, b = l.calcChildrenChecksum(a));
                    k = [];
                    m(k, 1);
                    n(k, c);
                    m(k, d);
                    n(k, g);
                    q ? m(k, q) : p(k, h);
                    y && n(k, y);
                    d & 8 || (n(k, u[0]),
                        n(k, u[1]), n(k, u[2]), n(k, u[3]));
                    d & 32 && p(k, a.id);
                    f && ha(k, f);
                    d & 1 && ha(k, b);
                    m(k, e);
                    S && ha(k, S);
                    b = k
                } else a[B] = -1, b = null;
                na.append(b, void 0);
                a = lb(a)
            }
            na.append(a, void 0)
        }

        function oa(a, b) {
            var c = a && l.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
            b && a && (c = c || !!l.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a).length);
            return c
        }

        function u(a) {
            return a && l.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
        }

        function q(a) {
            var b = F.getTarget(a);
            if (b && "SCROLLBAR" != b.nodeName) {
                if (b && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName))if (b[B])G(b);
                else {
                    var c = b.form;
                    if (c)for (var c = c.elements, d = c.length, e = 0; e < d; e++)/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[e].tagName) && !c[e][B] && G(c[e]); else G(b)
                } else G(b);
                E(w, [A(), a.type, b, F.getPos(a), a.which, a.button])
            }
        }

        function H(a) {
            q(a);
            a:{
                var b, c;
                if (h.getSelection) {
                    try {
                        var d = h.getSelection()
                    } catch (e) {
                        break a
                    }
                    b = d.toString();
                    c = d.anchorNode
                } else f.selection && f.selection.createRange && (a = f.selection.createRange(), b = a.text, c = a.parentElement());
                if ("string" == typeof b) {
                    try {
                        for (; c && 1 != c.nodeType;)c = c.parentNode
                    } catch (e) {
                        break a
                    }
                    c &&
                    Aa(c) || oa(c, !0) || b == Ba || (Ba = b, E(X, [A(), b]))
                }
            }
        }

        function Ma(a) {
            var b = S(), c = b - ia;
            if (!(10 > c)) {
                var d = F.getPos(a), e = O[0] - d[0], g = O[1] - d[1], e = e * e + g * g;
                0 >= e || 16 > e && 100 > c || 20 > c && 256 > e || (ia = b, O = d, q(a))
            }
        }

        function W() {
            var a = l.getDocumentScroll(), b = S();
            10 > b - ma || 10 > Math.abs(a[0] - ga[0]) && 10 > Math.abs(a[1] - ga[1]) || (ma = b, ga = a, E(I, [A(), a]))
        }

        function Na(a) {
            a = F.getTarget(a);
            var b = Math.random(), c = [a.scrollLeft, a.scrollTop];
            if (a.localId) {
                if (b = ka[a.localId], !b || 10 > Math.abs(c[0] - b[0]) && 10 > Math.abs(c[1] - b[1]))return
            } else {
                for (; ka[b];)b =
                    Math.random();
                a.localId = b
            }
            ka[a.localId] = c;
            a !== f && (G(a), E(C, [A(), c, a]))
        }

        function Ca() {
            E(L, [A(), l.getViewportSize(), l.getDocumentSize()])
        }

        function ta() {
            E(ca, [], !0)
        }

        function Oa(a) {
            return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
        }

        function Aa(a) {
            return "INPUT" == a.tagName ? "password" == a.type || a.name && da.test(a.name) || a.id && da.test(a.id) : !1
        }

        function Pa(a, b, c) {
            a = F.getTarget(a);
            Aa(a) || oa(a) || (G(a), E(J, [A(), b, c, a]))
        }

        function Qa(a) {
            var b = a.keyCode, c = Oa(a);
            if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[b] || 112 <= b && 123 >= b || 96 <= b && 105 >= b || c & 16)19 == b && 4 == (c & -17) && (b = 144), Pa(a, b, c | 16), la = !1, g.setTimeout(function () {
                la = !0
            }, 1), !(67 == b && c & 4) || c & 1 || c & 2 || Da()
        }

        function Ra(a) {
            la && !R && 0 !== a.which && (Pa(a, a.charCode || a.keyCode, Oa(a)), R = !0, g.setTimeout(function () {
                R = !1
            }, 1))
        }

        function Da() {
            Ea || (Ea = !0, Ba && E(t, [A()]), g.setTimeout(function () {
                Ea = !1
            }, 1))
        }

        function Fa() {
            pa || (pa = !0, E(Y,
                [A()]))
        }

        function qa() {
            pa && (pa = !1, E(N, [A()]))
        }

        function Sa(a) {
            (!pa || a && !a.fromElement) && Fa()
        }

        function Ta(a) {
            a && !a.toElement && qa()
        }

        function ua(a) {
            if ((a = F.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[B])G(a); else {
                    var b = a.form;
                    if (b)for (var b = b.elements, c = b.length, d = 0; d < c; d++)/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[d].tagName) && !b[d][B] && G(b[d]); else G(a)
                }
                E(T, [A(), a])
            }
        }

        function va(a) {
            (a = F.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (G(a), E(ba, [A(), a]))
        }

        function D(a) {
            a =
                F.getTarget(a);
            if (!Aa(a) && !oa(a) && a && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var b = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
                G(a);
                E(aa, [A(), a, b])
            }
        }

        function M(a) {
            a = F.getTarget(a);
            if (!u(a) && "FORM" == a.nodeName) {
                for (var b = a.elements, c = 0; c < b.length; c++)l.isEmptyField(b[c]) || G(b[c]);
                E(fa, [A(), a], !0)
            }
        }

        function ea(a) {
            W();
            if (a.touches && a.touches.length) {
                var b = F.getTarget(a);
                K = typeof b + " - " + String(b);
                if (b && b != f) {
                    G(b);
                    for (var c = 0; c < a.touches.length; c++)E(w, [A(), "touch", b, [a.touches[c].pageX, a.touches[c].pageY],
                        0, 0])
                }
            }
        }

        function Q(a) {
            var b = F.getTarget(a);
            if (b) {
                var c;
                "wheel" == a.type ? c = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (c = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                c && (G(b), E(z, [A(), b, F.getPos(a), c]))
            }
        }

        function Z(a) {
            (a = F.getTarget(a)) && "BODY" == a.tagName && na.append([], !0)
        }

        var na = new Ua({
            protocol: a,
            counterId: b,
            counterType: c,
            meta: {url: x().href, hitId: e, timezone: wa, timestamp: xa}
        }), ja = {
            A: 1,
            ABBR: 2,
            ACRONYM: 3,
            ADDRESS: 4,
            APPLET: 5,
            AREA: 6,
            B: 7,
            BASE: 8,
            BASEFONT: 9,
            BDO: 10,
            BIG: 11,
            BLOCKQUOTE: 12,
            BODY: 13,
            BR: 14,
            BUTTON: 15,
            CAPTION: 16,
            CENTER: 17,
            CITE: 18,
            CODE: 19,
            COL: 20,
            COLGROUP: 21,
            DD: 22,
            DEL: 23,
            DFN: 24,
            DIR: 25,
            DIV: 26,
            DL: 27,
            DT: 28,
            EM: 29,
            FIELDSET: 30,
            FONT: 31,
            FORM: 32,
            FRAME: 33,
            FRAMESET: 34,
            H1: 35,
            H2: 36,
            H3: 37,
            H4: 38,
            H5: 39,
            H6: 40,
            HEAD: 41,
            HR: 42,
            HTML: 43,
            I: 44,
            IFRAME: 45,
            IMG: 46,
            INPUT: 47,
            INS: 48,
            ISINDEX: 49,
            KBD: 50,
            LABEL: 51,
            LEGEND: 52,
            LI: 53,
            LINK: 54,
            MAP: 55,
            MENU: 56,
            META: 57,
            NOFRAMES: 58,
            NOSCRIPT: 59,
            OBJECT: 60,
            OL: 61,
            OPTGROUP: 62,
            OPTION: 63,
            P: 64,
            PARAM: 65,
            PRE: 66,
            Q: 67,
            S: 68,
            SAMP: 69,
            SCRIPT: 70,
            SELECT: 71,
            SMALL: 72,
            SPAN: 73,
            STRIKE: 74,
            STRONG: 75,
            STYLE: 76,
            SUB: 77,
            SUP: 78,
            TABLE: 79,
            TBODY: 80,
            TD: 81,
            TEXTAREA: 82,
            TFOOT: 83,
            TH: 84,
            THEAD: 85,
            TITLE: 86,
            TR: 87,
            TT: 88,
            U: 89,
            UL: 90,
            VAR: 91,
            NOINDEX: 100
        }, U = 0;
        y(0);
        var V = 0, P = 1, ia = 0, O = [0, 0], ma = 0, ga = [0, 0], ka = {}, da = /^(password|passwd|pswd)$/, la = !0, R = !1, Ba = "", Ea = !1, pa = !0, ra = S(), B = "metrikaId_" + Math.random(), sa = {}, ya = ":submit" + Math.random();
        if (!g.isMetrikaPlayer()) {
            k.on(f, "mousemove", Ma);
            k.on(f, "click,dblclick,mousedown", q);
            k.on(f, "mouseup", H);
            k.on(h, "scroll", W);
            if ("onmousewheel" in f)k.on(f, "mousewheel", Q); else k.on(f, "wheel", Q);
            k.on(h, "beforeunload",
                ta);
            if (!mb)k.on(h, "unload", ta);
            k.on(h, "resize", Ca);
            k.on(f, "keydown", Qa);
            k.on(f, "keypress", Ra);
            k.on(f, "copy", Da);
            k.on(f, "touchmove,touchstart", ea);
            if (f.body)k.on(f, "mouseleave", Z);
            f.attachEvent && !h.opera ? (k.on(f, "focusin", Sa), k.on(f, "focusout", Ta)) : (k.on(h, "focus", Fa), k.on(h, "blur", qa), k.on(f, "blur", qa));
            f.addEventListener ? (k.on(f, "scroll", Na), k.on(f, "focus", ua), k.on(f, "blur", va), k.on(f, "change", D), k.on(f, "submit", M)) : f.attachEvent && (k.on(f, "focusin", ua), k.on(f, "focusout", va), function () {
                for (var a =
                    f.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                    for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++)if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName))k.on(c[d], "change", D);
                    k.on(a[b], "submit", M)
                }
            }());
            (function () {
                var a = f.getElementsByTagName("form");
                if (a.length)for (var b = 0; b < a.length; b++) {
                    var c = a[b].submit;
                    if ("function" == typeof c || "object" == typeof c && /^\s*function submit\(\)/.test(String(c)))a[b][ya] = c, a[b].submit = function () {
                        M({target: this});
                        return this[ya]()
                    }
                }
            })();
            "0:0" != l.getDocumentScroll().join(":") &&
            W();
            Ca();
            d.uploadPage = v(function (d) {
                if ("function" == typeof h.toStaticHTML && -1 < h.toStaticHTML.toString().indexOf("NoScript"))return !1;
                var g = f.documentElement;
                if (g && 19E4 < ("" + g.innerHTML).length)return !1;
                var q = h.XMLHttpRequest ? new h.XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"), u = l.getDocumentCharset(), y = "text/html" + (u ? ";charset=" + u : ""), k = new nb({
                    protocol: a,
                    counterId: b,
                    counterType: c
                });
                if ("html" == d)return d = RegExp("<script [^>]*?//mc\\.yandex\\.ru/watch/.*?\x3c/script>", "gi"), k.sendContent(l.getDocumentHTML().replace(d,
                    ""), y, e, wa, xa), !0;
                q && (q.open("get", x().href, !0), q.onreadystatechange = v(function () {
                    if (4 == q.readyState) {
                        var a = q.getResponseHeader("content-type") || "";
                        u && -1 === a.indexOf("charset=") && (a = y);
                        k.sendContent(q.responseText, a, e, wa, xa)
                    }
                }, "updatePage.1"), q.overrideMimeType && u && q.overrideMimeType(y), q.send(null));
                return !0
            }, "uploadPage")
        }
        return {
            start: function () {
                na.activate()
            }, stop: function () {
                na.clear();
                k.un(f, "mousemove", Ma);
                k.un(f, "click,dblclick,mousedown", q);
                k.un(f, "mouseup", H);
                k.un(f, "mousewheel,wheel", Q);
                k.un(h, "scroll", W);
                k.un(h, "beforeunload", ta);
                k.un(h, "unload", ta);
                k.un(h, "resize", Ca);
                k.un(f, "keydown", Qa);
                k.un(f, "keypress", Ra);
                k.un(f, "copy", Da);
                k.un(f, "touchmove,touchstart", ea);
                f.body && k.un(f, "mouseleave", Z);
                k.un(f, "focusin", Sa);
                k.un(f, "focusout", Ta);
                k.un(h, "focus", Fa);
                k.un(h, "blur", qa);
                k.un(f, "blur", qa);
                f.removeEventListener ? (k.un(f, "scroll", Na), k.un(f, "focus", ua), k.un(f, "blur", va), k.un(f, "change", D), k.un(f, "submit", M)) : f.detachEvent && (k.un(f, "focusin", ua), k.un(f, "focusout", va), function () {
                    for (var a =
                        f.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                        for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++)/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName) && k.un(c[d], "change", D);
                        k.un(a[b], "submit", M)
                    }
                }());
                (function () {
                    for (var a = f.getElementsByTagName("form"), b = 0; b < a.length; b++)a[b][ya] && (a[b].submit = a[b][ya])
                })()
            }, uploadPages: function (a, b) {
                function c() {
                    k.un(f, "DOMContentLoaded", c);
                    k.un(h, "load", c);
                    for (var e = a.split(/\n/), g = x().href, q = /regexp:/, u = 0; u < e.length; u++) {
                        var y = e[u];
                        if (y)if (q.test(y)) {
                            y = za(y.replace(q,
                                ""));
                            try {
                                var S = new RegExp(y)
                            } catch (m) {
                            }
                            if (S && S.test(g)) {
                                d.uploadPage(b);
                                break
                            }
                        } else if (-1 !== g.indexOf(y)) {
                            d.uploadPage(b);
                            break
                        }
                    }
                }

                "complete" == f.readyState ? c() : (k.on(f, "DOMContentLoaded", c), k.on(h, "load", c))
            }
        }
    }

    var K = "", mb = !ga(/webkit/) && ga(/gecko/), l = {
        getDocumentCharset: function () {
            return ("" + (f.characterSet || f.charset || "")).toLowerCase()
        }, getDocumentHTML: function () {
            var a = "", b = "", a = f.documentElement, c = a.outerHTML;
            if (c)a = c; else {
                for (var c = a.attributes, e = "", d = 0; d < c.length; d++) {
                    var g = c[d];
                    g && (e += " " + g.name +
                        '="' + (g.value || "") + '"')
                }
                a = "<html" + e + ">" + a.innerHTML + "</html>"
            }
            (c = f.doctype) && (b = "<!DOCTYPE " + c.name + (c.publicId ? ' PUBLIC "' + c.publicId + '"' : "") + (c.systemId ? ' "' + c.systemId + '"' : "") + ">\n");
            return b + a
        }, getRootElement: function () {
            var a = f.documentElement;
            return "CSS1Compat" == f.compatMode ? a : f.body || a
        }, getViewportSize: function () {
            var a = l.getRootElement();
            return [a.clientWidth, a.clientHeight]
        }, getDocumentSize: function () {
            var a = l.getRootElement(), b = l.getViewportSize();
            return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight,
                b[1])]
        }, getDocumentScroll: function () {
            return [h.pageXOffset || f.documentElement && f.documentElement.scrollLeft || f.body && f.body.scrollLeft || 0, h.pageYOffset || f.documentElement && f.documentElement.scrollTop || f.body && f.body.scrollTop || 0]
        }, getElementXY: function (a) {
            if (!a.ownerDocument || "PARAM" == a.tagName || a == f.body || a == f.documentElement)return [0, 0];
            if (a.getBoundingClientRect) {
                a = a.getBoundingClientRect();
                var b = l.getDocumentScroll();
                return [Math.round(a.left + b[0]), Math.round(a.top + b[1])]
            }
            for (var c = b = 0; a;)b += a.offsetLeft,
                c += a.offsetTop, a = a.offsetParent;
            return [b, c]
        }, getElementParent: function (a) {
            return a == f.documentElement ? null : a == f.body ? f.documentElement : a.parentNode
        }
    }, g = {
        isArray: function (a) {
            return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
        }, mergeArrays: function (a) {
            for (var b = 1; b < arguments.length; b++)if (g.isArray(arguments[b]))for (var c = 0; c < arguments[b].length; c++)a[a.length] = arguments[b][c];
            return a
        }
    };
    l.getElementChildren = function (a, b) {
        var c = [];
        if (a) {
            var e =
                a.childNodes;
            if (e)for (var d = 0, h = e.length; d < h; d++) {
                var f = e[d];
                "INPUT" == f.nodeName && f.type && "hidden" == f.type.toLocaleLowerCase() || b && f.nodeName != b || g.mergeArrays(c, [f])
            }
        }
        return c
    };
    l.getElementNeighborPosition = function (a) {
        var b = l.getElementParent(a);
        if (b)for (var c = 0, b = b.childNodes, e, d = a && a.nodeName, g = 0; g < b.length; g++)if (e = b[g] && b[g].nodeName, d == e) {
            if (a == b[g])return c;
            c++
        }
        return 0
    };
    l.getElementSize = function (a) {
        if (a == f.body || a == f.documentElement)return l.getDocumentSize();
        var b = a.getBoundingClientRect &&
            a.getBoundingClientRect();
        return b ? [b.width, b.height] : [a.offsetWidth, a.offsetHeight]
    };
    l.getElementRegion = function (a) {
        var b = l.getElementXY(a);
        a = l.getElementSize(a);
        return [b[0], b[1], a[0], a[1]]
    };
    g.fletcher = function (a) {
        for (var b = a.length, c = 0, e = 255, d = 255; b;) {
            var g = 21 < b ? 21 : b, b = b - g;
            do {
                var h = "string" == typeof a ? a.charCodeAt(c) : a[c];
                c++;
                if (255 < h)var f = h >> 8, h = h & 255, h = h ^ f;
                e += h;
                d += e
            } while (--g);
            e = (e & 255) + (e >> 8);
            d = (d & 255) + (d >> 8)
        }
        a = (e & 255) + (e >> 8) << 8 | (d & 255) + (d >> 8);
        return 65535 == a ? 0 : a
    };
    l.calcTextChecksum = function (a) {
        var b =
            "";
        a = a.childNodes;
        for (var c = 0, e = a.length; c < e; c++)a[c] && 3 == a[c].nodeType && (b += a[c].nodeValue);
        return g.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    l.calcAttribChecksum = function (a) {
        var b = "", c = "width height align title alt name".split(" ");
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        for (var b = b + String(a.className || "").toLowerCase(), e = 0; e < c.length; e++)a.getAttribute && (b += String(a.getAttribute(c[e]) || "").toLowerCase());
        return g.fletcher(b.replace(/[\u0000-\u0020]+/g,
            ""))
    };
    l.calcChildrenChecksum = function (a) {
        return g.fletcher((a.innerHTML || "").replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    l.getFormNumber = function (a) {
        for (var b = f.getElementsByTagName("form"), c = 0, e = b.length; c < e; c++)if (b[c] == a)return c;
        return -1
    };
    l.classNameExists = function (a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
        } catch (c) {
            return !1
        }
    };
    l.isEmptyField = function (a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ?
            !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
    };
    l.getElementsByClassName = function (a, b) {
        b = b || f;
        for (var c = b.getElementsByTagName("*"), e = [], d = 0; d < c.length; d++)l.classNameExists(c[d], a) && e.push(c[d]);
        return e
    };
    l.getDocumentTitle = function () {
        var a = f.title;
        "string" != typeof a && (a = (a = f.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
        return a
    };
    g.mixin = function (a) {
        for (var b = 1; b < arguments.length; b++)if (arguments[b]) {
            for (var c in arguments[b])arguments[b].hasOwnProperty(c) &&
            (a[c] = arguments[b][c]);
            arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
        }
        return a
    };
    var I = function (a) {
        a = a || {};
        g.mixin(this, a);
        this._initComponent()
    };
    I.prototype._initComponent = function () {
    };
    I.inherit = function (a) {
        a = a || {};
        var b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function () {
            b.apply(this, arguments)
        });
        var c = function () {
        };
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        g.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor =
            a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = I.inherit;
        return a.constructor
    };
    var ea = {
        stringify: function (a) {
            var b = [], c;
            for (c in a)if (a.hasOwnProperty(c)) {
                var e = a[c];
                if (g.isArray(e))for (var d = 0; d < e.length; d++)b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(e[d]))); else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(e)))
            }
            return b.join("&")
        }
    };
    g.forEachKey = function (a, b, c) {
        for (var e in a)a.hasOwnProperty(e) && b.call(c, e, a[e], a)
    };
    g.inArray = function (a, b) {
        for (var c =
            0; c < a.length; c++)if (a[c] == b)return !0;
        return !1
    };
    var r = I.inherit({
        postParams: [], _buildUrl: function (a, b) {
            return a + (-1 < a.indexOf("?") ? "&" : "?") + ea.stringify(b)
        }, _splitParams: function (a) {
            var b = {}, c = {};
            g.forEachKey(a, function (a, d) {
                g.inArray(this.postParams, a) ? c[a] = d : b[a] = d
            }, this);
            return {get: b, post: c}
        }
    }), C = r.inherit({
        id: "XHR", method: "POST", withCredentials: !0, request: function (a, b, c, e) {
            if (/[^a-z0-9.:-]/.test(z.host) && h.opera && "function" == typeof h.opera.version) {
                var d = h.opera.version();
                if ("string" == typeof d &&
                    "12" == d.split(".")[0])return c.call(e, !1)
            }
            if (h.XMLHttpRequest) {
                var g = new XMLHttpRequest;
                if ("withCredentials" in g) {
                    b = this._splitParams(b);
                    a = this._buildUrl(a, b.get);
                    try {
                        g.open(this.method, a, !0)
                    } catch (f) {
                        return c.call(e, !1)
                    }
                    g.withCredentials = this.withCredentials;
                    this._setHeaders(g);
                    g.send(this._preparePostParams(b));
                    g.onreadystatechange = function () {
                        4 == g.readyState && c.call(e, 200 == g.status, g.responseText)
                    };
                    return
                }
            }
            c.call(e, !1)
        }, setMethod: function (a) {
            this.method = a
        }, _preparePostParams: function (a) {
            return ea.stringify(a.post)
        },
        _setHeaders: function (a) {
            a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        }
    }), ob = C.inherit({
        id: "RawBodyXHR", postParams: ["body"], _setHeaders: function () {
        }, _preparePostParams: function (a) {
            return a.post.body || ""
        }
    });
    g.toJSON = function (a) {
        if (a === ba)return "";
        if (null === a)return "null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a) ? a.toString() : "null";
            case String:
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g,
                        "\\r") + '"';
            case Array:
                for (var b = [], c = 0, e = a.length; c < e; c++)b[b.length] = g.toJSON(a[c]);
                return "[" + b.join(",") + "]";
            case Object:
                b = [];
                for (c in a)a.hasOwnProperty(c) && a[c] !== ba && (b[b.length] = g.toJSON(c) + ":" + g.toJSON(a[c]));
                return "{" + b.join(",") + "}";
            default:
                try {
                    return JSON.stringify(a)
                } catch (d) {
                    return "null"
                }
        }
    };
    var X = I.inherit({
        counterId: "", _initComponent: function () {
            X.superclass._initComponent.apply(this, arguments);
            this._ls = null;
            try {
                this._ls = h.localStorage
            } catch (a) {
            }
        }, set: function (a, b) {
            if (this.isEnabled())try {
                !b ||
                b && g.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), g.toJSON(b))
            } catch (c) {
            }
        }, get: function (a) {
            if (this.isEnabled())try {
                return JSON.parse(this._ls.getItem(this._getLsKey(a)))
            } catch (b) {
            }
            return null
        }, remove: function (a) {
            if (this.isEnabled())try {
                this._ls.removeItem(this._getLsKey(a))
            } catch (b) {
            }
        }, isEnabled: function () {
            return this._ls && h.JSON && "object" == typeof this._ls && "object" == typeof h.JSON
        }, getStorageId: function () {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * new Date), this.set("lsid",
                a));
            return a
        }, clearStorageId: function () {
            this.remove("lsid")
        }, _getLsKey: function (a) {
            return "_ym" + this.counterId + "_" + a
        }
    });
    g.arrayFilter = function (a, b, c) {
        var e = [], d;
        for (d = 0; d < a.length; d++)b.call(c, a[d], d, a) && e.push(a[d]);
        return e
    };
    g.arrayIndexOf = function (a, b) {
        for (var c = 0; c < a.length; c++)if (a[c] === b)return c;
        return -1
    };
    var p = {
        getLanguage: function () {
            return (h.navigator && (w.language || w.userLanguage || w.browserLanguage || w.systemLanguage) || "").toLowerCase()
        }
    }, pb = {
        baseUrl: "https://mc.yandex.", baseTld: "ru", syncTlds: ["ua",
            "by", "kz", "com.tr"], langToDomain: {uk: "ua", be: "by", tr: "com.tr", kk: "kz"}, sync: function () {
            var a = this._getDomainByLang(), b = this._getTld(), c = [], e, d, h, f = this;
            -1 != g.arrayIndexOf(this.syncTlds, a) && c.push(a);
            -1 != g.arrayIndexOf(this.syncTlds, b) && -1 == g.arrayIndexOf(c, b) && c.push(b);
            d = new X;
            h = d.get("synced") || {};
            c = g.arrayFilter(c, function (a) {
                return (h[a] || 1) + 432E5 < +new Date
            });
            c.length && (e = new ob({method: "GET"}), e.request(this.baseUrl + this.baseTld + "/sync_cookie_get", null, function (a, b) {
                var h, k, y;
                if (a) {
                    try {
                        h = JSON.parse(b),
                            k = h.sync_token, y = h.sync_ok
                    } catch (l) {
                        return !1
                    }
                    e.setMethod("POST");
                    for (h = 0; h < c.length; h++)-1 == g.arrayIndexOf(y, c[h]) && function (a) {
                        e.request(f.baseUrl + a + "/sync_cookie_consume", {body: k}, function (b, c) {
                            b && e.request(f.baseUrl + f.baseTld + "/sync_cookie_consume_ok", {body: c}, function (b) {
                                b && (b = d.get("synced") || {}, b[a] = +new Date, d.set("synced", b))
                            })
                        })
                    }(c[h])
                }
            }))
        }, _getTld: function () {
            var a = z.hostname.split("."), a = a[a.length - 1];
            return {tr: "com.tr", "\u0443\u043a\u0440": "ua", "xn--j1amh": "ua"}[a] || a
        }, _getDomainByLang: function () {
            var a;
            if (!h.navigator)return "ru";
            try {
                a = w.languages ? w.languages[0] : p.getLanguage()
            } catch (b) {
            }
            a = (a || "").toLowerCase().split("-")[0];
            return this.langToDomain[a] || "ru"
        }
    }, F = {
        getPos: function (a) {
            var b = l.getRootElement(), c = l.getDocumentScroll();
            return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0]
        }, getTarget: function (a) {
            a = a.target || a.srcElement;
            K = typeof a + " - " + String(a);
            !a.ownerDocument && a.documentElement && (a = a.documentElement);
            return a
        }, getMouseButton: function (a) {
            return a.which ||
            a.button == ba ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
        }
    };
    g.isFunction = function (a) {
        return "function" === typeof a
    };
    g.isNativeFunction = function (a, b) {
        var c;
        b = b || h;
        c = b[a];
        try {
            return g.isFunction(c) && -1 !== Function.prototype.toString.call(c).indexOf("[native code]")
        } catch (e) {
            return !1
        }
    };
    F.dispatchCustomEvent = v(function (a, b) {
        var c;
        b = b || f;
        g.isNativeFunction("Event") ? c = new Event(a) : f.createEvent ? (c = f.createEvent("Event"), c.initEvent(a, !0, !0)) : f.createEventObject && (c = f.createEventObject(), c.eventType = a);
        c.eventName = a;
        if (b.dispatchEvent)b.dispatchEvent(c); else if (b[a])b[a](); else if (b["on" + a])b["on" + a]()
    }, "EventHelper.dispatchCustomEvent");
    var k = I.inherit({
        _initComponent: function () {
            k.superclass._initComponent.apply(this, arguments);
            this._listeners = []
        }, on: function (a, b, c, e, d) {
            d = 5 > arguments.length ? !0 : !!d;
            for (var g = b.split(","), f = 0; f < g.length; f++) {
                var k = g[f], l = v(function (a) {
                    c.call(e || this, a || h.event)
                }, "on" + k);
                this._listeners[this._listeners.length] = [a, k, c, e, d, l];
                a.addEventListener ? a.addEventListener(k,
                    l, d) : a.attachEvent && a.attachEvent("on" + k, l)
            }
        }, un: function (a, b, c, e, d) {
            d = 5 > arguments.length ? !0 : !!d;
            for (var g = b.split(","), h = 0; h < g.length; h++)for (var f = g[h], k = 0; k < this._listeners.length; k++) {
                var m = this._listeners[k];
                if (m[0] == a && m[1] == f && m[2] == c && m[3] == e && m[4] == d) {
                    this._listeners.splice(k, 1);
                    this._removeListener(a, f, m[5], d);
                    return
                }
            }
        }, unAll: function () {
            for (var a = 0; a < this._listeners.length; a++) {
                var b = this._listeners[a];
                this._removeListener(b[0], b[1], b[5], b[4])
            }
            this._listeners.length = 0
        }, _removeListener: function (a,
                                      b, c, e) {
            a.removeEventListener ? a.removeEventListener(b, c, e) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    k.on = function (a, b, c, e, d) {
        k._instance || (k._instance = new k);
        k._instance.on.apply(k._instance, arguments)
    };
    k.un = function (a, b, c, e, d) {
        k._instance && k._instance.un.apply(k._instance, arguments)
    };
    var ia = null, Y = I.inherit({
        counterId: "", onlyCurrentDomain: !1, skipPrefix: !1, _initComponent: function () {
            Y.superclass._initComponent.apply(this, arguments);
            this._domain = null;
            if (!this.onlyCurrentDomain)for (var a = z.host.split("."),
                                                 b = 2; ;)if (b <= a.length) {
                if (this._domain = "." + a.slice(-b).join("."), b++, this.isEnabled())break
            } else {
                this._domain = null;
                break
            }
        }, create: function (a, b, c) {
            a = [this._prepareName(a) + "=" + encodeURIComponent(b)];
            c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires=" + b.toGMTString()));
            this._domain && a.push("domain=" + this._domain);
            a.push("path=/");
            try {
                f.cookie = a.join(";")
            } catch (e) {
            }
        }, read: function (a) {
            try {
                var b = f.cookie
            } catch (c) {
            }
            return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "=([^;]*)")) ? decodeURIComponent(RegExp.$1) :
                null
        }, erase: function (a) {
            this.create(a, "", -1)
        }, isEnabled: function () {
            this.create("metrika_enabled", "1", 60);
            var a = !!this.read("metrika_enabled");
            this.erase("metrika_enabled");
            return a
        }, _prepareName: function (a) {
            return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
        }
    });
    Y.isEnabled = function () {
        return (new Y({onlyCurrentDomain: !0})).isEnabled()
    };
    var N = I.inherit({
        transports: [], postParams: [], send: function (a, b, c, e) {
            c = c || function () {
                };
            (function y(g) {
                if (g < this.transports.length)try {
                    var h = new this.transports[g]({postParams: this.postParams});
                    h.request(a, b, function (a, b) {
                        a ? c.call(e, b) : y.call(this, g + 1)
                    }, this)
                } catch (f) {
                    ra(f, "send by " + (h && h.id)), y.call(this, g + 1)
                }
            }).call(this, 0)
        }
    });
    r.inherit({
        id: "beacon", request: function (a, b, c, e) {
            "function" == typeof w.sendBeacon ? (b = this._splitParams(b), c.call(e, w.sendBeacon(this._buildUrl(a, b.get), ea.stringify(b.post)))) : c.call(e, !1)
        }
    });
    g.random = function (a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    g.getNativeFunction = function (a, b) {
        b = b || h;
        var c =
            b.constructor && b.constructor.prototype && b.constructor.prototype[a] || b[a];
        return c && "apply" in c ? function () {
            return c.apply(b, arguments)
        } : c
    };
    g.setTimeout = function (a, b, c) {
        return g.getNativeFunction("setTimeout")(v(a, c || "setTimeout"), b)
    };
    var Q = r.inherit({
            id: "form", enctype: "application/x-www-form-urlencoded", htmlfileOnly: !1, _initComponent: function () {
                Q.superclass._initComponent.apply(this, arguments);
                "_htmlfile" in Q.prototype || (Q.prototype._htmlfile = this._createHtmlfile());
                this._doc = this._htmlfile || (this.htmlfileOnly ?
                        null : f)
            }, request: function (a, b, c, e) {
                var d = this._doc;
                if (!d)return c.call(e, !1);
                b = this._splitParams(b);
                var h = "ifr" + g.random(), f = d.createElement("div");
                f.style.position = "absolute";
                f.style.left = "-99999px";
                f.style.top = "-99999px";
                var k = ['<iframe name="', h, '"></iframe>', '<form action="', this._buildUrl(a, b.get), '" method="post" target="', h, '" enctype="', this.enctype, '">'];
                g.forEachKey(b.post, function (a) {
                    g.mergeArrays(k, ['<input type="hidden" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" name="',
                        a, '"/>'])
                });
                g.mergeArrays(k, ["</form>"]);
                f.innerHTML = k.join("");
                d.body.appendChild(f);
                var l = f.getElementsByTagName("form")[0];
                g.forEachKey(b.post, function (a, b) {
                    l[a].value = b
                });
                l.submit();
                g.setTimeout(function () {
                    d.body.removeChild(f)
                }, 1E4, "TransportForm.request.2");
                return c.call(e, !0)
            }, _createHtmlfile: function () {
                try {
                    if (h.ActiveXObject) {
                        var a = new ActiveXObject("htmlfile");
                        a.open();
                        a.write("<html><body></body></html>");
                        a.close();
                        return a
                    }
                } catch (b) {
                }
                return null
            }
        }), Z = Q.inherit({id: "htmlfile", htmlfileOnly: !0}),
        J = r.inherit({
            id: "img", request: function (a, b, c, e) {
                a = this._buildUrl(a, b);
                b = f.createElement("img");
                b.onload = v(function () {
                    c.call(e, !0)
                }, "TransportImage.request");
                b.onerror = v(function () {
                    c.call(e, !1)
                }, "TransportImage.request");
                b.src = a
            }
        });
    g.defer = function (a, b, c, e, d) {
        return g.setTimeout(function () {
            a.apply(c, e || [])
        }, b, d)
    };
    var L = N.inherit({
        protocol: "",
        host: "mc.yandex.ru",
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [C, J, Z],
        _initComponent: function () {
            L.superclass._initComponent.apply(this, arguments);
            this.retry && (this._storage = new X)
        },
        send: function (a, b, c, e) {
            var d = this._registerRequest(a, b);
            this._sendSavedRequest(d, a, b, c, e)
        },
        _sendSavedRequest: function (a, b, c, e, d) {
            var f = h.Ya._metrika.firstReqStatus;
            if ("process" == f)h.Ya._metrika.firstReqCallbacks = g.mergeArrays(h.Ya._metrika.firstReqCallbacks || [], [[this, arguments]]); else {
                f || (h.Ya._metrika.firstReqStatus = "process");
                f = {};
                this.counterType && (f["cnt-class"] = this.counterType);
                g.mixin(f, b);
                c.st = Math.round((new Date).getTime() / 1E3);
                c.u = L._userID;
                var k = [this.protocol,
                    "//", this.host, "/" + this.resource + "/" + this.counterId].join(""), l = [];
                c && (g.forEachKey(c, function (a, b) {
                    "t" != a && g.mergeArrays(l, [a, b])
                }), c.t && g.mergeArrays(l, ["t", c.t]));
                l.length && (f["browser-info"] = l.join(":"));
                return L.superclass.send.call(this, k, f, function () {
                        h.Ya._metrika.firstReqStatus = "complete";
                        this._unregisterRequest(a);
                        var b = h.Ya._metrika.firstReqCallbacks;
                        h.Ya._metrika.firstReqCallbacks = null;
                        if (b)for (var c = 0; c < b.length; c++)b[c][0]._sendSavedRequest.apply(b[c][0], b[c][1]);
                        e && e.apply(d, arguments)
                    },
                    this)
            }
        },
        _isRetryEnabled: function () {
            return this.retry && this._storage && this._storage.isEnabled()
        },
        _registerRequest: function (a, b) {
            if (this._isRetryEnabled()) {
                b.rqnl = b.rqnl || 0;
                b.rqnl++;
                for (var c = this._storage.get("retryReqs") || {}, e = 1; c[e];)e++;
                c[e] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    counterType: this.counterType,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: Ya._globalMetrikaHitId,
                    time: +new Date
                };
                this._storage.set("retryReqs", c);
                return e
            }
        },
        _unregisterRequest: function (a) {
            if (a &&
                this._isRetryEnabled()) {
                var b = this._storage.get("retryReqs") || {};
                b[a] && (delete b[a], this._storage.set("retryReqs", b))
            }
        }
    });
    L.initCookie = function () {
        var a = new Y, b = a.read("uid");
        b || (b = Math.round((new Date).getTime() / 1E3), b = b + "" + g.random(), a.create("uid", b, 1036800));
        L._userID = b
    };
    L.retransmit = function () {
        var a = new X, b = a.get("retryReqs") || {};
        a.remove("retryReqs");
        g.forEachKey(b, function (a, b) {
            h.Ya._metrika.firstReqStatus || (h.Ya._metrika.firstReqStatus = "complete");
            b.ghid && b.ghid != Ya._globalMetrikaHitId && b.time &&
            b.time + 864E5 > +new Date && 2 >= b.browserInfo.rqnl && (new L({
                protocol: b.protocol,
                host: b.host,
                resource: b.resource,
                counterId: b.counterId,
                counterType: b.counterType,
                postParams: b.postParams || [],
                retry: !0
            })).send(b.params, b.browserInfo)
        })
    };
    var M = {
        abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        tail: "+/=",
        tailSafe: "*-_",
        encode: function (a, b) {
            for (var c = (this.abc + (b ? this.tailSafe : this.tail)).split(""), e = a.length, d = [], h = e - e % 3, f, k = 0; k < h; k += 3)f = (a[k] << 16) + (a[k + 1] << 8) + a[k + 2], g.mergeArrays(d, [c[f >>
            18 & 63], c[f >> 12 & 63], c[f >> 6 & 63], c[f & 63]]);
            switch (e - h) {
                case 1:
                    f = a[h] << 4;
                    g.mergeArrays(d, [c[f >> 6 & 63], c[f & 63], c[64], c[64]]);
                    break;
                case 2:
                    f = (a[h] << 10) + (a[h + 1] << 2), g.mergeArrays(d, [c[f >> 12 & 63], c[f >> 6 & 63], c[f & 63], c[64]])
            }
            return d.join("")
        }
    }, O = {
        encode: function (a) {
            for (var b = [], c = 0, e = a.length; c < e; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b.push(d) : (127 < d && 2048 > d ? b.push(d >> 6 | 192) : (b.push(d >> 12 | 224), b.push(d >> 6 & 63 | 128)), b.push(d & 63 | 128))
            }
            return b
        }
    }, nb = L.inherit({
        resource: "webvisor", transports: [C, Q], postParams: ["wv-data"],
        sendContent: function (a, b, c, e, d, g, f) {
            if (!a)return !1;
            -1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
            a = {"wv-type": 1, "page-url": x().href, "wv-hit": c, "wv-data": M.encode(O.encode(a))};
            return 245E3 < a["wv-data"].length ? !1 : this.send(a, {z: e, i: d, pct: b || ""}, g, f)
        }
    });
    g.throttle = function (a, b, c, e) {
        var d, f, h;
        return function () {
            f = arguments;
            h = this;
            d || function () {
                d = null;
                f && (a.apply(c || h, f), f = null, d = g.setTimeout(arguments.callee, b, e))
            }()
        }
    };
    var Va = I.inherit({
        storage: null, storageKey: "dataBuffer", maxBufferSize: 255, flushTimeout: 1E4,
        active: !0, meta: null, onFlush: function () {
        }, onFlushCtx: null, bufferExpireTime: 864E5, _initComponent: function () {
            Va.superclass._initComponent.apply(this, arguments);
            this._data = [];
            this._packetNumber = 0;
            this._flushTID = null;
            this._saveToStorageThrottled = g.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
            if (this.storage) {
                var a = this.storage.get(this.storageKey);
                a && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +new Date && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum);
                this.clear()
            }
        },
        append: function (a, b) {
            g.mergeArrays(this._data, a);
            this._saveToStorageThrottled();
            this.active && ((b || this._data.length >= this.maxBufferSize) && this._flush(), this._flushTID || (this._flushTID = g.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
        }, activate: function () {
            this.active || (this.active = !0, this.append([]))
        }, clear: function () {
            this._data.length = 0;
            this._flushTID = null;
            this.storage && this.storage.remove(this.storageKey)
        }, _flush: function () {
            this.onFlush.call(this.onFlushCtx || this, this._data, this.meta,
                this._packetNumber);
            this._packetNumber++;
            this.clear()
        }, _saveToStorage: function () {
            this.storage && this._data.length && this.storage.set(this.storageKey, {
                data: this._data,
                meta: this.meta,
                pnum: this._packetNumber,
                time: +new Date
            })
        }
    });
    g.trim = function (a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    g.isString = function (a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    g._playerRegexp = /^.+\.mtproxy\.yandex\.net$/;
    g.isMetrikaPlayer = function () {
        return "MetrikaPlayer" ==
            h.name || this._playerRegexp.test(h.location.hostname)
    };
    p._jScriptVersion = 0;
    p.getJScriptVersion = function () {
        p._jScriptVersion || (p._jScriptVersion = (new Function("return /*@cc_on @_jscript_version @*/;"))());
        return p._jScriptVersion
    };
    p._silverlightVersion = "";
    p.getSilverlightVersion = function () {
        if (!p._silverlightVersion)if (h.ActiveXObject)try {
            var a = function (a, b, c, g) {
                for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);)b[c] += g;
                b[c] -= g
            }, b = new ActiveXObject("AgControl.AgControl"), c = [1, 0, 0, 0];
            a(b, c, 0,
                1);
            a(b, c, 1, 1);
            a(b, c, 2, 1E4);
            a(b, c, 2, 1E3);
            a(b, c, 2, 100);
            a(b, c, 2, 10);
            a(b, c, 2, 1);
            a(b, c, 3, 1);
            p._silverlightVersion = c.join(".")
        } catch (e) {
        } else if (a = h.navigator, a = a.plugins && a.plugins["Silverlight Plug-In"])p._silverlightVersion = a.description;
        return p._silverlightVersion || ""
    };
    p._flashVersion = 0;
    p.getFlashVersion = function () {
        if (!p._flashVersion) {
            var a = h.navigator;
            if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                var b = a.plugins["Shockwave Flash"], c = b.version;
                if ((b = b.description) ||
                    c)if (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin)c ? p._flashVersion = c : b && (p._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
            } else if ("undefined" != typeof h.ActiveXObject)try {
                if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))if (b = c.GetVariable("$version"))p._flashVersion = b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
            } catch (e) {
            }
        }
        return p._flashVersion
    };
    p.getJavaEnabled = function () {
        try {
            return w.javaEnabled()
        } catch (a) {
            return !1
        }
    };
    p.getNotificationPermission = function () {
        var a;
        try {
            a = Notification.permission
        } catch (b) {
        }
        switch (a) {
            case "denied":
                return 1;
            case "granted":
                return 2
        }
    };
    p.isIframe = function () {
        try {
            return h.top != h.self
        } catch (a) {
            return !1
        }
    };
    g.fnv32a = function (a) {
        for (var b = 2166136261, c = 0, e = a.length; c < e; ++c)b ^= a.charCodeAt(c), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    };
    p.getFingerPrint = function () {
        var a = [];
        if (w.plugins && w.plugins.length)for (var b = 0; b < w.plugins.length; b++) {
            var c = w.plugins[b];
            g.mergeArrays(a, [c.name, c.version,
                c.description, c.filename])
        }
        if (w.mimeTypes && w.mimeTypes.length)for (b = 0; b < w.mimeTypes.length; b++)c = w.mimeTypes[b], g.mergeArrays(a, [c.type, c.description, c.suffixes]);
        return g.fnv32a(a.join(";")) + "01"
    };
    p.isSafari = function () {
        try {
            return w.vendor && -1 < w.vendor.indexOf("Apple") && w.userAgent && !w.userAgent.match("CriOS")
        } catch (a) {
        }
        return !1
    };
    var qb = {
        url: "https://mc.yandex.ru/metrika/", _value: null, _storage: null, getVal: function () {
            var a;
            if (null !== this._value && this._value !== ba)return this._value;
            this._storage || (this._storage =
                new Y);
            if (a = this._storage.read("isad"))return this._set(a), this._value;
            this._getReqStatus() || this._send();
            return null
        }, _set: function (a) {
            var b = null;
            "1" == a ? b = "1" : "2" == a && (b = "2");
            this._value = b
        }, _send: function () {
            var a = f.createElement("img"), b = this;
            a.onload = function () {
                b._saveReq(!1);
                this.parentNode && this.parentNode.removeChild(this)
            };
            a.onerror = function () {
                b._saveReq(!0);
                this.parentNode && this.parentNode.removeChild(this)
            };
            this._setReqStatus("process");
            a.src = this.url + String.fromCharCode(97, 100, 118, 101, 114,
                    116, 46, 103, 105, 102);
            p.isSafari() && (a.style.position = "absolute", a.style.visibility = "hidden", a.style.width = "0px", a.style.height = "0px", l.getRootElement().appendChild(a))
        }, _saveReq: function (a) {
            this._value = a = a ? "1" : "2";
            this._setReqStatus("complete");
            this._storage.create("isad", a, 1200)
        }, _setReqStatus: function (a) {
            try {
                h.Ya._metrika.adStatus = a
            } catch (b) {
            }
        }, _getReqStatus: function () {
            try {
                return h.Ya._metrika.adStatus
            } catch (a) {
                return "complete"
            }
        }
    }, ja = L.inherit({
        hitId: 0,
        trackHash: !1,
        trimParams: !1,
        webvisor: !1,
        counter: null,
        counterNum: 0,
        resource: "watch",
        retry: !0,
        postParams: ["site-info"],
        countersNoTitle: "22836271 1143050 29626870 9928105 26128362 29850769".split(" "),
        sendTitle: !0,
        _initComponent: function () {
            ja.superclass._initComponent.apply(this, arguments);
            this._trackHash = this.trackHash;
            "0" === "" + this.counterType && (this.sendTitle = -1 === g.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
        },
        setTrackHash: function (a) {
            this._trackHash = a
        },
        sendHit: function (a) {
            this._hitExt({
                url: a.url, title: a.title, referrer: a.referrer, userParams: a.userParams,
                modes: {ar: !0, saveRef: !0, pv: !0}, callback: a.callback, ctx: a.ctx
            })
        },
        sendPrerenderHit: function (a) {
            this._hitExt({url: a.url, title: a.title, referrer: a.referrer, modes: {ar: !0, pq: !0}})
        },
        sendAjaxHit: function (a) {
            this._hitExt({url: a.url, title: a.title, referrer: a.referrer, modes: a.modes})
        },
        sendParams: function (a, b, c) {
            this._hitExt({
                url: x().href,
                title: "",
                referrer: "",
                userParams: a,
                modes: {ar: !0, pa: !0, onlyData: !0},
                callback: b,
                ctx: c
            })
        },
        sendGoal: function (a, b) {
            if (!/[\/&=?#]/.test(a)) {
                var c = a ? "goal://" + x().hostname + "/" + encodeURIComponent(a) :
                    x().href, e = l.getDocumentTitle(), d = a ? x().href : f.referrer;
                this._hitExt({
                    url: c,
                    title: e,
                    referrer: d,
                    userParams: b.userParams,
                    modes: {ar: !0},
                    callback: b.callback,
                    ctx: b.ctx
                })
            }
        },
        sendClickLink: function (a) {
            this._hitExt({url: a.url, title: a.title, referrer: x().href, modes: a.modes})
        },
        sendExtLink: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: x().href,
                userParams: a.userParams,
                modes: {ar: !0, ln: !0, ut: ka},
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendFileUpload: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: x().href,
                userParams: a.userParams,
                modes: {ar: !0, ln: !0, dl: !0},
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendNotBounce: function (a, b) {
            this._hitExt({
                url: x().href,
                title: "",
                referrer: "",
                modes: {cl: a, ar: !0, nb: !0, onlyData: !0},
                callback: b.callback,
                ctx: b.ctx
            })
        },
        _hitExt: function (a) {
            function b(a, b) {
                b && (h[a] = b)
            }

            var c = a.modes || {}, e = a.browserInfo || {};
            if (!g.isMetrikaPlayer()) {
                var d = "undefined" != typeof a.referrer ? a.referrer : ia, f = a.url, h = {};
                c.ar && !c.onlyData && (d = null === d || "" === d ? "" : this._prepareHitUrl(d), f = this._prepareHitUrl(a.url));
                b("page-ref", g.trim(d, da));
                b("page-url", g.trim(f, da));
                -1 != x().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/) ? b("ut", ka) : "undefined" != typeof c.ut && b("ut", g.trim(c.ut, rb));
                if (a.userParams)if (f = g.toJSON(a.userParams), this.trimParams && f.length > sb)var k = !0; else b("site-info", f);
                c.saveRef && (ia = d);
                g.mixin(e, this._getTechInfo(a.title, c, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter));
                this.send(h, e, function () {
                    k && (new ja({
                        protocol: this.protocol,
                        counterType: this.counterType,
                        counterId: this.counterId,
                        hitId: this.hitId,
                        trackHash: this.trackHash,
                        webvisor: this.webvisor,
                        counterNum: this.counterNum,
                        counter: this.counter
                    })).sendParams(a.userParams);
                    g.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
                }, this)
            }
        },
        _prepareHitUrl: function (a) {
            var b = x(), c = b.host, b = b.href, e;
            if (!g.isString(a))return b;
            if (-1 != a.search(/^\w+:\/\//))return a;
            e = a.charAt(0);
            if ("?" == e)return e = b.search(/\?/), -1 == e ? b + a : b.substr(0, e) + a;
            if ("#" == e)return e = b.search(/#/), -1 == e ? b + a : b.substr(0, e) + a;
            if ("/" == e) {
                if (e =
                        b.search(c), -1 != e)return b.substr(0, e + c.length) + a
            } else return c = b.split("/"), c[c.length - 1] = a, c.join("/");
            return a
        },
        _getTechInfo: function (a, b, c, e, d, f, k, A, r) {
            function m(a, b) {
                a && b && (v[a] = b)
            }

            function n(a) {
                b[a] && m(a, "1")
            }

            b = b || {};
            var v = {};
            e = e || aa.getTimestamp();
            d = d || aa.getTimezone();
            m("j", p.getJavaEnabled() ? "1" : "");
            U && m("s", U.width + "x" + U.height + "x" + (U.colorDepth || U.pixelDepth));
            h.devicePixelRatio && m("sk", h.devicePixelRatio);
            p.isIframe() && m("ifr", "1");
            m("adb", qb.getVal());
            m("f", p.getFlashVersion());
            m("l",
                p.getSilverlightVersion());
            m("fpr", p.getFingerPrint());
            m("cn", this.counterNum);
            if (!b.pa) {
                var z = l.getViewportSize();
                m("w", z[0] + "x" + z[1])
            }
            m("z", d);
            m("i", e);
            m("et", Math.round((new Date).getTime() / 1E3));
            m("en", l.getDocumentCharset());
            m("v", P);
            m("c", w.cookieEnabled ? "1" : "");
            m("jv", p.getJScriptVersion());
            m("la", p.getLanguage());
            m("ntf", p.getNotificationPermission());
            f && m("wh", "1");
            d = "ar ln dl ad nb pa pq pv".split(" ");
            for (e = 0; e < d.length; e++)n(d[e]);
            d = ["va", "vt", "sn", "sa", "he"];
            b.nb && d.push("cl");
            for (e =
                     0; e < d.length; e++)f = d[e], m(f, b[f]);
            c = new X({counterId: c});
            c.isEnabled() && (e = c.getStorageId(), (d = c.get("reqNum")) ? d++ : d = 1, c.set("reqNum", d), c.get("reqNum") == d ? (m("ls", e), m("rqn", d)) : (c.remove("reqNum"), c.clearStorageId(), 1 < d && (m("ls", e), m("rqn", 0))));
            m("rn", g.random());
            m("hid", k);
            m("ds", gb(r));
            r._firstPaint || (r._firstPaint = hb(), m("fp", r._firstPaint));
            if (A) {
                h.name || (h.name = Math.round(65535 * Math.random()));
                if (k = +h.name)0 > k && (k *= -1), k %= 65535;
                m("wn", k || g.fletcher(h.name));
                try {
                    h.history && m("hl", String(h.history.length))
                } catch (x) {
                }
            }
            k =
                "";
            this.sendTitle && (k = this._getTitle(a));
            m("t", k);
            return v
        },
        _getTitle: function (a) {
            var b = "";
            b = "undefined" == typeof a ? (b = l.getDocumentTitle()) ? g.trim(b, Wa) : "" : g.trim(a, Wa);
            return b
        }
    });
    g.array2Props = function (a) {
        for (var b = a.length, c = {}, e = c, d = 0; d < b - 1; d++) {
            var g = a[d];
            e[g] = {};
            d < b - 2 && (e = e[g])
        }
        e[g] = a[b - 1];
        return c
    };
    var V = I.inherit({
        sampling: 1, counterId: 26302566, _initComponent: function () {
            V.superclass._initComponent.apply(this, arguments);
            this._sender = new ja({
                protocol: "https:", counterId: this.counterId, retry: !1,
                counter: {}
            })
        }, log: function () {
            this.logParams(g.array2Props(arguments))
        }, logParams: function (a) {
            Math.random() < this.sampling && this._sender.sendHit({url: z.href, title: "", referrer: "", userParams: a})
        }
    }), tb = L.inherit({
        resource: "webvisor", retry: !0, postParams: ["wv-data"], sendPacket: function (a, b, c, e, d, f, k, l) {
            if (!a || !a.length)return !1;
            var p = M.encode(a, !0);
            0 == p.indexOf("AAAAAAAAADw") && h.Error && "string" == typeof Error().stack && (new V({sampling: .1})).log("bad visor packet 5", 1);
            a = {
                rn: g.random(), "page-url": b, wmode: 0,
                "wv-type": 0, "wv-hit": c, "wv-part": e + 1, "wv-check": g.fletcher(a), "wv-data": p
            };
            return this.send(a, {z: d, i: f}, k, l)
        }
    }), Ua = Va.inherit({
        protocol: "",
        counterId: "",
        counterType: "",
        meta: null,
        maxBufferSize: 7500,
        flushTimeout: 3E4,
        storageKey: "visorbuff",
        active: !1,
        _initComponent: function () {
            this.storage = new X({counterId: this.counterId});
            this._sender = new tb({protocol: this.protocol, counterId: this.counterId, counterType: this.counterType});
            Ua.superclass._initComponent.apply(this, arguments)
        },
        onFlush: function (a, b, c) {
            this._sender.sendPacket(a,
                b.url, b.hitId, c, b.timezone, b.timestamp)
        }
    });
    g.isObject = function (a) {
        try {
            return a && null !== a && "[object Object]" == Object.prototype.toString.call(a)
        } catch (b) {
            return !1
        }
    };
    g.isNumber = function (a) {
        return isFinite(a) && !isNaN(a) && "[object Number]" == Object.prototype.toString.call(a)
    };
    g.clearTimeout = function (a) {
        return g.getNativeFunction("clearTimeout")(a)
    };
    g._urlParser = null;
    g.parseUrl = function (a) {
        if (!this._urlParser)try {
            this._urlParser = f.createElement("a")
        } catch (b) {
        }
        return this._urlParser ? (this._urlParser.href =
            a, {
            protocol: this._urlParser.protocol,
            host: this._urlParser.host,
            port: this._urlParser.port,
            hostname: this._urlParser.hostname,
            hash: this._urlParser.hash,
            search: this._urlParser.search,
            query: this._urlParser.search.replace(/^\?/, ""),
            pathname: this._urlParser.pathname || "/",
            path: (this._urlParser.pathname || "/") + this._urlParser.search,
            href: this._urlParser.href
        }) : {}
    };
    p.isIE = function () {
        return 5.8 >= p.getJScriptVersion()
    };
    var fa = {};
    fa._cookie = new Y({onlyCurrentDomain: !0});
    fa.log = v(function () {
        var a = -1 < z.href.indexOf("_ym_debug=1") ||
            h._ym_debug;
        a && this._cookie.create("debug", "1");
        h.console && console.log && (a || "1" === this._cookie.read("debug")) && console.log.apply(console, arguments)
    }, "DebugConsole.log");
    var ub = L.inherit({
        resource: "clmap", retry: !0, transports: [J], sendClick: function (a, b, c, e) {
            this.send({"page-url": a, "pointer-click": b}, {}, c, e)
        }
    }), vb = I.inherit({
        filter: null,
        ignoreTags: [],
        quota: 0,
        isTrackHash: !1,
        protocol: "",
        counterId: 0,
        counterType: 0,
        startTime: 0,
        MAX_LEN_PATH: 128,
        TIMEOUT_CLICK: 50,
        TIMEOUT_SAME_CLICKS: 1E3,
        DELTA_SAME_CLICKS: 2,
        tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "),
        _initComponent: function () {
            this._lastClick = null;
            this.hasQuota = !!this.quota;
            this._quota = this.quota;
            this._ignoreTags = [];
            if (this.ignoreTags)for (var a = 0; a < this.ignoreTags.length; a++)this.ignoreTags[a] && g.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
            this._cacheTags = {};
            for (var a = 59, b = String.fromCharCode, c = 0; c < this.tags.length; c++)this._cacheTags[this.tags[c]] = b(a), b(a), a++;
            this._sender = new ub({protocol: this.protocol, counterId: this.counterId, counterType: this.counterType});
            this._start = !1;
            this.start()
        },
        destroy: function () {
            this.stop()
        },
        start: function () {
            if (!this._start)k.on(f,
                "click", this._handler, this);
            this._start = !0
        },
        stop: function () {
            this._start && k.un(f, "click", this._handler, this);
            this._start = !1
        },
        setTrackHash: function (a) {
            this.isTrackHash = a
        },
        _isIgnore: function (a) {
            return l.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
        },
        _handler: function (a) {
            K = 1;
            a = {el: F.getTarget(a), pos: F.getPos(a), button: F.getMouseButton(a), time: +new Date};
            K = 2;
            if (this._isTrackingClick(a)) {
                K = 3;
                var b = l.getElementSize(a.el), c = l.getElementXY(a.el), b = ["rn", g.random(), "x", Math.floor(65535 * (a.pos[0] -
                    c[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el)];
                K = 4;
                c = x().href;
                this.isTrackHash ? g.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
                K = 5;
                this._sender.sendClick(g.trim(c, da), b.join(":"));
                this._lastClick = a
            }
            K = 6
        },
        _isTrackingClick: function (a) {
            if (h.ymDisabledClickmap || g.isMetrikaPlayer())return !1;
            var b = a.el.tagName;
            if ((2 == a.button || 3 == a.button) && "A" != b || this.filter && !this.filter(a.el, b))return !1;
            for (var c = 0; c < this._ignoreTags.length; c++)if (this._ignoreTags[c] ==
                b)return !1;
            for (b = a.el; b;) {
                if (this._isIgnore(b))return !1;
                b = b.parentNode
            }
            if (this._lastClick) {
                if (a.time - this._lastClick.time < this.TIMEOUT_CLICK)return !1;
                var b = Math.abs(this._lastClick.pos[0] - a.pos[0]), c = Math.abs(this._lastClick.pos[1] - a.pos[1]), e = a.time - this._lastClick.time;
                if (this._lastClick.el == a.el && b < this.DELTA_SAME_CLICKS && c < this.DELTA_SAME_CLICKS && e < this.TIMEOUT_SAME_CLICKS)return !1
            }
            if (this.hasQuota) {
                if (!this._quota)return !1;
                this._quota--
            }
            return !0
        },
        _getElPath: function (a) {
            for (var b = ""; a && a.parentNode &&
            "BODY" != a.tagName && "HTML" != a.tagName;)b += this._cacheTags[a.tagName] || "*", b += l.getElementNeighborPosition(a) || "", a = a.parentNode;
            return g.trim(b, this.MAX_LEN_PATH)
        }
    }), Xa = I.inherit({
        _initComponent: function () {
            Xa.superclass._initComponent.apply(this, arguments);
            this._executedMsgs = {};
            k.on(h, "message", this.RemoteControl__onMessage, this)
        }, RemoteControl__onMessage: function (a) {
            try {
                var b = a.origin
            } catch (e) {
            }
            if (b && /^http:\/\/(.+\.)?webvisor\.com$/.test(b)) {
                try {
                    var c = (new Function("return " + a.data))()
                } catch (e) {
                }
                c &&
                c.id && c.code && !this._executedMsgs[c.id] && (this._executedMsgs[c.id] = !0, (new Function("evt", c.code))(a))
            }
        }
    }), aa = {};
    g.pad = function (a) {
        return (10 > a ? "0" : "") + a
    };
    aa.getTimestamp = function () {
        for (var a = new Date, a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()], b = "", c = 0; c < a.length; c++)b += g.pad(a[c]);
        return b
    };
    aa.getTimezone = function () {
        return -(new Date).getTimezoneOffset()
    };
    g.bind = function (a, b) {
        return function () {
            return a.apply(b || this, arguments)
        }
    };
    var Za = I.inherit({
        counter: null,
        prefsEcommerce: null, dataLayerName: "dataLayer", _initComponent: function () {
            var a = "customArr";
            Za.superclass._initComponent.apply(this, arguments);
            this._overridePush(this.prefsEcommerce) || (g.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce), a = this.dataLayerName, this._tryTimeout = g.bind(this._tryTimeout, this), this._tryTimeout());
            this.counter._ecommerce = a
        }, _overridePush: function (a) {
            if (a && "function" == typeof a.push) {
                var b = this;
                b._send(a);
                var c = a.push;
                a.push = function () {
                    b._send([].slice.call(arguments,
                        0));
                    c.apply(this, arguments)
                };
                return !0
            }
            return !1
        }, _tryTimeout: function () {
            this._overridePush(h[this.dataLayerName]) || g.setTimeout(this._tryTimeout, 1E3, "dlObserver")
        }, _send: function (a) {
            for (var b = [], c = 0; c < a.length; c++)a[c].ecommerce && (b[b.length] = a[c].ecommerce);
            b.length && this.counter.params({__ym: {ecommerce: b}})
        }
    }), r = r.inherit({
        id: "script", request: function (a, b, c, e) {
            var d = "_ymjsp" + g.random(), k = f.createElement("script");
            h[d] = v(function (a) {
                    try {
                        delete h[d]
                    } catch (b) {
                        h[d] = ba
                    }
                    c.call(e, !0, a);
                    k.parentNode && k.parentNode.removeChild(k)
                },
                "transport.script");
            k.type = "text/javascript";
            k.src = this._buildUrl(a, g.mixin({wmode: 5, callback: d}, b));
            a = f.getElementsByTagName("head")[0];
            a.insertBefore(k, a.firstChild);
            return !0
        }
    });
    O.decode = function (a) {
        for (var b = "", c = 0, e = 0, d = 0, g = 0; c < a.length;)e = a.charCodeAt(c), 128 > e ? (b += String.fromCharCode(e), c++) : 191 < e && 224 > e ? (d = a.charCodeAt(c + 1), b += String.fromCharCode((e & 31) << 6 | d & 63), c += 2) : (d = a.charCodeAt(c + 1), g = a.charCodeAt(c + 2), b += String.fromCharCode((e & 15) << 12 | (d & 63) << 6 | g & 63), c += 3);
        return b
    };
    M.decode = function (a,
                         b) {
        for (; a.length % 4;)a += "=";
        var c = this.abc + (b ? this.tailSafe : this.tail), e, d, g, f, h, k = 0, l = "";
        do {
            e = c.indexOf(a.charAt(k++));
            d = c.indexOf(a.charAt(k++));
            f = c.indexOf(a.charAt(k++));
            h = c.indexOf(a.charAt(k++));
            if (0 > e || 0 > d || 0 > f || 0 > h)return null;
            g = e << 18 | d << 12 | f << 6 | h;
            e = g >> 16 & 255;
            d = g >> 8 & 255;
            g &= 255;
            l = 64 == f ? l + String.fromCharCode(e) : 64 == h ? l + String.fromCharCode(e, d) : l + String.fromCharCode(e, d, g)
        } while (k < a.length);
        return O.decode(l)
    };
    var $a = ja.inherit({
        transports: [r], trimParams: !0, _initComponent: function () {
            $a.superclass._initComponent.apply(this,
                arguments);
            this._ilStorage = new X({counterId: this.counterId})
        }, sendHit: function (a) {
            var b = {}, c = this._ilStorage.get("il");
            a.visitColor && (b.vc = a.visitColor);
            a.hasPrerender && (b.pr = 1);
            c && (this._ilStorage.remove("il"), b.ilt = M.encode(O.encode(g.trim(c, ab))));
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                userParams: a.userParams,
                modes: a.modes,
                browserInfo: b,
                ts: a.ts,
                tz: a.tz,
                callback: a.callback,
                ctx: a.ctx
            })
        }
    });
    g.safeDecodeURIComponent = function (a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    };
    ea.parse = function (a, b) {
        var c = {};
        a = a && a.replace(/^\?/, "") || "";
        if (a.length)for (var e = a.split("&"), d = 0; d < e.length; d++)if (e[d]) {
            var f = e[d].split("=");
            if (f[0]) {
                var h = g.safeDecodeURIComponent(f[0]), f = g.safeDecodeURIComponent((f[1] || "").replace(/\+/g, "%20"));
                b && h in c ? g.isArray(c[h]) ? c[h].push(f) : c[h] = [c[h], f] : c[h] = f
            }
        }
        return c
    };
    var D = [];
    h.Ya = h.Ya || {};
    Ya._metrika = Ya._metrika || {};
    Ya._metrika.counters = Ya._metrika.counters || {};
    Ya._metrika.hitParam = Ya._metrika.hitParam || {};
    Ya._metrika.counterNum = Ya._metrika.counterNum ||
        0;
    Ya._metrika.hitId = Ya._metrika.hitId || g.random();
    Ya._globalMetrikaHitId = g.random();
    var z = x(), wa = aa.getTimezone(), xa = aa.getTimestamp(), w = h.navigator, U = h.screen, P = "ver687".slice(3), rb = 64, da = p.isIE() ? 512 : 2048, sb = p.isIE() ? 512 : 2048, Wa = p.isIE() ? 100 : 400, ab = 100, ka = "noindex", bb = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|xls(x|m|b)?|xpi|g?zip)$/i,
        wb = +new Date, la, ma;
    Ya._metrika.v = P;
    h.Ya.Metrika = function (a, b, c, e) {
        var d = this;
        return v(function () {
            function r(u) {
                var q = !1;
                if (Ya._metrika.hitParam[D]) {
                    if (1 != c || Ya._metrika.counters[D])return !1;
                    q = !0
                }
                Ya._metrika.counters[D] = d;
                Ya._metrika.hitParam[D] = 1;
                d._webvisor = !e && (t && t.webvisor || !1);
                d._directCampaign = t && t.directCampaign;
                t && t.trackHash && M(!0);
                if (!e && !q) {
                    d.replacePhones();
                    var H = new Y({counterId: a}), n = H.read("visorc");
                    "b" != n && "w" != n && (n = "");
                    if (!H.isEnabled() || ga("opera mini"))n = "b";
                    la = +new Date;
                    var q =
                        new $a({
                            protocol: "https:",
                            counterType: c,
                            counterId: a,
                            trackHash: ca,
                            hitId: P,
                            webvisor: d._webvisor,
                            counter: d,
                            counterNum: Z
                        }), p = {
                        ut: Q,
                        he: t ? ~~t.httpError : 0,
                        ad: 1 == c && h.Ya && h.Ya.Direct,
                        pv: !0,
                        saveRef: !0
                    };
                    q.sendHit({
                        url: z.href,
                        title: l.getDocumentTitle(),
                        referrer: f.referrer,
                        userParams: b,
                        modes: p,
                        visitColor: n,
                        hasPrerender: u,
                        ts: xa,
                        tz: wa,
                        callback: function (c) {
                            fa.log("PageView. Counter " + a + ". URL: " + z.href + ". Referrer: " + f.referrer, ". Params: ", b);
                            ma || (ma = +new Date);
                            c = c || {};
                            var e = c.webvisor || {};
                            if (O) {
                                var q = +e.recp;
                                if (!isFinite(q) || 0 > q || 1 < q)n = "w";
                                n || (n = P % 1E4 / 1E4 < q ? "w" : "b");
                                H.create("visorc", n, 30);
                                "w" == n ? (O.start(), q = e.arch_type, (e = e.urls) && q && "none" != q && O.uploadPages(e, q)) : O.stop()
                            }
                            c = c.mp2;
                            H.erase("mp2_substs");
                            if (c) {
                                b:if ((e = c.conditions) && e.length)for (q = 0; q < e.length; q++) {
                                    var u;
                                    u = e[q];
                                    if ("ref" == u.type)u = ib(u); else if ("adv" == u.type) {
                                        var l = u, m = Ya._metrika.counter._directCampaign, p = l.ServiceNamePattern, r = l.RefererPattern;
                                        u = m ? l.direct_orders : l.direct_camp;
                                        for (var w = f.referrer, v = ea.parse(z.search), W = jb(z.search,
                                            z.hash), y = {}, t = ["source", "medium", "campaign", "term", "content"], x = 0; x < t.length; x++)v["utm_" + t[x]] && (y[t[x]] = v["utm_" + t[x]]);
                                        x = m ? "direct.yandex.ru" : W && W.service || y.source;
                                        t = !1;
                                        if (!t && p && p.length)for (var A = 0; A < p.length; A++)if ((new RegExp(p[A], "i")).test(x)) {
                                            t = !0;
                                            break
                                        }
                                        if (!t && !l.yandex_direct && r && r.length)for (p = 0; p < r.length; p++)if ((new RegExp(r[p], "i")).test(w)) {
                                            t = !0;
                                            break
                                        }
                                        !t && l.google_adwords && v.gclid && (t = !0);
                                        if (t && u && u.length && (t = !1, l = m || W && W.campaign || y && y.campaign))for (m = 0; m < u.length; m++)if (u[m] ==
                                            l) {
                                            t = !0;
                                            break
                                        }
                                        u = t
                                    } else u = !1;
                                    if (u) {
                                        e[q].track_id && H.create("mp2_track", e[q].track_id, 43200);
                                        break b
                                    }
                                }
                                e = H.read("mp2_track");
                                c = c.substs && c.substs[e];
                                e && c ? (H.create("mp2_substs", g.toJSON(c)), c = Ia(c), d.params("__ym", c ? "mp_trackid" : "mp_trackid_bad", e)) : Ja()
                            } else Ja();
                            k.on(h, "load", d.replacePhones, d);
                            d._inited = !0;
                            h.Ya._metrika.startSync || (h.Ya._metrika.startSync = !0, pb.sync())
                        }
                    })
                }
                A();
                t && (t.enableAll ? (w(!0), m(!0), C()) : (t.clickmap && m(t.clickmap), t.trackLinks && w(t.trackLinks), t.accurateTrackBounce && C(t.accurateTrackBounce)),
                (t.ecommerce || t.useDataLayer) && new Za({
                    counter: d,
                    prefsEcommerce: t.ecommerce
                }), t.triggerEvent && cb(function () {
                    F.dispatchCustomEvent("yacounter" + a + "inited")
                }, 0, "triggerEvent"));
                d._webvisor && (O = new kb("https:", a, c, P, d))
            }

            function w(a) {
                var b = {};
                switch (typeof a) {
                    case "string":
                        b.on = !0;
                        break;
                    case "object":
                        b.on = !0;
                        break;
                    case "boolean":
                        b.on = a;
                        break;
                    default:
                        return
                }
                d._trackLinks = b
            }

            function A() {
                w(!1);
                k.on(f, "click", function (a) {
                    d._trackLinks && d._trackLinks.on && I(a)
                })
            }

            function I(a) {
                var b = db(a);
                if (b) {
                    a = !1;
                    var c = "" +
                        b.href, d = c ? c.split(/\?/)[0] : "", e = function (a) {
                        var d = za(b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        T.sendClickLink({url: c, title: c == d ? "" : d, modes: a})
                    };
                    if (bb.test(d) || bb.test(c) || Ga(c, R) || Ga(d, R))a = !0;
                    var f = l.classNameExists(b, "ym-disable-tracklink"), d = l.classNameExists(b, "ym-external-link");
                    f || (f = {
                        ln: !0,
                        dl: a
                    }, d ? e(f) : (d = b.hostname || g.parseUrl(b.href).hostname || "", eb(x().hostname, d) ? a ? (f.ln = !1, e(f)) : (a = za(b.innerHTML.replace(/<\/?[^>]+>/gi, ""))) && a != c && aa.set("il", g.trim(a, ab)) : c && -1 != c.search(/^ *(data|javascript):/i) ||
                    (f.ut = ka, e(f))))
                }
            }

            function m(b) {
                "undefined" == typeof b && (b = !0);
                !0 === b && (b = {});
                d._clickmap && d._clickmap.destroy();
                b && (d._clickmap = new vb({
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    isTrackHash: b.isTrackHash,
                    protocol: "https:",
                    counterId: a,
                    counterType: c,
                    startTime: wb
                }))
            }

            function n(a, b) {
                function c() {
                    if (!y) {
                        x && g.clearTimeout(x);
                        var d;
                        d = t ? v : v + +new Date - w;
                        d = b - d;
                        0 > d && (d = 0);
                        x = g.setTimeout(function () {
                            y = !0;
                            m(!1);
                            a()
                        }, d, "trackUserTime")
                    }
                }

                function d() {
                    t = n = r = !0;
                    v += +new Date - w;
                    w = +new Date;
                    c()
                }

                function e() {
                    n ||
                    r || (v = 0);
                    w = +new Date;
                    n = r = !0;
                    t = !1;
                    c()
                }

                function l() {
                    r || (n = !0, t = !1, r = !0, c())
                }

                function m(a) {
                    for (var b = 0; b < z.length; b += 3)if (a)k.on(z[b], z[b + 1], z[b + 2]); else k.un(z[b], z[b + 1], z[b + 2])
                }

                var n = !1, r = !1, t = !0, v = 0, w = +new Date, x = null, y = !1;
                if (p.isIE())g.setTimeout(a, b, "trackUserTime"); else {
                    var z = [h, "blur", d, h, "focus", e, f, "click", l, f, "mousemove", l, f, "keydown", l, f, "scroll", l];
                    m(!0);
                    c()
                }
            }

            function C(b) {
                "number" != typeof b && (b = 15E3);
                if (!d._isAccurateTrackBounce) {
                    d._isAccurateTrackBounce = !0;
                    var c = new X({counterId: a}), e =
                        c.get("lastHit");
                    c.set("lastHit", +new Date);
                    ((c = c.get("lastHit")) && (!e || e < c - 18E5) || !fb(f.referrer, x().href) || .1 > Math.random()) && n(function () {
                        d.notBounce()
                    }, b)
                }
            }

            function J(a) {
                function b() {
                    var a = x().hash.split("#")[1];
                    if ("undefined" == typeof a)return !1;
                    var c = a.indexOf("?");
                    0 < c && (a = a.substring(0, c));
                    return a
                }

                var c = b();
                (function W() {
                    var d = b();
                    d !== c && (a(), c = d);
                    da = g.setTimeout(W, 200, "trackHash")
                })()
            }

            function M(a) {
                if (!1 === a)ca && ("onhashchange" in h ? k.un(h, "hashchange", N) : g.clearTimeout(da), ca = !1); else if (a =
                        N, !ca) {
                    if ("onhashchange" in h)k.on(h, "hashchange", a); else J(a);
                    ca = !0
                }
                T.setTrackHash(ca);
                d._trackHash = ca
            }

            function N() {
                V = ia = U;
                var a = {ut: Q, ad: 1 == c && h.Ya && h.Ya.Direct, wh: !0, saveRef: !0, pv: !0};
                T.sendAjaxHit({url: x().href, title: l.getDocumentTitle(), referrer: V, modes: a});
                U = x().href
            }

            function K(a, b, c) {
                a = E.parseValidate(a, b);
                b = [];
                a && (b.push(a), c = c || {}, g.isFunction(c.callback) && (b.push(c.callback), c.ctx && b.push(c.ctx)));
                b.length && d.params.apply(d, b)
            }

            var D, Q = "", U = ia = z.href, V = "", t;
            Ya._metrika.counter || (Ya._metrika.counter =
                d);
            "object" == typeof a && (t = a, e = a.defer, Q = a.ut, c = a.type, b = a.params, a = a.id);
            a = a || 0;
            /^\d+$/.test(a) || (a = 0);
            c = c || 0;
            D = a + ":" + c;
            if (Ya._metrika.counters[D])return Ya._metrika.counters[D];
            var P = Ya._metrika.hitId;
            Ya._metrika.counterNum++;
            var Z = Ya._metrika.counterNum;
            L.initCookie();
            L.retransmit();
            var T = new ja({protocol: "https:", counterType: c, counterId: a, hitId: P, counter: d, counterNum: Z}), O;
            d.replacePhones = v(function () {
                try {
                    var b = (new Y({counterId: a})).read("mp2_substs");
                    if (b) {
                        var c = (new Function("return " + b))();
                        c && Ia(c, !0)
                    }
                } catch (e) {
                }
                return d
            }, "counter.replacePhones");
            d.reachGoal = v(function (b, c, e, f) {
                2 <= arguments.length && "function" === typeof c && (f = e, e = c, c = ba);
                fa.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                T.sendGoal(b, {userParams: c, callback: e, ctx: f});
                return d
            }, "counter.reachGoal");
            d.trackLinks = v(function (a) {
                w(a);
                return d
            }, "counter.trackLinks");
            var aa = new X({counterId: a});
            d.hit = v(function (b, c, e, f, h, k) {
                b && (g.isObject(c) && (e = c.referer, f = c.params, h = c.callback, k = c.ctx, c = c.title), fa.log("PageView. Counter " +
                    a + ". URL: " + b + ". Referrer: " + e + ". Params: ", f), T.sendHit({
                    url: b,
                    title: c,
                    referrer: e,
                    userParams: f,
                    callback: h,
                    ctx: k
                }));
                return d
            }, "counter.hit");
            d.params = v(function (b) {
                var c = arguments.length, e = c, f, h, k = [].slice.call(arguments, 0);
                b && (1 < arguments.length && (g.isFunction(arguments[c - 1]) ? (f = arguments[c - 1], e = c - 1) : g.isFunction(arguments[c - 2]) && (f = arguments[c - 2], h = arguments[c - 1], e = c - 2), k = [].slice.call(k, 0, e), 1 < k.length && (k = [g.array2Props(k)])), fa.log("User params. Counter " + a + ". Params: ", k[0]), T.sendParams(k[0],
                    f, h));
                return d
            }, "counter.params");
            d.file = v(function (a, b) {
                a && (b = b || {}, T.sendFileUpload({
                    url: a,
                    title: b.title,
                    userParams: b.params,
                    callback: b.callback,
                    ctx: b.ctx
                }));
                return d
            }, "counter.file");
            d.extLink = v(function (a, b) {
                a && (b = b || {}, T.sendExtLink({
                    url: a,
                    title: b.title,
                    userParams: b.params,
                    callback: b.callback,
                    ctx: b.ctx
                }));
                return d
            }, "counter.extLink");
            d.notBounce = v(function (a) {
                var b = 0;
                a = a || {};
                la && ma && (b = ma - la);
                T.sendNotBounce(b, {callback: a.callback, ctx: a.ctx});
                return d
            }, "counter.notBounce");
            var R = [];
            d.addFileExtension =
                function (a) {
                    "string" == typeof a ? R.push(a) : R = R.concat(a);
                    return d
                };
            d.clickmap = function (a) {
                m(a);
                return d
            };
            d.accurateTrackBounce = function (a) {
                C(a);
                return d
            };
            var da = null, ca = !1;
            d.trackHash = function (a) {
                M(a);
                return d
            };
            g.arrayEvery = function (a, b, c) {
                for (var d = 0; d < a.length; d++)if (!b.call(c, a[d], d, a))return !1;
                return !0
            };
            var E = {
                requiredEcommerceFields: ["currency", "goods"], parseValidate: function (a, b) {
                    var c = this.validate(a, b);
                    if (!c.isValid)return console && console.log(c.message), !1;
                    c = {};
                    c[a] = {};
                    b.currency && (c.currencyCode =
                        b.currency);
                    b.goods && (c[a].products = b.goods);
                    for (var d in b)b.hasOwnProperty(d) && -1 === g.arrayIndexOf(this.requiredEcommerceFields, d) && (c[a].actionField || (c[a].actionField = {}), c[a].actionField[d] = b[d]);
                    return {__ym: {ecommerce: [c]}}
                }, validate: function (a, b) {
                    var c = !1, d = "";
                    if (g.isObject(b))switch (a) {
                        case "detail":
                        case "add":
                        case "remove":
                            g.isArray(b.goods) && b.goods.length ? (c = g.arrayEvery(b.goods, function (a) {
                                return g.isObject(a) && (g.isString(a.id) || g.isNumber(a.id) || g.isString(a.name) || g.isString(a.name))
                            })) ||
                            (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") : d = "Ecommerce data should contain 'goods' non-empty array";
                            break;
                        case "purchase":
                            g.isNumber(b.id) || g.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
                    } else d = "Ecommerce data should be an object";
                    return {isValid: c, message: d}
                }
            };
            d.ecommerceDetail = v(function (a, b) {
                K("detail", a, b);
                return d
            }, "ecommerce.detail");
            d.ecommerceAdd = v(function (a, b) {
                K("add", a, b);
                return d
            }, "ecommerce.add");
            d.ecommerceRemove =
                v(function (a, b) {
                    K("remove", a, b);
                    return d
                }, "ecommerce.remove");
            d.ecommercePurchase = v(function (a, b) {
                K("purchase", a, b);
                return d
            }, "ecommerce.purchase");
            d.userParams = v(function (a, b, c) {
                g.isObject(a) && d.params({__ymu: a}, b || function () {
                    }, c);
                return d
            }, "uparams");
            d.id = d.setUserID = v(function (a, b, c) {
                (g.isString(a) || g.isNumber(a)) && d.params({__ym: {user_id: a}}, b || function () {
                    }, c);
                return d
            }, "id");
            var G = new Y;
            d.getClientID = v(function () {
                return G.read("uid")
            }, "guid");
            d.enableAll = function () {
                w(!0);
                m(!0);
                C();
                return d
            };
            d.uploadPage = function () {
            };
            d._performanceTiming = Ha;
            if (a)if ("prerender" == f.webkitVisibilityState) {
                T.sendPrerenderHit({url: z.href, title: l.getDocumentTitle(), referrer: f.referrer});
                var oa = function () {
                    "prerender" != f.webkitVisibilityState && (k.un(f, "webkitvisibilitychange", oa), r(!0))
                };
                k.on(f, "webkitvisibilitychange", oa)
            } else r(!1)
        }, "init")()
    };
    if (h.performance && "function" == typeof performance.getEntries) {
        C = {
            2343947156: 1,
            1996539654: 1,
            2065498185: 1,
            823651274: 1,
            12282461: 1,
            1555719328: 1,
            1417229093: 1,
            138396985: 1
        };
        N = performance.getEntries();
        Z = {};
        for (r = 0; r < N.length; r++) {
            var J = N[r], R = J.name.replace(/^https?:\/\//, "").split("?")[0], xb = g.fnv32a(R);
            C[xb] && !Z[R] && 0 < J.duration && (Z[R] = {
                dns: Math.round(J.domainLookupEnd - J.domainLookupStart),
                tcp: Math.round(J.connectEnd - J.connectStart),
                duration: Math.round(J.duration),
                response: Math.round(J.responseEnd - J.requestStart),
                pages: z.href
            })
        }
        (new V({sampling: .001})).logParams({timings8: Z})
    }
    h.Ya._metrika.remoteCtrlInited || (h.Ya._metrika.remoteCtrlInited = !0, new Xa);
    h.Ya.Metrika.counters =
        function () {
            var a = [];
            g.forEachKey(h.Ya._metrika.counters, function (b, c) {
                var e = b.split(":");
                a.push({
                    id: +e[0],
                    type: +e[1],
                    accurateTrackBounce: c._isAccurateTrackBounce,
                    clickmap: c._clickmap && c._clickmap._start,
                    oldCode: !!h.ya_cid,
                    trackHash: !!c._trackHash,
                    trackLinks: c._trackLinks && c._trackLinks.on,
                    webvisor: !!c._webvisor
                })
            });
            return a
        };
    h.ya_cid && new Ya.Metrika(h.ya_cid, h.ya_params, h.ya_class);
    h.ya_cid && !h.ya_hit && (h.ya_hit = function (a, b) {
        Ya._metrika.counter && Ya._metrika.counter.reachGoal(a, b)
    });
    r = h.yandex_metrika_callback;
    C = h.yandex_metrika_callbacks;
    "function" == typeof r && r();
    if ("object" == typeof C)for (r = 0; r < C.length; r++)if (N = C[r])C[r] = null, N();
    Ka("yandex_metrika_callback");
    Ka("yandex_metrika_callbacks");
    C = ["link", "click", "scroll", "res"];
    for (r = 0; r < C.length; r++)if (N = C[r] + "map", -1 != z.href.search("ym_playback=" + N)) {
        La("https://old.metrika.yandex.ru/js/" + N + "/_loader.js");
        break
    }
    h.Ya.Metrika.informer = function (a) {
        var b = !!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        b || La("https://informer.yandex.ru/metrika/informer.js")
    };
    (function () {
        var a =
            function () {
                var a = f.getElementsByTagName("body")[0], b = f.createElement("iframe");
                b.src = "http://awaps.yandex.ru/0/2153/0.htm?ad=165746&pl=93829&rnd=" + g.random();
                b.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;visibility:hidden");
                a.appendChild(b);
                g.setTimeout(function () {
                    b.parentNode && b.parentNode.removeChild(b)
                }, 1E4, "ad")
            }, b = function () {
            h.removeEventListener("load", b, !1);
            a()
        }, c = h.performance;
        g.random(200) || Ya._metrika.isAd || (Ya._metrika.isAd = !0, "http:" == z.protocol &&
        "object" == typeof c && h.addEventListener && (c.timing && c.timing.loadEventStart ? a() : h.addEventListener("load", b, !1)))
    })()
})(this, this.document);
