import { useState, Fragment } from "react";
import { Button, Input, Modal, Select, Textarea } from "../";
import { person } from "../../../assets/images/icons";
import { user } from "/public/fakeData.js";
import { t } from "i18next";
import FormSelect from "../../formSelect/FormSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  addUpload,
  finishUpload,
  setPercentage,
} from "../../../rtk/slices/progressSlice";
import { refrechPosts } from "../../../rtk/slices/authSlice";
import { toast } from "react-toastify";
import axios from "axios";

export default function Form({
  categoriesSorted,
  selectedCategory,
  setSelectedCategory,
  forms,
  filters,
  setIsFormsOpen,
  isFormsOpen,
  setHasCategory,
  post,
}) {
  console.log(post);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  function openCategoryModal() {
    setHasCategory(true);
  }
  const { token } = useSelector((state) => state.auth);

  let api = post ? `update/${post.id}` : `create`;

  const [formData, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState({});
  const [classification_id, setclassification_id] = useState({});
  const [privacy, setPrivacy] = useState(post?.privacy || "public");
  const selectedForm = forms.find((form) => form.formName === selectedCategory);
  // console.log(forms, "form");
  const inputs = selectedForm ? selectedForm.formFields : [];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    setFormData((prevData) => ({ ...prevData, selectValue: value }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setclassification_id(category);
    // console.log(category);

    setFormData({});
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // const handleClick = async () => {
  //   console.log(selectedValue);
  // };
  const handleClick = async (e) => {
    const data = { ...selectedValue };
    // console.log(privacy, "privacy", categor_id, "=>cat");
    // data.append("privacy", privacy);
    // data.append("category_id", categor_id);
    const formData = new FormData();

    for (const key in selectedValue) {
      formData.append(key, selectedValue[key]);
    }
    formData.append("privacy", privacy);
    formData.append("file", selectedValue.file);
    formData.append("category_id", 1);
    console.log(selectedCategory);
    if (selectedCategory == "Add News") {
      formData.append("classification_id", 9);
      data.classification_id = 9;
    } else if (selectedCategory == "Suggest Cooperation") {
      formData.append("classification_id", 21);
    } else if (selectedCategory == "Document Check up") {
      formData.append("classification_id", 12);
    } else if (selectedCategory == "Scientific Research Summary") {
      formData.append("classification_id", 6);
    } else if (selectedCategory == "Add a Science Experiment") {
      formData.append("classification_id", 22);
    } else if (selectedCategory == "Request For Volunteers or Trainees") {
      formData.append("classification_id", 16);
    } else if (selectedCategory == "Scholarship Announcement") {
      formData.append("classification_id", 27);
    } else if (selectedCategory == "Project Funding") {
      formData.append("classification_id", 28);
    } else if (selectedCategory == "Announcing Course") {
      formData.append("classification_id", 13);
    } else if (selectedCategory == "Donations") {
      formData.append("classification_id", 29);
    } else if (selectedCategory == "Request for a scientific service") {
      formData.append("classification_id", 26);
    } else if (selectedCategory == "Code Inquiry") {
      formData.append("classification_id", 15);
    } else if (selectedCategory == "Suggest Cooperation") {
      formData.append("classification_id", 21);
    } else if (selectedCategory == "Add Essay") {
      formData.append("classification_id", 30);
    }
    console.log(data);

    const fileId = Date.now();
    dispatch(addUpload({ fileId }));
    try {
      const res = await axios.post(
        `${URL}/api/post/${api}`,
        formData,

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
        setIsFormsOpen(false);
        toast.success("تم نشر المنشور");
      }
    } catch (err) {
      console.log(err);
      dispatch(finishUpload({ fileId }));
      toast.error(t("A network error occurred"));
      setIsFormsOpen(false);
    }
  };
  function closeFormsModal() {
    setIsFormsOpen(false);
  }

  return (
    <>
      {/* the forms modal */}
      <Modal
        isOpen={isFormsOpen}
        closeModal={closeFormsModal}
        backFunc={() => {
          openCategoryModal();
          closeFormsModal();
        }}
        title={t(selectedCategory)}
        children={
          <>
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 my-2"
              id="buttonshare"
            >
              {/* // to change the category */}
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start">
                <div className="flex gap-2 items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user.user_img ? user.user_img : person}
                    alt=""
                  />
                  <p>{user.username}</p>
                </div>
                <Select
                  bg={"bg-white"}
                  className="h-11 sm:w-44 gap-2 w-fit rounded-full border-2 border-[#0099AB] text-[#0099AB]"
                  selectLabels={["public", "private"]}
                  preSelect={privacy ? privacy : true}
                  handleSelectChange={(value) => setPrivacy(value)}
                />
                {/* <Select
                  bg={"bg-white"}
                  className="h-11 w-44 rounded-full border-2 border-[#0099AB] text-[#0099AB]"
                  selectLabels={[t("Public"), t("privet")]}
                  preSelect={true}
                /> */}
              </div>

              {!post && (
                <>
                  {categoriesSorted && (
                    <Select
                      className="w-full rounded-lg capitalize"
                      selectLabels={categoriesSorted}
                      selectedValue={selectedCategory}
                      selectName={t("post type")}
                      handleSelectChange={handleCategoryChange}
                      preSelect={true}
                    />
                  )}
                </>
              )}

              <Select
                className="w-full rounded-lg capitalize"
                selectLabels={filters}
                selectName={t("category")}
                handleSelectChange={handleSelectChange}
                preSelect={true}
              />
              <FormSelect
                inputs={inputs}
                //   name={t("Save modifications")}
                setFormValues={setSelectedValue}
                post={
                  post?.post_news ||
                  post?.post_suggest ||
                  post?.post_document ||
                  post?.post_research ||
                  post?.post_expirment ||
                  post?.post_trainer ||
                  post?.post_scholarship ||
                  post?.post_project ||
                  post?.post_course ||
                  post?.post_service ||
                  post?.post_donation ||
                  post?.post_code ||
                  post?.post_essay ||
                  post?.post_document
                }
              />

              <div className="flex justify-end">
                <Button
                  className="w-fit"
                  children={t("Post")}
                  onClick={handleClick}
                />
              </div>
            </form>
            {/* <Form
              forms={forms}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categoriesSorted={categoriesSorted}
              filters={filters}
            /> */}
          </>
        }
      />
    </>
  );
}
