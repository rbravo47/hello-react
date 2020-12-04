import Card from './Card';
export default function Articles({ articles }) {

    const leftArticlesCount = Math.ceil(articles.length / 5);

    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount);
    console.log(leftArticles, rightArticles)

    return (
        <div className='uk-child-width-1-2' data-uk-grid>
            {
                leftArticles.map(article => <Card key={`article__${article.id}`} article={article} />)
            }
            <div className='uk-child-width-1-2@m uk-grid-match' data-uk-grid>
                {
                    rightArticles.map(article => <Card key={`article__${article.id}`} article={article} />)
                }
            </div>
        </div>
    );
};