import { useQuery } from '@apollo/client';


export default function Query({ children, query, id }) {
    console.log(query, id)
    const { data, loading, error } = useQuery(
        query,
        { variables: { id: parseInt(id) } }
    );

    console.log(data, loading, error);
    if (loading) return <p>loading...</p>
    if (error) return <p>Error: {JSON.stringify(error)}</p>

    return children({ data });
}