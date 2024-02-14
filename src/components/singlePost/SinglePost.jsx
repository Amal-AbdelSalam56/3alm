import { user } from "/public/fakeData";
import {
  close1,
  edit,
  flags,
  person,
  pin,
  storage,
  trash,
} from "../../assets/images/icons";
import { dots } from "../../assets/icons";
import { Gallery, InteractionBar, PostDetails } from "../";
import { useEffect, useRef, useState } from "react";
import { AudioPlayer, Dropdown } from "../ui";
import VideoPlayer from "../ui/videoPlayer/VideoPlayer";
import { useSelector } from "react-redux";
import Files from "../Files/Files";
import PostHeader from "../PostHeader/PostHeader";
import AllPosts from "./AllPosts/AllPosts";
import PostDetailsNews from "../postDetails/PostDetailsNews";
import PostSuggest from "../postDetails/PostSuggest";
import PostDocument from "../postDetails/PostDocument";
import PostTrain from "../postDetails/PostTrain";
import PostExpirment from "../postDetails/PostExpirment";
import PostScholarship from "../postDetails/PostScholarship";
import PostProject from "../postDetails/PostProject";
import PostCourse from "../postDetails/PostCourse";
import PostResearch from "../postDetails/PostResearch";
import PostService from "../postDetails/PostService";
import PostDonations from "../postDetails/PostDonations";

export default function SinglePost({
  data,
  isFullScreen = false,
  closeModal,
  notPar,
}) {
  const [hasCategory, setHasCategory] = useState(false);

  const dropdownData = [
    { name: "delete post", image: trash },
    { name: "edit post", image: edit },
    { name: "pin to your profile", image: pin },
    { name: "archive post", image: storage },
    { name: "report post", image: flags },
  ];

  useEffect(() => {
    setHasCategory(data.post_category);
  }, [data]);

  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold as needed
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  const handlePlayPause = () => {
    if (playingVideo && playingVideo !== videoRef.current) {
      playingVideo.pause();
    }

    if (isVisible) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlayingVideo(videoRef.current);
      } else {
        videoRef.current.pause();
        setPlayingVideo(null);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (playingVideo) {
        playingVideo.pause();
        setPlayingVideo(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [playingVideo]);

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user } = useSelector((state) => state.auth);
  const [textWithLineBreak, setTextWithLineBreak] = useState("");

  useEffect(() => {
    // فصل النص إلى كلمات
    if (data?.text) {
      const words = data?.text?.split(" ");

      // تحقق من طول كل كلمة وتطبيق line-break: anywhere إذا كانت أطول من الطول المحدد
      const formattedText = words.map((word, index) => {
        const isWordTooLong = word.length > 10; // قم بتحديد الطول الذي تريده
        return isWordTooLong ? (
          <span key={index} style={{ lineBreak: "anywhere" }}>
            {word}{" "}
          </span>
        ) : (
          `${word} `
        );
      });

      setTextWithLineBreak(formattedText);
    }
  }, [data?.text]);

  return (
    <div
      className={`bg-blue-50 text-black rounded-2xl px-4 shadow w-full ${
        isFullScreen ? "" : "max-w-4xl"
      }`}
      key={data.post_id}
    >
      {/* post header */}
      <PostHeader data={data} closeModal={closeModal} notPar={notPar} />

      <div className="w-100">
        {data?.post_share && (
          <div className="p-2">
            <div
              className={`bg-blue-50 text-black rounded-2xl px-4 shadow w-full ${
                isFullScreen ? "" : "max-w-4xl"
              }`}
              key={data.post_id}
            >
              {/* post header */}
              <PostHeader data={data} closeModal={closeModal} notPar={notPar} />

              <div className="w-100">
                {data.post_share?.image?.length > 0 && (
                  <Gallery data={data.post_share?.image} target={data} />
                )}
                {data.post_share?.file?.length > 0 && (
                  <Files data={data.post_share?.file} target={data} />
                )}

                {/* <Gallery data={data.post_share?.post_data.post_share?.post_images} hasCategory={hasCategory} /> */}

                {/* handle the details post  */}
                {data?.classification_id != 1 &&
                data?.classification_id != 2 &&
                data?.classification_id != 3 &&
                data?.classification_id != 4 &&
                data?.classification_id != 8 &&
                data?.classification_id != 5 ? (
                  <div
                    className={`gallery with1`}
                    style={{ marginBottom: "-15px" }}
                  >
                    <div className={`image imageNo1`}>
                      <img
                        src={`${URL}/storage/${
                          data?.post_share?.post_news?.file ||
                          data.post_share?.post_news?.file ||
                          data?.post_share?.post_expirment?.file ||
                          data?.post_share?.post_course?.file ||
                          data?.post_share?.post_scholarship?.file ||
                          data?.post_share?.post_project?.file ||
                          data?.post_share?.post_trainer?.file ||
                          data?.post_share?.post_expirment?.file ||
                          data?.post_share?.post_service?.file ||
                          data?.post_share?.post_document?.file ||
                          data?.post_share?.post_research?.file ||
                          data?.post_share?.post_suggest?.file ||
                          data?.post_share?.post_service?.file ||
                          data?.post_share?.post_donation?.file ||
                          data?.post_share?.post_code?.file ||
                          data?.post_share?.post_essay?.file ||
                          data?.post_share?.post_expirment?.file
                        }`}
                        alt=""
                        style={{ maxHeight: "60vh" }}
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {data?.post_share?.post_news ? (
                  <PostDetailsNews
                    data={data.post_share?.post_news}
                    category={data.post_share?.post_category}
                  />
                ) : data?.post_share?.post_document ? (
                  <PostDocument data={data.post_document} />
                ) : data?.post_share?.post_expirment ? (
                  <PostExpirment data={data.post_expirment} />
                ) : data?.post_share?.post_course ? (
                  <PostCourse data={data.post_course} />
                ) : data?.post_share?.post_scholarship ? (
                  <PostScholarship data={data.post_scholarship} />
                ) : data?.post_share?.post_research ? (
                  <PostResearch data={data.post_research} />
                ) : data?.post_share?.post_service ? (
                  <PostService data={data.post_service} />
                ) : data?.post_share?.post_donation ? (
                  <PostDonations data={data.post_donation} />
                ) : data?.post_share?.post_project ? (
                  <PostProject data={data.post_project} />
                ) : data?.post_share?.post_trainer ? (
                  <PostTrain data={data.post_trainer} />
                ) : (
                  data?.post_share?.post_suggest && (
                    <PostSuggest
                      data={data.post_suggest}
                      // category={data.post_category}
                    />
                  )
                )}

                {/* handle the audio post  */}
                {/* {data?.post_data?.post_audio?.length > 0 && (
          <AudioPlayer data={data.post_data?.post_audio} />
        )} */}
                {data?.post_share?.audio && (
                  <AudioPlayer
                    data={`${URL}/storage/${data?.post_share?.audio}`}
                    user={data}
                  />
                )}

                {/* handle the video post  */}
                {data?.post_share?.video && (
                  <VideoPlayer data={data?.post_share?.video} user={user} />
                )}

                {/* {data.post_data?.post_video && (
          <div onClick={handlePlayPause} className="px-4">
            <VideoPlayer
              ref={videoRef}
              data={data.post_data.post_video}
              playing={videoRef.current && !videoRef.current.paused}
              onPlay={() => {}}
              onPause={() => {}}
              // Pass any other necessary props
            />
          </div>
        )} */}

                {/* handle the link post  */}
                {data?.post_data?.post_link && (
                  <p>{data.post_data?.post_link}</p>
                )}

                {/* <InteractionBar data={data} /> */}
              </div>
            </div>
          </div>
        )}
        {data?.post_news && (
          <></>
          // <AllPosts data={data?.post_news} />
          // <div>
          //   <div>{data?.post_news?.file}</div>
          //   <div>{data?.post_news?.news_title}</div>
          // </div>
        )}
        {data.image?.length > 0 && <Gallery data={data.image} target={data} />}
        {data.file?.length > 0 && <Files data={data.file} target={data} />}

        {/* <Gallery data={data.post_data.post_images} hasCategory={hasCategory} /> */}

        {/* handle the details post  */}
        {data?.classification_id != 1 &&
        data?.classification_id != 2 &&
        data?.classification_id != 3 &&
        data?.classification_id != 4 &&
        data?.classification_id != 8 &&
        data?.classification_id != 5 ? (
          <div className={`gallery with1`} style={{ marginBottom: "-15px" }}>
            <div className={`image imageNo1`}>
              <img
                src={`${URL}/storage/${
                  data?.post_news?.file ||
                  data.post_news?.file ||
                  data?.post_expirment?.file ||
                  data?.post_course?.file ||
                  data?.post_scholarship?.file ||
                  data?.post_project?.file ||
                  data?.post_trainer?.file ||
                  data?.post_expirment?.file ||
                  data?.post_service?.file ||
                  data?.post_document?.file ||
                  data?.post_research?.file ||
                  data?.post_suggest?.file ||
                  data?.post_service?.file ||
                  data?.post_donation?.file ||
                  data?.post_code?.file ||
                  data?.post_essay?.file ||
                  data?.post_expirment?.file
                }`}
                alt=""
                style={{ maxHeight: "60vh" }}
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {data?.post_news ? (
          <PostDetailsNews
            data={data.post_news}
            category={data.post_category}
          />
        ) : data?.post_document ? (
          <PostDocument data={data.post_document} />
        ) : data?.post_expirment ? (
          <PostExpirment data={data.post_expirment} />
        ) : data?.post_course ? (
          <PostCourse data={data.post_course} />
        ) : data?.post_scholarship ? (
          <PostScholarship data={data.post_scholarship} />
        ) : data?.post_research ? (
          <PostResearch data={data.post_research} />
        ) : data?.post_service ? (
          <PostService data={data.post_service} />
        ) : data?.post_donation ? (
          <PostDonations data={data.post_donation} />
        ) : data?.post_project ? (
          <PostProject data={data.post_project} />
        ) : data?.post_trainer ? (
          <PostTrain data={data.post_trainer} />
        ) : data?.post_trainer ? (
          <PostTrain data={data.post_trainer} />
        ) : (
          data?.post_suggest && (
            <PostSuggest
              data={data.post_suggest}
              // category={data.post_category}
            />
          )
        )}

        {/* handle the audio post  */}
        {/* {data?.post_data?.post_audio?.length > 0 && (
          <AudioPlayer data={data.post_data?.post_audio} />
        )} */}
        {data?.audio && (
          <AudioPlayer data={`${URL}/storage/${data.audio}`} user={data} />
        )}

        {/* handle the video post  */}
        {data?.video && <VideoPlayer data={data.video} user={user} />}

        {/* {data.post_data?.post_video && (
          <div onClick={handlePlayPause} className="px-4">
            <VideoPlayer
              ref={videoRef}
              data={data.post_data.post_video}
              playing={videoRef.current && !videoRef.current.paused}
              onPlay={() => {}}
              onPause={() => {}}
              // Pass any other necessary props
            />
          </div>
        )} */}

        {/* handle the link post  */}
        {data?.post_data?.post_link && <p>{data.post_data?.post_link}</p>}
        {!notPar && <InteractionBar data={data} />}

        {/* <InteractionBar data={data} /> */}
      </div>
    </div>
  );
}
