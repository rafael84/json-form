var React = require('react');
var createClass = require('create-react-class');

var isObject = function(o) {
	return o !== null && typeof o === 'object';
}

var valueOf = function(object, key) {
    if (object === null || object[key] === null) {
        return ''
    }
    return String(object[key])
}

var colors = [
    "#f8f8f8",
    "#e0e0e0",
    "#d0d0d0",
]

var styles = {
	form: {
		display:         "flex",
		flexFlow:        "row wrap",
		justifyContent:  "space-around",
		alignItems:      "stretch",
		alignContent:    "space-around",
	},
	label: {
		display:    "block",
		fontWeight: "900",
		lineHeight: "1.5rem"
	},
	value: {
		lineHeight:      "1.5rem",
		backgroundColor: "white",
		border:          "1px solid #cacaca",
		borderRadius:    "2px",
		padding:         "0.1rem 0.5rem"
	},
	field: {
		flexGrow:        "1",
		display:         "flex",
		flexFlow:        "column wrap",
		justifyContent:  "space-around",
		alignItems:      "stretch",
		alignContent:    "space-around",
		border:          "1px solid rgba(0,0,0,.1)",
		borderRadius:    "4px",
		padding:         "0.75rem",
		margin:          "0.25rem",
		backgroundColor: "rgba(0,0,0,.03)",
	}
}

var JSONViewer = createClass({
	render () {
		let {data={}} = this.props;
		return (
			<div style={styles.form}>
				{
					Object.keys(data).map(
						key => (
							<div key={key} style={styles.field}>
								<label style={styles.label}>
									{key}
								</label>
								{
									data && isObject(data[key]) ? (
										<JSONViewer
                                            data={data && data[key] || {}}
                                        />
									) : (
                                        valueOf(data, key).length <= 140 ? (
                                            <input
                                                type="text"
                                                value={valueOf(data, key)}
                                                readOnly
                                                style={styles.value}
                                            />
                                        ) : (
                                            <textarea
                                                rows={Math.min(20, valueOf(data, key).split('\n').length + 1)}
                                                cols={40}
                                                value={valueOf(data, key)}
                                                readOnly
                                                style={styles.value}
                                            />
									    )
									)
								}
							</div>
						)
					)
				}
			</div>
		)
	}
});

export default JSONViewer;
