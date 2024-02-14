/* eslint-disable react/prop-types */
import "./FriendsPage.scss";
import Friends from "./Friends/Friends";
import FriendRequest from "./FriendRequest/FriendRequest";
import Suggestions from "./Suggestions/Suggestions";
import Pageheader from "./components/pageheader";
import { FaUserFriends } from "react-icons/fa";
import Followers from "./Followers/Followers";

function FriendsPage({ activeTypeFriend, setActiveTypeFriend }) {
  const pageHeaders = [
    { activeType: "friend-request", title: "Requests" },
    { activeType: "Followers", title: "Followers" },
    { activeType: "Following", title: "Following" },
    { activeType: "all-friends", title: "all" },
  ];

  return (
    <div className="frinds-page max-w-4xl m-auto">
      <div className="typeArticleAndSearches row  mx-3 mb-4">
        {/* <Pageheader
          setActiveTypeFriend={setActiveTypeFriend}
          activeType="friends"
          activeTypeFriend={activeTypeFriend}
          icon={<FaUserFriends className="font-xl" style={{ marginRight: "10px" }} />}
        /> */}

        {pageHeaders.map((header, index) => (
          <Pageheader
            key={index}
            setActiveTypeFriend={setActiveTypeFriend}
            activeType={header.activeType}
            activeTypeFriend={activeTypeFriend}
            title={header.title}
          />
        ))}
      </div>

      {activeTypeFriend === "Following" ? (
        <Friends />
      ) : activeTypeFriend === "Followers" ? (
        <Followers />
      ) : activeTypeFriend === "suggestions" ? (
        <Suggestions />
      ) : (
        activeTypeFriend === "request" && (<FriendRequest />)
      )}
    </div>
  );
}

export default FriendsPage;
