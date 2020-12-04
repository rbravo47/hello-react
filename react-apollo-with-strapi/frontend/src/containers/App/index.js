import Nav from '../../components/Nav';
import Articles from '../Articles';
import Article from '../Article';

import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path='/' component={Articles} exact></Route>
                <Route path='/article/:id' component={Article} exact></Route>
            </Switch>
        </div>
    );
}

export default App;
