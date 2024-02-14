import cover from "../../assets/images/cover.png";
import mg from "../../assets/images/mg.jpg";
import camera2 from "../../assets/images/camera2.png";
import Icon from "../../assets/images/Icon.png";
import Union from "../../assets/images/Union.png";
import "./ProfileHeader.scss";
import { close, home } from "../../assets/images/icons";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "../ui";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import { getUser } from "../../rtk/Api/Api";
import { getDataProfile } from "../posts/getDataPost";
import { useNavigate, useParams } from "react-router-dom";

import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import Actions from "../../pages/FriendsPage/components/Actions";
import AddFollow from "../../pages/FriendsPage/components/AddFollow";
import RejectedFollow from "../../pages/FriendsPage/components/RejectFollow";
// import RejectedFollow from "../friendBox/RejectFollow";
// import AddFollow from "../friendBox/AddFollow";

function ProfileHeader({ openModal, setMainMenu, mainMenu }) {
  const { user, error, token } = useSelector((state) => state.auth);
  const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;
  const params = useParams().id;
  const [change, setChange] = useState(false);
  const { items } = getDataProfile(
    token,

    `profile/${params}`,
    change,
    params
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showDropdown1, setShowDropdown1] = useState(false);
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [t] = useTranslation();
  const [lightboxOpen1, setLightboxOpen1] = useState(false);
  const openLightbox1 = () => setLightboxOpen1(true);
  const closeLightbox1 = () => setLightboxOpen1(false);

  const [selectedcover, setSelectedcover] = useState(cover);
  const [selectedphoto, setSelectedphoto] = useState(mg);

  const [isShareOpen, setIsShareOpen] = useState(false);
  const [photo, setPhoto] = useState("");
  // const [isShareOpen, setIsShareOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [typeImage, setTypeImage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setSelectedFile(...e.target.files);

    setUploadComplete(false);

    if (file) {
      handleUpload(e, type);
    }
  };

  const handleUpload = (e, type) => {
    setUploading(true);

    // Simulating upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          // console.log(e.target.files[0]);
          setPhoto(e.target.files[0]);
          clearInterval(interval);
          setUploadComplete(true);
          setUploading(false);

          return prevProgress;
        }
      });
    }, 500);
  };
  const dispatch = useDispatch();
  const [loading, setLoading] = useState("");
  const handleUpdate = async (e) => {
    // console.log(e);
    setLoading(true);

    try {
      const res = await axios.post(
        `${URL_API}/api/${e}`,
        { image: photo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status == 200) {
        setChange(!change);
        toast.success("Profile img updated successfully");
        setIsShareOpen(false);
        setPhoto("");
        setLoading(false);

        getUser(token, dispatch);
      }
      // console.log(res);
    } catch (err) {
      setLoading(false);

      setIsShareOpen(false);
      setPhoto("");
      // console.log(err);
    }
  };
  const handleUpdateCover = async (e) => {
    // console.log(e);
    // console.log("j");
    // console.log(photo);
    setLoading(true);

    try {
      const res = await axios.post(
        `${URL_API}/api/${e}`,
        { cover: photo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status == 200) {
        setChange(!change);
        toast.success("Profile userCoverImage updated successfully");
        setIsShareOpen(false);
        setPhoto("");
        console.log(res);
        setLoading(false);

        getUser(token, dispatch);
      }
      // console.log(res);
    } catch (err) {
      setIsShareOpen(false);
      setPhoto("");
      // console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

  const [type, setType] = useState(items.follow == "unfriend" ? true : false);
  useEffect(() => {
    console.log(type);
    setMainMenu(items);
    setType(items.follow == "unfriend" ? true : false);
  }, [items]);
  console.log(user, items);

  return (
    <>
      <div className="bg-white rounded-t-3xl ">
        <div className="relative">
          {user?.user_name === params ? (
            <SlideshowLightbox
              key={user?.profile?.cover}
              open={lightboxOpen1}
              onClose={closeLightbox1}
            >
              <img
                className="w-full min-h-[18rem] max-h-72 object-cover object-bottom rounded-t-3xl"
                src={
                  user?.profile?.cover
                    ? `${URL_API}/storage/${user?.profile?.cover}`
                    : selectedcover
                }
                alt=""
                onClick={toggleDropdown}
              />
            </SlideshowLightbox>
          ) : (
            <SlideshowLightbox
              key={user?.profile?.cover}
              open={lightboxOpen1}
              onClose={closeLightbox1}
            >
              <img
                className="w-full min-h-[18rem] max-h-72 object-cover object-bottom rounded-t-3xl"
                src={
                  items?.cover_Img
                    ? `${URL_API}/storage/${items?.cover_Img}`
                    : selectedcover
                }
                alt=""
                onClick={toggleDropdown}
              />
            </SlideshowLightbox>
          )}

          <div className="absolute left-4 bottom-2 sm:left-6">
            <Dropdown
              isStatic={true}
              buttonData={
                <img className="w-8 sm:w-full" src={camera2} alt="" />
              }
              labels={
                items.user_id === user.id
                  ? [t("Choose a background image"), "See profile picture"]
                  : ["See profile picture"]
              }
              post_id={user.id}
              post={user}
              top="bottom-12 sm:left-16 left-48"
              handleButtons={(label) => {
                if (label === "See the background image") {
                  openLightbox1();
                } else if (label === "Choose a background image") {
                  setIsShareOpen(true);
                  setTypeImage("cover");
                }
              }}
            />
          </div>

          <div className="absolute -bottom-10 sm:-bottom-16">
            <Dropdown
              buttonData={
                <div className="relative ps-6 sm:ps-12">
                  {items.user_id === user.id && (
                    <img
                      className="absolute bottom-0 left-4 w-8 h-8"
                      src={camera2}
                      alt=""
                    />
                  )}
                  {user?.user_name === params ? (
                    <SlideshowLightbox
                      key={user?.profile?.image}
                      open={open}
                      onClose={handleClose}
                    >
                      <img
                        className="w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-white "
                        style={{ border: "5px solid #fff" }}
                        src={
                          user?.profile?.image
                            ? `${URL_API}/storage/${user?.profile?.image}`
                            : selectedcover
                        }
                        // src={`${URL_API}/storage/${user?.image}`}
                        alt=""
                        onClick={toggleDropdown}
                      />
                    </SlideshowLightbox>
                  ) : (
                    <SlideshowLightbox
                      key={items?.user_img}
                      open={open}
                      onClose={handleClose}
                    >
                      <img
                        src={
                          items?.user_img
                            ? `${URL_API}/storage/${items?.user_img}`
                            : selectedcover
                        }
                        className="w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-white"
                        // src={`${URL_API}/storage/${items?.user_img}`}
                        alt=""
                        onClick={toggleDropdown}
                      />
                    </SlideshowLightbox>
                  )}
                </div>
              }
              labels={
                items.user_id === user.id
                  ? [t("Choose personal photo"), "See profile picture"]
                  : ["See profile picture"]
              }
              post_id={user.id}
              post={user}
              top="-top-12"
              position="right-10"
              handleButtons={(label) => {
                if (label === "See profile picture") {
                  handleOpen();
                } else if (label === "Choose personal photo") {
                  setIsShareOpen(true);
                  setTypeImage("img");
                }
              }}
            />
          </div>
        </div>
        <div className="px-5">
          <div className="">
            <div className="mx-5 my-3" style={{ width: "fit-content" }}>
              <h3 style={{ fontSize: "30px" }} className="pt-12  fs-1  fw-bold">
                {items?.first_name + " " + items?.last_name} <span></span>
              </h3>
              <p>IT Specialist</p>
              <p>IT Specialist</p>
            </div>
          </div>
          <div
            className="col-12 d-flex flex-wrap"
            style={{ textAlign: "left" }}
          >
            {items.user_id !== user.id && (
              <>
                <div className="p-2">
                  {type ? (
                    <AddFollow user={items} setType={setType} />
                  ) : (
                    <RejectedFollow user={items} setType={setType} />
                  )}
                </div>
                <button
                  className=" text-center mt-5 d-flex "
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50px",
                    lineHeight: "normal",
                    padding: "6px 21px",
                    border: "1px solid",
                    fontSize: "17px",
                    marginRight: "15px",
                  }}
                >
                  <img
                    src={Union}
                    alt=""
                    style={{ marginTop: "5px" }}
                    className="mx-2"
                  />{" "}
                  {t("send a message")}
                </button>
              </>
            )}
            {/* <Actions user={items} /> */}

            {/* <button
              className=" text-center mt-5 d-flex "
              style={{
                backgroundColor: "white",
                color: "#585858",
                lineHeight: "normal",
                borderRadius: "50px ",
                padding: "6px 21px",
                border: "1px solid #585858",
                fontSize: "17px",
                marginRight: "15px",
              }}
            >
              {t("More")}
            </button> */}
          </div>
        </div>
        {/* <div className="flex  sm:flex-row justify-between pt-4 sm:px-8 px-2">
          <div className="d-flex flex-column text-center">
           
            <h3 className="pt-1  mx-5 d-flex align-items-center justify-content-center flex-column gap-2">
              <span style={{ color: "green" }}>{items?.job} </span>
              <span>
                {" "}
                <img src={items["image-job"]} alt="" />
              </span>
            </h3>
          </div>
          <div className="flex gap-2 sm:px-4">
            <p
              // onClick={openModal}
              className="cursor-pointer"
              onClick={() => navigate(`/profile/followers/${params}`)}
            >
              {t("followers") + " " + items.follwerCount}
            </p>

            <p
              onClick={() => navigate(`/profile/following/${params}`)}
              className="cursor-pointer"
            >
              {t("following") + " " + items.follwingCount}
            </p>
          </div>
        </div> */}

        {/* <div className="flex justify-end pt-2 pb-4 px-8 sm:px-24">
          {items.user_id === user.id ? (
            <Button
              className="w-fit"
              onClick={() => {
                if (items.user_id === user.id) {
                  navigate("/settings/update-info");
                }
                // handle the edit the follow and the unFollow
              }}
            >
              {t("edit my data")}
            </Button>
          ) : (
            <>
              <div className="p-2">
                {type ? (
                  <AddFollow user={items} setType={setType} />
                ) : (
                  <RejectedFollow user={items} setType={setType} />
                )}
              </div>
            </>
          )}
       
        </div> */}
      </div>

      <Modal
        hasCloseButton
        closeButtonLeft
        isOpen={isShareOpen}
        closeModal={() => setIsShareOpen(false)}
        title={t("update image Profile")}
        closeIcon={true}
        isFullScreen={false}
      >
        <>
          {photo ? (
            <div className="d-flex flex-wrap gap-3 mb-3 text-center justify-content-center">
              <div style={{ position: "relative" }}>
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
              </div>
              {/* <button disabled></button> */}
              <Button
                disabled={loading}
                onClick={() => {
                  if (typeImage == "cover") {
                    handleUpdateCover("profile/uploadUserCoverImage");
                  } else {
                    handleUpdate("profile/uploadUserImage");
                  }
                }}
              >
                {t("Update")}
              </Button>
            </div>
          ) : (
            <label
              htmlFor="file"
              className="rounded-3 text-center d-flex bg-white p-4 w-100 border-dashed"
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "30px",
              }}
            >
              <h4 style={{ fontWeight: "500" }}>
                Choose a file or drag & drop it here
              </h4>
              <h3 style={{ fontWeight: "500", color: "#A9ACB4" }}>
                JPEG, PNG formats, up to 50MB
              </h3>
              <br />
              <input
                type="file"
                name="file[]"
                required
                onChange={(e) => handleFileChange(e, "img")}
                id="file"
                style={{ display: "none" }} // Hide the input element
                accept=".jpeg, .jpg, .png"
              />
              <label htmlFor="file" className="browse-button">
                {uploading ? "Uploading..." : "Browse File"}
              </label>
              {uploading && (
                <div>
                  <p>Uploading: {uploadProgress}%</p>
                  <progress value={uploadProgress} max="100" />
                </div>
              )}
            </label>
          )}
        </>
      </Modal>
    </>
  );
}

export default ProfileHeader;
