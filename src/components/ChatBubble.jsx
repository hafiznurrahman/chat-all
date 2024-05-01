export default function ChatBubble({ message }) {
  return (
    <p className="w-fit max-w-[80%] bg-blue2 rounded-lg rounded-bl-none p-2 mr-auto relative">
      <div className="w-2 h-2 border-l-8 border-l-blue2 border-b-8 border-b-transparent absolute top-full left-0"></div>
      <span>{message}</span>
    </p>
  );
}
