import Nav from '../../components/Nav';
import Articles from '../Articles';
import Article from '../Article';
import Category from '../Category';

import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path='/' component={Articles} exact></Route>
                <Route path='/article/:id' component={Article} exact></Route>
                <Route path='/category/:id' component={Category} exact></Route>

            </Switch>
        </div>
    );
}

export default App;
