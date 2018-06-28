import React from 'react';
import imageFB from 'imageFB.jpg';

var ProfilePicture = React.createClass({
    render: function () {
        return (
            <div className='image'>
                <img src={this.props.img} />
            </div>
        )
    }
})

var Title = React.createClass({
    render: function () {
        return (
            <div className='title'>
                {this.props.name}{this.props.school}
            </div>
        )
    }
})

var Description = React.createClass({
    render: function() {
        return (
            <div className='description'>
                {this.props.content}
            </div>
        )
    }
})

var SimpleCard = React.createClass({
    render: function() {
        return (
            <div className='simple-card'>
                    <ProfilePicture 
                        img={imageFB.jpg}
                    />
                    <Title 
                        name={'Miguel Angel'} 
                        school='FIME'
                    />
                    <Description 
                        content='This is some kind of content'
                    />
                </div>
        )
    }
})

export default React.createClass({
    render: function () {
        return (
            <div>
                <SimpleCard />
            </div>
        )
    }
})

export default SimpleCard;