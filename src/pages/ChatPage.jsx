import { useRef } from "react";
import UserProfileInformation from "../components/UserProfileInformation.jsx";
import ChatBubble from "../components/ChatBubble.jsx";
import MessageInput from "../components/MessageInput.jsx";

export default function ChatPage() {
  const refInput = useRef(null);
  const refMessageArea = useRef(null);
  const handleSend = () => {
    const inputValue = refInput.current;
    const messageArea = refMessageArea.current;

    if (inputValue.value.length >= 1) {
      const bubbleBox = document.createElement("p");
      bubbleBox.className =
        "w-fit max-w-[80%] bg-blue2 rounded-lg rounded-br-none p-2 ml-auto relative";

      const trianggle = document.createElement("div");
      trianggle.className =
        "w-2 h-2 border-r-8 border-r-blue2 border-b-8 border-b-transparent absolute top-full right-0";

      const msgElement = document.createElement("span");
      msgElement.textContent = inputValue.value;

      bubbleBox.appendChild(trianggle);
      bubbleBox.appendChild(msgElement);
      messageArea.appendChild(bubbleBox);
    }

    inputValue.value = "";
    messageArea.scrollTop = messageArea.scrollHeight;
  };
  return (
    <section className="w-full h-auto flex flex-col items-center">
      <UserProfileInformation />
      <div
        className="w-full flex flex-col gap-5 p-2 pt-20 pb-28 "
        ref={refMessageArea}
      >
        <ChatBubble message="HI, Friend" />
        <ChatBubble message="This Is ChatAll project" />
        <ChatBubble message="ChatAll is a Service Send Message for Free" />
        <ChatBubble message="Thanks" />
      </div>
      <MessageInput refInputArea={refInput} sendButton={handleSend} />
    </section>
  );
}
