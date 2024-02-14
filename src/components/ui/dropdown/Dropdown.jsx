import { Menu, Transition } from "@headlessui/react";
import { t } from "i18next";
import { Fragment, useEffect, useState } from "react";
import { deletPost } from "../../../rtk/Api/Api";
import { useDispatch, useSelector } from "react-redux";
import ModalMain from "../../createPost/ModalMain";
import Modal from "../modal/Modal";
import CreateReport from "../../PostHeader/CreateReport";
import Form from "../form/Form";
import { filters } from "/public/filters";

import {
  forms,
  formsWithCategory,
  categoriesSorted,
} from "../../createPost/formsData";
export default function Dropdown({
  buttonData = "open",
  labels,
  data,
  post,

  normalMenu = true,
  width = "w-56",
  Children = <></>,
  handleButtons = (label) => {
    console.log(label);
  },
}) {
  const [isArabic, setIsArabic] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [report, setReport] = useState(false);
  const [hasCategory, setHasCategory] = useState(false);
  const [selectedField, setSelectedField] = useState(
    post?.classification_id == 1
      ? "text"
      : post?.classification_id == 2
      ? "video"
      : post?.classification_id == 4
      ? "record"
      : post?.classification_id == 5
      ? "file"
      : post?.classification_id == 3 && "iamge"
  );

  useEffect(() => {
    setIsArabic(localStorage.getItem("i18nextLng") === "ar");
  }, [localStorage.getItem("i18nextLng")]);
  const [isOpenservicw, setIsOpenservicw] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    post?.classification_id == 9
      ? "Add News"
      : post?.classification_id == 12
      ? "Document Check up"
      : post?.classification_id == 22
      ? "Add a Science Experiment"
      : post?.classification_id == 6
      ? "Scientific Research Summary"
      : post?.classification_id == 16
      ? "Request For Volunteers or Trainees"
      : post?.classification_id == 27
      ? "Scholarship Announcement"
      : post?.classification_id == 28
      ? "Project Funding"
      : post?.classification_id == 13
      ? "Announcing Course"
      : post?.classification_id == 6
      ? "Scientific Research Summary"
      : post?.classification_id == 26
      ? "Request for a scientific service"
      : post?.classification_id == 29
      ? "Donations"
      : post?.classification_id == 15
      ? "Code Inquiry"
      : post?.classification_id == 30
      ? "Add Essay"
      : post?.classification_id == 6
      ? "Scientific Research Summary"
      : post?.classification_id == 6
      ? "Scientific Research Summary"
      : post?.classification_id == 21 && "Suggest Cooperation"
  );
  const handleButtonClick = (label) => {
    if (label == "delete") {
      deletPost(token, post.id, dispatch, post);
    } else if (label == "edit") {
      console.log(post?.classification_id);
      if (
        post?.classification_id == 1 ||
        post?.classification_id == 2 ||
        post?.classification_id == 3 ||
        post?.classification_id == 4 ||
        post?.classification_id == 5 ||
        post?.classification_id == 8
      ) {
        setIsOpen(true);
        setIsFormOpen(true);
      } else {
        setIsOpenservicw(true);
      }
    } else if (label == "report") {
      console.log("reoprt");
      setReport(true);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setformType] = useState("service");
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className=" ">
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button as="button">{buttonData}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute z-10 mt-2  origin-top-left right-0 divide-y divide-gray-100 rounded-3xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${width} dropdwon`}
          >
            {normalMenu ? (
              <div className="px-1 py-1 ">
                {labels ? (
                  labels.map((label, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            handleButtonClick(label);
                            handleButtons(label);
                          }}
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center capitalize text-center rounded-md px-3 py-2`}
                        >
                          {t(label)}
                        </button>
                      )}
                    </Menu.Item>
                  ))
                ) : (
                  <>
                    {data &&
                      data.map((button, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <>
                              <button
                                onClick={() => {
                                  handleButtonClick(button.value);
                                  handleButtons(button.value);
                                }}
                                className={`${
                                  active ? " text-red-800" : "text-gray-900"
                                } group flex w-full justify-between items-center capitalize text-center rounded-md px-3 py-2`}
                              >
                                <p>{t(button.name)}</p>
                                <div className="flex w-8 h-8 bg-gray-200 rounded-xl justify-center items-center ">
                                  <img
                                    className="w-4"
                                    src={button.image}
                                    alt=""
                                  />
                                </div>
                              </button>
                              <hr />
                            </>
                          )}
                        </Menu.Item>
                      ))}
                  </>
                )}
              </div>
            ) : (
              <>{Children}</>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
      <ModalMain
        isMainOpen={isOpen}
        closeModal={closeModal}
        setIsMainOpen={setIsOpen}
        setIsFormOpen={setIsFormOpen}
        isFormOpen={isFormOpen}
        post={post}
        setSelectedField={setSelectedField}
        selectedField={selectedField}
      />
      <Modal
        isOpen={report}
        closeModal={() => {
          setReport(false);
        }}
        width="max-w-xl w-full"
      >
        <CreateReport post_id={post?.id} setReport={setReport} />
      </Modal>
      {isOpenservicw && (
        <Form
          categoriesSorted={categoriesSorted}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filters={filters}
          setHasCategory={setHasCategory}
          isFormsOpen={isOpenservicw}
          setIsFormsOpen={setIsOpenservicw}
          forms={forms}
          post={post}
        />
      )}
    </div>
  );
}
