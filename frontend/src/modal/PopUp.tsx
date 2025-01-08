import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const PopUp = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
  <>
  <Button variant="danger" onClick={handleShow}>
    Fshi
  </Button>

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Konfirmim fshirje</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Je e sigurt qe deshiron të fshish punonjësin?
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Mbyll
      </Button>
      <Button variant="danger">Fshi</Button>
    </Modal.Footer>
  </Modal>
</>
);

}
