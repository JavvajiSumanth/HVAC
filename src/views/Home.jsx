import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-[#e8fdf2]">
        <div className="min-h-[500px] max-w-screen-sm mx-auto text-center  flex flex-col  justify-center items-center ">
          <h1 className="text-5xl font-bold">
            Find top-rated certified pros in your area.
          </h1>

          <form className="my-6 w-full px-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="How can we help?"
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-[#FF6153] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
              {/* <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
            </div>
          </form>

          <div class="flex gap-5 text-center">
            <div
              class="flex flex-col justify-center items-center"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
              >
                <path
                  d="M4 17a3 3 0 013-3h34a3 3 0 013 3v7H4v-7zM7 24h34v13a3 3 0 01-3 3H10a3 3 0 01-3-3V24z"
                  fill="#FF6153"
                ></path>
                <path
                  d="M41 24H7v8a8.381 8.381 0 018.036-6h25.963L41 24z"
                  fill="#A03027"
                ></path>
                <path
                  d="M29 24v3a2 2 0 01-2 2h-6a2 2 0 01-2-2v-3h10z"
                  fill="#A03027"
                ></path>
                <path
                  d="M18.5 14v-2a3 3 0 013-3h5a3 3 0 013 3v2"
                  stroke="#FF6153"
                  stroke-width="2"
                ></path>
              </svg>
              <div class="text-sm text-gray-600">
                <p>Remodelling</p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-center"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
              >
                <path
                  d="M4 17a3 3 0 013-3h34a3 3 0 013 3v7H4v-7zM7 24h34v13a3 3 0 01-3 3H10a3 3 0 01-3-3V24z"
                  fill="#FF6153"
                ></path>
                <path
                  d="M41 24H7v8a8.381 8.381 0 018.036-6h25.963L41 24z"
                  fill="#A03027"
                ></path>
                <path
                  d="M29 24v3a2 2 0 01-2 2h-6a2 2 0 01-2-2v-3h10z"
                  fill="#A03027"
                ></path>
                <path
                  d="M18.5 14v-2a3 3 0 013-3h5a3 3 0 013 3v2"
                  stroke="#FF6153"
                  stroke-width="2"
                ></path>
              </svg>
              <div class="text-sm text-gray-600">
                <p>Landscaping</p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-center"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
              >
                <path
                  d="M4 17a3 3 0 013-3h34a3 3 0 013 3v7H4v-7zM7 24h34v13a3 3 0 01-3 3H10a3 3 0 01-3-3V24z"
                  fill="#FF6153"
                ></path>
                <path
                  d="M41 24H7v8a8.381 8.381 0 018.036-6h25.963L41 24z"
                  fill="#A03027"
                ></path>
                <path
                  d="M29 24v3a2 2 0 01-2 2h-6a2 2 0 01-2-2v-3h10z"
                  fill="#A03027"
                ></path>
                <path
                  d="M18.5 14v-2a3 3 0 013-3h5a3 3 0 013 3v2"
                  stroke="#FF6153"
                  stroke-width="2"
                ></path>
              </svg>
              <div class="text-sm text-gray-600">
                <p>Handyperson</p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-center"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
              >
                <path
                  d="M4 17a3 3 0 013-3h34a3 3 0 013 3v7H4v-7zM7 24h34v13a3 3 0 01-3 3H10a3 3 0 01-3-3V24z"
                  fill="#FF6153"
                ></path>
                <path
                  d="M41 24H7v8a8.381 8.381 0 018.036-6h25.963L41 24z"
                  fill="#A03027"
                ></path>
                <path
                  d="M29 24v3a2 2 0 01-2 2h-6a2 2 0 01-2-2v-3h10z"
                  fill="#A03027"
                ></path>
                <path
                  d="M18.5 14v-2a3 3 0 013-3h5a3 3 0 013 3v2"
                  stroke="#FF6153"
                  stroke-width="2"
                ></path>
              </svg>
              <div class="text-sm text-gray-600">
                <p>Plumbing</p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-center"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
              >
                <path
                  d="M4 17a3 3 0 013-3h34a3 3 0 013 3v7H4v-7zM7 24h34v13a3 3 0 01-3 3H10a3 3 0 01-3-3V24z"
                  fill="#FF6153"
                ></path>
                <path
                  d="M41 24H7v8a8.381 8.381 0 018.036-6h25.963L41 24z"
                  fill="#A03027"
                ></path>
                <path
                  d="M29 24v3a2 2 0 01-2 2h-6a2 2 0 01-2-2v-3h10z"
                  fill="#A03027"
                ></path>
                <path
                  d="M18.5 14v-2a3 3 0 013-3h5a3 3 0 013 3v2"
                  stroke="#FF6153"
                  stroke-width="2"
                ></path>
              </svg>
              <div class="text-sm text-gray-600">
                <p>Roofing</p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-center"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
              >
                <path
                  d="M4 17a3 3 0 013-3h34a3 3 0 013 3v7H4v-7zM7 24h34v13a3 3 0 01-3 3H10a3 3 0 01-3-3V24z"
                  fill="#FF6153"
                ></path>
                <path
                  d="M41 24H7v8a8.381 8.381 0 018.036-6h25.963L41 24z"
                  fill="#A03027"
                ></path>
                <path
                  d="M29 24v3a2 2 0 01-2 2h-6a2 2 0 01-2-2v-3h10z"
                  fill="#A03027"
                ></path>
                <path
                  d="M18.5 14v-2a3 3 0 013-3h5a3 3 0 013 3v2"
                  stroke="#FF6153"
                  stroke-width="2"
                ></path>
              </svg>
              <div class="text-sm text-gray-600">
                <p>Electrical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
