import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./components/video/Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <h1>Tik Tok React App</h1>

      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              likes={likes}
              description={description}
              messages={messages}
              song={song}
              shares={shares}
            />
          )
        )}

        {/* <Video
          url="https://scontent-frx5-1.cdninstagram.com/v/t50.16885-16/92232531_313190626321757_5286299473921862541_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5pZ3R2LmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=4pMnQ_ydlRQAX98hs2k&vs=17847915776002505_1891993551&_nc_vs=HBksFQAYJEdGTmJmd1ZkWlFkZzJCd0JBSTFyY2c5ZHRWeEpidlZCQUFBRhUAAsgBABUAGCRHTHdJZlFWWVdjYjVjcTRGQUxfaXlPdmZFNE1CYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAABgAFpKw4om1pbQ%2FFQIoAkMzLBdAVxVP3ztkWhgSZGFzaF9iYXNlbGluZV8xX3YxEQB17AcA&_nc_rid=d8fab9e3cc&oe=5F261AFA&oh=7ebca644355f9d01626b0d9b65d5d8b8"
          channel="farnam_violin"
          description="mehrdad mehdi"
          song='tehran waltz'
          likes={500}
          messages={11}
          shares={20}
        />
        <Video 
        url="https://scontent-frt3-1.cdninstagram.com/v/t50.16885-16/10000000_587736498274663_8363592121823541042_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5pZ3R2LiIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=AO-SF4a6gMEAX-PdvsU&vs=17942416513111440_4099583259&_nc_vs=HBksFQAYJEdJQ1dtQUJuZ1RNUml4WUNBREkzalB1NGNoRjBidlZCQUFBRhUAAsgBABUAGCRHSUNXbUFDbG5kNzJLNmdBQUdFYk1VQ0E3U0lpYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAABgAFrjP%2BrTOs%2FwBFQIoAkMzLBdAgZDMzMzMzRgUZGFzaF9iYXNlbGluZV80ODBfdjERAHXsBwA%3D&_nc_rid=c7ca7dfad1&oe=5F266529&oh=2c0251bd6e580a869531759f8f510f27"
        channel="chloetrevor_violin"
        description="Piazzolla/Vivaldi Summer with El Paso Symphony"
        song='Vivaldi Summer'
        likes={500}
        messages={11}
        shares={20}
        />
        <Video 
        url="https://scontent-frt3-1.cdninstagram.com/v/t50.2886-16/109317744_111790917278128_2232169791391960799_n.mp4?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=qGKEz-GGmB0AX-ysj6v&oe=5F26649B&oh=022d1b8ba41c77eb27cb21accb2647a9"
        channel="mehrdadmehdiii"
        description="اشیانه روباه"
        song='accardion'
        likes={500}
        messages={11}
        shares={20}
        /> */}
      </div>
    </div>
  );
}

export default App;
