import React from "react";
import { faq } from "../Data";
const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg flex flex-col sm:px-14 px-6 py-10 justify-center text-center "
    >
      <h1 className="md:text-[60px] text-3xl sm:text-4xl font-bold text-red-900 py-6">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      {faq.map((event) => (
        <div className="flex flex-row flex-1 py-5 sm:mx-20 border-t-2 border-red-900 leading-4 gap-4 text-start items-center">
          <div className="flex sm:flex-[50%] flex-[67%] ">
            <p className="font-poppins font-semibold sm:text-3xl ">
              {event.qus}
            </p>
          </div>
          <div className="flex sm:flex-[50%] flex-[33%] sm:text-3xl">
            <p>{event.ans}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
