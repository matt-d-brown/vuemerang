import Vue from 'vue';
const isServer = Vue.prototype.$isServer;
// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

export function camelcaseToHyphen (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// For Modal scrollBar hidden
let cached;
export function getScrollBarSize (fresh) {
  if (isServer) return 0;
  if (fresh || cached === undefined) {
    const inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    const outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    const widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

// watch DOM change
export const MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;
//eslint-disable-next-line
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
export function getStyle (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch(e) {
    return element.style[styleName];
  }
}

// firstUpperCase
function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1);
}
export {firstUpperCase};

// Warn
export function warnProp(component, prop, correctType, wrongType) {
  correctType = firstUpperCase(correctType);
  wrongType = firstUpperCase(wrongType);
    console.error(`[iView warn]: Invalid prop: type check failed for prop ${prop}. Expected ${correctType}, got ${wrongType}. (found in component: ${component})`);    // eslint-disable-line
}

function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if ( t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if ( t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

export {deepCopy};

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
              return window.setTimeout(callback, 1000/60);
            }
        );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}
export {findComponentUpward};

// Find component downward
export function findComponentDownward (context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

// Find components downward
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

// Find components upward
export function findComponentsUpward (context, componentName) {
  let parents = [];
  const parent = context.$parent;
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}

// Find brothers components
export function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}

/* istanbul ignore next */
const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/* istanbul ignore next */
export function addClass(el, cls) {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
export function removeClass(el, cls) {
  if (!el || !cls) return;
  const classes = cls.split(' ');
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

export const dimensionMap = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1600px',
};

export function setMatchMedia () {
  if (typeof window !== 'undefined') {
    const matchMediaPolyfill = mediaQuery => {
      return {
        media: mediaQuery,
        matches: false,
        on() {},
        off() {},
      };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
  }
}

export const sharpMatcherRegx = /#([^#]+)$/;


function shorten(arr, sLen) {
  var newArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }
  return newArr;
}

function monthUpdate(arrName) {
  return function (d, v, i18n) {
    var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
    if (~index) {
      d.month = index;
    }
  };
}

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}
const fecha = {};
var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = /\d\d?/;
var threeDigits = /\d{3}/;
var fourDigits = /\d{4}/;
//eslint-disable-next-line
var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
var noop = function () {
};
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
  dayNamesShort: dayNamesShort,
  dayNames: dayNames,
  monthNamesShort: monthNamesShort,
  monthNames: monthNames,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  }
};
var formatFlags = {
  D: function (dateObj) {
    return dateObj.getDay();
  },
  DD: function (dateObj) {
    return pad(dateObj.getDay());
  },
  Do: function (dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function (dateObj) {
    return dateObj.getDate();
  },
  dd: function (dateObj) {
    return pad(dateObj.getDate());
  },
  ddd: function (dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function (dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function (dateObj) {
    return dateObj.getMonth() + 1;
  },
  MM: function (dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function (dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function (dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  yy: function (dateObj) {
    return String(dateObj.getFullYear()).substr(2);
  },
  yyyy: function (dateObj) {
    return dateObj.getFullYear();
  },
  h: function (dateObj) {
    return dateObj.getHours() % 12 || 12;
  },
  hh: function (dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function (dateObj) {
    return dateObj.getHours();
  },
  HH: function (dateObj) {
    return pad(dateObj.getHours());
  },
  m: function (dateObj) {
    return dateObj.getMinutes();
  },
  mm: function (dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function (dateObj) {
    return dateObj.getSeconds();
  },
  ss: function (dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function (dateObj) {
    return Math.round(dateObj.getMilliseconds() / 100);
  },
  SS: function (dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function (dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function (dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function (dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function (dateObj) {
    var o = dateObj.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};

var parseFlags = {
  d: [twoDigits, function (d, v) {
    d.day = v;
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  yy: [twoDigits, function (d, v) {
    // eslint-disable-next-line
    var da = new DatedateUtil(), cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  yyyy: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: [/\d/, function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: [/\d{2}/, function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  D: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();
    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  //eslint-disable-next-line
  ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
    //eslint-disable-next-line
    var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
//parseFlags.DD = parseFlags.DD;
parseFlags.dddd = parseFlags.ddd;
parseFlags.Do = parseFlags.dd = parseFlags.d;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;

// Some common format strings
fecha.masks = {
  'default': 'ddd MMM dd yyyy HH:mm:ss',
  shortDate: 'M/D/yy',
  mediumDate: 'MMM d, yyyy',
  longDate: 'MMMM d, yyyy',
  fullDate: 'dddd, MMMM d, yyyy',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
};

export function miformat (dateObj, mask, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }

  if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format');
  }

  mask = fecha.masks[mask] || mask || fecha.masks['default'];

  return mask.replace(token, function ($0) {
    return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
  });
}

export function miparse (dateStr, format, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof format !== 'string') {
    throw new Error('Invalid format in fecha.parse');
  }

  format = fecha.masks[format] || format;

  // Avoid regular expression denial of service, fail early for really long strings
  // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
  if (dateStr.length > 1000) {
    return false;
  }

  var isValid = true;
  var dateInfo = {};
  format.replace(token, function ($0) {
    if (parseFlags[$0]) {
      var info = parseFlags[$0];
      var index = dateStr.search(info[0]);
      if (!~index) {
        isValid = false;
      } else {
        dateStr.replace(info[0], function (result) {
          info[1](dateInfo, result, i18n);
          dateStr = dateStr.substr(index + result.length);
          return result;
        });
      }
    }

    return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
  });

  if (!isValid) {
    return false;
  }

  var today = new Date();
  if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }

  var date;
  if (dateInfo.timezoneOffset != null) {
    dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
    date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
          dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
  } else {
    date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
          dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
  }
  return date;
}
