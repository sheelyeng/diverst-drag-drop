import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import DraggableWrapper from "../DraggableWrapper/DraggableWrapper";
import remote_meeting from "../../assets/remote_meeting_icon.png";
import chinese from "../../assets/chinese-new-year-2020.jpg";

function Card1({ classes }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <DraggableWrapper id="1">
      <div className="card">
        <div className="card__section" style={{height: "500px"}} onMouseLeave={() => setIsFlipped(false)}>
          <h2>Events You've Joined</h2>
          <a className="card__action" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" className="icon card__icon">
              <path d="M20 5h-2V2h-2v3H8V2H6v3H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 10V7h16v3H4z"></path>
            </svg>
            <span style={{fontSize: "18"}}>Events Calendar</span>
          </a>
          {/* <div className="block block-section flippable" > */}
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="front" onMouseEnter={() => setIsFlipped((prev) => !prev)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="-8 0 512 512.00038" width="20px" className="live__streaming" style={{backfaceVisibility: "hidden"}}>
                <title style={{backfaceVisibility: "hidden"}}>ongoing virtual event</title>
                <path d="m445.484375 239.261719h-395.394531c-27.621094 0-50.089844 22.46875-50.089844 50.089843v172.5625c0 27.617188 22.46875 50.085938 50.089844 50.085938h395.394531c27.621094 0 50.089844-22.46875 50.089844-50.085938v-172.5625c0-27.621093-22.46875-50.089843-50.089844-50.089843zm20.089844 222.652343c0 11.074219-9.011719 20.085938-20.089844 20.085938h-395.394531c-11.078125 0-20.089844-9.011719-20.089844-20.085938v-172.5625c0-11.078124 9.011719-20.089843 20.089844-20.089843h395.394531c11.078125 0 20.089844 9.011719 20.089844 20.089843zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m247.828125 160.640625c11.917969 0 23.835937-4.527344 32.910156-13.585937 8.800781-8.78125 13.644531-20.460938 13.644531-32.886719s-4.84375-24.105469-13.644531-32.886719c-18.148437-18.113281-47.675781-18.113281-65.824219 0-8.800781 8.78125-13.644531 20.460938-13.644531 32.886719s4.84375 24.105469 13.644531 32.886719c9.074219 9.058593 20.992188 13.585937 32.914063 13.585937zm-11.722656-58.128906c3.234375-3.226563 7.476562-4.835938 11.722656-4.835938 4.242187 0 8.484375 1.613281 11.714844 4.835938 3.121093 3.113281 4.839843 7.253906 4.839843 11.65625 0 4.402343-1.71875 8.539062-4.835937 11.65625-6.464844 6.449219-16.976563 6.445312-23.441406 0-3.121094-3.117188-4.835938-7.253907-4.835938-11.65625 0-4.402344 1.71875-8.539063 4.835938-11.65625zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m302.636719 179.761719c2.929687 2.9375 6.773437 4.40625 10.617187 4.40625 3.835938 0 7.667969-1.460938 10.597656-4.382813 17.558594-17.527344 27.230469-40.828125 27.230469-65.617187 0-24.789063-9.671875-48.09375-27.230469-65.617188-5.863281-5.851562-15.363281-5.84375-21.214843.019531-5.851563 5.863282-5.839844 15.363282.023437 21.214844 11.878906 11.855469 18.421875 27.617188 18.421875 44.382813 0 16.761719-6.542969 32.527343-18.421875 44.382812-5.863281 5.851563-5.875 15.347657-.023437 21.210938zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m171.722656 179.785156c2.929688 2.921875 6.761719 4.382813 10.597656 4.382813 3.84375 0 7.6875-1.46875 10.617188-4.40625 5.851562-5.863281 5.839844-15.359375-.023438-21.210938-11.878906-11.859375-18.421874-27.621093-18.421874-44.386719 0-16.761718 6.542968-32.523437 18.421874-44.382812 5.863282-5.851562 5.875-15.347656.023438-21.210938-5.851562-5.867187-15.351562-5.875-21.214844-.023437-17.558594 17.527344-27.226562 40.828125-27.230468 65.617187 0 24.789063 9.671874 48.09375 27.230468 65.621094zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m130.390625 421.976562h-40.265625v-107.691406c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v122.691406c0 8.285157 6.714844 15 15 15h55.265625c8.28125 0 15-6.714843 15-15 0-8.28125-6.71875-15-15-15zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m176.863281 299.285156c-8.285156 0-15 6.714844-15 15v122.691406c0 8.285157 6.714844 15 15 15 8.28125 0 15-6.714843 15-15v-122.691406c0-8.285156-6.71875-15-15-15zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m308.042969 299.925781c-7.925781-2.394531-16.300781 2.09375-18.695313 10.023438l-22.679687 75.128906-22.683594-75.128906c-2.394531-7.933594-10.765625-12.417969-18.695313-10.023438-7.929687 2.394531-12.417968 10.765625-10.023437 18.695313l37.042969 122.691406c.003906.011719.007812.023438.011718.035156 4.082032 13.0625 24.191407 13.855469 28.695313 0 .003906-.011718.007813-.019531.011719-.035156l37.042968-122.691406c2.394532-7.933594-2.097656-16.300782-10.027343-18.695313zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m420.449219 329.285156c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-67.667969c-8.285156 0-15 6.714844-15 15v122.691406c0 8.285157 6.714844 15 15 15h65.648438c8.285156 0 15-6.714843 15-15 0-8.28125-6.714844-15-15-15h-50.648438v-39.070312h42.566406c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-42.566406v-23.621094zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m373.339844 114.167969c0 33.445312-13.050782 64.894531-36.75 88.546875-5.863282 5.851562-5.875 15.351562-.023438 21.214844 2.933594 2.933593 6.773438 4.402343 10.617188 4.402343 3.835937 0 7.667968-1.460937 10.597656-4.382812 29.378906-29.320313 45.558594-68.308594 45.558594-109.78125 0-41.46875-16.179688-80.460938-45.558594-109.78125-5.863281-5.851563-15.359375-5.84375-21.214844.019531-5.851562 5.863281-5.839844 15.363281.023438 21.214844 23.699218 23.652344 36.75 55.097656 36.75 88.546875zm0 0" style={{backfaceVisibility: "hidden"}}></path>
                <path d="m148.390625 228.332031c3.84375 0 7.6875-1.46875 10.617187-4.402343 5.851563-5.863282 5.84375-15.363282-.023437-21.214844-23.699219-23.652344-36.75-55.101563-36.75-88.550782 0-33.445312 13.050781-64.894531 36.75-88.546874 5.863281-5.851563 5.875-15.351563.023437-21.210938-5.855468-5.867188-15.351562-5.875-21.214843-.023438-29.378907 29.324219-45.558594 68.3125-45.558594 109.78125 0 41.472657 16.179687 80.460938 45.558594 109.785157 2.929687 2.921875 6.761719 4.382812 10.597656 4.382812zm0 0" style={{backfaceVisibility: "hidden"}}></path>
              </svg>
              <img src={remote_meeting} alt="Remote meeting icon" width="20" height="20" style={{backfaceVisibility: "hidden"}} />
              <img width="100%" alt="" src={chinese} style={{backfaceVisibility: "hidden"}} />
              <p style={{backfaceVisibility: "hidden"}}>
                <a href="https://testing.diverst.com/groups/93/events/86" style={{backfaceVisibility: "hidden"}}>Chinese New Year Celebration</a>
              </p>
            </div>

            <div className="back" onMouseLeave={() => setIsFlipped((prev) => !prev)}>
              <span className="highlight" style={{backfaceVisibility: "hidden"}}>
                <a href="https://testing.diverst.com/groups/93/events/86" style={{backfaceVisibility: "hidden"}}>
                  Chinese New Year Celebration
                </a>
              </span>
              <br style={{backfaceVisibility: "hidden"}} />
              <small style={{paddingLeft: "12px", backfaceVisibility: "hidden"}}>
                The Asian Pacific Americans&nbsp;invite&nbsp;you to an exclusive Chinese Lunar New Year ce...
              </small>
              <br style={{backfaceVisibility: "hidden"}} />
              <small className="muted" style={{backfaceVisibility: "hidden"}}>08/07/2020</small>
              <div className="flex-row__cell" style={{backfaceVisibility: "hidden"}}>
                <span className="icon icon--chevron-right" style={{backfaceVisibility: "hidden"}}></span>
              </div>
            </div>
          </ReactCardFlip>
          <br />
        </div>
      </div>
    </DraggableWrapper>
  );
}

export default (Card1);
