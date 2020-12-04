import gql from 'graphql-tag';

export const CATEGORY_ARTICLES_QUERY = gql`
    query Category($id: ID!) {
        category(id: $id) {
            id
            name
            articles {
                id
                title
                content
                image {
                    url
                }
                category {
                    name
                }
            }
        }
    }
`;