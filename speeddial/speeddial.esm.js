'use client';
import * as React from 'react';
import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { ComponentBase, useHandleStyle } from 'primereact/componentbase';
import { useEventListener, useMountEffect, useUpdateEffect } from 'primereact/hooks';
import { MinusIcon } from 'primereact/icons/minus';
import { PlusIcon } from 'primereact/icons/plus';
import { Ripple } from 'primereact/ripple';
import { classNames, DomHandler, mergeProps, IconUtils, ObjectUtils } from 'primereact/utils';

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

var styles = "\n@layer primereact {\n    .p-speeddial {\n        position: absolute;\n        display: flex;\n        z-index: 1;\n    }\n    \n    .p-speeddial-list {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: top 0s linear 0.2s;\n        pointer-events: none;\n    }\n    \n    .p-speeddial-item {\n        transform: scale(0);\n        opacity: 0;\n        transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;\n        will-change: transform;\n    }\n    \n    .p-speeddial-action {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        position: relative;\n        overflow: hidden;\n        text-decoration: none;\n    }\n    \n    .p-speeddial-circle .p-speeddial-item,\n    .p-speeddial-semi-circle .p-speeddial-item,\n    .p-speeddial-quarter-circle .p-speeddial-item {\n        position: absolute;\n    }\n    \n    .p-speeddial-rotate {\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        will-change: transform;\n    }\n    \n    .p-speeddial-mask {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    }\n    \n    .p-speeddial-mask-visible {\n        pointer-events: none;\n        opacity: 1;\n        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    }\n    \n    .p-speeddial-opened .p-speeddial-list {\n        pointer-events: auto;\n    }\n    \n    .p-speeddial-opened .p-speeddial-item {\n        transform: scale(1);\n        opacity: 1;\n    }\n    \n    .p-speeddial-opened .p-speeddial-rotate {\n        transform: rotate(45deg);\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props,
      visible = _ref.visible;
    return classNames("p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty(_defineProperty(_defineProperty({}, "p-speeddial-direction-".concat(props.direction), props.type !== 'circle'), 'p-speeddial-opened', visible), 'p-disabled', props.disabled));
  },
  button: function button(_ref2) {
    var props = _ref2.props;
    return classNames('p-speeddial-button p-button-rounded', {
      'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
    });
  },
  mask: function mask(_ref3) {
    var visible = _ref3.visible;
    return classNames('p-speeddial-mask', {
      'p-speeddial-mask-visible': visible
    });
  },
  action: function action(_ref4) {
    var disabled = _ref4.disabled;
    return classNames('p-speeddial-action', {
      'p-disabled': disabled
    });
  },
  actionIcon: function actionIcon(_ref5) {
    var _icon = _ref5._icon;
    return classNames('p-speeddial-action-icon', _icon);
  },
  menu: 'p-speeddial-list',
  menuitem: 'p-speeddial-item'
};
var inlineStyles = {
  root: function root(_ref6) {
    var props = _ref6.props;
    return {
      alignItems: props.direction === 'up' || props.direction === 'down' ? 'center' : '',
      justifyContent: props.direction === 'left' || props.direction === 'right' ? 'center' : '',
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  },
  menu: function menu(_ref7) {
    var props = _ref7.props;
    return {
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  }
};
var SpeedDialBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: 'SpeedDial',
    id: null,
    model: null,
    visible: false,
    style: null,
    className: null,
    direction: 'up',
    transitionDelay: 30,
    type: 'linear',
    radius: 0,
    mask: false,
    disabled: false,
    hideOnClickOutside: true,
    buttonStyle: null,
    buttonClassName: null,
    buttonTemplate: null,
    'aria-label': null,
    maskStyle: null,
    maskClassName: null,
    showIcon: null,
    hideIcon: null,
    rotateAnimation: true,
    onVisibleChange: null,
    onClick: null,
    onShow: null,
    onHide: null,
    children: undefined
  },
  css: {
    classes: classes,
    styles: styles,
    inlineStyles: inlineStyles
  }
});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SpeedDial = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (inProps, ref) {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    visibleState = _React$useState2[0],
    setVisibleState = _React$useState2[1];
  var context = React.useContext(PrimeReactContext);
  var props = SpeedDialBase.getProps(inProps, context);
  var visible = props.onVisibleChange ? props.visible : visibleState;
  var metaData = {
    props: props,
    state: {
      visible: visible
    }
  };
  var _SpeedDialBase$setMet = SpeedDialBase.setMetaData(metaData),
    ptm = _SpeedDialBase$setMet.ptm,
    cx = _SpeedDialBase$setMet.cx,
    sx = _SpeedDialBase$setMet.sx,
    isUnstyled = _SpeedDialBase$setMet.isUnstyled;
  useHandleStyle(SpeedDialBase.css.styles, isUnstyled, {
    name: 'speeddial'
  });
  var isItemClicked = React.useRef(false);
  var elementRef = React.useRef(null);
  var listRef = React.useRef(null);
  var _useEventListener = useEventListener({
      type: 'click',
      listener: function listener(event) {
        if (!isItemClicked.current && isOutsideClicked(event)) {
          hide();
        }
        isItemClicked.current = false;
      },
      when: visibleState
    }),
    _useEventListener2 = _slicedToArray(_useEventListener, 2),
    bindDocumentClickListener = _useEventListener2[0],
    unbindDocumentClickListener = _useEventListener2[1];
  var show = function show() {
    props.onVisibleChange ? props.onVisibleChange(true) : setVisibleState(true);
    props.onShow && props.onShow();
  };
  var hide = function hide() {
    props.onVisibleChange ? props.onVisibleChange(false) : setVisibleState(false);
    props.onHide && props.onHide();
  };
  var _onClick = function onClick(e) {
    visible ? hide() : show();
    props.onClick && props.onClick(e);
    isItemClicked.current = true;
  };
  var onItemClick = function onItemClick(e, item) {
    item.command && item.command({
      originalEvent: e,
      item: item
    });
    hide();
    isItemClicked.current = true;
    e.preventDefault();
  };
  var isOutsideClicked = function isOutsideClicked(event) {
    return elementRef.current && !(elementRef.current.isSameNode(event.target) || elementRef.current.contains(event.target));
  };
  var calculateTransitionDelay = function calculateTransitionDelay(index) {
    var length = props.model.length;
    return (visible ? index : length - index - 1) * props.transitionDelay;
  };
  var calculatePointStyle = function calculatePointStyle(index) {
    var type = props.type;
    if (type !== 'linear') {
      var length = props.model.length;
      var radius = props.radius || length * 20;
      if (type === 'circle') {
        var step = 2 * Math.PI / length;
        return {
          left: "calc(".concat(radius * Math.cos(step * index), "px + var(--item-diff-x, 0px))"),
          top: "calc(".concat(radius * Math.sin(step * index), "px + var(--item-diff-y, 0px))")
        };
      } else if (type === 'semi-circle') {
        var direction = props.direction;
        var _step = Math.PI / (length - 1);
        var x = "calc(".concat(radius * Math.cos(_step * index), "px + var(--item-diff-x, 0px))");
        var y = "calc(".concat(radius * Math.sin(_step * index), "px + var(--item-diff-y, 0px))");
        if (direction === 'up') {
          return {
            left: x,
            bottom: y
          };
        } else if (direction === 'down') {
          return {
            left: x,
            top: y
          };
        } else if (direction === 'left') {
          return {
            right: y,
            top: x
          };
        } else if (direction === 'right') {
          return {
            left: y,
            top: x
          };
        }
      } else if (type === 'quarter-circle') {
        var _direction = props.direction;
        var _step2 = Math.PI / (2 * (length - 1));
        var _x = "calc(".concat(radius * Math.cos(_step2 * index), "px + var(--item-diff-x, 0px))");
        var _y = "calc(".concat(radius * Math.sin(_step2 * index), "px + var(--item-diff-y, 0px))");
        if (_direction === 'up-left') {
          return {
            right: _x,
            bottom: _y
          };
        } else if (_direction === 'up-right') {
          return {
            left: _x,
            bottom: _y
          };
        } else if (_direction === 'down-left') {
          return {
            right: _y,
            top: _x
          };
        } else if (_direction === 'down-right') {
          return {
            left: _y,
            top: _x
          };
        }
      }
    }
    return {};
  };
  var getItemStyle = function getItemStyle(index) {
    var transitionDelay = calculateTransitionDelay(index);
    var pointStyle = calculatePointStyle(index);
    return _objectSpread({
      transitionDelay: "".concat(transitionDelay, "ms")
    }, pointStyle);
  };
  useMountEffect(function () {
    if (props.type !== 'linear') {
      var _button = DomHandler.findSingle(elementRef.current, '.p-speeddial-button');
      var firstItem = DomHandler.findSingle(listRef.current, '.p-speeddial-item');
      if (_button && firstItem) {
        var wDiff = Math.abs(_button.offsetWidth - firstItem.offsetWidth);
        var hDiff = Math.abs(_button.offsetHeight - firstItem.offsetHeight);
        listRef.current.style.setProperty('--item-diff-x', "".concat(wDiff / 2, "px"));
        listRef.current.style.setProperty('--item-diff-y', "".concat(hDiff / 2, "px"));
      }
    }
  });
  useUpdateEffect(function () {
    if (visibleState) {
      props.hideOnClickOutside && bindDocumentClickListener();
    }
    return function () {
      props.hideOnClickOutside && unbindDocumentClickListener();
    };
  }, [visibleState]);
  React.useImperativeHandle(ref, function () {
    return {
      props: props,
      show: show,
      hide: hide,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var createItem = function createItem(item, index) {
    if (item.visible === false) {
      return null;
    }
    var disabled = item.disabled,
      _icon = item.icon,
      label = item.label,
      template = item.template,
      url = item.url,
      target = item.target,
      _itemClassName = item.className,
      _itemStyle = item.style;
    var contentClassName = classNames('p-speeddial-action', {
      'p-disabled': disabled
    });
    var iconClassName = classNames('p-speeddial-action-icon', _icon);
    var actionIconProps = mergeProps({
      className: cx('actionIcon')
    }, ptm('actionIcon'));
    var actionProps = mergeProps({
      href: url || '#',
      role: 'menuitem',
      className: classNames(_itemClassName, cx('action', {
        disabled: disabled
      })),
      style: _itemStyle,
      target: target,
      'data-pr-tooltip': label,
      onClick: function onClick(e) {
        return onItemClick(e, item);
      }
    }, ptm('action'));
    var icon = IconUtils.getJSXIcon(_icon, _objectSpread({}, actionIconProps), {
      props: props
    });
    var content = /*#__PURE__*/React.createElement("a", actionProps, icon, /*#__PURE__*/React.createElement(Ripple, null));
    if (template) {
      var defaultContentOptions = {
        onClick: function onClick(e) {
          return onItemClick(e, item);
        },
        className: contentClassName,
        iconClassName: iconClassName,
        element: content,
        props: props,
        visible: visible
      };
      content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
    }
    var menuItemProps = mergeProps({
      key: index,
      className: cx('menuitem'),
      style: getItemStyle(index),
      role: 'none'
    }, ptm('menuitem'));
    return /*#__PURE__*/React.createElement("li", menuItemProps, content);
  };
  var createItems = function createItems() {
    return props.model ? props.model.map(createItem) : null;
  };
  var createList = function createList() {
    var items = createItems();
    var menuProps = mergeProps({
      ref: listRef,
      className: cx('menu'),
      style: sx('menu'),
      role: 'menu'
    }, ptm('menu'));
    return /*#__PURE__*/React.createElement("ul", menuProps, items);
  };
  var createButton = function createButton() {
    var showIconVisible = !visible && !!props.showIcon || !props.hideIcon;
    var hideIconVisible = visible && !!props.hideIcon;
    var className = classNames('p-speeddial-button p-button-rounded', {
      'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
    }, props.buttonClassName);
    var iconClassName = classNames(_defineProperty(_defineProperty({}, "".concat(props.showIcon), !visible && !!props.showIcon || !props.hideIcon), "".concat(props.hideIcon), visible && !!props.hideIcon));
    var icon = showIconVisible ? props.showIcon || /*#__PURE__*/React.createElement(PlusIcon, null) : hideIconVisible ? props.hideIcon || /*#__PURE__*/React.createElement(MinusIcon, null) : null;
    var toggleIcon = IconUtils.getJSXIcon(icon, undefined, {
      props: props,
      visible: visible
    });
    var buttonProps = mergeProps({
      type: 'button',
      style: props.buttonStyle,
      className: classNames(props.buttonClassName, cx('button')),
      icon: toggleIcon,
      onClick: function onClick(e) {
        return _onClick(e);
      },
      disabled: props.disabled,
      'aria-label': props['aria-label'],
      pt: ptm('button'),
      unstyled: props.unstyled,
      __parentMetadata: {
        parent: metaData
      }
    });
    var content = /*#__PURE__*/React.createElement(Button, buttonProps);
    if (props.buttonTemplate) {
      var defaultContentOptions = {
        onClick: _onClick,
        className: className,
        iconClassName: iconClassName,
        element: content,
        props: props,
        visible: visible
      };
      return ObjectUtils.getJSXElement(props.buttonTemplate, defaultContentOptions);
    }
    return content;
  };
  var createMask = function createMask() {
    if (props.mask) {
      var maskProps = mergeProps({
        className: classNames(props.maskClassName, cx('mask', {
          visible: visible
        })),
        style: props.maskStyle
      }, ptm('mask'));
      return /*#__PURE__*/React.createElement("div", maskProps);
    }
    return null;
  };
  var button = createButton();
  var list = createList();
  var mask = createMask();
  var rootProps = mergeProps({
    className: classNames(props.className, cx('root', {
      visible: visible
    })),
    style: _objectSpread(_objectSpread({}, props.style), sx('root'))
  }, SpeedDialBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    id: props.id,
    ref: elementRef
  }, rootProps), button, list), mask);
}));
SpeedDial.displayName = 'SpeedDial';

export { SpeedDial };
