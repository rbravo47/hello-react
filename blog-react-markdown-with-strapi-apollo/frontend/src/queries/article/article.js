import gql from 'graphql-tag';

export const ARTICLE_QUERY = gql`
    query Articles ($id: ID!) {
        article(id: $id) {
            id
            title
            content 
            image {
                url 
            }
            category {
                id 
                name
            }
        }
    }
`;