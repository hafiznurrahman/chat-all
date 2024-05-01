import UserChatBox from "../components/UserChatBox.jsx";
import SearchBox from "../components/SearchBox.jsx";

export default function HomePage() {
  return (
    <>
      <SearchBox />
      <section className="flex flex-col gap-3">
        <UserChatBox image="" alt="" name="Your Username" />
        <UserChatBox image="" alt="" name="Fanny daratt" />
        <UserChatBox image="" alt="" name="Moskov gamtengg" />
      </section>
    </>
  );
}
