export default function LocationInfoBox({ id, title }) {
    return (
        <div className='location-info'>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{id}</strong></li>
                <li>TITLE: <strong>{title}</strong></li>
            </ul>
        </div>
    )
}