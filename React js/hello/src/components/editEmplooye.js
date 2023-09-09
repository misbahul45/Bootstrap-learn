import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        onClick={handleShow} // Mengubah ini agar menampilkan modal
      >
        Update
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form 
          onSubmit={(e)=>{
            e.preventDefault();
            console.log("hello from update edit Emplooye")
            console.log("hello from update edit Emplooye")
            console.log(props.id, name, role)
            props.updateEmplooye(props.key,name,role)
            handleClose()
          }}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="role"
              >
                Role
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="role"
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e)=>{
                    setRole(e.target.value)
                }}
              />
            </div> 
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
