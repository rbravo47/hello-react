import { Link } from 'react-router-dom';

export default function Card({ article }) {

    return (
        <Link to={`/article/${article.id}`} className='uk-link-reset'>
            <div className='uk-card uk-card-muted'>
                <div className="uk-card-media-top">
                    <img
                        src={`${process.env.REACT_APP_BACKEND_URL + article.image.url}`}
                        alt={article.image.url}
                        height='100'
                    />
                </div>
                <div className="uk-card-body">
                    <p id='category' className='uk-text-uppercase'>{article.category.name}</p>
                    <p className='uk-text-large'>{article.title}</p>
                </div>
            </div>
        </Link>
    );

}