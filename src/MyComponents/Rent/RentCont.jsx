import React, { useState } from "react";
import img from "../../Images/d41.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table, Modal, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const ReactCont = () => {
  const [landlord, setLandlord] = useState(false);
  const [tuition, setTuition] = useState(false);
  // const [society, setSociety] = useState(false);

  // data information
  const [data, setData] = useState("");

  // Post model
  function MyVerticallyCenteredModallandlord(props) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [payment, setPayment] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [confirm, setConfiorm] = useState("");
    const [ifsc, setIFSC] = useState("");
    const [bhk, setBHK] = useState("");
    const [rent, setRent] = useState("");
    const [address, setAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [pan, setPan] = useState("");

    const postData = async (e) => {
      e.preventDefault();
      console.log("ls", localStorage.getItem("token"));
      let url = `https://lokender-backend-api.vercel.app/api/v1/pay/rent/add`;
      try {
        const res = await axios.post(
          url,
          {
            type: "landlord",
            landlord: {
              name: name,
              number: number,
              payment: payment,
              accountNumber: accountNumber,
              confirm: confirm,
              ifsc: ifsc,
              bhk: bhk,
              rent: rent,
              address: address,
              pinCode: pinCode,
              pan: pan,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast("Data is create successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setLandlord(false);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {"Pay Landlord Rent"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment</Form.Label>
              <Form.Control
                type="text"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Account Number</Form.Label>
              <Form.Control
                type="text"
                value={confirm}
                onChange={(e) => setConfiorm(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                type="text"
                value={ifsc}
                onChange={(e) => setIFSC(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>BHK</Form.Label>
              <Form.Control
                type="text"
                value={bhk}
                onChange={(e) => setBHK(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rent</Form.Label>
              <Form.Control
                type="text"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>pinCode</Form.Label>
              <Form.Control
                type="text"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pan Number</Form.Label>
              <Form.Control
                type="text"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#19376d",
                borderRadius: "0",
                border: "1px solid #19376d",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const handleData = (temp) => {
    setData(temp);
    setTuition(true);
  };

  function MyVerticallyCenteredModaltuition(props) {
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [confirm, setConfirm] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const postData = async (e) => {
      e.preventDefault();
      console.log("ls", localStorage.getItem("token"));
      let url = `https://lokender-backend-api.vercel.app/api/v1/pay/rent/add`;
      try {
        const res = await axios.post(
          url,
          {
            type: data,
            data: {
              name: name,
              rollNumber: rollNumber,
              contactNumber: contactNumber,
              email: email,
              payment: payment,
              accountNumber: accountNumber,
              confirm: confirm,
              ifsc: ifsc,
              address: address,
              city: city,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Data is create successfully", res.data);
        toast("Data is create successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTuition(false);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {"Tuition Rent"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment</Form.Label>
              <Form.Control
                type="text"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm</Form.Label>
              <Form.Control
                type="text"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>IFSC code</Form.Label>
              <Form.Control
                type="text"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Information </Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#19376d",
                borderRadius: "0",
                border: "1px solid #19376d",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  // function MyVerticallyCenteredModalsociety(props) {
  //   const [name, setName] = useState("");

  //   const postData = async (e) => {
  //     e.preventDefault();
  //     console.log("ls", localStorage.getItem("token"));
  //     let url = `https://lokender-backend-api.vercel.app/api/v1/admin/createCategory/${name}`;
  //     try {
  //       const res = await axios.post(url, formdata, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       console.log("Data is create successfully", res.data);
  //       toast("Data is create successfully", {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //       setSociety(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   // useEffect(() => {
  //   //   getProducts();
  //   // }, []);
  //   // };

  //   return (
  //     <Modal
  //       {...props}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           {" "}
  //           {"Add Category"}
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Form onSubmit={postData}>
  //           <Form.Group className="mb-3">
  //             <Form.Label>Image</Form.Label>
  //             <Form.Control
  //               type="file"
  //               required
  //               onChange={(e) => setFile(e.target.files[0])}
  //             />
  //           </Form.Group>
  //           <Form.Group className="mb-3">
  //             <Form.Label>Name</Form.Label>
  //             <Form.Control
  //               type="text"
  //               value={name}
  //               onChange={(e) => setName(e.target.value)}
  //               required
  //             />
  //           </Form.Group>

  //           <Button
  //             style={{
  //               backgroundColor: "#19376d",
  //               borderRadius: "0",
  //               border: "1px solid #19376d",
  //             }}
  //             type="submit"
  //           >
  //             Submit
  //           </Button>
  //         </Form>
  //       </Modal.Body>
  //     </Modal>
  //   );
  // }

  return (
    <>
      <MyVerticallyCenteredModallandlord
        show={landlord}
        onHide={() => setLandlord(false)}
      />
      <MyVerticallyCenteredModaltuition
        show={tuition}
        onHide={() => setTuition(false)}
      />
      {/* <MyVerticallyCenteredModalsociety
        show={society}
        onHide={() => setSociety(false)}
      /> */}
      <div className="rentcont">
        <h3>My Payment</h3>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>Lorem Ipsum</p>
          <button>Pay</button>
        </div>
        <h3>Recent Payments</h3>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>Landlord</p>
          <button onClick={() => setLandlord(true)}>Pay</button>
        </div>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>Tuition</p>
          <button onClick={() => handleData("tuition")}>Pay</button>
        </div>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>Society</p>
          <button onClick={() => handleData("society")}>Pay</button>
        </div>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>office</p>
          <button onClick={() => handleData("office")}>Pay</button>
        </div>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>school</p>
          <button onClick={() => handleData("school")}>Pay</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ReactCont;
