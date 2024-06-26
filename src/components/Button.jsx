import { IoSendSharp } from "react-icons/io5";

export default function Button({ press }) {
  return (
    <button
      className="font-bold text-center bg-gradient-to-br from-blue2 to-blue3 border border-blue1 rounded-lg p-2"
      onClick={press}
    >
      <IoSendSharp size={20}/>
    </button>
  );
}
