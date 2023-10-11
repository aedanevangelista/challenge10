import womanDesktop from "./assets/faq-accordion-card-main/faq-accordion-card-main/images/illustration-woman-online-desktop.svg";

import bg from "./assets/faq-accordion-card-main/faq-accordion-card-main/images/bg-pattern-desktop.svg";

import box from "./assets/faq-accordion-card-main/faq-accordion-card-main/images/illustration-box-desktop.svg";

import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <main className="flex md:flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#ad68e9] to-[#6860e4] font-kumbh">
        <div className="flex w-full px-8 mx-2 pb-8 md:px-0 md:pb-0 md:flex-row justify-between md:w-[800px] rounded-3xl bg-white ">
          <div className="flex flex-col md:flex-row items-center w-full md:h-auto">
            <aside className="flex w-1/2 h-full md:left-[-4rem] md:top-[1rem] relative  flex-col justify-center ">
              <img src={bg} alt="bg" className="absolute w-[100%] z-10" />
              <img
                src={womanDesktop}
                alt="womanDesktop"
                className="absolute w-[100%] z-10"
              />
              <img
                src={box}
                alt="desktopBackground"
                className="absolute w-[40%] z-10"
              />
            </aside>
            <aside className=" md:w-1/2 md:my-[2rem] md:mr-[6rem] flex flex-col">
              <h1 className="font-[1000] text-3xl pt-16 md:pt-2 md:pb-8 self-center md:self-start ">
                FAQ
              </h1>

              {data.map((item, i) => (
                <div className="flex flex-col py-2 border-b">
                  <div
                    className="flex flex-row justify-between items-center cursor-pointer"
                    onClick={() => toggle(i)}
                  >
                    <h1
                      className={
                        selected === i
                          ? "font-semibold text-sm my-2"
                          : "text-sm my-2"
                      }
                    >
                      {item.question}
                    </h1>
                    {selected === i ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="#dc9a85"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="#dc9a85"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </div>
                  <p className={selected === i ? "text-xs" : "hidden"}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

const data = [
  {
    question: "How many team members can we invite?",
    answer: "As many as you would like.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: "By pressing forgot password at the login page.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes you can. You can find it at your profile's settings page.",
  },
  {
    question: "Do you provide additional support?",
    answer: "Yes we do! We provide 24/7 customer support online.",
  },
];

export default App;
