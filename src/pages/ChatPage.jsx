import UserProfileInformation from "../components/UserProfileInformation.jsx";
import ChatBubble from "../components/ChatBubble.jsx";
import MessageInput from "../components/MessageInput.jsx";

export default function ChatPage() {
  return (
    <section className="w-full h-dvh flex flex-col items-center justify-between">
      <UserProfileInformation />
      <div className="w-full h-5/6 flex flex-col gap-5 overflow-auto p-2">
        <ChatBubble message="HI" />
        <ChatBubble message="Ini Testing Chat Bubble" />
        <ChatBubble message="Kurang Buanyakkk" />
        <ChatBubble message="Tampian Oke, Minus Fitur :v" />
      </div>
      <MessageInput />
    </section>
  );
}
