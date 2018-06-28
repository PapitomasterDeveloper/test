import React from 'react'

const Hello = React.createClass({
    render: function() {
        return <span>Hello </span>
    }
})

const World = React.createClass({
    propTypes: {
        who: React.PropTypes.string.isRequired
    },
    render: function() {
        return <span>{this.props.who || 'world'}!</span>
    }
})

export default React.createClass({
    render: function() {
        return <div><Hello /><World who='Miguel'/></div>
    }
})