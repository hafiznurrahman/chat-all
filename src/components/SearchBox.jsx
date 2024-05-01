import UserChatBox from "./UserChatBox.jsx";

export default function SearchBox() {
  return (
    <div className="hidden w-screen h-screen backdrop-blur-md fixed top-0 left-0 p-3">
      <input
        className="w-full text-dark2 bg-light outline-none rounded-lg p-2"
        placeholder="Search @username"
      />
      <section className="flex flex-col items-start mt-3">
        <UserChatBox image="" alt="" name="Fanny Datar" />
        <UserChatBox image="" alt="" name="Fanny Data" />
        <UserChatBox image="" alt="" name="Fanny Da" />
      </section>
    </div>
  );
}
