import { useRef } from "react";
import Button from "./Button.jsx";

export default function MessageInput({ refInputArea, sendButton }) {
  return (
    <section className="w-full h-auto">
      <div className="w-full flex items-end justify-between gap-3 backdrop-blur fixed bottom-0 left-0 p-3">
        <textarea
          className="w-full h-auto bg-dark1 outline-none rounded-lg resize-none p-2 placeholder:text-light"
          placeholder="Send Message"
          rows="1"
          ref={refInputArea}
        ></textarea>
        <Button press={sendButton} />
      </div>
    </section>
  );
}
