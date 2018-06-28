import React from 'react';
import './timeline.css';
import './index.css';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {

    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];
    // Update the class array if the state is visible
    if (this.state.searchVisible) {
    searchInputClasses.push("active");
 }

 const wrapperStyle = {
    backgroundColor: 'rgba(251, 202, 43, 1)'
}

const titleStyle = {
    color: '#111111'
}

const menuColor = {
    backgroundColor: '#111111'
}
   

    return (
        <div style={wrapperStyle} className="header">
            <div className="menuIcon">
                <div className="dashTop" style={menuColor}></div>
                <div className="dashBottom" style={menuColor}></div>
                <div className="circle" style={menuColor}></div>
            </div>

            <span style={titleStyle} className="title">
            {this.props.title}
            </span>

            <input
                type="text"
                className={searchInputClasses.join(' ')}
                placeholder="Search ..." />
 {/* Adding an onClick handler to call the showSearch button
*/}
        <div
            style={titleStyle}
            onClick={this.showSearch.bind(this)}
            className="fa fa-search searchIcon"></div>
 </div>
    )
  }
}

class Content extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            activities: []
         }
    }

    componentWillMount() {
        this.setState({activities: data});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.requestRefresh !== this.props.requestRefresh){
            this.setState({loading: true}, this.updateData);
        }
    }

    render() {

        const activities = [
            {
            timestamp: new Date().getTime(),
            text: "Ate lunch",
            user: {
            id: 1, name: 'Nate',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
            },
            comments: [{ from: 'Ari', text: 'Me too!' }]
            },
            {
            timestamp: new Date().getTime(),
            text: "Woke up early for a beautiful run",
            user: {
            id: 2, name: 'Ari',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
            },
            comments: [{ from: 'Nate', text: 'I am so jealous' }]
            },
           ]                    

        const { activity } = this.props;

        return (
            <div className="content">
                <div className="line"></div>
                {/* Timeline item */}
                {activities.map((activity) => (
                    <ActivityItem
                        activity={activity} />
                    ))}
            </div>
        )
    }
}

class ActivityItem extends React.Component {
    render() {

        const {activity} = this.props;

        return(
            <div className="item">

                <div className="avatar">
                
                    <img
                        alt={activity.text}
                        src={activity.user.avatar} />
                        {activity.user.name}

                </div>

                <span className="time">
                {activity.timestamp}
                </span>

                <p>{activity.text}</p>

                <div className="commentCount">
                {activity.comments.length}
                </div>

            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                {this.props.children}
            </div>
        )
    }
}

class Container extends React.Component {
    constructor(props){
        super(props);

        this.state = { refreshing: false }
    }

    refresh() {
        this.setState({ refreshing: true })
    }

    onComponentRefreshing() {
        this.setState({ refreshing: false })
    }

    render() {
        return(
            <div className='notificationsFrame'>
                <div className='panel'>
                    <Header title="Github activity" />
                    {/* refreshing is the component's state */}
                    <Content
                        onComponentRefresh={this.onComponentRefresh.bind(this)}
                        requestRefresh={refreshing}
                        fetchData={fetchEvents} />
                    {/* A container for styling */}
                    <Footer>
                        <button 
                            onClick={this.refresh.bind(this)}>
                        <i className="fa fa-refresh" />
                        Refresh
                        </button>
                    </Footer>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
      return (
        <div className="notificationsFrame">
          <div className="panel">
            <Header title="Timeline" />
            <Content activity={activities} />
          </div>
        </div>
      );
    }
  }

Header.proptypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'Github activity'
}

export default App;
