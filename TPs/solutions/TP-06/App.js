import React from 'react'
import Context from './Context'
import User from './User'

class Small extends React.Component {

    static contextType = Context

    render() {
        const {color, user} = this.context
        return <div style={{backgroundColor: color, height: '125px', width: '33%'}}>
            Small, user = {user.id}-{user.login}
        </div>
    }
}

function Medium() {
    return <div style={{backgroundColor: 'red', height: '250px', width: '50%'}}>Medium<Small/></div>
}

function Large() {
    return <div style={{backgroundColor: 'blue', color: 'white', height: '300px', width: '75%'}}>
        Large<Medium/>
    </div>
}

export default function App() {
    return <Context.Provider value={{color: 'purple', user: new User(1, 'admin')}}>
        <Large/>
    </Context.Provider>
}