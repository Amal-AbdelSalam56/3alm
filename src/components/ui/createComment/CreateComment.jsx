import { t } from "i18next";
import { image, close } from "../../../assets/images/icons";
// import icon from "../../../assets/images/icons/categories/";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { person } from "../../../assets/images/icons";
import Frame1 from "../../../assets/images/Frame1.png";
import Frame2 from "../../../assets/images/Frame2.png";
import Frame3 from "../../../assets/images/Frame3.png";
import { useEffect, useRef, useState } from "react";
import { refrechcomment } from "../../../rtk/slices/authSlice";
import Emoji from "../../../assets/images/Emoji.png";
import Picker from "emoji-picker-react";
import Textarea from "../textarea/Textarea";
import Button from "../button/Button";

export default function CreateComment({
  isReplying,
  post,
  ref,
  // getAllComments = () => {},
  parent_comment_id,
}) {
  const [comment, setComment] = useState("");
  const [imageComment, setImageComment] = useState("");
  const [audioComment, setAudioComment] = useState("");

  const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const typeComment = async () => {
    console.log("onclik");
    const data = {
      post_id: post.id,
      comment: comment,
      comment_image: imageComment,
      // comment_audio: audioComment,
    };
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    try {
      const results = await axios.post(
        `${URL_API}/api/post/create_comment`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "multipart/form-data",
          },
        }
      );
      console.log(results, "results");
      setComment("");
      setImageComment("");
      dispatch(refrechcomment(results.data.comment));
    } catch (error) {
      console.log("Create comments error :" + error);
    }
  };

  const typeSubComment = async () => {
    const data = {
      post_id: post.id,
      parent_comment_id: parent_comment_id,
      comment: comment,
      comment_image: imageComment,
      comment_audio: audioComment,
    };
    console.log(data);

    try {
      const results = await axios.post(
        `${URL_API}/api/post/show_sub_comment`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results);
    } catch (error) {
      console.log("Create comments error :" + error);
    }
  };

  useEffect(() => {
    // getAllComments();
  }, []);
  const menuRef = useRef();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef?.current?.contains(e.target)) {
        // inside click

        return;
      } else {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuRef]);

  const addEmoji = (emojiObject) => {
    console.log(emojiObject);
    let sym = emojiObject.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setComment(comment + emoji);
    // setShowEmojiPicker(false);
  };

  return (
    <>
      <div className="gap-3 ">
        {imageComment && (
          <div className="w-100">
            <button
              onClick={() => setImageComment("")}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
              }}
            >
              <img src={close} alt="" />
            </button>
            <img
              className="p-1"
              src={URL.createObjectURL(imageComment)}
              style={{ width: "80px", height: "80px", marginBottom: "50px" }}
            />
          </div>
        )}
        <form
          // className="flex w-full  bottom-0 justify-center items-center gap-3 bg-slate-200 py-2 px-3 rounded-full"
          className="flex w-full "
          onSubmit={(e) => {
            e.preventDefault();
            !isReplying ? typeComment() : typeSubComment();
          }}
        >
          {/* <img className="w-7" src={user.image ? user.image : person} alt="" /> */}
          <div className="w-full border-2">
            <textarea
              className={`resize-none  p-3  outline-none w-full -full outline-none bg-slate-200 placeholder-gray-400 m-0`}
              height="h-14"
              placeholder={t("write a comment")}
              // className="w-full outline-none bg-slate-200 placeholder-gray-400"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  typeComment();
                }
              }}
            />
            {/* <div className="flex justify-between border-t-2 pt-5 pb-2 px-4 flex justify-between border-t-2 pt-5 pb-2 px-4 bg-[#F5F6F7]">
              <div className="flex justify-between" style={{ width: "100px" }}>
                <button>
                  <img src={Frame1} alt="" />{" "}
                </button>
                <button>
                  <img src={Frame2} alt="" />{" "}
                </button>
                <button>
                  <img src={Frame3} alt="" />{" "}
                </button>
              </div>
              <Button
                className="rounded"
                style={{
                  backgroundColor: "#0099AB",
                  color: "#fff",
                  padding: "20px",
                }}
                children={"Comment"}
              />
            </div> */}
            <div className="flex justify-between border-t-2 py-2 pb-2 px-4 flex justify-between align-items-center border-t-2 pb-2 px-4 bg-[#F5F6F7]">
              <div className="flex justify-between" style={{ width: "50px" }}>
                {/* <button className="h-fit">
                  <img
                    src={Frame1}
                    alt=""
                    style={{ height: "20px", margin: "0 15px" }}
                    role="button"
                  />
                </button> */}
                <label className="h-fit" htmlFor="image">
                  <img
                    src={image}
                    alt=""
                    style={{ height: "20px" }}
                    role="button"
                  />
                  <input
                    accept=".png,.jpg"
                    type="file"
                    name=""
                    id="image"
                    hidden
                    onChange={(e) => setImageComment(e.target.files[0])}
                  />
                </label>
                <img
                  src={Emoji}
                  alt="Heart Icon"
                  width={20}
                  height={20}
                  style={{
                    marginRight: "8px",
                    cursor: "pointer",
                    height: "20px",
                  }}
                  onClick={() => setShowEmojiPicker((val) => !val)}
                />
              </div>
              <button
                className="rounded"
                style={{
                  backgroundColor: "#0099AB",
                  color: "#fff",
                  padding: "10px",
                }}
                children={"Comment"}
              />
              {/* show Emoji */}
            </div>
          </div>
          {/* <button className="h-fit">
          <img src={Voi} alt="" style={{ height: "20px" }} role="button" />
        </button> */}
          {showEmojiPicker && (
            <div ref={menuRef}>
              <Picker
                onEmojiClick={addEmoji}
                style={{
                  height: "398px",
                  width: "80%",
                  position: "absolute",
                  bottom: "44px",
                  left: "55px",
                }}
              />
            </div>
          )}

          {/* <button className="h-fit">
          <img src={icon} alt="" role="button" />
        </button> */}
        </form>
      </div>
    </>
  );
}
