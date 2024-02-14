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
        `${URL_API}/api/skills-destroy/${e}`,
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
  return (
    <div style={{ color: "#303030" }}>
      <ul>
        {items?.skills?.map((e, index) => (
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
      </ul>
      
    </div>
  );
};

function UploadSkilles({ setChange, change, items }) {
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
      name: t("Add Skilles"),
      type: "text",
      class: "",
      value: skillEdit?.name,
      state: "name",
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
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [video, setVideo] = useState("");

  const [loading, setLoading] = useState("");
  const handleCreate = async (e) => {
    // console.log(e);
    setLoading(true);

    try {
      const res = await axios.post(
        `${URL_API}/api/skills-create`,
        { name: formValues?.name },
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
    setLoading(true);

    try {
      const res = await axios.post(
        `${URL_API}/api/skills-update/${skillEdit?.id}`,
        { name: formValues?.name },
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
        {t("Skills")}
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
      {items?.skills?.length > 0 && (
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
        closeModal={() => setIsShareOpen(false)}
        title={t("Skills")}
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
              {skillEdit ? (
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

export default UploadSkilles;
