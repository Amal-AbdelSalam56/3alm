import { useState } from "react";
import { useTranslation } from "react-i18next";
import avatar from "../../../assets/images/avatar.png";
import fileicon from "../../../assets/images/fileicon.png";
import Research from "../../../assets/images/Research.png";
import Line from "../../../assets/images/Line.png";
import xicon from "../../../assets/images/x.png";
import img3 from "../../../assets/images/img3.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img1 from "../../../assets/images/img1.jpeg";
import backto from "../../../assets/images/backto.png";
import next from "../../../assets/images/next.png";
import download from "../../../assets/images/download.png";
import share from "../../../assets/images/share.png";
import comment from "../../../assets/images/comment.png";
import redheart from "../../../assets/images/redheart.png";
import Modal from "@mui/material/Modal";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { close } from "../../../assets/images/icons";

function Researches({ data }) {
  const [t] = useTranslation();
  const [editingIndex, setEditingIndex] = useState(-1);
  const [skills, setSkills] = useState([
    { name: "Interface" },
    { name: "HTML" },
    { name: "CSS" },
  ]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="max-w-4xl m-auto">
      {data?.researchs.map((e, index) => (
        <>
          <div className="d-flex justify-content-between">
            <div
              className="p-2 md:p-4 w-100"
              style={{ color: "#303030" }}
              key={index}
            >
              <div
                className="d-flex justify-content-between p-2 md:p-4 w-100"
                // className="p-2 md:p-4 w-100"
                style={{ color: "#303030" }}
                key={index}
              >
                <h1 className="fw-700 mb-3">{e?.title}</h1>
                <div className="d-flex align-items-center gap-3">
                  <AiOutlineEdit
                    style={{ color: "#7CC9D1" }}
                    className="font-xxl"
                    onClick={() => {
                      localStorage.setItem("currentPage", "CV");
                      setskillEdit(e);
                      setIsShareOpen(true);
                    }}
                  />{" "}
                  <img
                    src={close}
                    alt=""
                    onClick={() => {
                      Swal.fire({
                        title: t("Do you want to delete " + `${e.name}`),
                        // text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: t("Yes"),
                        cancelButtonText: t("No"),
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(e.id);
                        }
                      });
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-xxl-between flex-wrap">
                <div>
                  <p className="mb-3">
                    {" "}
                    Jun 2022{" "}
                    <span style={{ color: "#0077B5" }}>1 yrs 02 mos </span>
                  </p>

                  <p className="mb-3">{e?.journal_name}</p>
                </div>

                <img
                  style={{ cursor: "pointer" }}
                  src={fileicon}
                  alt=""
                  onClick={handleOpen}
                />
              </div>
              <div className="contentRequest d-flex flex-wrap">
                <div className="add" style={{ border: "none" }}>
                  <p
                    style={{
                      color: "#25324B",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    <img src={avatar} alt="" />
                    {e?.authors}
                  </p>
                </div>
                {/* <div className="add" style={{ border: "none" }}>
                <p
                  style={{
                    color: "#25324B",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  <img src={avatar} alt="" />
                  {t("Dr. Mahmoud ")}
                </p>
              </div> */}
              </div>
            </div>
          </div>
          <hr />

          <Modal
            open={open}
            onClose={handleClose}
            style={{
              overlay: { opacity: 0.55, backdropFilter: "blur(3px)" },
              borderRadius: "16px",
            }}
          >
            <form
              className="formAddContent card"
              style={{ maxWidth: "80%", backgroundColor: "#F9F9F9" }}
            >
              <div
                className="modalhead justify-content-center mb-5"
                style={{
                  borderRadius: "0px 0px 200px 200px",
                  width: "597px",
                  margin: "auto",
                }}
              >
                <h1 style={{ color: "#fff" }}>
                  {" "}
                  <img src={Research} alt="" />
                </h1>
                <img
                  className="Close"
                  src={xicon}
                  onClick={handleClose}
                  alt="Close"
                  style={{
                    position: "relative",
                    right: "-458px",
                    backgroundColor: "#0099AB",
                    borderRadius: "50%",
                    padding: "1px",
                  }}
                />
              </div>
              <p
                className="mb-5 address"
                style={{
                  fontSize: "38px",
                  color: "#0099AB",
                  display: "flex",
                  maxWidth: " 50%",
                }}
              >
                <img
                  style={{ marginRight: "10px", marginLeft: "40px" }}
                  src={Line}
                  alt=""
                />
                GENOTYPING TECHNOLOGIES FOR GENETIC RESEARCH{" "}
              </p>
              <div className="d-flex align-items-center gap-3">
                <AiOutlineEdit
                  style={{ color: "#7CC9D1" }}
                  className="font-xxl"
                  onClick={() => {
                    localStorage.setItem("currentPage", "CV");
                    setskillEdit(e);
                    setIsShareOpen(true);
                  }}
                />{" "}
                <img
                  src={close}
                  alt=""
                  onClick={() => {
                    Swal.fire({
                      title: t("Do you want to delete " + `${e.name}`),
                      // text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: t("Yes"),
                      cancelButtonText: t("No"),
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleDelete(e.id);
                      }
                    });
                  }}
                />
              </div>
              <div className="d-flex parts">
                <div className="col-xl-8 part1">
                  <div
                    className="prt1"
                    style={{ backgroundColor: "#fff", marginLeft: "70px" }}
                  >
                    <p style={{ color: "#001AFF", marginLeft: "25px" }}>
                      {" "}
                      #Research
                    </p>
                    <p style={{ margin: "0 25px", marginBottom: "30px" }}>
                      Genotyping is the technology that detects small genetic
                      differences that can lead to major changes in phenotype,
                      including both physical differences that make us unique
                      and pathological changes underlying disease. It has a vast
                      range of uses across basic scientific research, medicine,
                      and agriculture. Genotyping determines differences in
                      genetic complement by comparing a DNA sequence to that of
                      another sample or a reference sequence. It identifies
                      small variations in genetic sequence within populations,
                      such as single-nucleotide polymorphisms (SNPs).SNPs (often
                      pronounced “snips”) Genotyping is the technology that
                      detects small genetic differences that can lead to major
                      changes in phenotype, including both physical differences
                      that make us unique and pathological changes underlying
                      disease. It has a vast range of uses across basic
                      scientific research, medicine, and agriculture. Genotyping
                      determines differences in genetic complement by comparing
                      a DNA sequence to that of another sample or a reference
                      sequence. It identifies small variations in genetic
                      sequence within populations, such as single-nucleotide
                      polymorphisms (SNPs).SNPs (often pronounced “snips”)
                      Genotyping is the technology that detects small genetic
                      differences that can lead to major changes in phenotype,
                      including both physical differences that make us unique
                      and pathological changes underlying disease. It has a vast
                      range of uses across basic scientific research, medicine,
                      and agriculture. Genotyping determines differences in
                      genetic complement by comparing a DNA sequence to that of
                      another sample or a reference sequence. It identifies
                      small variations in genetic sequence within populations,
                      such as single-nucleotide polymorphisms (SNPs).SNPs (often
                      pronounced “snips”) Genotyping is the technology that
                      detects small genetic differences that can lead to major
                      changes in phenotype, including both physical differences
                      that make us unique and pathological changes underlying
                      disease. It has a vast range of uses across basic
                      scientific research, medicine, and agriculture. Genotyping
                      determines differences in genetic complement by comparing
                      a DNA sequence to that of another sample or a reference
                      sequence. It identifies small variations in genetic
                      sequence within populations, such as single-nucleotide
                      polymorphisms (SNPs).SNPs (often pronounced “snips”)
                    </p>
                  </div>
                  <div
                    className="d-flex mb-3 justify-content-xxl-between prt2"
                    style={{ marginLeft: "80px" }}
                  >
                    <button
                      className="modelbtn d-flex justify-content-xxl-between"
                      style={{
                        backgroundColor: "#7CC9D1",
                        padding: "8px 24px",
                      }}
                    >
                      <img src={backto} alt="" style={{ marginTop: "5px" }} />{" "}
                      {t("Previous")}
                    </button>
                    <button
                      className="modelbtn d-flex justify-content-xxl-between"
                      style={{
                        backgroundColor: "#7CC9D1",
                        padding: "8px 24px",
                      }}
                    >
                      {t("Next")}
                      <img
                        src={next}
                        alt=""
                        style={{ marginTop: "5px" }}
                      />{" "}
                    </button>
                  </div>

                  <div
                    className="d-flex mb-5 justify-content-xxl-between prt2 flex-wrap"
                    style={{ marginLeft: "80px" }}
                  >
                    <div style={{ color: "#0099AB", fontSize: "21px" }}>
                      <p>
                        Journal Name:{" "}
                        <span style={{ color: "#999999", marginLeft: "10px" }}>
                          {" "}
                          CT Journal
                        </span>
                      </p>
                      <p>
                        Year of publication:{" "}
                        <span
                          style={{
                            color: "#999999",
                            marginRight: "29px",
                            marginLeft: "10px",
                          }}
                        >
                          2022
                        </span>
                        Volume number:{" "}
                        <span style={{ color: "#999999" }}>214</span>
                      </p>
                      <p>
                        DOI Number:
                        <span style={{ color: "#999999", marginLeft: "10px" }}>
                          22
                        </span>
                      </p>
                      <p>
                        Authors:
                        <div
                          className="contentRequest d-flex"
                          style={{ color: "#999999", marginLeft: "10px" }}
                        >
                          <div className="add" style={{ border: "none" }}>
                            <p
                              style={{
                                fontSize: "15px",
                                fontWeight: "500",
                                paddingTop: "0",
                              }}
                            >
                              <img
                                src={avatar}
                                alt=""
                                style={{ height: "25px", width: "auto" }}
                              />
                              {t("Dr. Mamon ")}
                            </p>
                          </div>
                          <div
                            className="add"
                            style={{ border: "none", marginLeft: "10px" }}
                          >
                            <p
                              style={{
                                fontSize: "15px",
                                fontWeight: "500",
                                paddingTop: "0",
                              }}
                            >
                              <img
                                src={avatar}
                                alt=""
                                style={{ height: "25px", width: "auto" }}
                              />
                              {t("Dr. Mahmoud ")}
                            </p>
                          </div>
                        </div>
                      </p>
                      <p>
                        References:
                        <span
                          style={{
                            textDecoration: "underline",
                            marginLeft: "10px",
                            cursor: "pointer",
                          }}
                        >
                          Click here
                        </span>{" "}
                      </p>
                    </div>

                    <button
                      className="modelbtn d-flex justify-content-xxl-between"
                      style={{
                        backgroundColor: "#0099AB",
                        padding: "8px 24px",
                        height: "40px",
                        marginTop: "50px",
                      }}
                    >
                      <img src={download} alt="" style={{ marginTop: "5px" }} />
                      {t("Download")}
                    </button>
                  </div>

                  <div className="card-body d-flex gap-4 pt-5 mb-5 justify-content-xxl-around">
                    <div
                      className="emoji-bttn d-flex align-items-center fw-400 lh-26 font-sm ms-2"
                      style={{ color: "#5B7083" }}
                    >
                      <img
                        src={comment}
                        alt=""
                        style={{ width: "30px", marginRight: "5px" }}
                      />{" "}
                      61
                    </div>
                    <div
                      className="emoji-bttn d-flex align-items-center fw-400 lh-26 font-sm ms-2"
                      style={{ color: "#F4245E" }}
                    >
                      <img
                        src={redheart}
                        alt=""
                        style={{ width: "30px", marginRight: "5px" }}
                      />{" "}
                      6.2K
                    </div>{" "}
                    <div
                      className="emoji-bttn d-flex align-items-center fw-400 lh-26 font-sm ms-2"
                      style={{ color: "#5B7083" }}
                    >
                      <img
                        src={share}
                        alt=""
                        style={{ width: "30px", marginRight: "5px" }}
                      />{" "}
                      61
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 part2">
                  <p
                    className="prt1"
                    style={{ color: "#0099AB", marginLeft: "80px" }}
                  >
                    Related Research:
                  </p>
                  <img
                    src={img1}
                    alt=""
                    style={{
                      borderRadius: "40px",
                      maxWidth: "225px",
                      margin: "auto",
                      marginBottom: "25px",
                    }}
                  />
                  <img
                    src={img2}
                    alt=""
                    style={{
                      borderRadius: "40px",
                      maxWidth: "225px",
                      margin: "auto",
                      marginBottom: "25px",
                    }}
                  />
                  <img
                    src={img3}
                    alt=""
                    style={{
                      borderRadius: "40px",
                      maxWidth: "225px",
                      margin: "auto",
                      marginBottom: "25px",
                    }}
                  />
                </div>
              </div>
              <div></div>
            </form>
          </Modal>
        </>
      ))}

      <style>
        {`


                 @media (max-width: 1444px) {
                  .Close{
                     display: none;
                    } 
                 }
                 @media (max-width: 838px) {
                    .parts{
                        margin: auto!important;
                        flex-wrap: wrap!important;
                      } 
                      .part2{
                        max-width: 100%!important;
                        margin:auto!important;
                          }
                     .address{
                      max-width: 100%!important;

                     }      
                   }

                 @media (max-width: 764px) {
                 .modalhead{
                       display: none;
                     }
                 .address{
                    max-width: 100%!important;
                     }   
                 .formAddContent{
                    max-width: 100%!important;
                     }
                  .part1{
                   max-width: 100%!important;
                      }
                  .part2{
                    max-width: 100%!important;
                    width: 100%!important;
                    margin:auto!important;
                      } 
                 .prt1{
                    margin-left: 0px!important;
                      }
                 .prt2{
                    margin-left: 20px!important;
                      }
                 }

                
                 @media (max-width: 569px) {
                    .address{
                     font-size: 22px!important;    
                    }
                 }
                 @media (max-width: 402px) {
                  .prt2{
                    margin-left: 0px!important;    
                  }
                  .modelbtn{
                    width: 140px!important; 

                  }
               }
                 

                 
                  `}
      </style>
    </div>
  );
}

export default Researches;
