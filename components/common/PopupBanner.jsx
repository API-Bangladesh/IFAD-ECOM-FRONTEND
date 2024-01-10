// PopupBanner.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';

const PopupBanner = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}

    dialogClassName="onload-modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered


    >
      <div className="onload-popup">
        <div className="onload-popup-img">
        <img src="https://ecomcms.ifadgroup.com/storage/category-image/Noodles-600X600-143527.jpg" alt="" />
        </div>

      </div>

      <span className='close' onClick={onClose}>
      <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.48881 15.5962L16.0954 4.98963L17.5096 6.40384L6.90302 17.0104L5.48881 15.5962Z' fill='%23000'/><path d='M16.0954 17.7176L4.7817 6.40384L6.19592 4.98963L17.5096 16.3033L16.0954 17.7176Z' fill='%23000'/></svg>

      </span>
      {/* <Button variant="secondary" onClick={onClose}>
          *
        </Button> */}



      {/* <Modal.Header closeButton>
        <Modal.Title>Your Popup Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is your popup banner!</p>
      </Modal.Body> */}

    </Modal>
  );
};

export default PopupBanner;
