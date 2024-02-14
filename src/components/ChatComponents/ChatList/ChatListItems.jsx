/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
// import { useTranslation } from "react-i18next";

function ChatListItems({ setChatActive, name, image, active, isOnline }) {
  const selectChat = (e) => {
    setChatActive(true);
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };
  // const [t, i18n] = useTranslation();

  return (
    <div
      style={{ animationDelay: `0.${selectChat}s` }}
      onClick={selectChat}
      className={`chatlist__item d-flex align-items-center justify-content-between  ${active ? active : ""
        } `}
    >
      <div className="d-flex ">
        <Avatar
          image={image ? image : "http://placehold.it/80x80"}
          isOnline={isOnline}
        />
        <div className="userMeta">
          <p>{name}</p>
          <span>Front end Devoleper </span>
        </div>
      </div>
      <div className="align-items-center justify-content-between">

        <span className="activeTime font-xsss">
          {/* {t("ago")} 32 {t("mins")} */}
          8:34
        </span>
        <span className="badge msnumber">4</span>

      </div>
    </div>
  );
}

export default ChatListItems;
