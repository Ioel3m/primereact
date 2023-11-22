'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var api = require('primereact/api');
var componentbase = require('primereact/componentbase');
var hooks = require('primereact/hooks');
var utils = require('primereact/utils');

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

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var classes = {
  icon: function icon(_ref) {
    var item = _ref.item;
    return utils.classNames('p-menuitem-icon', item.icon);
  },
  label: 'p-steps-title',
  step: 'p-steps-number',
  action: 'p-menuitem-link',
  menuitem: function menuitem(_ref2) {
    var active = _ref2.active,
      disabled = _ref2.disabled,
      item = _ref2.item;
    return utils.classNames('p-steps-item', item.className, {
      'p-highlight p-steps-current': active,
      'p-disabled': disabled
    });
  },
  root: function root(_ref3) {
    var props = _ref3.props;
    return utils.classNames('p-steps p-component', {
      'p-readonly': props.readOnly
    }, props.className);
  }
};
var styles = "\n@layer primereact {\n    .p-steps {\n        position: relative;\n    }\n    \n    .p-steps ul {\n        padding: 0;\n        margin: 0;\n        list-style-type: none;\n        display: flex;\n    }\n    \n    .p-steps-item {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        flex: 1 1 auto;\n    }\n    \n    .p-steps-item .p-menuitem-link {\n        display: inline-flex;\n        flex-direction: column;\n        align-items: center;\n        overflow: hidden;\n        text-decoration: none;\n    }\n    \n    .p-steps.p-readonly .p-steps-item {\n        cursor: auto;\n    }\n    \n    .p-steps-item.p-steps-current .p-menuitem-link {\n        cursor: default;\n    }\n    \n    .p-steps-title {\n        white-space: nowrap;\n    }\n    \n    .p-steps-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .p-steps-title {\n        display: block;\n    }\n}\n";
var StepsBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Steps',
    id: null,
    model: null,
    activeIndex: 0,
    readOnly: true,
    style: null,
    className: null,
    onSelect: null,
    children: undefined
  },
  css: {
    classes: classes,
    styles: styles
  }
});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Steps = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = StepsBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(props.id),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    idState = _React$useState2[0],
    setIdState = _React$useState2[1];
  var elementRef = React__namespace.useRef(null);
  var _StepsBase$setMetaDat = StepsBase.setMetaData({
      props: props,
      state: {
        id: idState
      }
    }),
    ptm = _StepsBase$setMetaDat.ptm,
    cx = _StepsBase$setMetaDat.cx,
    isUnstyled = _StepsBase$setMetaDat.isUnstyled;
  componentbase.useHandleStyle(StepsBase.css.styles, isUnstyled, {
    name: 'steps'
  });
  var itemClick = function itemClick(event, item, index) {
    if (props.readOnly || item.disabled) {
      event.preventDefault();
      return;
    }
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        item: item,
        index: index
      });
    }
    if (!item.url) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item,
        index: index
      });
    }
  };
  var createItem = function createItem(item, index) {
    if (item.visible === false) {
      return null;
    }
    var key = item.id || idState + '_' + index;
    var active = index === props.activeIndex;
    var disabled = item.disabled || index !== props.activeIndex && props.readOnly;
    var tabIndex = disabled ? -1 : '';
    var iconClassName = utils.classNames('p-menuitem-icon', item.icon);
    var iconProps = utils.mergeProps({
      className: cx('icon', {
        item: item
      })
    }, ptm('icon'));
    var icon = utils.IconUtils.getJSXIcon(item.icon, _objectSpread({}, iconProps), {
      props: props
    });
    var labelProps = utils.mergeProps({
      className: cx('label')
    }, ptm('label'));
    var label = item.label && /*#__PURE__*/React__namespace.createElement("span", labelProps, item.label);
    var stepProps = utils.mergeProps({
      className: cx('step')
    }, ptm('step'));
    var actionProps = utils.mergeProps({
      href: item.url || '#',
      className: cx('action'),
      role: 'presentation',
      target: item.target,
      onClick: function onClick(event) {
        return itemClick(event, item, index);
      },
      tabIndex: tabIndex
    }, ptm('action'));
    var content = /*#__PURE__*/React__namespace.createElement("a", actionProps, /*#__PURE__*/React__namespace.createElement("span", stepProps, index + 1), icon, label);
    if (item.template) {
      var defaultContentOptions = {
        onClick: function onClick(event) {
          return itemClick(event, item, index);
        },
        className: 'p-menuitem-link',
        labelClassName: 'p-steps-title',
        numberClassName: 'p-steps-number',
        iconClassName: iconClassName,
        element: content,
        props: props,
        tabIndex: tabIndex,
        active: active,
        disabled: disabled
      };
      content = utils.ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
    }
    var menuItemProps = utils.mergeProps({
      key: key,
      id: key,
      className: cx('menuitem', {
        active: active,
        disabled: disabled,
        item: item
      }),
      style: item.style,
      role: 'tab',
      'aria-selected': active,
      'aria-expanded': active
    }, ptm('menuitem'));
    return /*#__PURE__*/React__namespace.createElement("li", menuItemProps, content);
  };
  var createItems = function createItems() {
    var menuProps = utils.mergeProps({
      role: 'tablist'
    }, ptm('menu'));
    if (props.model) {
      var _items = props.model.map(createItem);
      return /*#__PURE__*/React__namespace.createElement("ul", menuProps, _items);
    }
    return null;
  };
  hooks.useMountEffect(function () {
    if (!idState) {
      setIdState(utils.UniqueComponentId());
    }
  });
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = utils.mergeProps({
    id: props.id,
    ref: elementRef,
    className: cx('root'),
    style: props.style
  }, StepsBase.getOtherProps(props), ptm('root'));
  var items = createItems();
  return /*#__PURE__*/React__namespace.createElement("div", rootProps, items);
}));
Steps.displayName = 'Steps';

exports.Steps = Steps;
