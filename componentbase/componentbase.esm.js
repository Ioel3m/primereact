'use client';
import PrimeReact from 'primereact/api';
import { useStyle, useMountEffect, useUpdateEffect, useUnmountEffect } from 'primereact/hooks';
import { ObjectUtils } from 'primereact/utils';

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

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function mergeProps() {
  for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }
  if (props) {
    var isFn = function isFn(o) {
      return !!(o && o.constructor && o.call && o.apply);
    };
    return props.reduce(function (merged, ps) {
      var _loop = function _loop() {
        var value = ps[key];
        if (key === 'style') {
          merged['style'] = _objectSpread$1(_objectSpread$1({}, merged['style']), ps['style']);
        } else if (key === 'className') {
          var newClassname = [merged['className'], ps['className']].join(' ').trim();
          var isEmpty = newClassname === null || newClassname === undefined || newClassname === '';
          merged['className'] = isEmpty ? undefined : newClassname;
        } else if (isFn(value)) {
          var fn = merged[key];
          merged[key] = fn ? function () {
            fn.apply(void 0, arguments);
            value.apply(void 0, arguments);
          } : value;
        } else {
          merged[key] = value;
        }
      };
      for (var key in ps) {
        _loop();
      }
      return merged;
    }, {});
  }
  return undefined;
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var baseStyle = "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n";
var buttonStyles = "\n.p-button {\n    margin: 0;\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    vertical-align: bottom;\n    text-align: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-button-label {\n    flex: 1 1 auto;\n}\n\n.p-button-icon-right {\n    order: 1;\n}\n\n.p-button:disabled {\n    cursor: default;\n}\n\n.p-button-icon-only {\n    justify-content: center;\n}\n\n.p-button-icon-only .p-button-label {\n    visibility: hidden;\n    width: 0;\n    flex: 0 0 auto;\n}\n\n.p-button-vertical {\n    flex-direction: column;\n}\n\n.p-button-icon-bottom {\n    order: 2;\n}\n\n.p-buttonset .p-button {\n    margin: 0;\n}\n\n.p-buttonset .p-button:not(:last-child) {\n    border-right: 0 none;\n}\n\n.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-buttonset .p-button:first-of-type {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-buttonset .p-button:last-of-type {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-buttonset .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n";
var checkboxStyles = "\n.p-checkbox {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    vertical-align: bottom;\n    position: relative;\n}\n\n.p-checkbox.p-checkbox-disabled {\n    cursor: auto;\n}\n\n.p-checkbox-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n";
var inputTextStyles = "\n.p-inputtext {\n    margin: 0;\n}\n\n.p-fluid .p-inputtext {\n    width: 100%;\n}\n\n/* InputGroup */\n.p-inputgroup {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup-addon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-inputgroup .p-float-label {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-fluid .p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper,\n.p-fluid .p-inputgroup .p-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n/* Floating Label */\n.p-float-label {\n    display: block;\n    position: relative;\n}\n\n.p-float-label label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    margin-top: -0.5rem;\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n}\n\n.p-float-label textarea ~ label,\n.p-float-label .p-mention ~ label {\n    top: 1rem;\n}\n\n.p-float-label input:focus ~ label,\n.p-float-label input:-webkit-autofill ~ label,\n.p-float-label input.p-filled ~ label,\n.p-float-label textarea:focus ~ label,\n.p-float-label textarea.p-filled ~ label,\n.p-float-label .p-inputwrapper-focus ~ label,\n.p-float-label .p-inputwrapper-filled ~ label,\n.p-float-label .p-tooltip-target-wrapper ~ label {\n    top: -0.75rem;\n    font-size: 12px;\n}\n\n.p-float-label .p-placeholder,\n.p-float-label input::placeholder,\n.p-float-label .p-inputtext::placeholder {\n    opacity: 0;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-float-label .p-focus .p-placeholder,\n.p-float-label input:focus::placeholder,\n.p-float-label .p-inputtext:focus::placeholder {\n    opacity: 1;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-input-icon-left,\n.p-input-icon-right {\n    position: relative;\n    display: inline-block;\n}\n\n.p-input-icon-left > i,\n.p-input-icon-right > i,\n.p-input-icon-left > svg,\n.p-input-icon-right > svg,\n.p-input-icon-left > .p-input-prefix,\n.p-input-icon-right > .p-input-suffix {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-fluid .p-input-icon-left,\n.p-fluid .p-input-icon-right {\n    display: block;\n    width: 100%;\n}\n";
var radioButtonStyles = "\n.p-radiobutton {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    vertical-align: bottom;\n}\n\n.p-radiobutton-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.p-radiobutton-icon {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transform: translateZ(0) scale(.1);\n    border-radius: 50%;\n    visibility: hidden;\n}\n\n.p-radiobutton-box.p-highlight .p-radiobutton-icon {\n    transform: translateZ(0) scale(1.0, 1.0);\n    visibility: visible;\n}\n\n";
var iconStyles = "\n.p-icon {\n    display: inline-block;\n}\n\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n\nsvg.p-icon {\n    pointer-events: auto;\n}\n\nsvg.p-icon g {\n    pointer-events: none;\n}\n\n@-webkit-keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n";
var commonStyle = "\n@layer primereact {\n    .p-component, .p-component * {\n        box-sizing: border-box;\n    }\n\n    .p-hidden {\n        display: none;\n    }\n\n    .p-hidden-space {\n        visibility: hidden;\n    }\n\n    .p-reset {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        text-decoration: none;\n        font-size: 100%;\n        list-style: none;\n    }\n\n    .p-disabled, .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-component-overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-unselectable-text {\n        user-select: none;\n    }\n\n    .p-scrollbar-measure {\n        width: 100px;\n        height: 100px;\n        overflow: scroll;\n        position: absolute;\n        top: -9999px;\n    }\n\n    @-webkit-keyframes p-fadein {\n      0%   { opacity: 0; }\n      100% { opacity: 1; }\n    }\n    @keyframes p-fadein {\n      0%   { opacity: 0; }\n      100% { opacity: 1; }\n    }\n\n    .p-link {\n        text-align: left;\n        background-color: transparent;\n        margin: 0;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-link:disabled {\n        cursor: default;\n    }\n\n    /* Non react overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity .1s linear;\n    }\n\n    /* React based overlay animations */\n    .p-connected-overlay-enter {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-enter-active {\n        opacity: 1;\n        transform: scaleY(1);\n        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-enter-done {\n        transform: none;\n    }\n\n    .p-connected-overlay-exit {\n        opacity: 1;\n    }\n\n    .p-connected-overlay-exit-active {\n        opacity: 0;\n        transition: opacity .1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        max-height: 1000px;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-toggleable-content-enter-done {\n        transform: none;\n    }\n\n    .p-toggleable-content-exit {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-exit-active {\n        overflow: hidden;\n        max-height: 0;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .p-sr-only {\n        border: 0;\n        clip: rect(1px, 1px, 1px, 1px);\n        clip-path: inset(50%);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n        word-wrap: normal;\n    }\n\n    /* @todo Refactor */\n    .p-menu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    ".concat(buttonStyles, "\n    ").concat(checkboxStyles, "\n    ").concat(inputTextStyles, "\n    ").concat(radioButtonStyles, "\n    ").concat(iconStyles, "\n}\n");
var ComponentBase = {
  cProps: undefined,
  cParams: undefined,
  cName: undefined,
  defaultProps: {
    pt: undefined,
    ptOptions: undefined,
    unstyled: false
  },
  context: {},
  globalCSS: undefined,
  classes: {},
  styles: '',
  extend: function extend() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var css = props.css;
    var defaultProps = _objectSpread(_objectSpread({}, props.defaultProps), ComponentBase.defaultProps);
    var inlineStyles = {};
    var getProps = function getProps(props) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ComponentBase.context = context;
      ComponentBase.cProps = props;
      return ObjectUtils.getMergedProps(props, defaultProps);
    };
    var getOtherProps = function getOtherProps(props) {
      return ObjectUtils.getDiffProps(props, defaultProps);
    };
    var getPTValue = function getPTValue() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var searchInDefaultPT = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      // obj either is the passthrough options or has a .pt property.
      if (obj.hasOwnProperty('pt') && obj.pt !== undefined) {
        obj = obj.pt;
      }
      var hostName = params.hostName && ObjectUtils.toFlatCase(params.hostName);
      var componentName = hostName || params.props && params.props.__TYPE && ObjectUtils.toFlatCase(params.props.__TYPE) || '';
      var isNestedParam = /./g.test(key) && !!params[key.split('.')[0]];
      var isTransition = key === 'transition' || /./g.test(key) && !!(key.split('.')[1] === 'transition');
      var datasetPrefix = 'data-pc-';
      var fkey = isNestedParam ? ObjectUtils.toFlatCase(key.split('.')[1]) : ObjectUtils.toFlatCase(key);
      var getHostInstance = function getHostInstance(params) {
        return params !== null && params !== void 0 && params.props ? params.hostName ? params.props.__TYPE === params.hostName ? params.props : getHostInstance(params.parent) : params.parent : undefined;
      };
      var getPropValue = function getPropValue(name) {
        var _params$props, _getHostInstance;
        return ((_params$props = params.props) === null || _params$props === void 0 ? void 0 : _params$props[name]) || ((_getHostInstance = getHostInstance(params)) === null || _getHostInstance === void 0 ? void 0 : _getHostInstance[name]);
      };
      ComponentBase.cParams = params;
      ComponentBase.cName = componentName;
      var _ref = getPropValue('ptOptions') || ComponentBase.context.ptOptions || {},
        _ref$mergeSections = _ref.mergeSections,
        mergeSections = _ref$mergeSections === void 0 ? true : _ref$mergeSections,
        _ref$mergeProps = _ref.mergeProps,
        useMergeProps = _ref$mergeProps === void 0 ? false : _ref$mergeProps;
      var getPTClassValue = function getPTClassValue() {
        var value = getOptionValue.apply(void 0, arguments);
        return ObjectUtils.isString(value) ? {
          className: value
        } : value;
      };
      var globalPT = searchInDefaultPT ? isNestedParam ? _useGlobalPT(getPTClassValue, key, params) : _useDefaultPT(getPTClassValue, key, params) : undefined;
      var self = isNestedParam ? undefined : _usePT(_getPT(obj, componentName), getPTClassValue, key, params);
      var datasetProps = !isTransition && _objectSpread(_objectSpread({}, fkey === 'root' && _defineProperty({}, "".concat(datasetPrefix, "name"), params.props && params.props.__parentMetadata ? ObjectUtils.toFlatCase(params.props.__TYPE) : componentName)), {}, _defineProperty({}, "".concat(datasetPrefix, "section"), fkey));
      return mergeSections || !mergeSections && self ? useMergeProps ? mergeProps(globalPT, self, Object.keys(datasetProps).length ? datasetProps : {}) : _objectSpread(_objectSpread(_objectSpread({}, globalPT), self), Object.keys(datasetProps).length ? datasetProps : {}) : _objectSpread(_objectSpread({}, self), Object.keys(datasetProps).length ? datasetProps : {});
    };
    var setMetaData = function setMetaData() {
      var metadata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var props = metadata.props,
        state = metadata.state;
      var ptm = function ptm() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return getPTValue((props || {}).pt, key, _objectSpread(_objectSpread({}, metadata), params));
      };
      var ptmo = function ptmo() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return getPTValue(obj, key, params, false);
      };
      var isUnstyled = function isUnstyled() {
        return ComponentBase.context.unstyled || PrimeReact.unstyled || props.unstyled;
      };
      var cx = function cx() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return !isUnstyled() ? getOptionValue(css && css.classes, key, _objectSpread({
          props: props,
          state: state
        }, params)) : undefined;
      };
      var sx = function sx() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var when = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        if (when) {
          var self = getOptionValue(css && css.inlineStyles, key, _objectSpread({
            props: props,
            state: state
          }, params));
          var base = getOptionValue(inlineStyles, key, _objectSpread({
            props: props,
            state: state
          }, params));
          return mergeProps(base, self);
        }
        return undefined;
      };
      return {
        ptm: ptm,
        ptmo: ptmo,
        sx: sx,
        cx: cx,
        isUnstyled: isUnstyled
      };
    };
    return _objectSpread(_objectSpread({
      getProps: getProps,
      getOtherProps: getOtherProps,
      setMetaData: setMetaData
    }, props), {}, {
      defaultProps: defaultProps
    });
  }
};
var getOptionValue = function getOptionValue(obj) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var fKeys = String(ObjectUtils.toFlatCase(key)).split('.');
  var fKey = fKeys.shift();
  var matchedPTOption = ObjectUtils.isNotEmpty(obj) ? Object.keys(obj).find(function (k) {
    return ObjectUtils.toFlatCase(k) === fKey;
  }) : '';
  return fKey ? ObjectUtils.isObject(obj) ? getOptionValue(ObjectUtils.getItemValue(obj[matchedPTOption], params), fKeys.join('.'), params) : undefined : ObjectUtils.getItemValue(obj, params);
};
var _getPT = function _getPT(pt) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var _usept = pt === null || pt === void 0 ? void 0 : pt['_usept'];
  var getValue = function getValue(value) {
    var _ref3;
    var checkSameKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _value = callback ? callback(value) : value;
    var _key = ObjectUtils.toFlatCase(key);
    return (_ref3 = checkSameKey ? _key !== ComponentBase.cName ? _value === null || _value === void 0 ? void 0 : _value[_key] : undefined : _value === null || _value === void 0 ? void 0 : _value[_key]) !== null && _ref3 !== void 0 ? _ref3 : _value;
  };
  return ObjectUtils.isNotEmpty(_usept) ? {
    _usept: _usept,
    originalValue: getValue(pt.originalValue),
    value: getValue(pt.value)
  } : getValue(pt, true);
};
var _usePT = function _usePT(pt, callback, key, params) {
  var fn = function fn(value) {
    return callback(value, key, params);
  };
  if (pt !== null && pt !== void 0 && pt.hasOwnProperty('_usept')) {
    var _ref4 = pt['_usept'] || ComponentBase.context.ptOptions || {},
      _ref4$mergeSections = _ref4.mergeSections,
      mergeSections = _ref4$mergeSections === void 0 ? true : _ref4$mergeSections,
      _ref4$mergeProps = _ref4.mergeProps,
      useMergeProps = _ref4$mergeProps === void 0 ? false : _ref4$mergeProps;
    var originalValue = fn(pt.originalValue);
    var value = fn(pt.value);
    if (originalValue === undefined && value === undefined) return undefined;else if (ObjectUtils.isString(value)) return value;else if (ObjectUtils.isString(originalValue)) return originalValue;
    return mergeSections || !mergeSections && value ? useMergeProps ? mergeProps(originalValue, value) : _objectSpread(_objectSpread({}, originalValue), value) : value;
  }
  return fn(pt);
};
var getGlobalPT = function getGlobalPT() {
  return _getPT(ComponentBase.context.pt || PrimeReact.pt, undefined, function (value) {
    return ObjectUtils.getItemValue(value, ComponentBase.cParams);
  });
};
var getDefaultPT = function getDefaultPT() {
  return _getPT(ComponentBase.context.pt || PrimeReact.pt, undefined, function (value) {
    return getOptionValue(value, ComponentBase.cName, ComponentBase.cParams) || ObjectUtils.getItemValue(value, ComponentBase.cParams);
  });
};
var _useGlobalPT = function _useGlobalPT(callback, key, params) {
  return _usePT(getGlobalPT(), callback, key, params);
};
var _useDefaultPT = function _useDefaultPT(callback, key, params) {
  return _usePT(getDefaultPT(), callback, key, params);
};
var useHandleStyle = function useHandleStyle(styles) {
  var config = arguments.length > 2 ? arguments[2] : undefined;
  var name = config.name,
    _config$styled = config.styled,
    styled = _config$styled === void 0 ? false : _config$styled,
    _config$hostName = config.hostName,
    hostName = _config$hostName === void 0 ? '' : _config$hostName;
  var globalCSS = _useGlobalPT(getOptionValue, 'global.css', ComponentBase.cParams);
  var componentName = ObjectUtils.toFlatCase(name);
  var _useStyle = useStyle(baseStyle, {
      name: 'base',
      manual: true
    }),
    loadBaseStyle = _useStyle.load;
  var _useStyle2 = useStyle(commonStyle, {
      name: 'common',
      manual: true
    }),
    loadCommonStyle = _useStyle2.load;
  var _useStyle3 = useStyle(globalCSS, {
      name: 'global',
      manual: true
    }),
    loadGlobalStyle = _useStyle3.load;
  var _useStyle4 = useStyle(styles, {
      name: name,
      manual: true
    }),
    load = _useStyle4.load;
  var hook = function hook(hookName) {
    if (!hostName) {
      var selfHook = _usePT(_getPT((ComponentBase.cProps || {}).pt, componentName), getOptionValue, "hooks.".concat(hookName));
      var defaultHook = _useDefaultPT(getOptionValue, "hooks.".concat(hookName));
      selfHook === null || selfHook === void 0 || selfHook();
      defaultHook === null || defaultHook === void 0 || defaultHook();
    }
  };
  hook('useMountEffect');
  useMountEffect(function () {
    loadBaseStyle();
    loadGlobalStyle();
    loadCommonStyle();
    if (!styled) load();
  });
  useUpdateEffect(function () {
    hook('useUpdateEffect');
  });
  useUnmountEffect(function () {
    hook('useUnmountEffect');
  });
};

export { ComponentBase, useHandleStyle };
