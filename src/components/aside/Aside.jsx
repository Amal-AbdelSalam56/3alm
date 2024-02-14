import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  articles,
  chat,
  contentRequest,
  friends,
  home,
  job,
  news,
  profile,
  reals,
  search1,
  settings,
  summaries,
  videos,
} from "../../assets/images/icons";
import { t } from "i18next";

export default function Aside({ isOpen, close = () => {} }) {
  // the menu data is fixed don't miss with it
  const navigate = useNavigate();
  const [activeLabel, setActiveLabel] = useState("home");
  const menuData = [
    {
      header: "Personal Information",
      items: [
        { label: t("home"), icon: home, path: "/" },
        { label: t("search"), icon: search1, path: "/search" },
        { label: t("videos"), icon: videos, path: "/videos" },
        { label: t("reals"), icon: reals, path: "/reals" },
        { label: t("friends"), icon: friends, path: "/friends" },
        { label: t("profile"), icon: profile, path: "/profile" },
      ],
    },
    {
      header: "Searches And Articles",
      items: [
        {
          label: t("Content Request"),
          icon: contentRequest,
          path: "/content-request",
        },
        { label: t("job"), icon: job, path: "/job" },
        { label: t("articles"), icon: articles, path: "/articles" },
        { label: t("news"), icon: news, path: "/news" },
        { label: t("summaries"), icon: summaries, path: "/summaries" },
      ],
    },
    {
      header: "Account",
      items: [
        { label: t("Settings"), icon: settings, path: "/settings" },
        { label: t("chat"), icon: chat, path: "/chat" },
      ],
    },
  ];

  return (
    <aside
      role="navigation"
      
      className="bg-white sticky top-24 overflow-y-scroll no-scrollbar aside-left max-h-[100dvh] lg:max-h-[85dvh]"
    >
      {menuData.map((menu) => (
        <dl key={menu.header} className="sm:bg-blue-50 p-4 rounded-2xl sm:mb-2">
          <dt className="text-gray-300 pt-4 pb-6 truncate">{t(menu.header)}</dt>
          {menu.items.map((item) => (
            <dd className="pb-4" key={item.label}>
              <button
                className={`flex justify-start items-center gap-6 capitalize truncate w-fit pe-8 font-black ${
                  activeLabel === item.label ? "" : "text-black"
                }`}
                onClick={() => {
                  setActiveLabel(item.label);
                  navigate(`${item.path}`);
                  close();
                  localStorage.setItem("currentPage", item.label);
                }}
              >
                <img className="w-6 h-6" src={item.icon} alt={item.label} />
                {item.label}
              </button>
            </dd>
          ))}
        </dl>
      ))}
    </aside>
  );
}
