this.primereact = this.primereact || {};
this.primereact.dialog = (function (exports, React, utils, PrimeReact, componentbase, csstransition, hooks, times, windowmaximize, windowminimize, portal, ripple) {
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

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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

  function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var classes = {
    closeButtonIcon: 'p-dialog-header-close-icon',
    closeButton: 'p-dialog-header-icon p-dialog-header-close p-link',
    maximizableIcon: 'p-dialog-header-maximize-icon',
    maximizableButton: 'p-dialog-header-icon p-dialog-header-maximize p-link',
    header: function header(_ref) {
      var props = _ref.props;
      return utils.classNames('p-dialog-header', props.headerClassName);
    },
    headerTitle: 'p-dialog-title',
    headerIcons: 'p-dialog-header-icons',
    content: function content(_ref2) {
      var props = _ref2.props;
      return utils.classNames('p-dialog-content', props.contentClassName);
    },
    footer: 'p-dialog-footer',
    mask: function mask(_ref3) {
      var props = _ref3.props,
        maskVisibleState = _ref3.maskVisibleState;
      var positions = ['center', 'left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
      var pos = positions.find(function (item) {
        return item === props.position || item.replace('-', '') === props.position;
      });
      return utils.classNames('p-dialog-mask', pos ? "p-dialog-".concat(pos) : '', {
        'p-component-overlay p-component-overlay-enter': props.modal,
        'p-dialog-visible': maskVisibleState,
        'p-dialog-draggable': props.draggable,
        'p-dialog-resizable': props.resizable
      }, props.maskClassName);
    },
    root: function root(_ref4) {
      var props = _ref4.props,
        maximized = _ref4.maximized,
        context = _ref4.context;
      return utils.classNames('p-dialog p-component', props.className, {
        'p-dialog-rtl': props.rtl,
        'p-dialog-maximized': maximized,
        'p-dialog-default': !maximized,
        'p-input-filled': context && context.inputStyle === 'filled' || PrimeReact__default["default"].inputStyle === 'filled',
        'p-ripple-disabled': context && context.ripple === false || PrimeReact__default["default"].ripple === false
      });
    },
    transition: 'p-dialog'
  };
  var styles = "\n@layer primereact {\n    .p-dialog-mask {\n        background-color: transparent;\n        transition-property: background-color;\n    }\n    \n    .p-dialog-visible {\n        display: flex;\n    }\n    \n    .p-dialog-mask.p-component-overlay {\n        pointer-events: auto;\n    }\n    \n    .p-dialog {\n        display: flex;\n        flex-direction: column;\n        pointer-events: auto;\n        max-height: 90%;\n        transform: scale(1);\n        position: relative;\n    }\n    \n    .p-dialog-content {\n        overflow-y: auto;\n        flex-grow: 1;\n    }\n    \n    .p-dialog-header {\n        display: flex;\n        align-items: center;\n        flex-shrink: 0;\n    }\n    \n    .p-dialog-footer {\n        flex-shrink: 0;\n    }\n    \n    .p-dialog .p-dialog-header-icons {\n        display: flex;\n        align-items: center;\n        align-self: flex-start;\n        flex-shrink: 0;\n    }\n    \n    .p-dialog .p-dialog-header-icon {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-dialog .p-dialog-title {\n        flex-grow: 1;\n    }\n    \n    /* Fluid */\n    .p-fluid .p-dialog-footer .p-button {\n        width: auto;\n    }\n    \n    /* Animation */\n    /* Center */\n    .p-dialog-enter {\n        opacity: 0;\n        transform: scale(0.7);\n    }\n    \n    .p-dialog-enter-active {\n        opacity: 1;\n        transform: scale(1);\n        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    }\n    \n    .p-dialog-enter-done {\n        transform: none;\n    }\n    \n    .p-dialog-exit-active {\n        opacity: 0;\n        transform: scale(0.7);\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n    \n    /* Top, Bottom, Left, Right, Top* and Bottom* */\n    .p-dialog-top .p-dialog,\n    .p-dialog-bottom .p-dialog,\n    .p-dialog-left .p-dialog,\n    .p-dialog-right .p-dialog,\n    .p-dialog-top-left .p-dialog,\n    .p-dialog-top-right .p-dialog,\n    .p-dialog-bottom-left .p-dialog,\n    .p-dialog-bottom-right .p-dialog {\n        margin: 0.75em;\n    }\n    \n    .p-dialog-top .p-dialog-enter,\n    .p-dialog-top .p-dialog-exit-active {\n        transform: translate3d(0px, -100%, 0px);\n    }\n    \n    .p-dialog-bottom .p-dialog-enter,\n    .p-dialog-bottom .p-dialog-exit-active {\n        transform: translate3d(0px, 100%, 0px);\n    }\n    \n    .p-dialog-left .p-dialog-enter,\n    .p-dialog-left .p-dialog-exit-active,\n    .p-dialog-top-left .p-dialog-enter,\n    .p-dialog-top-left .p-dialog-exit-active,\n    .p-dialog-bottom-left .p-dialog-enter,\n    .p-dialog-bottom-left .p-dialog-exit-active {\n        transform: translate3d(-100%, 0px, 0px);\n    }\n    \n    .p-dialog-right .p-dialog-enter,\n    .p-dialog-right .p-dialog-exit-active,\n    .p-dialog-top-right .p-dialog-enter,\n    .p-dialog-top-right .p-dialog-exit-active,\n    .p-dialog-bottom-right .p-dialog-enter,\n    .p-dialog-bottom-right .p-dialog-exit-active {\n        transform: translate3d(100%, 0px, 0px);\n    }\n    \n    .p-dialog-top .p-dialog-enter-active,\n    .p-dialog-bottom .p-dialog-enter-active,\n    .p-dialog-left .p-dialog-enter-active,\n    .p-dialog-top-left .p-dialog-enter-active,\n    .p-dialog-bottom-left .p-dialog-enter-active,\n    .p-dialog-right .p-dialog-enter-active,\n    .p-dialog-top-right .p-dialog-enter-active,\n    .p-dialog-bottom-right .p-dialog-enter-active {\n        transform: translate3d(0px, 0px, 0px);\n        transition: all 0.3s ease-out;\n    }\n    \n    .p-dialog-top .p-dialog-exit-active,\n    .p-dialog-bottom .p-dialog-exit-active,\n    .p-dialog-left .p-dialog-exit-active,\n    .p-dialog-top-left .p-dialog-exit-active,\n    .p-dialog-bottom-left .p-dialog-exit-active,\n    .p-dialog-right .p-dialog-exit-active,\n    .p-dialog-top-right .p-dialog-exit-active,\n    .p-dialog-bottom-right .p-dialog-exit-active {\n        transition: all 0.3s ease-out;\n    }\n    \n    /* Maximize */\n    .p-dialog-maximized {\n        transition: none;\n        transform: none;\n        margin: 0;\n        width: 100vw !important;\n        height: 100vh !important;\n        max-height: 100%;\n        top: 0px;\n        left: 0px;\n    }\n    \n    .p-dialog-maximized .p-dialog-content {\n        flex-grow: 1;\n    }\n    \n    .p-confirm-dialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n    }\n    \n    /* Resizable */\n    .p-dialog .p-resizable-handle {\n        position: absolute;\n        font-size: 0.1px;\n        display: block;\n        cursor: se-resize;\n        width: 12px;\n        height: 12px;\n        right: 1px;\n        bottom: 1px;\n    }\n    \n    .p-dialog-draggable .p-dialog-header {\n        cursor: move;\n    }        \n}\n";
  var inlineStyles = {
    mask: function mask(_ref5) {
      var props = _ref5.props;
      return _objectSpread$1({
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: props.position === 'left' || props.position === 'top-left' || props.position === 'bottom-left' ? 'flex-start' : props.position === 'right' || props.position === 'top-right' || props.position === 'bottom-right' ? 'flex-end' : 'center',
        alignItems: props.position === 'top' || props.position === 'top-left' || props.position === 'top-right' ? 'flex-start' : props.position === 'bottom' || props.position === 'bottom-left' || props.position === 'bottom-right' ? 'flex-end' : 'center',
        pointerEvents: !props.modal && 'none'
      }, props.maskStyle);
    }
  };
  var DialogBase = componentbase.ComponentBase.extend({
    defaultProps: {
      __TYPE: 'Dialog',
      __parentMetadata: null,
      appendTo: null,
      ariaCloseIconLabel: null,
      baseZIndex: 0,
      blockScroll: false,
      breakpoints: null,
      className: null,
      closable: true,
      closeIcon: null,
      closeOnEscape: true,
      contentClassName: null,
      contentStyle: null,
      dismissableMask: false,
      draggable: true,
      focusOnShow: true,
      footer: null,
      header: null,
      headerClassName: null,
      headerStyle: null,
      icons: null,
      id: null,
      keepInViewport: true,
      maskClassName: null,
      maskStyle: null,
      maximizable: false,
      maximizeIcon: null,
      maximized: false,
      minX: 0,
      minY: 0,
      minimizeIcon: null,
      modal: true,
      onClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragStart: null,
      onHide: null,
      onMaskClick: null,
      onMaximize: null,
      onResize: null,
      onResizeEnd: null,
      onResizeStart: null,
      onShow: null,
      position: 'center',
      resizable: true,
      rtl: false,
      showHeader: true,
      style: null,
      transitionOptions: null,
      visible: false,
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
  var Dialog = /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
    var context = React__namespace.useContext(PrimeReact.PrimeReactContext);
    var props = DialogBase.getProps(inProps, context);
    var uniqueId = props.id ? props.id : utils.UniqueComponentId();
    var _React$useState = React__namespace.useState(uniqueId),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      idState = _React$useState2[0];
      _React$useState2[1];
    var _React$useState3 = React__namespace.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      maskVisibleState = _React$useState4[0],
      setMaskVisibleState = _React$useState4[1];
    var _React$useState5 = React__namespace.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      visibleState = _React$useState6[0],
      setVisibleState = _React$useState6[1];
    var _React$useState7 = React__namespace.useState(props.maximized),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      maximizedState = _React$useState8[0],
      setMaximizedState = _React$useState8[1];
    var dialogRef = React__namespace.useRef(null);
    var maskRef = React__namespace.useRef(null);
    var pointerRef = React__namespace.useRef(null);
    var contentRef = React__namespace.useRef(null);
    var headerRef = React__namespace.useRef(null);
    var footerRef = React__namespace.useRef(null);
    var closeRef = React__namespace.useRef(null);
    var dragging = React__namespace.useRef(false);
    var resizing = React__namespace.useRef(false);
    var lastPageX = React__namespace.useRef(null);
    var lastPageY = React__namespace.useRef(null);
    var styleElement = React__namespace.useRef(null);
    var attributeSelector = React__namespace.useRef(uniqueId);
    var focusElementOnHide = React__namespace.useRef(null);
    var maximized = props.onMaximize ? props.maximized : maximizedState;
    var shouldBlockScroll = visibleState && (props.blockScroll || props.maximizable && maximized);
    var _DialogBase$setMetaDa = DialogBase.setMetaData(_objectSpread(_objectSpread({
        props: props
      }, props.__parentMetadata), {}, {
        state: {
          id: idState,
          maximized: maximized,
          containerVisible: maskVisibleState
        }
      })),
      ptm = _DialogBase$setMetaDa.ptm,
      cx = _DialogBase$setMetaDa.cx,
      sx = _DialogBase$setMetaDa.sx,
      isUnstyled = _DialogBase$setMetaDa.isUnstyled;
    componentbase.useHandleStyle(DialogBase.css.styles, isUnstyled, {
      name: 'dialog'
    });
    useOnEscapeKey(maskRef, props.closable && props.closeOnEscape, function (event) {
      var currentTarget = event.currentTarget;
      if (!currentTarget || !currentTarget.primeDialogParams) {
        return;
      }
      var params = currentTarget.primeDialogParams;
      var paramLength = params.length;
      onClose(event);
      params.splice(paramLength - 1, 1);
    });
    var _useEventListener = hooks.useEventListener({
        type: 'keydown',
        listener: function listener(event) {
          return onKeyDown(event);
        }
      }),
      _useEventListener2 = _slicedToArray(_useEventListener, 2),
      bindDocumentKeyDownListener = _useEventListener2[0],
      unbindDocumentKeyDownListener = _useEventListener2[1];
    var _useEventListener3 = hooks.useEventListener({
        type: 'mousemove',
        target: function target() {
          return window.document;
        },
        listener: function listener(event) {
          return onResize(event);
        }
      }),
      _useEventListener4 = _slicedToArray(_useEventListener3, 2),
      bindDocumentResizeListener = _useEventListener4[0],
      unbindDocumentResizeListener = _useEventListener4[1];
    var _useEventListener5 = hooks.useEventListener({
        type: 'mouseup',
        target: function target() {
          return window.document;
        },
        listener: function listener(event) {
          return onResizeEnd(event);
        }
      }),
      _useEventListener6 = _slicedToArray(_useEventListener5, 2),
      bindDocumentResizeEndListener = _useEventListener6[0],
      unbindDocumentResizEndListener = _useEventListener6[1];
    var _useEventListener7 = hooks.useEventListener({
        type: 'mousemove',
        target: function target() {
          return window.document;
        },
        listener: function listener(event) {
          return onDrag(event);
        }
      }),
      _useEventListener8 = _slicedToArray(_useEventListener7, 2),
      bindDocumentDragListener = _useEventListener8[0],
      unbindDocumentDragListener = _useEventListener8[1];
    var _useEventListener9 = hooks.useEventListener({
        type: 'mouseup',
        target: function target() {
          return window.document;
        },
        listener: function listener(event) {
          return onDragEnd(event);
        }
      }),
      _useEventListener10 = _slicedToArray(_useEventListener9, 2),
      bindDocumentDragEndListener = _useEventListener10[0],
      unbindDocumentDragEndListener = _useEventListener10[1];
    var onClose = function onClose(event) {
      props.onHide();
      event.preventDefault();
    };
    var focus = function focus() {
      var activeElement = document.activeElement;
      var isActiveElementInDialog = activeElement && dialogRef.current && dialogRef.current.contains(activeElement);
      if (!isActiveElementInDialog && props.closable && props.showHeader) {
        closeRef.current.focus();
      }
    };
    var onDialogPointerDown = function onDialogPointerDown(event) {
      pointerRef.current = event.target;
      props.onPointerDown && props.onPointerDown(event);
    };
    var onMaskPointerUp = function onMaskPointerUp(event) {
      if (props.dismissableMask && props.modal && maskRef.current === event.target && !pointerRef.current) {
        onClose(event);
      }
      props.onMaskClick && props.onMaskClick(event);
      pointerRef.current = null;
    };
    var toggleMaximize = function toggleMaximize(event) {
      if (props.onMaximize) {
        props.onMaximize({
          originalEvent: event,
          maximized: !maximized
        });
      } else {
        setMaximizedState(function (prevMaximized) {
          return !prevMaximized;
        });
      }
      event.preventDefault();
    };
    var onKeyDown = function onKeyDown(event) {
      var currentTarget = event.currentTarget;
      if (!currentTarget || !currentTarget.primeDialogParams) {
        return;
      }
      var params = currentTarget.primeDialogParams;
      var paramLength = params.length;
      var dialogId = params[paramLength - 1] ? params[paramLength - 1].id : undefined;
      if (dialogId !== idState) {
        return;
      }
      var dialog = document.getElementById(dialogId);
      if (event.key === 'Tab') {
        event.preventDefault();
        var focusableElements = utils.DomHandler.getFocusableElements(dialog);
        if (focusableElements && focusableElements.length > 0) {
          if (!document.activeElement) {
            focusableElements[0].focus();
          } else {
            var focusedIndex = focusableElements.indexOf(document.activeElement);
            if (event.shiftKey) {
              if (focusedIndex === -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
            } else {
              if (focusedIndex === -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
            }
          }
        }
      }
    };
    var onDragStart = function onDragStart(event) {
      if (utils.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || utils.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
        return;
      }
      if (props.draggable) {
        dragging.current = true;
        lastPageX.current = event.pageX;
        lastPageY.current = event.pageY;
        dialogRef.current.style.margin = '0';
        utils.DomHandler.addClass(document.body, 'p-unselectable-text');
        props.onDragStart && props.onDragStart(event);
      }
    };
    var onDrag = function onDrag(event) {
      if (dragging.current) {
        var width = utils.DomHandler.getOuterWidth(dialogRef.current);
        var height = utils.DomHandler.getOuterHeight(dialogRef.current);
        var deltaX = event.pageX - lastPageX.current;
        var deltaY = event.pageY - lastPageY.current;
        var offset = dialogRef.current.getBoundingClientRect();
        var leftPos = offset.left + deltaX;
        var topPos = offset.top + deltaY;
        var viewport = utils.DomHandler.getViewport();
        var computedStyle = getComputedStyle(dialogRef.current);
        var leftMargin = parseFloat(computedStyle.marginLeft);
        var topMargin = parseFloat(computedStyle.marginTop);
        dialogRef.current.style.position = 'fixed';
        if (props.keepInViewport) {
          if (leftPos >= props.minX && leftPos + width < viewport.width) {
            lastPageX.current = event.pageX;
            dialogRef.current.style.left = leftPos - leftMargin + 'px';
          }
          if (topPos >= props.minY && topPos + height < viewport.height) {
            lastPageY.current = event.pageY;
            dialogRef.current.style.top = topPos - topMargin + 'px';
          }
        } else {
          lastPageX.current = event.pageX;
          dialogRef.current.style.left = leftPos - leftMargin + 'px';
          lastPageY.current = event.pageY;
          dialogRef.current.style.top = topPos - topMargin + 'px';
        }
        props.onDrag && props.onDrag(event);
      }
    };
    var onDragEnd = function onDragEnd(event) {
      if (dragging.current) {
        dragging.current = false;
        utils.DomHandler.removeClass(document.body, 'p-unselectable-text');
        props.onDragEnd && props.onDragEnd(event);
      }
    };
    var onResizeStart = function onResizeStart(event) {
      if (props.resizable) {
        resizing.current = true;
        lastPageX.current = event.pageX;
        lastPageY.current = event.pageY;
        utils.DomHandler.addClass(document.body, 'p-unselectable-text');
        props.onResizeStart && props.onResizeStart(event);
      }
    };
    var convertToPx = function convertToPx(value, property, viewport) {
      !viewport && (viewport = utils.DomHandler.getViewport());
      var val = parseInt(value);
      if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(value)) {
        return val * (viewport[property] / 100);
      }
      return val;
    };
    var onResize = function onResize(event) {
      if (resizing.current) {
        var deltaX = event.pageX - lastPageX.current;
        var deltaY = event.pageY - lastPageY.current;
        var width = utils.DomHandler.getOuterWidth(dialogRef.current);
        var height = utils.DomHandler.getOuterHeight(dialogRef.current);
        var offset = dialogRef.current.getBoundingClientRect();
        var viewport = utils.DomHandler.getViewport();
        var hasBeenDragged = !parseInt(dialogRef.current.style.top) || !parseInt(dialogRef.current.style.left);
        var minWidth = convertToPx(dialogRef.current.style.minWidth, 'width', viewport);
        var minHeight = convertToPx(dialogRef.current.style.minHeight, 'height', viewport);
        var newWidth = width + deltaX;
        var newHeight = height + deltaY;
        if (hasBeenDragged) {
          newWidth += deltaX;
          newHeight += deltaY;
        }
        if ((!minWidth || newWidth > minWidth) && offset.left + newWidth < viewport.width) {
          dialogRef.current.style.width = newWidth + 'px';
        }
        if ((!minHeight || newHeight > minHeight) && offset.top + newHeight < viewport.height) {
          dialogRef.current.style.height = newHeight + 'px';
        }
        lastPageX.current = event.pageX;
        lastPageY.current = event.pageY;
        props.onResize && props.onResize(event);
      }
    };
    var onResizeEnd = function onResizeEnd(event) {
      if (resizing.current) {
        resizing.current = false;
        utils.DomHandler.removeClass(document.body, 'p-unselectable-text');
        props.onResizeEnd && props.onResizeEnd(event);
      }
    };
    var resetPosition = function resetPosition() {
      dialogRef.current.style.position = '';
      dialogRef.current.style.left = '';
      dialogRef.current.style.top = '';
      dialogRef.current.style.margin = '';
    };
    var onEnter = function onEnter() {
      dialogRef.current.setAttribute(attributeSelector.current, '');
    };
    var onEntered = function onEntered() {
      props.onShow && props.onShow();
      if (props.focusOnShow) {
        focus();
      }
      enableDocumentSettings();
    };
    var onExiting = function onExiting() {
      if (props.modal) {
        utils.DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
      }
    };
    var onExited = function onExited() {
      dragging.current = false;
      utils.ZIndexUtils.clear(maskRef.current);
      setMaskVisibleState(false);
      disableDocumentSettings();

      // return focus to element before dialog was open
      utils.DomHandler.focus(focusElementOnHide.current);
      focusElementOnHide.current = null;
    };
    var enableDocumentSettings = function enableDocumentSettings() {
      bindGlobalListeners();
      updateGlobalDialogsRegistry(true);
    };
    var disableDocumentSettings = function disableDocumentSettings() {
      unbindGlobalListeners();
      updateGlobalDialogsRegistry(false);
    };
    var updateScrollBlocker = function updateScrollBlocker() {
      // Scroll should be unblocked if there is at least one dialog that blocks scrolling:
      var isThereAnyDialogThatBlocksScrolling = document.primeDialogParams && document.primeDialogParams.some(function (i) {
        return i.hasBlockScroll;
      });
      if (isThereAnyDialogThatBlocksScrolling) {
        utils.DomHandler.blockBodyScroll();
      } else {
        utils.DomHandler.unblockBodyScroll();
      }
    };
    var updateGlobalDialogsRegistry = function updateGlobalDialogsRegistry(isMounted) {
      // Update current dialog info in global registry if it is mounted:
      if (isMounted) {
        var newParam = {
          id: idState,
          hasBlockScroll: shouldBlockScroll
        };

        // Create registry if not yet created:
        if (!document.primeDialogParams) {
          document.primeDialogParams = [];
        }
        var currentDialogIndexInRegistry = document.primeDialogParams.findIndex(function (dialogInRegistry) {
          return dialogInRegistry.id === idState;
        });
        if (currentDialogIndexInRegistry === -1) {
          document.primeDialogParams = [].concat(_toConsumableArray(document.primeDialogParams), [newParam]);
        } else {
          document.primeDialogParams = document.primeDialogParams.toSpliced(currentDialogIndexInRegistry, 1, newParam);
        }
      }
      // Or remove it from global registry if unmounted:
      else {
        document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function (param) {
          return param.id !== idState;
        });
      }

      // Always update scroll blocker after dialog registry - this way we ensure that
      // p-overflow-hidden class is properly added/removed:
      updateScrollBlocker();
    };
    var bindGlobalListeners = function bindGlobalListeners() {
      if (props.draggable) {
        bindDocumentDragListener();
        bindDocumentDragEndListener();
      }
      if (props.resizable) {
        bindDocumentResizeListener();
        bindDocumentResizeEndListener();
      }
      bindDocumentKeyDownListener();
    };
    var unbindGlobalListeners = function unbindGlobalListeners() {
      unbindDocumentDragListener();
      unbindDocumentDragEndListener();
      unbindDocumentResizeListener();
      unbindDocumentResizEndListener();
      unbindDocumentKeyDownListener();
    };
    var createStyle = function createStyle() {
      styleElement.current = utils.DomHandler.createInlineStyle(context && context.nonce || PrimeReact__default["default"].nonce);
      var innerHTML = '';
      for (var breakpoint in props.breakpoints) {
        innerHTML += "\n                @media screen and (max-width: ".concat(breakpoint, ") {\n                    .p-dialog[").concat(attributeSelector.current, "] {\n                        width: ").concat(props.breakpoints[breakpoint], ";\n                    }\n                }\n            ");
      }
      styleElement.current.innerHTML = innerHTML;
    };
    hooks.useMountEffect(function () {
      if (props.visible) {
        setMaskVisibleState(true);
      }
      if (props.breakpoints) {
        createStyle();
      }
    });
    hooks.useUpdateEffect(function () {
      if (props.visible && !maskVisibleState) {
        setMaskVisibleState(true);
      }
      if (props.visible !== visibleState && maskVisibleState) {
        setVisibleState(props.visible);
      }
      if (props.visible) {
        // Remember the focused element before we opened the dialog
        // so we can return focus to it once we close the dialog.
        focusElementOnHide.current = document.activeElement;
      }
    }, [props.visible, maskVisibleState]);
    hooks.useUpdateEffect(function () {
      if (maskVisibleState) {
        utils.ZIndexUtils.set('modal', maskRef.current, context && context.autoZIndex || PrimeReact__default["default"].autoZIndex, props.baseZIndex || context && context.zIndex['modal'] || PrimeReact__default["default"].zIndex['modal']);
        setVisibleState(true);
      }
    }, [maskVisibleState]);
    hooks.useUpdateEffect(function () {
      updateGlobalDialogsRegistry(true);
    }, [shouldBlockScroll]);
    hooks.useUnmountEffect(function () {
      disableDocumentSettings();
      utils.DomHandler.removeInlineStyle(styleElement.current);
      utils.ZIndexUtils.clear(maskRef.current);
    });
    React__namespace.useImperativeHandle(ref, function () {
      return {
        props: props,
        resetPosition: resetPosition,
        getElement: function getElement() {
          return dialogRef.current;
        },
        getMask: function getMask() {
          return maskRef.current;
        },
        getContent: function getContent() {
          return contentRef.current;
        },
        getHeader: function getHeader() {
          return headerRef.current;
        },
        getFooter: function getFooter() {
          return footerRef.current;
        },
        getCloseButton: function getCloseButton() {
          return closeRef.current;
        }
      };
    });
    var createCloseIcon = function createCloseIcon() {
      if (props.closable) {
        var ariaLabel = props.ariaCloseIconLabel || PrimeReact.localeOption('close');
        var closeButtonIconProps = utils.mergeProps({
          className: cx('closeButtonIcon'),
          'aria-hidden': true
        }, ptm('closeButtonIcon'));
        var icon = props.closeIcon || /*#__PURE__*/React__namespace.createElement(times.TimesIcon, closeButtonIconProps);
        var headerCloseIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, closeButtonIconProps), {
          props: props
        });
        var closeButtonProps = utils.mergeProps({
          ref: closeRef,
          type: 'button',
          className: cx('closeButton'),
          'aria-label': ariaLabel,
          onClick: onClose
        }, ptm('closeButton'));
        return /*#__PURE__*/React__namespace.createElement("button", closeButtonProps, headerCloseIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
      }
      return null;
    };
    var createMaximizeIcon = function createMaximizeIcon() {
      var icon;
      var maximizableIconProps = utils.mergeProps({
        className: cx('maximizableIcon')
      }, ptm('maximizableIcon'));
      if (!maximized) {
        icon = props.maximizeIcon || /*#__PURE__*/React__namespace.createElement(windowmaximize.WindowMaximizeIcon, maximizableIconProps);
      } else {
        icon = props.minimizeIcon || /*#__PURE__*/React__namespace.createElement(windowminimize.WindowMinimizeIcon, maximizableIconProps);
      }
      var toggleIcon = utils.IconUtils.getJSXIcon(icon, maximizableIconProps, {
        props: props
      });
      if (props.maximizable) {
        var maximizableButtonProps = utils.mergeProps({
          type: 'button',
          className: cx('maximizableButton'),
          onClick: toggleMaximize
        }, ptm('maximizableButton'));
        return /*#__PURE__*/React__namespace.createElement("button", maximizableButtonProps, toggleIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
      }
      return null;
    };
    var createHeader = function createHeader() {
      if (props.showHeader) {
        var closeIcon = createCloseIcon();
        var maximizeIcon = createMaximizeIcon();
        var icons = utils.ObjectUtils.getJSXElement(props.icons, props);
        var header = utils.ObjectUtils.getJSXElement(props.header, props);
        var headerId = idState + '_header';
        var headerProps = utils.mergeProps({
          ref: headerRef,
          style: props.headerStyle,
          className: cx('header'),
          onMouseDown: onDragStart
        }, ptm('header'));
        var headerTitleProps = utils.mergeProps({
          id: headerId,
          className: cx('headerTitle')
        }, ptm('headerTitle'));
        var headerIconsProps = utils.mergeProps({
          className: cx('headerIcons')
        }, ptm('headerIcons'));
        return /*#__PURE__*/React__namespace.createElement("div", headerProps, /*#__PURE__*/React__namespace.createElement("div", headerTitleProps, header), /*#__PURE__*/React__namespace.createElement("div", headerIconsProps, icons, maximizeIcon, closeIcon));
      }
      return null;
    };
    var createContent = function createContent() {
      var contentId = idState + '_content';
      var contentProps = utils.mergeProps({
        id: contentId,
        ref: contentRef,
        style: props.contentStyle,
        className: cx('content')
      }, ptm('content'));
      return /*#__PURE__*/React__namespace.createElement("div", contentProps, props.children);
    };
    var createFooter = function createFooter() {
      var footer = utils.ObjectUtils.getJSXElement(props.footer, props);
      var footerProps = utils.mergeProps({
        ref: footerRef,
        className: cx('footer')
      }, ptm('footer'));
      return footer && /*#__PURE__*/React__namespace.createElement("div", footerProps, footer);
    };
    var createResizer = function createResizer() {
      if (props.resizable) {
        return /*#__PURE__*/React__namespace.createElement("span", {
          className: "p-resizable-handle",
          style: {
            zIndex: 90
          },
          onMouseDown: onResizeStart
        });
      }
      return null;
    };
    var createElement = function createElement() {
      var header = createHeader();
      var content = createContent();
      var footer = createFooter();
      var resizer = createResizer();
      var headerId = idState + '_header';
      var contentId = idState + '_content';
      var transitionTimeout = {
        enter: props.position === 'center' ? 150 : 300,
        exit: props.position === 'center' ? 150 : 300
      };
      var maskProps = utils.mergeProps({
        ref: maskRef,
        style: sx('mask'),
        className: cx('mask'),
        onPointerUp: onMaskPointerUp
      }, ptm('mask'));
      var rootProps = utils.mergeProps({
        ref: dialogRef,
        id: idState,
        className: cx('root', {
          props: props,
          maximized: maximized,
          context: context
        }),
        style: props.style,
        onClick: props.onClick,
        role: 'dialog',
        'aria-labelledby': headerId,
        'aria-describedby': contentId,
        'aria-modal': props.modal,
        onPointerDown: onDialogPointerDown
      }, DialogBase.getOtherProps(props), ptm('root'));
      var transitionProps = utils.mergeProps({
        classNames: cx('transition'),
        timeout: transitionTimeout,
        "in": visibleState,
        options: props.transitionOptions,
        unmountOnExit: true,
        onEnter: onEnter,
        onEntered: onEntered,
        onExiting: onExiting,
        onExited: onExited
      }, ptm('transition'));
      return /*#__PURE__*/React__namespace.createElement("div", maskProps, /*#__PURE__*/React__namespace.createElement(csstransition.CSSTransition, _extends({
        nodeRef: dialogRef
      }, transitionProps), /*#__PURE__*/React__namespace.createElement("div", rootProps, header, content, footer, resizer)));
    };
    var createDialog = function createDialog() {
      var element = createElement();
      return /*#__PURE__*/React__namespace.createElement(portal.Portal, {
        element: element,
        appendTo: props.appendTo,
        visible: true
      });
    };
    return maskVisibleState && createDialog();
  });
  Dialog.displayName = 'Dialog';

  exports.Dialog = Dialog;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, primereact.utils, primereact.api, primereact.componentbase, primereact.csstransition, primereact.hooks, primereact.icons.times, primereact.icons.windowmaximize, primereact.icons.windowminimize, primereact.portal, primereact.ripple);
