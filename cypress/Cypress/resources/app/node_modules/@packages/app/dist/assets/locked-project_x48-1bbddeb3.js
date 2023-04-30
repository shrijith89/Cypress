import { o as openBlock, U as createElementBlock, B as createBaseVNode, bp as commonjsGlobal, a as computed, e as unref, br as createStaticVNode } from "./index-e70bedc5.js";
const _hoisted_1$2 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 12H6V10H3V12ZM6 12H13V10H6V12ZM10.2361 6H13V4H10.2361V6ZM6.89443 11.4472L9.34164 6.55279L7.55279 5.65836L5.10557 10.5528L6.89443 11.4472ZM14 5V7C15.1046 7 16 6.10457 16 5H14ZM14 5H12C12 6.10457 12.8954 7 14 7V5ZM14 5V3C12.8954 3 12 3.89543 12 5H14ZM14 5H16C16 3.89543 15.1046 3 14 3V5ZM14 11V13C15.1046 13 16 12.1046 16 11H14ZM14 11H12C12 12.1046 12.8954 13 14 13V11ZM14 11V9C12.8954 9 12 9.89543 12 11H14ZM14 11H16C16 9.89543 15.1046 9 14 9V11ZM2 11V13C3.10457 13 4 12.1046 4 11H2ZM2 11H0C0 12.1046 0.89543 13 2 13V11ZM2 11V9C0.89543 9 0 9.89543 0 11H2ZM2 11H4C4 9.89543 3.10457 9 2 9V11ZM10.2361 4C9.09975 4 8.06096 4.64201 7.55279 5.65836L9.34164 6.55279C9.51103 6.214 9.8573 6 10.2361 6V4Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
}
const __unplugin_components_0 = { name: "cy-tech-branch-h_x16", render: render$2 };
var dayjs_minExports = {};
var dayjs_min = {
  get exports() {
    return dayjs_minExports;
  },
  set exports(v) {
    dayjs_minExports = v;
  }
};
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = "millisecond", e = "second", n = "minute", r = "hour", i = "day", s = "week", u = "month", a = "quarter", o = "year", f = "date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, $ = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, l = { s: $, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + $(r2, 2, "0") + ":" + $(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, u), s2 = n2 - i2 < 0, a2 = e2.clone().add(r2 + (s2 ? -1 : 1), u);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - a2 : a2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(h2) {
      return { M: u, y: o, w: s, d: i, D: f, h: r, m: n, s: e, ms: t, Q: a }[h2] || String(h2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, y = "en", M = {};
    M[y] = d;
    var m = function(t2) {
      return t2 instanceof S;
    }, D = function(t2, e2, n2) {
      var r2;
      if (!t2)
        return y;
      if ("string" == typeof t2)
        M[t2] && (r2 = t2), e2 && (M[t2] = e2, r2 = t2);
      else {
        var i2 = t2.name;
        M[i2] = t2, r2 = i2;
      }
      return !n2 && r2 && (y = r2), r2 || !n2 && y;
    }, v = function(t2, e2) {
      if (m(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new S(n2);
    }, g = l;
    g.l = D, g.i = m, g.w = function(t2, e2) {
      return v(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var S = function() {
      function d2(t2) {
        this.$L = D(t2.locale, null, true), this.parse(t2);
      }
      var $2 = d2.prototype;
      return $2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return new Date(NaN);
          if (g.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match(h);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, $2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, $2.$utils = function() {
        return g;
      }, $2.isValid = function() {
        return !("Invalid Date" === this.$d.toString());
      }, $2.isSame = function(t2, e2) {
        var n2 = v(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, $2.isAfter = function(t2, e2) {
        return v(t2) < this.startOf(e2);
      }, $2.isBefore = function(t2, e2) {
        return this.endOf(e2) < v(t2);
      }, $2.$g = function(t2, e2, n2) {
        return g.u(t2) ? this[e2] : this.set(n2, t2);
      }, $2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $2.valueOf = function() {
        return this.$d.getTime();
      }, $2.startOf = function(t2, a2) {
        var h2 = this, c2 = !!g.u(a2) || a2, d3 = g.p(t2), $3 = function(t3, e2) {
          var n2 = g.w(h2.$u ? Date.UTC(h2.$y, e2, t3) : new Date(h2.$y, e2, t3), h2);
          return c2 ? n2 : n2.endOf(i);
        }, l2 = function(t3, e2) {
          return g.w(h2.toDate()[t3].apply(h2.toDate("s"), (c2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e2)), h2);
        }, y2 = this.$W, M2 = this.$M, m2 = this.$D, D2 = "set" + (this.$u ? "UTC" : "");
        switch (d3) {
          case o:
            return c2 ? $3(1, 0) : $3(31, 11);
          case u:
            return c2 ? $3(1, M2) : $3(0, M2 + 1);
          case s:
            var v2 = this.$locale().weekStart || 0, S2 = (y2 < v2 ? y2 + 7 : y2) - v2;
            return $3(c2 ? m2 - S2 : m2 + (6 - S2), M2);
          case i:
          case f:
            return l2(D2 + "Hours", 0);
          case r:
            return l2(D2 + "Minutes", 1);
          case n:
            return l2(D2 + "Seconds", 2);
          case e:
            return l2(D2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, $2.$set = function(s2, a2) {
        var h2, c2 = g.p(s2), d3 = "set" + (this.$u ? "UTC" : ""), $3 = (h2 = {}, h2[i] = d3 + "Date", h2[f] = d3 + "Date", h2[u] = d3 + "Month", h2[o] = d3 + "FullYear", h2[r] = d3 + "Hours", h2[n] = d3 + "Minutes", h2[e] = d3 + "Seconds", h2[t] = d3 + "Milliseconds", h2)[c2], l2 = c2 === i ? this.$D + (a2 - this.$W) : a2;
        if (c2 === u || c2 === o) {
          var y2 = this.clone().set(f, 1);
          y2.$d[$3](l2), y2.init(), this.$d = y2.set(f, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $3 && this.$d[$3](l2);
        return this.init(), this;
      }, $2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, $2.get = function(t2) {
        return this[g.p(t2)]();
      }, $2.add = function(t2, a2) {
        var f2, h2 = this;
        t2 = Number(t2);
        var c2 = g.p(a2), d3 = function(e2) {
          var n2 = v(h2);
          return g.w(n2.date(n2.date() + Math.round(e2 * t2)), h2);
        };
        if (c2 === u)
          return this.set(u, this.$M + t2);
        if (c2 === o)
          return this.set(o, this.$y + t2);
        if (c2 === i)
          return d3(1);
        if (c2 === s)
          return d3(7);
        var $3 = (f2 = {}, f2[n] = 6e4, f2[r] = 36e5, f2[e] = 1e3, f2)[c2] || 1, l2 = this.$d.getTime() + t2 * $3;
        return g.w(l2, this);
      }, $2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, $2.format = function(t2) {
        var e2 = this;
        if (!this.isValid())
          return "Invalid Date";
        var n2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", r2 = g.z(this), i2 = this.$locale(), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = i2.weekdays, f2 = i2.months, h2 = function(t3, r3, i3, s3) {
          return t3 && (t3[r3] || t3(e2, n2)) || i3[r3].substr(0, s3);
        }, d3 = function(t3) {
          return g.s(s2 % 12 || 12, t3, "0");
        }, $3 = i2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: g.s(a2 + 1, 2, "0"), MMM: h2(i2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: g.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(i2.weekdaysMin, this.$W, o2, 2), ddd: h2(i2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: g.s(s2, 2, "0"), h: d3(1), hh: d3(2), a: $3(s2, u2, true), A: $3(s2, u2, false), m: String(u2), mm: g.s(u2, 2, "0"), s: String(this.$s), ss: g.s(this.$s, 2, "0"), SSS: g.s(this.$ms, 3, "0"), Z: r2 };
        return n2.replace(c, function(t3, e3) {
          return e3 || l2[t3] || r2.replace(":", "");
        });
      }, $2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $2.diff = function(t2, f2, h2) {
        var c2, d3 = g.p(f2), $3 = v(t2), l2 = 6e4 * ($3.utcOffset() - this.utcOffset()), y2 = this - $3, M2 = g.m(this, $3);
        return M2 = (c2 = {}, c2[o] = M2 / 12, c2[u] = M2, c2[a] = M2 / 3, c2[s] = (y2 - l2) / 6048e5, c2[i] = (y2 - l2) / 864e5, c2[r] = y2 / 36e5, c2[n] = y2 / 6e4, c2[e] = y2 / 1e3, c2)[d3] || y2, h2 ? M2 : g.a(M2);
      }, $2.daysInMonth = function() {
        return this.endOf(u).$D;
      }, $2.$locale = function() {
        return M[this.$L];
      }, $2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = D(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, $2.clone = function() {
        return g.w(this.$d, this);
      }, $2.toDate = function() {
        return new Date(this.valueOf());
      }, $2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $2.toISOString = function() {
        return this.$d.toISOString();
      }, $2.toString = function() {
        return this.$d.toUTCString();
      }, d2;
    }(), p = S.prototype;
    return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", u], ["$y", o], ["$D", f]].forEach(function(t2) {
      p[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), v.extend = function(t2, e2) {
      return t2.$i || (t2(e2, S, v), t2.$i = true), v;
    }, v.locale = D, v.isDayjs = m, v.unix = function(t2) {
      return v(1e3 * t2);
    }, v.en = M[y], v.Ls = M, v.p = {}, v;
  });
})(dayjs_min);
const dayjs = dayjs_minExports;
var relativeTimeExports = {};
var relativeTime$1 = {
  get exports() {
    return relativeTimeExports;
  },
  set exports(v) {
    relativeTimeExports = v;
  }
};
(function(module, exports) {
  !function(r, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(r, t, e) {
      r = r || {};
      var n = t.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function i(r2, t2, e2, o2) {
        return n.fromToBase(r2, t2, e2, o2);
      }
      e.en.relativeTime = o, n.fromToBase = function(t2, n2, i2, d2, u) {
        for (var a, f, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
          var y = h[c];
          y.d && (a = d2 ? e(t2).diff(i2, y.d, true) : i2.diff(t2, y.d, true));
          var p = (r.rounding || Math.round)(Math.abs(a));
          if (s = a > 0, p <= y.r || !y.r) {
            p <= 1 && c > 0 && (y = h[c - 1]);
            var v = l[y.l];
            u && (p = u("" + p)), f = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
            break;
          }
        }
        if (n2)
          return f;
        var M = s ? l.future : l.past;
        return "function" == typeof M ? M(f) : M.replace("%s", f);
      }, n.to = function(r2, t2) {
        return i(r2, t2, this, true);
      }, n.from = function(r2, t2) {
        return i(r2, t2, this);
      };
      var d = function(r2) {
        return r2.$u ? e.utc() : e();
      };
      n.toNow = function(r2) {
        return this.to(d(this), r2);
      }, n.fromNow = function(r2) {
        return this.from(d(this), r2);
      };
    };
  });
})(relativeTime$1);
const relativeTime = relativeTimeExports;
var durationExports = {};
var duration$1 = {
  get exports() {
    return durationExports;
  },
  set exports(v) {
    durationExports = v;
  }
};
(function(module, exports) {
  !function(t, s) {
    module.exports = s();
  }(commonjsGlobal, function() {
    var t, s, n = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, e = { years: 31536e6, months: 2592e6, days: 864e5, hours: 36e5, minutes: 6e4, seconds: 1e3, milliseconds: 1, weeks: 6048e5 }, r = function(t2) {
      return t2 instanceof c;
    }, o = function(t2, s2, n2) {
      return new c(t2, n2, s2.$l);
    }, u = function(t2) {
      return s.p(t2) + "s";
    }, h = function(t2) {
      return t2 < 0;
    }, a = function(t2) {
      return h(t2) ? Math.ceil(t2) : Math.floor(t2);
    }, d = function(t2, s2) {
      return t2 ? h(t2) ? { negative: true, format: "" + function(t3) {
        return Math.abs(t3);
      }(t2) + s2 } : { negative: false, format: "" + t2 + s2 } : { negative: false, format: "" };
    }, c = function() {
      function h2(t2, s2, n2) {
        var r2 = this;
        if (this.$d = {}, this.$l = n2, s2)
          return o(t2 * e[u(s2)], this);
        if ("number" == typeof t2)
          return this.$ms = t2, this.parseFromMilliseconds(), this;
        if ("object" == typeof t2)
          return Object.keys(t2).forEach(function(s3) {
            r2.$d[u(s3)] = t2[s3];
          }), this.calMilliseconds(), this;
        if ("string" == typeof t2) {
          var h3 = t2.match(i);
          if (h3)
            return this.$d.years = h3[2], this.$d.months = h3[3], this.$d.weeks = h3[4], this.$d.days = h3[5], this.$d.hours = h3[6], this.$d.minutes = h3[7], this.$d.seconds = h3[8], this.calMilliseconds(), this;
        }
        return this;
      }
      var c2 = h2.prototype;
      return c2.calMilliseconds = function() {
        var t2 = this;
        this.$ms = Object.keys(this.$d).reduce(function(s2, n2) {
          return s2 + (t2.$d[n2] || 0) * e[n2];
        }, 0);
      }, c2.parseFromMilliseconds = function() {
        var t2 = this.$ms;
        this.$d.years = a(t2 / 31536e6), t2 %= 31536e6, this.$d.months = a(t2 / 2592e6), t2 %= 2592e6, this.$d.days = a(t2 / 864e5), t2 %= 864e5, this.$d.hours = a(t2 / 36e5), t2 %= 36e5, this.$d.minutes = a(t2 / 6e4), t2 %= 6e4, this.$d.seconds = a(t2 / 1e3), t2 %= 1e3, this.$d.milliseconds = t2;
      }, c2.toISOString = function() {
        var t2 = d(this.$d.years, "Y"), s2 = d(this.$d.months, "M"), n2 = +this.$d.days || 0;
        this.$d.weeks && (n2 += 7 * this.$d.weeks);
        var i2 = d(n2, "D"), e2 = d(this.$d.hours, "H"), r2 = d(this.$d.minutes, "M"), o2 = this.$d.seconds || 0;
        this.$d.milliseconds && (o2 += this.$d.milliseconds / 1e3);
        var u2 = d(o2, "S"), h3 = t2.negative || s2.negative || i2.negative || e2.negative || r2.negative || u2.negative, a2 = e2.format || r2.format || u2.format ? "T" : "", c3 = (h3 ? "-" : "") + "P" + t2.format + s2.format + i2.format + a2 + e2.format + r2.format + u2.format;
        return "P" === c3 || "-P" === c3 ? "P0D" : c3;
      }, c2.toJSON = function() {
        return this.toISOString();
      }, c2.format = function(t2) {
        var i2 = t2 || "YYYY-MM-DDTHH:mm:ss", e2 = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
        return i2.replace(n, function(t3, s2) {
          return s2 || String(e2[t3]);
        });
      }, c2.as = function(t2) {
        return this.$ms / e[u(t2)];
      }, c2.get = function(t2) {
        var s2 = this.$ms, n2 = u(t2);
        return "milliseconds" === n2 ? s2 %= 1e3 : s2 = "weeks" === n2 ? a(s2 / e[n2]) : this.$d[n2], 0 === s2 ? 0 : s2;
      }, c2.add = function(t2, s2, n2) {
        var i2;
        return i2 = s2 ? t2 * e[u(s2)] : r(t2) ? t2.$ms : o(t2, this).$ms, o(this.$ms + i2 * (n2 ? -1 : 1), this);
      }, c2.subtract = function(t2, s2) {
        return this.add(t2, s2, true);
      }, c2.locale = function(t2) {
        var s2 = this.clone();
        return s2.$l = t2, s2;
      }, c2.clone = function() {
        return o(this.$ms, this);
      }, c2.humanize = function(s2) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s2);
      }, c2.milliseconds = function() {
        return this.get("milliseconds");
      }, c2.asMilliseconds = function() {
        return this.as("milliseconds");
      }, c2.seconds = function() {
        return this.get("seconds");
      }, c2.asSeconds = function() {
        return this.as("seconds");
      }, c2.minutes = function() {
        return this.get("minutes");
      }, c2.asMinutes = function() {
        return this.as("minutes");
      }, c2.hours = function() {
        return this.get("hours");
      }, c2.asHours = function() {
        return this.as("hours");
      }, c2.days = function() {
        return this.get("days");
      }, c2.asDays = function() {
        return this.as("days");
      }, c2.weeks = function() {
        return this.get("weeks");
      }, c2.asWeeks = function() {
        return this.as("weeks");
      }, c2.months = function() {
        return this.get("months");
      }, c2.asMonths = function() {
        return this.as("months");
      }, c2.years = function() {
        return this.get("years");
      }, c2.asYears = function() {
        return this.as("years");
      }, h2;
    }();
    return function(n2, i2, e2) {
      t = e2, s = e2().$utils(), e2.duration = function(t2, s2) {
        var n3 = e2.locale();
        return o(t2, { $l: n3 }, s2);
      }, e2.isDuration = r;
      var u2 = i2.prototype.add, h2 = i2.prototype.subtract;
      i2.prototype.add = function(t2, s2) {
        return r(t2) && (t2 = t2.asMilliseconds()), u2.bind(this)(t2, s2);
      }, i2.prototype.subtract = function(t2, s2) {
        return r(t2) && (t2 = t2.asMilliseconds()), h2.bind(this)(t2, s2);
      };
    };
  });
})(duration$1);
const duration = durationExports;
var customParseFormatExports = {};
var customParseFormat$1 = {
  get exports() {
    return customParseFormatExports;
  },
  set exports(v) {
    customParseFormatExports = v;
  }
};
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = function(e2, n2) {
      return e2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(e3, r2, i2) {
        var o2 = i2 && i2.toUpperCase();
        return r2 || n2[i2] || t[i2] || n2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t2, e4, n3) {
          return e4 || n3.slice(1);
        });
      });
    }, n = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d\d/, i = /\d\d?/, o = /\d*[^\s\d-_:/()]+/, s = {};
    var a = function(t2) {
      return function(e2) {
        this[t2] = +e2;
      };
    }, f = [/[+-]\d\d:?(\d\d)?/, function(t2) {
      (this.zone || (this.zone = {})).offset = function(t3) {
        if (!t3)
          return 0;
        var e2 = t3.match(/([+-]|\d\d)/g), n2 = 60 * e2[1] + (+e2[2] || 0);
        return 0 === n2 ? 0 : "+" === e2[0] ? -n2 : n2;
      }(t2);
    }], u = function(t2) {
      var e2 = s[t2];
      return e2 && (e2.indexOf ? e2 : e2.s.concat(e2.f));
    }, h = function(t2, e2) {
      var n2, r2 = s.meridiem;
      if (r2) {
        for (var i2 = 1; i2 <= 24; i2 += 1)
          if (t2.indexOf(r2(i2, 0, e2)) > -1) {
            n2 = i2 > 12;
            break;
          }
      } else
        n2 = t2 === (e2 ? "pm" : "PM");
      return n2;
    }, d = { A: [o, function(t2) {
      this.afternoon = h(t2, false);
    }], a: [o, function(t2) {
      this.afternoon = h(t2, true);
    }], S: [/\d/, function(t2) {
      this.milliseconds = 100 * +t2;
    }], SS: [r, function(t2) {
      this.milliseconds = 10 * +t2;
    }], SSS: [/\d{3}/, function(t2) {
      this.milliseconds = +t2;
    }], s: [i, a("seconds")], ss: [i, a("seconds")], m: [i, a("minutes")], mm: [i, a("minutes")], H: [i, a("hours")], h: [i, a("hours")], HH: [i, a("hours")], hh: [i, a("hours")], D: [i, a("day")], DD: [r, a("day")], Do: [o, function(t2) {
      var e2 = s.ordinal, n2 = t2.match(/\d+/);
      if (this.day = n2[0], e2)
        for (var r2 = 1; r2 <= 31; r2 += 1)
          e2(r2).replace(/\[|\]/g, "") === t2 && (this.day = r2);
    }], M: [i, a("month")], MM: [r, a("month")], MMM: [o, function(t2) {
      var e2 = u("months"), n2 = (u("monthsShort") || e2.map(function(t3) {
        return t3.substr(0, 3);
      })).indexOf(t2) + 1;
      if (n2 < 1)
        throw new Error();
      this.month = n2 % 12 || n2;
    }], MMMM: [o, function(t2) {
      var e2 = u("months").indexOf(t2) + 1;
      if (e2 < 1)
        throw new Error();
      this.month = e2 % 12 || e2;
    }], Y: [/[+-]?\d+/, a("year")], YY: [r, function(t2) {
      t2 = +t2, this.year = t2 + (t2 > 68 ? 1900 : 2e3);
    }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
    var c = function(t2, r2, i2) {
      try {
        var o2 = function(t3) {
          for (var r3 = (t3 = e(t3, s && s.formats)).match(n), i3 = r3.length, o3 = 0; o3 < i3; o3 += 1) {
            var a3 = r3[o3], f3 = d[a3], u3 = f3 && f3[0], h3 = f3 && f3[1];
            r3[o3] = h3 ? { regex: u3, parser: h3 } : a3.replace(/^\[|\]$/g, "");
          }
          return function(t4) {
            for (var e2 = {}, n2 = 0, o4 = 0; n2 < i3; n2 += 1) {
              var s2 = r3[n2];
              if ("string" == typeof s2)
                o4 += s2.length;
              else {
                var a4 = s2.regex, f4 = s2.parser, u4 = t4.substr(o4), h4 = a4.exec(u4)[0];
                f4.call(e2, h4), t4 = t4.replace(h4, "");
              }
            }
            return function(t5) {
              var e3 = t5.afternoon;
              if (void 0 !== e3) {
                var n3 = t5.hours;
                e3 ? n3 < 12 && (t5.hours += 12) : 12 === n3 && (t5.hours = 0), delete t5.afternoon;
              }
            }(e2), e2;
          };
        }(r2)(t2), a2 = o2.year, f2 = o2.month, u2 = o2.day, h2 = o2.hours, c2 = o2.minutes, m = o2.seconds, l = o2.milliseconds, M = o2.zone, Y = new Date(), v = u2 || (a2 || f2 ? 1 : Y.getDate()), p = a2 || Y.getFullYear(), D = 0;
        a2 && !f2 || (D = f2 > 0 ? f2 - 1 : Y.getMonth());
        var y = h2 || 0, L = c2 || 0, g = m || 0, $ = l || 0;
        return M ? new Date(Date.UTC(p, D, v, y, L, g, $ + 60 * M.offset * 1e3)) : i2 ? new Date(Date.UTC(p, D, v, y, L, g, $)) : new Date(p, D, v, y, L, g, $);
      } catch (t3) {
        return new Date("");
      }
    };
    return function(t2, e2, n2) {
      n2.p.customParseFormat = true;
      var r2 = e2.prototype, i2 = r2.parse;
      r2.parse = function(t3) {
        var e3 = t3.date, r3 = t3.utc, o2 = t3.args;
        this.$u = r3;
        var a2 = o2[1];
        if ("string" == typeof a2) {
          var f2 = true === o2[2], u2 = true === o2[3], h2 = f2 || u2, d2 = o2[2];
          u2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = c(e3, a2, r3), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), h2 && e3 !== this.format(a2) && (this.$d = new Date("")), s = {};
        } else if (a2 instanceof Array)
          for (var m = a2.length, l = 1; l <= m; l += 1) {
            o2[1] = a2[l - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            l === m && (this.$d = new Date(""));
          }
        else
          i2.call(this, t3);
      };
    };
  });
})(customParseFormat$1);
const customParseFormat = customParseFormatExports;
var utcExports = {};
var utc$1 = {
  get exports() {
    return utcExports;
  },
  set exports(v) {
    utcExports = v;
  }
};
(function(module, exports) {
  !function(t, i) {
    module.exports = i();
  }(commonjsGlobal, function() {
    return function(t, i, e) {
      var s = i.prototype;
      e.utc = function(t2) {
        return new i({ date: t2, utc: true, args: arguments });
      }, s.utc = function(t2) {
        var i2 = e(this.toDate(), { locale: this.$L, utc: true });
        return t2 ? i2.add(this.utcOffset(), "minute") : i2;
      }, s.local = function() {
        return e(this.toDate(), { locale: this.$L, utc: false });
      };
      var f = s.parse;
      s.parse = function(t2) {
        t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), f.call(this, t2);
      };
      var n = s.init;
      s.init = function() {
        if (this.$u) {
          var t2 = this.$d;
          this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
        } else
          n.call(this);
      };
      var u = s.utcOffset;
      s.utcOffset = function(t2, i2) {
        var e2 = this.$utils().u;
        if (e2(t2))
          return this.$u ? 0 : e2(this.$offset) ? u.call(this) : this.$offset;
        var s2 = Math.abs(t2) <= 16 ? 60 * t2 : t2, f2 = this;
        if (i2)
          return f2.$offset = s2, f2.$u = 0 === t2, f2;
        if (0 !== t2) {
          var n2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (f2 = this.local().add(s2 + n2, "minute")).$offset = s2, f2.$x.$localOffset = n2;
        } else
          f2 = this.utc();
        return f2;
      };
      var o = s.format;
      s.format = function(t2) {
        var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return o.call(this, i2);
      }, s.valueOf = function() {
        var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * t2;
      }, s.isUTC = function() {
        return !!this.$u;
      }, s.toISOString = function() {
        return this.toDate().toISOString();
      }, s.toString = function() {
        return this.toDate().toUTCString();
      };
      var r = s.toDate;
      s.toDate = function(t2) {
        return "s" === t2 && this.$offset ? e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : r.call(this);
      };
      var a = s.diff;
      s.diff = function(t2, i2, s2) {
        if (t2 && this.$u === t2.$u)
          return a.call(this, t2, i2, s2);
        var f2 = this.local(), n2 = e(t2).local();
        return a.call(f2, n2, i2, s2);
      };
    };
  });
})(utc$1);
const utc = utcExports;
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(customParseFormat);
dayjs.extend(utc);
function useDurationFormat(value) {
  return computed(() => {
    const duration2 = unref(value);
    if (duration2 >= 1e3) {
      return dayjs.duration(duration2).format("HH:mm:ss").replace(/^0+:/, "");
    }
    return `${duration2}ms`;
  });
}
const _hoisted_1$1 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<path d="M40 8H8C6.34315 8 5 9.34315 5 11V16H43V11C43 9.34315 41.6569 8 40 8Z" fill="#D0D2E0" class="icon-light"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C6.34315 8 5 9.34315 5 11V16H43V11C43 9.34315 41.6569 8 40 8H8Z" fill="#D0D2E0" class="icon-light"></path><path d="M19 30L14 28L9 31V36H38C38.5523 36 39 35.5523 39 35V23L34 24L29 27L24 25L19 30Z" fill="#D0D2E0" class="icon-light"></path><path d="M5 16H4C4 16.5523 4.44772 17 5 17V16ZM43 16V17C43.5523 17 44 16.5523 44 16H43ZM19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13V11ZM39 13C39.5523 13 40 12.5523 40 12C40 11.4477 39.5523 11 39 11V13ZM14 28L14.3714 27.0715C14.0812 26.9555 13.7535 26.9817 13.4855 27.1425L14 28ZM19 30L18.6286 30.9285C19 31.077 19.4242 30.99 19.7071 30.7071L19 30ZM24 25L24.3714 24.0715C24 23.923 23.5758 24.01 23.2929 24.2929L24 25ZM29 27L28.6286 27.9285C28.9188 28.0445 29.2465 28.0183 29.5145 27.8575L29 27ZM9 31L8.4855 30.1425C8.1843 30.3232 8 30.6487 8 31H9ZM34 24L33.8039 23.0194C33.6915 23.0419 33.5838 23.0835 33.4855 23.1425L34 24ZM9 36H8C8 36.5523 8.44772 37 9 37V36ZM8 9H40V7H8V9ZM42 11V37H44V11H42ZM6 37V11H4V37H6ZM5 17H43V15H5V17ZM19 13H39V11H19V13ZM8 39C6.89543 39 6 38.1046 6 37H4C4 39.2091 5.79086 41 8 41V39ZM42 37C42 38.1046 41.1046 39 40 39V41C42.2091 41 44 39.2091 44 37H42ZM40 9C41.1046 9 42 9.89543 42 11H44C44 8.79086 42.2091 7 40 7V9ZM8 7C5.79086 7 4 8.79086 4 11H6C6 9.89543 6.89543 9 8 9V7ZM4 11V16H6V11H4ZM44 16V11H42V16H44ZM38 19H10V21H38V19ZM13.6286 28.9285L18.6286 30.9285L19.3714 29.0715L14.3714 27.0715L13.6286 28.9285ZM19.7071 30.7071L24.7071 25.7071L23.2929 24.2929L18.2929 29.2929L19.7071 30.7071ZM23.6286 25.9285L28.6286 27.9285L29.3714 26.0715L24.3714 24.0715L23.6286 25.9285ZM40 35V23H38V35H40ZM40 23V21H38V23H40ZM40 39H24V41H40V39ZM24 39H16V41H24V39ZM16 39H8V41H16V39ZM9.5145 31.8575L14.5145 28.8575L13.4855 27.1425L8.4855 30.1425L9.5145 31.8575ZM29.5145 27.8575L34.5145 24.8575L33.4855 23.1425L28.4855 26.1425L29.5145 27.8575ZM34.1961 24.9806L39.1961 23.9806L38.8039 22.0194L33.8039 23.0194L34.1961 24.9806ZM38 35H9V37H38V35ZM10 36V21H8V36H10ZM8 31V36H10V31H8ZM38 21H40C40 19.8954 39.1046 19 38 19V21ZM38 35V37C39.1046 37 40 36.1046 40 35H38ZM10 19C8.89543 19 8 19.8954 8 21H10H10V19Z" fill="#1B1E2E" class="icon-dark"></path><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M37 37C37 33.6863 34.3137 31 31 31C27.6863 31 25 33.6863 25 37C25 40.3137 27.6863 43 31 43C34.3137 43 37 40.3137 37 37Z" fill="#69D3A7"></path><path d="M28.2929 38.2071C27.9024 37.8166 27.9024 37.1834 28.2929 36.7929C28.6834 36.4024 29.3166 36.4024 29.7071 36.7929L28.2929 38.2071ZM30.5 39L31.3137 39.5812C31.1429 39.8204 30.8754 39.9723 30.5825 39.9966C30.2895 40.0208 30.0007 39.915 29.7929 39.7071L30.5 39ZM32.1863 34.9188C32.5073 34.4693 33.1318 34.3653 33.5812 34.6863C34.0307 35.0073 34.1347 35.6318 33.8137 36.0812L32.1863 34.9188ZM36 37C36 34.2386 33.7614 32 31 32V30C34.866 30 38 33.134 38 37H36ZM31 32C28.2386 32 26 34.2386 26 37H24C24 33.134 27.134 30 31 30V32ZM26 37C26 39.7614 28.2386 42 31 42V44C27.134 44 24 40.866 24 37H26ZM31 42C33.7614 42 36 39.7614 36 37H38C38 40.866 34.866 44 31 44V42ZM29.7071 36.7929L31.2071 38.2929L29.7929 39.7071L28.2929 38.2071L29.7071 36.7929ZM29.6863 38.4188L32.1863 34.9188L33.8137 36.0812L31.3137 39.5812L29.6863 38.4188Z" fill="#00814D"></path>', 9);
const _hoisted_11 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_11);
}
const DashboardCheckmark = { name: "cy-dashboard-checkmark_x48", render: render$1 };
const _hoisted_1 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M18.5858 8.58579C18.2107 8.21071 17.702 8 17.1716 8H6C5.44772 8 5 8.44772 5 9V14H17.1716C17.702 14 18.2107 13.7893 18.5858 13.4142L21 11L18.5858 8.58579Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M18.5858 13.4142L19.2929 14.1213L18.5858 13.4142ZM17.1716 8V9V8ZM18.5858 8.58579L19.2929 7.87868V7.87868L18.5858 8.58579ZM5 38H4H5ZM6 8V7V8ZM42 13V38H44V13H42ZM41 39H7V41H41V39ZM6 9H17.1716V7H6V9ZM17.8787 9.29289L20.2929 11.7071L21.7071 10.2929L19.2929 7.87868L17.8787 9.29289ZM21 12H41V10H21V12ZM20.2929 10.2929L17.8787 12.7071L19.2929 14.1213L21.7071 11.7071L20.2929 10.2929ZM6 38V14H4V38H6ZM6 14V9H4V14H6ZM17.1716 13H5V15H17.1716V13ZM17.8787 12.7071C17.6911 12.8946 17.4368 13 17.1716 13V15C17.9672 15 18.7303 14.6839 19.2929 14.1213L17.8787 12.7071ZM17.1716 9C17.4368 9 17.6911 9.10536 17.8787 9.29289L19.2929 7.87868C18.7303 7.31607 17.9672 7 17.1716 7V9ZM7 39C6.44772 39 6 38.5523 6 38H4C4 39.6568 5.34315 41 7 41V39ZM42 38C42 38.5523 41.5523 39 41 39V41C42.6569 41 44 39.6568 44 38H42ZM44 13C44 11.3431 42.6569 10 41 10V12C41.5523 12 42 12.4477 42 13H44ZM6 7C4.89543 7 4 7.89543 4 9H6V7Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M25 41C25 42.1046 25.8954 43 27 43H35C36.1046 43 37 42.1046 37 41V36C37 34.8954 36.1046 34 35 34H34H28H27C25.8954 34 25 34.8954 25 36V41Z",
  fill: "#69D3A7",
  class: "icon-light-secondary"
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M28 34H27C25.8954 34 25 34.8954 25 36V41C25 42.1046 25.8954 43 27 43H35C36.1046 43 37 42.1046 37 41V36C37 34.8954 36.1046 34 35 34H34M28 34V32C28 30.3431 29.3431 29 31 29V29C32.6569 29 34 30.3431 34 32V34M28 34H34M31 38V39",
  stroke: "#00814D",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark-secondary"
}, null, -1);
const _hoisted_6 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4,
  _hoisted_5
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_6);
}
const LockedProject = { name: "cy-locked-project_x48", render };
export {
  DashboardCheckmark as D,
  LockedProject as L,
  __unplugin_components_0 as _,
  utc as a,
  dayjs as d,
  useDurationFormat as u
};
