import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { t } from "i18next";
function AddFollow({ user, setType }) {
  console.log(user);
  const { token } = useSelector((state) => state.auth);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const data = {
    following_id: user.id || user.user_id,
  };
  console.log(data);
  const handleFollow = async () => {
    setType(false);
    try {
      const res = await axios.post(`${URL}/api/follow-create`, data, {
        headers: {
          Accept: "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className=" text-center  text-white d-flex mb-4 d-felx align-items-center gap-2"
      onClick={() => handleFollow()}
      style={{
        borderRadius: "50px",
        backgroundColor: "rgb(0, 153, 171)",
        padding: "6px 21px",
        lineHeight: "normal",
        fontSize: "17px",
        marginRight: "15px",
      }}
    >
      <BsFillPersonPlusFill />

      {t("Follow")}
    </button>
    // <button
    //   onClick={() => handleFollow()}
    //   type="submit"
    //   // className="btn btn-dark font-weight-bold logbtn gap-2"
    //   className="font-xss ms-2 text-white text-center font-xssss align-items-center"
    //   style={{
    //     padding: " 7px 80px",
    //     borderRadius: "0.5rem",
    //     backgroundColor: "#0099AB",
    //   }}
    // >
    //   متابعه
    // </button>
  );
}

export default AddFollow;
