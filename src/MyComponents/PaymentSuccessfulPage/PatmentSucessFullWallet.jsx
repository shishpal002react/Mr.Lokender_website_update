import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory2 from "../Homepage/NavbarCategory/NavbarCategory2";
import Footer from "../Homepage/Footer/Footer";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function PatmentSucessFullWallet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const postHandler = async () => {
    try {
      const res = await axios.post(
        `https://lokender-backend-api.vercel.app/api/v1/wallet/addWallet`,
        {
            balance: id
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("boon")}`,
          },
        }
      );
     
      navigate("/wallet");
    } catch {}
  };

  useEffect(() => {
    postHandler();
  }, [id]);

  return (
    <>
      <Navbar />
    </>
  );
}
