import React from 'react';
import { Route } from 'react-router-dom';
import { Router, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
// import { HashRouter } from 'react-router-dom';
// import { MemoryRouter } from 'react-router-dom';

// const PageOne = () => {
//     return (
//         <div>
//             PageOne
//             {/* BAD don't use anchor tag it will wipe app contexts away */}
//             {/* <a href="/pagetwo">Navigate</a> */}
//             <Link to="/pagetwo">Navigate</Link>
//         </div>);
// };

// const PageTwo = () => {
//     return (
//         <div>
//             PageTwo
//             <button>Click Me</button>
//             {/* BAD don't use anchor tag it will wipe app contexts away */}
//             {/* <a href="/">Navigate</a> */}
//             <Link to="/">Navigate</Link>
//         </div>);
// };



const App = () => {
    return (
        <div>
            {/* It will not response back with 404 but always index.html. Unless server setup is exactly same as create-node-app dev server, app might act differently */}
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={StreamList} />
                            <Route path="/streams/new" exact component={StreamCreate} />
                            <Route path="/streams/edit/:id" exact component={StreamEdit} />
                            <Route path="/streams/delete/:id" exact component={StreamDelete} />
                            <Route path="/streams/:id" exact component={StreamShow} />
                        </Switch>
                        {/* <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} /> */}
                    </div>
                </Router>
                {/* will stick # in-front any path. Use cases, more flexible. of what backend server is.  */}
                {/* <HashRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </HashRouter> */}
                {/* <MemoryRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </MemoryRouter> */}
            </div>
        </div>
    );
};

export default App;