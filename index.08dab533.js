/* eslint-disable */ /*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function() {
    "use strict";
    const t1 = (t)=>{
        do t += Math.floor(1000000 * Math.random());
        while (document.getElementById(t))
        return t;
    }, e1 = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), e = i && "#" !== i ? i.trim() : null;
        }
        return e;
    }, i1 = (t)=>{
        const i = e1(t);
        return i && document.querySelector(i) ? i : null;
    }, s1 = (t)=>{
        const i = e1(t);
        return i ? document.querySelector(i) : null;
    }, n1 = (t)=>{
        if (!t) return 0;
        let { transitionDuration: e , transitionDelay: i  } = window.getComputedStyle(t);
        const s = Number.parseFloat(e), n = Number.parseFloat(i);
        return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1000 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }, o1 = (t)=>{
        t.dispatchEvent(new Event("transitionend"));
    }, r1 = (t)=>(t[0] || t).nodeType
    , a1 = (t, e2)=>{
        let i = !1;
        const s = e2 + 5;
        t.addEventListener("transitionend", function e() {
            i = !0, t.removeEventListener("transitionend", e);
        }), setTimeout(()=>{
            i || o1(t);
        }, s);
    }, l1 = (t, e, i)=>{
        Object.keys(i).forEach((s)=>{
            const n = i[s], o = e[s], a = o && r1(o) ? "element" : null == (l = o) ? "" + l : ({
            }).toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
            var l;
            if (!new RegExp(n).test(a)) throw new TypeError(t.toUpperCase() + ": " + `Option "${s}" provided type "${a}" ` + `but expected type "${n}".`);
        });
    }, c1 = (t)=>{
        if (!t) return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
            const e = getComputedStyle(t), i = getComputedStyle(t.parentNode);
            return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility;
        }
        return !1;
    }, d1 = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
    , h1 = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? h1(t.parentNode) : null;
    }, f1 = ()=>function() {
        }
    , u1 = (t)=>t.offsetHeight
    , p1 = ()=>{
        const { jQuery: t  } = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    }, g1 = ()=>"rtl" === document.documentElement.dir
    , m1 = (t, e)=>{
        var i2;
        i2 = ()=>{
            const i = p1();
            if (i) {
                const s = i.fn[t];
                i.fn[t] = e.jQueryInterface, i.fn[t].Constructor = e, i.fn[t].noConflict = ()=>(i.fn[t] = s, e.jQueryInterface)
                ;
            }
        }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i2) : i2();
    }, _1 = new Map;
    var b1 = {
        set (t, e, i) {
            _1.has(t) || _1.set(t, new Map);
            const s = _1.get(t);
            s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
        },
        get: (t, e)=>_1.has(t) && _1.get(t).get(e) || null
        ,
        remove (t, e) {
            if (!_1.has(t)) return;
            const i = _1.get(t);
            i.delete(e), 0 === i.size && _1.delete(t);
        }
    };
    const v1 = /[^.]*(?=\..*)\.|.*/, y1 = /\..*/, w1 = /::\d+$/, E1 = {
    };
    let T1 = 1;
    const A1 = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, L1 = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function O1(t, e) {
        return e && `${e}::${T1++}` || t.uidEvent || T1++;
    }
    function k1(t) {
        const e = O1(t);
        return t.uidEvent = e, E1[e] = E1[e] || {
        }, E1[e];
    }
    function D1(t, e, i = null) {
        const s = Object.keys(t);
        for(let n = 0, o = s.length; n < o; n++){
            const o = t[s[n]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function x1(t, e, i) {
        const s = "string" == typeof e, n = s ? i : e;
        let o = t.replace(y1, "");
        const r = A1[o];
        return r && (o = r), L1.has(o) || (o = t), [
            s,
            n,
            o
        ];
    }
    function C1(t2, e3, i3, s2, n2) {
        if ("string" != typeof e3 || !t2) return;
        i3 || (i3 = s2, s2 = null);
        const [o2, r2, a] = x1(e3, i3, s2), l = k1(t2), c = l[a] || (l[a] = {
        }), d = D1(c, r2, o2 ? i3 : null);
        if (d) return void (d.oneOff = d.oneOff && n2);
        const h = O1(r2, e3.replace(v1, "")), f = o2 ? function(t, e, i) {
            return function s(n) {
                const o = t.querySelectorAll(e);
                for(let { target: e4  } = n; e4 && e4 !== this; e4 = e4.parentNode)for(let r = o.length; r--;)if (o[r] === e4) return n.delegateTarget = e4, s.oneOff && N1.off(t, n.type, i), i.apply(e4, [
                    n
                ]);
                return null;
            };
        }(t2, i3, s2) : function(t, e) {
            return function i(s) {
                return s.delegateTarget = t, i.oneOff && N1.off(t, s.type, e), e.apply(t, [
                    s
                ]);
            };
        }(t2, i3);
        f.delegationSelector = o2 ? i3 : null, f.originalHandler = r2, f.oneOff = n2, f.uidEvent = h, c[h] = f, t2.addEventListener(a, f, o2);
    }
    function S1(t, e, i, s, n) {
        const o = D1(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
    }
    const N1 = {
        on (t, e, i, s) {
            C1(t, e, i, s, !1);
        },
        one (t, e, i, s) {
            C1(t, e, i, s, !0);
        },
        off (t3, e5, i4, s3) {
            if ("string" != typeof e5 || !t3) return;
            const [n3, o3, r] = x1(e5, i4, s3), a = r !== e5, l = k1(t3), c = e5.startsWith(".");
            if (void 0 !== o3) {
                if (!l || !l[r]) return;
                return void S1(t3, l, r, o3, n3 ? i4 : null);
            }
            c && Object.keys(l).forEach((i5)=>{
                !function(t, e, i, s4) {
                    const n = e[i] || {
                    };
                    Object.keys(n).forEach((o)=>{
                        if (o.includes(s4)) {
                            const s = n[o];
                            S1(t, e, i, s.originalHandler, s.delegationSelector);
                        }
                    });
                }(t3, l, i5, e5.slice(1));
            });
            const d = l[r] || {
            };
            Object.keys(d).forEach((i)=>{
                const s = i.replace(w1, "");
                if (!a || e5.includes(s)) {
                    const e = d[i];
                    S1(t3, l, r, e.originalHandler, e.delegationSelector);
                }
            });
        },
        trigger (t4, e, i) {
            if ("string" != typeof e || !t4) return null;
            const s = p1(), n = e.replace(y1, ""), o = e !== n, r = L1.has(n);
            let a, l = !0, c = !0, d = !1, h = null;
            return o && s && (a = s.Event(e, i), s(t4).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(n, l, !0)) : h = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== i && Object.keys(i).forEach((t)=>{
                Object.defineProperty(h, t, {
                    get: ()=>i[t]
                });
            }), d && h.preventDefault(), c && t4.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h;
        }
    };
    class j1 {
        constructor(t14){
            (t14 = "string" == typeof t14 ? document.querySelector(t14) : t14) && (this._element = t14, b1.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            b1.remove(this._element, this.constructor.DATA_KEY), this._element = null;
        }
        static getInstance(t5) {
            return b1.get(t5, this.DATA_KEY);
        }
        static get VERSION() {
            return "5.0.0-beta3";
        }
    }
    class P1 extends j1 {
        static get DATA_KEY() {
            return "bs.alert";
        }
        close(t6) {
            const e = t6 ? this._getRootElement(t6) : this._element, i = this._triggerCloseEvent(e);
            null === i || i.defaultPrevented || this._removeElement(e);
        }
        _getRootElement(t7) {
            return s1(t7) || t7.closest(".alert");
        }
        _triggerCloseEvent(t8) {
            return N1.trigger(t8, "close.bs.alert");
        }
        _removeElement(t9) {
            if (t9.classList.remove("show"), !t9.classList.contains("fade")) return void this._destroyElement(t9);
            const e = n1(t9);
            N1.one(t9, "transitionend", ()=>this._destroyElement(t9)
            ), a1(t9, e);
        }
        _destroyElement(t10) {
            t10.parentNode && t10.parentNode.removeChild(t10), N1.trigger(t10, "closed.bs.alert");
        }
        static jQueryInterface(t11) {
            return this.each(function() {
                let e = b1.get(this, "bs.alert");
                e || (e = new P1(this)), "close" === t11 && e[t11](this);
            });
        }
        static handleDismiss(t12) {
            return function(e) {
                e && e.preventDefault(), t12.close(this);
            };
        }
    }
    N1.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', P1.handleDismiss(new P1)), m1("alert", P1);
    class I1 extends j1 {
        static get DATA_KEY() {
            return "bs.button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t13) {
            return this.each(function() {
                let e = b1.get(this, "bs.button");
                e || (e = new I1(this)), "toggle" === t13 && e[t13]();
            });
        }
    }
    function M1(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
    }
    function R1(t15) {
        return t15.replace(/[A-Z]/g, (t)=>"-" + t.toLowerCase()
        );
    }
    N1.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (t)=>{
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        let i = b1.get(e, "bs.button");
        i || (i = new I1(e)), i.toggle();
    }), m1("button", I1);
    const B1 = {
        setDataAttribute (t, e, i) {
            t.setAttribute("data-bs-" + R1(e), i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute("data-bs-" + R1(e));
        },
        getDataAttributes (t16) {
            if (!t16) return {
            };
            const e = {
            };
            return Object.keys(t16.dataset).filter((t)=>t.startsWith("bs")
            ).forEach((i)=>{
                let s = i.replace(/^bs/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = M1(t16.dataset[i]);
            }), e;
        },
        getDataAttribute: (t, e)=>M1(t.getAttribute("data-bs-" + R1(e)))
        ,
        offset (t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            };
        },
        position: (t)=>({
                top: t.offsetTop,
                left: t.offsetLeft
            })
    }, H1 = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t))
        ,
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t)
        ,
        children: (t17, e)=>[].concat(...t17.children).filter((t)=>t.matches(e)
            )
        ,
        parents (t, e) {
            const i = [];
            let s = t.parentNode;
            for(; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;)s.matches(e) && i.push(s), s = s.parentNode;
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        }
    }, W1 = {
        interval: 5000,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, U1 = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, $1 = "next", F1 = "prev", z1 = "left", K1 = "right";
    class Y1 extends j1 {
        constructor(t22, e7){
            super(t22), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e7), this._indicatorsElement = H1.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
        }
        static get Default() {
            return W1;
        }
        static get DATA_KEY() {
            return "bs.carousel";
        }
        next() {
            this._isSliding || this._slide($1);
        }
        nextWhenVisible() {
            !document.hidden && c1(this._element) && this.next();
        }
        prev() {
            this._isSliding || this._slide(F1);
        }
        pause(t18) {
            t18 || (this._isPaused = !0), H1.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o1(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }
        cycle(t19) {
            t19 || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }
        to(t20) {
            this._activeElement = H1.findOne(".active.carousel-item", this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t20 > this._items.length - 1 || t20 < 0) return;
            if (this._isSliding) return void N1.one(this._element, "slid.bs.carousel", ()=>this.to(t20)
            );
            if (e === t20) return this.pause(), void this.cycle();
            const i = t20 > e ? $1 : F1;
            this._slide(i, this._items[t20]);
        }
        dispose() {
            N1.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, super.dispose();
        }
        _getConfig(t21) {
            return t21 = {
                ...W1,
                ...t21
            }, l1("carousel", t21, U1), t21;
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? K1 : z1);
        }
        _addEventListeners() {
            this._config.keyboard && N1.on(this._element, "keydown.bs.carousel", (t)=>this._keydown(t)
            ), "hover" === this._config.pause && (N1.on(this._element, "mouseenter.bs.carousel", (t)=>this.pause(t)
            ), N1.on(this._element, "mouseleave.bs.carousel", (t)=>this.cycle(t)
            )), this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t23 = (t)=>{
                !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX;
            }, e6 = (t)=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
            }, i = (t24)=>{
                !this._pointerEvent || "pen" !== t24.pointerType && "touch" !== t24.pointerType || (this.touchDeltaX = t24.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t)=>this.cycle(t)
                , 500 + this._config.interval));
            };
            H1.find(".carousel-item img", this._element).forEach((t25)=>{
                N1.on(t25, "dragstart.bs.carousel", (t)=>t.preventDefault()
                );
            }), this._pointerEvent ? (N1.on(this._element, "pointerdown.bs.carousel", (e)=>t23(e)
            ), N1.on(this._element, "pointerup.bs.carousel", (t)=>i(t)
            ), this._element.classList.add("pointer-event")) : (N1.on(this._element, "touchstart.bs.carousel", (e)=>t23(e)
            ), N1.on(this._element, "touchmove.bs.carousel", (t)=>e6(t)
            ), N1.on(this._element, "touchend.bs.carousel", (t)=>i(t)
            ));
        }
        _keydown(t36) {
            /input|textarea/i.test(t36.target.tagName) || ("ArrowLeft" === t36.key ? (t36.preventDefault(), this._slide(z1)) : "ArrowRight" === t36.key && (t36.preventDefault(), this._slide(K1)));
        }
        _getItemIndex(t26) {
            return this._items = t26 && t26.parentNode ? H1.find(".carousel-item", t26.parentNode) : [], this._items.indexOf(t26);
        }
        _getItemByOrder(t27, e12) {
            const i = t27 === $1, s = t27 === F1, n = this._getItemIndex(e12), o = this._items.length - 1;
            if ((s && 0 === n || i && n === o) && !this._config.wrap) return e12;
            const r = (n + (s ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r];
        }
        _triggerSlideEvent(t28, e8) {
            const i = this._getItemIndex(t28), s = this._getItemIndex(H1.findOne(".active.carousel-item", this._element));
            return N1.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t28,
                direction: e8,
                from: s,
                to: i
            });
        }
        _setActiveIndicatorElement(t29) {
            if (this._indicatorsElement) {
                const e = H1.findOne(".active", this._indicatorsElement);
                e.classList.remove("active"), e.removeAttribute("aria-current");
                const i = H1.find("[data-bs-target]", this._indicatorsElement);
                for(let e9 = 0; e9 < i.length; e9++)if (Number.parseInt(i[e9].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t29)) {
                    i[e9].classList.add("active"), i[e9].setAttribute("aria-current", "true");
                    break;
                }
            }
        }
        _updateInterval() {
            const t = this._activeElement || H1.findOne(".active.carousel-item", this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(t30, e10) {
            const i = this._directionToOrder(t30), s = H1.findOne(".active.carousel-item", this._element), o = this._getItemIndex(s), r = e10 || this._getItemByOrder(i, s), l = this._getItemIndex(r), c = Boolean(this._interval), d = i === $1, h = d ? "carousel-item-start" : "carousel-item-end", f = d ? "carousel-item-next" : "carousel-item-prev", p = this._orderToDirection(i);
            if (r && r.classList.contains("active")) this._isSliding = !1;
            else if (!this._triggerSlideEvent(r, p).defaultPrevented && s && r) {
                if (this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, this._element.classList.contains("slide")) {
                    r.classList.add(f), u1(r), s.classList.add(h), r.classList.add(h);
                    const t = n1(s);
                    N1.one(s, "transitionend", ()=>{
                        r.classList.remove(h, f), r.classList.add("active"), s.classList.remove("active", f, h), this._isSliding = !1, setTimeout(()=>{
                            N1.trigger(this._element, "slid.bs.carousel", {
                                relatedTarget: r,
                                direction: p,
                                from: o,
                                to: l
                            });
                        }, 0);
                    }), a1(s, t);
                } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, N1.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r,
                    direction: p,
                    from: o,
                    to: l
                });
                c && this.cycle();
            }
        }
        _directionToOrder(t31) {
            return [
                K1,
                z1
            ].includes(t31) ? g1() ? t31 === K1 ? F1 : $1 : t31 === K1 ? $1 : F1 : t31;
        }
        _orderToDirection(t32) {
            return [
                $1,
                F1
            ].includes(t32) ? g1() ? t32 === $1 ? z1 : K1 : t32 === $1 ? K1 : z1 : t32;
        }
        static carouselInterface(t33, e11) {
            let i = b1.get(t33, "bs.carousel"), s = {
                ...W1,
                ...B1.getDataAttributes(t33)
            };
            "object" == typeof e11 && (s = {
                ...s,
                ...e11
            });
            const n = "string" == typeof e11 ? e11 : s.slide;
            if (i || (i = new Y1(t33, s)), "number" == typeof e11) i.to(e11);
            else if ("string" == typeof n) {
                if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
                i[n]();
            } else s.interval && s.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t34) {
            return this.each(function() {
                Y1.carouselInterface(this, t34);
            });
        }
        static dataApiClickHandler(t35) {
            const e = s1(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                ...B1.getDataAttributes(e),
                ...B1.getDataAttributes(this)
            }, n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1), Y1.carouselInterface(e, i), n && b1.get(e, "bs.carousel").to(n), t35.preventDefault();
        }
    }
    N1.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Y1.dataApiClickHandler), N1.on(window, "load.bs.carousel.data-api", ()=>{
        const t = H1.find('[data-bs-ride="carousel"]');
        for(let e = 0, i = t.length; e < i; e++)Y1.carouselInterface(t[e], b1.get(t[e], "bs.carousel"));
    }), m1("carousel", Y1);
    const q1 = {
        toggle: !0,
        parent: ""
    }, V1 = {
        toggle: "boolean",
        parent: "(string|element)"
    };
    class X1 extends j1 {
        constructor(t38, e17){
            super(t38), this._isTransitioning = !1, this._config = this._getConfig(e17), this._triggerArray = H1.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
            const s = H1.find('[data-bs-toggle="collapse"]');
            for(let t37 = 0, e13 = s.length; t37 < e13; t37++){
                const e13 = s[t37], n = i1(e13), o = H1.find(n).filter((t)=>t === this._element
                );
                null !== n && o.length && (this._selector = n, this._triggerArray.push(e13));
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
        }
        static get Default() {
            return q1;
        }
        static get DATA_KEY() {
            return "bs.collapse";
        }
        toggle() {
            this._element.classList.contains("show") ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains("show")) return;
            let t39, e;
            this._parent && (t39 = H1.find(".show, .collapsing", this._parent).filter((t)=>"string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")
            ), 0 === t39.length && (t39 = null));
            const i = H1.findOne(this._selector);
            if (t39) {
                const s = t39.find((t)=>i !== t
                );
                if (e = s ? b1.get(s, "bs.collapse") : null, e && e._isTransitioning) return;
            }
            if (N1.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            t39 && t39.forEach((t)=>{
                i !== t && X1.collapseInterface(t, "hide"), e || b1.set(t, "bs.collapse", null);
            });
            const s = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((t)=>{
                t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
            }), this.setTransitioning(!0);
            const o = "scroll" + (s[0].toUpperCase() + s.slice(1)), r = n1(this._element);
            N1.one(this._element, "transitionend", ()=>{
                this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[s] = "", this.setTransitioning(!1), N1.trigger(this._element, "shown.bs.collapse");
            }), a1(this._element, r), this._element.style[s] = this._element[o] + "px";
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains("show")) return;
            if (N1.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", u1(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const e = this._triggerArray.length;
            if (e > 0) for(let t40 = 0; t40 < e; t40++){
                const e = this._triggerArray[t40], i = s1(e);
                i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
            }
            this.setTransitioning(!0), this._element.style[t] = "";
            const i = n1(this._element);
            N1.one(this._element, "transitionend", ()=>{
                this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), N1.trigger(this._element, "hidden.bs.collapse");
            }), a1(this._element, i);
        }
        setTransitioning(t43) {
            this._isTransitioning = t43;
        }
        dispose() {
            super.dispose(), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
        }
        _getConfig(t41) {
            return (t41 = {
                ...q1,
                ...t41
            }).toggle = Boolean(t41.toggle), l1("collapse", t41, V1), t41;
        }
        _getDimension() {
            return this._element.classList.contains("width") ? "width" : "height";
        }
        _getParent() {
            let { parent: t42  } = this._config;
            r1(t42) ? void 0 === t42.jquery && void 0 === t42[0] || (t42 = t42[0]) : t42 = H1.findOne(t42);
            const e14 = `[data-bs-toggle="collapse"][data-bs-parent="${t42}"]`;
            return H1.find(e14, t42).forEach((t)=>{
                const e = s1(t);
                this._addAriaAndCollapsedClass(e, [
                    t
                ]);
            }), t42;
        }
        _addAriaAndCollapsedClass(t44, e15) {
            if (!t44 || !e15.length) return;
            const i = t44.classList.contains("show");
            e15.forEach((t)=>{
                i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
            });
        }
        static collapseInterface(t46, e16) {
            let i = b1.get(t46, "bs.collapse");
            const s = {
                ...q1,
                ...B1.getDataAttributes(t46),
                ..."object" == typeof e16 && e16 ? e16 : {
                }
            };
            if (!i && s.toggle && "string" == typeof e16 && /show|hide/.test(e16) && (s.toggle = !1), i || (i = new X1(t46, s)), "string" == typeof e16) {
                if (void 0 === i[e16]) throw new TypeError(`No method named "${e16}"`);
                i[e16]();
            }
        }
        static jQueryInterface(t45) {
            return this.each(function() {
                X1.collapseInterface(this, t45);
            });
        }
    }
    N1.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function(t47) {
        ("A" === t47.target.tagName || t47.delegateTarget && "A" === t47.delegateTarget.tagName) && t47.preventDefault();
        const e = B1.getDataAttributes(this), s5 = i1(this);
        H1.find(s5).forEach((t)=>{
            const i = b1.get(t, "bs.collapse");
            let s;
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), s = "toggle") : s = e, X1.collapseInterface(t, s);
        });
    }), m1("collapse", X1);
    var Q = "top", G = "bottom", Z = "right", J = "left", tt = [
        Q,
        G,
        Z,
        J
    ], et = tt.reduce(function(t, e) {
        return t.concat([
            e + "-start",
            e + "-end"
        ]);
    }, []), it1 = [].concat(tt, [
        "auto"
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-start",
            e + "-end"
        ]);
    }, []), st1 = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite"
    ];
    function nt1(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function ot1(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function rt(t) {
        return t instanceof ot1(t).Element || t instanceof Element;
    }
    function at(t) {
        return t instanceof ot1(t).HTMLElement || t instanceof HTMLElement;
    }
    function lt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ot1(t).ShadowRoot || t instanceof ShadowRoot);
    }
    var ct = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t48) {
            var e18 = t48.state;
            Object.keys(e18.elements).forEach(function(t49) {
                var i = e18.styles[t49] || {
                }, s = e18.attributes[t49] || {
                }, n = e18.elements[t49];
                at(n) && nt1(n) && (Object.assign(n.style, i), Object.keys(s).forEach(function(t) {
                    var e = s[t];
                    !1 === e ? n.removeAttribute(t) : n.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t50) {
            var e = t50.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {
                }
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t51) {
                    var s = e.elements[t51], n = e.attributes[t51] || {
                    }, o = Object.keys(e.styles.hasOwnProperty(t51) ? e.styles[t51] : i[t51]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {
                    });
                    at(s) && nt1(s) && (Object.assign(s.style, o), Object.keys(n).forEach(function(t) {
                        s.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function dt(t) {
        return t.split("-")[0];
    }
    function ht(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        };
    }
    function ft(t) {
        var e = ht(t), i = t.offsetWidth, s = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: s
        };
    }
    function ut(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && lt(i)) {
            var s = e;
            do {
                if (s && t.isSameNode(s)) return !0;
                s = s.parentNode || s.host;
            }while (s)
        }
        return !1;
    }
    function pt(t) {
        return ot1(t).getComputedStyle(t);
    }
    function gt(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(nt1(t)) >= 0;
    }
    function mt(t) {
        return ((rt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function _t(t) {
        return "html" === nt1(t) ? t : t.assignedSlot || t.parentNode || (lt(t) ? t.host : null) || mt(t);
    }
    function bt(t) {
        return at(t) && "fixed" !== pt(t).position ? t.offsetParent : null;
    }
    function vt(t52) {
        for(var e19 = ot1(t52), i6 = bt(t52); i6 && gt(i6) && "static" === pt(i6).position;)i6 = bt(i6);
        return i6 && ("html" === nt1(i6) || "body" === nt1(i6) && "static" === pt(i6).position) ? e19 : i6 || (function(t) {
            for(var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), i = _t(t); at(i) && [
                "html",
                "body"
            ].indexOf(nt1(i)) < 0;){
                var s = pt(i);
                if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(s.willChange) || e && "filter" === s.willChange || e && s.filter && "none" !== s.filter) return i;
                i = i.parentNode;
            }
            return null;
        })(t52) || e19;
    }
    function yt(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    var wt = Math.max, Et = Math.min, Tt = Math.round;
    function At(t, e, i) {
        return wt(t, Et(e, i));
    }
    function Lt(t) {
        return Object.assign({
        }, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function Ot(t, e20) {
        return e20.reduce(function(e, i) {
            return e[i] = t, e;
        }, {
        });
    }
    var kt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t53) {
            var e21, i = t53.state, s = t53.name, n = t53.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = dt(i.placement), l = yt(a), c = [
                J,
                Z
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var d = function(t, e) {
                    return Lt("number" != typeof (t = "function" == typeof t ? t(Object.assign({
                    }, e.rects, {
                        placement: e.placement
                    })) : t) ? t : Ot(t, tt));
                }(n.padding, i), h = ft(o), f = "y" === l ? Q : J, u = "y" === l ? G : Z, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], g = r[l] - i.rects.reference[l], m = vt(o), _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = p / 2 - g / 2, v = d[f], y = _ - h[c] - d[u], w = _ / 2 - h[c] / 2 + b, E = At(v, w, y), T = l;
                i.modifiersData[s] = ((e21 = {
                })[T] = E, e21.centerOffset = E - w, e21);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, s = void 0 === i ? "[data-popper-arrow]" : i;
            null != s && ("string" != typeof s || (s = e.elements.popper.querySelector(s))) && ut(e.elements.popper, s) && (e.elements.arrow = s);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    }, Dt = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function xt(t54) {
        var e22, i7 = t54.popper, s6 = t54.popperRect, n = t54.placement, o = t54.offsets, r = t54.position, a = t54.gpuAcceleration, l = t54.adaptive, c = t54.roundOffsets, d = !0 === c ? function(t) {
            var e = t.x, i = t.y, s = window.devicePixelRatio || 1;
            return {
                x: Tt(Tt(e * s) / s) || 0,
                y: Tt(Tt(i * s) / s) || 0
            };
        }(o) : "function" == typeof c ? c(o) : o, h = d.x, f = void 0 === h ? 0 : h, u = d.y, p = void 0 === u ? 0 : u, g = o.hasOwnProperty("x"), m = o.hasOwnProperty("y"), _ = J, b = Q, v = window;
        if (l) {
            var y = vt(i7), w = "clientHeight", E = "clientWidth";
            y === ot1(i7) && "static" !== pt(y = mt(i7)).position && (w = "scrollHeight", E = "scrollWidth"), n === Q && (b = G, p -= y[w] - s6.height, p *= a ? 1 : -1), n === J && (_ = Z, f -= y[E] - s6.width, f *= a ? 1 : -1);
        }
        var T, A = Object.assign({
            position: r
        }, l && Dt);
        return a ? Object.assign({
        }, A, ((T = {
        })[b] = m ? "0" : "", T[_] = g ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + f + "px, " + p + "px)" : "translate3d(" + f + "px, " + p + "px, 0)", T)) : Object.assign({
        }, A, ((e22 = {
        })[b] = m ? p + "px" : "", e22[_] = g ? f + "px" : "", e22.transform = "", e22));
    }
    var Ct = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, s = i.gpuAcceleration, n = void 0 === s || s, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: dt(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: n
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({
            }, e.styles.popper, xt(Object.assign({
            }, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({
            }, e.styles.arrow, xt(Object.assign({
            }, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({
            }, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {
        }
    }, St = {
        passive: !0
    }, Nt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {
        },
        effect: function(t55) {
            var e = t55.state, i = t55.instance, s = t55.options, n = s.scroll, o = void 0 === n || n, r = s.resize, a = void 0 === r || r, l = ot1(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, St);
            }), a && l.addEventListener("resize", i.update, St), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, St);
                }), a && l.removeEventListener("resize", i.update, St);
            };
        },
        data: {
        }
    }, jt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Pt(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return jt[t];
        });
    }
    var It = {
        start: "end",
        end: "start"
    };
    function Mt(t) {
        return t.replace(/start|end/g, function(t) {
            return It[t];
        });
    }
    function Rt(t) {
        var e = ot1(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function Bt(t) {
        return ht(mt(t)).left + Rt(t).scrollLeft;
    }
    function Ht(t) {
        var e = pt(t), i = e.overflow, s = e.overflowX, n = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + n + s);
    }
    function Wt(t56, e23) {
        var i;
        void 0 === e23 && (e23 = []);
        var s = function t(e) {
            return [
                "html",
                "body",
                "#document"
            ].indexOf(nt1(e)) >= 0 ? e.ownerDocument.body : at(e) && Ht(e) ? e : t(_t(e));
        }(t56), n = s === (null == (i = t56.ownerDocument) ? void 0 : i.body), o = ot1(s), r = n ? [
            o
        ].concat(o.visualViewport || [], Ht(s) ? s : []) : s, a = e23.concat(r);
        return n ? a : a.concat(Wt(_t(r)));
    }
    function Ut(t) {
        return Object.assign({
        }, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function $t(t57, e24) {
        return "viewport" === e24 ? Ut(function(t) {
            var e = ot1(t), i = mt(t), s = e.visualViewport, n = i.clientWidth, o = i.clientHeight, r = 0, a = 0;
            return s && (n = s.width, o = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = s.offsetLeft, a = s.offsetTop)), {
                width: n,
                height: o,
                x: r + Bt(t),
                y: a
            };
        }(t57)) : at(e24) ? (function(t) {
            var e = ht(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
        })(e24) : Ut(function(t) {
            var e, i = mt(t), s = Rt(t), n = null == (e = t.ownerDocument) ? void 0 : e.body, o = wt(i.scrollWidth, i.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = wt(i.scrollHeight, i.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -s.scrollLeft + Bt(t), l = -s.scrollTop;
            return "rtl" === pt(n || i).direction && (a += wt(i.clientWidth, n ? n.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }(mt(t57)));
    }
    function Ft(t) {
        return t.split("-")[1];
    }
    function zt(t) {
        var e, i = t.reference, s = t.element, n = t.placement, o = n ? dt(n) : null, r = n ? Ft(n) : null, a = i.x + i.width / 2 - s.width / 2, l = i.y + i.height / 2 - s.height / 2;
        switch(o){
            case Q:
                e = {
                    x: a,
                    y: i.y - s.height
                };
                break;
            case G:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case Z:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case J:
                e = {
                    x: i.x - s.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? yt(o) : null;
        if (null != c) {
            var d = "y" === c ? "height" : "width";
            switch(r){
                case "start":
                    e[c] = e[c] - (i[d] / 2 - s[d] / 2);
                    break;
                case "end":
                    e[c] = e[c] + (i[d] / 2 - s[d] / 2);
            }
        }
        return e;
    }
    function Kt(t58, e25) {
        void 0 === e25 && (e25 = {
        });
        var i8 = e25, s7 = i8.placement, n4 = void 0 === s7 ? t58.placement : s7, o4 = i8.boundary, r3 = void 0 === o4 ? "clippingParents" : o4, a = i8.rootBoundary, l = void 0 === a ? "viewport" : a, c = i8.elementContext, d = void 0 === c ? "popper" : c, h = i8.altBoundary, f = void 0 !== h && h, u = i8.padding, p = void 0 === u ? 0 : u, g = Lt("number" != typeof p ? p : Ot(p, tt)), m = "popper" === d ? "reference" : "popper", _ = t58.elements.reference, b = t58.rects.popper, v = t58.elements[f ? m : d], y = function(t59, e26, i9) {
            var s8 = "clippingParents" === e26 ? function(t60) {
                var e = Wt(_t(t60)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(pt(t60).position) >= 0 && at(t60) ? vt(t60) : t60;
                return rt(i) ? e.filter(function(t) {
                    return rt(t) && ut(t, i) && "body" !== nt1(t);
                }) : [];
            }(t59) : [].concat(e26), n = [].concat(s8, [
                i9
            ]), o = n[0], r = n.reduce(function(e, i) {
                var s = $t(t59, i);
                return e.top = wt(s.top, e.top), e.right = Et(s.right, e.right), e.bottom = Et(s.bottom, e.bottom), e.left = wt(s.left, e.left), e;
            }, $t(t59, o));
            return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
        }(rt(v) ? v : v.contextElement || mt(t58.elements.popper), r3, l), w = ht(_), E = zt({
            reference: w,
            element: b,
            strategy: "absolute",
            placement: n4
        }), T = Ut(Object.assign({
        }, b, E)), A = "popper" === d ? T : w, L = {
            top: y.top - A.top + g.top,
            bottom: A.bottom - y.bottom + g.bottom,
            left: y.left - A.left + g.left,
            right: A.right - y.right + g.right
        }, O = t58.modifiersData.offset;
        if ("popper" === d && O) {
            var k = O[n4];
            Object.keys(L).forEach(function(t) {
                var e = [
                    Z,
                    G
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    Q,
                    G
                ].indexOf(t) >= 0 ? "y" : "x";
                L[t] += k[i] * e;
            });
        }
        return L;
    }
    function Yt(t61, e27) {
        void 0 === e27 && (e27 = {
        });
        var i10 = e27, s = i10.placement, n = i10.boundary, o = i10.rootBoundary, r = i10.padding, a = i10.flipVariations, l = i10.allowedAutoPlacements, c = void 0 === l ? it1 : l, d = Ft(s), h = d ? a ? et : et.filter(function(t) {
            return Ft(t) === d;
        }) : tt, f = h.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === f.length && (f = h);
        var u = f.reduce(function(e, i) {
            return e[i] = Kt(t61, {
                placement: i,
                boundary: n,
                rootBoundary: o,
                padding: r
            })[dt(i)], e;
        }, {
        });
        return Object.keys(u).sort(function(t, e) {
            return u[t] - u[e];
        });
    }
    var qt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t62) {
            var e28 = t62.state, i11 = t62.options, s = t62.name;
            if (!e28.modifiersData[s]._skip) {
                for(var n = i11.mainAxis, o = void 0 === n || n, r = i11.altAxis, a = void 0 === r || r, l = i11.fallbackPlacements, c = i11.padding, d = i11.boundary, h = i11.rootBoundary, f = i11.altBoundary, u = i11.flipVariations, p = void 0 === u || u, g = i11.allowedAutoPlacements, m = e28.options.placement, _ = dt(m), b = l || (_ !== m && p ? function(t) {
                    if ("auto" === dt(t)) return [];
                    var e = Pt(t);
                    return [
                        Mt(t),
                        e,
                        Mt(e)
                    ];
                }(m) : [
                    Pt(m)
                ]), v = [
                    m
                ].concat(b).reduce(function(t, i) {
                    return t.concat("auto" === dt(i) ? Yt(e28, {
                        placement: i,
                        boundary: d,
                        rootBoundary: h,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : i);
                }, []), y = e28.rects.reference, w = e28.rects.popper, E = new Map, T = !0, A = v[0], L = 0; L < v.length; L++){
                    var O = v[L], k = dt(O), D = "start" === Ft(O), x = [
                        Q,
                        G
                    ].indexOf(k) >= 0, C = x ? "width" : "height", S = Kt(e28, {
                        placement: O,
                        boundary: d,
                        rootBoundary: h,
                        altBoundary: f,
                        padding: c
                    }), N = x ? D ? Z : J : D ? G : Q;
                    y[C] > w[C] && (N = Pt(N));
                    var j = Pt(N), P = [];
                    if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[j] <= 0), P.every(function(t) {
                        return t;
                    })) {
                        A = O, T = !1;
                        break;
                    }
                    E.set(O, P);
                }
                if (T) for(var I = function(t63) {
                    var e29 = v.find(function(e) {
                        var i = E.get(e);
                        if (i) return i.slice(0, t63).every(function(t) {
                            return t;
                        });
                    });
                    if (e29) return A = e29, "break";
                }, M = p ? 3 : 1; M > 0 && "break" !== I(M); M--);
                e28.placement !== A && (e28.modifiersData[s]._skip = !0, e28.placement = A, e28.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function Vt(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function Xt(t) {
        return [
            Q,
            Z,
            G,
            J
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    var Qt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, s = e.rects.reference, n = e.rects.popper, o = e.modifiersData.preventOverflow, r = Kt(e, {
                elementContext: "reference"
            }), a = Kt(e, {
                altBoundary: !0
            }), l = Vt(r, s), c = Vt(a, n, o), d = Xt(l), h = Xt(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: d,
                hasPopperEscaped: h
            }, e.attributes.popper = Object.assign({
            }, e.attributes.popper, {
                "data-popper-reference-hidden": d,
                "data-popper-escaped": h
            });
        }
    }, Gt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t64) {
            var e30 = t64.state, i12 = t64.options, s9 = t64.name, n5 = i12.offset, o5 = void 0 === n5 ? [
                0,
                0
            ] : n5, r4 = it1.reduce(function(t65, i13) {
                return t65[i13] = (function(t, e, i) {
                    var s = dt(t), n = [
                        J,
                        Q
                    ].indexOf(s) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({
                    }, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * n, [
                        J,
                        Z
                    ].indexOf(s) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                })(i13, e30.rects, o5), t65;
            }, {
            }), a2 = r4[e30.placement], l = a2.x, c = a2.y;
            null != e30.modifiersData.popperOffsets && (e30.modifiersData.popperOffsets.x += l, e30.modifiersData.popperOffsets.y += c), e30.modifiersData[s9] = r4;
        }
    }, Zt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = zt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            });
        },
        data: {
        }
    }, Jt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, s = t.name, n = i.mainAxis, o = void 0 === n || n, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, d = i.altBoundary, h = i.padding, f = i.tether, u = void 0 === f || f, p = i.tetherOffset, g = void 0 === p ? 0 : p, m = Kt(e, {
                boundary: l,
                rootBoundary: c,
                padding: h,
                altBoundary: d
            }), _ = dt(e.placement), b = Ft(e.placement), v = !b, y = yt(_), w = "x" === y ? "y" : "x", E = e.modifiersData.popperOffsets, T = e.rects.reference, A = e.rects.popper, L = "function" == typeof g ? g(Object.assign({
            }, e.rects, {
                placement: e.placement
            })) : g, O = {
                x: 0,
                y: 0
            };
            if (E) {
                if (o || a) {
                    var k = "y" === y ? Q : J, D = "y" === y ? G : Z, x = "y" === y ? "height" : "width", C = E[y], S = E[y] + m[k], N = E[y] - m[D], j = u ? -A[x] / 2 : 0, P = "start" === b ? T[x] : A[x], I = "start" === b ? -A[x] : -T[x], M = e.elements.arrow, R = u && M ? ft(M) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, H = B[k], W = B[D], U = At(0, T[x], R[x]), $ = v ? T[x] / 2 - j - U - H - L : P - U - H - L, F = v ? -T[x] / 2 + j + U + W + L : I + U + W + L, z = e.elements.arrow && vt(e.elements.arrow), K = z ? "y" === y ? z.clientTop || 0 : z.clientLeft || 0 : 0, Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0, q = E[y] + $ - Y - K, V = E[y] + F - Y;
                    if (o) {
                        var X = At(u ? Et(S, q) : S, C, u ? wt(N, V) : N);
                        E[y] = X, O[y] = X - C;
                    }
                    if (a) {
                        var tt = "x" === y ? Q : J, et = "x" === y ? G : Z, it = E[w], st = it + m[tt], nt = it - m[et], ot = At(u ? Et(st, q) : st, it, u ? wt(nt, V) : nt);
                        E[w] = ot, O[w] = ot - it;
                    }
                }
                e.modifiersData[s] = O;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function te(t, e, i) {
        void 0 === i && (i = !1);
        var s, n, o = mt(e), r = ht(t), a = at(e), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (a || !a && !i) && (("body" !== nt1(e) || Ht(o)) && (l = (s = e) !== ot1(s) && at(s) ? {
            scrollLeft: (n = s).scrollLeft,
            scrollTop: n.scrollTop
        } : Rt(s)), at(e) ? ((c = ht(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Bt(o))), {
            x: r.left + l.scrollLeft - c.x,
            y: r.top + l.scrollTop - c.y,
            width: r.width,
            height: r.height
        };
    }
    var ee = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function ie() {
        for(var t66 = arguments.length, e = new Array(t66), i = 0; i < t66; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function se(t67) {
        void 0 === t67 && (t67 = {
        });
        var e31 = t67, i14 = e31.defaultModifiers, s10 = void 0 === i14 ? [] : i14, n6 = e31.defaultOptions, o6 = void 0 === n6 ? ee : n6;
        return function(t68, e32, i15) {
            void 0 === i15 && (i15 = o6);
            var n7, r5, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({
                }, ee, o6),
                modifiersData: {
                },
                elements: {
                    reference: t68,
                    popper: e32
                },
                attributes: {
                },
                styles: {
                }
            }, l2 = [], c2 = !1, d = {
                state: a,
                setOptions: function(i16) {
                    h2(), a.options = Object.assign({
                    }, o6, a.options, i16), a.scrollParents = {
                        reference: rt(t68) ? Wt(t68) : t68.contextElement ? Wt(t68.contextElement) : [],
                        popper: Wt(e32)
                    };
                    var n8, r, c = function(t69) {
                        var e33 = function(t70) {
                            var e = new Map, i = new Set, s11 = [];
                            return t70.forEach(function(t) {
                                e.set(t.name, t);
                            }), t70.forEach(function(t71) {
                                i.has(t71.name) || (function t(n9) {
                                    i.add(n9.name), [].concat(n9.requires || [], n9.requiresIfExists || []).forEach(function(s) {
                                        if (!i.has(s)) {
                                            var n = e.get(s);
                                            n && t(n);
                                        }
                                    }), s11.push(n9);
                                })(t71);
                            }), s11;
                        }(t69);
                        return st1.reduce(function(t72, i) {
                            return t72.concat(e33.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((n8 = [].concat(s10, a.options.modifiers), r = n8.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({
                        }, i, e, {
                            options: Object.assign({
                            }, i.options, e.options),
                            data: Object.assign({
                            }, i.data, e.data)
                        }) : e, t;
                    }, {
                    }), Object.keys(r).map(function(t) {
                        return r[t];
                    })));
                    return a.orderedModifiers = c.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, s = void 0 === i ? {
                        } : i, n = t.effect;
                        if ("function" == typeof n) {
                            var o = n({
                                state: a,
                                name: e,
                                instance: d,
                                options: s
                            });
                            l2.push(o || function() {
                            });
                        }
                    }), d.update();
                },
                forceUpdate: function() {
                    if (!c2) {
                        var t73 = a.elements, e = t73.reference, i = t73.popper;
                        if (ie(e, i)) {
                            a.rects = {
                                reference: te(e, vt(i), "fixed" === a.options.strategy),
                                popper: ft(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({
                                }, t.data);
                            });
                            for(var s = 0; s < a.orderedModifiers.length; s++)if (!0 !== a.reset) {
                                var n = a.orderedModifiers[s], o = n.fn, r = n.options, l = void 0 === r ? {
                                } : r, h = n.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: h,
                                    instance: d
                                }) || a);
                            } else a.reset = !1, s = -1;
                        }
                    }
                },
                update: (n7 = function() {
                    return new Promise(function(t) {
                        d.forceUpdate(), t(a);
                    });
                }, function() {
                    return r5 || (r5 = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r5 = void 0, t(n7());
                        });
                    })), r5;
                }),
                destroy: function() {
                    h2(), c2 = !0;
                }
            };
            if (!ie(t68, e32)) return d;
            function h2() {
                l2.forEach(function(t) {
                    return t();
                }), l2 = [];
            }
            return d.setOptions(i15).then(function(t) {
                !c2 && i15.onFirstUpdate && i15.onFirstUpdate(t);
            }), d;
        };
    }
    var ne = se(), oe = se({
        defaultModifiers: [
            Nt,
            Zt,
            Ct,
            ct
        ]
    }), re = se({
        defaultModifiers: [
            Nt,
            Zt,
            Ct,
            ct,
            Gt,
            qt,
            Jt,
            kt,
            Qt
        ]
    }), ae = Object.freeze({
        __proto__: null,
        popperGenerator: se,
        detectOverflow: Kt,
        createPopperBase: ne,
        createPopper: re,
        createPopperLite: oe,
        top: Q,
        bottom: G,
        right: Z,
        left: J,
        auto: "auto",
        basePlacements: tt,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: et,
        placements: it1,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: st1,
        applyStyles: ct,
        arrow: kt,
        computeStyles: Ct,
        eventListeners: Nt,
        flip: qt,
        hide: Qt,
        offset: Gt,
        popperOffsets: Zt,
        preventOverflow: Jt
    });
    const le = new RegExp("ArrowUp|ArrowDown|Escape"), ce = g1() ? "top-end" : "top-start", de = g1() ? "top-start" : "top-end", he = g1() ? "bottom-end" : "bottom-start", fe = g1() ? "bottom-start" : "bottom-end", ue = g1() ? "left-start" : "right-start", pe = g1() ? "right-start" : "left-start", ge = {
        offset: [
            0,
            2
        ],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }, me = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)"
    };
    class _e extends j1 {
        constructor(t75, e34){
            super(t75), this._popper = null, this._config = this._getConfig(e34), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
        }
        static get Default() {
            return ge;
        }
        static get DefaultType() {
            return me;
        }
        static get DATA_KEY() {
            return "bs.dropdown";
        }
        toggle() {
            if (this._element.disabled || this._element.classList.contains("disabled")) return;
            const t = this._element.classList.contains("show");
            _e.clearMenus(), t || this.show();
        }
        show() {
            if (this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show")) return;
            const t74 = _e.getParentFromElement(this._element), e = {
                relatedTarget: this._element
            };
            if (!N1.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._inNavbar) B1.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === ae) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t74 : r1(this._config.reference) ? (e = this._config.reference, void 0 !== this._config.reference.jquery && (e = this._config.reference[0])) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig(), s = i.modifiers.find((t)=>"applyStyles" === t.name && !1 === t.enabled
                    );
                    this._popper = re(e, this._menu, i), s && B1.setDataAttribute(this._menu, "popper", "static");
                }
                "ontouchstart" in document.documentElement && !t74.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t)=>N1.on(t, "mouseover", null, function() {
                    })
                ), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), N1.trigger(this._element, "shown.bs.dropdown", e);
            }
        }
        hide() {
            if (this._element.disabled || this._element.classList.contains("disabled") || !this._menu.classList.contains("show")) return;
            const t = {
                relatedTarget: this._element
            };
            N1.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B1.removeDataAttribute(this._menu, "popper"), N1.trigger(this._element, "hidden.bs.dropdown", t));
        }
        dispose() {
            N1.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _addEventListeners() {
            N1.on(this._element, "click.bs.dropdown", (t)=>{
                t.preventDefault(), this.toggle();
            });
        }
        _getConfig(t80) {
            if (t80 = {
                ...this.constructor.Default,
                ...B1.getDataAttributes(this._element),
                ...t80
            }, l1("dropdown", t80, this.constructor.DefaultType), "object" == typeof t80.reference && !r1(t80.reference) && "function" != typeof t80.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t80;
        }
        _getMenuElement() {
            return H1.next(this._element, ".dropdown-menu")[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ue;
            if (t.classList.contains("dropstart")) return pe;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? de : ce : e ? fe : he;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t76  } = this._config;
            return "string" == typeof t76 ? t76.split(",").map((t)=>Number.parseInt(t, 10)
            ) : "function" == typeof t76 ? (e)=>t76(e, this._element)
             : t76;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return "static" === this._config.display && (t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            };
        }
        static dropdownInterface(t77, e40) {
            let i = b1.get(t77, "bs.dropdown");
            if (i || (i = new _e(t77, "object" == typeof e40 ? e40 : null)), "string" == typeof e40) {
                if (void 0 === i[e40]) throw new TypeError(`No method named "${e40}"`);
                i[e40]();
            }
        }
        static jQueryInterface(t78) {
            return this.each(function() {
                _e.dropdownInterface(this, t78);
            });
        }
        static clearMenus(t79) {
            if (t79) {
                if (2 === t79.button || "keyup" === t79.type && "Tab" !== t79.key) return;
                if (/input|select|textarea|form/i.test(t79.target.tagName)) return;
            }
            const e35 = H1.find('[data-bs-toggle="dropdown"]');
            for(let i = 0, s = e35.length; i < s; i++){
                const s = b1.get(e35[i], "bs.dropdown"), n = {
                    relatedTarget: e35[i]
                };
                if (t79 && "click" === t79.type && (n.clickEvent = t79), !s) continue;
                const o = s._menu;
                if (e35[i].classList.contains("show")) {
                    if (t79) {
                        if ([
                            s._element
                        ].some((e)=>t79.composedPath().includes(e)
                        )) continue;
                        if ("keyup" === t79.type && "Tab" === t79.key && o.contains(t79.target)) continue;
                    }
                    N1.trigger(e35[i], "hide.bs.dropdown", n).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>N1.off(t, "mouseover", null, function() {
                        })
                    ), e35[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), o.classList.remove("show"), e35[i].classList.remove("show"), B1.removeDataAttribute(o, "popper"), N1.trigger(e35[i], "hidden.bs.dropdown", n));
                }
            }
        }
        static getParentFromElement(t82) {
            return s1(t82) || t82.parentNode;
        }
        static dataApiKeydownHandler(t81) {
            if (/input|textarea/i.test(t81.target.tagName) ? "Space" === t81.key || "Escape" !== t81.key && ("ArrowDown" !== t81.key && "ArrowUp" !== t81.key || t81.target.closest(".dropdown-menu")) : !le.test(t81.key)) return;
            if (t81.preventDefault(), t81.stopPropagation(), this.disabled || this.classList.contains("disabled")) return;
            const e = _e.getParentFromElement(this), i = this.classList.contains("show");
            if ("Escape" === t81.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : H1.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void _e.clearMenus();
            if (!i && ("ArrowUp" === t81.key || "ArrowDown" === t81.key)) return void (this.matches('[data-bs-toggle="dropdown"]') ? this : H1.prev(this, '[data-bs-toggle="dropdown"]')[0]).click();
            if (!i || "Space" === t81.key) return void _e.clearMenus();
            const s = H1.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(c1);
            if (!s.length) return;
            let n = s.indexOf(t81.target);
            "ArrowUp" === t81.key && n > 0 && n--, "ArrowDown" === t81.key && n < s.length - 1 && n++, n = -1 === n ? 0 : n, s[n].focus();
        }
    }
    N1.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', _e.dataApiKeydownHandler), N1.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", _e.dataApiKeydownHandler), N1.on(document, "click.bs.dropdown.data-api", _e.clearMenus), N1.on(document, "keyup.bs.dropdown.data-api", _e.clearMenus), N1.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function(t) {
        t.preventDefault(), _e.dropdownInterface(this);
    }), m1("dropdown", _e);
    const be = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }, ve = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    };
    class ye extends j1 {
        constructor(t85, e36){
            super(t85), this._config = this._getConfig(e36), this._dialog = H1.findOne(".modal-dialog", this._element), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
        }
        static get Default() {
            return be;
        }
        static get DATA_KEY() {
            return "bs.modal";
        }
        toggle(t83) {
            return this._isShown ? this.hide() : this.show(t83);
        }
        show(t84) {
            if (this._isShown || this._isTransitioning) return;
            this._isAnimated() && (this._isTransitioning = !0);
            const e = N1.trigger(this._element, "show.bs.modal", {
                relatedTarget: t84
            });
            this._isShown || e.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), N1.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (t)=>this.hide(t)
            ), N1.on(this._dialog, "mousedown.dismiss.bs.modal", ()=>{
                N1.one(this._element, "mouseup.dismiss.bs.modal", (t)=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0);
                });
            }), this._showBackdrop(()=>this._showElement(t84)
            ));
        }
        hide(t87) {
            if (t87 && t87.preventDefault(), !this._isShown || this._isTransitioning) return;
            if (N1.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const e = this._isAnimated();
            if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), N1.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), N1.off(this._element, "click.dismiss.bs.modal"), N1.off(this._dialog, "mousedown.dismiss.bs.modal"), e) {
                const t86 = n1(this._element);
                N1.one(this._element, "transitionend", (t)=>this._hideModal(t)
                ), a1(this._element, t86);
            } else this._hideModal();
        }
        dispose() {
            [
                window,
                this._element,
                this._dialog
            ].forEach((t)=>N1.off(t, ".bs.modal")
            ), super.dispose(), N1.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _getConfig(t89) {
            return t89 = {
                ...be,
                ...t89
            }, l1("modal", t89, ve), t89;
        }
        _showElement(t88) {
            const e = this._isAnimated(), i = H1.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u1(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
            const s = ()=>{
                this._config.focus && this._element.focus(), this._isTransitioning = !1, N1.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t88
                });
            };
            if (e) {
                const t = n1(this._dialog);
                N1.one(this._dialog, "transitionend", s), a1(this._dialog, t);
            } else s();
        }
        _enforceFocus() {
            N1.off(document, "focusin.bs.modal"), N1.on(document, "focusin.bs.modal", (t)=>{
                document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus();
            });
        }
        _setEscapeEvent() {
            this._isShown ? N1.on(this._element, "keydown.dismiss.bs.modal", (t)=>{
                this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition();
            }) : N1.off(this._element, "keydown.dismiss.bs.modal");
        }
        _setResizeEvent() {
            this._isShown ? N1.on(window, "resize.bs.modal", ()=>this._adjustDialog()
            ) : N1.off(window, "resize.bs.modal");
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(()=>{
                document.body.classList.remove("modal-open"), this._resetAdjustments(), this._resetScrollbar(), N1.trigger(this._element, "hidden.bs.modal");
            });
        }
        _removeBackdrop() {
            this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
        }
        _showBackdrop(t90) {
            const e = this._isAnimated();
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", e && this._backdrop.classList.add("fade"), document.body.appendChild(this._backdrop), N1.on(this._element, "click.dismiss.bs.modal", (t)=>{
                    this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === this._config.backdrop ? this._triggerBackdropTransition() : this.hide());
                }), e && u1(this._backdrop), this._backdrop.classList.add("show"), !e) return void t90();
                const i = n1(this._backdrop);
                N1.one(this._backdrop, "transitionend", t90), a1(this._backdrop, i);
            } else if (!this._isShown && this._backdrop) {
                this._backdrop.classList.remove("show");
                const i = ()=>{
                    this._removeBackdrop(), t90();
                };
                if (e) {
                    const t = n1(this._backdrop);
                    N1.one(this._backdrop, "transitionend", i), a1(this._backdrop, t);
                } else i();
            } else t90();
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (N1.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
            const e = n1(this._dialog);
            N1.off(this._element, "transitionend"), N1.one(this._element, "transitionend", ()=>{
                this._element.classList.remove("modal-static"), t || (N1.one(this._element, "transitionend", ()=>{
                    this._element.style.overflowY = "";
                }), a1(this._element, e));
            }), a1(this._element, e), this._element.focus();
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            (!this._isBodyOverflowing && t && !g1() || this._isBodyOverflowing && !t && g1()) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !g1() || !this._isBodyOverflowing && t && g1()) && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        _checkScrollbar() {
            const t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
        }
        _setScrollbar() {
            this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (t)=>t + this._scrollbarWidth
            ), this._setElementAttributes(".sticky-top", "marginRight", (t)=>t - this._scrollbarWidth
            ), this._setElementAttributes("body", "paddingRight", (t)=>t + this._scrollbarWidth
            )), document.body.classList.add("modal-open");
        }
        _setElementAttributes(t91, e37, i17) {
            H1.find(t91).forEach((t)=>{
                if (t !== document.body && window.innerWidth > t.clientWidth + this._scrollbarWidth) return;
                const s = t.style[e37], n = window.getComputedStyle(t)[e37];
                B1.setDataAttribute(t, e37, s), t.style[e37] = i17(Number.parseFloat(n)) + "px";
            });
        }
        _resetScrollbar() {
            this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight");
        }
        _resetElementAttributes(t92, e38) {
            H1.find(t92).forEach((t)=>{
                const i = B1.getDataAttribute(t, e38);
                void 0 === i && t === document.body ? t.style[e38] = "" : (B1.removeDataAttribute(t, e38), t.style[e38] = i);
            });
        }
        _getScrollbarWidth() {
            const t = document.createElement("div");
            t.className = "modal-scrollbar-measure", document.body.appendChild(t);
            const e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
        }
        static jQueryInterface(t93, e39) {
            return this.each(function() {
                let i = b1.get(this, "bs.modal");
                const s = {
                    ...be,
                    ...B1.getDataAttributes(this),
                    ..."object" == typeof t93 && t93 ? t93 : {
                    }
                };
                if (i || (i = new ye(this, s)), "string" == typeof t93) {
                    if (void 0 === i[t93]) throw new TypeError(`No method named "${t93}"`);
                    i[t93](e39);
                }
            });
        }
    }
    N1.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t94) {
        const e = s1(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t94.preventDefault(), N1.one(e, "show.bs.modal", (t)=>{
            t.defaultPrevented || N1.one(e, "hidden.bs.modal", ()=>{
                c1(this) && this.focus();
            });
        });
        let i = b1.get(e, "bs.modal");
        if (!i) {
            const t = {
                ...B1.getDataAttributes(e),
                ...B1.getDataAttributes(this)
            };
            i = new ye(e, t);
        }
        i.toggle(this);
    }), m1("modal", ye);
    const we = ()=>{
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
    }, Ee = (t95, e, i)=>{
        const s = we();
        H1.find(t95).forEach((t)=>{
            if (t !== document.body && window.innerWidth > t.clientWidth + s) return;
            const n = t.style[e], o = window.getComputedStyle(t)[e];
            B1.setDataAttribute(t, e, n), t.style[e] = i(Number.parseFloat(o)) + "px";
        });
    }, Te = (t96, e)=>{
        H1.find(t96).forEach((t)=>{
            const i = B1.getDataAttribute(t, e);
            void 0 === i && t === document.body ? t.style.removeProperty(e) : (B1.removeDataAttribute(t, e), t.style[e] = i);
        });
    }, Ae = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Le = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class Oe extends j1 {
        constructor(t99, e41){
            super(t99), this._config = this._getConfig(e41), this._isShown = !1, this._addEventListeners();
        }
        static get Default() {
            return Ae;
        }
        static get DATA_KEY() {
            return "bs.offcanvas";
        }
        toggle(t97) {
            return this._isShown ? this.hide() : this.show(t97);
        }
        show(t98) {
            this._isShown || N1.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t98
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._config.backdrop && document.body.classList.add("offcanvas-backdrop"), this._config.scroll || ((t = we())=>{
                document.body.style.overflow = "hidden", Ee(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight", (e)=>e + t
                ), Ee(".sticky-top", "marginRight", (e)=>e - t
                ), Ee("body", "paddingRight", (e)=>e + t
                );
            })(), this._element.classList.add("offcanvas-toggling"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), setTimeout(()=>{
                this._element.classList.remove("offcanvas-toggling"), N1.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t98
                }), this._enforceFocusOnElement(this._element);
            }, n1(this._element)));
        }
        hide() {
            this._isShown && (N1.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._element.classList.add("offcanvas-toggling"), N1.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), setTimeout(()=>{
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.backdrop && document.body.classList.remove("offcanvas-backdrop"), this._config.scroll || (document.body.style.overflow = "auto", Te(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"), Te(".sticky-top", "marginRight"), Te("body", "paddingRight")), N1.trigger(this._element, "hidden.bs.offcanvas"), this._element.classList.remove("offcanvas-toggling");
            }, n1(this._element))));
        }
        _getConfig(t101) {
            return t101 = {
                ...Ae,
                ...B1.getDataAttributes(this._element),
                ..."object" == typeof t101 ? t101 : {
                }
            }, l1("offcanvas", t101, Le), t101;
        }
        _enforceFocusOnElement(t100) {
            N1.off(document, "focusin.bs.offcanvas"), N1.on(document, "focusin.bs.offcanvas", (e)=>{
                document === e.target || t100 === e.target || t100.contains(e.target) || t100.focus();
            }), t100.focus();
        }
        _addEventListeners() {
            N1.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', ()=>this.hide()
            ), N1.on(document, "keydown", (t)=>{
                this._config.keyboard && "Escape" === t.key && this.hide();
            }), N1.on(document, "click.bs.offcanvas.data-api", (t)=>{
                const e = H1.findOne(i1(t.target));
                this._element.contains(t.target) || e === this._element || this.hide();
            });
        }
        static jQueryInterface(t102) {
            return this.each(function() {
                const e = b1.get(this, "bs.offcanvas") || new Oe(this, "object" == typeof t102 ? t102 : {
                });
                if ("string" == typeof t102) {
                    if (void 0 === e[t102] || t102.startsWith("_") || "constructor" === t102) throw new TypeError(`No method named "${t102}"`);
                    e[t102](this);
                }
            });
        }
    }
    N1.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        const e = s1(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), d1(this)) return;
        N1.one(e, "hidden.bs.offcanvas", ()=>{
            c1(this) && this.focus();
        });
        const i = H1.findOne(".offcanvas.show, .offcanvas-toggling");
        i && i !== e || (b1.get(e, "bs.offcanvas") || new Oe(e)).toggle(this);
    }), N1.on(window, "load.bs.offcanvas.data-api", ()=>{
        H1.find(".offcanvas.show").forEach((t)=>(b1.get(t, "bs.offcanvas") || new Oe(t)).show()
        );
    }), m1("offcanvas", Oe);
    const ke = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), De = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i, xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ce = (t104, e)=>{
        const i = t104.nodeName.toLowerCase();
        if (e.includes(i)) return !ke.has(i) || Boolean(De.test(t104.nodeValue) || xe.test(t104.nodeValue));
        const s = e.filter((t)=>t instanceof RegExp
        );
        for(let t103 = 0, e42 = s.length; t103 < e42; t103++)if (s[t103].test(i)) return !0;
        return !1;
    };
    function Se(t106, e, i) {
        if (!t106.length) return t106;
        if (i && "function" == typeof i) return i(t106);
        const s = (new window.DOMParser).parseFromString(t106, "text/html"), n = Object.keys(e), o = [].concat(...s.body.querySelectorAll("*"));
        for(let t105 = 0, i18 = o.length; t105 < i18; t105++){
            const i18 = o[t105], s = i18.nodeName.toLowerCase();
            if (!n.includes(s)) {
                i18.parentNode.removeChild(i18);
                continue;
            }
            const r = [].concat(...i18.attributes), a = [].concat(e["*"] || [], e[s] || []);
            r.forEach((t)=>{
                Ce(t, a) || i18.removeAttribute(t.nodeName);
            });
        }
        return s.body.innerHTML;
    }
    const Ne = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), je = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), Pe = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }, Ie = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: g1() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: g1() ? "right" : "left"
    }, Me = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [
            0,
            0
        ],
        container: !1,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": [
                "class",
                "dir",
                "id",
                "lang",
                "role",
                /^aria-[\w-]*$/i
            ],
            a: [
                "target",
                "href",
                "title",
                "rel"
            ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [
                "src",
                "srcset",
                "alt",
                "title",
                "width",
                "height"
            ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }, Re = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    };
    class Be extends j1 {
        constructor(t108, e45){
            if (void 0 === ae) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t108), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {
            }, this._popper = null, this.config = this._getConfig(e45), this.tip = null, this._setListeners();
        }
        static get Default() {
            return Me;
        }
        static get NAME() {
            return "tooltip";
        }
        static get DATA_KEY() {
            return "bs.tooltip";
        }
        static get Event() {
            return Re;
        }
        static get EVENT_KEY() {
            return ".bs.tooltip";
        }
        static get DefaultType() {
            return Pe;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t107) {
            if (this._isEnabled) {
                if (t107) {
                    const e = this._initializeOnDelegatedTarget(t107);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }
        }
        dispose() {
            clearTimeout(this._timeout), N1.off(this._element, this.constructor.EVENT_KEY), N1.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const e = N1.trigger(this._element, this.constructor.Event.SHOW), i = h1(this._element), s = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
            if (e.defaultPrevented || !s) return;
            const o = this.getTipElement(), r = t1(this.constructor.NAME);
            o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");
            const l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement, c = this._getAttachment(l);
            this._addAttachmentClass(c);
            const d = this._getContainer();
            b1.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o), N1.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = re(this._element, o, this._getPopperConfig(c)), o.classList.add("show");
            const f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
            f && o.classList.add(...f.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>{
                N1.on(t, "mouseover", function() {
                });
            });
            const u = ()=>{
                const t = this._hoverState;
                this._hoverState = null, N1.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this);
            };
            if (this.tip.classList.contains("fade")) {
                const t = n1(this.tip);
                N1.one(this.tip, "transitionend", u), a1(this.tip, t);
            } else u();
        }
        hide() {
            if (!this._popper) return;
            const t109 = this.getTipElement(), e = ()=>{
                this._isWithActiveTrigger() || ("show" !== this._hoverState && t109.parentNode && t109.parentNode.removeChild(t109), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), N1.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null));
            };
            if (!N1.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                if (t109.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>N1.off(t, "mouseover", f1)
                ), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                    const i = n1(t109);
                    N1.one(t109, "transitionend", e), a1(t109, i);
                } else e();
                this._hoverState = "";
            }
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(H1.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
        }
        setElementContent(t114, e43) {
            if (null !== t114) return "object" == typeof e43 && r1(e43) ? (e43.jquery && (e43 = e43[0]), void (this.config.html ? e43.parentNode !== t114 && (t114.innerHTML = "", t114.appendChild(e43)) : t114.textContent = e43.textContent)) : void (this.config.html ? (this.config.sanitize && (e43 = Se(e43, this.config.allowList, this.config.sanitizeFn)), t114.innerHTML = e43) : t114.textContent = e43);
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t;
        }
        updateAttachment(t110) {
            return "right" === t110 ? "end" : "left" === t110 ? "start" : t110;
        }
        _initializeOnDelegatedTarget(t111, e44) {
            const i = this.constructor.DATA_KEY;
            return (e44 = e44 || b1.get(t111.delegateTarget, i)) || (e44 = new this.constructor(t111.delegateTarget, this._getDelegateConfig()), b1.set(t111.delegateTarget, i, e44)), e44;
        }
        _getOffset() {
            const { offset: t112  } = this.config;
            return "string" == typeof t112 ? t112.split(",").map((t)=>Number.parseInt(t, 10)
            ) : "function" == typeof t112 ? (e)=>t112(e, this._element)
             : t112;
        }
        _getPopperConfig(t113) {
            const e = {
                placement: t113,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            altBoundary: !0,
                            fallbackPlacements: this.config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this.config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t)=>this._handlePopperPlacementChange(t)
                    }
                ],
                onFirstUpdate: (t)=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
                }
            };
            return {
                ...e,
                ..."function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig
            };
        }
        _addAttachmentClass(t116) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t116));
        }
        _getContainer() {
            return !1 === this.config.container ? document.body : r1(this.config.container) ? this.config.container : H1.findOne(this.config.container);
        }
        _getAttachment(t115) {
            return Ie[t115.toUpperCase()];
        }
        _setListeners() {
            this.config.trigger.split(" ").forEach((t117)=>{
                if ("click" === t117) N1.on(this._element, this.constructor.Event.CLICK, this.config.selector, (t)=>this.toggle(t)
                );
                else if ("manual" !== t117) {
                    const e = "hover" === t117 ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = "hover" === t117 ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    N1.on(this._element, e, this.config.selector, (t)=>this._enter(t)
                    ), N1.on(this._element, i, this.config.selector, (t)=>this._leave(t)
                    );
                }
            }), this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, N1.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = {
                ...this.config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
        }
        _enter(t120, e48) {
            e48 = this._initializeOnDelegatedTarget(t120, e48), t120 && (e48._activeTrigger["focusin" === t120.type ? "focus" : "hover"] = !0), e48.getTipElement().classList.contains("show") || "show" === e48._hoverState ? e48._hoverState = "show" : (clearTimeout(e48._timeout), e48._hoverState = "show", e48.config.delay && e48.config.delay.show ? e48._timeout = setTimeout(()=>{
                "show" === e48._hoverState && e48.show();
            }, e48.config.delay.show) : e48.show());
        }
        _leave(t118, e46) {
            e46 = this._initializeOnDelegatedTarget(t118, e46), t118 && (e46._activeTrigger["focusout" === t118.type ? "focus" : "hover"] = e46._element.contains(t118.relatedTarget)), e46._isWithActiveTrigger() || (clearTimeout(e46._timeout), e46._hoverState = "out", e46.config.delay && e46.config.delay.hide ? e46._timeout = setTimeout(()=>{
                "out" === e46._hoverState && e46.hide();
            }, e46.config.delay.hide) : e46.hide());
        }
        _isWithActiveTrigger() {
            for(const t in this._activeTrigger)if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t119) {
            const e = B1.getDataAttributes(this._element);
            return Object.keys(e).forEach((t)=>{
                je.has(t) && delete e[t];
            }), t119 && "object" == typeof t119.container && t119.container.jquery && (t119.container = t119.container[0]), "number" == typeof (t119 = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t119 && t119 ? t119 : {
                }
            }).delay && (t119.delay = {
                show: t119.delay,
                hide: t119.delay
            }), "number" == typeof t119.title && (t119.title = t119.title.toString()), "number" == typeof t119.content && (t119.content = t119.content.toString()), l1("tooltip", t119, this.constructor.DefaultType), t119.sanitize && (t119.template = Se(t119.template, t119.allowList, t119.sanitizeFn)), t119;
        }
        _getDelegateConfig() {
            const t = {
            };
            if (this.config) for(const e in this.config)this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t;
        }
        _cleanTipClass() {
            const t121 = this.getTipElement(), e47 = t121.getAttribute("class").match(Ne);
            null !== e47 && e47.length > 0 && e47.map((t)=>t.trim()
            ).forEach((e)=>t121.classList.remove(e)
            );
        }
        _handlePopperPlacementChange(t128) {
            const { state: e  } = t128;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        static jQueryInterface(t122) {
            return this.each(function() {
                let e = b1.get(this, "bs.tooltip");
                const i = "object" == typeof t122 && t122;
                if ((e || !/dispose|hide/.test(t122)) && (e || (e = new Be(this, i)), "string" == typeof t122)) {
                    if (void 0 === e[t122]) throw new TypeError(`No method named "${t122}"`);
                    e[t122]();
                }
            });
        }
    }
    m1("tooltip", Be);
    const He = new RegExp("(^|\\s)bs-popover\\S+", "g"), We = {
        ...Be.Default,
        placement: "right",
        offset: [
            0,
            8
        ],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }, Ue = {
        ...Be.DefaultType,
        content: "(string|element|function)"
    }, $e = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class Fe extends Be {
        static get Default() {
            return We;
        }
        static get NAME() {
            return "popover";
        }
        static get DATA_KEY() {
            return "bs.popover";
        }
        static get Event() {
            return $e;
        }
        static get EVENT_KEY() {
            return ".bs.popover";
        }
        static get DefaultType() {
            return Ue;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(H1.findOne(".popover-header", t), this.getTitle());
            let e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)), this.setElementContent(H1.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
        }
        _addAttachmentClass(t123) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t123));
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this.config.content;
        }
        _cleanTipClass() {
            const t124 = this.getTipElement(), e49 = t124.getAttribute("class").match(He);
            null !== e49 && e49.length > 0 && e49.map((t)=>t.trim()
            ).forEach((e)=>t124.classList.remove(e)
            );
        }
        static jQueryInterface(t125) {
            return this.each(function() {
                let e = b1.get(this, "bs.popover");
                const i = "object" == typeof t125 ? t125 : null;
                if ((e || !/dispose|hide/.test(t125)) && (e || (e = new Fe(this, i), b1.set(this, "bs.popover", e)), "string" == typeof t125)) {
                    if (void 0 === e[t125]) throw new TypeError(`No method named "${t125}"`);
                    e[t125]();
                }
            });
        }
    }
    m1("popover", Fe);
    const ze = {
        offset: 10,
        method: "auto",
        target: ""
    }, Ke = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    };
    class Ye extends j1 {
        constructor(t126, e51){
            super(t126), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e51), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, N1.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()
            ), this.refresh(), this._process();
        }
        static get Default() {
            return ze;
        }
        static get DATA_KEY() {
            return "bs.scrollspy";
        }
        refresh() {
            const t127 = this._scrollElement === this._scrollElement.window ? "offset" : "position", e50 = "auto" === this._config.method ? t127 : this._config.method, s = "position" === e50 ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), H1.find(this._selector).map((t)=>{
                const n = i1(t), o = n ? H1.findOne(n) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height) return [
                        B1[e50](o).top + s,
                        n
                    ];
                }
                return null;
            }).filter((t)=>t
            ).sort((t, e)=>t[0] - e[0]
            ).forEach((t)=>{
                this._offsets.push(t[0]), this._targets.push(t[1]);
            });
        }
        dispose() {
            super.dispose(), N1.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }
        _getConfig(e53) {
            if ("string" != typeof (e53 = {
                ...ze,
                ..."object" == typeof e53 && e53 ? e53 : {
                }
            }).target && r1(e53.target)) {
                let { id: i  } = e53.target;
                i || (i = t1("scrollspy"), e53.target.id = i), e53.target = "#" + i;
            }
            return l1("scrollspy", e53, Ke), e53;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for(let e = this._offsets.length; e--;)this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
            }
        }
        _activate(t129) {
            this._activeTarget = t129, this._clear();
            const e52 = this._selector.split(",").map((e)=>`${e}[data-bs-target="${t129}"],${e}[href="${t129}"]`
            ), i = H1.findOne(e52.join(","));
            i.classList.contains("dropdown-item") ? (H1.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), H1.parents(i, ".nav, .list-group").forEach((t130)=>{
                H1.prev(t130, ".nav-link, .list-group-item").forEach((t)=>t.classList.add("active")
                ), H1.prev(t130, ".nav-item").forEach((t131)=>{
                    H1.children(t131, ".nav-link").forEach((t)=>t.classList.add("active")
                    );
                });
            })), N1.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t129
            });
        }
        _clear() {
            H1.find(this._selector).filter((t)=>t.classList.contains("active")
            ).forEach((t)=>t.classList.remove("active")
            );
        }
        static jQueryInterface(t132) {
            return this.each(function() {
                let e = b1.get(this, "bs.scrollspy");
                if (e || (e = new Ye(this, "object" == typeof t132 && t132)), "string" == typeof t132) {
                    if (void 0 === e[t132]) throw new TypeError(`No method named "${t132}"`);
                    e[t132]();
                }
            });
        }
    }
    N1.on(window, "load.bs.scrollspy.data-api", ()=>{
        H1.find('[data-bs-spy="scroll"]').forEach((t)=>new Ye(t, B1.getDataAttributes(t))
        );
    }), m1("scrollspy", Ye);
    class qe extends j1 {
        static get DATA_KEY() {
            return "bs.tab";
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || d1(this._element)) return;
            let t;
            const e = s1(this._element), i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                t = H1.find(e, i), t = t[t.length - 1];
            }
            const n = t ? N1.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (N1.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== n && n.defaultPrevented) return;
            this._activate(this._element, i);
            const o = ()=>{
                N1.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), N1.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                });
            };
            e ? this._activate(e, e.parentNode, o) : o();
        }
        _activate(t134, e55, i) {
            const s = (!e55 || "UL" !== e55.nodeName && "OL" !== e55.nodeName ? H1.children(e55, ".active") : H1.find(":scope > li > .active", e55))[0], o = i && s && s.classList.contains("fade"), r = ()=>this._transitionComplete(t134, s, i)
            ;
            if (s && o) {
                const t = n1(s);
                s.classList.remove("show"), N1.one(s, "transitionend", r), a1(s, t);
            } else r();
        }
        _transitionComplete(t133, e54, i19) {
            if (e54) {
                e54.classList.remove("active");
                const t = H1.findOne(":scope > .dropdown-menu .active", e54.parentNode);
                t && t.classList.remove("active"), "tab" === e54.getAttribute("role") && e54.setAttribute("aria-selected", !1);
            }
            t133.classList.add("active"), "tab" === t133.getAttribute("role") && t133.setAttribute("aria-selected", !0), u1(t133), t133.classList.contains("fade") && t133.classList.add("show"), t133.parentNode && t133.parentNode.classList.contains("dropdown-menu") && (t133.closest(".dropdown") && H1.find(".dropdown-toggle").forEach((t)=>t.classList.add("active")
            ), t133.setAttribute("aria-expanded", !0)), i19 && i19();
        }
        static jQueryInterface(t135) {
            return this.each(function() {
                const e = b1.get(this, "bs.tab") || new qe(this);
                if ("string" == typeof t135) {
                    if (void 0 === e[t135]) throw new TypeError(`No method named "${t135}"`);
                    e[t135]();
                }
            });
        }
    }
    N1.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t) {
        t.preventDefault(), (b1.get(this, "bs.tab") || new qe(this)).show();
    }), m1("tab", qe);
    const Ve = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Xe = {
        animation: !0,
        autohide: !0,
        delay: 5000
    };
    class Qe extends j1 {
        constructor(t, e56){
            super(t), this._config = this._getConfig(e56), this._timeout = null, this._setListeners();
        }
        static get DefaultType() {
            return Ve;
        }
        static get Default() {
            return Xe;
        }
        static get DATA_KEY() {
            return "bs.toast";
        }
        show() {
            if (N1.trigger(this._element, "show.bs.toast").defaultPrevented) return;
            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
            const t = ()=>{
                this._element.classList.remove("showing"), this._element.classList.add("show"), N1.trigger(this._element, "shown.bs.toast"), this._config.autohide && (this._timeout = setTimeout(()=>{
                    this.hide();
                }, this._config.delay));
            };
            if (this._element.classList.remove("hide"), u1(this._element), this._element.classList.add("showing"), this._config.animation) {
                const e = n1(this._element);
                N1.one(this._element, "transitionend", t), a1(this._element, e);
            } else t();
        }
        hide() {
            if (!this._element.classList.contains("show")) return;
            if (N1.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
            const t = ()=>{
                this._element.classList.add("hide"), N1.trigger(this._element, "hidden.bs.toast");
            };
            if (this._element.classList.remove("show"), this._config.animation) {
                const e = n1(this._element);
                N1.one(this._element, "transitionend", t), a1(this._element, e);
            } else t();
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), N1.off(this._element, "click.dismiss.bs.toast"), super.dispose(), this._config = null;
        }
        _getConfig(t136) {
            return t136 = {
                ...Xe,
                ...B1.getDataAttributes(this._element),
                ..."object" == typeof t136 && t136 ? t136 : {
                }
            }, l1("toast", t136, this.constructor.DefaultType), t136;
        }
        _setListeners() {
            N1.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', ()=>this.hide()
            );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t137) {
            return this.each(function() {
                let e = b1.get(this, "bs.toast");
                if (e || (e = new Qe(this, "object" == typeof t137 && t137)), "string" == typeof t137) {
                    if (void 0 === e[t137]) throw new TypeError(`No method named "${t137}"`);
                    e[t137](this);
                }
            });
        }
    }
    return m1("toast", Qe), {
        Alert: P1,
        Button: I1,
        Carousel: Y1,
        Collapse: X1,
        Dropdown: _e,
        Modal: ye,
        Offcanvas: Oe,
        Popover: Fe,
        ScrollSpy: Ye,
        Tab: qe,
        Toast: Qe,
        Tooltip: Be
    };
}); //# sourceMappingURL=bootstrap.bundle.min.js.map

//# sourceMappingURL=index.08dab533.js.map
