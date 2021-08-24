import { useParams } from "react-router-dom";
import Countdown from "react-countdown";
import { useState } from "react";
import "../../../src/App/components/todo-list/components/todo-item/item.css/check.css";

const infoId = [
  {
    id: 1,
    name: "Learn js",
    info: "JavaScript is the world's most popular programming language JavaScript is the programming language of the WebJavaScript is easy to learn",
    Time: 15000,
  },
  {
    id: 2,
    name: "Learn css",
    info: "CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.",
    Time: 9000,
  },
  {
    id: 3,
    name: "Learn React",
    info: "React is a JavaScript library for building user interfaces",
    Time: 25000,
  },
];

function ItemPage() {
  const [checked, setChecked] = useState(false);

  const { id } = useParams();
  const [v, setV] = useState("none");
  const [h, setH] = useState({});
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>dksjdkiasdknasndjsadbfjsdf</div>;
    } else {
      return (
        <>
          <span style={{ display: "block" }}>
            {hours}:{minutes}:{seconds}
          </span>
          <button
            onClick={() => {
              setV("inline-block");
              setH({ hours: hours, minutes: minutes, seconds: seconds });
            }}
          >
            finish
          </button>
        </>
      );
    }
  };

  return (
    <div>
      {infoId.map((singleInfo) => {
        if (+id === singleInfo.id) {
          return (
            <div>
              <h1 style={{ color: "red", textAlign: "center" }}>
                {singleInfo.name}
              </h1>
              <div
                className="popUp"
                style={{ display: v }}
              >{`${h.hours}:${h.minutes}:${h.seconds}`}</div>
              <h2 style={{ textAlign: "center" }}>{singleInfo.info}</h2>

              <button onClick={() => setChecked(true)}>Start</button>
              {checked ? (
                <div>
                  <Countdown
                    date={Date.now() + singleInfo.Time}
                    renderer={renderer}
                  ></Countdown>
                </div>
              ) : null}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ItemPage;
