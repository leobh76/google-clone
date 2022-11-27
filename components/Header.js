import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon } from "@heroicons/react/24/solid";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          priority
          alt=""
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />

          <XMarkIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon className="mr-3 h-6 hidden text-blue-500 border-l-2 pl-4 border-gray-300 sm:inline-flex cursor-pointer" />

          <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://pps.whatsapp.net/v/t61.24694-24/306954208_428326952831904_3075990982477548996_n.jpg?ccb=11-4&oh=01_AdRX-wx0WW_mfdLOaZsskAP7rKNUyjgjOnXUpWo2-YsIjg&oe=638C5BEC"
        />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
