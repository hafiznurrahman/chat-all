import Button from "./Button.jsx";

export default function MessageInput() {
  return (
    <section className="w-full h-auto">
      <form className="flex items-center justify-between gap-3 p-3">
        <textarea
          className="w-full h-auto bg-dark1 outline-none rounded-lg resize-none p-2 placeholder:text-light"
          placeholder="Send Message"
        ></textarea>
        <Button />
      </form>
    </section>
  );
}
