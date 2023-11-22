this.primereact = this.primereact || {};
this.primereact.image = (function (exports, React, utils, PrimeReact, componentbase, csstransition, hooks, iconbase, eye, refresh, searchminus, searchplus, times, undo, portal) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var PrimeReact__default = /*#__PURE__*/_interopDefaultLegacy(PrimeReact);

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }

  var usePrevious = function usePrevious(newValue) {
    var ref = React__namespace.useRef(undefined);
    React__namespace.useEffect(function () {
      ref.current = newValue;
    });
    return ref.current;
  };

  /* eslint-disable */
  var useUnmountEffect = function useUnmountEffect(fn) {
    return React__namespace.useEffect(function () {
      return fn;
    }, []);
  };
  /* eslint-enable */

  /* eslint-disable */
  var useEventListener = function useEventListener(_ref) {
    var _ref$target = _ref.target,
      target = _ref$target === void 0 ? 'document' : _ref$target,
      type = _ref.type,
      listener = _ref.listener,
      options = _ref.options,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
    var targetRef = React__namespace.useRef(null);
    var listenerRef = React__namespace.useRef(null);
    var prevListener = usePrevious(listener);
    var prevOptions = usePrevious(options);
    var bind = function bind() {
      var bindOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (utils.ObjectUtils.isNotEmpty(bindOptions.target)) {
        unbind();
        (bindOptions.when || when) && (targetRef.current = utils.DomHandler.getTargetElement(bindOptions.target));
      }
      if (!listenerRef.current && targetRef.current) {
        listenerRef.current = function (event) {
          return listener && listener(event);
        };
        targetRef.current.addEventListener(type, listenerRef.current, options);
      }
    };
    var unbind = function unbind() {
      if (listenerRef.current) {
        targetRef.current.removeEventListener(type, listenerRef.current, options);
        listenerRef.current = null;
      }
    };
    React__namespace.useEffect(function () {
      if (when) {
        targetRef.current = utils.DomHandler.getTargetElement(target);
      } else {
        unbind();
        targetRef.current = null;
      }
    }, [target, when]);
    React__namespace.useEffect(function () {
      // to properly compare functions we can implicitly converting the function to it's body's text as a String
      if (listenerRef.current && ('' + prevListener !== '' + listener || prevOptions !== options)) {
        unbind();
        when && bind();
      }
    }, [listener, options, when]);
    useUnmountEffect(function () {
      unbind();
    });
    return [bind, unbind];
  };
  /* eslint-enable */

  var useOnEscapeKey = function useOnEscapeKey(ref, condition, callback) {
    var handleEsc = function handleEsc(event) {
      if (event.key === 'Esc' || event.key === 'Escape') {
        event.stopImmediatePropagation();
        callback(event);
      }
      return;
    };
    var _useEventListener = useEventListener({
        type: 'keydown',
        listener: handleEsc
      }),
      _useEventListener2 = _slicedToArray(_useEventListener, 2),
      bindKeyDownListener = _useEventListener2[0],
      unbindKeyDownListener = _useEventListener2[1];
    React__namespace.useEffect(function () {
      if (!condition) {
        return;
      }
      if (!ref.current) {
        return;
      }
      bindKeyDownListener();
      return function () {
        unbindKeyDownListener();
      };
    });
    return [ref, callback];
  };

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var ObjectUtils = /*#__PURE__*/function () {
    function ObjectUtils() {
      _classCallCheck(this, ObjectUtils);
    }
    _createClass(ObjectUtils, null, [{
      key: "equals",
      value: function equals(obj1, obj2, field) {
        if (field && obj1 && _typeof(obj1) === 'object' && obj2 && _typeof(obj2) === 'object') return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
      }

      /**
       * Compares two JSON objects for deep equality recursively comparing both objects.
       * @param {*} a the first JSON object
       * @param {*} b the second JSON object
       * @returns true if equals, false it not
       */
    }, {
      key: "deepEquals",
      value: function deepEquals(a, b) {
        if (a === b) return true;
        if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
          var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i,
            length,
            key;
          if (arrA && arrB) {
            length = a.length;
            if (length !== b.length) return false;
            for (i = length; i-- !== 0;) if (!this.deepEquals(a[i], b[i])) return false;
            return true;
          }
          if (arrA !== arrB) return false;
          var dateA = a instanceof Date,
            dateB = b instanceof Date;
          if (dateA !== dateB) return false;
          if (dateA && dateB) return a.getTime() === b.getTime();
          var regexpA = a instanceof RegExp,
            regexpB = b instanceof RegExp;
          if (regexpA !== regexpB) return false;
          if (regexpA && regexpB) return a.toString() === b.toString();
          var keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length) return false;
          for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
          for (i = length; i-- !== 0;) {
            key = keys[i];
            if (!this.deepEquals(a[key], b[key])) return false;
          }
          return true;
        }

        /*eslint no-self-compare: "off"*/
        return a !== a && b !== b;
      }
    }, {
      key: "resolveFieldData",
      value: function resolveFieldData(data, field) {
        if (!data || !field) {
          // short circuit if there is nothing to resolve
          return null;
        }
        try {
          var value = data[field];
          if (this.isNotEmpty(value)) return value;
        } catch (_unused) {
          // Performance optimization: https://github.com/primefaces/primereact/issues/4797
          // do nothing and continue to other methods to resolve field data
        }
        if (Object.keys(data).length) {
          if (this.isFunction(field)) {
            return field(data);
          } else if (this.isNotEmpty(data[field])) {
            return data[field];
          } else if (field.indexOf('.') === -1) {
            return data[field];
          } else {
            var fields = field.split('.');
            var _value = data;
            for (var i = 0, len = fields.length; i < len; ++i) {
              if (_value == null) {
                return null;
              }
              _value = _value[fields[i]];
            }
            return _value;
          }
        }
        return null;
      }
    }, {
      key: "findDiffKeys",
      value: function findDiffKeys(obj1, obj2) {
        if (!obj1 || !obj2) {
          return {};
        }
        return Object.keys(obj1).filter(function (key) {
          return !obj2.hasOwnProperty(key);
        }).reduce(function (result, current) {
          result[current] = obj1[current];
          return result;
        }, {});
      }

      /**
       * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
       *
       * @param {any} obj the JSON object to reduce
       * @param {string[]} startsWiths the string(s) to check if the property starts with this key
       * @returns the JSON object containing only the key/values that match the startsWith string
       */
    }, {
      key: "reduceKeys",
      value: function reduceKeys(obj, startsWiths) {
        var result = {};
        if (!obj || !startsWiths || startsWiths.length === 0) {
          return result;
        }
        Object.keys(obj).filter(function (key) {
          return startsWiths.some(function (value) {
            return key.startsWith(value);
          });
        }).forEach(function (key) {
          result[key] = obj[key];
          delete obj[key];
        });
        return result;
      }
    }, {
      key: "reorderArray",
      value: function reorderArray(value, from, to) {
        if (value && from !== to) {
          if (to >= value.length) {
            to %= value.length;
            from %= value.length;
          }
          value.splice(to, 0, value.splice(from, 1)[0]);
        }
      }
    }, {
      key: "findIndexInList",
      value: function findIndexInList(value, list, dataKey) {
        var _this = this;
        if (list) {
          return dataKey ? list.findIndex(function (item) {
            return _this.equals(item, value, dataKey);
          }) : list.findIndex(function (item) {
            return item === value;
          });
        }
        return -1;
      }
    }, {
      key: "getJSXElement",
      value: function getJSXElement(obj) {
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }
        return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
      }
    }, {
      key: "getItemValue",
      value: function getItemValue(obj) {
        for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }
        return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
      }
    }, {
      key: "getProp",
      value: function getProp(props) {
        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var value = props ? props[prop] : undefined;
        return value === undefined ? defaultProps[prop] : value;
      }
    }, {
      key: "getPropCaseInsensitive",
      value: function getPropCaseInsensitive(props, prop) {
        var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var fkey = this.toFlatCase(prop);
        for (var key in props) {
          if (props.hasOwnProperty(key) && this.toFlatCase(key) === fkey) {
            return props[key];
          }
        }
        for (var _key3 in defaultProps) {
          if (defaultProps.hasOwnProperty(_key3) && this.toFlatCase(_key3) === fkey) {
            return defaultProps[_key3];
          }
        }
        return undefined; // Property not found
      }
    }, {
      key: "getMergedProps",
      value: function getMergedProps(props, defaultProps) {
        return Object.assign({}, defaultProps, props);
      }
    }, {
      key: "getDiffProps",
      value: function getDiffProps(props, defaultProps) {
        return this.findDiffKeys(props, defaultProps);
      }
    }, {
      key: "getPropValue",
      value: function getPropValue(obj) {
        for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
          params[_key4 - 1] = arguments[_key4];
        }
        return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
      }
    }, {
      key: "getComponentProp",
      value: function getComponentProp(component) {
        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.isNotEmpty(component) ? this.getProp(component.props, prop, defaultProps) : undefined;
      }
    }, {
      key: "getComponentProps",
      value: function getComponentProps(component, defaultProps) {
        return this.isNotEmpty(component) ? this.getMergedProps(component.props, defaultProps) : undefined;
      }
    }, {
      key: "getComponentDiffProps",
      value: function getComponentDiffProps(component, defaultProps) {
        return this.isNotEmpty(component) ? this.getDiffProps(component.props, defaultProps) : undefined;
      }
    }, {
      key: "isValidChild",
      value: function isValidChild(child, type, validTypes) {
        /* eslint-disable */
        if (child) {
          var childType = this.getComponentProp(child, '__TYPE') || (child.type ? child.type.displayName : undefined);
          var isValid = childType === type;
          try {
            var messageTypes; if ("production" !== 'production' && !isValid) ;
          } catch (error) {
            // NOOP
          }
          return isValid;
        }
        return false;
        /* eslint-enable */
      }
    }, {
      key: "getRefElement",
      value: function getRefElement(ref) {
        if (ref) {
          return _typeof(ref) === 'object' && ref.hasOwnProperty('current') ? ref.current : ref;
        }
        return null;
      }
    }, {
      key: "combinedRefs",
      value: function combinedRefs(innerRef, forwardRef) {
        if (innerRef && forwardRef) {
          if (typeof forwardRef === 'function') {
            forwardRef(innerRef.current);
          } else {
            forwardRef.current = innerRef.current;
          }
        }
      }
    }, {
      key: "removeAccents",
      value: function removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
          str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/[\xC6]/g, 'AE').replace(/[\xC7]/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/[\xD0]/g, 'D').replace(/[\xD1]/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/[\xDD]/g, 'Y').replace(/[\xDE]/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/[\xE6]/g, 'ae').replace(/[\xE7]/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/[\xF1]/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/[\xFE]/g, 'p').replace(/[\xFD\xFF]/g, 'y');
        }
        return str;
      }
    }, {
      key: "toFlatCase",
      value: function toFlatCase(str) {
        // convert snake, kebab, camel and pascal cases to flat case
        return this.isNotEmpty(str) && this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
      }
    }, {
      key: "toCapitalCase",
      value: function toCapitalCase(str) {
        return this.isNotEmpty(str) && this.isString(str) ? str[0].toUpperCase() + str.slice(1) : str;
      }
    }, {
      key: "trim",
      value: function trim(value) {
        // trim only if the value is actually a string
        return this.isNotEmpty(value) && this.isString(value) ? value.trim() : value;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty(value) {
        return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof(value) === 'object' && Object.keys(value).length === 0;
      }
    }, {
      key: "isNotEmpty",
      value: function isNotEmpty(value) {
        return !this.isEmpty(value);
      }
    }, {
      key: "isFunction",
      value: function isFunction(value) {
        return !!(value && value.constructor && value.call && value.apply);
      }
    }, {
      key: "isObject",
      value: function isObject(value) {
        return value !== null && value instanceof Object && value.constructor === Object;
      }
    }, {
      key: "isDate",
      value: function isDate(value) {
        return value !== null && value instanceof Date && value.constructor === Date;
      }
    }, {
      key: "isArray",
      value: function isArray(value) {
        return value !== null && Array.isArray(value);
      }
    }, {
      key: "isString",
      value: function isString(value) {
        return value !== null && typeof value === 'string';
      }
    }, {
      key: "isPrintableCharacter",
      value: function isPrintableCharacter() {
        var _char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
      }
    }, {
      key: "isLetter",
      value: function isLetter(_char2) {
        return _char2 && (_char2.toUpperCase() != _char2.toLowerCase() || _char2.codePointAt(0) > 127);
      }

      /**
       * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
       * https://caniuse.com/mdn-javascript_builtins_array_findlast
       */
    }, {
      key: "findLast",
      value: function findLast(arr, callback) {
        var item;
        if (this.isNotEmpty(arr)) {
          try {
            item = arr.findLast(callback);
          } catch (_unused2) {
            item = _toConsumableArray(arr).reverse().find(callback);
          }
        }
        return item;
      }

      /**
       * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
       * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
       */
    }, {
      key: "findLastIndex",
      value: function findLastIndex(arr, callback) {
        var index = -1;
        if (this.isNotEmpty(arr)) {
          try {
            index = arr.findLastIndex(callback);
          } catch (_unused3) {
            index = arr.lastIndexOf(_toConsumableArray(arr).reverse().find(callback));
          }
        }
        return index;
      }
    }, {
      key: "sort",
      value: function sort(value1, value2) {
        var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var comparator = arguments.length > 3 ? arguments[3] : undefined;
        var nullSortOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        var result = this.compare(value1, value2, comparator, order);
        var finalSortOrder = order;

        // nullSortOrder == 1 means Excel like sort nulls at bottom
        if (this.isEmpty(value1) || this.isEmpty(value2)) {
          finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
        }
        return finalSortOrder * result;
      }
    }, {
      key: "compare",
      value: function compare(value1, value2, comparator) {
        var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var result = -1;
        var emptyValue1 = this.isEmpty(value1);
        var emptyValue2 = this.isEmpty(value2);
        if (emptyValue1 && emptyValue2) result = 0;else if (emptyValue1) result = order;else if (emptyValue2) result = -order;else if (typeof value1 === 'string' && typeof value2 === 'string') result = comparator(value1, value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return result;
      }
    }, {
      key: "localeComparator",
      value: function localeComparator(locale) {
        //performance gain using Int.Collator. It is not recommended to use localeCompare against large arrays.
        return new Intl.Collator(locale, {
          numeric: true
        }).compare;
      }
    }, {
      key: "findChildrenByKey",
      value: function findChildrenByKey(data, key) {
        var _iterator = _createForOfIteratorHelper(data),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if (item.key === key) {
              return item.children || [];
            } else if (item.children) {
              var result = this.findChildrenByKey(item.children, key);
              if (result.length > 0) {
                return result;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return [];
      }

      /**
       * This function takes mutates and object with a new value given
       * a specific field. This will handle deeply nested fields that
       * need to be modified or created.
       *
       * e.g:
       * data = {
       *  nested: {
       *      foo: "bar"
       *  }
       * }
       *
       * field = "nested.foo"
       * value = "baz"
       *
       * The function will mutate data to be
       * e.g:
       * data = {
       *  nested: {
       *      foo: "baz"
       *  }
       * }
       *
       * @param {object} data the object to be modified
       * @param {string} field the field in the object to replace
       * @param {any} value the value to have replaced in the field
       */
    }, {
      key: "mutateFieldData",
      value: function mutateFieldData(data, field, value) {
        if (_typeof(data) !== 'object' || typeof field !== 'string') {
          // short circuit if there is nothing to resolve
          return;
        }
        var fields = field.split('.');
        var obj = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          // Check if we are on the last field
          if (i + 1 - len === 0) {
            obj[fields[i]] = value;
            break;
          }
          if (!obj[fields[i]]) {
            obj[fields[i]] = {};
          }
          obj = obj[fields[i]];
        }
      }
    }]);
    return ObjectUtils;
  }();

  var lastId = 0;
  function UniqueComponentId() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pr_id_';
    lastId++;
    return "".concat(prefix).concat(lastId);
  }

  var DownloadIcon = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
    var pti = iconbase.IconBase.getPTI(inProps);
    var _React$useState = React__namespace.useState(inProps.id),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pathId = _React$useState2[0],
      setPathId = _React$useState2[1];
    React__namespace.useEffect(function () {
      if (ObjectUtils.isEmpty(pathId)) {
        setPathId(UniqueComponentId('pr_icon_clip_'));
      }
    }, [pathId]);
    return /*#__PURE__*/React__namespace.createElement("svg", _extends({
      ref: ref,
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, pti), /*#__PURE__*/React__namespace.createElement("g", {
      clipPath: "url(#".concat(pathId, ")")
    }, /*#__PURE__*/React__namespace.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.0118 10C6.93296 10.0003 6.85484 9.98495 6.78202 9.95477C6.7091 9.92454 6.64297 9.88008 6.58749 9.82399L3.38288 6.62399C3.27675 6.51025 3.21897 6.35982 3.22171 6.20438C3.22446 6.04893 3.28752 5.90063 3.39761 5.7907C3.5077 5.68077 3.65622 5.6178 3.81188 5.61505C3.96755 5.61231 4.1182 5.67001 4.23211 5.77599L6.41125 7.95201V0.6C6.41125 0.44087 6.47456 0.288258 6.58724 0.175736C6.69993 0.063214 6.85276 0 7.01212 0C7.17148 0 7.32431 0.063214 7.43699 0.175736C7.54968 0.288258 7.61298 0.44087 7.61298 0.6V7.95198L9.7921 5.77599C9.90601 5.67001 10.0567 5.61231 10.2123 5.61505C10.368 5.6178 10.5165 5.68077 10.6266 5.7907C10.7367 5.90063 10.7997 6.04893 10.8025 6.20438C10.8052 6.35982 10.7475 6.51025 10.6413 6.62399L7.43671 9.82399C7.38124 9.88008 7.3151 9.92454 7.24219 9.95477C7.16938 9.98495 7.09127 10.0003 7.01244 10C7.01233 10 7.01223 10 7.01212 10C7.01201 10 7.0119 10 7.0118 10ZM13.45 13.3115C13.0749 13.7235 12.5521 13.971 11.9952 14H2.02889C1.75106 13.9887 1.47819 13.9228 1.2259 13.806C0.973606 13.6893 0.74684 13.524 0.558578 13.3197C0.370316 13.1153 0.224251 12.8759 0.128742 12.6152C0.0332333 12.3544 -0.00984502 12.0774 0.00197194 11.8V9.39999C0.00197194 9.24086 0.065277 9.08825 0.177961 8.97572C0.290645 8.8632 0.443477 8.79999 0.602836 8.79999C0.762195 8.79999 0.915027 8.8632 1.02771 8.97572C1.1404 9.08825 1.2037 9.24086 1.2037 9.39999V11.8C1.18301 12.0375 1.25469 12.2739 1.40385 12.4601C1.55302 12.6463 1.76823 12.768 2.00485 12.8H11.9952C12.2318 12.768 12.4471 12.6463 12.5962 12.4601C12.7454 12.2739 12.8171 12.0375 12.7964 11.8V9.39999C12.7964 9.24086 12.8597 9.08825 12.9724 8.97572C13.085 8.8632 13.2379 8.79999 13.3972 8.79999C13.5566 8.79999 13.7094 8.8632 13.8221 8.97572C13.9348 9.08825 13.9981 9.24086 13.9981 9.39999V11.8C14.0221 12.3563 13.8251 12.8995 13.45 13.3115Z",
      fill: "currentColor"
    })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
      id: pathId
    }, /*#__PURE__*/React__namespace.createElement("rect", {
      width: "14",
      height: "14",
      fill: "white"
    }))));
  }));
  DownloadIcon.displayName = 'DownloadIcon';

  var classes = {
    button: 'p-image-preview-indicator',
    mask: 'p-image-mask p-component-overlay p-component-overlay-enter',
    toolbar: 'p-image-toolbar',
    downloadButton: 'p-image-action p-link',
    rotateRightButton: 'p-image-action p-link',
    rotateLeftButton: 'p-image-action p-link',
    zoomOutButton: 'p-image-action p-link',
    zoomInButton: 'p-image-action p-link',
    closeButton: 'p-image-action p-link',
    preview: 'p-image-preview',
    icon: 'p-image-preview-icon',
    root: function root(_ref) {
      var props = _ref.props;
      return utils.classNames('p-image p-component', props.className, {
        'p-image-preview-container': props.preview
      });
    },
    transition: 'p-image-preview'
  };
  var styles = "\n@layer primereact {\n    .p-image-mask {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .p-image-preview-container {\n        position: relative;\n        display: inline-block;\n        line-height: 0;\n    }\n    \n    .p-image-preview-indicator {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0;\n        transition: opacity .3s;\n        border: none;\n        padding: 0;\n    }\n    \n    .p-image-preview-icon {\n        font-size: 1.5rem;\n    }\n    \n    .p-image-preview-container:hover > .p-image-preview-indicator {\n        opacity: 1;\n        cursor: pointer;\n    }\n    \n    .p-image-preview-container > img {\n        cursor: pointer;\n    }\n    \n    .p-image-toolbar {\n        position: absolute;\n        top: 0;\n        right: 0;\n        display: flex;\n        z-index: 1;\n    }\n    \n    .p-image-action.p-link {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    \n    .p-image-preview {\n        transition: transform .15s;\n        max-width: 100vw;\n        max-height: 100vh;\n        width: 100%;\n        height: 100%;\n    }\n    \n    .p-image-preview-enter {\n        opacity: 0;\n        transform: scale(0.7);\n    }\n    \n    .p-image-preview-enter-active {\n        opacity: 1;\n        transform: scale(1);\n        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    }\n    \n    .p-image-preview-enter-done {\n        transform: none;\n    }\n    \n    .p-image-preview-exit {\n        opacity: 1;\n    }\n    \n    .p-image-preview-exit-active {\n        opacity: 0;\n        transform: scale(0.7);\n        transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n    }\n}\n";
  var inlineStyles = {
    preview: function preview(_ref2) {
      var rotateState = _ref2.rotateState,
        scaleState = _ref2.scaleState;
      return {
        transform: 'rotate(' + rotateState + 'deg) scale(' + scaleState + ')'
      };
    }
  };
  var ImageBase = componentbase.ComponentBase.extend({
    defaultProps: {
      __TYPE: 'Image',
      alt: null,
      className: null,
      closeIcon: null,
      crossOrigin: null,
      decoding: null,
      downloadIcon: null,
      downloadable: false,
      height: null,
      imageClassName: null,
      imageStyle: null,
      indicatorIcon: null,
      loading: null,
      onError: null,
      onHide: null,
      onShow: null,
      preview: false,
      referrerPolicy: null,
      rotateLeftIcon: null,
      rotateRightIcon: null,
      src: null,
      template: null,
      useMap: null,
      width: null,
      zoomInIcon: null,
      zoomOutIcon: null,
      zoomSrc: null,
      children: undefined,
      closeOnEscape: true
    },
    css: {
      classes: classes,
      styles: styles,
      inlineStyles: inlineStyles
    }
  });

  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var Image = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
    var context = React__namespace.useContext(PrimeReact.PrimeReactContext);
    var props = ImageBase.getProps(inProps, context);
    var _React$useState = React__namespace.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      maskVisibleState = _React$useState2[0],
      setMaskVisibleState = _React$useState2[1];
    var _React$useState3 = React__namespace.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      previewVisibleState = _React$useState4[0],
      setPreviewVisibleState = _React$useState4[1];
    var _React$useState5 = React__namespace.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      rotateState = _React$useState6[0],
      setRotateState = _React$useState6[1];
    var _React$useState7 = React__namespace.useState(1),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      scaleState = _React$useState8[0],
      setScaleState = _React$useState8[1];
    var elementRef = React__namespace.useRef(null);
    var imageRef = React__namespace.useRef(null);
    var maskRef = React__namespace.useRef(null);
    var previewRef = React__namespace.useRef(null);
    var previewClick = React__namespace.useRef(false);
    useOnEscapeKey(maskRef, props.closeOnEscape, function () {
      hide();
    });
    var _ImageBase$setMetaDat = ImageBase.setMetaData({
        props: props,
        state: {
          maskVisible: maskVisibleState,
          previewVisible: previewVisibleState,
          rotate: rotateState,
          scale: scaleState
        }
      }),
      ptm = _ImageBase$setMetaDat.ptm,
      cx = _ImageBase$setMetaDat.cx,
      sx = _ImageBase$setMetaDat.sx,
      isUnstyled = _ImageBase$setMetaDat.isUnstyled;
    componentbase.useHandleStyle(ImageBase.css.styles, isUnstyled, {
      name: 'image'
    });
    var show = function show() {
      if (props.preview) {
        setMaskVisibleState(true);
        utils.DomHandler.blockBodyScroll();
        setTimeout(function () {
          setPreviewVisibleState(true);
        }, 25);
      }
    };
    var hide = function hide() {
      if (!previewClick.current) {
        setPreviewVisibleState(false);
        utils.DomHandler.unblockBodyScroll();
        setRotateState(0);
        setScaleState(1);
      }
      previewClick.current = false;
    };
    var onPreviewImageClick = function onPreviewImageClick() {
      previewClick.current = true;
    };
    var onDownload = function onDownload() {
      var name = props.alt,
        src = props.src;
      utils.DomHandler.saveAs({
        name: name,
        src: src
      });
      previewClick.current = true;
    };
    var rotateRight = function rotateRight() {
      setRotateState(function (prevRotate) {
        return prevRotate + 90;
      });
      previewClick.current = true;
    };
    var rotateLeft = function rotateLeft() {
      setRotateState(function (prevRotate) {
        return prevRotate - 90;
      });
      previewClick.current = true;
    };
    var zoomIn = function zoomIn() {
      setScaleState(function (prevScale) {
        return prevScale + 0.1;
      });
      previewClick.current = true;
    };
    var zoomOut = function zoomOut() {
      setScaleState(function (prevScale) {
        return prevScale - 0.1;
      });
      previewClick.current = true;
    };
    var onEntering = function onEntering() {
      utils.ZIndexUtils.set('modal', maskRef.current, context && context.autoZIndex || PrimeReact__default["default"].autoZIndex, context && context.zIndex['modal'] || PrimeReact__default["default"].zIndex['modal']);
    };
    var onEntered = function onEntered() {
      props.onShow && props.onShow();
    };
    var onExit = function onExit() {
      utils.DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
    };
    var onExiting = function onExiting() {
      props.onHide && props.onHide();
    };
    var onExited = function onExited() {
      utils.ZIndexUtils.clear(maskRef.current);
      setMaskVisibleState(false);
    };
    hooks.useUnmountEffect(function () {
      maskRef.current && utils.ZIndexUtils.clear(maskRef.current);
    });
    var createPreview = function createPreview() {
      var buttonProps = utils.mergeProps({
        className: cx('button'),
        onClick: show
      }, ptm('button'));
      if (props.preview) {
        return /*#__PURE__*/React__namespace.createElement("div", buttonProps, content);
      }
      return null;
    };
    var createElement = function createElement() {
      var downloadable = props.downloadable,
        alt = props.alt,
        crossOrigin = props.crossOrigin,
        referrerPolicy = props.referrerPolicy,
        useMap = props.useMap,
        loading = props.loading;
      var zoomOutDisabled = scaleState <= 0.5;
      var zoomInDisabled = scaleState >= 1.5;
      var downloadIconProps = utils.mergeProps(ptm('downloadIcon'));
      var rotateRightIconProps = utils.mergeProps(ptm('rotateRightIcon'));
      var rotateLeftIconProps = utils.mergeProps(ptm('rotateLeftIcon'));
      var zoomOutIconProps = utils.mergeProps(ptm('zoomOutIcon'));
      var zoomInIconProps = utils.mergeProps(ptm('zoomInIcon'));
      var closeIconProps = utils.mergeProps(ptm('closeIcon'));
      var downloadIcon = utils.IconUtils.getJSXIcon(props.downloadIcon || /*#__PURE__*/React__namespace.createElement(DownloadIcon, null), _objectSpread({}, downloadIconProps), {
        props: props
      });
      var rotateRightIcon = utils.IconUtils.getJSXIcon(props.rotateRightIcon || /*#__PURE__*/React__namespace.createElement(refresh.RefreshIcon, null), _objectSpread({}, rotateRightIconProps), {
        props: props
      });
      var rotateLeftIcon = utils.IconUtils.getJSXIcon(props.rotateLeftIcon || /*#__PURE__*/React__namespace.createElement(undo.UndoIcon, null), _objectSpread({}, rotateLeftIconProps), {
        props: props
      });
      var zoomOutIcon = utils.IconUtils.getJSXIcon(props.zoomOutIcon || /*#__PURE__*/React__namespace.createElement(searchminus.SearchMinusIcon, null), _objectSpread({}, zoomOutIconProps), {
        props: props
      });
      var zoomInIcon = utils.IconUtils.getJSXIcon(props.zoomInIcon || /*#__PURE__*/React__namespace.createElement(searchplus.SearchPlusIcon, null), _objectSpread({}, zoomInIconProps), {
        props: props
      });
      var closeIcon = utils.IconUtils.getJSXIcon(props.closeIcon || /*#__PURE__*/React__namespace.createElement(times.TimesIcon, null), _objectSpread({}, closeIconProps), {
        props: props
      });
      var maskProps = utils.mergeProps({
        ref: maskRef,
        className: cx('mask'),
        onPointerUp: hide
      }, ptm('mask'));
      var toolbarProps = utils.mergeProps({
        className: cx('toolbar')
      }, ptm('toolbar'));
      var downloadButtonProps = utils.mergeProps({
        className: cx('downloadButton'),
        onPointerUp: onDownload,
        type: 'button'
      }, ptm('downloadButton'));
      var rotateRightButtonProps = utils.mergeProps({
        className: cx('rotateRightButton'),
        onPointerUp: rotateRight,
        type: 'button'
      }, ptm('rotateRightButton'));
      var rotateLeftButtonProps = utils.mergeProps({
        className: cx('rotateLeftButton'),
        onPointerUp: rotateLeft,
        type: 'button'
      }, ptm('rotateLeftButton'));
      var zoomOutButtonProps = utils.mergeProps({
        className: utils.classNames(cx('zoomOutButton'), {
          'p-disabled': zoomOutDisabled
        }),
        style: {
          pointerEvents: 'auto'
        },
        onPointerUp: zoomOut,
        type: 'button',
        disabled: zoomOutDisabled
      }, ptm('zoomOutButton'));
      var zoomInButtonProps = utils.mergeProps({
        className: utils.classNames(cx('zoomInButton'), {
          'p-disabled': zoomInDisabled
        }),
        style: {
          pointerEvents: 'auto'
        },
        onPointerUp: zoomIn,
        type: 'button',
        disabled: zoomInDisabled
      }, ptm('zoomInButton'));
      var closeButtonProps = utils.mergeProps({
        className: cx('closeButton'),
        type: 'button',
        'aria-label': PrimeReact.localeOption('close')
      }, ptm('closeButton'));
      var previewProps = utils.mergeProps({
        src: props.zoomSrc || props.src,
        className: cx('preview'),
        style: sx('preview', {
          rotateState: rotateState,
          scaleState: scaleState
        }),
        onPointerUp: onPreviewImageClick,
        crossOrigin: crossOrigin,
        referrerPolicy: referrerPolicy,
        useMap: useMap,
        loading: loading
      }, ptm('preview'));
      var previewContainerProps = utils.mergeProps({
        ref: previewRef
      }, ptm('previewContainer'));
      var transitionProps = utils.mergeProps({
        classNames: cx('transition'),
        "in": previewVisibleState,
        timeout: {
          enter: 150,
          exit: 150
        },
        unmountOnExit: true,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      }, ptm('transition'));
      return /*#__PURE__*/React__namespace.createElement("div", maskProps, /*#__PURE__*/React__namespace.createElement("div", toolbarProps, downloadable && /*#__PURE__*/React__namespace.createElement("button", downloadButtonProps, downloadIcon), /*#__PURE__*/React__namespace.createElement("button", rotateRightButtonProps, rotateRightIcon), /*#__PURE__*/React__namespace.createElement("button", rotateLeftButtonProps, rotateLeftIcon), /*#__PURE__*/React__namespace.createElement("button", zoomOutButtonProps, zoomOutIcon), /*#__PURE__*/React__namespace.createElement("button", zoomInButtonProps, zoomInIcon), /*#__PURE__*/React__namespace.createElement("button", closeButtonProps, closeIcon)), /*#__PURE__*/React__namespace.createElement(csstransition.CSSTransition, _extends({
        nodeRef: previewRef
      }, transitionProps), /*#__PURE__*/React__namespace.createElement("div", previewContainerProps, /*#__PURE__*/React__namespace.createElement("img", _extends({
        alt: alt
      }, previewProps)))));
    };
    React__namespace.useImperativeHandle(ref, function () {
      return {
        props: props,
        show: show,
        hide: hide,
        getElement: function getElement() {
          return elementRef.current;
        },
        getImage: function getImage() {
          return imageRef.current;
        }
      };
    });
    var src = props.src,
      alt = props.alt,
      width = props.width,
      height = props.height,
      crossOrigin = props.crossOrigin,
      referrerPolicy = props.referrerPolicy,
      useMap = props.useMap,
      loading = props.loading;
    var element = createElement();
    var iconProp = utils.mergeProps({
      className: cx('icon')
    }, ptm('icon'));
    var icon = props.indicatorIcon || /*#__PURE__*/React__namespace.createElement(eye.EyeIcon, iconProp);
    var indicatorIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, iconProp), {
      props: props
    });
    var content = props.template ? utils.ObjectUtils.getJSXElement(props.template, props) : indicatorIcon;
    var preview = createPreview();
    var imageProp = utils.mergeProps({
      ref: imageRef,
      src: src,
      className: props.imageClassName,
      width: width,
      height: height,
      crossOrigin: crossOrigin,
      referrerPolicy: referrerPolicy,
      useMap: useMap,
      loading: loading,
      style: props.imageStyle,
      onError: props.onError
    }, ptm('image'));
    var image = props.src && /*#__PURE__*/React__namespace.createElement("img", _extends({}, imageProp, {
      alt: alt
    }));
    var rootProps = utils.mergeProps({
      ref: elementRef,
      className: cx('root')
    }, ImageBase.getOtherProps(props), ptm('root'));
    return /*#__PURE__*/React__namespace.createElement("span", rootProps, image, preview, maskVisibleState && /*#__PURE__*/React__namespace.createElement(portal.Portal, {
      element: element,
      appendTo: document.body
    }));
  }));
  Image.displayName = 'Image';

  exports.Image = Image;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, primereact.utils, primereact.api, primereact.componentbase, primereact.csstransition, primereact.hooks, primereact.iconbase, primereact.icons.eye, primereact.icons.refresh, primereact.icons.searchminus, primereact.icons.searchplus, primereact.icons.times, primereact.icons.undo, primereact.portal);
