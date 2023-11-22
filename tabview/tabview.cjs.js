'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var api = require('primereact/api');
var componentbase = require('primereact/componentbase');
var hooks = require('primereact/hooks');
var chevronleft = require('primereact/icons/chevronleft');
var chevronright = require('primereact/icons/chevronright');
var times = require('primereact/icons/times');
var ripple = require('primereact/ripple');
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

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var classes = {
  navcontent: 'p-tabview-nav-content',
  nav: 'p-tabview-nav',
  inkbar: 'p-tabview-ink-bar',
  panelcontainer: function panelcontainer(_ref) {
    var props = _ref.props;
    return utils.classNames('p-tabview-panels', props.panelContainerClassName);
  },
  prevbutton: 'p-tabview-nav-prev p-tabview-nav-btn p-link',
  nextbutton: 'p-tabview-nav-next p-tabview-nav-btn p-link',
  root: function root(_ref2) {
    var props = _ref2.props;
    return utils.classNames('p-tabview p-component', {
      'p-tabview-scrollable': props.scrollable
    }, props.className);
  },
  navcontainer: 'p-tabview-nav-container',
  tab: {
    header: function header(_ref3) {
      var selected = _ref3.selected,
        disabled = _ref3.disabled,
        headerClassName = _ref3.headerClassName,
        _className = _ref3._className;
      return utils.classNames('p-unselectable-text', {
        'p-tabview-selected p-highlight': selected,
        'p-disabled': disabled
      }, headerClassName, _className);
    },
    headertitle: 'p-tabview-title',
    headeraction: 'p-tabview-nav-link',
    content: function content(_ref4) {
      var props = _ref4.props,
        selected = _ref4.selected,
        getTabProp = _ref4.getTabProp,
        tab = _ref4.tab,
        isSelected = _ref4.isSelected,
        shouldUseTab = _ref4.shouldUseTab,
        index = _ref4.index;
      return shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index)) ? utils.classNames(getTabProp(tab, 'contentClassName'), getTabProp(tab, 'className'), 'p-tabview-panel', {
        'p-hidden': !selected
      }) : undefined;
    }
  }
};
var styles = "\n@layer primereact {\n    .p-tabview-nav-container {\n        position: relative;\n    }\n    \n    .p-tabview-scrollable .p-tabview-nav-container {\n        overflow: hidden;\n    }\n    \n    .p-tabview-nav-content {\n        overflow-x: auto;\n        overflow-y: hidden;\n        scroll-behavior: smooth;\n        scrollbar-width: none;\n        overscroll-behavior: contain auto;\n        position: relative;\n    }\n    \n    .p-tabview-nav {\n        display: flex;\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        flex: 1 1 auto;\n    }\n    \n    .p-tabview-nav-link {\n        cursor: pointer;\n        user-select: none;\n        display: flex;\n        align-items: center;\n        position: relative;\n        text-decoration: none;\n        overflow: hidden;\n    }\n    \n    .p-tabview-ink-bar {\n        display: none;\n        z-index: 1;\n    }\n    \n    .p-tabview-nav-link:focus {\n        z-index: 1;\n    }\n    \n    .p-tabview-close {\n        z-index: 1;\n    }\n    \n    .p-tabview-title {\n        line-height: 1;\n        white-space: nowrap;\n    }\n    \n    .p-tabview-nav-btn {\n        position: absolute;\n        top: 0;\n        z-index: 2;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .p-tabview-nav-prev {\n        left: 0;\n    }\n    \n    .p-tabview-nav-next {\n        right: 0;\n    }\n    \n    .p-tabview-nav-content::-webkit-scrollbar {\n        display: none;\n    }\n}\n";
var inlineStyles = {
  tab: {
    header: function header(_ref5) {
      var headerStyle = _ref5.headerStyle,
        _style = _ref5._style;
      return _objectSpread$1(_objectSpread$1({}, headerStyle || {}), _style || {});
    },
    content: function content(_ref6) {
      var props = _ref6.props,
        getTabProp = _ref6.getTabProp,
        tab = _ref6.tab,
        isSelected = _ref6.isSelected,
        shouldUseTab = _ref6.shouldUseTab,
        index = _ref6.index;
      return shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index)) ? _objectSpread$1(_objectSpread$1({}, getTabProp(tab, 'contentStyle') || {}), getTabProp(tab, 'style') || {}) : undefined;
    }
  }
};
var TabViewBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'TabView',
    id: null,
    activeIndex: 0,
    className: null,
    onBeforeTabChange: null,
    onBeforeTabClose: null,
    onTabChange: null,
    onTabClose: null,
    panelContainerClassName: null,
    panelContainerStyle: null,
    renderActiveOnly: true,
    scrollable: false,
    style: null,
    children: undefined
  },
  css: {
    classes: classes,
    styles: styles,
    inlineStyles: inlineStyles
  }
});
var TabPanelBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'TabPanel',
    className: null,
    closable: false,
    contentClassName: null,
    contentStyle: null,
    disabled: false,
    header: null,
    headerClassName: null,
    headerStyle: null,
    headerTemplate: null,
    leftIcon: null,
    rightIcon: null,
    prevButton: null,
    nextButton: null,
    closeIcon: null,
    style: null,
    children: undefined
  },
  getCProp: function getCProp(tab, name) {
    return utils.ObjectUtils.getComponentProp(tab, name, TabPanelBase.defaultProps);
  },
  getCProps: function getCProps(tab) {
    return utils.ObjectUtils.getComponentProps(tab, TabPanelBase.defaultProps);
  },
  getCOtherProps: function getCOtherProps(tab) {
    return utils.ObjectUtils.getComponentDiffProps(tab, TabPanelBase.defaultProps);
  }
});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TabPanel = function TabPanel() {};
var TabView = /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = TabViewBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(props.id),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    idState = _React$useState2[0],
    setIdState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    backwardIsDisabledState = _React$useState4[0],
    setBackwardIsDisabledState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    forwardIsDisabledState = _React$useState6[0],
    setForwardIsDisabledState = _React$useState6[1];
  var _React$useState7 = React__namespace.useState([]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    hiddenTabsState = _React$useState8[0],
    setHiddenTabsState = _React$useState8[1];
  var _React$useState9 = React__namespace.useState(props.activeIndex),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    activeIndexState = _React$useState10[0],
    setActiveIndexState = _React$useState10[1];
  var elementRef = React__namespace.useRef(null);
  var contentRef = React__namespace.useRef(null);
  var navRef = React__namespace.useRef(null);
  var inkbarRef = React__namespace.useRef(null);
  var prevBtnRef = React__namespace.useRef(null);
  var nextBtnRef = React__namespace.useRef(null);
  var tabsRef = React__namespace.useRef({});
  var activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;
  var metaData = {
    props: props,
    state: {
      id: idState,
      isPrevButtonDisabled: backwardIsDisabledState,
      isNextButtonDisabled: forwardIsDisabledState,
      hiddenTabsState: hiddenTabsState,
      activeIndex: activeIndexState
    }
  };
  var _TabViewBase$setMetaD = TabViewBase.setMetaData(_objectSpread({}, metaData)),
    ptm = _TabViewBase$setMetaD.ptm,
    ptmo = _TabViewBase$setMetaD.ptmo,
    cx = _TabViewBase$setMetaD.cx,
    sx = _TabViewBase$setMetaD.sx,
    isUnstyled = _TabViewBase$setMetaD.isUnstyled;
  componentbase.useHandleStyle(TabViewBase.css.styles, isUnstyled, {
    name: 'tabview'
  });
  var getTabPT = function getTabPT(tab, key) {
    return ptmo(getTabProp(tab, 'pt'), key, {
      props: tab.props,
      parent: metaData
    });
  };
  var isSelected = function isSelected(index) {
    return index === activeIndex;
  };
  var getTabProp = function getTabProp(tab, name) {
    return TabPanelBase.getCProp(tab, name);
  };
  var shouldUseTab = function shouldUseTab(tab) {
    return tab && utils.ObjectUtils.isValidChild(tab, 'TabPanel') && hiddenTabsState.every(function (_i) {
      return _i !== tab.key;
    });
  };
  var findVisibleActiveTab = function findVisibleActiveTab(i) {
    var tabsInfo = React__namespace.Children.map(props.children, function (tab, index) {
      if (shouldUseTab(tab)) {
        return {
          tab: tab,
          index: index
        };
      }
    });
    return tabsInfo.find(function (_ref) {
      var tab = _ref.tab,
        index = _ref.index;
      return !getTabProp(tab, 'disabled') && index >= i;
    }) || tabsInfo.reverse().find(function (_ref2) {
      var tab = _ref2.tab,
        index = _ref2.index;
      return !getTabProp(tab, 'disabled') && i > index;
    });
  };
  var onTabHeaderClose = function onTabHeaderClose(event, index) {
    event.preventDefault();
    var onBeforeTabClose = props.onBeforeTabClose,
      onTabClose = props.onTabClose,
      children = props.children;
    var key = children[index].key;

    // give caller a chance to stop the selection
    if (onBeforeTabClose && onBeforeTabClose({
      originalEvent: event,
      index: index
    }) === false) {
      return;
    }
    setHiddenTabsState([].concat(_toConsumableArray(hiddenTabsState), [key]));
    if (onTabClose) {
      onTabClose({
        originalEvent: event,
        index: index
      });
    }
  };
  var onTabHeaderClick = function onTabHeaderClick(event, tab, index) {
    if (event) {
      event.preventDefault();
    }
    if (!getTabProp(tab, 'disabled')) {
      // give caller a chance to stop the selection
      if (props.onBeforeTabChange && props.onBeforeTabChange({
        originalEvent: event,
        index: index
      }) === false) {
        return;
      }
      if (props.onTabChange) props.onTabChange({
        originalEvent: event,
        index: index
      });else setActiveIndexState(index);
    }
    updateScrollBar(index);
  };
  var _onKeyDown = function onKeyDown(event, tab, index) {
    if (event.key === 'Enter') {
      onTabHeaderClick(event, tab, index);
    }
  };
  var updateInkBar = function updateInkBar() {
    var tabHeader = tabsRef.current["tab_".concat(activeIndex)];
    inkbarRef.current.style.width = utils.DomHandler.getWidth(tabHeader) + 'px';
    inkbarRef.current.style.left = utils.DomHandler.getOffset(tabHeader).left - utils.DomHandler.getOffset(navRef.current).left + 'px';
  };
  var updateScrollBar = function updateScrollBar(index) {
    var tabHeader = tabsRef.current["tab_".concat(index)];
    if (tabHeader && tabHeader.scrollIntoView) {
      tabHeader.scrollIntoView({
        block: 'nearest'
      });
    }
  };
  var updateButtonState = function updateButtonState() {
    var _contentRef$current = contentRef.current,
      scrollLeft = _contentRef$current.scrollLeft,
      scrollWidth = _contentRef$current.scrollWidth;
    var width = utils.DomHandler.getWidth(contentRef.current);
    setBackwardIsDisabledState(scrollLeft === 0);
    setForwardIsDisabledState(scrollLeft === scrollWidth - width);
  };
  var onScroll = function onScroll(event) {
    props.scrollable && updateButtonState();
    event.preventDefault();
  };
  var getVisibleButtonWidths = function getVisibleButtonWidths() {
    return [prevBtnRef.current, nextBtnRef.current].reduce(function (acc, el) {
      return el ? acc + utils.DomHandler.getWidth(el) : acc;
    }, 0);
  };
  var navBackward = function navBackward() {
    var width = utils.DomHandler.getWidth(contentRef.current) - getVisibleButtonWidths();
    var pos = contentRef.current.scrollLeft - width;
    contentRef.current.scrollLeft = pos <= 0 ? 0 : pos;
  };
  var navForward = function navForward() {
    var width = utils.DomHandler.getWidth(contentRef.current) - getVisibleButtonWidths();
    var pos = contentRef.current.scrollLeft + width;
    var lastPos = contentRef.current.scrollWidth - width;
    contentRef.current.scrollLeft = pos >= lastPos ? lastPos : pos;
  };
  var reset = function reset() {
    setBackwardIsDisabledState(true);
    setForwardIsDisabledState(false);
    setHiddenTabsState([]);
    if (props.onTabChange) props.onTabChange({
      index: activeIndex
    });else setActiveIndexState(props.activeIndex);
  };
  React__namespace.useEffect(function () {
    updateInkBar();
  });
  hooks.useMountEffect(function () {
    if (!idState) {
      setIdState(utils.UniqueComponentId());
    }
  });
  hooks.useUpdateEffect(function () {
    if (utils.ObjectUtils.isNotEmpty(hiddenTabsState)) {
      var tabInfo = findVisibleActiveTab(hiddenTabsState[hiddenTabsState.length - 1]);
      tabInfo && onTabHeaderClick(null, tabInfo.tab, tabInfo.index);
    }
  }, [hiddenTabsState]);
  hooks.useUpdateEffect(function () {
    if (props.activeIndex !== activeIndexState) {
      updateScrollBar(props.activeIndex);
    }
  }, [props.activeIndex]);
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      reset: reset,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var createTabHeader = function createTabHeader(tab, index) {
    var selected = isSelected(index);
    var _TabPanelBase$getCPro = TabPanelBase.getCProps(tab),
      headerStyle = _TabPanelBase$getCPro.headerStyle,
      headerClassName = _TabPanelBase$getCPro.headerClassName,
      _style = _TabPanelBase$getCPro.style,
      _className = _TabPanelBase$getCPro.className,
      disabled = _TabPanelBase$getCPro.disabled,
      leftIcon = _TabPanelBase$getCPro.leftIcon,
      rightIcon = _TabPanelBase$getCPro.rightIcon,
      header = _TabPanelBase$getCPro.header,
      headerTemplate = _TabPanelBase$getCPro.headerTemplate,
      closable = _TabPanelBase$getCPro.closable,
      closeIcon = _TabPanelBase$getCPro.closeIcon;
    var headerId = idState + '_header_' + index;
    var ariaControls = idState + '_content_' + index;
    var tabIndex = disabled ? null : 0;
    var leftIconElement = leftIcon && utils.IconUtils.getJSXIcon(leftIcon, undefined, {
      props: props
    });
    var headerTitleProps = utils.mergeProps({
      className: cx('tab.headertitle')
    }, getTabPT(tab, 'headertitle'));
    var titleElement = /*#__PURE__*/React__namespace.createElement("span", headerTitleProps, header);
    var rightIconElement = rightIcon && utils.IconUtils.getJSXIcon(rightIcon, undefined, {
      props: props
    });
    var iconClassName = 'p-tabview-close';
    var icon = closeIcon || /*#__PURE__*/React__namespace.createElement(times.TimesIcon, {
      className: iconClassName,
      onClick: function onClick(e) {
        return onTabHeaderClose(e, index);
      }
    });
    var closableIconElement = closable ? utils.IconUtils.getJSXIcon(icon, {
      className: iconClassName,
      onClick: function onClick(e) {
        return onTabHeaderClose(e, index);
      }
    }, {
      props: props
    }) : null;
    var headerActionProps = utils.mergeProps({
      id: headerId,
      role: 'tab',
      className: cx('tab.headeraction'),
      tabIndex: tabIndex,
      'aria-controls': ariaControls,
      'aria-selected': selected,
      onClick: function onClick(e) {
        return onTabHeaderClick(e, tab, index);
      },
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e, tab, index);
      }
    }, getTabPT(tab, 'headeraction'));
    var content =
    /*#__PURE__*/
    // eslint-disable /
    React__namespace.createElement("a", headerActionProps, leftIconElement, titleElement, rightIconElement, closableIconElement, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null))
    // eslint-enable /
    ;

    if (headerTemplate) {
      var defaultContentOptions = {
        className: 'p-tabview-nav-link',
        titleClassName: 'p-tabview-title',
        onClick: function onClick(e) {
          return onTabHeaderClick(e, tab, index);
        },
        onKeyDown: function onKeyDown(e) {
          return _onKeyDown(e, tab, index);
        },
        leftIconElement: leftIconElement,
        titleElement: titleElement,
        rightIconElement: rightIconElement,
        element: content,
        props: props,
        index: index,
        selected: selected,
        ariaControls: ariaControls
      };
      content = utils.ObjectUtils.getJSXElement(headerTemplate, defaultContentOptions);
    }
    var headerProps = utils.mergeProps({
      ref: function ref(el) {
        return tabsRef.current["tab_".concat(index)] = el;
      },
      className: cx('tab.header', {
        selected: selected,
        disabled: disabled,
        headerClassName: headerClassName,
        _className: _className
      }),
      style: sx('tab.header', {
        headerStyle: headerStyle,
        _style: _style
      }),
      role: 'presentation'
    }, getTabPT(tab, 'root'), getTabPT(tab, 'header'));
    return /*#__PURE__*/React__namespace.createElement("li", headerProps, content);
  };
  var createTabHeaders = function createTabHeaders() {
    return React__namespace.Children.map(props.children, function (tab, index) {
      if (shouldUseTab(tab)) {
        return createTabHeader(tab, index);
      }
    });
  };
  var createNavigator = function createNavigator() {
    var headers = createTabHeaders();
    var navContentProps = utils.mergeProps({
      id: idState,
      ref: contentRef,
      className: cx('navcontent'),
      style: props.style,
      onScroll: onScroll
    }, ptm('navcontent'));
    var navProps = utils.mergeProps({
      ref: navRef,
      className: cx('nav'),
      role: 'tablist'
    }, ptm('nav'));
    var inkbarProps = utils.mergeProps({
      ref: inkbarRef,
      className: cx('inkbar')
    }, ptm('inkbar'));
    return /*#__PURE__*/React__namespace.createElement("div", navContentProps, /*#__PURE__*/React__namespace.createElement("ul", navProps, headers, /*#__PURE__*/React__namespace.createElement("li", inkbarProps)));
  };
  var createContent = function createContent() {
    var panelContainerProps = utils.mergeProps({
      className: cx('panelcontainer'),
      style: props.panelContainerStyle
    }, ptm('panelcontainer'));
    var contents = React__namespace.Children.map(props.children, function (tab, index) {
      if (shouldUseTab(tab) && (!props.renderActiveOnly || isSelected(index))) {
        var selected = isSelected(index);
        var contentId = idState + '_content_' + index;
        var ariaLabelledBy = idState + '_header_' + index;
        var contentProps = utils.mergeProps({
          id: contentId,
          className: cx('tab.content', {
            props: props,
            selected: selected,
            getTabProp: getTabProp,
            tab: tab,
            isSelected: isSelected,
            shouldUseTab: shouldUseTab,
            index: index
          }),
          style: sx('tab.content', {
            props: props,
            getTabProp: getTabProp,
            tab: tab,
            isSelected: isSelected,
            shouldUseTab: shouldUseTab,
            index: index
          }),
          role: 'tabpanel',
          'aria-labelledby': ariaLabelledBy,
          'aria-hidden': !selected
        }, TabPanelBase.getCOtherProps(tab), getTabPT(tab, 'root'), getTabPT(tab, 'content'));
        return /*#__PURE__*/React__namespace.createElement("div", contentProps, !props.renderActiveOnly ? getTabProp(tab, 'children') : selected && getTabProp(tab, 'children'));
      }
    });
    return /*#__PURE__*/React__namespace.createElement("div", panelContainerProps, contents);
  };
  var createPrevButton = function createPrevButton() {
    var prevIconProps = utils.mergeProps(ptm('previcon'));
    var icon = props.prevButton || /*#__PURE__*/React__namespace.createElement(chevronleft.ChevronLeftIcon, prevIconProps);
    var leftIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, prevIconProps), {
      props: props
    });
    var prevButtonProps = utils.mergeProps({
      ref: prevBtnRef,
      type: 'button',
      className: cx('prevbutton'),
      'aria-label': api.ariaLabel('previousPageLabel'),
      onClick: function onClick(e) {
        return navBackward();
      }
    }, ptm('prevbutton'));
    if (props.scrollable && !backwardIsDisabledState) {
      return /*#__PURE__*/React__namespace.createElement("button", prevButtonProps, leftIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
    }
    return null;
  };
  var createNextButton = function createNextButton() {
    var nextIconProps = utils.mergeProps({
      'aria-hidden': 'true'
    }, ptm('nexticon'));
    var icon = props.nextButton || /*#__PURE__*/React__namespace.createElement(chevronright.ChevronRightIcon, nextIconProps);
    var rightIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, nextIconProps), {
      props: props
    });
    var nextButtonProps = utils.mergeProps({
      ref: nextBtnRef,
      type: 'button',
      className: cx('nextbutton'),
      'aria-label': api.ariaLabel('nextPageLabel'),
      onClick: function onClick(e) {
        return navForward();
      }
    }, ptm('nextbutton'));
    if (props.scrollable && !forwardIsDisabledState) {
      return /*#__PURE__*/React__namespace.createElement("button", nextButtonProps, rightIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
    }
  };
  var rootProps = utils.mergeProps({
    id: idState,
    ref: elementRef,
    style: props.style,
    className: cx('root')
  }, TabViewBase.getOtherProps(props), ptm('root'));
  var navContainerProps = utils.mergeProps({
    className: cx('navcontainer')
  }, ptm('navcontainer'));
  var navigator = createNavigator();
  var content = createContent();
  var prevButton = createPrevButton();
  var nextButton = createNextButton();
  return /*#__PURE__*/React__namespace.createElement("div", rootProps, /*#__PURE__*/React__namespace.createElement("div", navContainerProps, prevButton, navigator, nextButton), content);
});
TabPanel.displayName = 'TabPanel';
TabView.displayName = 'TabView';

exports.TabPanel = TabPanel;
exports.TabView = TabView;
