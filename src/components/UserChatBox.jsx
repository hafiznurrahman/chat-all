import { Link } from "react-router-dom";
import Avatar from "./Avatar.jsx";

export default function UserChatBox({ image, alt, name }) {
  const nameClean = name.replace(/\s/g, "")
  
  
  return (
    <Link
      to={`/chat/${nameClean}`}
      className="w-full h-auto flex items-center gap-3 p-2"
    >
      <div className="w-12 h-12">
        <Avatar image={alt} alt={alt} />
      </div>
      <span className="font-bold truncate">{name || "Name"}</span>
    </Link>
  );
}
