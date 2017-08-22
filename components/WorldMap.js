'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _CSSClassnames = require('../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _KeyboardAccelerators = require('../utils/KeyboardAccelerators');

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.WORLD_MAP;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

// The graphic is drawn as a rectangular grid using coordinates spaced
// by FACTOR pixels. The contents have both an area boundary for interaction
// and dots described as rows where each row is described by three values:
// a starting coordinate and a length. This approach is more efficient than
// describing it via SVG elements, keeping the code/library size smaller.
var CONTINENTS = [{
  id: 'Australia',
  origin: [74, 32],
  area: [[4, 0], [7, 1], [15, 7], [13, 9], [0, 6], [0, 2]],
  dots: [[4, 0, 1], [2, 1, 6], [0, 2, 9], [0, 3, 10], [0, 4, 10], [0, 5, 3], [5, 5, 5], [5, 6, 4], [15, 7, 1], [14, 8, 1], [13, 9, 1]]
}, {
  id: 'Asia',
  origin: [52, 1],
  area: [[16, 0], [38, 5], [40, 7], [28, 17], [24, 25], [29, 29], [19, 29], [11, 24], [3, 23], [0, 20], [0, 19], [6, 13], [7, 6]],
  dots: [[16, 0, 1], [17, 1, 2], [18, 2, 2], [15, 3, 6], [28, 3, 1], [30, 3, 1], [10, 4, 2], [13, 4, 10], [24, 4, 1], [9, 5, 22], [32, 5, 1], [38, 5, 1], [7, 6, 2], [10, 6, 1], [12, 6, 27], [7, 7, 34], [7, 8, 31], [7, 9, 26], [34, 9, 3], [7, 10, 22], [31, 10, 1], [33, 10, 1], [7, 11, 21], [32, 11, 2], [7, 12, 21], [32, 12, 1], [6, 13, 22], [32, 13, 1], [6, 14, 22], [5, 15, 22], [3, 16, 2], [6, 16, 20], [2, 17, 3], [6, 17, 16], [24, 17, 1], [28, 17, 1], [1, 18, 22], [26, 18, 2], [0, 19, 24], [0, 20, 5], [6, 20, 17], [2, 21, 5], [10, 21, 14], [2, 22, 5], [11, 22, 4], [16, 22, 4], [3, 23, 3], [11, 23, 2], [17, 23, 3], [23, 23, 1], [11, 24, 2], [18, 24, 2], [23, 24, 1], [24, 25, 1], [18, 26, 1], [22, 26, 1], [18, 27, 1], [20, 27, 4], [18, 28, 1], [21, 28, 1], [23, 28, 1], [26, 28, 3], [19, 29, 1], [28, 29, 2]]
}, {
  // 21X, 40Y
  id: 'Africa',
  origin: [40, 19],
  area: [[3, 0], [6, 0], [11, 2], [16, 7], [16, 15], [11, 18], [9, 18], [0, 6], [0, 3]],
  dots: [[3, 0, 4], [2, 1, 6], [9, 1, 2], [1, 2, 11], [0, 3, 13], [0, 4, 14], [0, 5, 14], [0, 6, 16], [1, 7, 16], [2, 8, 2], [6, 8, 11], [7, 9, 9], [7, 10, 8], [7, 11, 7], [8, 12, 7], [7, 13, 8], [7, 14, 7], [16, 14, 1], [8, 15, 5], [15, 15, 2], [8, 16, 5], [9, 17, 3], [9, 18, 3]]
}, {
  id: 'Europe',
  origin: [39, 2],
  area: [[8, 0], [10, 0], [20, 2], [19, 11], [18, 13], [14, 16], [3, 16], [0, 7]],
  dots: [[8, 0, 3], [9, 1, 1], [20, 2, 1], [19, 3, 1], [12, 4, 1], [19, 4, 1], [9, 5, 6], [9, 6, 7], [17, 6, 3], [0, 7, 1], [8, 7, 12], [7, 8, 3], [11, 8, 9], [7, 9, 3], [11, 9, 9], [4, 10, 1], [7, 10, 1], [9, 10, 1], [11, 10, 9], [3, 11, 2], [7, 11, 13], [4, 12, 1], [6, 12, 13], [4, 13, 15], [5, 14, 3], [9, 14, 4], [15, 14, 2], [3, 15, 3], [8, 15, 1], [10, 15, 5], [6, 15, 2], [3, 16, 2], [10, 16, 5]]
}, {
  id: 'SouthAmerica',
  origin: [22, 26],
  area: [[2, 0], [5, 0], [11, 4], [11, 8], [3, 18], [2, 17], [0, 4], [0, 3]],
  dots: [[2, 0, 4], [1, 1, 7], [1, 2, 7], [0, 3, 10], [0, 4, 12], [1, 5, 11], [2, 6, 9], [3, 7, 8], [3, 8, 8], [3, 9, 6], [3, 10, 6], [3, 11, 5], [3, 12, 3], [2, 13, 3], [2, 14, 3], [2, 15, 2], [2, 16, 2], [2, 17, 2], [3, 18, 1]]
}, {
  id: 'NorthAmerica',
  origin: [0, 0],
  area: [[21, 0], [39, 0], [39, 6], [22, 26], [16, 23], [2, 12], [0, 7]],
  dots: [[22, 0, 6], [29, 0, 1], [31, 0, 1], [33, 0, 5], [20, 1, 1], [22, 1, 1], [24, 1, 2], [27, 1, 13], [17, 2, 1], [20, 2, 5], [26, 2, 13], [13, 3, 1], [19, 3, 1], [21, 3, 3], [26, 3, 14], [14, 4, 1], [16, 4, 4], [21, 4, 3], [29, 4, 11], [12, 5, 3], [16, 5, 1], [18, 5, 1], [20, 5, 3], [24, 5, 1], [30, 5, 8], [14, 6, 3], [19, 6, 1], [22, 6, 4], [31, 6, 8], [0, 7, 15], [16, 7, 1], [18, 7, 4], [24, 7, 2], [30, 7, 7], [2, 8, 20], [24, 8, 3], [29, 8, 5], [2, 9, 20], [24, 9, 2], [30, 9, 3], [1, 10, 18], [23, 10, 2], [31, 10, 1], [2, 11, 2], [8, 11, 11], [23, 11, 2], [26, 11, 1], [2, 12, 1], [8, 12, 13], [24, 12, 3], [10, 13, 12], [23, 13, 5], [11, 14, 17], [11, 15, 9], [21, 15, 6], [28, 15, 2], [11, 16, 11], [23, 16, 4], [11, 17, 14], [12, 18, 11], [12, 19, 12], [13, 20, 9], [15, 21, 3], [22, 21, 1], [16, 22, 2], [16, 23, 2], [20, 23, 1], [23, 23, 1], [18, 24, 3], [21, 25, 1], [22, 26, 1]]
}];

// FACTOR is the distance in pixels between coordinates
var FACTOR = 10;

// helper function to detect if any series elements have
var clickableSeries = function clickableSeries(props) {
  return props.series && props.series.some(function (serie) {
    return serie.onClick;
  });
};

var WorldMap = function (_Component) {
  _inherits(WorldMap, _Component);

  function WorldMap(props, context) {
    _classCallCheck(this, WorldMap);

    var _this = _possibleConstructorReturn(this, (WorldMap.__proto__ || Object.getPrototypeOf(WorldMap)).call(this, props, context));

    _this._activateContinent = _this._activateContinent.bind(_this);
    _this._activatePlace = _this._activatePlace.bind(_this);
    _this._renderContinent = _this._renderContinent.bind(_this);
    _this._renderPlace = _this._renderPlace.bind(_this);
    _this._onEnter = _this._onEnter.bind(_this);
    _this._onMouseOver = _this._onMouseOver.bind(_this);
    _this._onMouseMove = _this._onMouseMove.bind(_this);
    _this._onMouseLeave = _this._onMouseLeave.bind(_this);

    _this.state = _this._buildState();
    _this.state.clickable = clickableSeries(props);
    return _this;
  }

  _createClass(WorldMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var clickable = this.state.clickable;

      if (clickable) {
        this._startKeyboardListening();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var clickable = this.state.clickable;

      var nextClickable = clickableSeries(nextProps);
      if (nextClickable !== clickable) {
        if (nextClickable) {
          this._startKeyboardListening();
        } else {
          this._stopKeyboardListening();
        }
        this.setState({ clickable: nextClickable });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var clickable = this.state.clickable;

      if (clickable) {
        this._stopKeyboardListening();
      }
    }
  }, {
    key: '_buildState',
    value: function _buildState() {
      var state = {
        activeContinent: undefined, activePlace: undefined, dots: {}, area: {}
      };

      // Build the SVG paths describing the individual dots
      var width = 0;
      var height = 0;
      CONTINENTS.forEach(function (continent) {
        var origin = continent.origin;

        state.dots[continent.id] = continent.dots.map(function (segment) {
          var dots = Array.apply(null, Array(segment[2])).map(function () {
            return 'h0';
          }).join(' m10,0 ');
          var x = FACTOR * (origin[0] + segment[0] + 1);
          var y = FACTOR * (origin[1] + segment[1] + 1);
          width = Math.max(width, FACTOR * (origin[0] + segment[0] + segment[2]));
          height = Math.max(height, y);
          return 'M' + x + ',' + y + ' ' + dots;
        }).join(' ');

        state.area[continent.id] = continent.area.map(function (point, index) {
          var x = FACTOR * (point[0] + origin[0] + 1);
          var y = FACTOR * (point[1] + origin[1] + 1);
          return '' + (index === 0 ? 'M' : 'L') + x + ',' + y;
        }).join(' ');

        if (state.area[continent.id]) {
          state.area[continent.id] += ' Z';
        }
      });

      state.width = width + FACTOR;
      state.height = height + FACTOR;

      return state;
    }
  }, {
    key: '_startKeyboardListening',
    value: function _startKeyboardListening() {
      this._keyboardHandlers = {
        enter: this._onEnter,
        space: this._onEnter
      };
      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
    }
  }, {
    key: '_stopKeyboardListening',
    value: function _stopKeyboardListening() {
      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
    }
  }, {
    key: '_activateContinent',
    value: function _activateContinent(activeContinent) {
      this.setState({ activeContinent: activeContinent });
    }
  }, {
    key: '_activatePlace',
    value: function _activatePlace(activePlace) {
      this.setState({ activePlace: activePlace });
    }
  }, {
    key: '_onEnter',
    value: function _onEnter() {
      var series = this.props.series;
      var _state = this.state,
          activeContinent = _state.activeContinent,
          activePlace = _state.activePlace;

      if (this._worldMapRef.contains(document.activeElement)) {
        series.some(function (serie) {
          if (activeContinent && serie.continent === activeContinent || activePlace && serie.place.join(',') === activePlace.join(',')) {
            if (serie.onClick) {
              serie.onClick();
            }
            return true;
          }
          return false;
        });
      }
    }
  }, {
    key: '_onMouseOver',
    value: function _onMouseOver() {
      // track when we're over the map to avoid dealing with mouse moves
      this.setState({ over: true });
    }
  }, {
    key: '_onMouseMove',
    value: function _onMouseMove(event) {
      var width = this.state.width;
      // determine the map coordinates for where the mouse is

      var rect = this._worldMapRef.getBoundingClientRect();
      var scale = rect.width / width; // since the SVG viewBox might be scaled
      var place = [Math.round((event.clientX - rect.left) / scale / FACTOR), Math.round((event.clientY - rect.top) / scale / FACTOR)];
      this.setState({ activePlace: place });
    }
  }, {
    key: '_onMouseLeave',
    value: function _onMouseLeave() {
      this.setState({ over: false, activePlace: undefined });
    }
  }, {
    key: '_interactiveProps',
    value: function _interactiveProps(serie, defaultLabel, activeFunc, activeValue) {
      return {
        role: 'button',
        'aria-label': serie.label || defaultLabel,
        tabIndex: '0',
        onClick: serie.onClick,
        onMouseOver: function onMouseOver() {
          return activeFunc(activeValue);
        },
        onMouseLeave: function onMouseLeave() {
          return activeFunc(undefined);
        },
        onFocus: function onFocus() {
          // This moves the map unnecessarily. Instead, we should check
          // the position and scroll if it isn't already visible
          // this._worldMapRef.scrollIntoView();
          activeFunc(activeValue);
        },
        onBlur: function onBlur() {
          return activeFunc(undefined);
        }
      };
    }
  }, {
    key: '_renderContinent',
    value: function _renderContinent(continent, index, mapColorIndex, serie) {
      var activeContinent = this.state.activeContinent;
      // only graph color if they explicitly asked for this continent

      var colorIndex = (serie || {}).colorIndex || mapColorIndex || (serie ? 'graph-' + index : 'light-2');

      var classes = (0, _classnames4.default)(CLASS_ROOT + '__continent', COLOR_INDEX + '-' + colorIndex, _defineProperty({}, CLASS_ROOT + '__continent--active', continent.id === activeContinent));
      var area = void 0;
      var interactiveProps = {};
      if (serie && serie.onClick) {
        area = _react2.default.createElement('path', { stroke: 'none', fill: '#fff', fillOpacity: '0.01',
          d: this.state.area[continent.id] });
        interactiveProps = this._interactiveProps(serie, continent.id, this._activateContinent, continent.id);
      }
      // We add the area so the mouse events work for the whole region,
      // not just the dots
      return _react2.default.createElement(
        'g',
        _extends({ key: continent.id, className: classes }, interactiveProps),
        area,
        _react2.default.createElement('path', { d: this.state.dots[continent.id] })
      );
    }
  }, {
    key: '_renderPlace',
    value: function _renderPlace(serie, index) {
      var mapColorIndex = this.props.colorIndex;
      var activePlace = this.state.activePlace;

      var serieColorIndex = serie.colorIndex,
          onClick = serie.onClick,
          place = serie.place,
          rest = _objectWithoutProperties(serie, ['colorIndex', 'onClick', 'place']);

      var colorIndex = serieColorIndex || mapColorIndex || 'graph-' + index;
      var classes = (0, _classnames4.default)(CLASS_ROOT + '__place', COLOR_INDEX + '-' + colorIndex, _defineProperty({}, CLASS_ROOT + '__place--active', activePlace && activePlace.join(',') === place.join(',')));
      var d = 'M' + FACTOR * place[0] + ',' + FACTOR * place[1] + ' h0';
      var interactiveProps = {};
      if (onClick) {
        interactiveProps = this._interactiveProps(serie, 'place', this._activatePlace, place);
      }
      return _react2.default.createElement('path', _extends({ key: place.join(',') }, rest, { className: classes
      }, interactiveProps, { d: d }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex,
          onSelectPlace = _props.onSelectPlace,
          series = _props.series,
          props = _objectWithoutProperties(_props, ['className', 'colorIndex', 'onSelectPlace', 'series']);

      var _state2 = this.state,
          activePlace = _state2.activePlace,
          over = _state2.over,
          width = _state2.width,
          height = _state2.height;

      var classes = (0, _classnames4.default)(CLASS_ROOT, className);

      var haveSomeContinents = (series || []).filter(function (s) {
        return s.continent;
      }).length > 0;
      var continents = [];
      CONTINENTS.forEach(function (continent, index) {
        var serie = (series || []).filter(function (s) {
          return s.continent === continent.id;
        })[0];
        if (!haveSomeContinents || serie) {
          continents.push(_this2._renderContinent(continent, index, colorIndex, serie));
        }
      });

      var seriesPlaces = (series || []).filter(function (s) {
        return s.place;
      });
      var placesGroup = void 0;
      if (seriesPlaces.length > 0) {
        var places = seriesPlaces.map(this._renderPlace);
        placesGroup = _react2.default.createElement(
          'g',
          { stroke: 'none', fill: 'none', fillRule: 'evenodd' },
          places
        );
      }

      // If the caller is interested in onSelectPlace changes, track where the
      // user goes.
      var interactiveProps = {};
      var activeGroup = void 0;
      if (onSelectPlace) {
        interactiveProps = {
          onMouseOver: this._onMouseOver,
          onMouseMove: over ? this._onMouseMove : undefined,
          onMouseLeave: this._onMouseLeave
        };

        if (activePlace) {
          var _classes = (0, _classnames4.default)(CLASS_ROOT + '__place', COLOR_INDEX + '-' + (colorIndex || 'light-2'), CLASS_ROOT + '__place--active');
          var d = 'M' + FACTOR * activePlace[0] + ',' + FACTOR * activePlace[1] + ' h0';
          activeGroup = _react2.default.createElement(
            'g',
            { stroke: 'none', fill: 'none', fillRule: 'evenodd',
              onClick: function onClick() {
                return onSelectPlace(activePlace);
              } },
            _react2.default.createElement('path', { className: _classes, d: d })
          );
        }
      }

      return _react2.default.createElement(
        'svg',
        _extends({}, props, interactiveProps, {
          ref: function ref(_ref) {
            return _this2._worldMapRef = _ref;
          },
          className: classes, version: '1.1',
          preserveAspectRatio: 'xMidYMid meet',
          width: width + 'px', viewBox: '0 0 ' + width + ' ' + height }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', fill: 'none', fillRule: 'evenodd' },
          continents
        ),
        activeGroup,
        placesGroup
      );
    }
  }]);

  return WorldMap;
}(_react.Component);

WorldMap.displayName = 'WorldMap';
exports.default = WorldMap;


WorldMap.propTypes = {
  colorIndex: _propTypes2.default.string,
  // onSelectPlace is passed a place coordinate when the user clicks on it
  onSelectPlace: _propTypes2.default.func,
  // either continent or place must be provided for a series item
  series: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    continent: _propTypes2.default.oneOf(CONTINENTS.map(function (c) {
      return c.id;
    })),
    colorIndex: _propTypes2.default.string,
    label: _propTypes2.default.string, // for a11y aria-label
    onClick: _propTypes2.default.func,
    place: _propTypes2.default.arrayOf(_propTypes2.default.number)
  }))
};
module.exports = exports['default'];