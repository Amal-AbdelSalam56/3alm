/* eslint-disable react/prop-types */
// import { useTranslation } from "react-i18next";


function ChatItem({ msg, user }) {
  // const themeColor = localStorage.getItem("themeColor");
  // const [t, i18n] = useTranslation();
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${user ? user : ""}`}
    >
      <div className={`chat__item__content d-flex gap-3 align-items-center  `}>
        <span>
          {/* {t("ago")} */}
          4:31
          {/* {t("mins")} */}
        </span>
        <div className="chat__msg">{msg}</div>
        {/* <div className="chat__meta">
          <span>Seen 1.03PM</span>
        </div> */}
      </div>
      {/* <Avatar isOnline="active" image={image} /> */}
    </div>
  );
}

export default ChatItem;
