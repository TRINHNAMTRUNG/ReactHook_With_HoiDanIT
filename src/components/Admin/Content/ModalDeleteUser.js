import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete, setDataUpdate } = props;

    const handleClose = () => setShow(false);
    const handleSubmitDeleteUser = ()=> {
        alert('me');
    }
    console.log(dataDelete);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete the user ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure delete this user 
                    <b> {dataDelete && dataDelete.email ? dataDelete.email : "" } </b> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={()=> handleSubmitDeleteUser() }>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;