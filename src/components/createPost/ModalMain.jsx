import React, { useEffect, useState } from "react";
import { AudioRecorder, Button, Modal, Select, Textarea } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { user } from "/public/fakeData.js";

import {
  person,
  image,
  microphone,
  videoImg,
  fileImg,
} from "../../assets/images/icons";
import { filters } from "/public/filters";
import SelectedFile from "../ui/selectedfile/selectedFile";
import {
  addUpload,
  finishUpload,
  setPercentage,
} from "../../rtk/slices/progressSlice";
import { refrechPosts } from "../../rtk/slices/authSlice";
import { toast } from "react-toastify";
import axios from "axios";
// import { getDataCategory } from "../posts/getDataPost";
import SelectCategory from "../ui/SelectCategory/SelectCategory";

function ModalMain({
  isMainOpen,
  setIsMainOpen,
  post,
  selectedField,
  setSelectedField,
  setHasCategory,
}) {
  const [formData, setFormData] = useState({});
  console.log(selectedField, "post");
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  let api = post ? `update_post/${post.id}` : `create_post`;
  const [text, setText] = useState(post?.text);
  const [photo, setPhoto] = useState([]);
  const [video, setVideo] = useState("");
  const [videoEdit, setVideoEdit] = useState(post?.video);
  const [imageEdit, setImageEdit] = useState(post?.image);
  const [recordEdit, setrecordEdit] = useState(post?.audio);
  const [file, setFile] = useState("");
  const [record, setRecord] = useState("");
  const [categor_id, setcategor_id] = useState(post?.category_id);
  const [privacy, setPrivacy] = useState(post?.privacy || "public");
  const [url, setUrl] = useState();
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [selectedValue, setSelectedValue] = useState({});
  // useEffect(() => {
  //   setSelectedField("");
  // }, [selectedField]);
  const handleFieldSelection = (fieldName) => {
    setSelectedField(fieldName);
    setIsMainOpen(true);
  };
  const data = new FormData();
  //upload text and photo and audio

  const handleClick = async (e) => {
    data.append("privacy", privacy);
    data.append("category_id", categor_id);
    if (selectedField == "image") {
      if (photo.length > 0) {
        // create
        data.append("classification_id", 3);
        for (let i = 0; i < photo.length; i++) {
          data.append("image[]", photo[i]);
        }
      } else if (imageEdit?.length > 0) {
        //edit
        data.append("classification_id", 3);
        for (let i = 0; i < imageEdit.length; i++) {
          data.append("image[]", imageEdit[i]);
        }
      }
    } else if (selectedField == "file") {
      if (file.length > 0) {
        // create
        data.append("classification_id", 5);
        for (let i = 0; i < file.length; i++) {
          data.append("file[]", file[i]);
        }
      } else if (imageEdit?.length > 0) {
        //edit
        data.append("classification_id", 3);
        for (let i = 0; i < imageEdit.length; i++) {
          data.append("image[]", imageEdit[i]);
        }
      }
    } else if (selectedField == "record") {
      console.log(record, "record");
      if (record) {
        data.append("audio", record);
        data.append("classification_id", 4);
      } else if (recordEdit) {
        data.append("audio", record);
        data.append("classification_id", 4);
      } else if (url) {
        console.log(url, "url");
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            console.log(blob);
            data.append("audio", blob, "audio.wav");
          })
          .catch((error) => {
            console.error("Error fetching audio file:", error);
          });
        data.append("classification_id", 4);
      }
    } else {
      if (text) {
        data.append("classification_id", 1);
        data.append("text", text);
      }
    }
    console.log(text, categor_id, "asdhjkashdjkhaksjdhuit");

    const fileId = Date.now();
    dispatch(addUpload({ fileId }));
    try {
      const res = await axios.post(
        `${URL}/api/post/${api}`,
        data,

        {
          headers: {
            Accept: "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            dispatch(setPercentage({ fileId, progress }));
          },
        }
      );
      console.log(res, "res");

      if (res.data) {
        console.log(res.data);
        dispatch(refrechPosts(res.data.post));
        dispatch(finishUpload({ fileId }));
        toast.success("تم نشر المنشور");
        setPhoto("");
        setVideo("");
        setUrl("");
        setRecord("");
        setText("");
        setIsMainOpen(false);
      }
    } catch (err) {
      console.log(err);
      dispatch(finishUpload({ fileId }));
      toast.error(t("A network error occurred"));
      setPhoto("");
      setVideo("");
      setRecord("");
      // setUrl("");
      setcategor_id("");
      setText("");
      setIsMainOpen(false);
    }
  };

  //video

  const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB
  let uploadedChunks = 0;
  const [progress, setProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);

  // const handleProgress =
  const totalChunks = Math.ceil(video?.size / CHUNK_SIZE);
  const generateRandomFileName = (length) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomFileName = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomFileName += charset.charAt(randomIndex);
    }
    return randomFileName;
  };
  const [randomFileName, setRandomFileName] = useState(
    generateRandomFileName(10)
  ); // Change the length as needed

  const handleGenerateRandomFileName = () => {
    const newRandomFileName = generateRandomFileName(10); // Change the length as needed
    setRandomFileName(newRandomFileName);
  };
  const handleClickVideo = async () => {
    console.log(video);
    await handleGenerateRandomFileName();
    const start = uploadedChunks * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, video.size);
    console.log(start);
    console.log(end);
    // const blob = video.slice(start, end);
    const blob = video.slice(start, end, "video/mp4");
    console.log(video.slice(start, end));
    if (video) {
      const formData = new FormData();
      console.log(blob);
      formData.append("video", blob);
      // formData.append("privacy", "public");
      formData.append("category_id", categor_id);
      // formData.append("classification_id", 2);
      formData.append("random_title", randomFileName);
      formData.append("chunkIndex", uploadedChunks);
      formData.append("totalChunks", totalChunks);
      const fileId = Date.now(); // Generate a unique fileId
      dispatch(addUpload({ fileId }));
      axios
        .post(`${URL}/api/post/post-create-video`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((uploadedChunks / totalChunks) * 100);
            setProgress(progress);

            if (progress === 100) {
              setUploadComplete(true);
            }
            dispatch(setPercentage({ fileId, progress }));
          },
        })
        .then(function (response) {
          console.log(response, "r1");
          if (response?.data?.data.path) {
            dispatch(finishUpload({ fileId }));
            if (uploadedChunks < totalChunks) {
              handleClickVideo();
            } else {
              setUploadComplete(true);
              console.log(response, "r");
              data.append("video", response?.data?.data?.path);
              // formData2.append("privacy", privacy);
              data.append("classification_id", 2);
              data.append("category_id", categor_id);
              if (text) {
                data.append("text", text);
              }
              data.append("privacy", privacy);
              // if (text) {
              //   formData2.append("text", text);
              // }
              axios
                .post(`${URL}/api/post/${api}`, data, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then(function (response) {
                  console.log(response);
                  dispatch(refrechPosts(response.data.post));

                  setRecord("");
                  setUrl("");
                  setText("");
                  setVideo("");
                  setIsMainOpen(false);

                  setPhoto("");
                })
                .catch(function (error) {
                  console.log("Upload error:", error);
                });
            }
          } else {
            console.log("Upload failed:", response);
            setRecord("");
            setUrl("");
            setText("");
            setVideo("");
            setIsMainOpen(false);

            setPhoto("");
          }
          uploadedChunks++;
        })
        .catch(function (error) {
          console.log("Upload error:", error);
          setRecord("");
          setUrl("");
          setIsMainOpen(false);

          setText("");
          setVideo("");
          setPhoto("");
        });
    }
  };

  const buttons = [
    { name: "image", icon: image },
    { name: "record", icon: microphone },
    { name: "video", icon: videoImg },
    { name: "file", icon: fileImg },
  ];
  function closeMainModal() {
    setIsMainOpen(false);
    // setText("");
    // setPrivacy("");
    // setSelectedValue("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text, privacy, selectedValue);
  };
  const handleSelectChange = (value) => {
    setSelectedValue(value);
    setFormData((prevData) => ({ ...prevData, selectValue: value }));
  };
  return (
    <Modal
      isOpen={isMainOpen}
      closeModal={closeMainModal}
      title={"Create Post"}
      children={
        <form onSubmit={handleSubmit}>
          <SelectCategory
            className="w-full rounded-lg capitalize"
            // selectLabels={items}
            selectName="category"
            preSelect={post?.category ? post?.category : "Select Category"}
            handleSelectChange={(value) => {
              console.log(value, "va");
              setcategor_id(value);
            }}
            // preSelect={true}
          />
          <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center">
            <div className="flex w-full">
              <img
                className="w-12 h-12 rounded-full my-2"
                src={user.user_img ? user.user_img : person}
                alt=""
              />

              <Textarea
                height="h-[50dvh] sm:h-20"
                bg="bg-white"
                width="w-full sm:w-96"
                value={text}
                placeholder={"What's on your mind?"}
                handleChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className=" ms-auto">
              <Select
                bg={"bg-white"}
                className="h-11 sm:w-44 gap-2 w-fit rounded-full border-2 border-[#0099AB] text-[#0099AB]"
                selectLabels={["public", "private"]}
                preSelect={privacy ? privacy : true}
                handleSelectChange={(value) => setPrivacy(value)}
              />
            </div>
          </div>

          {selectedField === "record" && (
            <AudioRecorder
              setRecord={setRecord}
              record={record}
              setPhoto={setPhoto}
              photo={photo}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              setVideo={setVideo}
              video={video}
              imageEdit={imageEdit}
              setImageEdit={setImageEdit}
              setVideoEdit={setVideoEdit}
              videoEdit={videoEdit}
              recordEdit={recordEdit}
              setrecordEdit={setrecordEdit}
              setUrl={setUrl}
              url={url}
            />
          )}

          {selectedField === "file" && (
            <SelectedFile
              setPhoto={setPhoto}
              photo={photo}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              setVideo={setVideo}
              video={video}
              imageEdit={imageEdit}
              setImageEdit={setImageEdit}
              setVideoEdit={setVideoEdit}
              videoEdit={videoEdit}
              setFile={setFile}
              file={file}
              setrecordEdit={setrecordEdit}
              recordEdit={recordEdit}
            />
          )}

          {(selectedField === "image" || imageEdit) && (
            <SelectedFile
              setPhoto={setPhoto}
              photo={photo}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              setVideo={setVideo}
              video={video}
              imageEdit={imageEdit}
              setImageEdit={setImageEdit}
              setVideoEdit={setVideoEdit}
              videoEdit={videoEdit}
              setrecordEdit={setrecordEdit}
              recordEdit={recordEdit}
            />
          )}

          {(selectedField === "video" || videoEdit) && (
            <SelectedFile
              setPhoto={setPhoto}
              photo={photo}
              setVideo={setVideo}
              setRecord={setRecord}
              record={record}
              video={video}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              setVideoEdit={setVideoEdit}
              videoEdit={videoEdit}
              imageEdit={imageEdit}
              setrecordEdit={setrecordEdit}
              recordEdit={recordEdit}
              setImageEdit={setImageEdit}
            />
          )}

          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center py-2">
            <ul className="flex gap-5 sm:ps-12">
              {buttons.map((button, i) => (
                <li className="pt-2" key={i}>
                  <a
                    id={button.name}
                    onClick={() => {
                      handleFieldSelection(button.name);
                    }}
                  >
                    <img className="w-5" src={button.icon} alt="" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              {" "}
              <Button
                className={"w-fit rounded-full h-fit "}
                children={"Other"}
                isReverse={true}
                onClick={() => {
                  setHasCategory(true);
                  closeMainModal();
                }}
              />
              <Button
                className={"w-fit rounded-full h-fit"}
                children={"Post"}
                onClick={() => {
                  selectedField == "video" ? handleClickVideo() : handleClick();
                }}
              />
            </div>
          </div>
        </form>
      }
    />
  );
}

export default ModalMain;
