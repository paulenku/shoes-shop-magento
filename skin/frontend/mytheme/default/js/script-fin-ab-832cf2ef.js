function getCookie(e) {
    var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0
}
function setCookie(e, t, i) {
    i = i || {};
    var n = i.expires;
    if ("number" == typeof n && n) {
        var r = new Date;
        r.setTime(r.getTime() + 1e3 * n), n = i.expires = r
    }
    n && n.toUTCString && (i.expires = n.toUTCString()), t = encodeURIComponent(t);
    var o = e + "=" + t;
    for (var a in i) {
        o += "; " + a;
        var s = i[a];
        s !== !0 && (o += "=" + s)
    }
    document.cookie = o
}
function $$(e, t) {
    if (t || (t = e, e = document), !e)return [];
    for (var i = e.querySelectorAll(t), n = [], r = 0; r < i.length; r++)n.push(i[r]);
    return n.map(function (e) {
        return e.addEventListener || (e.addEventListener = attachEventPolyfill), e
    })
}
function $(e, t) {
    return $$(e, t)[0] || null
}
function makeRequest(e, t) {
    var i = e.method || "GET", n = e.params || {}, r = e.form, o = e.route;
    n.is_xhr = !0, r && (n = extractValuesFromForm(r, n), i = r.getAttribute("method"));
    var a = e.url || "/index.php?route=" + o;
    r && (a = r.getAttribute("action"));
    var s = [];
    for (var l in n)if (n.hasOwnProperty(l))if ("object" != typeof n[l])s.push(encodeURIComponent(l) + "=" + encodeURIComponent(n[l])); else for (var u in n[l])n[l].hasOwnProperty(u) && s.push(encodeURIComponent(l) + "[" + u + "]=" + encodeURIComponent(n[l][u]));
    s = s.join("&"), "GET" == i && (a += (a.match(/\?/) ? "&" : "?") + s, s = null);
    var c = new XMLHttpRequest;
    c.onreadystatechange = function () {
        4 == c.readyState && 200 == c.status && t && t(c)
    }, c.open(i, a, !0), c.setRequestHeader("X-Request-With", "XMLHttpRequest"), "POST" === i && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send(s)
}
function insertInnerHtml(e, t) {
    var i = document.createElement("div");
    i.innerHTML = t;
    var n = document.createDocumentFragment();
    [].slice.call(i.childNodes).forEach(function (e) {
        n.appendChild(e)
    }), e.innerHTML = "", e.appendChild && e.appendChild(n)
}
function closest(e, t) {
    for (var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; e;) {
        if (i.bind(e)(t))return e;
        e = e.parentElement
    }
    return !1
}
function get_css(e, t) {
    if (e) {
        var i = getComputedStyle(e);
        return i && i[t] || e.style[t]
    }
}
function isHidden(e) {
    var t = window.getComputedStyle(e);
    return "none" === t.display
}
function getUrlParameter(e) {
    for (var t = window.location.search.substring(1), i = t.split("&"), n = i.length - 1; n >= 0; n--) {
        var r = i[n].split("=");
        if (r[0] == e)return r[1]
    }
    return null
}
function paymentRadioRender() {
    jQuery(".payment__variants .input__label__radio").hide(), jQuery(".shipping__variants .input__label__radio input[type='radio']").each(function (e, t) {
        if (jQuery(t).get(0).checked) {
            var i = jQuery("input[name=payment]:checked").val();
            switch (jQuery(t).val()) {
                case"selftaking":
                    jQuery(".payment__variants input[value='PayAnyWay']").parent().show(), jQuery(".payment__variants input[value='delivery_pickup']").parent().show(), ("C.O.D" === i || "delivery" == i) && jQuery(".payment__variants input[value='delivery_pickup']").prop("checked", !0);
                    break;
                case"shoplogistics.courier":
                case"shoplogistics":
                    jQuery(".payment__variants input[value='PayAnyWay']").parent().show(), jQuery(".payment__variants input[value='delivery']").parent().show(), "shoplogistics.courier" == jQuery(t).val() && jQuery("input[value='delivery']").parent().find(".input__label__radio__cost").html("+&nbsp;" + jQuery("#rko_courier").val() + " РУБ."), ("C.O.D" === i || "delivery_pickup" == i) && jQuery(".payment__variants input[value='delivery']").prop("checked", !0);
                    break;
                case"postcalc":
                    jQuery(".payment__variants input[value='PayAnyWay']").parent().show(), jQuery(".payment__variants input[value='C.O.D']").parent().show(), jQuery("input[value='C.O.D']").parent().find(".input__label__radio__cost").html(Math.ceil(jQuery("#c_o_d").val()) + " РУБ."), ("delivery" === i || "delivery_pickup" == i) && jQuery(".payment__variants input[value='C.O.D']").prop("checked", !0);
                    break;
                default:
                    jQuery(".payment__variants input[value='delivery']").prop("checked", !0), jQuery(".payment__variants input[value='delivery']").parent().show()
            }
        }
    })
}
function recalcTotalOrder() {
    var e = jQuery(".store .checkout-data-form .checkout .submit-row .subrow-marg .notice .price"), t = 0, i = 0, n = 0;
    if ("deliveryShoplogistics" == jQuery(".shipping__variants label input[type='radio']:checked").parent().find(".priceCurrent").attr("id"))if (0 == jQuery(".shipping__variants label input[type='radio']:checked").parent().find(".priceCurrent").val())t = 0; else {
        var r = jQuery(".shipping__variants label input[type='radio']:checked").parent().find(".priceCurrent").find("option:selected");
        t = r.attr("data-cost"), jQuery(".shipping__variants input[value='shoplogistics']").is(":checked") && (jQuery(".radio__payment_methods input[value='delivery']").is(":checked") && (n = Math.ceil(r.attr("data-rko"))), r.attr("data-rko") > 0 && jQuery("input[value='delivery']").parent().find(".input__label__radio__cost").html("+&nbsp;" + Math.ceil(r.attr("data-rko")) + " РУБ."))
    } else t = jQuery(".shipping__variants label input[type='radio']:checked").parent().find(".priceCurrent").val();
    jQuery(".radio__payment_methods input[value='delivery']").is(":checked") && jQuery(".shipping__variants input[value='shoplogistics.courier']").is(":checked") && (n = parseInt(jQuery("#rko_courier").val())), i = parseInt(e.attr("data-total")) + parseInt(t) + parseInt(n), jQuery(".shipping__variants input[type='radio']").length > 0 ? e.html(i) : e.html(e.attr("data-total")), e.text().length <= 0 ? e.parent().css("opacity", 0) : e.parent().css("opacity", 1)
}
function collectionHas(e, t) {
    for (var i = 0, n = e.length; n > i; i++)if (e[i] == t)return !0;
    return !1
}
function findParentBySelector(e, t) {
    for (var i = document.querySelectorAll(t), n = e.parentNode; n && !collectionHas(i, n);)n = n.parentNode;
    return n
}
function fixValue(e, t) {
    var i = parseInt(e.value, 10);
    isNaN(i) && (i = 1), 0 >= i && (i = 1), i >= t && (i = t), e.value = i
}
function bindJoystick(e) {
    var t = 0 != jQuery(".total__cart__mount").length;
    jQuery(".joystick-block").each(function () {
        var e, i = null, n = 0, r = !1;
        if (t) {
            var o = jQuery(this).parent().parent().find(".total__cart__mount");
            n = parseInt(o.data("price"), 10), i = function () {
                var e = this, t = e.getVal();
                jQuery.post("/index.php?route=checkout/cart/update", {
                    product_id: e.getKey(),
                    quantity: t,
                    xhr: "is_xhr"
                }, function (e) {
                    void 0 != e.cart_total && (jQuery(".cart-totals .row .val .num").html(e.cart_total), jQuery(".tooltip__total__price__val").html(e.cart_total)), void 0 != e.products_in_cart && void 0 != e.products_in_cart_text && jQuery(".cart .page-header .total").html(e.products_in_cart + "&nbsp;" + e.products_in_cart_text + "&nbsp;на сумму&nbsp;" + e.cart_total + "&nbsp;РУБ."), jQuery(".store-header__right-menu__item__cart-counter").html(e.products_in_cart), void 0 != e.cart && jQuery.each(e.cart, function (e, t) {
                        jQuery('*[data-key="' + e + '"]').length > 0 && (jQuery('*[data-key="' + e + '"]').parent().parent().find(".cart-price.total__cart__mount").attr("data-price", t.price_formated.initial).html(t.total.replace(" " + t.price_formated.pref, "") + '&nbsp;<span class="crnc">' + t.price_formated.pref + "</span>"), jQuery('*[data-key="' + e + '"]').parent().parent().find(".cart-price.cart-price__grey").html("x" + jQuery('*[data-key="' + e + '"]').find("input").val() + "&nbsp;" + t.price_formated["final"] + '&nbsp;<span class="crnc">' + t.price_formated.pref + "</span>"), jQuery('.tooltip__product__key[value="' + e + '"]').parent().find(".tooltip__product__description__price-count").html(t.price_formated["final"] + '<span class="crnc">' + t.price_formated.pref + "</span><span>x</span>" + jQuery('*[data-key="' + e + '"]').find("input").val()), jQuery('.tooltip__product__key[value="' + e + '"]').parent().find(".tooltip__product__quantity").val(jQuery('*[data-key="' + e + '"]').find("input").val()), jQuery('*[data-key="' + e + '"]').find("input").val() > 1 ? jQuery('*[data-key="' + e + '"]').parent().parent().find(".cart-price.cart-price__grey").show() : jQuery('*[data-key="' + e + '"]').parent().parent().find(".cart-price.cart-price__grey").hide())
                    })
                })
            }
        } else {
            var a = jQuery(this).closest("form").find(".buy-form__price");
            n = parseInt(a.data("price"), 10), unDiscStr = a.data("price-undisc"), r = unDiscStr || !1, e = r ? parseInt(unDiscStr, 10) : n, i = function () {
                this.isDiscount ? (jQuery(".disco-final").html(this.getPrice() + ' <span class="crnc">РУБ.</span>'), jQuery(".disco-initial").html(this.getUndiscPrice() + ' <span class="crnc">РУБ.</span>')) : jQuery(".buy-form__price").html(this.getPrice() + ' <span class="crnc">РУБ.</span>'), this.elem.closest("form").find("input[name=quantity]").val(this.getVal() + "")
            }
        }
        new Joystick(this, n, $$(".product-options__label__radio"), i, r, e)
    })
}
function updateCart(e) {
    return
}
function findParentByTagName(e, t) {
    var i = e.parentNode;
    return i ? i.nodeName.toLowerCase() === t.toLowerCase() ? i : findParentByTagName(i, t) : null
}
function easeInOutQuad(e, t, i, n) {
    return e /= n / 2, 1 > e ? i / 2 * e * e + t : (e--, -i / 2 * (e * (e - 2) - 1) + t)
}
function getScrollableRoot() {
    var e = getBody(), t = e.scrollTop;
    return e.scrollTop++, e.scrollTop === t ? document.documentElement : (e.scrollTop--, e)
}
function scrollTo(e, t, i) {
    e === document.body && (e = getScrollableRoot());
    var n = e.scrollTop, r = t - n, o = 0, a = 20, s = function () {
        o += a;
        var t = easeInOutQuad(o, n, r, i);
        e.scrollTop = t, i > o && setTimeout(s, a)
    };
    s()
}
function makeJsonpRequest(e) {
    var t = e.params || {}, i = e.url, n = "shopcbJsonp_" + callbackUid++ + "_" + (new Date).getTime();
    window[n] = function (t) {
        e.callback(t);
        try {
            delete window[n]
        } catch (i) {
            window[n] = null
        }
    }, t.callback = n;
    for (var r in t)t.hasOwnProperty(r) && (i += "&" + r + "=" + encodeURIComponent(t[r]));
    var o = document.createElement("script");
    o.type = "text/javascript", o.src = i, document.body.appendChild(o)
}
function buildVariants(e, t, i) {
    return e.map(function (e) {
        var t, i = e.name;
        "Автономный округ" === e.type ? t = "autonomus" : "Область" === e.type ? (i += " область", t = "region") : "Город" === e.type ? (t = "city", i = "г. " + i) : "Республика" === e.type ? (i.match(/Республика/gi) || (i = "Республика " + i), t = "resp") : i = e.type + " " + i;
        var n = {id: e.id, name: e.name, "full-name": i, type: t, zip: e.zip, okato: e.okato}, r = {};
        return e.parents && e.parents.length && (r = e.parents.filter(function (e) {
                return "region" === e.contentType
            })[0] || {}), n["parent-id"] = r.id || 0, n["parent-type"] = r.contentType || "", n["parent-value"] = r.name || "", n["parent-full-name"] = (n["parent-value"] + " " + (r.type || "")).trim(), n
    }).map(function (e, i) {
        var n = [];
        for (var r in e)e.hasOwnProperty(r) && n.push("data-" + r + '="' + e[r] + '"');
        var o = e["full-name"], a = "";
        try {
            var s = new RegExp(t, "i"), l = o.match(s), u = l ? l.index : o.length
        } catch (c) {
            var l = {index: 0, 0: ""}, u = 0
        }
        a += o.slice(0, u), u !== o.length && (a += '<span class="address__autocomplete__item__highlight">' + l[0] + "</span>", a += o.slice(l.index + l[0].length)), e["parent-full-name"] && (a += ", " + e["parent-full-name"]);
        var d = "address__autocomplete__item";
        return 0 === i && (d += " address__autocomplete__item--selected"), '<div class="' + d + '" ' + n.join(" ") + ">" + a + "</div>"
    }).join("")
}
function isHovered(e) {
    return $(e.parentNode, ":hover") === e
}
function isClassOrHaveParentWithClass(e, t) {
    if (!e)return !1;
    if (!t)return !1;
    var i = hasClassName(e, t);
    return i ? !0 : e.parentNode === document || e.parentNode === document.documentElement ? !1 : e.parentNode ? isClassOrHaveParentWithClass(e.parentNode, t) : !1
}
function getDataAttrs(e) {
    return function (t) {
        return e.getAttribute("data-" + t)
    }
}
function extractValuesFromForm(e, t) {
    return $$(e, "input,select,textarea").filter(function (e) {
        var t = e.getAttribute("type");
        return "radio" === t || "checkbox" === t ? e.checked : !0
    }).forEach(function (e) {
        var i = e.value, n = e.getAttribute("name");
        t[n] = i
    }), t
}
function selectSelect(e, t, i) {
    var n = $(e, ".address__autocomplete__item--selected");
    if (setTimeout(function () {
            e.style.display = "none"
        }, 100), n) {
        var r = n.getAttribute("data-id"), o = n.getAttribute("data-full-name");
        n.getAttribute("data-parent-full-name").length > 0 && (o = o + ", " + n.getAttribute("data-parent-full-name"));
        var a = n.getAttribute("data-name");
        "street" === i && (o = n.innerText || n.textContent || "", a = n.innerText || n.textContent || ""), o = o.trim();
        var s = n.getAttribute("data-zip"), r = n.getAttribute("data-id");
        if ("city" === i) {
            var l = getDataAttrs(n), u = l("parent-value") || o, c = o + ", " + u;
            $(".region-field-class") && ($(".region-field-class").value = u), $(".city-index-field") && ($(".city-index-field").value = s), $(".kladr-field-class") && ($(".kladr-field-class").value = r), $("#cityfake") && ($("#cityfake").innerHTML = c), $(".city-change-label") && ($(".city-change-label").innerHTML = c), t.title = c
        }
        if (t.value = o, t.setAttribute("data-id", r), t.setAttribute("data-value-delivery", a), $(".city-field-class").value = a, "building" === i) {
            var d = $("input[name=postcode]");
            d && s && (d.value = s)
        }
        t.blur(), t.value.trim() && Events.trigger("complete:" + i + ":changed")
    }
}
function getPrevSibiling(e) {
    var t;
    return e ? (t = e.previousElementSibling ? e.previousElementSibling : e.previousSibling, t ? 3 !== t.nodeType ? t : getPrevSibiling(t) : null) : null
}
function getNextSibiling(e) {
    var t;
    return e ? (t = e.nextElementSibling ? e.nextElementSibling : e.nextSibling, t ? 3 !== t.nodeType ? t : getNextSibiling(t) : null) : null
}
function moveNextSelect(e) {
    var t = $(e, ".address__autocomplete__item--selected");
    if (t) {
        var i = getPrevSibiling(t);
        i || (i = $(e, ".address__autocomplete__item:last-of-type")), t.className = t.className.split("address__autocomplete__item--selected").map(function (e) {
            return e.trim()
        }).join(" "), i.className += " address__autocomplete__item--selected"
    }
}
function movePrevSelect(e) {
    var t = $(e, ".address__autocomplete__item--selected"), i = $(e, ".address__autocomplete__item--selected ~ .address__autocomplete__item");
    t && (i || (i = $(e, ".address__autocomplete__item:first-of-type")), t.className = t.className.split("address__autocomplete__item--selected").map(function (e) {
        return e.trim()
    }).join(" "), i.className += " address__autocomplete__item--selected")
}
function kladrApi(e, t) {
    var i = {key: "02b3e21b4877221b5526c721395f24eb1079e85f", token: "53281ccbdba5c7e458000029", limit: 10};
    for (var n in e)e.hasOwnProperty(n) && (i[n] = e[n]);
    makeJsonpRequest({url: "https://kladr-api.ru/api.php", params: i, callback: t})
}
function replaceShippingAdditional() {
    var e = $(".shipping-ads");
    if (e) {
        var t = $(".shipping-ads-new");
        t.innerHTML = e.innerHTML, e.innerHTML = ""
    }
}
function checkOrderData() {
    var e = $(".button__confirm");
    if (e) {
        var t = function () {
            var t = !0, i = $$(".visible-input .input__field--js");
            i.forEach(function (e) {
                e.value.trim() || (t = !1)
            }), $$(".radio__labels__select--shoplogistics").forEach(function (e) {
                $(".input__label__radio__input--no-options") && $(".input__label__radio__input--no-options").checked && "0" == e.value && (t = !1)
            }), $$('.input__label__radio__input--fixx[type="radio"]').length && !$$('.input__label__radio__input--fixx[type="radio"]:checked').length && (t = !1), 1 == t ? e.classList.remove("button__confirm--not-available") : 0 == t && e.classList.add("button__confirm--not-available")
        }, i = $$("input");
        i.forEach(function (e) {
            e.addEventListener("blur", t, !1)
        }, !1), $$(".input__label__radio, .radio__labels__select--shoplogistics").forEach(function (e) {
            e.addEventListener("change", t, !1)
        }, !1), t()
    }
}
function bindCityAutocomplete(e) {
    e = e || document;
    var t = ($(e, "input[name=region]"), $(e, ".address__autocomplete--region"), $(e, "input[id=city]")), i = $(e, ".address__autocomplete--city");
    t && i && bindAutocomplete(t, i, {contentType: "city"});
    var n = $("input[name=street]"), r = $(".address__autocomplete--street");
    n && bindAutocomplete(n, r, {contentType: "street"});
    var o = $("input[name=building]"), a = $(".address__autocomplete--building");
    o && bindAutocomplete(o, a, {contentType: "building"}, !0)
}
function getRegionId() {
    var e = $("input[name=region]");
    return e ? e.getAttribute("data-id") : null
}
function getCityId() {
    var e = $("input[id=city]");
    return e ? e.getAttribute("data-id") : null
}
function getStreetId() {
    var e = $("input[name=street]");
    return e ? e.getAttribute("data-id") : null
}
function hasClassName(e, t) {
    return e.className.split(" ").filter(function (e) {
            return e.trim() === t
        }).length > 0
}
function bindSelectOfShipping() {
    var e = "shipping__additional", t = "shipping__additional--selected", i = null;
    $$(".input__label__radio__input").forEach(function (e) {
        e.addEventListener("click", function (t) {
            if (i != t.target) {
                var n = $(".shipping__additional--selected");
                null != n && (n.className = "shipping__additional"), $$(".radio__labels__select").forEach(function (e) {
                    e.classList.remove("need-select");
                    var t = $('[data-id="' + e.value + '"]');
                    if (t)if (e.value = 0, "createEvent" in document) {
                        var i = document.createEvent("HTMLEvents");
                        i.initEvent("change", !1, !0), e.dispatchEvent(i)
                    } else e.fireEvent("onchange")
                }), i = t.target, $$(findParentByTagName(e, "label"), "select").forEach(function (e) {
                    e.classList.add("need-select"), e.focus()
                })
            }
        }, !1)
    }), $$(".radio__labels__select--shoplogistics").forEach(function (i) {
        var n = findParentByTagName(i, "label"), r = jQuery(".input__label__radio__p--estimate").get(0), o = jQuery(".label-for-shoplogistics .input__label__radio__cost").get(0), a = $(n, ".input__label__radio__input"), s = o.innerHTML, l = $(".input__label__radio__p--estimate").innerHTML;
        a.addEventListener("click", function (e) {
            e.target
        }, !1), i.addEventListener("change", function (n) {
            i.classList.remove("need-select");
            var u = $("." + t), c = $(i, '[value="' + i.value + '"]'), d = c.getAttribute("data-estimate"), p = c.getAttribute("data-cost");
            u && (u.className = e);
            var _ = $('[data-id="' + i.value + '"]');
            if (_ && (_.className += " " + t), bindSelectOfShipping.show_shl_info(i.value), 0 === Number(i.value))i.classList.add("need-select"), i.classList.add("input__field--wrong"), r.innerHTML = l, o.innerHTML = s; else {
                a.checked = !0;
                var h;
                if (h = 0 == d ? "рабочих дней" : d % 10 == 1 ? "рабочий день" : d % 10 == 2 || d % 10 == 3 || d % 10 == 4 ? "рабочих дня" : 11 == d || 12 == d || 13 == d ? "рабочих дней" : "рабочих дня", r.innerHTML = d + " " + h, o.innerHTML = p + " РУБ.", jQuery(a).hasClass("input__label__radio__input--no-options")) {
                    var m = jQuery(".shipping-input__fields");
                    m.removeClass("visible-input"), m.css("display", "none")
                }
                i.classList.remove("input__field--wrong")
            }
            if (_) {
                var f = $(_, ".shipping__additional__map");
                f.innerHTML = "";
                _.getAttribute("data-address")
            }
        }, !1)
    })
}
function paymentWarning() {
    var e = $(".radio__goes__warning");
    if (e) {
        var t = $(".payment__warning");
        t && e.addEventListener("click", function () {
            t.style.display = "block";
            var e = $(".radio__removes__warning");
            e.addEventListener("click", function () {
                t.style.display = "none"
            }, !1)
        }, !1)
    }
}
function bindAutocomplete(e, t, i, n) {
    if (e) {
        e.autocomplete = "off", jQuery(t).css("width", jQuery(e).innerWidth() + "px");
        try {
            e.setAttribute("autocomplete", "off")
        } catch (r) {
        }
        jQuery(e).on("focus", function (e) {
            isRussiaPicked() && (t.style.display = "block")
        }), jQuery(t).on("mousemove", function () {
            var e = "address__autocomplete__item", i = $(t, "." + e + ":hover"), n = $(t, "." + e + "--selected");
            i && i !== n && (n && (n.className = e), i.className += " address__autocomplete__item--selected")
        }), jQuery(t).on("mouseout", function () {
            isHovered(t) || document.activeElement === e || (t.style.display = "")
        }), jQuery(t).on("click", function (n) {
            isClassOrHaveParentWithClass(n.target, "address__autocomplete__item") && (selectSelect(t, e, i.contentType), e.blur())
        });
        var o = null, a = null, s = 0;
        jQuery(e).on("keypress", function (e) {
            if (isRussiaPicked()) {
                var t = e.which ? e.which : e.keyCode;
                return 13 === t ? (e.preventDefault(), e.stopPropagation && e.stopPropagation(), !1) : void 0
            }
        });
        var l = e.value;
        jQuery(e).on("keyup", function (n) {
            if (clearTimeout(a), isRussiaPicked()) {
                var r = n.which ? n.which : n.keyCode;
                return 40 === r ? (n.preventDefault(), n.stopPropagation && n.stopPropagation(), movePrevSelect(t), !1) : 38 === r ? (n.preventDefault(), n.stopPropagation && n.stopPropagation(), moveNextSelect(t), !1) : 13 === r ? (n.preventDefault(), n.stopPropagation && n.stopPropagation(), selectSelect(t, e, i.contentType), !1) : void(l.trim() !== e.value.trim() && (l = e.value, clearTimeout(o), o = setTimeout(function () {
                    e.removeAttribute("data-id");
                    var n = e.getAttribute("data-value") || "";
                    !e.value.match(n), s++;
                    var r = s, o = e.value || "";
                    o = o.split(cleanGeoRegExp).join("").trim();
                    var a = {
                        key: "02b3e21b4877221b5526c721395f24eb1079e85f",
                        token: "53281ccbdba5c7e458000029",
                        contentType: i.contentType,
                        limit: 10,
                        query: e.value.replace("ё", "е")
                    };
                    if ("city" === i.contentType && (a.withParent = 1), "street" === i.contentType) {
                        var l = getCityId();
                        if (!l)return;
                        a.cityId = l
                    }
                    if ("building" === i.contentType) {
                        var u = getStreetId();
                        if (!u)return;
                        a.streetId = u
                    }
                    makeJsonpRequest({
                        url: "https://kladr-api.ru/api.php", params: a, callback: function (e) {
                            if (r !== s)return void loadShippingOptions.cleanup();
                            if (!e.result || !e.result.length)return t.innerHTML = "", void loadShippingOptions.cleanup();
                            var i = buildVariants(e.result, o, e.searchContext);
                            t.style.display = "block", t.innerHTML = i
                        }
                    })
                }, 100)))
            }
        })
    }
}
function isRussiaPicked() {
    var e = $(".input__select--country");
    return e ? 176 == e.value : !0
}
function bindShippingHelpAutoComplete() {
    $$(".choose__city__label__block").forEach(function (e) {
        var t = $(e, ".address__autocomplete--delivery"), i = $(e, "input");
        bindAutocomplete(i, t, {contentType: "city"})
    })
}
function blockAdding(e) {
    e.preventDefault()
}
function hiddenBlockParameters(e, t) {
    var i = e.attr("style");
    e.css({position: "absolute", visibility: "hidden", display: "block"});
    var n = t(e);
    return e.attr("style", i ? i : ""), n
}
function postcodeOnlyNumbers() {
    jQuery("input[name=postcode]").bind("keypress change", function (e) {
        var t = jQuery(this);
        setTimeout(function () {
            t.val(t.val().replace(/\D+/g, ""))
        }, 20)
    })
}
function removeProductInCart() {
    var e = jQuery(".cart-delete__input");
    e.length > 0 && e.each(function (e, t) {
        var i = jQuery(t).parent().parent().unbind("submit").bind("submit", function () {
            return jQuery.post(i.attr("action"), i.serialize() + "&" + jQuery.param({xhr: !0}), function (e) {
                void 0 != e.total && (0 == e.total ? window.location.reload() : (jQuery(".cart-totals .row .val .num").html(e.total), jQuery(".tooltip__total__price__val").html(e.total), jQuery(".cart .page-header .total").html(e.products_in_cart + "&nbsp;" + e.products_in_cart_text + "&nbsp;на сумму&nbsp;" + e.total + "&nbsp;РУБ."), jQuery(".tooltip__product .cart-totals .row .val .num").html(e.total), jQuery(".store-header__right-menu__item__cart-counter").html(e.products_in_cart), jQuery(".cart .page-header .total").html(e.products_in_cart + "&nbsp;" + e.products_in_cart_text + "&nbsp;на сумму&nbsp;" + e.total + "&nbsp;РУБ."), i.parent().parent().remove(), jQuery('.tooltip__product__key[value="' + i.find('input[name="key"]').val() + '"]').parent().remove()))
            }), !1
        })
    })
}
function inputEmptyValidate() {
    jQuery(".input__field").each(function (e, t) {
        function i(e) {
            var t = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return t.test(e)
        }

        0 == e && 0 == jQuery(t).val().length && jQuery(t).focus(), jQuery(t).hasClass("input-for-telephone") && (jQuery(t).bind("focus change keydown keyup", function () {
            var e = jQuery(t).val().length;
            (0 == e || 1 == e) && jQuery(t).val("+7")
        }), jQuery(t).bind("keypress change", function (e) {
            var t = jQuery(this);
            setTimeout(function () {
                t.val(t.val().replace(/[^\+0-9]+/g, ""))
            }, 20)
        })), jQuery(t).is(".input-for-name, .input-for-telephone, .input-for-email, #city") && (jQuery(t).bind("focus", function () {
            jQuery(this).val().length > 0 && jQuery(this).removeClass("input__field--wrong empty"), jQuery(this).hasClass("input-for-email") && (i(jQuery(this).val()) ? jQuery(this).removeClass("input__field--wrong") : jQuery(this).addClass("input__field--wrong"))
        }), jQuery(t).bind("blur", function () {
            0 == jQuery(this).val().length && jQuery(this).addClass("input__field--wrong empty"), jQuery(this).hasClass("input-for-email") && (i(jQuery(this).val()) || jQuery(this).addClass("input__field--wrong"))
        }), jQuery(t).bind("change keydown keyup", function () {
            jQuery(this).val().length > 0 && (!jQuery(this).hasClass("empty") && 0 != jQuery(this).attr("data-value-delivery").length || "city" != jQuery(this).attr("id") || (console.log("autocomplete"), jQuery(this).attr("data-value-delivery", jQuery(this).val()), loadShippingOptions.request_shipping()), jQuery(this).removeClass("input__field--wrong empty")), jQuery(this).hasClass("input-for-email") && (i(jQuery(this).val()) ? jQuery(this).removeClass("input__field--wrong") : jQuery(this).addClass("input__field--wrong"))
        }))
    })
}
function deliveryEmptyValidate() {
    jQuery('*[name*="delivery"]').each(function (e, t) {
        jQuery(t).bind("change", function () {
            jQuery(t).is(":checked") && "shoplogistics" != jQuery(t).val() && jQuery(".label-for-shoplogistics select").removeClass("input__field--wrong")
        }), ["addr", "postcode"].indexOf(jQuery(t).attr("name")) && jQuery(".shipping-input__fields input").each(function (e, i) {
            jQuery(i).bind("focus", function () {
                jQuery(this).val().length > 0 && jQuery(t).is(":checked") && jQuery(this).removeClass("input__field--wrong empty")
            }), jQuery(i).bind("blur", function () {
                0 == jQuery(this).val().length && jQuery(t).is(":checked") && jQuery(this).addClass("input__field--wrong empty")
            }), jQuery(i).bind("change keydown keyup", function () {
                jQuery(this).val().length > 0 && jQuery(t).is(":checked") && jQuery(this).removeClass("input__field--wrong empty")
            })
        })
    })
}
function letsPlayNotification() {
    var e = $(".tattoomall-notification"), t = $(".tattoomall-notification__block__remove__link"), i = $(".store");
    t && e && t.addEventListener("click", function (n) {
        if (t.classList.contains("global-notice")) {
            var r = t.getAttribute("data-sha1");
            setCookie("global_notice_done", r, {expires: 1e8, path: "/"})
        } else setCookie("notification", "true", {expires: 1e8, path: "/"});
        n.preventDefault(), e.style.height = 0, i.style.marginTop = "0"
    }, !1)
}
function setAlreadyAdded(e, t) {
    var i = e.querySelector(".added"), n = jQuery(i).outerWidth(), r = e.querySelector(".added-container");
    t || jQuery(r).addClass("added-container--immediate-show"), r.style.width = n + "px", r.addEventListener("click", function (e) {
        location.href = "/cart"
    })
}
function addProduct(e) {
    e.preventDefault();
    var t = e.target, i = {product_id: e.target.product_id.value, quantity: e.target.quantity.value};
    addProduct.added[i.product_id] || (addProduct.added[i.product_id] = !0, setAlreadyAdded(t, !0), makeRequest({
        url: t.getAttribute("action"),
        method: "POST",
        params: {product_id: i.product_id, quantity: i.quantity}
    }, function (e) {
        "OK" == e.statusText && setTimeout(function () {
            makeRequest({url: "/index.php?route=module/cart/get_products"}, function (e) {
                CTooltip.update(e.responseText), CCart.updateCart(), CTooltip.show(), CTooltip.hideWithTimeout()
            })
        }, 0)
    }))
}
function setAlreadyAddedProductPage(e, t) {
    var i = document.querySelector(".buy-form__add-to-cart-form__added-container__button"), n = i.offsetWidth, r = e.querySelector(".buy-form__add-to-cart-form__added-container");
    t || jQuery(r).addClass("buy-form__add-to-cart-form__added-container--immediate-show"), r.style.width = n + "px", r.addEventListener("click", function (e) {
        location.href = "/cart"
    })
}
function addProductOnProductPage(e) {
    e.preventDefault(), e.stopPropagation();
    var t = e.target, i = {product_id: t.product_id.value, quantity: t.quantity.value};
    if (!addProductOnProductPage.added[i.product_id]) {
        if (addProductOnProductPage.added[i.product_id] = !0, setAlreadyAddedProductPage(t, !0), $$(".product-options__label__radio").length) {
            var n, r = {};
            $$(".product-options__label__radio").forEach(function (e) {
                if (1 == e.checked) {
                    r = e.value;
                    var t = new RegExp("^option\\[(\\d+)\\]", "g"), i = e.getAttribute("name");
                    n = t.exec(i)[1]
                }
            }, !1), i.option = {optionKey: n, optionValue: r}
        }
        $(".product-options__select") && (i.option = $(".product-options__select").value), makeRequest({
            url: t.getAttribute("action") + "&is_xhr=true",
            method: "POST",
            params: i
        }, function (e) {
            "OK" == e.statusText && setTimeout(function () {
                scrollTo(document.body, 0, 500), makeRequest({url: "/index.php?route=module/cart/get_products"}, function (e) {
                    CTooltip.update(e.responseText), CCart.updateCart(), CTooltip.show(), CTooltip.hideWithTimeout()
                })
            }, 500)
        })
    }
}
function writeStat(e, t) {
    makeRequest({params: {key: e, data: t || {}}, route: "stat/stat/write", method: "POST"}, function () {
    })
}
!function () {
    top.bug = function () {
        try {
            this.console.log.apply(this.console, arguments)
        } catch (e) {
        }
    }, top.noe = function (e) {
        return e && e.preventDefault(), e && e.stopPropagation(), !1
    }, function () {
        top.XMLHttpRequest || (top.XMLHttpRequest = function () {
            var e = null;
            try {
                e = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {
                try {
                    e = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {
                    bug("XMLHttpRequest init failed")
                }
            }
        })
    }(), jQuery(function () {
        CHeader.init(), ClassScreen.init(), CMenu.init(), CCategory.init(), CProduct.init(), CTab.init(), CCart.init(), CContact.init(), bindJoystick(), CSearch.init(), CWishlist.init(), CFOrder.init(), COHistory.init(), CRegSuccess.init(), MainContentResizer.exec(), COrder.init(), COrder.initPayment(), CTimer.init(), WysDescr.init(), CPShowMore.exec(), checkOrderData(), replaceShippingAdditional(), loadShippingOptions(), loadPaymentOptions(), bindCityAutocomplete(), fullOrder.init(), CHeader.process_scroll(), CategoryMenuRoller.init(), CTooltip.init(), Product.gallery.init(), ProductSlider.init(), ddTip.init(), postcodeOnlyNumbers(), writeUniqueStat();
        try {
            letsPlayNotification()
        } catch (e) {
            window.console && console.error && console.error(e)
        }
        jQuery(top).on("resize", function () {
            ClassScreen.init(), CProduct.init(), MainContentResizer.exec(), CHeader.process_scroll()
        }), jQuery(top).on("scroll", function () {
            CHeader.process_scroll()
        }), jQuery(".cat-sorter").each(function () {
            var e = jQuery(this);
            e.bind("change", function (t) {
                window.location.href = e.val()
            })
        }), jQuery(window).bind("mousedown", function (e) {
            jQuery(e.target).closest(".dd-tip").length || ddTip.hide_all()
        })
    });
    (function () {
        jQuery(".mobver").on("click", function () {
            var e = jQuery(this).data("href");
            return jQuery.get(e, function () {
                window.location.reload()
            }), !1
        })
    })()
}(), top.WysDescr = {}, WysDescr.init = function () {
    var e = $(".category-top__description .moar-row .moar-btn");
    if (e) {
        var t = e.parentNode.parentNode, i = 40, n = 8, r = $(".category-top__description .title"), o = $(".category-top__description .mini-wrap"), a = parseInt(get_css(t, "height")), s = parseInt(get_css(r, "height")) + parseInt(get_css(r, "padding-top")) + parseInt(get_css(r, "padding-bottom")) + parseInt(get_css(r, "margin-top")) + parseInt(get_css(r, "margin-bottom")) + parseInt(get_css(o, "height")) + parseInt(get_css(o, "padding-top")) + parseInt(get_css(o, "padding-bottom")) + parseInt(get_css(o, "margin-top")) + parseInt(get_css(o, "margin-bottom")) + 30, l = function () {
            for (var r = function (e) {
                setTimeout(function () {
                    console.log(e, a + (s - a) / i * e + "px"), t.style.height = a + (s - a) / i * e + "px"
                }, n * e)
            }, o = 0; i > o; ++o)r(o);
            setTimeout(function () {
                e.parentNode.parentNode.removeChild(e.parentNode)
            }, 500)
        };
        e.addEventListener("click", function (e) {
            noe(e), l()
        }), a + 50 >= s && (e.parentNode.parentNode.removeChild(e.parentNode), t.style.height = s + "px")
    }
};
var CategoryMenuRoller = {
    curInfo: {index: 0}, init: function () {
        CategoryMenuRoller.menu = $(".fixed-to-maxw.account-left-menu"), CategoryMenuRoller.menu && CategoryMenuRoller.hasMoar() && CategoryMenuRoller.initBtns()
    }, initBtns: function () {
        $(CategoryMenuRoller.menu, ".centered").className += "arrowed";
        var e = document.createElement("div");
        e.innerHTML = '<div class="left-arrow"></div>', CategoryMenuRoller.menu.appendChild(e);
        var t = document.createElement("div");
        t.innerHTML = '<div class="right-arrow"></div>', CategoryMenuRoller.menu.appendChild(t), e = $(CategoryMenuRoller.menu, ".left-arrow"), t = $(CategoryMenuRoller.menu, ".right-arrow");
        for (var i = $$(CategoryMenuRoller.menu, ".account-left-menu__item"), n = 0; n < i.length; ++n)i[n].style.width = parseInt(get_css(i[n], "width")) + "px", i[n].style.marginLeft = parseInt(get_css(i[n], "margin-left")) + "px";
        e.addEventListener("mousedown", function (n) {
            n && n.preventDefault(), CategoryMenuRoller.curInfo.index--, CategoryMenuRoller.curInfo.index < 0 && (CategoryMenuRoller.curInfo.index = 0);
            var r = i[CategoryMenuRoller.curInfo.index], o = parseInt(r.getAttribute("data-w")), a = parseInt(r.getAttribute("data-m"));
            o && (r.setAttribute("data-w", null), r.style.width = o + "px", r.style.marginLeft = a + "px"), e.style.display = CategoryMenuRoller.curInfo.index ? "block" : "none", t.style.display = "block"
        }), t.addEventListener("mousedown", function (n) {
            n && n.preventDefault();
            var r = i[CategoryMenuRoller.curInfo.index], o = parseInt(get_css(r, "width")), a = parseInt(get_css(r, "margin-left"));
            r.setAttribute("data-w", o), r.setAttribute("data-m", a), r.style.width = 0, r.style.marginLeft = 0, CategoryMenuRoller.curInfo.index++, CategoryMenuRoller.curInfo.index > i.length - 2 && (CategoryMenuRoller.curInfo.index = i.length - 2), e.style.display = "block", t.style.display = CategoryMenuRoller.curInfo.index + 6 >= i.length ? "none" : "block"
        }), e.style.display = "none"
    }, hasMoar: function () {
        var e = parseInt(get_css(CategoryMenuRoller.menu, "height")), t = parseInt(get_css($(CategoryMenuRoller.menu, ".centered"), "height"));
        return t > e + e / 2
    }, hasLessValue: !1, hasLess: function () {
        return CategoryMenuRoller.hasLess
    }
}, Events = {
    _events: {}, on: function (e, t) {
        this._events[e] || (this._events[e] = []), this._events[e].push(t)
    }, trigger: function (e) {
        if (this._events[e]) {
            var t = [].slice.call(arguments, 1), i = this._events[e].slice();
            setTimeout(function () {
                i.forEach(function (e) {
                    try {
                        e.apply(null, t)
                    } catch (i) {
                        window.console && console.log && console.log(i, i.stack)
                    }
                })
            }, 1)
        }
    }
}, trigger = function (e, t) {
    var i;
    document.createEvent ? (i = document.createEvent("HTMLEvents"), i.initEvent(t, !0, !0)) : (i = document.createEventObject(), i.eventType = t), i.eventName = t, document.createEvent ? e.dispatchEvent(i) : e.fireEvent("on" + i.eventType, i)
};
top.fullOrder = {
    init: function () {
        fullOrder.errors = [], fullOrder.form = $(".checkout-data-form"), fullOrder.form && (window.onbeforeunload = function (e) {
            if (!fullOrder.can_leave) {
                var e = e || window.event, t = "Вы собираетесь покинуть форму заказа\nЕсли вы уйдёте, Вы потеряете все несохранённые данные";
                return e && (e.returnValue = t), t
            }
        }, fullOrder.error_node = $("#fullOrderErrors"), fullOrder.error_node.addEventListener("click", function (e) {
            (!closest(e.target, ".shadow-content") || closest(e.target, ".x")) && (fullOrder.error_node.style.opacity = 0, setTimeout(function () {
                fullOrder.error_node.style.display = "none"
            }, 300))
        }, !1), fullOrder.bindFormCb(), fullOrder.bindSubmitAvail(), fullOrder.recalcSubmitAvail())
    }, bindFormCb: function () {
        fullOrder.form.onsubmit = function (e) {
            noe(e), fullOrder.recalcSubmitAvail(), fullOrder.errors.length ? (setTimeout(function () {
                fullOrder.toggleInputErrorHighlight(!0)
            }, 500), fullOrder.error_node.style.display = "block", fullOrder.error_node.style.opacity = 1, $("#fullOrderErrors .shadow-content .body").innerHTML = "<p>" + fullOrder.errors.join("</p><p>") + "</p>") : (fullOrder.can_leave = !0, jQuery(fullOrder.form).find(".button__confirm").attr("disabled", "disabled").parent().find(".loader").show(), fullOrder.form.submit())
        }
    }, bindPaymentInputs: function () {
        jQuery(".radio__payment_methods label input").each(function (e, t) {
            jQuery(t).bind("change", function () {
                recalcTotalOrder()
            })
        })
    }, bindShippingInputs: function () {
        $$(".shipping-input__fields label input").forEach(function (e) {
            for (var t = "blur focus keydown keyup keypress change paste drop delete cut insert".split(" "), i = !1, n = 0; n < t.length; ++n)e.addEventListener(t[n], function () {
                clearTimeout(i), i = setTimeout(function () {
                    fullOrder.recalcSubmitAvail()
                }, 100)
            }, !1)
        }), jQuery(".shipping__variants label input, .shipping__variants label select").each(function (e, t) {
            jQuery(t).bind("change", function () {
                "deliveryShoplogistics" == jQuery(t).attr("id") && (jQuery("input[name='shoplogisticsprice']").val(jQuery(t).find("option:selected").attr("data-cost")), jQuery(".radio__payment_methods .input__label__radio__cost").html(""), paymentRadioRender()), recalcTotalOrder()
            })
        }), $(".label-for-takeoff .input__label__radio__input") && $(".label-for-takeoff .input__label__radio__input").addEventListener("change", function () {
            $(".label-for-takeoff .input__label__radio__input:checked") && ($(".shipping-input__fields").style.display = "none", jQuery("input[value='C.O.D']").parent().hide(), jQuery("input[value='delivery']").parent().show(), $(".shipping-input__fields").classList.remove("visible-input"), $(".shipping__additional--selected") && $(".shipping__additional--selected").classList.remove("shipping__additional--selected"), jQuery("input[value='delivery']").parent().find(".input__label__radio__cost").html(""), paymentRadioRender(), recalcTotalOrder())
        }, !1), $(".label-for-shoplogistics .input__label__radio__input") && $(".label-for-shoplogistics .input__label__radio__input").addEventListener("change", function () {
            $(".label-for-shoplogistics .input__label__radio__input:checked") && ($(".shipping-input__fields").style.display = "none", jQuery("input[value='C.O.D']").parent().hide(), jQuery("input[value='delivery']").parent().show(), $(".shipping-input__fields").classList.remove("visible-input"), jQuery("input[value='delivery']").parent().find(".input__label__radio__cost").html(""), paymentRadioRender(), recalcTotalOrder())
        }, !1), $(".label-for-postcalc .input__label__radio__input") && $(".label-for-postcalc .input__label__radio__input").addEventListener("change", function () {
            $(".label-for-postcalc .input__label__radio__input:checked") && ($(".shipping-input__fields").style.display = "block", $(".shipping-input__fields").classList.add("visible-input"), jQuery(".shipping-input__fields").insertAfter(".label-for-postcalc"), jQuery(".shipping-input__fields input").each(function (e, t) {
                return 0 == jQuery(t).val().length ? (jQuery(t).focus(), !1) : void 0
            }), jQuery("input[value='C.O.D']").parent().find(".input__label__radio__cost").html(Math.ceil(jQuery("#c_o_d").val()) + " РУБ."), jQuery("input[value='delivery']").parent().hide(), jQuery("input[value='delivery']").parent().find(".input__label__radio__cost").html(""), paymentRadioRender(), recalcTotalOrder(), $(".shipping__additional--selected") && $(".shipping__additional--selected").classList.remove("shipping__additional--selected"))
        }, !1), $(".label-for-carrier .input__label__radio__input") && $(".label-for-carrier .input__label__radio__input").addEventListener("change", function () {
            $(".label-for-carrier .input__label__radio__input:checked") && ($(".shipping-input__fields").style.display = "block", $(".shipping-input__fields").classList.add("visible-input"), jQuery(".shipping-input__fields").insertAfter(".label-for-carrier"), jQuery(".shipping-input__fields input").each(function (e, t) {
                return 0 == jQuery(t).val().length ? (jQuery(t).focus(), !1) : void 0
            }), jQuery("input[value='C.O.D']").parent().hide(), jQuery("input[value='delivery']").parent().show(), jQuery("input[value='delivery']").parent().find(".input__label__radio__cost").html("+&nbsp;" + jQuery("#rko_courier").val() + " РУБ."), jQuery("input[value='delivery']").is(":checked") && recalcTotalOrder(), paymentRadioRender(), $(".shipping__additional--selected") && $(".shipping__additional--selected").classList.remove("shipping__additional--selected"))
        }, !1);
        var e = (getCookie("order_delivery_shoplogistics"), $("#deliveryShoplogistics"));
        jQuery(e).bind("click", function (e) {
            return noe(e)
        }), postcodeOnlyNumbers()
    }, bindSubmitAvail: function () {
        $$("input").forEach(function (e) {
            for (var t = "blur focus keydown keyup keypress change paste drop delete cut insert".split(" "), i = !1, n = 0; n < t.length; ++n)e.addEventListener(t[n], function () {
                clearTimeout(i), i = setTimeout(function () {
                    fullOrder.recalcSubmitAvail()
                }, 100)
            }, !1)
        })
    }, toggleInputErrorHighlight: function (e) {
        e && $$(".bad-input").forEach(function (e) {
            e.classList.add("input__field--wrong");
            var t = e.previousElementSibling;
            t && t.classList && t.classList.contains("input__label--warning") && t.parentNode.removeChild(t)
        })
    }, checkInput: function (e) {
        return e ? e.value.trim().length ? (e.classList.remove("bad-input"), !0) : (e.classList.add("bad-input"), !1) : !0
    }, recalcSubmitAvail: function () {
        fullOrder.errors = [], fullOrder.toggleInputErrorHighlight(!1);
        var e = fullOrder.checkInput($(".input-for-name"));
        e || fullOrder.errors.push("Вы не указали ФИО<br>(Фамилию Имя Отчество)");
        var e = fullOrder.checkInput($(".input-for-telephone"));
        e || fullOrder.errors.push("Вы не указали номер своего телефона");
        var e = fullOrder.checkInput($(".input-for-email"));
        e || fullOrder.errors.push("Вы не указали свой email"), $(".city-pick-block input.input-to-listen") && $(".city-pick-block input.input-to-listen").value.length ? $(".shipping__variants__loader") && !isHidden($(".shipping__variants__loader")) ? fullOrder.errors.push("Дождитесь загрузки данных о доставке") : $$(".shipping__variants .radio__labels .input__label__radio").length < 1 ? fullOrder.errors.push("Вы не выбрали город, в который мы могли бы доставить товар") : $(".shipping__variants .radio__labels .input__label__radio .input__label__radio__input:checked") || $("#no-delivery-manager") ? $(".radio__labels__select--shoplogistics.need-select") && $("#deliveryShoplogistics") && "0" == $("#deliveryShoplogistics").value && fullOrder.errors.push("Выберите пункт выдачи заказа") : fullOrder.errors.push("Вы не выбрали способ доставки") : fullOrder.errors.push("Вы не выбрали город");
        var t = $(".shipping__variants .radio__labels .input__label__radio .input__label__radio__input:checked");
        t && setCookie("order_delivery_mode", t.value, {expires: 1e8, path: "/"});
        $("#deliveryShoplogistics");
        if ($(".shipping-input__fields.visible-input")) {
            var e = fullOrder.checkInput($(".input-for-shipping-addr input"));
            e || fullOrder.errors.push("Вы не указали адрес")
        }
        !fullOrder.errors.length
    }
}, fullOrder.can_leave = !1;
var CPShowMore = {
    exec: function () {
        if ($(".product__tab__description__show-more")) {
            var e = $(".product__tab__description").scrollHeight;
            50 > e || e > 50 && $(".product__tab__description__show-more").classList.add("product__tab__description__show-more--active")
        }
    }
}, CTimer = {
    init: function () {
        var e = $$(".main-selection__counter");
        if (e.length) {
            var t = function (e) {
                e += "";
                for (var t = [], i = 0; i < e.length; ++i)t.push('<span class="main-selection__counter__item">' + e[i] + "</span>");
                return t.join("")
            }, i = function (e) {
                return e += "", '<span class="main-selection__counter__item__delimiter">' + e.replace(/\s/g, "&nbsp;") + "</span>"
            }, n = function (e) {
                return e += "", '<span class="main-selection__counter__item__txt">' + e.replace(/\s/g, "&nbsp;") + "</span>"
            };
            e.forEach(function (e) {
                function r() {
                    var r = Math.floor((new Date).getTime() / 1e3) - u, o = l - r, a = o;
                    if (0 >= a)return clearInterval(c), void(e.style.opacity = 0);
                    var s = Math.floor(a / 86400);
                    a -= 86400 * s;
                    var d = Math.floor(a / 3600);
                    a -= 3600 * d;
                    var p = Math.floor(a / 60);
                    a -= 60 * p;
                    var _ = a;
                    for (p += ""; p.length < 2;)p = "0" + p;
                    for (_ += ""; _.length < 2;)_ = "0" + _;
                    var h = "";
                    s && (h += t(s + "д") + n("	  ")), (s || d) && (h += t(d) + i(":")), h += t(p) + i(":") + t(_), e.innerHTML = h, e.style.opacity = 1
                }

                var o = parseInt(e.getAttribute("data-now")) || 0, a = parseInt(e.getAttribute("data-start")) || 0, s = parseInt(e.getAttribute("data-end")) || 0, l = s - o, u = Math.floor((new Date).getTime() / 1e3);
                if (o && a && s && !(a > o || 0 >= l)) {
                    var c;
                    r(), c = setInterval(r, 1e3)
                }
            }, !1)
        }
    }
}, getBody = function () {
    return document.documentElement && document.documentElement.scrollTop ? document.documentElement : document.body
}, CHeader = {
    init: function () {
        CHeader.header_small = $(".store-header__inner-page"), CHeader.header_big = $(".store-header"), CHeader.header_big_table = $(".store-header__table"), CHeader.header_menu = $(".store-menu"), CHeader.header_big_logo = $(".store-header__logo"), CHeader.max_top = parseInt(get_css($(".top-header"), "height")), CHeader.header_big_rotated = !1, CHeader.rotato_tmt = !1, CHeader.rotatoing = !1, CHeader.mini_logo_bgs = 30, CHeader.cart_icon = jQuery(".store-header__right-menu__item--cart"), CHeader.process_scroll()
    }, process_scroll: function (e) {
        var t, i, n = jQuery(document).scrollTop();
        CHeader.header_small ? (i = CHeader.mess_with_small(n), t = CHeader.header_small) : CHeader.header_big && (i = CHeader.mess_with_big(n), t = CHeader.header_big);
        var r = i + jQuery(t).outerHeight(), o = CHeader.cart_icon.offset().top + CHeader.cart_icon.height() - n;
        jQuery(menu).css("top", r - 22 + "px"), jQuery(".menu-bg-dark").css("top", i + "px"), jQuery(".tooltip").css("top", o + 15 + "px")
    }, mess_with_big: function (e) {
        var t = CHeader.header_big, i = (CHeader.header_menu, CHeader.max_top), n = i - e;
        0 > n && (n = 0), t.style.top = n + "px";
        var r = 70, o = 165, a = 165, s = Math.max(0, e - i), l = Math.max(r, Math.min(o, a - s / 2)), u = Math.max(200, 346 - s / 1.3);
        Math.max(-1, 47 - s / 4);
        return t.style.height = l + "px", CHeader.header_big_table.style.height = l + "px", CHeader.rotatoing || (CHeader.header_big_rotated ? CHeader.header_big_logo.style.backgroundSize = CHeader.mini_logo_bgs + "px" : CHeader.header_big_logo.style.backgroundSize = u + "px"), 200 != u || CHeader.header_big_rotated ? u > 200 && CHeader.header_big_rotated && (CHeader.rotato_tmt && clearTimeout(CHeader.rotato_tmt), CHeader.header_big_logo.classList.add("rotato"), CHeader.rotato_tmt = setTimeout(function () {
        }, 400)) : (CHeader.rotato_tmt && clearTimeout(CHeader.rotato_tmt), CHeader.rotato_tmt = setTimeout(function () {
        }, 400)), n
    }, mess_with_small: function (e) {
        var t = CHeader.header_small, i = (CHeader.header_menu, CHeader.max_top), n = i - e;
        jQuery(".menu-bg-dark");
        return 0 > n && (n = 0), t.style.top = n + "px", n
    }
}, MainContentResizer = {
    exec: function () {
        if ($(".store-footer")) {
            var e = window.innerHeight - (parseInt(get_css($(".top-header"), "height")) || 0) - (parseInt(get_css($(".store-header__inner-page"), "height")) || 0) - (parseInt(get_css($(".store-header"), "height")) || 0) - (parseInt(get_css($(".store-footer"), "height")) || 0);
            $(".store").style.minHeight = e + jQuery(".top-header").height() + jQuery(".store-header__inner-page").height() + 40 + "px", $(".store-footer").style.opacity = 1
        }
    }
}, CRegSuccess = {
    init: function () {
        var e = $(".home__reg-success");
        e && setTimeout(function () {
            e.classList.add("home__reg-success--active");
            var t = $(e, ".home__reg-success__closer");
            t.addEventListener("click", function () {
                e.classList.remove("home__reg-success--active");
                var t = new Date((new Date).getTime() + 26784e5);
                document.cookie = "subscribed=true; path=/; expires" + t.toUTCString()
            }, !1);
            var i = $(".home__reg-success__buttons__item");
            i.addEventListener("click", function (i) {
                i.preventDefault(), t.style.opacity = 0, makeRequest({
                    url: "/index.php?route=common/subscription/save",
                    method: "POST",
                    params: {email: i.target.getAttribute("data-email")}
                }, function (t) {
                    var i = new Date((new Date).getTime() + 31536e6);
                    document.cookie = "subscribed=true; path=/; expires" + i.toUTCString(), $(".home__reg-success__buttons").style.display = "none", $(".home__reg-success__text").innerHTML = "Спасибо!", setTimeout(function () {
                        e.classList.remove("home__reg-success--active"), setTimeout(function () {
                            e.style.display = "none"
                        }, 400)
                    }, 1500)
                })
            }, !1)
        }, 400)
    }
}, CMenu = {
    init: function () {
        CMenu.button = $(".store-header__menu"), CMenu.menu = $(".store-menu"), CMenu.closer = $(".menu-nav__heading"), CMenu.lines = $(".menu-nav__lines"), CMenu.recomendation = $(".menu-nav__recomendation"), CMenu.nav = $(".menu-nav"), CMenu.mouseOnMenu = !1, CMenu.closeTimeout = null, CMenu.animationDuration = 200, CMenu.mouseMovingRight = !1, CMenu.mouseMoveTimeout = null, CMenu.prevPos = null, CMenu.mousemoveCounter = 5, CMenu.angleMoveRight = Math.PI / 4, CMenu.chooseTimeout = null, jQuery(CMenu.button).on("mouseenter", CMenu.showMenuListener), jQuery(CMenu.button).on("mouseleave", function (e) {
            e.stopPropagation(), e.preventDefault(), CMenu.tryCloseMenu(500)
        }), jQuery(CMenu.menu).on("mouseenter", CMenu.mouseToMenu), jQuery(CMenu.menu).on("mouseleave", CMenu.mouseOffMenu), jQuery(CMenu.lines).on("mousemove", CMenu.checkMoveRight), CMenu.setSubCategoriesItem()
    }, mouseToMenu: function (e) {
        CMenu.mouseOnMenu = !0, CMenu.closeTimeout && clearTimeout(CMenu.closeTimeout), CMenu.closeTimeout = null
    }, mouseOffMenu: function (e) {
        CMenu.mouseOnMenu = !1, CMenu.tryCloseMenu(200)
    }, tryCloseMenu: function (e) {
        CMenu.closeTimeout = setTimeout(function () {
            CMenu.mouseOnMenu || CMenu.closeMenu()
        }, e)
    }, closeMenuListener: function (e) {
        e.stopPropagation(), e.preventDefault(), CMenu.closeMenu()
    }, closeMenu: function () {
        var e = CMenu.animationDuration, t = jQuery(".menu-bg-dark");
        CMenu.closeTimeout = null, jQuery(CMenu.menu).slideUp(e, function () {
            CMenu.menu.className = CMenu.menu.className.replace("store-menu--active", "")
        }), t.stop(!0, !1), t.animate({opacity: "0.0"}, e, "swing", function () {
            t.css("display", "none")
        })
    }, showMenuListener: function (e) {
        closest(e.target, "a") || (e.stopPropagation(), e.preventDefault(), CMenu.showMenu())
    }, showMenu: function () {
        var e = CMenu.animationDuration, t = jQuery(".menu-bg-dark");
        CMenu.closeTimeout && clearTimeout(CMenu.closeTimeout), CMenu.closeTimeout = null, jQuery(CMenu.menu).slideDown(e, function () {
            CMenu.menu.className += " store-menu--active"
        }), t.stop(!0, !1), t.css("display", "block"), t.animate({opacity: "0.5"}, e, "swing")
    }, checkMoveRight: function (e) {
        var t = CMenu.prevPos;
        if (e.preventDefault(), e.stopPropagation(), CMenu.mouseMovingRight = !1, CMenu.mousemoveCounter--, t) {
            var i = Math.atan2(-(e.pageY - t.y), e.pageX - t.x);
            -CMenu.angleMoveRight < i && i < CMenu.angleMoveRight && (CMenu.mouseMovingRight = !0)
        } else CMenu.mouseMovingRight = !0;
        0 == CMenu.mousemoveCounter && (CMenu.prevPos = {x: e.pageX, y: e.pageY}, CMenu.mousemoveCounter = 5)
    }, setSubCategoriesItem: function () {
        var e = $$(".menu-nav__line"), t = hiddenBlockParameters(jQuery(".store-menu"), function (e) {
            return e.find(".menu-nav__lines").innerHeight()
        });
        e.forEach(function (e) {
            var i = "true" == e.getAttribute("data-has-children"), n = e.getAttribute("data-menu-id"), r = $("#menu-nav__subcategories_" + (i ? n : "empty")), o = function () {
                jQuery(".menu-nav__line").removeClass("menu-nav__line--selected"), jQuery(e).addClass("menu-nav__line--selected"), document.querySelector(".menu-nav__subcategories--visible") && (document.querySelector(".menu-nav__subcategories--visible").className = document.querySelector(".menu-nav__subcategories--visible").className.replace("menu-nav__subcategories--visible", "")), r && (r.style.height = t + "px", r.className += " menu-nav__subcategories--visible")
            };
            jQuery(e).on("mouseenter", function () {
                jQuery(r).find("div").length <= 0 && "ontouchstart" in document.documentElement && (window.location.href = jQuery(e).find("a.menu-nav__link").attr("href")), CMenu.chooseTimeout && clearTimeout(CMenu.chooseTimeout), CMenu.mouseMovingRight ? CMenu.chooseTimeout = setTimeout(function () {
                    o(), CMenu.chooseTimeout = null
                }, 150) : o()
            })
        }, !1), jQuery(CMenu.lines).on("mouseleave", function (e) {
            CMenu.chooseTimeout && (clearTimeout(CMenu.chooseTimeout), CMenu.chooseTimeout = null)
        })
    }
}, CCategory = {
    init: function () {
        if (CCategory.top = document.querySelector(".category-top"), CCategory.top) {
            new Loader(function (e) {
                var t = window.location.href, i = getUrlParameter("page");
                return i ? t = t.replace(/page=[0-9]+/i, "page=" + e) : t += (t.indexOf("?") > -1 ? "&" : "?") + "page=" + e, t += (t.indexOf("?") > -1 ? "&" : "?") + "is_xhr=true"
            }, 1200)
        }
    }
}, CProduct = {
    init: function () {
        CProduct.gallery = document.querySelector(".product-gallery"), CProduct.gallery && (CProduct.mainImage = CProduct.gallery.querySelector(".product-gallery__main-image"), CProduct.mainImage && (CProduct.width = ClassScreen.getScreenWidth(), CProduct.sizeTheGallery(), CProduct.initializeGallery()))
    }, initializeGallery: function () {
        var e = $(".product-gallery__main-image"), t = $$(".product-gallery__icons__image");
        t.forEach(function (i) {
            i.addEventListener("click", function (n) {
                n.preventDefault();
                var r = i.getAttribute("data-big");
                e.style.backgroundImage = "url(" + r.toString() + ")", t.forEach(function (e) {
                    e.classList.remove("product-gallery__icons__image--active")
                }, !1), i.classList.add("product-gallery__icons__image--active")
            }, !1)
        }, !1)
    }, sizeTheGallery: function () {
        CProduct.gallery.style.height = Math.floor(CProduct.width / 2) - 87 + "px", CProduct.mainImage.style.width = Math.floor(CProduct.width / 2) - 117 + "px", CProduct.mainImage.style.height = Math.floor(CProduct.width / 2) - 117 + "px"
    }
}, ClassScreen = {
    init: function (e) {
        ClassScreen.width = ClassScreen.getScreenWidth(), ClassScreen.menu || (ClassScreen.pr_titles = jQuery(".grids__item .product .product__text__inner"), ClassScreen.menu = $(".store-menu"), jQuery(".store").addClass("store--active")), ClassScreen.setDimensionsToProducts(), ClassScreen.setDimensionsToMenu(), ClassScreen.width == ClassScreen.getScreenWidth() || e || ClassScreen.init(!0)
    }, getScreenWidth: function () {
        return Math.min(Math.max(960, document.body.offsetWidth), 2400)
    }, setDimensionsToProducts: function () {
        var e = Math.floor(ClassScreen.width / 2), t = (Math.floor(ClassScreen.width / 2) / 2, Math.floor(e / 2)), i = e - t, n = i / 13, r = 1.2 * n, o = Math.max(i / 25, 13), a = Math.max(i / 23, 14);
        ClassScreen.pr_titles.each(function () {
            var e = jQuery(this);
            console.log(e.find(".product__text__model")), e.find(".product__text__model").css({"font-size": o + "px"}), e.find(".product__text__name").css({
                "font-size": n + "px",
                "line-height": r + "px",
                "max-height": 3 * r + "px"
            }), e.find(".product__text__price").css({"font-size": a + "px"})
        })
    }, setDimensionsToMenu: function () {
        var e = (jQuery(ClassScreen.menu).width(), jQuery(".menu-nav").find(".menu-nav__arrow-up")), t = e.outerWidth(), i = jQuery(".store-header__menu__icon"), n = i.offset(), r = i.width();
        e.css("left", n.left + .5 * r - .5 * t + "px"), jQuery(".menu-nav-wrap-inner").css("margin-left", Math.max(n.left - 30, 0) + "px");
        var o = jQuery(".store-header__right-menu__item--cart").offset().left, a = jQuery(".tooltip");
        a.css("left", Math.min(o - 235, ClassScreen.width - a.outerWidth()) + "px")
    }
}, COrder = {
    init: function () {
        $(".shipping__variants") && ($(".city-pick-block input").value || ($(".shipping__variants__loader").style.display = "none", fullOrder.bindShippingInputs(), fullOrder.bindPaymentInputs()))
    }, initPayment: function () {
        $(".payment__variants") && ($(".payment__variants__loader").style.display = "none", fullOrder.bindShippingInputs(), fullOrder.bindPaymentInputs())
    }
}, CTab = {
    init: function () {
        CTab.links = [].slice.call(document.querySelectorAll(".product__tabs__links__item")), CTab.tabs = [].slice.call(document.querySelectorAll(".product__tab")), CTab.links.forEach(function (e) {
            e.addEventListener("click", CTab.changeTab, !1)
        }, !1), CTab.showMore = document.querySelector(".product__tab__description__show-more"), CTab.showMore && (CTab.description = document.querySelector(".product__tab__description"), CTab.showMore.addEventListener("click", CTab.showFullDescription, !1))
    }, changeTab: function (e) {
        e.preventDefault();
        var t = e.target.getAttribute("data-tab-link");
        CTab.tabs.forEach(function (i) {
            i.classList.remove("product__tab--active");
            var n = i.getAttribute("data-tab");
            n == t && i.classList.add("product__tab--active"), CTab.links.forEach(function (e) {
                e.classList.remove("product__tabs__links__item--active")
            }), e.target.classList.add("product__tabs__links__item--active")
        }, !1)
    }, showFullDescription: function () {
        CTab.description.classList.add("product__tab__description--full"), CTab.showMore.style.display = "none"
    }
}, CAddToCart = {
    init: function () {
        CAddToCart.allButtons = [].slice.call(document.querySelectorAll(".add-to-cart"))
    }
}, CCart = {
    init: function () {
        CCart.fastOrderCaller = document.querySelector(".cart-link__fast-order"), CCart.fastOrderCaller && (CCart.fastOrder = document.querySelector(".cart__pop-up"), CCart.fastOrderCaller.addEventListener("click", CCart.showFastOrder, !1))
    }, showFastOrder: function () {
        CCart.fastOrder.classList.add("cart__pop-up--active"), document.body.style.overflow = "hidden";
        var e = CCart.fastOrder.querySelector(".cart__pop-up__body__remover");
        e.addEventListener("click", CCart.closeFastOrder, !1)
    }, closeFastOrder: function () {
        CCart.fastOrder.classList.remove("cart__pop-up--active"), document.body.style.overflow = ""
    }, updateCart: function () {
        $(".cart") && makeRequest({method: "GET", url: "/index.php?route=checkout/cart/update"}, function (e) {
            insertInnerHtml($(".store"), e.responseText), bindJoystick(), CCart.init()
        })
    }
}, CContact = {
    init: function () {
        CContact.blocks = $$(".question-block"), CContact.blocks.length && CContact.blocks.forEach(function (e) {
            var t = $(e, ".question-block__question");
            t.addEventListener("click", function (t) {
                t.preventDefault();
                var i = $(e, ".question-block__answer");
                "initial" == i.style.height ? i.style.height = "0px" : i.style.height = "initial"
            }, !1)
        }, !1)
    }
}, CSearch = {
    init: function () {
        if (CSearch.block = $(".search-block"), CSearch.block) {
            new Loader(function (e) {
                return "/search?search=" + getUrlParameter("search") + "&page=" + e + "&is_xhr=true"
            })
        }
    }, showSearch: function () {
        $(".store-header__search").classList.contains("store-header__search--active") ? (CSearch.search.style.display = "none", CSearch.closeSearchActions(), CSearch.search.classList.remove("store-header__search--active"), setTimeout(function () {
        }, 200)) : (CSearch.search.classList.add("store-header__search--active"), setTimeout(function () {
            CSearch.search.style.display = "block", CSearch.initSearch()
        }, 200))
    }, initSearch: function () {
        $(".store-header__search__input").focus(), $(".store-header__search__input").addEventListener("keyup", function () {
            if ($(".store-header__search__input").value.trim() || CSearch.closeSearchActions(), $(".store-header__search__input").value.toString()) {
                var e = $(".store-header__search__input").value.toString();
                makeRequest({url: "/search?search=" + e}, function (t) {
                    return CSearch.prepareToInsertResult(), "" == t.responseText ? ($(".store-header__search__results__empty__query").innerHTML = e, void($(".store-header__search__results__empty").style.display = "block")) : ($(".store-header__search__results__empty__query").innerHTML = "", $(".store-header__search__results__empty").style.display = "none", insertInnerHtml($(".store-header__search__results"), t.responseText), void ClassScreen.init(!0))
                })
            }
        }, !1)
    }, headerHeight: function () {
        var e = $(".top-header") ? $(".top-header").offsetHeight : 0, t = $(".store-header") ? $(".store-header").offsetHeight : 0, i = $(".store-header__inner-page") ? $(".store-header__inner-page").offsetHeight : 0;
        return e + t + i
    }, prepareToInsertResult: function () {
        $(".store-header__search__results").innerHTML = "", $(".grids").style.opacity = ".1", document.body.style.overflow = "hidden", $(".store-header__search__results").style.overflow = "auto";
        var e = CSearch.headerHeight();
        $(".store-header__search__results").style.height = window.innerHeight - e - 50 + "px"
    }, closeSearchActions: function () {
        $(".store-header__search__input").value = "", $(".store-header__search__input").blur(), document.body.style.overflow = "", $(".store-header__search__results__empty__query").innerHTML = "", $(".store-header__search__results__empty").style.display = "none", $(".store-header__search__results").innerHTML = "", $(".store-header__search__results").style.height = "initial", $(".grids").style.opacity = "1"
    }
}, CWishlist = {
    init: function () {
        CWishlist.removeForms = $$(".delete-from-wishlist"), CWishlist.removeForms.length && CWishlist.removeForms.forEach(function (e) {
            e.addEventListener("submit", function (t) {
                t.preventDefault(), makeRequest({
                    url: t.target.getAttribute("action") + "&is_xhr=true",
                    method: "POST",
                    params: {product_id: t.target.product_id.value.toString()}
                }, function (t) {
                    t = JSON.parse(t.response), "true" == t.success && (findParentBySelector(e, "tr").parentNode.removeChild(findParentBySelector(e, "tr")), $$(".delete-from-wishlist").length || ($(".account__table").parentNode.removeChild($(".account__table")), $(".account__order-page__empty").style.display = "block"))
                })
            }, !1)
        }, !1)
    }
}, CFOrder = {
    init: function () {
        CFOrder.fastForm = $(".cart__pop-up__body__form__fields"), CFOrder.fastForm && CFOrder.fastForm.addEventListener("submit", function (e) {
            e.preventDefault(), $(".cart__pop-up__body__remover").style.display = "none", $(".fast-order-button").style.display = "none", $(".cart__pop-up__body__form__fields__submit-block__loader").classList.add("cart__pop-up__body__form__fields__submit-block__loader--active"), makeRequest({
                method: "POST",
                url: e.target.getAttribute("action") + "&xhr=true",
                params: {telephone: e.target.telephone.value.toString(), email: e.target.email.value.toString()}
            }, function (e) {
                var t = JSON.parse(e.response);
                if (t.error) {
                    if ($(".cart__pop-up__body__remover").style.display = "block", $(".fast-order-button").style.display = "block", $(".cart__pop-up__body__form__fields__submit-block__loader").classList.remove("cart__pop-up__body__form__fields__submit-block__loader--active"), "phone" == t.error)return $$(".cart__pop-up__body__form__fields__input")[1].classList.remove("checkout-error"), $$(".cart__pop-up__body__form__fields__input")[0].classList.add("checkout-error"), $(".cart__pop-up__body__error").innerHTML = "Номер телефона введен неверно.", void($(".cart__pop-up__body__error").style.display = "block");
                    if ("email" == t.error)return $$(".cart__pop-up__body__form__fields__input")[0].classList.remove("checkout-error"), $$(".cart__pop-up__body__form__fields__input")[1].classList.add("checkout-error"), $(".cart__pop-up__body__error").innerHTML = "E-mail введен неверно.", void($(".cart__pop-up__body__error").style.display = "block")
                }
                if (t.order_id) {
                    var i = $(".cart__pop-up__success");
                    $(".order_id").innerHTML = t.order_id;
                    var n = $(".cart__pop-up__form");
                    n.style.opacity = 0, $(".cart__pop-up__body").style.paddingBottom = "20px", n.style.display = "none", i.style.display = "block", setTimeout(function () {
                        i.style.opacity = 1
                    }, 200)
                }
            })
        }, !1)
    }
}, COHistory = {
    init: function () {
        var e = $$(".account__order-table__order-link"), t = $$(".results");
        e.length && e.forEach(function (e, i) {
            e.parentNode.parentNode.addEventListener("click", function (n) {
                n && n.preventDefault(), n && n.stopPropagation();
                var r = t[i], o = $(r, ".results__container");
                return e.classList.contains("account__order-table__order-link--active") ? (r.classList.remove("results--active"), e.classList.remove("account__order-table__order-link--full-active"), o.innerHTML = "", void setTimeout(function () {
                    e.classList.remove("account__order-table__order-link--active")
                }, 200)) : (e.classList.add("account__order-table__order-link--active"), void makeRequest({url: "/index.php?route=account/order/info&order_id=" + e.getAttribute("data-id")}, function (t) {
                    var i = t.response;
                    o.innerHTML = i, setTimeout(function () {
                        r.classList.add("results--active"), e.classList.add("account__order-table__order-link--full-active")
                    }, 200)
                }))
            }, !1)
        }, !1)
    }
}, cleanGeoRegExp = /улица|республика|АО|автономный округ|область|проспект|переулок|тупик|шоссе|набережная/gi, callbackUid = 0;
top.loadShippingOptions = function () {
    loadShippingOptions.inp = $(".city-pick-block .input-to-listen"), loadShippingOptions.result_block = $(".shipping__variants .results"), loadShippingOptions.loader = $(".shipping__variants__loader"), loadShippingOptions.inp_index = $(".city-index-field"), loadShippingOptions.inp_region = $(".region-field-class"), loadShippingOptions.inp_kladr = $(".kladr-field-class"), loadShippingOptions.prev_query = "", loadShippingOptions.inp && (loadShippingOptions.inp.addEventListener("autocomplete", function (e) {
        loadShippingOptions.inp.setAttribute("data-value-delivery", loadShippingOptions.inp.value), loadShippingOptions.request_shipping()
    }), loadShippingOptions.inp.addEventListener("blur", function (e) {
        ("block" == jQuery(".address__autocomplete--city").css("display") || 0 == loadShippingOptions.inp.value.length) && (0 == loadShippingOptions.inp.value.length && loadShippingOptions.cleanup(), jQuery(".address__autocomplete__item").eq(0).click(), $(".address__autocomplete--city").style.display = "none", loadShippingOptions.request_shipping())
    }), jQuery(loadShippingOptions.inp).keydown(function (e) {
        13 == e.keyCode && loadShippingOptions.inp.value.length > 0 && (console.log("enter" + loadShippingOptions.inp.value), setTimeout(function () {
            loadShippingOptions.request_shipping()
        }, 300))
    }), loadShippingOptions.request_shipping(1))
}, loadShippingOptions.cleanup = function () {
    loadShippingOptions.inp.setAttribute("data-value-delivery", loadShippingOptions.inp.value), loadShippingOptions.inp_index.value = "", loadShippingOptions.inp_region.value = "", loadShippingOptions.inp_kladr.value = loadShippingOptions.inp.value
}, loadShippingOptions.get_v = function () {
    return loadShippingOptions.inp.getAttribute("data-value-delivery").replace(/^[\s\n]+/, "").replace(/[\s\n]+$/, "")
}, loadShippingOptions.get_v_kladr = function () {
    return loadShippingOptions.inp.value.replace(/^[\s\n]+/, "").replace(/[\s\n]+$/, "")
}, loadShippingOptions.request_shipping = function (e) {
    var t = loadShippingOptions.get_v(), e = e || null;
    if (t.length > 0) {
        loadShippingOptions.prev_query = t;
        var i = function () {
            loadShippingOptions.loader.style.display = "block";
            var e = "/?route=ordering/delivery";
            e += "&city=" + loadShippingOptions.get_v(), e += "&city_kladr=" + loadShippingOptions.get_v_kladr(), e += "&index=" + loadShippingOptions.inp_index.value, e += "&region=" + loadShippingOptions.inp_region.value, e += "&kladr_code=" + loadShippingOptions.inp_kladr.value, e += jQuery(".shipping__variants .check_code").length > 0 ? "&" + jQuery(".shipping__variants .check_code").attr("name") + "=" + jQuery(".shipping__variants .check_code").val() : "&" + jQuery(".check_code").attr("name") + "=" + jQuery(".check_code").val(), loadShippingOptions.result_block.innerHTML = "", jQuery(".store .checkout-data-form .checkout .submit-row .subrow-marg .notice .price").html(jQuery(".store .checkout-data-form .checkout .submit-row .subrow-marg .notice .price").attr("data-total")), jQuery(".radio__payment_methods input[value='delivery']").parent().find(".input__label__radio__cost").html(""), loadShippingOptions.inp.setAttribute("disabled", "disabled"), loadShippingOptions.request_shipping.tmt && clearTimeout(loadShippingOptions.request_shipping.tmt), loadShippingOptions.request_shipping.tmt = setTimeout(function () {
                alert("Возникла ошибка при получении данных о доставке")
            }, 12e3), makeRequest({method: "GET", url: e}, function (e) {
                loadShippingOptions.result_block.parentNode.classList.add("active"), loadShippingOptions.request_shipping.tmt && clearTimeout(loadShippingOptions.request_shipping.tmt), loadShippingOptions.loader.style.display = "none", loadShippingOptions.result_block.innerHTML = e.responseText;
                var t = jQuery('.shipping__variants input[type="radio"]:checked');
                ["shoplogistics.courier", "postcalc"].indexOf(t.val()) > -1 && (t.parent().after(jQuery(".shipping-input__fields").show()), jQuery(".shipping-input__fields input").each(function (e, t) {
                    return 0 == jQuery(t).val().length ? (jQuery(t).focus(), !1) : void 0
                })), 0 == ["shoplogistics.courier"].indexOf(t.val()) && (jQuery(".radio__payment_methods input[value='delivery']").parent().find(".input__label__radio__cost").html("+&nbsp;" + jQuery("#rko_courier").val() + " РУБ."), jQuery(".radio__payment_methods input[value='delivery']").is(":checked") && jQuery(".store .checkout-data-form .checkout .submit-row .subrow-marg .notice .price").html(parseInt(jQuery(".store .checkout-data-form .checkout .submit-row .subrow-marg .notice .price").html()) + parseInt(jQuery("#rko_courier").val()))), top.loadPaymentOptions.request_payment(), recalcTotalOrder(), loadShippingOptions.inp.removeAttribute("disabled"), bindSelectOfShipping(), replaceShippingAdditional(), deliveryEmptyValidate(), fullOrder.bindShippingInputs()
            })
        };
        (loadShippingOptions.inp.value != loadShippingOptions.inp.getAttribute("data-change") || 1 == e) && (console.log(loadShippingOptions.inp.value), console.log(loadShippingOptions.inp.getAttribute("data-change")), loadShippingOptions.inp.setAttribute("data-change", loadShippingOptions.inp.value), i())
    }
}, top.loadPaymentOptions = function () {
    document.getElementsByClassName("payment__variants").length > 0 && (loadPaymentOptions.loader = $(".payment__variants__loader"),
        loadPaymentOptions.result_block = $(".payment__variants .results"), loadPaymentOptions.prev_query = "")
}, loadPaymentOptions.request_payment = function () {
    var e = function () {
        loadPaymentOptions.loader.style.display = "block", loadPaymentOptions.result_block.innerHTML = "", loadPaymentOptions.result_block.parentNode.classList.remove("active");
        var e = "/?route=ordering/payment&is_xhr=true";
        loadPaymentOptions.request_payment.tmt && clearTimeout(loadPaymentOptions.request_payment.tmt), loadPaymentOptions.request_payment.tmt = setTimeout(function () {
            alert("Возникла ошибка при получении данных об оплате")
        }, 12e3), makeRequest({method: "GET", url: e}, function (e) {
            loadPaymentOptions.result_block.parentNode.classList.add("active"), loadPaymentOptions.request_payment.tmt && clearTimeout(loadPaymentOptions.request_payment.tmt), loadPaymentOptions.loader.style.display = "none", loadPaymentOptions.result_block.innerHTML = e.responseText, fullOrder.bindPaymentInputs(), paymentRadioRender()
        })
    };
    e()
}, bindSelectOfShipping.show_shl_info = function (e) {
    0 === Number(e) ? jQuery("#shl-ext-info").hide() : jQuery("#shl-ext-info").html(jQuery('.shipping-ads-new .shipping__additional[data-id="' + e + '"]').html()).show()
};
var makeRequest = window.top.makeRequest;
removeProductInCart(), inputEmptyValidate();
var CTooltip = {
    init: function () {
        var e = jQuery(".tooltip"), t = jQuery(".store-header__right-menu__item--cart");
        CTooltip.tooltip = e, CTooltip.hideTimeout = null, CTooltip.stdTimeoutTime = 2e3, CTooltip.visible = !1, CTooltip.contents = jQuery(".tooltip__contents"), CTooltip.productKeys = [], CTooltip.productIds = [], CTooltip.productCount = 0, e.mouseenter(function () {
            CTooltip.cancelHide()
        }), e.mouseleave(function () {
            CTooltip.hideWithTimeout(400)
        }), t.mouseenter(function () {
            CTooltip.show()
        }), t.mouseleave(function () {
            CTooltip.hideWithTimeout(400)
        }), CTooltip.initProducts(), CTooltip.getProductKeysAndIds(), jQuery(".add-to-cart-form").each(function () {
            var e = jQuery(this).find("input[name=product_id]").val();
            CTooltip.productIds.indexOf(e) >= 0 && (addProduct.added[e] = !0, setAlreadyAdded(this))
        }), jQuery(".buy-form__add-to-cart-form").each(function () {
            var e = jQuery(this).find("input[name=product_id]").val();
            CTooltip.productIds.indexOf(e) >= 0 && (addProductOnProductPage.added[e] = !0, setAlreadyAddedProductPage(this))
        })
    }, initProducts: function () {
        var e = jQuery(".tooltip__products").width();
        jQuery(".tooltip__product").css("width", e + "px")
    }, remove: function (e) {
        var t = jQuery(e).parent(), i = t.find(".tooltip__product__key").val(), n = t.find(".tooltip__product__id").val(), r = t.find(".tooltip__product__quantity").val(), o = (t.find(".tooltip__product__description__name").text().trim(), '<a class="tooltip__product__description__restore" href="#">Вернуть в корзину</a>'), a = t.html();
        jQuery.post("/index.php?route=checkout/cart/remove", {key: i, is_xhr: !0}, function (e, s, l) {
            if (0 == e.total)window.location.reload(); else {
                t.addClass("removed"), jQuery(".cart-totals .row .val .num").length > 0 && (jQuery(".cart-totals .row .val .num").html(e.total), jQuery('*[data-key="' + i + '"]').parent().parent().hide(), jQuery(".cart .page-header .total").html(e.products_in_cart + "&nbsp;" + e.products_in_cart_text + "&nbsp;на сумму&nbsp;" + e.total + "&nbsp;РУБ.")), t.find(".tooltip__product__photo").animate({opacity: "0.5"}, 200), t.find(".tooltip__product__description__model").text("Товар"), t.find(".tooltip__product__description__price-count").text("убран из корзины"), t.find(".tooltip__product__description").append(o), t.find(".tooltip__product__remove").remove(), CTooltip.setProductCounter(), CTooltip.recalculatePrice(), CTooltip.setContentsSize();
                var u = t.find(".tooltip__product__description__restore");
                u.click(function (e) {
                    var o = {
                        product_id: n,
                        quantity: r
                    }, s = t.find(".tooltip__product__option"), l = t.find(".tooltip__product__opt-val");
                    s.length && (s.val(), o.option = {
                        optionKey: s.val(),
                        optionValue: l.val()
                    }), e.preventDefault(), jQuery.post("/index.php?route=checkout/cart/add", jQuery.extend(o, {xhr: !0}), function (e, t, i) {
                        jQuery(".cart .page-header .total").html(e.products_in_cart + "&nbsp;" + e.products_in_cart_text + "&nbsp;на сумму&nbsp;" + e.total + "&nbsp;РУБ."), jQuery(".cart-totals .row .val .num").html(e.total), jQuery(".tooltip__total__price__val").html(e.total)
                    }), t.html(a), t.removeClass("removed"), jQuery('*[data-key="' + i + '"]').parent().parent().show(), CTooltip.setProductCounter(), CTooltip.recalculatePrice(), CTooltip.setContentsSize()
                })
            }
        })
    }, update: function (e) {
        var t = CTooltip.contents;
        t.html(e);
        var i = CTooltip.productKeys;
        CTooltip.getProductKeysAndIds();
        for (var n = CTooltip.productKeys, r = null, o = 0; o < n.length; o++)if (i.indexOf(n[o]) < 0) {
            r = n[o];
            break
        }
        if (r) {
            console.log("new");
            var a = t.find(".tooltip__product__key[value='" + r + "']").parent();
            a.addClass("tooltip__product__just-added"), setTimeout(function () {
                a.addClass("tooltip__product__just-added-fade"), CTooltip.setContentsSize()
            }, 10)
        }
        CTooltip.initProducts(), CTooltip.setProductCounter(), CTooltip.recalculatePrice()
    }, show: function () {
        if (CTooltip.cancelHide(), !CTooltip.visible) {
            setTimeout(function () {
                CTooltip.setContentsSize(), CTooltip.visible = !0
            }, 10);
            var e = CTooltip.tooltip;
            e.stop(!1, !0), e.css({
                opacity: "0",
                display: "block",
                top: "-=10px"
            }), CTooltip.initProducts(), e.animate({opacity: "1", top: "+=10px"}, 200)
        }
    }, hide: function () {
        CTooltip.visible = !1;
        var e = CTooltip.tooltip;
        e.stop(!1, !0), e.animate({opacity: "0"}, 200, function () {
            e.css({display: "none"})
        })
    }, hideWithTimeout: function (e) {
        var e = e || CTooltip.stdTimeoutTime;
        CTooltip.hideTimeout && clearTimeout(CTooltip.hideTimeout), CTooltip.hideTimeout = setTimeout(CTooltip.hide, e)
    }, cancelHide: function () {
        CTooltip.hideTimeout && (clearTimeout(CTooltip.hideTimeout), CTooltip.hideTimeout = null)
    }, getProductKeysAndIds: function () {
        var e = CTooltip.contents;
        CTooltip.productKeys = [], CTooltip.productIds = [], CTooltip.productCount = 0, jQuery(e).find(".tooltip__product").each(function () {
            var e = jQuery(this);
            e.hasClass("removed") || (CTooltip.productKeys.push(e.find(".tooltip__product__key").val()), CTooltip.productIds.push(e.find(".tooltip__product__id").val()), CTooltip.productCount += parseInt(e.find(".tooltip__product__quantity").val(), 10))
        })
    }, setProductCounter: function () {
        CTooltip.getProductKeysAndIds();
        var e = CTooltip.productCount, t = jQuery(".store-header__right-menu__item__cart-counter");
        t.length || (jQuery(".store-header__right-menu__item--cart").append('<span class="store-header__right-menu__item__cart-counter"></span>'), t = jQuery(".store-header__right-menu__item__cart-counter")), e > 0 ? e > 99 ? t.text("99+") : t.text(e) : t.remove(), jQuery(".tooltip__heading__in-cart__count").text(CTooltip.productCountText(e))
    }, setContentsSize: function () {
        var e = jQuery(".tooltip__products-wrap"), t = e.find(".tooltip__product"), i = 0;
        t.each(function (e) {
            3 > e && (i += jQuery(this).outerHeight())
        });
        var n = i - 30;
        CTooltip.visible ? e.animate({height: n + "px"}, 200) : e.css("height", n + "px")
    }, recalculatePrice: function () {
        var e = CTooltip.contents, t = jQuery(".tooltip__total"), i = jQuery(".tooltip__to-cart"), n = jQuery(".tooltip__products-wrap"), r = 0, o = 0;
        e.find(".tooltip__product").each(function () {
            jQuery(this).hasClass("removed") || (o++, r += parseInt(jQuery(this).find(".tooltip__product__total").val(), 10))
        }), jQuery(".tooltip__total__price__val").text(r), jQuery(".cart-totals .row .val .num").html(r), 0 == o ? (t.slideUp(200), n.css("border", "0")) : (t.slideDown(200), n.css("border", "")), 1e3 > r ? i.slideUp(200) : i.slideDown(200)
    }, productCountText: function (e) {
        if (0 == e)return "Корзина пуста";
        var t, i = e % 10;
        return t = e >= 10 && 19 >= e ? e + " товаров" : 1 == i ? e + " товар" : 2 == i || 3 == i || 4 == i ? e + " товара" : e + " товаров", "В корзине " + t
    }
}, Joystick = function () {
    function e(e, t, i, n, r, o) {
        if (r = r || !1, o = (r ? o : t) || t, this.elem = jQuery(e), "true" !== this.elem.data("bound")) {
            this.elem.data("bound", "true"), this.optionElems = jQuery(i || null), this.plus = this.elem.find(".joystick__button__plus"), this.minus = this.elem.find(".joystick__button__minus"), this.input = this.elem.find(".joystick__input"), this.onChange = n, this.price = t || 0, this.prevVal = this.getVal(), this.highestValue = 999, this.isDiscount = r, this.unDiscPrice = o;
            var a = this;
            this.plus.click(function (e) {
                a.setVal(a.getVal() + 1)
            }), this.plus.mousedown(function (e) {
                e.preventDefault()
            }), this.minus.click(function (e) {
                a.setVal(a.getVal() - 1)
            }), this.minus.mousedown(function (e) {
                e.preventDefault()
            }), this.optionElems.change(function (e) {
                a.update()
            }), this.input.keydown(function (e) {
                13 == e.keyCode && jQuery(this).trigger("blur")
            }), this.input.blur(function () {
                a.update()
            }), this.update()
        }
    }

    return e.prototype.setVal = function (e) {
        var t = this.price;
        1 > e && (e = 1);
        var i = this, n = 1;
        this.optionElems.each(function () {
            this.checked && (n = parseInt(jQuery(this).data("quantity"), 10), i.price = jQuery(this).data("price"), i.isDiscount && (i.unDiscPrice = parseInt(jQuery(this).data("price-undisc"), 10)))
        });
        var r = parseInt(this.elem.data("quantity"), 10);
        e * n > r && (e = Math.floor(r / n)), e > this.highestValue && (e = this.highestValue), this.input.val(e + "");
        var o = "joystick__button--enabled";
        (this.prevVal != e || this.price != t) && this.onChange && this.onChange(this.elem), this.prevVal = e, (e + 1) * n > r || e >= this.highestValue ? this.plus.removeClass(o) : this.plus.hasClass(o) || this.plus.addClass(o), 1 == e ? this.minus.removeClass(o) : this.minus.hasClass(o) || this.minus.addClass(o)
    }, e.prototype.getVal = function (e) {
        var e = parseInt(this.input.val(), 10);
        return isNaN(e) && (e = 0), e
    }, e.prototype.update = function () {
        this.setVal(this.getVal())
    }, e.prototype.getId = function () {
        return this.elem.data("id")
    }, e.prototype.getKey = function () {
        return this.elem.data("key")
    }, e.prototype.getPrice = function () {
        return this.getVal() * this.price
    }, e.prototype.getUndiscPrice = function () {
        return this.getVal() * this.unDiscPrice
    }, e
}(), Loader = function () {
    function e(e, t, i) {
        this.startLoadPx = t || 900, this.startedLoading = !1, this.lastLoadedPage = parseInt(getUrlParameter("page") || "1", 10), this.reachedBottom = !1, this.nextPage = null, this.showOnPreload = !1, this.pageAddressGenerator = e, this.container = i || jQuery(".grids");
        var n = this;
        top.addEventListener("scroll", function (e) {
            n.scrolledToBottom(e)
        }, !1), this.preload()
    }

    return e.prototype.load = function (e) {
        if (!this.startedLoading && !this.reachedBottom) {
            var t = this;
            this.startedLoading = !0, jQuery.get(t.pageAddressGenerator(t.lastLoadedPage + 1), function (i, n, r) {
                t.startedLoading = !1, t.lastLoadedPage++, e(i, n, r)
            }, "html").fail(function () {
                t.startedLoading = !1
            })
        }
    }, e.prototype.preload = function () {
        var e = this;
        this.load(function (t, i, n) {
            e.showOnPreload ? (e.pageLoaded(t, i, n), e.nextPage = null, e.showOnPreload = !1, e.preload()) : e.nextPage = t
        })
    }, e.prototype.pageLoaded = function (e, t, i) {
        0 == e.replace(/\s/g, "").length && (this.reachedBottom = !0, jQuery(".load-more").css("display", "none")), this.container.append(e)
    }, e.prototype.scrolledToBottom = function (e) {
        var t = jQuery(document).scrollTop();
        jQuery(document).height() - jQuery(window).height() - t < this.startLoadPx && (null !== this.nextPage ? (this.pageLoaded(this.nextPage), this.nextPage = null, this.showOnPreload = !1, this.preload()) : this.showOnPreload = !0)
    }, e
}();
top.Order = {}, Order.city = {}, Order.city.kladr = {
    url: "http://kladr-api.ru/api.php",
    token: "54cf19347c52399a5c8b456b"
}, top.Product = {}, Product.gallery = {}, Product.gallery.init = function () {
    var e = jQuery(".product-top .photos .main-photo"), t = jQuery(".product-top .photos .sub-photos .photoblock"), i = e.find(".img1"), n = e.find(".img2");
    if (t.length) {
        e.css("cursor", "pointer");
        var r = function (r) {
            if (!r.hasClass("active")) {
                n.length || (jQuery(new Image).addClass("img2").appendTo(e), n = e.find(".img2"));
                var o, a;
                i.hasClass("active") ? (o = i, a = n) : (o = n, a = i), o.removeClass("active").stop(1, 0).css({opacity: 1}), a.stop(1, 0).css({opacity: 0}).attr("src", r.data("big")).addClass("active").animate({opacity: 1}, 600), t.removeClass("active"), r.addClass("active")
            }
        };
        t.each(function () {
            var e = jQuery(this);
            e.bind("mousedown", function (t) {
                return t.button ? noe(t) : (noe(t), void r(e))
            })
        }), e.bind("mousedown", function (e) {
            if (e.button)return noe(e);
            noe(e);
            var i = jQuery(".product-top .photos .sub-photos .photoblock.active"), n = i.next();
            n.length || (n = jQuery(t[0])), r(n)
        })
    }
}, top.ProductSlider = {}, ProductSlider.init = function () {
    jQuery(".product-slider.fresh").each(function () {
        var e = jQuery(this), t = e.find(".list-limit .list"), i = e.find(".arrows"), n = i.find(".btn-l"), r = i.find(".btn-r");
        e.removeClass("fresh");
        var o = t.find(".product__no-float");
        if (o.length) {
            var a = 0, s = jQuery(o[0]), l = s.outerWidth() + parseInt(s.css("margin-left")) + parseInt(s.css("margin-right")), u = Math.ceil(parseInt(e.find(".list").width()) / l), c = o.length * l, d = Math.ceil(o.length / u) - 1, p = !!(o.length % u);
            t.width(c), d > a && r.removeClass("disabled"), r.bind("mousedown", function (e) {
                if (e.button)return noe(e);
                if (noe(e), !r.hasClass("disabled")) {
                    a++, n.removeClass("disabled"), a >= d && r.addClass("disabled");
                    var i = -(a * u * l);
                    a == d && p && (i = -c + u * l), t.css("left", i);
                    var s, _, h;
                    for (s = 0; u > s; ++s)_ = jQuery(o[s + a * u]), _.length && !_.hasClass("shown") && (h = _.find(".image"), _.addClass("shown"), h.css("background-image", "url('" + h.data("image") + "')"))
                }
            }), n.bind("mousedown", function (e) {
                if (e.button)return noe(e);
                if (noe(e), !n.hasClass("disabled")) {
                    a--, r.removeClass("disabled"), 0 >= a && n.addClass("disabled");
                    var i = -(a * u * l);
                    t.css("left", i)
                }
            })
        }
    })
}, addProduct.added = [], addProductOnProductPage.added = [], top.ddTip = {}, ddTip.init = function () {
    jQuery(".dd-tip").each(function () {
        var e = jQuery(this);
        if (!e.data("inited")) {
            e.data("inited", 1);
            var t, i = e.parent();
            i.bind("mouseover", function () {
                i.data("tmt") && (clearTimeout(i.data("tmt")), i.data("tmt", null)), clearTimeout(t), jQuery(".dd-tip.cur").find(".itxt:focus").length && jQuery(".dd-tip.cur").removeClass("cur").parent().removeClass("active menuvis"), i.addClass("active menuvis"), e.addClass("cur")
            }).bind("mouseout", function () {
                i.data("tmt") && (clearTimeout(i.data("tmt")), i.data("tmt", null)), clearTimeout(t), e.find(".itxt:focus").length || (i.removeClass("menuvis"), e.removeClass("cur"), t = setTimeout(function () {
                    i.removeClass("active")
                }, 300))
            })
        }
    })
}, ddTip.hide_all = function () {
    jQuery(".dd-tip").each(function () {
        var e = jQuery(this), t = e.parent();
        t.removeClass("menuvis");
        var i = setTimeout(function () {
            t.removeClass("active")
        }, 300);
        t.data("tmt", i)
    })
}, function () {
    isInitial = !0, window.writeUniqueStat = function (e) {
        try {
            var t = {};
            if (e)t.url = e; else if (isInitial) {
                var i = document.location.search.split(/\?|&/g).filter(function (e) {
                    return !!e
                }).filter(function (e) {
                    return "re" === e.split("=")[0]
                }).pop();
                t.url = document.location.href.split(/^http(s?):\/\/[^\/]+/g).pop(), i ? t.re = i.split("=").pop() : t.re = "", isInitial = !1
            }
            t.re || (t.re = ""), makeRequest({params: t, route: "stat/stat/writeUnique", method: "POST"}, function () {
            })
        } catch (n) {
        }
    }
}();