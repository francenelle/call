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
} from "react-icons/md";
import { FiSend } from "react-icons/fi";

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
        </div>
        <aside className="aside">
          <div className="cta">
            <button className="btn active">Messages (4) </button>
            <button className="btn">Participants (5) </button>
          </div>
          <div className="stat">
            <h4 className="sat__title">Class X president election</h4>
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
