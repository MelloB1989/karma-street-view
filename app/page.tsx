"use client";
export default function Home() {
  return (
    <>
      <div className="container flex flex-col mx-auto">
        <div className="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
          <div>
            <img
              width="100"
              src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png"
            />
          </div>
          <div className="items-center justify-between hidden gap-12 text-black md:flex">
            <a
              className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
              href="javascript:void(0)"
            >
              About
            </a>
            <a
              className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
              href="javascript:void(0)"
            >
              Features
            </a>
            <a
              className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
              href="javascript:void(0)"
            >
              Pricing
            </a>
            <a
              className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
              href="javascript:void(0)"
            >
              Sponsor
            </a>
          </div>
          <div className="items-center hidden gap-8 md:flex">
            <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
              Get in touch
            </button>
          </div>
          <button className="flex md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-2xl group-[.open]:max-h-64 top-full">
            <a
              className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
              href="javascript:void(0)"
            >
              Product
            </a>
            <a
              className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
              href="javascript:void(0)"
            >
              Features
            </a>
            <a
              className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
              href="javascript:void(0)"
            >
              Pricing
            </a>
            <a
              className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
              href="javascript:void(0)"
            >
              Company
            </a>
            <button className="flex items-center text-sm font-normal text-black">
              Log In
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
            <div className="flex items-center justify-center mb-4 lg:justify-normal">
              <img
                className="h-5"
                src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png"
                alt="logo"
              />
              <h4 className="ml-2 text-sm font-bold tracking-widest text-primary uppercase">
                Karma Street View
              </h4>
            </div>
            <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
              Explore Your Neighborhood, Discover Local Gems
            </h1>
            <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
              Our platform provides a unique 360° view of businesses, allowing
              you to virtually step inside and experience what they have to
              offer.
            </p>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button
                className="flex items-center py-4 text-sm font-bold text-white px-7 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl"
                onClick={() => (window.location.href = "/view/main-gate")}
              >
                View Demo
              </button>
              <button className="flex items-center py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Book a free call
              </button>
            </div>
          </div>
          <div className="items-center justify-end hidden col-span-1 md:flex">
            <img
              className="rounded-md"
              width="1200"
              src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street/landing.png"
              alt="header image"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container flex flex-col items-center gap-8 mx-auto my-32">
          <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
            Our partners
          </p>
          <div className="flex flex-wrap items-center justify-center w-full gap-2 lg:gap-0 lg:flex-nowrap lg:justify-between">
            <span>
              <img
                src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street/anuraguniversity_logo-removebg-preview.png"
                width="200"
              />
            </span>
            <span>
              <img
                src="https://noobslearning.com/images/logo_noobs_text.png"
                width="200"
              />
            </span>
            <span>
              <img
                src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Noobsverse.png"
                width="150"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center mt-12">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-center lg:text-4xl text-dark-grey-900">
              Make your business visible online.
            </h2>
            <p className="text-lg text-center lg:w-7/12 text-grey-700">
              From cozy cafes to vibrant retail stores, we bring local gems
              right to your fingertips. Say goodbye to guesswork and hello to
              immersive exploration. With Karma Street View, discovering your
              next favorite local spot is just a click away. Experience the
              revolution in local business discovery today.
            </p>
          </div>
          {/*<div className="grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3 md:grid-cols-2">
        <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
          <div>
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M22.8233 8C22.8233 7.28 22.4533 6.65 21.8833 6.3L12.8333 1L3.78331 6.3C3.21331 6.65 2.83331 7.28 2.83331 8V18C2.83331 19.1 3.73331 20 4.83331 20H20.8333C21.9333 20 22.8333 19.1 22.8333 18L22.8233 8ZM20.8233 8V8.01L12.8333 13L4.83331 8L12.8333 3.32L20.8233 8ZM4.83331 18V10.34L12.8333 15.36L20.8233 10.37L20.8333 18H4.83331Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 text-center">
            <h4 className="text-2xl font-extrabold text-dark-grey-900">
              Streamline Team Communication
            </h4>
            <p className="font-medium text-grey-700">
              Streamline communication within your team using our shared team
              inboxes. Enhance collaboration and keep everyone on the same page
              effortlessly.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5 bg-white shadow-main rounded-3xl">
          <div>
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M3.28996 14.78L3.19996 14.69C2.80996 14.3 2.80996 13.67 3.19996 13.28L9.28996 7.18C9.67996 6.79 10.31 6.79 10.7 7.18L13.99 10.47L20.38 3.29C20.76 2.86 21.43 2.85 21.83 3.25C22.2 3.63 22.22 4.23 21.87 4.62L14.7 12.69C14.32 13.12 13.66 13.14 13.25 12.73L9.99996 9.48L4.69996 14.78C4.31996 15.17 3.67996 15.17 3.28996 14.78ZM4.69996 20.78L9.99996 15.48L13.25 18.73C13.66 19.14 14.32 19.12 14.7 18.69L21.87 10.62C22.22 10.23 22.2 9.63 21.83 9.25C21.43 8.85 20.76 8.86 20.38 9.29L13.99 16.47L10.7 13.18C10.31 12.79 9.67996 12.79 9.28996 13.18L3.19996 19.28C2.80996 19.67 2.80996 20.3 3.19996 20.69L3.28996 20.78C3.67996 21.17 4.31996 21.17 4.69996 20.78Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 text-center">
            <h4 className="text-2xl font-extrabold text-dark-grey-900">
              Gain Insights with Analytics
            </h4>
            <p className="font-medium text-grey-700">
              Gain valuable insights and data analytics for your team through
              our analytics dashboard. Make informed decisions and track your
              progress effectively.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
          <div>
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.8766 12.71C16.857 11.9387 17.5726 10.8809 17.9239 9.68394C18.2751 8.48697 18.2445 7.21027 17.8364 6.03147C17.4283 4.85267 16.6629 3.83039 15.6467 3.10686C14.6305 2.38332 13.4141 1.99451 12.1666 1.99451C10.9192 1.99451 9.70274 2.38332 8.68655 3.10686C7.67037 3.83039 6.90497 4.85267 6.49684 6.03147C6.0887 7.21027 6.05814 8.48697 6.40938 9.68394C6.76063 10.8809 7.47623 11.9387 8.45662 12.71C6.7767 13.383 5.31091 14.4994 4.21552 15.9399C3.12012 17.3805 2.43619 19.0913 2.23662 20.89C2.22218 21.0213 2.23374 21.1542 2.27065 21.2811C2.30756 21.4079 2.36909 21.5263 2.45173 21.6293C2.61864 21.8375 2.86141 21.9708 3.12662 22C3.39184 22.0292 3.65778 21.9518 3.86595 21.7849C4.07411 21.618 4.20745 21.3752 4.23662 21.11C4.45621 19.1552 5.38831 17.3498 6.85484 16.0388C8.32137 14.7278 10.2195 14.003 12.1866 14.003C14.1537 14.003 16.0519 14.7278 17.5184 16.0388C18.9849 17.3498 19.917 19.1552 20.1366 21.11C20.1638 21.3557 20.2811 21.5827 20.4657 21.747C20.6504 21.9114 20.8894 22.0015 21.1366 22H21.2466C21.5088 21.9698 21.7483 21.8373 21.9132 21.6313C22.078 21.4252 22.1547 21.1624 22.1266 20.9C21.9261 19.0962 21.2385 17.381 20.1375 15.9382C19.0364 14.4954 17.5635 13.3795 15.8766 12.71ZM12.1666 12C11.3755 12 10.6021 11.7654 9.94434 11.3259C9.28655 10.8864 8.77385 10.2616 8.4711 9.53074C8.16835 8.79983 8.08914 7.99557 8.24348 7.21964C8.39782 6.44372 8.77879 5.73099 9.3382 5.17158C9.89761 4.61217 10.6103 4.2312 11.3863 4.07686C12.1622 3.92252 12.9665 4.00173 13.6974 4.30448C14.4283 4.60724 15.053 5.11993 15.4925 5.77772C15.932 6.43552 16.1666 7.20888 16.1666 8C16.1666 9.06087 15.7452 10.0783 14.9951 10.8284C14.2449 11.5786 13.2275 12 12.1666 12Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 text-center">
            <h4 className="text-2xl font-extrabold text-dark-grey-900">
              Provide Instant Solutions
            </h4>
            <p className="font-medium text-grey-700">
              Deliver instant answers to your customers or team members with our
              shared team inboxes. Ensure quick responses and efficient
              problem-solving.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
          <div>
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M7.83331 4C7.83331 2.89 6.94331 2 5.83331 2C4.72331 2 3.83331 2.89 3.83331 4C3.83331 5.11 4.72331 6 5.83331 6C6.94331 6 7.83331 5.11 7.83331 4ZM11.0233 4.5C10.6133 4.5 10.2633 4.75 10.1033 5.13C9.66331 6.23 8.59331 7 7.33331 7H4.33331C3.50331 7 2.83331 7.67 2.83331 8.5V11H8.83331V8.74C10.2633 8.29 11.4133 7.21 11.9533 5.83C12.2133 5.19 11.7133 4.5 11.0233 4.5ZM19.8333 17C20.9433 17 21.8333 16.11 21.8333 15C21.8333 13.89 20.9433 13 19.8333 13C18.7233 13 17.8333 13.89 17.8333 15C17.8333 16.11 18.7233 17 19.8333 17ZM21.3333 18H18.3333C17.0733 18 16.0033 17.23 15.5633 16.13C15.4133 15.75 15.0533 15.5 14.6433 15.5C13.9533 15.5 13.4533 16.19 13.7033 16.83C14.2533 18.21 15.3933 19.29 16.8233 19.74V22H22.8233V19.5C22.8333 18.67 22.1633 18 21.3333 18ZM18.0833 11.09C18.0833 11.09 18.0833 11.08 18.0933 11.09C17.0333 11.36 16.1933 12.2 15.9233 13.26V13.25C15.8133 13.68 15.4133 14 14.9433 14C14.3933 14 13.9433 13.55 13.9433 13C13.9433 12.95 13.9633 12.86 13.9633 12.86C14.3933 11.01 15.8533 9.55 17.7133 9.13C17.7533 9.13 17.7933 9.12 17.8333 9.12C18.3833 9.12 18.8333 9.57 18.8333 10.12C18.8333 10.58 18.5133 10.98 18.0833 11.09ZM18.8333 6.06C18.8333 6.57 18.4633 6.98 17.9733 7.05C14.7833 7.44 12.2733 9.96 11.8833 13.15C11.8133 13.63 11.3933 14 10.8933 14C10.3433 14 9.89331 13.55 9.89331 13C9.89331 12.98 9.89331 12.96 9.89331 12.94C9.89331 12.93 9.89331 12.92 9.89331 12.91C10.3933 8.79 13.6833 5.53 17.8133 5.06H17.8233C18.3833 5.06 18.8333 5.51 18.8333 6.06Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 text-center">
            <h4 className="text-2xl font-extrabold text-dark-grey-900">
              Enhance Customer Connections
            </h4>
            <p className="font-medium text-grey-700">
              Connect with your customers seamlessly using our shared team
              inboxes. Improve customer interactions and build stronger
              relationships.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
          <div>
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M10.5 13H3.49998C3.23477 13 2.98041 13.1054 2.79288 13.2929C2.60534 13.4804 2.49998 13.7348 2.49998 14V21C2.49998 21.2652 2.60534 21.5196 2.79288 21.7071C2.98041 21.8946 3.23477 22 3.49998 22H10.5C10.7652 22 11.0196 21.8946 11.2071 21.7071C11.3946 21.5196 11.5 21.2652 11.5 21V14C11.5 13.7348 11.3946 13.4804 11.2071 13.2929C11.0196 13.1054 10.7652 13 10.5 13ZM9.49998 20H4.49998V15H9.49998V20ZM21.5 2H14.5C14.2348 2 13.9804 2.10536 13.7929 2.29289C13.6053 2.48043 13.5 2.73478 13.5 3V10C13.5 10.2652 13.6053 10.5196 13.7929 10.7071C13.9804 10.8946 14.2348 11 14.5 11H21.5C21.7652 11 22.0196 10.8946 22.2071 10.7071C22.3946 10.5196 22.5 10.2652 22.5 10V3C22.5 2.73478 22.3946 2.48043 22.2071 2.29289C22.0196 2.10536 21.7652 2 21.5 2ZM20.5 9H15.5V4H20.5V9ZM21.5 13H14.5C14.2348 13 13.9804 13.1054 13.7929 13.2929C13.6053 13.4804 13.5 13.7348 13.5 14V21C13.5 21.2652 13.6053 21.5196 13.7929 21.7071C13.9804 21.8946 14.2348 22 14.5 22H21.5C21.7652 22 22.0196 21.8946 22.2071 21.7071C22.3946 21.5196 22.5 21.2652 22.5 21V14C22.5 13.7348 22.3946 13.4804 22.2071 13.2929C22.0196 13.1054 21.7652 13 21.5 13ZM20.5 20H15.5V15H20.5V20ZM10.5 2H3.49998C3.23477 2 2.98041 2.10536 2.79288 2.29289C2.60534 2.48043 2.49998 2.73478 2.49998 3V10C2.49998 10.2652 2.60534 10.5196 2.79288 10.7071C2.98041 10.8946 3.23477 11 3.49998 11H10.5C10.7652 11 11.0196 10.8946 11.2071 10.7071C11.3946 10.5196 11.5 10.2652 11.5 10V3C11.5 2.73478 11.3946 2.48043 11.2071 2.29289C11.0196 2.10536 10.7652 2 10.5 2ZM9.49998 9H4.49998V4H9.49998V9Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 text-center">
            <h4 className="text-2xl font-extrabold text-dark-grey-900">
              Seamless Web Integration
            </h4>
            <p className="font-medium text-grey-700">
              Integrate our shared team inboxes seamlessly with your website.
              Enhance the user experience and provide efficient communication
              channels.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
          <div>
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M10.1666 14C9.90141 14 9.64706 14.1054 9.45952 14.2929C9.27198 14.4804 9.16663 14.7348 9.16663 15V21C9.16663 21.2652 9.27198 21.5196 9.45952 21.7071C9.64706 21.8946 9.90141 22 10.1666 22C10.4318 22 10.6862 21.8946 10.8737 21.7071C11.0613 21.5196 11.1666 21.2652 11.1666 21V15C11.1666 14.7348 11.0613 14.4804 10.8737 14.2929C10.6862 14.1054 10.4318 14 10.1666 14ZM5.16663 18C4.90141 18 4.64706 18.1054 4.45952 18.2929C4.27198 18.4804 4.16663 18.7348 4.16663 19V21C4.16663 21.2652 4.27198 21.5196 4.45952 21.7071C4.64706 21.8946 4.90141 22 5.16663 22C5.43184 22 5.6862 21.8946 5.87373 21.7071C6.06127 21.5196 6.16663 21.2652 6.16663 21V19C6.16663 18.7348 6.06127 18.4804 5.87373 18.2929C5.6862 18.1054 5.43184 18 5.16663 18ZM20.1666 2C19.9014 2 19.6471 2.10536 19.4595 2.29289C19.272 2.48043 19.1666 2.73478 19.1666 3V21C19.1666 21.2652 19.272 21.5196 19.4595 21.7071C19.6471 21.8946 19.9014 22 20.1666 22C20.4318 22 20.6862 21.8946 20.8737 21.7071C21.0613 21.5196 21.1666 21.2652 21.1666 21V3C21.1666 2.73478 21.0613 2.48043 20.8737 2.29289C20.6862 2.10536 20.4318 2 20.1666 2ZM15.1666 9C14.9014 9 14.6471 9.10536 14.4595 9.29289C14.272 9.48043 14.1666 9.73478 14.1666 10V21C14.1666 21.2652 14.272 21.5196 14.4595 21.7071C14.6471 21.8946 14.9014 22 15.1666 22C15.4318 22 15.6862 21.8946 15.8737 21.7071C16.0613 21.5196 16.1666 21.2652 16.1666 21V10C16.1666 9.73478 16.0613 9.48043 15.8737 9.29289C15.6862 9.10536 15.4318 9 15.1666 9Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 text-center">
            <h4 className="text-2xl font-extrabold text-dark-grey-900">
              Effortless Team Management
            </h4>
            <p className="font-medium text-grey-700">
              Manage your team effortlessly with our shared team inboxes.
              Simplify team reporting and ensure smooth operations.{" "}
            </p>
          </div>
        </div>
      </div>*/}
        </div>
      </div>
      <div className="w-full">
        <div className="container flex flex-col items-center gap-16 mx-auto my-32">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-3xl font-extrabold leading-tight lg:text-4xl text-dark-grey-900">
                How KSV works?
              </h2>
              <p className="text-base font-medium leading-7 text-dark-grey-600">
                Our platform is designed to provide efficient solutions and
                streamline your experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-8 xl:gap-x-10">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-purple-blue-500">
                <span className="text-base font-bold leading-7 text-white">
                  1
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold leading-tight text-dark-grey-900">
                  Contact us
                </h3>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  Get in touch with us and we will help you get started.
                </p>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={43}
                height={42}
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clipPath="url(#clip0_3346_6663)">
                  <path
                    d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                    fill="#A3AED0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3346_6663">
                    <rect
                      width={42}
                      height={42}
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-purple-blue-500 border-purple-blue-500">
                <span className="text-base font-bold leading-7">2</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold leading-tight text-dark-grey-900">
                  Scanning
                </h3>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  Our team will perform a 360-degree scan of your business.
                </p>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={43}
                height={42}
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clipPath="url(#clip0_3346_6663)">
                  <path
                    d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                    fill="#A3AED0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3346_6663">
                    <rect
                      width={42}
                      height={42}
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-purple-blue-500 border-purple-blue-500">
                <span className="text-base font-bold leading-7">3</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold leading-tight text-dark-grey-900">
                  Finish up.
                </h3>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  We will then post process the data and provide you with the
                  360 view.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="container mx-auto my-16">
    <div className="grid items-center justify-center w-full lg:h-full grid-cols-1 my-auto lg:grid-cols-2 my-16">
      <div className="flex flex-col col-span-1 text-center lg:text-start text-dark-grey-900 mb-7">
        <h3 className="text-4xl font-extrabold leading-tight">Join Us</h3>
        <h3 className="text-4xl font-medium leading-tight">
          Transform your website visitors into satisfied clients.
        </h3>
      </div>
      <div className="flex items-center justify-center col-span-1 lg:justify-end">
        <button className="box-content flex items-center py-4 mr-4 text-sm font-bold border px-7 rounded-2xl border-purple-blue-500 text-purple-blue-500 hover:bg-purple-blue-500 hover:text-white focus:ring-4 focus:ring-purple-blue-100 transition duration-300">
          Try Demo
        </button>
        <button className="flex items-center py-4 text-sm font-bold text-white border px-7 rounded-2xl border-purple-blue-500 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  </div>*/}
      <div className="w-full">
        <div className="container flex flex-col mx-auto">
          <div className="flex flex-col items-center w-full my-20">
            <span className="mb-8">
              <img
                width={100}
                src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png"
              />
            </span>
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Features
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Partners
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Help
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms
                </a>
              </div>
              <div className="flex items-center gap-8">
                <a
                  href="javascript:void(0)"
                  className="text-grey-700 hover:text-grey-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6348 20.7273V12.766H16.3582L16.7668 9.66246H13.6348V7.68128C13.6348 6.78301 13.8881 6.17085 15.2029 6.17085L16.877 6.17017V3.39424C16.5875 3.35733 15.5937 3.27273 14.437 3.27273C12.0216 3.27273 10.368 4.71881 10.368 7.37391V9.66246H7.63636V12.766H10.368V20.7273H13.6348Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_3320_6483"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={7}
                      y={3}
                      width={10}
                      height={18}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.6348 20.7273V12.766H16.3582L16.7668 9.66246H13.6348V7.68128C13.6348 6.78301 13.8881 6.17085 15.2029 6.17085L16.877 6.17017V3.39424C16.5875 3.35733 15.5937 3.27273 14.437 3.27273C12.0216 3.27273 10.368 4.71881 10.368 7.37391V9.66246H7.63636V12.766H10.368V20.7273H13.6348Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_3320_6483)"></g>
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-grey-700 hover:text-grey-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.8182 6.14597C21.1356 6.44842 20.4032 6.65355 19.6337 6.74512C20.4194 6.27461 21.0208 5.5283 21.3059 4.64176C20.5689 5.07748 19.7553 5.39388 18.8885 5.56539C18.1943 4.82488 17.207 4.36364 16.1118 4.36364C14.0108 4.36364 12.3072 6.06718 12.3072 8.16706C12.3072 8.46488 12.3408 8.75576 12.4058 9.03391C9.24436 8.87512 6.44106 7.36048 4.56485 5.05894C4.23688 5.61985 4.0503 6.27342 4.0503 6.97109C4.0503 8.29106 4.72246 9.45573 5.74227 10.1371C5.11879 10.1163 4.53239 9.94476 4.01903 9.65967V9.70718C4.01903 11.5498 5.33088 13.0876 7.07033 13.4376C6.75164 13.5234 6.41558 13.5709 6.06791 13.5709C5.82224 13.5709 5.58467 13.5465 5.35173 13.5002C5.83612 15.0125 7.2407 16.1123 8.90485 16.1424C7.60343 17.1622 5.96246 17.7683 4.18012 17.7683C3.87303 17.7683 3.57055 17.7498 3.27273 17.7162C4.95658 18.7974 6.95564 19.4278 9.10418 19.4278C16.1026 19.4278 19.9281 13.6312 19.9281 8.60397L19.9153 8.11145C20.6628 7.57833 21.3094 6.90851 21.8182 6.14597Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_3320_6484"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={3}
                      y={4}
                      width={19}
                      height={16}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.8182 6.14597C21.1356 6.44842 20.4032 6.65355 19.6337 6.74512C20.4194 6.27461 21.0208 5.5283 21.3059 4.64176C20.5689 5.07748 19.7553 5.39388 18.8885 5.56539C18.1943 4.82488 17.207 4.36364 16.1118 4.36364C14.0108 4.36364 12.3072 6.06718 12.3072 8.16706C12.3072 8.46488 12.3408 8.75576 12.4058 9.03391C9.24436 8.87512 6.44106 7.36048 4.56485 5.05894C4.23688 5.61985 4.0503 6.27342 4.0503 6.97109C4.0503 8.29106 4.72246 9.45573 5.74227 10.1371C5.11879 10.1163 4.53239 9.94476 4.01903 9.65967V9.70718C4.01903 11.5498 5.33088 13.0876 7.07033 13.4376C6.75164 13.5234 6.41558 13.5709 6.06791 13.5709C5.82224 13.5709 5.58467 13.5465 5.35173 13.5002C5.83612 15.0125 7.2407 16.1123 8.90485 16.1424C7.60343 17.1622 5.96246 17.7683 4.18012 17.7683C3.87303 17.7683 3.57055 17.7498 3.27273 17.7162C4.95658 18.7974 6.95564 19.4278 9.10418 19.4278C16.1026 19.4278 19.9281 13.6312 19.9281 8.60397L19.9153 8.11145C20.6628 7.57833 21.3094 6.90851 21.8182 6.14597Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_3320_6484)"></g>
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-grey-700 hover:text-grey-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-grey-700 hover:text-grey-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-grey-700 hover:text-grey-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.60063 2.18182H16.3991C19.3873 2.18182 21.8183 4.61281 21.8182 7.60074V16.3993C21.8182 19.3872 19.3873 21.8182 16.3991 21.8182H7.60063C4.6127 21.8182 2.18182 19.3873 2.18182 16.3993V7.60074C2.18182 4.61281 4.6127 2.18182 7.60063 2.18182ZM16.3993 20.0759C18.4266 20.0759 20.0761 18.4266 20.0761 16.3993H20.0759V7.60074C20.0759 5.57348 18.4265 3.92405 16.3991 3.92405H7.60063C5.57336 3.92405 3.92405 5.57348 3.92405 7.60074V16.3993C3.92405 18.4266 5.57336 20.0761 7.60063 20.0759H16.3993ZM6.85714 12.0001C6.85714 9.16424 9.16418 6.85714 12 6.85714C14.8358 6.85714 17.1429 9.16424 17.1429 12.0001C17.1429 14.8359 14.8358 17.1429 12 17.1429C9.16418 17.1429 6.85714 14.8359 6.85714 12.0001ZM8.62798 12C8.62798 13.8593 10.1407 15.3719 12 15.3719C13.8593 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8594 8.6279 12 8.6279C10.1406 8.6279 8.62798 10.1406 8.62798 12Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_3320_6487"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.60063 2.18182H16.3991C19.3873 2.18182 21.8183 4.61281 21.8182 7.60074V16.3993C21.8182 19.3872 19.3873 21.8182 16.3991 21.8182H7.60063C4.6127 21.8182 2.18182 19.3873 2.18182 16.3993V7.60074C2.18182 4.61281 4.6127 2.18182 7.60063 2.18182ZM16.3993 20.0759C18.4266 20.0759 20.0761 18.4266 20.0761 16.3993H20.0759V7.60074C20.0759 5.57348 18.4265 3.92405 16.3991 3.92405H7.60063C5.57336 3.92405 3.92405 5.57348 3.92405 7.60074V16.3993C3.92405 18.4266 5.57336 20.0761 7.60063 20.0759H16.3993ZM6.85714 12.0001C6.85714 9.16424 9.16418 6.85714 12 6.85714C14.8358 6.85714 17.1429 9.16424 17.1429 12.0001C17.1429 14.8359 14.8358 17.1429 12 17.1429C9.16418 17.1429 6.85714 14.8359 6.85714 12.0001ZM8.62798 12C8.62798 13.8593 10.1407 15.3719 12 15.3719C13.8593 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8594 8.6279 12 8.6279C10.1406 8.6279 8.62798 10.1406 8.62798 12Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_3320_6487)"></g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-base font-normal leading-7 text-center text-grey-700">
                © 2024 Noobsverse Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="loopple-badge">
        Made by
        <a href="https://noobslearning.com">
          <img
            src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Noobsverse.png"
            className="loopple-ml-1"
            style={{ width: 55 }}
          />
        </a>
      </div>
    </>
  );
}
