
import { useTranslation } from "react-i18next";
import BoxNotification from "../../components/boxNotification/BoxNotification";

const Notifcations = () => {
    const [t] = useTranslation();

    return (
        <>
            <div className="notification">
                <div>
                    <h1
                        className="mb-0 pb-0"
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#2F2F31",
                        }}
                    >
                        {t("Today")}:
                    </h1>

                </div>
                <BoxNotification />
                <BoxNotification />
                <div>
                    <h1
                        className="mb-0 pb-0"
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#2F2F31",
                        }}
                    >
                        {t("Yesterday")}:
                    </h1>

                </div>
                <BoxNotification />
                <BoxNotification />
                <div>
                    <h1
                        className="mb-0 pb-0"
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#2F2F31",
                        }}
                    >
                        {t("27/11/2023 :")}
                    </h1>

                </div>
                <BoxNotification />
                <BoxNotification />
            </div>


            <style>
                {`
                 @media (max-width: 800px) {
                  
                  li {
                    flex-flow: wrap;
                  }
                  .par {
                     margin-left: 0px!important; 
                  }
                }

                @media (max-width: 800px) {
                  .myside {
                    width:92%!important;
                  }
                  }
                 `}
            </style>
        </>
    );
};

export default Notifcations;
