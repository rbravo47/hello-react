import { useParams } from "react-router-dom"
import { CATEGORY_ARTICLES_QUERY } from '../../queries/category/articles';
import Articles from '../../components/Articles';
import Query from '../../components/Query';
export default function Category() {

    const { id } = useParams();

    return (
        <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
            {
                ({ data: { category } }) => {
                    return (
                        <div className='uk-section'>
                            <div className='uk-container uk-container-large'>
                                <h1>{category.name}</h1>
                                <Articles articles={category.articles} />
                            </div>


                        </div>
                    )
                }
            }


        </Query>
    )

}