/*!
 * github-buttons v2.21.1
 * (c) 2021 なつき
 * @license BSD-2-Clause
 */
! function () {
    "use strict";
    var e = window.document,
        o = e.location,
        t = window.Math,
        r = window.HTMLElement,
        a = window.XMLHttpRequest,
        n = "github-button",
        i = "https://buttons.github.io/buttons.html",
        c = "github.com",
        l = a && "prototype" in a && "withCredentials" in a.prototype,
        d = l && r && "attachShadow" in r.prototype && !("prototype" in r.prototype.attachShadow),
        s = function (e, o) {
            for (var t = 0, r = e.length; t < r; t++) o(e[t])
        },
        u = function (e) {
            return function (o, t, r) {
                var a = e.createElement(o);
                if (null != t)
                    for (var n in t) {
                        var i = t[n];
                        null != i && (null != a[n] ? a[n] = i : a.setAttribute(n, i))
                    }
                return null != r && s(r, (function (o) {
                    a.appendChild("string" == typeof o ? e.createTextNode(o) : o)
                })), a
            }
        },
        h = u(e),
        g = function (e) {
            var o;
            return function () {
                o || (o = 1, e.apply(this, arguments))
            }
        },
        f = function (e, o) {
            return {}.hasOwnProperty.call(e, o)
        },
        b = function (e) {
            return ("" + e).toLowerCase()
        },
        p = function (e, o, t, r) {
            null == o && (o = "&"), null == t && (t = "="), null == r && (r = window.decodeURIComponent);
            var a = {};
            return s(e.split(o), (function (e) {
                if ("" !== e) {
                    var o = e.split(t);
                    a[r(o[0])] = null != o[1] ? r(o.slice(1).join(t)) : void 0
                }
            })), a
        },
        m = function (e, o, t) {
            e.addEventListener ? e.addEventListener(o, t, !1) : e.attachEvent("on" + o, t)
        },
        v = function (e, o, t) {
            e.removeEventListener ? e.removeEventListener(o, t, !1) : e.detachEvent("on" + o, t)
        },
        w = function (e, o, t) {
            var r = function () {
                return v(e, o, r), t.apply(this, arguments)
            };
            m(e, o, r)
        },
        k = function (e, o, t) {
            if (null != e.readyState) {
                var r = "readystatechange",
                    a = function () {
                        if (o.test(e.readyState)) return v(e, r, a), t.apply(this, arguments)
                    };
                m(e, r, a)
            }
        },
        x = {
            light: ".btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd1;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(27,31,36,.15);box-shadow:inset 0 .15em .3em rgba(27,31,36,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,36,.15)}.social-count:focus,.social-count:hover{color:#0969da}.octicon-heart{color:#bf3989}",
            light_high_contrast: ".btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:focus,.btn:hover{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8);box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:focus,.social-count:hover{color:#0349b4}.octicon-heart{color:#971368}",
            dark: ".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#db61a2}",
            dark_dimmed: ".btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#c96198}",
            dark_high_contrast: ".btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:focus,.btn:hover{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:focus,.social-count:hover{color:#71b7ff}.octicon-heart{color:#ef6eb1}"
        },
        z = function (e, o) {
            return "@media(prefers-color-scheme:" + e + "){" + x[f(x, o) ? o : e] + "}"
        },
        y = {
            "comment-discussion": {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'
                    }
                }
            },
            download: {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'
                    }
                }
            },
            eye: {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'
                    }
                }
            },
            heart: {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'
                    }
                }
            },
            "issue-opened": {
                heights: {
                    16: {
                        width: 16,
                        path: '<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>'
                    }
                }
            },
            "mark-github": {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'
                    }
                }
            },
            package: {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'
                    }
                }
            },
            play: {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'
                    }
                }
            },
            "repo-forked": {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'
                    }
                }
            },
            "repo-template": {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'
                    }
                }
            },
            star: {
                heights: {
                    16: {
                        width: 16,
                        path: '<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'
                    }
                }
            }
        },
        C = function (e, o) {
            e = b(e).replace(/^octicon-/, ""), f(y, e) || (e = "mark-github");
            var t = o >= 24 && 24 in y[e].heights ? 24 : 16,
                r = y[e].heights[t];
            return '<svg viewBox="0 0 ' + r.width + " " + t + '" width="' + o * r.width / t + '" height="' + o + '" class="octicon octicon-' + e + '" aria-hidden="true">' + r.path + "</svg>"
        },
        M = {},
        A = function (e, o) {
            var t = M[e] || (M[e] = []);
            if (!(t.push(o) > 1)) {
                var r = g((function () {
                    for (delete M[e]; o = t.shift();) o.apply(null, arguments)
                }));
                if (l) {
                    var n = new a;
                    m(n, "abort", r), m(n, "error", r), m(n, "load", (function () {
                        var e;
                        try {
                            e = JSON.parse(this.responseText)
                        } catch (e) {
                            return void r(e)
                        }
                        r(200 !== this.status, e)
                    })), n.open("GET", e), n.send()
                } else {
                    var i = this || window;
                    i._ = function (e) {
                        i._ = null, r(200 !== e.meta.status, e.data)
                    };
                    var c = u(i.document)("script", {
                            async: !0,
                            src: e + (-1 !== e.indexOf("?") ? "&" : "?") + "callback=_"
                        }),
                        d = function () {
                            i._ && i._({
                                meta: {}
                            })
                        };
                    m(c, "load", d), m(c, "error", d), k(c, /de|m/, d), i.document.getElementsByTagName("head")[0].appendChild(c)
                }
            }
        },
        F = function (e, o, t) {
            var r = u(e.ownerDocument),
                a = e.appendChild(r("style", {
                    type: "text/css"
                })),
                n = "body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}" + function (e) {
                    if (null == e) return x.light;
                    if (f(x, e)) return x[e];
                    var o = p(e, ";", ":", (function (e) {
                        return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, "")
                    }));
                    return x[f(x, o["no-preference"]) ? o["no-preference"] : "light"] + z("light", o.light) + z("dark", o.dark)
                }(o["data-color-scheme"]);
            a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(e.ownerDocument.createTextNode(n));
            var i = "large" === b(o["data-size"]),
                l = r("a", {
                    className: "btn",
                    href: o.href,
                    rel: "noopener",
                    target: "_blank",
                    title: o.title || void 0,
                    "aria-label": o["aria-label"] || void 0,
                    innerHTML: C(o["data-icon"], i ? 16 : 14) + "&nbsp;"
                }, [r("span", {}, [o["data-text"] || ""])]),
                d = e.appendChild(r("div", {
                    className: "widget" + (i ? " widget-lg" : "")
                }, [l])),
                s = l.hostname.replace(/\.$/, "");
            if (("." + s).substring(s.length - c.length) !== "." + c) return l.removeAttribute("href"), void t(d);
            var h = (" /" + l.pathname).split(/\/+/);
            if (((s === c || s === "gist." + c) && "archive" === h[3] || s === c && "releases" === h[3] && ("download" === h[4] || "latest" === h[4] && "download" === h[5]) || s === "codeload." + c) && (l.target = "_top"), "true" === b(o["data-show-count"]) && s === c && "marketplace" !== h[1] && "sponsors" !== h[1] && "orgs" !== h[1] && "users" !== h[1] && "-" !== h[1]) {
                var g, m;
                if (!h[2] && h[1]) m = "followers", g = "?tab=followers";
                else if (!h[3] && h[2]) m = "stargazers_count", g = "/stargazers";
                else if (h[4] || "subscription" !== h[3])
                    if (h[4] || "fork" !== h[3]) {
                        if ("issues" !== h[3]) return void t(d);
                        m = "open_issues_count", g = "/issues"
                    } else m = "forks_count", g = "/network/members";
                else m = "subscribers_count", g = "/watchers";
                var v = h[2] ? "/repos/" + h[1] + "/" + h[2] : "/users/" + h[1];
                A.call(this, "https://api.github.com" + v, (function (e, o) {
                    if (!e) {
                        var a = o[m];
                        d.appendChild(r("a", {
                            className: "social-count",
                            href: o.html_url + g,
                            rel: "noopener",
                            target: "_blank",
                            "aria-label": a + " " + m.replace(/_count$/, "").replace("_", " ").slice(0, a < 2 ? -1 : void 0) + " on GitHub"
                        }, [("" + a).replace(/\B(?=(\d{3})+(?!\d))/g, ",")]))
                    }
                    t(d)
                }))
            } else t(d)
        },
        L = window.devicePixelRatio || 1,
        _ = function (e) {
            return (L > 1 ? t.ceil(t.round(e * L) / L * 2) / 2 : t.ceil(e)) || 0
        },
        E = function (e, o) {
            e.style.width = o[0] + "px", e.style.height = o[1] + "px"
        },
        G = function (o, r) {
            if (null != o && null != r)
                if (o.getAttribute && (o = function (e) {
                        var o = {
                            href: e.href,
                            title: e.title,
                            "aria-label": e.getAttribute("aria-label")
                        };
                        return s(["icon", "color-scheme", "text", "size", "show-count"], (function (t) {
                            var r = "data-" + t;
                            o[r] = e.getAttribute(r)
                        })), null == o["data-text"] && (o["data-text"] = e.textContent || e.innerText), o
                    }(o)), d) {
                    var a = h("span");
                    F(a.attachShadow({
                        mode: "closed"
                    }), o, (function () {
                        r(a)
                    }))
                } else {
                    var n = h("iframe", {
                        src: "javascript:0",
                        title: o.title || void 0,
                        allowtransparency: !0,
                        scrolling: "no",
                        frameBorder: 0
                    });
                    E(n, [0, 0]), n.style.border = "none";
                    var c = function () {
                        var a, l = n.contentWindow;
                        try {
                            a = l.document.body
                        } catch (o) {
                            return void e.body.appendChild(n.parentNode.removeChild(n))
                        }
                        v(n, "load", c), F.call(l, a, o, (function (e) {
                            var a = function (e) {
                                var o = e.offsetWidth,
                                    r = e.offsetHeight;
                                if (e.getBoundingClientRect) {
                                    var a = e.getBoundingClientRect();
                                    o = t.max(o, _(a.width)), r = t.max(r, _(a.height))
                                }
                                return [o, r]
                            }(e);
                            n.parentNode.removeChild(n), w(n, "load", (function () {
                                E(n, a)
                            })), n.src = i + "#" + (n.name = function (e, o, t, r) {
                                null == o && (o = "&"), null == t && (t = "="), null == r && (r = window.encodeURIComponent);
                                var a = [];
                                for (var n in e) {
                                    var i = e[n];
                                    null != i && a.push(r(n) + t + r(i))
                                }
                                return a.join(o)
                            }(o)), r(n)
                        }))
                    };
                    m(n, "load", c), e.body.appendChild(n)
                }
        };
    o.protocol + "//" + o.host + o.pathname === i ? F(e.body, p(window.name || o.hash.replace(/^#/, "")), (function () {})) : function (o) {
        if ("complete" === e.readyState || "loading" !== e.readyState && !e.documentElement.doScroll) setTimeout(o);
        else if (e.addEventListener) {
            var t = g(o);
            w(e, "DOMContentLoaded", t), w(window, "load", t)
        } else k(e, /m/, o)
    }((function () {
        var o, t = e.querySelectorAll ? e.querySelectorAll("a." + n) : (o = [], s(e.getElementsByTagName("a"), (function (e) {
            -1 !== (" " + e.className + " ").replace(/[ \t\n\f\r]+/g, " ").indexOf(" github-button ") && o.push(e)
        })), o);
        s(t, (function (e) {
            G(e, (function (o) {
                e.parentNode.replaceChild(o, e)
            }))
        }))
    }))
}();
