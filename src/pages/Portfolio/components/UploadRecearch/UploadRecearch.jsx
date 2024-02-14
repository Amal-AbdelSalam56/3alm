import { t } from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { cvImg } from "../../../../assets/icons";

import { useDispatch, useSelector } from "react-redux";
import { close } from "../../../../assets/images/icons";
import { useTranslation } from "react-i18next";
import cover from "../../../../assets/images/cover.png";
import character from "../../../../assets/images/user.png";
import Button from "../../../../components/ui/button/Button";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import VideoPlayer from "../../../../components/ui/videoPlayer/VideoPlayer";
import VideoPlayerProfile from "../../../../components/ui/videoPlayer/VideoPlayer";
import { Modal } from "../../../../components/ui";
import FormSelect from "../../../../components/formSelect/FormSelect";
import Researches from "../researches";
import xicon from "../../../../assets/images/x.png";
import img3 from "../../../../assets/images/img3.jpg";
import img2 from "../../../../assets/images/img2.jpg";
import img1 from "../../../../assets/images/img1.jpeg";
import backto from "../../../../assets/images/backto.png";
import next from "../../../../assets/images/next.png";
import download from "../../../../assets/images/download.png";
import share from "../../../../assets/images/share.png";
import fileicon from "../../../../assets/images/fileicon.png";
import Research from "../../../../assets/images/Research.png";
import Line from "../../../../assets/images/Line.png";
import avatar from "../../../../assets/images/avatar.png";
import comment from "../../../../assets/images/comment.png";
import redheart from "../../../../assets/images/redheart.png";
const SkillsComponent = ({
  items,
  setChange,
  change,
  setIsShareOpen,
  setskillEdit,
}) => {
  const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;
  const [formValues, setFormValues] = useState({});
  const { token, user } = useSelector((state) => state.auth);
  // const [isShareOpen, setIsShareOpen] = useState(false);
  // Render the skills component
  const handleDelete = async (e) => {
    // console.log(e);

    try {
      const res = await axios.get(
        `${URL_API}/api/research-destroy/${e}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res, "res bola");
      if (res.status == 201) {
        setChange(!change);
        toast.success("Profile user Video Deleted");
      }
      // console.log(res);
    } catch (err) {
      console.log(err);
      setLoading(false);

      setIsShareOpen(false);
      setPhoto("");
      // console.log(err);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ color: "#303030" }}>
      {/* <Researches data={items} /> */}
      {items?.researchs.map((e, index) => (
        <>
          <div className="d-flex justify-content-between">
            <div
              className="p-2 md:p-4 w-100"
              style={{ color: "#303030" }}
              key={index}
            >
              <div
                className="d-flex justify-content-between p-2 md:p-4 w-100"
                // className="p-2 md:p-4 w-100"
                style={{ color: "#303030" }}
                key={index}
              >
                <h1 className="fw-700 mb-3">{e?.title}</h1>
                <div className="d-flex align-items-center gap-3">
                  <AiOutlineEdit
                    style={{ color: "#7CC9D1" }}
                    className="font-xxl"
                    onClick={() => {
                      localStorage.setItem("currentPage", "CV");
                      setskillEdit(e);
                      setIsShareOpen(true);
                    }}
                  />{" "}
                  <img
                    src={close}
                    alt=""
                    onClick={() => {
                      Swal.fire({
                        title: t("Do you want to delete " + `${e.name}`),
                        // text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: t("Yes"),
                        cancelButtonText: t("No"),
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(e.id);
                        }
                      });
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-xxl-between flex-wrap">
                <div>
                  <p className="mb-3">
                    {" "}
                    Jun 2022{" "}
                    <span style={{ color: "#0077B5" }}>1 yrs 02 mos </span>
                  </p>

                  <p className="mb-3">{e?.journal_name}</p>
                </div>

                <img
                  style={{ cursor: "pointer" }}
                  src={fileicon}
                  alt=""
                  onClick={handleOpen}
                />
              </div>
              <div className="contentRequest d-flex flex-wrap">
                <div className="add" style={{ border: "none" }}>
                  <p
                    style={{
                      color: "#25324B",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    <img src={avatar} alt="" />
                    {e?.authors}
                  </p>
                </div>
                {/* <div className="add" style={{ border: "none" }}>
                <p
                  style={{
                    color: "#25324B",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  <img src={avatar} alt="" />
                  {t("Dr. Mahmoud ")}
                </p>
              </div> */}
              </div>
            </div>
          </div>
          <hr />
        </>
      ))}
      {/* <ul>
        {items?.researchs?.map((e, index) => (
          <>
            <li
              className="my-3 d-flex align-items-center justify-content-between"
              key={index}
            >
              <span>{e.name}</span>
              <div className="d-flex align-items-center gap-3">
                <AiOutlineEdit
                  style={{ color: "#7CC9D1" }}
                  className="font-xxl"
                  onClick={() => {
                    localStorage.setItem("currentPage", "CV");
                    setskillEdit(e);
                    setIsShareOpen(true);
                  }}
                />{" "}
                <img
                  src={close}
                  alt=""
                  onClick={() => {
                    Swal.fire({
                      title: t("Do you want to delete " + `${e.name}`),
                      // text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: t("Yes"),
                      cancelButtonText: t("No"),
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleDelete(e.id);
                      }
                    });
                  }}
                />
              </div>
            </li>
            <hr />
          </>
        ))}
      </ul> */}
      {/* <div
        className="Skills"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/skillesInfo");
          localStorage.setItem("currentPage", "Skilles");
        }}
      >
        <span> &rarr; </span>
        {t("Show all")} {t("Skills")}
      </div> */}
    </div>
  );
};

function UploadRecearch({ setChange, change, items }) {
  const navigate = useNavigate();
  const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;
  const [formValues, setFormValues] = useState({});
  const { token, user } = useSelector((state) => state.auth);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [skillEdit, setskillEdit] = useState(false);

  const [t] = useTranslation();
  console.log(items, "itemss");
  const inputsSelect = [
    {
      name: t("title"),
      type: "text",
      class: "",
      value: skillEdit?.title,
      state: "title",
    },
    {
      name: t("journal_name"),
      type: "text",
      class: "",
      value: skillEdit?.journal_name,
      state: "journal_name",
    },
    {
      name: t("year"),
      type: "number",
      class: "",
      value: skillEdit?.year,
      state: "year",
    },
    {
      name: t("volume_number"),
      type: "number",
      class: "",
      value: skillEdit?.volume_number,
      state: "volume_number",
    },
    {
      name: t("pages_number"),
      type: "number",
      class: "",
      value: skillEdit?.pages_number,
      state: "pages_number",
    },
    {
      name: t("doi_number_or_url"),
      type: "text",
      class: "",
      value: skillEdit?.doi_number_or_url,
      state: "doi_number_or_url",
    },
    {
      name: t("authors"),
      type: "text",
      class: "",
      value: skillEdit?.authors,
      state: "authors",
    },
    {
      name: t("references"),
      type: "text",
      class: "",
      value: skillEdit?.references,
      state: "references",
    },
  ];
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showDropdown1, setShowDropdown1] = useState(false);
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const [photo, setPhoto] = useState("");
  // const [isShareOpen, setIsShareOpen] = useState(false);
  const [file, setfile] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [video, setVideo] = useState("");

  const [loading, setLoading] = useState("");
  const handleCreate = async (e) => {
    // console.log(e);
    setLoading(true);
    const data = { ...formValues, category_id: 1 };
    if (file) {
      data.file = file;
    }
    const formData = new FormData();

    // إضافة القيم من formValues إلى FormData
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    // إذا كان هناك ملف، ضعه في FormData
    if (file) {
      formData.append("file", file);
    }
    formData.append("category_id", 1);

    console.log(data);
    try {
      const res = await axios.post(`${URL_API}/api/research-create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      if (res.status == 201) {
        setChange(!change);
        toast.success("Profile user resume updated successfully");
        setIsShareOpen(false);
        setVideo("");
        setLoading(false);
      }
      // console.log(res);
    } catch (err) {
      console.log(err);
      setLoading(false);

      setIsShareOpen(false);
      setPhoto("");
      // console.log(err);
    }
  };
  const handleUpdate = async (e) => {
    // console.log(e);
    // console.log(e);
    setLoading(true);
    const data = { ...formValues, category_id: 1 };
    if (file) {
      data.file = file;
    }
    const formData = new FormData();

    // إضافة القيم من formValues إلى FormData
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    // إذا كان هناك ملف، ضعه في FormData
    if (file) {
      formData.append("file", file);
    }
    formData.append("category_id", 1);

    console.log(data);
    setLoading(true);

    try {
      const res = await axios.post(
        `${URL_API}/api/research-update/${skillEdit?.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      if (res.status == 200) {
        setChange(!change);
        toast.success("Profile user resume updated successfully");
        setIsShareOpen(false);
        setVideo("");
        setLoading(false);
        setFormValues({});
        setskillEdit({});
      }
      // console.log(res);
    } catch (err) {
      console.log(err);
      setLoading(false);

      setIsShareOpen(false);
      setPhoto("");
      // console.log(err);
    }
  };
  const handleDelete = async (e) => {
    // console.log(e);

    try {
      const res = await axios.post(
        `${URL_API}/api/profile/deleteVideo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      if (res.status == 201) {
        setChange(!change);
        toast.success("Profile user Video Deleted");
      }
      // console.log(res);
    } catch (err) {
      console.log(err);
      setLoading(false);

      setIsShareOpen(false);
      setPhoto("");
      // console.log(err);
    }
  };

  return (
    <div className="resume">
      <p className="d-flex justify-content-xxl-between">
        {t("Researches")}
        <div className="d-flex align-items-center gap-3">
          <AiOutlineEdit
            style={{ color: "#7CC9D1" }}
            className="font-xxl"
            onClick={() => {
              localStorage.setItem("currentPage", "CV");
              // navigate("/userCV");
              setIsShareOpen(true);
            }}
          />{" "}
        </div>
      </p>
      {items?.researchs?.length > 0 && (
        <SkillsComponent
          items={items}
          setChange={setChange}
          change={change}
          setIsShareOpen={setIsShareOpen}
          setskillEdit={setskillEdit}
        />
      )}
      {/* <SkillsComponent items={items} /> */}
      {/* {renderSectionComponent(sectionLabel)} */}
      <Modal
        hasCloseButton
        closeButtonLeft
        isOpen={isShareOpen}
        closeModal={() => {
          setskillEdit({});
          setIsShareOpen(false);
        }}
        title={t("Researches")}
        closeIcon={true}
        isFullScreen={false}
      >
        <>
          {video ? (
            <div className="d-flex resume flex-wrap flex-column gap-3 mb-3 text-center justify-content-center">
              {/* <div style={{ position: "relative" }}>
                <img
                  src={close}
                  style={{ position: "absolute", cursor: "pointer" }}
                  onClick={() => setPhoto("")}
                />
                <img
                  src={URL.createObjectURL(photo)}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </div> */}
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
                <video width="400" controls style={{ maxHeight: "350px" }}>
                  <source src={URL?.createObjectURL(video)} />
                </video>
              </div>
              {/* <button disabled></button> */}
              <Button
                disabled={loading}
                onClick={() => {
                  handleUpdate("profile/uploadVideo");
                }}
              >
                {t("Update")}
              </Button>
            </div>
          ) : (
            <>
              <FormSelect
                inputs={inputsSelect}
                //   name={t("Save modifications")}
                setFormValues={setFormValues}
              />
              <input
                type="file"
                className="textarea-form"
                onChange={(e) => setfile(e.target.files[0])}
              />
              {skillEdit ? (
                <button
                  className="btn btn-dark font-weight-bold logbtn mt-4"
                  style={{
                    background: "#0099AB",
                    borderRadius: "16px",
                    color: "#fff",
                    width: "250px",
                    maxWidth: "100%",
                    fontSize: "24px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    border: "none",
                  }}
                  onClick={() => handleUpdate()}
                >
                  {t("Edit")}
                </button>
              ) : (
                <button
                  className="btn btn-dark font-weight-bold logbtn"
                  style={{
                    background: "#0099AB",
                    borderRadius: "16px",
                    color: "#fff",
                    width: "250px",
                    maxWidth: "100%",
                    fontSize: "24px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    border: "none",
                  }}
                  onClick={() => handleCreate()}
                >
                  {t("Add")}
                </button>
              )}
              {/* <button
                className="btn btn-dark font-weight-bold logbtn"
                style={{
                  background: "#0099AB",
                  borderRadius: "16px",
                  color: "#fff",
                  width: "250px",
                  maxWidth: "100%",
                  fontSize: "24px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  border: "none",
                }}
                onClick={() => handleUpdate()}
              >
                {t("Add")}
              </button> */}
            </>
          )}
        </>
      </Modal>
    </div>
  );
}

export default UploadRecearch;
