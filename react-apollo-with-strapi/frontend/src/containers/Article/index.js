import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Query from "../../components/Query";
import { ARTICLE_QUERY } from '../../queries/article/article';
export default function Article() {
    let { id } = useParams();
    return (
        <Query query={ARTICLE_QUERY} id={id}>
            {
                ({ data: { article } }) => {
                    return (
                        <>
                            <div className="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
                                data-src={process.env.REACT_APP_BACKEND_URL + article.image.url}
                                data-srcset={process.env.REACT_APP_BACKEND_URL + article.image.url}
                                data-sizes="(min-width: 650px) 650px, 100vw"
                                data-uk-img>
                                <h1>Background Image</h1>
                            </div>
                            <div className="uk-section">
                                <div className="uk-container uk-container-small">
                                    <ReactMarkdown source={article.content} />
                                </div>
                            </div>
                        </>
                    )
                }
            }
        </Query>
    )
}