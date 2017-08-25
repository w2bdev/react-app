import React from 'react';
import {connect} from 'react-redux';

export const Home = ({actions, currentTime}) => {
    return (
        <div>
            <h1 className="page-header">Home</h1>
            <p>The time is {currentTime.currentTime.toString()}</p>
            <button className="btn btn-primary" onClick={actions.currentTime.updateTime}>
            Update
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { currentTime : state.currentTime }
}

export default connect(mapStateToProps)(Home)