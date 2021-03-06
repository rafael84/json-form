'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var createClass = require('create-react-class');

var isObject = function isObject(o) {
	return o !== null && typeof o === 'object';
};

var valueOf = function valueOf(object, key) {
	if (object === null || object[key] === null) {
		return '';
	}
	return String(object[key]);
};

var colors = ["#f8f8f8", "#e0e0e0", "#d0d0d0"];

var styles = {
	form: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-around",
		alignItems: "stretch",
		alignContent: "space-around"
	},
	label: {
		display: "block",
		fontWeight: "900",
		lineHeight: "1.5rem"
	},
	value: {
		lineHeight: "1.5rem",
		backgroundColor: "white",
		border: "1px solid #cacaca",
		borderRadius: "2px",
		padding: "0.1rem 0.5rem"
	},
	field: {
		flexGrow: "1",
		display: "flex",
		flexFlow: "column wrap",
		justifyContent: "space-around",
		alignItems: "stretch",
		alignContent: "space-around",
		border: "1px solid rgba(0,0,0,.1)",
		borderRadius: "4px",
		padding: "0.75rem",
		margin: "0.25rem",
		backgroundColor: "rgba(0,0,0,.03)"
	}
};

var JSONViewer = createClass({
	render: function render() {
		var _props$data = this.props.data;
		var data = _props$data === undefined ? {} : _props$data;

		return React.createElement(
			'div',
			{ style: styles.form },
			Object.keys(data).map(function (key) {
				return React.createElement(
					'div',
					{ key: key, style: styles.field },
					React.createElement(
						'label',
						{ style: styles.label },
						key
					),
					data && isObject(data[key]) ? React.createElement(JSONViewer, {
						data: data && data[key] || {}
					}) : valueOf(data, key).length <= 140 ? React.createElement('input', {
						type: 'text',
						value: valueOf(data, key),
						readOnly: true,
						style: styles.value
					}) : React.createElement('textarea', {
						rows: Math.min(20, valueOf(data, key).split('\n').length + 1),
						cols: 40,
						value: valueOf(data, key),
						readOnly: true,
						style: styles.value
					})
				);
			})
		);
	}
});

exports['default'] = JSONViewer;
module.exports = exports['default'];