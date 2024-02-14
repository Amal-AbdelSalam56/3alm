import React from "react";
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";

function We() {
  const themeColor = localStorage.getItem("themeColor");
  const [t, i18n] = useTranslation();

  return (
    <div className="max-w-4xl m-auto pt-5 p-3">
      <h3 className={`font-xxl fw-bolder text-current mb-4`}>
        {t("whoarewe")}{" "}
      </h3>
      <div className="mb-5">
        <p>
          هناك حقسه منذ زمن طويل وهى ان المحتوى المقروءهناك حقسه منذ زمن طويل
          وهى ان المحتوى المقروءهناك حقسه منذ زمن طويل وهى ان المحتوى
          المقروءهناك حقسه منذ زمن طويل وهى ان المحتوى المقروءهناك حقسه منذ زمن
          طويل وهى ان المحتوى المقروءهناك حقسه منذ زمن طويل وهى ان المحتوى
          المقروءهناك حقسه منذ زمن طويل وهى ان المحتوى المقروءهناك حقسه منذ زمن
          طويل وهى ان المحتوى المقروء
        </p>
      </div>
      <div className="mb-5">
        <p>
          هناك حقسه منذ زمن طويل وهى ان المحتوى المقروءهناك حقسه منذ زمن طويل
          وهى ان المحتوى المقروءهناك حقسه منذ زمن طويل وهى ان المحتوى
          المقروءهناك حقسه منذ زمن طويل وهى ان المحتوى المقروءهناك حقسه منذ زمن
          طويل وهى ان المحتوى المقروءهناك حقسه منذ زمن طويل وهى ان المحتوى
          المقروءهناك حقسه منذ زمن طويل وهى ان المحتوى المقروءهناك حقسه منذ زمن
          طويل وهى ان المحتوى المقروء
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="">
          <h4 className={`font-xl fw-bolder text-current mb-4`}>
            {t("Connectwithus")}
          </h4>
          <div
            className={`font-lg d-flex align-items-center justify-content-center gap-2 fw-bolder text-current mb-4 cursor-pointer`}
          >
            <MdEmail />
            a@a.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default We;
