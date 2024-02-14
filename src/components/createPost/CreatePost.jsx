import {
  AudioRecorder,
  Button,
  FiltersBar,
  Form,
  Modal,
  Select,
  Textarea,
} from "../ui/";
import { useEffect, useState } from "react";
import { user } from "/public/fakeData.js";
import {
  person,
  image,
  microphone,
  videoImg,
  fileImg,
} from "../../assets/images/icons";
import { forms, formsWithCategory, categoriesSorted } from "./formsData";
import { filters } from "/public/filters";
import SelectedFile from "../ui/selectedfile/selectedFile";
import { t } from "i18next";
import ModalMain from "./ModalMain";
import ModalSharePosts from "./ModalSharePosts";

export default function CreatePost({}) {
  const buttons = [
    { name: "image", icon: image },
    { name: "record", icon: microphone },
    { name: "video", icon: videoImg },
    { name: "file", icon: fileImg },
  ];
  // console.log(formsWithCategory);
  /////////////// main module ///////////////////
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [selectedField, setSelectedField] = useState(null);

  function closeMainModal() {
    setIsMainOpen(false);
  }

  function openMainModal() {
    setIsMainOpen(true);
  }

  const handleFieldSelection = (fieldName) => {
    setSelectedField(fieldName);
    openMainModal();
  };

  /////////////// main module ///////////////////

  /////////////// category's module ///////////////////
  const [hasCategory, setHasCategory] = useState(false);

  function closeCategoryModal() {
    setHasCategory(false);
  }

  function openCategoryModal() {
    setHasCategory(true);
  }

  function handleSelectCategory(e) {
    // setFormTitle(e);
    setSelectedCategory(e);
    openFormsModal();
    closeCategoryModal();
  }

  /////////////// category's module ///////////////////

  /////////////// forms module ///////////////////
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  // const [formTitle, setFormTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  function openFormsModal() {
    setIsFormsOpen(true);
  }

  /////////////// forms module ///////////////////

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="text-black rounded-2xl px-4 shadow max-w-4xl w-full bg-blue-50">
        <button
          className="flex justify-start items-center w-full pt-2"
          onClick={openMainModal}
        >
          <img
            className="w-12 h-12 rounded-full"
            src={user.user_img ? user.user_img : person}
            alt=""
          />
          {t("what's on your mind?")}
        </button>
        <div className="flex justify-between items-center py-2">
          <ul className="flex gap-5 sm:ps-12">
            {buttons.map((button, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    handleFieldSelection(button.name);
                  }}
                >
                  <img className="w-5" src={button.icon} alt="" />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Button
              className={"w-fit rounded-full h-fit "}
              children={t("Other")}
              isReverse={true}
              onClick={() => {
                openCategoryModal();
                closeMainModal();
              }}
            />
            <Button
              className={"w-fit rounded-full h-fit"}
              children={t("post")}
              onClick={openMainModal}
            />
          </div>
        </div>
      </div>

      <FiltersBar filters={filters} />

      {/* the main modal for the normal posts */}
      <ModalMain
        isMainOpen={isMainOpen}
        setIsMainOpen={setIsMainOpen}
        selectedField={selectedField}
        setSelectedField={setSelectedField}
        setHasCategory={setHasCategory}
      />
      {/* <Modal
        isOpen={isMainOpen}
        closeModal={closeMainModal}
        title={t("Create Post")}
        children={
          <form onSubmit={handleSubmit}>
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
                  placeholder={t("what's on your mind?")}
                />
              </div>
              <div className=" ms-auto">
                <Select
                  bg={"bg-white"}
                  className="h-11 sm:w-44 gap-2 w-fit capitalize rounded-full border-2 border-[#0099AB] text-[#0099AB]"
                  selectLabels={[t("Public"), t("privet")]}
                  preSelect={true}
                />
              </div>
            </div>

            {selectedField === "record" && <AudioRecorder />}

            {selectedField === "file" && <SelectedFile />}

            {selectedField === "image" && <SelectedFile />}

            {selectedField === "video" && <SelectedFile />}

            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center py-2">
              <ul className="flex gap-5 sm:ps-12">
                {buttons.map((button, i) => (
                  <li className="pt-2" key={i}>
                    <button
                      id={button.name}
                      onClick={() => {
                        handleFieldSelection(button.name);
                      }}
                    >
                      <img className="w-5" src={button.icon} alt="" />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <Button
                  className="w-fit rounded-full h-fit"
                  children={t("Other")}
                  isReverse={true}
                  onClick={() => {
                    openCategoryModal();
                    closeMainModal();
                  }}
                />

                <Button
                  className="w-fit rounded-full h-fit"
                  children={t("Post")}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </form>
        }
      /> */}
      {/* the modal for the selecting the category*/}
      <Modal
        isOpen={hasCategory}
        closeModal={closeCategoryModal}
        title={t("add to your post")}
        backFunc={() => {
          openMainModal();
          closeCategoryModal();
        }}
        children={
          <>
            <div className="sm:flex pb-8">
              <div className="grid h-fit w-full gap-6 grid-rows-1 mb-2">
                {formsWithCategory.slice(0, 12).map((form, index) => (
                  <button
                    className="flex gap-3 text-start"
                    onClick={() => {
                      handleSelectCategory(form.name);
                    }}
                    key={index}
                  >
                    <img className="w-7 h-7" src={form.icon} alt="" />
                    {t(form.name)}
                  </button>
                ))}
              </div>
              <div className="grid h-fit w-full gap-6 grid-rows-1">
                {formsWithCategory.slice(12).map((form, index) => (
                  <button
                    className="flex gap-3 text-start"
                    onClick={() => {
                      handleSelectCategory(form.name);
                    }}
                    key={index + 12}
                  >
                    <img className="w-7 h-7" src={form.icon} alt="" />
                    {t(form.name)}
                  </button>
                ))}
              </div>
            </div>
          </>
        }
      />
      {/* the forms modal */}
      <Form
        categoriesSorted={categoriesSorted}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filters={filters}
        setHasCategory={setHasCategory}
        isFormsOpen={isFormsOpen}
        setIsFormsOpen={setIsFormsOpen}
        forms={forms}
      />
    </>
  );
}
