import { useHistory, useParams } from "react-router-dom";
import Modal from 'react-modal';

const Modalss = () => {
    let { id } = useParams();
    let history = useHistory();

    console.log('history?', history);

    const back = e => {
        e.stopPropagation();
        history.goBack();
    }

    Modal.setAppElement('#main');
    return (
        <Modal
            isOpen={true}
            onRequestClose={back}
            contentLabel="Post modal"
        >
            <p>Hello</p>
            <button onClick={back}>Close Modal</button>
        </Modal>
    )

};

export default Modalss;