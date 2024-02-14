import axios from "axios";
import { useSelector } from "react-redux";
import {
  deletePosts,
  deleteSubcomment,
  deletecomment,
  loginSuccess,
  refrechPosts,
  refrechcomment,
} from "../slices/authSlice";
import { toast } from "react-toastify";
import { deleteServicese } from "../slices/productSlice";
const URL = import.meta.env.VITE_REACT_APP_API_KEY;

export const getUser = async (token, dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/get-user`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    if (res?.data?.data?.id) {
      console.log(res);
      dispatch(loginSuccess(res.data.data));
      console.log(res.data.data);
    }
  } catch (err) {
    console.log(err);
  }
};

export const deletPost = async (token, post_id, dispatch, post) => {
  console.log("first")
  const data = {
    post_id,
  };
  // console.log(data);
  try {
    const res = await axios.post(
      `${URL}/api/post/delete_post`,
      { post_id },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    toast.success("تم حذف المنشور");
    if (post?.price) {
      dispatch(deleteServicese({ post_id }));
    } else {
      dispatch(deletePosts({ post_id }));
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (token, post_id, dispatch, subComment) => {
  try {
    const res = await axios.post(
      `${URL}/api/post/delete_comment`,
      { post_comment_id: post_id },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res);
    toast.success("تم حذف المنشور");
    if (subComment) {
      dispatch(deleteSubcomment({ post_id }));
    } else {
      dispatch(deletecomment({ post_id }));
    }
  } catch (err) {
    console.log(err);
  }
};
