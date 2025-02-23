import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import SampleForm from "../../../component/Form/SampleForm";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import "antd/dist/antd.css";

// import opTeam from "../../player/player.jpg";
import MatchesTeams from "../../../component/MatchesTeams/MatchesTeams";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import FileUpload from "../../../component/Form/FileUpload";
import SelectOption from "../../../component/Form/SelectOption";
import { object } from "prop-types";
import moment from "moment";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../../src/firebase";
import { v4 } from "uuid";

const fileTypes = ["JPG", "PNG", "GIF"];

const Axios = require("axios").default;

var date = new Date();
date.setDate(date.getDate() + 7);

var currentDate = moment(date).format("YYYY-MM-DD");

console.log("current date : ", currentDate);

var imgurl;

const AddTournament = (event) => {
  event.preventDefault();

  console.log(event);

  let formData = {
    title: event.target[0].value,
    date: event.target[1].value,
    time: event.target[2].value,
    ground: event.target[3].value,
    match_format: event.target[4].value,
    op_team_name: event.target[5].value,
    image: imgurl,
  };

  console.log("POST img url : ",imgurl);
  
  Axios.post("http://localhost:3001/api/manager/AddTournamentMatch", formData)
    .then((res) => {
      // console.log("res", res);

      if (res.data.validation != null) {
        alert(res.data.validation);
      } else {
        alert("Match Add Successfully");
        window.history.back()
      }

      // setPost(res);
    })
    .catch((err) => console.log("error is arized", err));
};

function AddTournamentMatch(props) {
 

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrls] = useState(null);
  const { type } = useParams();

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {

      alert("image uploaded")
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
        imgurl = url;
        console.log("imgurl : ",imgurl);
      });

    });
  };

  console.log("type is : " + type);
  const option = [
    {
      value: "T20",
      title: "T20",
    },
    {
      value: "TEST",
      title: "TEST",
    },
    {
      value: "ODI",
      title: "ODI",
    },
  ];

  let array1 = [
    {
      title: "Date",
      min: String(currentDate),
      type: "date",
      placeholder: "",
      id: "date",
      required: "true",
    },
    {
      title: "Time",

      type: "time",
      placeholder: "",
      id: "time",
      required: "true",
    },
    {
      title: "Ground",
      type: "text",
      placeholder: "",
      id: "ground",
      required: "true",
    },
    {
      title: "Opposite Team Name",

      type: "text",
      placeholder: "",
      id: "op_team_name",
      required: "true",
    },
  ];

  let file = {
    filefor: "for",
    filetitle: "Logo",
  };

  console.log("post data function ");
  // if (post) return null;

  return (
    <>
      <div className="page-container-1">
        <div className="header-container">
          <Header></Header>
        </div>

        <div className="body-container-1">
          <div className="navbar-container">
            <Navbar></Navbar>
          </div>
          <div className="body-container-2">
            <div className="page-container-gray" style={{ width: "100%" }}>
              <div className="l-back-r-title">
                <div className="l-back-r-title-icon">
                  <Link to={"/manager/AddMatch"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Add Tournament Match </h1>
              </div>

              <div className="form-container">
                <div className="table-box-1" style={{ margin: "auto" }}>
                  <div className="tablee">
                    <div className="matche-container-outer-box">
                      <div className="match-box-up">
                        <div className="go-out">
                          <h4
                            style={{
                              color: "#009270",
                              fontSize: "2rem",
                              fontWeight: "bolder",
                            }}
                          >
                            {type}
                          </h4>
                        </div>
                      </div>
                      <div
                        className="match-box-mid"
                        style={{ height: "auto", minWidth: "100%" }}
                      >
                        <div
                          className="form-container"
                          onSubmit={AddTournament}
                        >
                          <form>
                            <input type="hidden" value={type}></input>

                            <SampleForm arr={array1} />
                            <SelectOption
                              label={"Match Format"}
                              option={option}
                            />
                            {/* <FileUpload
                              filefor="opIcon"
                              filetitle="Opposite Teame Icon"


                            /> */}
                            {/* <label className="d-flex justify-content-start w-100 p-3">
                              upload
                            </label> */}
                            <div className="form-group file-upload-wrapper w-100 p-3 mb-2">
                              <input
                                type="file"
                                onChange={(event) => {
                                  setImageUpload(event.target.files[0]);
                                }}
                                className="form-control"
                              />
                              <br></br>
                              <button onClick={uploadFile} className="btn btn-primary" style={{float:"right"}}>
                                {" "}
                                Upload Image
                              </button>
                              <br></br>
                                <img src={imageUrl} style={{width:"150px"}}/>
                              

                            </div>
                            
                            <ResetSubmit />
                          </form>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTournamentMatch;
