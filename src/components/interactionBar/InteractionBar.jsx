import { useState } from "react";
import { comment, disLike, like, share } from "../../assets/images/icons";
import { CommentModal, ShareModal } from "../";
import { useSelector } from "react-redux";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import axios from "axios";
import CommentSection from "../ui/CommentSection/commentSection/CommentSection";
import ShareModel from "../shareModel/ShareModel";

export default function InteractionBar({ data }) {
  const [likes, setLikes] = useState(data.likes);
  const [isLiked, setIsLiked] = useState(data?.liked);
  const [commentsNumber, setCommentsNumber] = useState(data?.comments);
  const [isCommentModelOpen, setIsCommentModelOpen] = useState(false);
  const [isShareModelOpen, setIsShareModelOpen] = useState(false);
  const [comments, setComments] = useState([]);

  function closeCommentModal() {
    setIsCommentModelOpen(false);
  }

  function openCommentModal() {
    setIsCommentModelOpen(true);
  }

  function closeShareModal() {
    setIsShareModelOpen(false);
  }

  function openShareModal() {
    setIsShareModelOpen(true);
  }

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token } = useSelector((state) => state.auth);

  const likeThePost = async () => {
    try {
      const results = await axios.post(
        `${URL}/api/postLike`,
        { post_id: data.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results);

      if (results.data.data.like !== undefined) {
        // console.log(results.data.original.data.like.Likes.length);
        setLikes(JSON.parse(results.data.data.like.Likes).length);
      } else {
        setLikes(0);
      }

      // setIsLiked(!isLiked);
    } catch (error) {
      console.log("like error :" + error);
    }
  };

  const debouncedLikeThePost = _.debounce(likeThePost, 1000); // Adjust the delay as needed

  const handleLikeButtonClick = () => {
    setTimeout(() => {
      if (isLiked) {
        setLikes((prev) => prev - 1);
      } else {
        setLikes((prev) => prev + 1);
      }
      setIsLiked(!isLiked);
    }, 200);
    debouncedLikeThePost();
  };

  const [isOpen, setIsOpen] = useState(false);
  const direction = localStorage.getItem("direction");
  const { t } = useTranslation();
  const likesArray = Array.from({ length: likes }, (_, index) => index);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showWhoMakeLike = () => {
    openModal();
  };

  return (
    <ul className="flex justify-between py-4 sm:px-16 px-8">
      <li>
        <button className="flex gap-2" onClick={openCommentModal}>
          <img src={comment} alt="" />
          {commentsNumber > 0 &&
            (commentsNumber > 99 ? "+99" : commentsNumber)}{" "}
        </button>

        {/* <CommentModal
          isOpen={isCommentOpen}
          closeModal={closeCommentModal}
          data={data}
        /> */}
      </li>

      <li>
        <button
          className={`flex gap-2 ${isLiked && "text-red-500"}`}
          onClick={() => {
            if (isLiked) {
              setIsLiked(false);
              // setAllLikes(allLikes - 1);
            } else if (!isLiked) {
              setIsLiked(true);
              // setAllLikes(allLikes + 1);
            }
          }}
        >
          <img
            src={isLiked ? like : disLike}
            alt=""
            onClick={handleLikeButtonClick}
          />
          {likes > 0 && (likes > 99 ? "+99" : likes)}
          {/* <span
            className={`absolute top-2 text-xs left-1.5 translate-x-3 border-4 border-white rounded-full bg-violet-700 text-white ${
              likes > 9 ? "px-2" : "px-1"
            }`}
            onClick={() => setIsOpen(true)}
          ></span> */}
        </button>
      </li>

      <li>
        <button className="flex gap-2" onClick={openShareModal}>
          <img src={share} alt="" />

          {/* {data.post_shares.length} */}
        </button>
        {isCommentModelOpen && (
          <CommentSection
            post={data}
            isCommentModelOpen={isCommentModelOpen}
            closeCommentModal={closeCommentModal}
            setCommentsNumber={setCommentsNumber}
            setComments={setComments}
            comments={comments}
          />
        )}

        <ShareModel
          data={data}
          isShareOpen={isShareModelOpen}
          setIsShareModelOpen={setIsShareModelOpen}
          closeShareModal={closeShareModal}
        />

        {/* <ShareModal isOpen={isShareOpen} closeModal={closeShareModal} /> */}
      </li>
    </ul>
  );
}
