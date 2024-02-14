import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import CoverUser from "./components/CoverUser";
import { AiOutlineEdit } from "react-icons/ai";
import "./Portfolio.scss";
import play from "../../assets/images/bigplay.png";
import full from "../../assets/images/full.png";
import volumeup from "../../assets/images/volumeup.png";
import setting from "../../assets/images/setting.png";
import { cvImg } from "../../assets/icons";
import { FaPause, FaExpand, FaVolumeMute } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import VideoPlayer from "../../components/ui/videoPlayer/VideoPlayer";
import { Aside, ComplementaryAside, Navbar } from "../../components";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import { useSelector } from "react-redux";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import UploadSkilles from "./components/UploadSkilles/UploadSkilles";
import { getDataProfile } from "../../components/posts/getDataPost";
import UploadCv from "./components/UploadCv/UploadCv";
import UploadRecearch from "./components/UploadRecearch/UploadRecearch";
import UploadAwards from "./components/UploadAwards/UploadAwards";
import UploadExperinse from "./components/UploadExperinse/UploadExperinse";
import PostsProfile from "../../components/posts/PostsProfile";

function Portfolio() {
  const [t] = useTranslation();
  const navigate = useNavigate();

  const IntroductoryVideoComponent = () => {
    // Render the introductory video component
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);

    const handleFullScreen = () => {
      if (!isFullScreen) {
        videoContainerRef.current.requestFullscreen();
        setIsFullScreen(true);
      } else {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    };
    const handleVolumeChange = (event) => {
      setVolume(event.target.value);
      videoRef.current.volume = event.target.value;
    };
    const handlePlayPause = () => {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    };
    const src =
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    return (
      <>
        <div className="singlePost__body--video ">
          <div className="video-player" ref={videoContainerRef}>
            <VideoPlayer
              ref={videoRef}
              data={src}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>
        </div>
      </>
    );
  };

  const GeneralInformationComponent = () => {
    // Render the general information component
    return (
      <div style={{ color: "#303030" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ornare
        odio. Curabitur vitae velit ultricies, lobortis tellus quis, tempus
        ante.
      </div>
    );
  };

  const PostsComponent = () => {
    // Render the posts component
    return (
      <div style={{ color: "#303030" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ornare
          odio. Curabitur vitae velit ultricies, lobortis tellus quis, tempus
          ante.
        </p>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/Posts");
          }}
        >
          <span> &rarr; </span>
          {t("Show all")} {t("Posts")}
        </div>
      </div>
    );
  };

  const SkillsComponent = () => {
    // Render the skills component
    return (
      <div style={{ color: "#303030" }}>
        <ul>
          {[...Array(3)].map((_, index) => (
            <>
              <li className="my-3" key={index}>
                Lorem ipsum dolor sit
              </li>
              <hr />
            </>
          ))}
        </ul>
        <div
          className="Skills"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/skillesInfo");
            localStorage.setItem("currentPage", "Skilles");
          }}
        >
          <span> &rarr; </span>
          {t("Show all")} {t("Skills")}
        </div>
      </div>
    );
  };

  const ResearchesComponent = () => {
    // Render the researches component
    return (
      <div>
        ResearchesComponent
        <div
          className="Skills"
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.setItem("currentPage", "Researches");
            localStorage.setItem("back", true);
            navigate("/researches");
          }}
        >
          <span> &rarr; </span>
          {t("Show all")} {t("Researches")}
        </div>
      </div>
    );
  };

  const AwardsComponent = () => {
    // Render the awards component
    return <div>AwardsComponent</div>;
  };

  const MoreInformationComponent = () => {
    // Render the more information component
    return <div>MoreInformationComponent</div>;
  };

  const sections = {
    resume: "C.V",
    introductoryVideo: "Introductory Video",
    generalInformation: "General information",
    posts: "Posts",
    skills: "Skills",
    researches: "Researches",
    awards: "Awards",
    moreInformation: "More Information",
  };

  const renderSections = (sections) => {
    return Object.entries(sections).map(([sectionKey, sectionLabel]) => {
      // const isEditable = params == user?.user_id;

      return (
        <div className={sectionKey} key={sectionKey}>
          <p className="d-flex justify-content-xxl-between">
            {t(sectionLabel)}
            <AiOutlineEdit
              style={{ color: "#7CC9D1" }}
              className="font-xxl"
              onClick={() => {
                localStorage.setItem("currentPage", "CV");
                navigate("/userCV");
              }}
            />{" "}
          </p>
          {renderSectionComponent(sectionLabel)}
        </div>
      );
    });
  };

  const renderSectionComponent = (sectionLabel) => {
    switch (sectionLabel) {
      case "General information":
        return <GeneralInformationComponent />;
      case "Posts":
        return <PostsComponent />;
      case "Skills":
        return <SkillsComponent />;
      case "Researches":
        return <ResearchesComponent />;
      case "Awards":
        return <AwardsComponent />;
      case "More Information":
        return <MoreInformationComponent />;
      default:
        return null;
    }
  };
  const { token, deletePost_id, update, user } = useSelector(
    (state) => state.auth
  );
  const page = window.location.pathname.split("/")[2];
  console.log(page);
  const params = useParams().id;

  const [change, setChange] = useState(true);
  const { items } = getDataProfile(
    token,

    `profile/${params}`,
    change,
    params
  );

  const [mainMenu, setMainMenu] = useState();

  const direction = localStorage.getItem("direction");
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  let [isOpen2, setIsOpen2] = useState(false);

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    console.log(user.user_name, params);
    if (user.user_name == params) {
      setIsOpen2(true);
    }
  }
  console.log(items, "items");
  return (
    <>
      <div className="max-w-[1920px] m-auto">
        <Navbar />
        <section className="flex justify-between gap-2 lg:mx-4 p-1">
          <div className="hidden xl:block">
            <Aside />
          </div>
          <main className="w-full">
            <div className="portfolio max-w-4xl m-auto">
              <div className="">
                <ProfileHeader
                  openModal={openModal}
                  setMainMenu={setMainMenu}
                />
                {/* <CoverUser /> */}
              </div>
              {page == "posts" ? (
                <PostsProfile></PostsProfile>
              ) : (
                <>
                  {" "}
                  <UploadCv
                    setChange={setChange}
                    change={change}
                    items={items}
                  />
                  <UploadVideo
                    setChange={setChange}
                    change={change}
                    items={items}
                  />
                  <UploadSkilles
                    setChange={setChange}
                    change={change}
                    items={items}
                  />
                  <UploadRecearch
                    setChange={setChange}
                    change={change}
                    items={items}
                  />
                  <UploadAwards
                    setChange={setChange}
                    change={change}
                    items={items}
                  />
                  <UploadExperinse
                    setChange={setChange}
                    change={change}
                    items={items}
                  />
                </>
              )}

              <div className="resume">
                <p className="d-flex justify-content-xxl-between my-4">
                  {t("Posts")}
                </p>
                <div style={{ color: "#303030" }}>
                  <div
                    className="Skills"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/profile/posts/${items?.user_name}`);
                      localStorage.setItem("currentPage", "Profile");
                    }}
                  >
                    <span> &rarr; </span>
                    {t("Show all")} {t("Posts")}
                  </div>
                </div>{" "}
              </div>

              {/* <>{renderSections(sections)}</> */}
            </div>
          </main>
          <div className="hidden 2xl:block">
            <ComplementaryAside />
          </div>
        </section>
      </div>

      <style>
        {`
                
                 @media (max-width: 900px) {
                  .portfolio .introductoryVideo > div {
                  padding-inline: 0rem!important;
                  margin-block: 0rem!important;
                    } 
                 }
                 @media (max-width: 500px) {
                  .profile-pic {
                    top: -66px !important;
                    max-width: 100px !important;
                    } 
                    .profile-pic2 {
                      left: 102px;
                      max-width: 27px;

                    }
                 }

                  `}
      </style>
    </>
  );
}

export default Portfolio;
