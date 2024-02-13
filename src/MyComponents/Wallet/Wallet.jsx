import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory2 from "../Homepage/NavbarCategory/NavbarCategory2";
import Footer from "../Homepage/Footer/Footer";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form,Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Wallet = () => {
  const [walletData,setWalletData ] = useState([]);

  //jdflj
  const [reviewBool,setReviewsBool]=useState(false);

//wallet state
const [wallet,setWallet]=useState("");


  const getOrders = async () => {
   
    let url = `${Baseurl()}api/v1/wallet/getwallet`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      setWalletData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };


//   wallet
const createOrderHandler= async(e)=>{
    e.preventDefault();
    let url = `${Baseurl()}api/v1/orders`;
    try {
      const body = { address: "123 street" };
      const config = {
        headers: {
          Token: `${localStorage.getItem("boon")}`,
        },
      };
      config.headers["Authorization-Type"] = "Bearer Token";
      const options = {
        key: "rzp_test_JLYSrkvFXSpSQv",
        amount: wallet * 100,
        currency: "INR",
        // name: cartDetails.title,
        description: "Tutorial of RazorPay",
        handler: function (response) {
          // alert("Payment Done");
          window.location.href = `/payment/successfullpageWallet/${wallet}`;
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }

}




// const handleReviews=async(e)=>{
//   e.preventDefault();
//   let url = `${Baseurl()}api/v1/add/product/review`;
//   const token = localStorage.getItem("boon");
 
//     const payload = {
//       comment: review,
//       productId:productId
//     };
//     try {
//       const res = await axios.put(url, payload, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setReview("");
//       setReviewsBool(false)
//       toast.success("Thank you for review ");
//     } catch (error) {
//       console.log(error);
//     }
// }


  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
  
      <Navbar />
      <NavbarCategory2 />
      <div className="cartcont">
        <div className="cartcontl">
          <div className="cartconttop">
            <div className="cartconttopl" style={{display:"flex",justifyContent:"space-between"}}>
              <h3>My Wallet Ballance</h3>
              <h3>{walletData}</h3>
            </div>

           
          </div>
          <div className="cartconttopl" style={{marginLeft:"1.7rem"}}>
            <Button variant="primary" type="button" style={{width:"150px",padding:"5px"}} onClick={()=>{
                                  setReviewsBool(true)
                                  }
                                  }>
                                  Add Wallet
                                 </Button>
                      {
                        reviewBool && <div style={{marginTop:"1rem"}}>
                        <Form onSubmit={createOrderHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         
          <Form.Control as="textarea" rows={3} col={400} placeholder="Add wallet" value={wallet} onChange={(e)=>setWallet(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
                        </div>
                      }
            </div>
          
                        

                     
                      
         

          {/* <div className="cartcont2">
            <div className="cartcont2l">
              <div className="cartprod">
                <div className="cartprodl">
                  <img src={img} alt="" />
                </div>
                <div className="cartprodr">
                  <h6>Product Name</h6>
                  <p>Product color detail</p>
                  <p>Seller:</p>
                  <p> &#x20b9; 199</p>
                </div>
              </div>
            </div>
            <div className="cartcont2r">
              <h6>Deliverd by Tue Apr 26</h6>
              <p>7 Days Replacement Policy</p>
            </div>
          </div> */}
        </div>

        {/* {orderDetails.length > 0 && cartDetails.map((product, i) => {
          return <div className="cartcontr">
          <h5>Price Details</h5>
          <hr style={{ width: "90%", marginTop: "2%" }} />
          <div className="cartprice">
            <p>Price (1 Item)</p>
            <p>&#x20b9; {product.products[0].price}</p>
          </div>
          <div className="cartprice">
            <p>Discount</p>
            <p>&#x20b9; 300</p>
          </div>
          <div className="cartprice">
            <p>Delivery Charge</p>
            <p>&#x20b9; 50</p>
          </div>
          <hr style={{ width: "90%", marginTop: "2%", color: "#333" }} />
          <div className="cartprice">
            <p style={{ fontWeight: "500px" }}>Total Amount</p>
            <p>&#x20b9; {product.totalAmount}</p>
          </div>
          <hr style={{ width: "90%", marginTop: "2%", color: "#333" }} />
          <p style={{color:"#1C9D31"}}>You will save &#x20b9; 300 on this order </p>
        </div>
        })} */}

        {/* <div className="cartcontr">
          <h5>Price Details</h5>
          <hr style={{ width: "90%", marginTop: "2%" }} />
          <div className="cartprice">
            <p>Price (1 Item)</p>
            <p>&#x20b9; 499</p>
          </div>
          <div className="cartprice">
            <p>Discount</p>
            <p>&#x20b9; 300</p>
          </div>
          <div className="cartprice">
            <p>Delivery Charge</p>
            <p>&#x20b9; 50</p>
          </div>
          <hr style={{ width: "90%", marginTop: "2%", color: "#333" }} />
          <div className="cartprice">
            <p style={{ fontWeight: "500px" }}>Total Amount</p>
            <p>&#x20b9; 249</p>
          </div>
          <hr style={{ width: "90%", marginTop: "2%", color: "#333" }} />
          <p style={{color:"#1C9D31"}}>You will save &#x20b9; 300 on this order </p>
        </div> */}
      </div>
      {/*<div className="" style={{backgroundColor:"#fff"}}>
        <h1 className="text-center text-gray-600 text-4xl font-semibold mt-8">
          Your Cart
        </h1>
        <div className="md:flex  ">
          <div className=" md:w-3/4 rounded-xl border-[#0000000e] border bg-[#f8f8f8ab] mt-8  mx-4">
            {cartPro?.map((c, i) => {
              return (
                <div
                  key={i}
                  className="md:flex mt-2 bg-white p-3 rounded-xl md:justify-between md:shadow mx-2 my-2 "
                >
                  <div className="flex space-x-6 ">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold">
                        {c.product.title}
                      </h2>
                      <h2>
                        <span className="font-medium">Size:</span> XL
                      </h2>
                      <h2>
                        <span className="font-medium">Price:</span> Rs.
                        {c.product.price}/-
                      </h2>
                    </div>
                  </div>
                  <div className="md:flex items-center">
                    <div className="flex mt-5 border-t-2  md:border-t-0 pt-4 md:pt-0 md:mt-0 items-center space-x-2 ">
                      <h2 className="text-lg mr-10">
                        <span className="font-medium"> Quantity:</span>{" "}
                        {c.quantity}
                      </h2>
                      <AiFillMinusCircle
                        onClick={() => {
                          inc(c.product._id);
                          setQua(c.quantity - 1);
                          console.log(c.product._id);
                        }}
                        className="text-3xl cursor-pointer "
                      />
                      <span className="outline-none px-2 rounded-md border border-[#0000004a] bg-gray-300">
                        {c.quantity}
                      </span>
                      <AiFillPlusCircle
                        onClick={() => {
                          dec(c.product._id);
                          setQua(c.quantity + 1);
                          console.log(c.product._id);
                        }}
                        className="text-3xl cursor-pointer "
                      />
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <div className=" md:w-1/4 bg-[#f8f8f8ab] mt-8    rounded-xl mx-4">
     
            <div className="m-3">
              <input
                type="text"
                value={add}
                onChange={(e) => setAdd(e.target.value)}
                placeholder="Address"
                className="border outline-none mt-4 w-full py-2 px-3 "
              />
              <div
                onClick={check}
                className="flex justify-center cursor-pointer rounded-md bottom-0 py-2 bg-black my-2 mx-2"
              >
                <button className="text-white font-medium">Check Out</button>
              </div>
            </div>
            {pop ? (
              <div className="m-3">
                <div className="m-3 border-b-2 border-black pb-2">
                  <h2 className="text-normal text-black font-medium">
                    Price Details
                  </h2>
                </div>
                <div className="flex shadow py-2 px-2 rounded-md  bg-white justify-between mx-2">
                  <h2>Price:</h2>
                  <h2>Rs.{total.grandTotal}/-</h2>
                </div>
                <div className="flex shadow mt-2 py-2 px-2 rounded-md  bg-white justify-between mx-2">
                  <h2>Shipping Charge:</h2>
                  <h2>{total.shippingPrice}</h2>
                </div>
                <hr className="border-dashed border-[#0000004f] mt-5 mb-5" />
                <div className="flex shadow mt-2 py-2 px-2 rounded-md  bg-white justify-between mx-2">
                  <h2>Total Amount:</h2>
                  <h2>Rs.{total.amountToBePaid}/-</h2>
                </div>
                <hr className="border-dashed border-[#0000004f] mt-5 mb-5" />

                <div className="flex justify-center cursor-pointer rounded-md bottom-0 my-4 py-2 bg-black mx-2">
                  <button
                    onClick={() => Razorpay1(total)}
                    className="text-white font-medium"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>*/}
      <Footer />
    </>
  );
};

export default Wallet;
