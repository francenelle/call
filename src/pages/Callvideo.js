import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Namestream from "../components/Namestream";
import Controlvideo from "./Controlvideo";
import { Button, Badge } from "reactstrap";

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

      <div className="callvideo">
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
      </div>
    </div>
  );
};

export default Callvideo;
