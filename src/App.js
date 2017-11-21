import React, { Component } from 'react';
import {
    Transition
} from 'semantic-ui-react';

// ROUTERS
import {
    HashRouter,
    Route
} from 'react-router-dom';

// MEDIA AND STYLES
import './App.css';

// PAGES AND COMPONENTS
import { Opening } from './journey/Opening';
import { FirstChoices } from './journey/FirstChoices';

class App extends Component {
    state = { openingVisible: true }

    toggleVisibility = () => {
        this.setState({ openingVisible: false });
    }

    componentDidMount () {
        // Can't `setState()` in here
        setTimeout( this.toggleVisibility, 1750 );
    }

    render () {
        const { openingVisible } = this.state;

        return (
            <div className='App'>
                { openingVisible
                    ? <Opening />
                    : <div className='App-contents'>
                        <FirstChoices />
                    </div>
                }

                {/*<HashRouter>
                    <div>

                        <Route exact path='/' component={HomePage}/>
                        <Route path='/about' component={AboutPage}/>
                        <Route path='/visit/:clientId/:visitId' component={VisitPage}/>
                        <Route path='/detail/:id' component={ClientDetailPage}/>
                        <Route path='/intake' component={ClientIntakePage}/>

                    </div>
                </HashRouter>*/}
            </div>
        );
    }
}

export default App;
