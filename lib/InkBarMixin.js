'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _componentDidUpdate(component) {
  var refs = component.refs;
  var containerNode = _react2['default'].findDOMNode(refs.nav);
  var containerOffset = (0, _utils.offset)(containerNode);
  var inkBarNode = _react2['default'].findDOMNode(refs.inkBar);
  var activeTab = refs.activeTab;
  var tabPosition = component.props.tabPosition;
  if (activeTab) {
    var tabNode = _react2['default'].findDOMNode(activeTab);
    var tabOffset = (0, _utils.offset)(tabNode);
    if (tabPosition === 'top' || tabPosition === 'bottom') {
      var left = tabOffset.left - containerOffset.left;
      inkBarNode.style.left = left + 'px';
      inkBarNode.style.top = '';
      inkBarNode.style.bottom = '';
      inkBarNode.style.right = containerNode.offsetWidth - left - tabNode.offsetWidth + 'px';
    } else {
      var _top = tabOffset.top - containerOffset.top;
      inkBarNode.style.left = '';
      inkBarNode.style.right = '';
      inkBarNode.style.top = _top + 'px';
      inkBarNode.style.bottom = containerNode.offsetHeight - _top - tabNode.offsetHeight + 'px';
    }
  }
  inkBarNode.style.display = activeTab ? 'block' : 'none';
}

exports['default'] = {
  componentDidUpdate: function componentDidUpdate() {
    _componentDidUpdate(this);
  },

  componentDidMount: function componentDidMount() {
    _componentDidUpdate(this);
  }
};
module.exports = exports['default'];