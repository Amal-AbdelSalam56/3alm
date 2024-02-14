import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";
import FormSelect from "../formSelect/FormSelect";

function CreateReport({ post_id, setReport }) {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const { token, user } = useSelector((state) => state.auth);

  const inputsSelect = [
    {
      name: t("Report"),
      type: "textarea",
      class: "",
      state: "reason",
    },
  ];
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const handleButtonClick = async () => {
    formValues.post_id = post_id;
    console.log(formValues);
    try {
      const res = await axios.post(
        `${URL}/api/post/report`,
        formValues,

        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      setReport(false);
      toast.success(res?.data?.message);
      if (res.status == 201) {
      }
    } catch (err) {
      setReport(false);

      toast.error(t("This post has been previously reported"));

      console.log(err);
    }
  };
  return (
    <>
      <FormSelect
        inputs={inputsSelect}
        //   name={t("Save modifications")}
        setFormValues={setFormValues}
      />
      <button
        className="btn btn-dark font-weight-bold logbtn"
        style={{
          background: "linear-gradient(#00ACFF75, #BD00FF58)",
          borderRadius: "16px",
          width: "250px",
          maxWidth: "100%",
          fontSize: "24px",
          fontWeight: "600",
          letterSpacing: "1px",
          border: "none",
        }}
        onClick={() => handleButtonClick()}
      >
        {t("Report")}
      </button>
    </>
  );
}

export default CreateReport;
