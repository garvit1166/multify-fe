import React, { useEffect, useState } from "react";
import { fetchInitalLogData } from "../../libs/apis/data";
import useWebSocket from "react-use-websocket";
import "./LogSection.css";

const WS_URL = process.env.REACT_APP_SOCKET_URL;

const LogSection = () => {
  const [logs, setLogs] = useState([]);

  const fetchData = async () => {
    const res = await fetchInitalLogData();
    res.reverse();
    setLogs(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const { lastMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
  });

  useEffect(() => {
    if (lastMessage) {
      const message = JSON.parse(lastMessage.data);
      message.reverse();
      setLogs([...message, ...logs]);
    }
  }, [lastMessage]);
  return (
    <div
      className={`d-flex flex-column w-100 h-100 logSection rounded p-2 text-start`}
      style={{ overflowY: "auto" }}
    >
      {logs && logs.length > 1 ? (
        logs.map((log, index) => <p key={index}>{log}</p>)
      ) : (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogSection;
