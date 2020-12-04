import Articles from '../../components/Articles';

import Query from '../../components/Query';
import { ARTICLES_QUERY } from '../../queries/article/articles';

export default function Home() {
    return (
        <div className='uk-section'>
            <div className='uk-container uk-container-large' >
                <h1>Strapi Blog</h1>
                <Query query={ARTICLES_QUERY} id={null}>
                    {
                        ({ data: { articles } }) => {
                            return (
                                <Articles articles={articles} />
                            )
                        }
                    }
                </Query>
            </div>
        </div>
    )
}   