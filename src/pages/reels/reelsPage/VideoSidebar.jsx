import React, { useState } from "react";
import "./VideoSidebar.scss";
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import MessageIcon from '@material-ui/icons/Message'
// import ShareIcon from '@material-ui/icons/Share'
// import Heart from "../../../assets/images/Heart.png";
// import likedIcon from "../../../assets/images/Loved.png";
import { comment, disLike, like, share } from "../../../assets/images/icons";

import Union from "../../../assets/images/share.png";
import Ellipse from "../../../assets/images/Ellipse.png";
import Plus from "../../../assets/images/Plus.png";
import Subtract from "../../../assets/images/Subtract.png";
import CommentModal from "./CommentModal";
import { useSelector } from "react-redux";
import _ from "lodash";
import axios from "axios";
// import ShareModel from "../../../components/shareModel/ShareModel";
// import CommentSection from "../../../components/commentSection/CommentSection";
import { useNavigate } from "react-router-dom";
import CommentSection from "../../../components/ui/CommentSection/commentSection/CommentSection";
import ShareModel from "../../../components/shareModel/ShareModel";
const VideoSidebar = ({ videos, shares, messages, liked, setLiked }) => {
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [likes, setLikes] = useState(videos?.likes);
  const [isLiked, setIsLiked] = useState(videos?.liked);
  const [commentsNumber, setCommentsNumber] = useState(videos?.comments);
  const [isCommentModelOpen, setIsCommentModelOpen] = useState(false);
  const [isShareModelOpen, setIsShareModelOpen] = useState(false);
  // const [comments, setComments] = useState([]);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token } = useSelector((state) => state.auth);
  const [comments, setComments] = useState([
    {
      comment: "How neatly I write the date in the book",
      date: new Date().toLocaleString(),
      likes: 6767,
      replies: [
        {
          comment: "Impressive!",
          date: new Date().toLocaleString(),
          likes: 243,
          src: like,
        },
        {
          comment: "Teach me your ways!",
          date: new Date().toLocaleString(),
          likes: 135,
          src: like,
        },
      ],
      src: like,
    },
    {
      comment: "Now that’s a skill very talented",
      date: new Date().toLocaleString(),
      likes: 5783,
      replies: [
        {
          comment: "Absolutely!",
          date: new Date().toLocaleString(),
          likes: 87,
          src: like,
        },
      ],
      src: like,
    },
  ]);

  const handleOpenCommentModal = () => {
    setCommentModalOpen(true);
  };

  const handleCloseCommentModal = () => {
    setCommentModalOpen(false);
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
    handleCloseCommentModal();
  };

  const likeThePost = async () => {
    try {
      const results = await axios.post(
        `${URL}/api/postLike`,
        { post_id: videos.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results);

      if (results.data.original.data.like !== undefined) {
        // console.log(results.data.original.data.like.Likes.length);
        setLikes(JSON.parse(results.data.original.data.like.Likes).length);
      } else {
        setLikes(0);
      }

      // setIsLiked(!isLiked);
    } catch (error) {
      console.log("like error :" + error);
    }
  };

  const debouncedLikeThePost = _.debounce(likeThePost, 1000); // Adjust the delay as needed

  // useEffect(() => {
  //   getAllLikes();
  //   // likeThePost();
  // }, [isLiked]);

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
  const navigate = useNavigate();

  return (
    <div className="videoSidebar">
      <div
        className="videoSidebar_button position-relative"
        onClick={() => navigate(`/profile/${videos.user.user_name}`)}
      >
        <img
          style={{ borderRadius: "50%", width: "45px", height: "45px" }}
          onClick={() => navigate(`/profile/${videos.user.user_name}`)}
          src={
            videos?.user?.profile.image
              ? `${URL}/storage/${videos?.user?.profile.image}`
              : Ellipse
          }
          alt=""
          className="picture"
        />
        {/* <img src={Plus} alt="" className="plus" /> */}
      </div>

      <div className="videoSidebar_button">
        {isLiked ? (
          <img
            // style={isLiked ? { background: "red" } : { background: "#fff" }}
            onClick={handleLikeButtonClick}
            src={like}
            role="button"
            alt=""
          />
        ) : (
          <img
            // style={isLiked ? { background: "red" } : { background: "#fff" }}
            onClick={handleLikeButtonClick}
            src={isLiked ? disLike : disLike}
            role="button"
            alt=""
          />
        )}

        {/* {liked ? (
          <img
            src={Heart}
            alt=""
            onClick={() => {
              setLiked(!liked);
            }}
          />
        ) : (
          <img
            src={Heart}
            alt=""
            onClick={() => {
              setLiked(!liked);
            }}
          />
        )} */}
        <p>{likes}</p>
      </div>

      <div
        className="videoSidebar_button "
        // onClick={handleOpenCommentModal}
        onClick={() => {
          setComments([]);
          if (isCommentModelOpen === false) {
            openCommentModal();
          } else return;
        }}
      >
        <img src={Subtract} alt="" className="comment" />
        <p>{commentsNumber}</p>
      </div>

      {/* <div className="videoSidebar_button ">
        <img src={Subtract} alt="" className="comment" />
        {/* <MessageIcon fontSize="large" />
        <p>20</p>
      </div> */}
      <div
        className="videoSidebar_button"
        onClick={() => setIsShareModelOpen(true)}
      >
        <img src={Union} alt="" className="share" />
        {/* <p>{30}</p> */}
      </div>
      {isCommentModelOpen && (
        <CommentSection
          reels={true}
          post={videos}
          isCommentModelOpen={isCommentModelOpen}
          closeCommentModal={closeCommentModal}
          setCommentsNumber={setCommentsNumber}
          setComments={setComments}
          comments={comments}
        />
      )}

      <ShareModel
        data={videos}
        isShareOpen={isShareModelOpen}
        setIsShareModelOpen={setIsShareModelOpen}
        closeShareModal={closeShareModal}
      />

      {/* <CommentModal
        open={commentModalOpen}
        handleClose={handleCloseCommentModal}
        comments={comments}
        addComment={handleAddComment}
      /> */}
    </div>
  );
};

export default VideoSidebar;
