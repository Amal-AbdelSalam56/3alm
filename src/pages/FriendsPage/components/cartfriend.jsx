import { useTranslation } from "react-i18next";
import Header from "../../../assets/images/Header.png";
import character from "../../../assets/images/character-of-the-week.png";
import { Button } from "../../../components/ui";
import Actions from "./Actions";

// eslint-disable-next-line react/prop-types
export default function Cartfriend({ type, data, button, user }) {
  const [t] = useTranslation();
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  return (
    <div className="border-0 shadow-xss rounded-3 bg-[#F7F9FA]">
      {/* <img className="w-full" src={Header} alt="" /> */}
      {user?.profile?.cover ? (
        <img
          src={`${URL}/storage/${user?.profile?.cover}`}
          className="w-full"
          alt="profile"
        />
      ) : (
        <img src={Header} alt="profile" className="w-full" />
      )}
      <div className="mt-4 p-8 text-black relative">
        {user?.profile?.image ? (
          <img
            src={`${URL}/storage/${user?.profile.image}`}
            className="absolute -top-16 w-20"
            alt="profile"
          />
        ) : (
          <img
            src={character}
            alt="profile"
            className="absolute -top-16 w-20"
          />
        )}
        {/* <img className="absolute -top-16 w-20" src={character} alt="" /> */}

        <h2 className="">
          {" "}
          {user?.first_name} {user?.last_name}
        </h2>
        {/* <div>{details}</div> */}
      </div>

      {/* <div className="m-4">
        <Button className="rounded-md md:px-16" children={"view profile"} />
      </div> */}
      <div className="friend__box__buttons">
        {type == "suggest" ? (
          <Actions user={user} />
        ) : (
          <div className="card-body pt-0 pe-4 ps-4 pb-4 gap-2 ">
            <button
              className="font-xss ms-2 text-white text-center font-xssss align-items-center"
              style={{
                padding: " 7px 80px",
                borderRadius: "0.5rem",
                backgroundColor: "#0099AB",
              }}
              // onClick={() => navigate(`/profile/${user.user_name}`)}
            >
              <span> {t(button)}</span>
            </button>
          </div>
        )}
        {/* <img className="delete" src={delet} alt="profile" /> */}
      </div>
    </div>
  );
}
