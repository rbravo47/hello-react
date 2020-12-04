
import { CATEGORIES_QUERY } from '../../queries/category/categories';
import Query from '../Query';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>

            <Query query={CATEGORIES_QUERY} id={null}>
                {
                    ({ data: { categories } }) => {
                        return (
                            <nav className="uk-navbar-container" data-uk-navbar>
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <Link to="/" >Strapi Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="uk-navbar-right">
                                    <ul className="uk-navbar-nav">
                                        {
                                            categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            </nav>
                        )
                    }
                }

            </Query>
        </div>
    );

}