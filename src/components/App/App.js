import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        // axios.get('https://phonebook-45c68.firebaseio.com/data.json')
        //     .then(res => {
        //         const contacts = res.data
        //     });
    }
    _update(e) {
        this.setState({txt: e.target.value})
    }
    render() {
        return (
            <main className="row">
            </main>
        );
    }
}

export default App;
