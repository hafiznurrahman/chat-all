import { useState } from "react";
import UserChatBox from "../components/UserChatBox.jsx";
import { IoChatbubbleSharp } from "react-icons/io5";
export default function HomePage() {
  return (
    <>
      <section className="w-full h-auto backdrop-blur-md fixed top-0 left-0">
        <h1 className="flex items-center gap-2 text-3xl font-bold capitalize m-4">
          <IoChatbubbleSharp />
          Chat
        </h1>
      </section>
      <section className="flex flex-col gap-3 pb-20 mt-16">
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
      </section>
    </>
  );
}
