import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

function Home() {
  const [content, setContent] = useState("");
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const s = socketIOClient(ENDPOINT);

    s.on("receive-update", (data) => {
      setContent(data);
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    if (socket) {
      socket.emit("update-content", newContent);
    }
  };
  return (
    <div>
      <textarea
        value={content}
        onChange={handleContentChange}
        style={{ width: "100%", height: "200px", marginTop: "20px" }}
      />
    </div>
  );
}

export default Home;
