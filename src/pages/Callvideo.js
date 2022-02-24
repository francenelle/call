import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Namestream from "../components/Namestream";
import Controlvideo from "./Controlvideo";
import { Button, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import {
  MdArrowBackIosNew,
  MdAllInbox,
  MdOutlineBrokenImage,
  MdMicOff,
  MdOutlineVideocamOff,
  MdOutlineFullscreen,
  MdVolumeUp,
} from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiRecordCircleFill } from "react-icons/ri";
import { BsPlusSquareFill, BsSoundwave } from "react-icons/bs";
import { VscScreenFull } from "react-icons/vsc";
import { IoLogOut } from "react-icons/io5";

const Callvideo = () => {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });
  }, []);
  return (
    <div className="pagevideo">
      <Navigation />

      <div className="content">
        <div className="callvideo">
          <header className="header">
            <Link to="/" className="back">
              {" "}
              <MdArrowBackIosNew />{" "}
            </Link>
            <h3>Titre de la vidéo</h3>
            <Link to="/" className="class">
              {" "}
              <MdAllInbox />
              class X
            </Link>
          </header>
          <main className="main">
            <div className="cta">
              <p className="record">
                <RiRecordCircleFill /> Record 00:25:14
              </p>
              <p className="invitepeople">
                <BsPlusSquareFill /> Invite people
              </p>
            </div>
            <div className="video">
              <video playsInline muted ref={myVideo} autoPlay />
              <p className="you">You</p>
              <p className="message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
              </p>
              <div className="participants">
                <div className="participant">
                  <img
                    src="./img/image.jpg"
                    alt="image"
                    className="participant__image"
                  />
                  <span className="icon">
                    <MdMicOff />
                  </span>
                </div>

                <div className="participant participant--speak">
                  <img
                    src="./img/image.jpg"
                    alt="image"
                    className="participant__image"
                  />
                  <span className="icon">
                    <BsSoundwave />
                  </span>
                </div>
                <div className="participant">
                  <img
                    src="./img/image.jpg"
                    alt="image"
                    className="participant__image"
                  />
                  <span className="icon">
                    <MdMicOff />
                  </span>
                </div>
                <div className="participant">
                  <img
                    src="./img/image.jpg"
                    alt="image"
                    className="participant__image"
                  />
                  <span className="icon">
                    <MdMicOff />
                  </span>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="volume">
              <span className="icon">
                <MdVolumeUp />
                <input type="range" name="" id="" className="slider" />
              </span>
              volume
            </div>
            <div className="options">
              <div>
                <span className="icon">
                  <MdMicOff />
                </span>
                Mic
              </div>
              <div>
                <span className="icon">
                  <MdOutlineVideocamOff />
                </span>
                Cam
              </div>
              <div>
                <span className="icon">
                  <VscScreenFull />
                </span>
                Display
              </div>
              <div>
                <span className="icon selected">
                  <VscScreenFull />
                </span>
                Credit
              </div>
              <div>
                <span className="icon">
                  <MdOutlineFullscreen />
                </span>
                Screen
              </div>
            </div>
            <div className="leave">
              <span className="icon">
                <IoLogOut />
              </span>
              leave
            </div>
          </footer>
        </div>
        <aside className="aside">
          <div className="cta">
            <button className="btn active">Messages (4) </button>
            <button className="btn">Participants (5) </button>
          </div>
          <div className="stat">
            <h6 className="stat__title">Class X president election</h6>
            <div className="stat__items">
              <div className="stat__item">
                <div className="stat__progress">
                  <div
                    className="stat__progressbar"
                    style={{
                      width: "55%",
                    }}
                  ></div>
                </div>
                <div className="stat__info">
                  <p className="stat__name">John Doe</p>
                  <p className="stat__percent">55%</p>
                </div>
              </div>
              <div className="stat__item">
                <div className="stat__progress">
                  <div
                    className="stat__progressbar"
                    style={{
                      width: "25%",
                    }}
                  ></div>
                </div>
                <div className="stat__info">
                  <p className="stat__name">John Doe</p>
                  <p className="stat__percent">25%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="chat">
            <div className="chat__header">
              <hr />
              <span>Message</span>
              <hr />
            </div>
            <div className="chat__body">
              <div className="chat__item">
                <img
                  src="./img/profile.png"
                  alt="profile"
                  className="chat__profile"
                />
                <div className="chat__info">
                  <p className="chat__name">Devi</p>
                  <p className="chat__message">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <div className="chat__item">
                <img
                  src="./img/profile.png"
                  alt="profile"
                  className="chat__profile"
                />
                <div className="chat__info">
                  <p className="chat__name">Devi</p>
                  <p className="chat__message">Lorem</p>
                </div>
              </div>
              <div className="chat__item send">
                <div className="chat__info">
                  <p className="chat__name">Devi</p>
                  <p className="chat__message">Lorem ipsum dolor sit</p>
                </div>
              </div>
              <div className="chat__item">
                <img
                  src="./img/profile.png"
                  alt="profile"
                  className="chat__profile"
                />
                <div className="chat__info">
                  <p className="chat__name">Devi</p>
                  <p className="chat__message">Lorem</p>
                </div>
              </div>
              <div className="chat__item">
                <img
                  src="./img/profile.png"
                  alt="profile"
                  className="chat__profile"
                />
                <div className="chat__info">
                  <p className="chat__name">Devi</p>
                  <p className="chat__message">Lorem</p>
                </div>
              </div>
              <div className="chat__item send">
                <div className="chat__info">
                  <p className="chat__name">Devi</p>
                  <p className="chat__message">Lorem ipsum dolor sit</p>
                </div>
              </div>
              <div className="chat__item">
                <img
                  src="./img/profile.png"
                  alt="profile"
                  className="chat__profile"
                />
                <div className="chat__info">
                  <p className="chat__name">Devi</p>
                  <p className="chat__message">Lorem</p>
                </div>
              </div>
            </div>
            <div className="chat__footer">
              <MdOutlineBrokenImage fontSize="20px" />
              <input
                type="text"
                className="form__controls"
                placeholder="Ecrire un message"
              />
              <button className="btn btn--secondary">
                <FiSend />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* <div className="callvideo">
        <Namestream />
        <hr />
        <div className="invitepeople">
          <Badge color="success" href="#">
            {" "}
            +{" "}
          </Badge>
          <p>Invite people</p>
        </div>

        <div className="video">
          <video playsInline muted ref={myVideo} autoPlay />
        </div>
        <Controlvideo />
      </div> */}
    </div>
  );
};

export default Callvideo;
