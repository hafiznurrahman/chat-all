export default function ChatBubble({ message }) {
  return (
    <p className="w-fit min-w-[50px] max-w-[80%] min-h-[30px] bg-blue2 rounded-lg rounded-br-none p-2 ml-auto relative">
      <div className="w-2 h-2 border-r-8 border-r-blue2 border-b-8 border-b-transparent absolute top-full right-0"></div>
      <span>{message}</span>
    </p>
  );
}
