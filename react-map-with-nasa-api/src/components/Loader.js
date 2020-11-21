import spinner from '../assets/spinner.gif';

export default function Loader() {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading..." />
            <h1>Fetching Data from NASA...</h1>
        </div>
    )
}