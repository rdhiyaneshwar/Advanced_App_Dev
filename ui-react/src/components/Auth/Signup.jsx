import React, { useState } from "react";
import styles from "../../style";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic here
    console.log("Registering with:", fullName, email, password);
  };

  return (
    <section id="register" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[70px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Join Us!
        </h1>
        <form className="mt-5">
          <div className="mb-4">
            <label htmlFor="fullName" className={`${styles.paragraph} text-white block mb-2`}>Full Name:</label>
            <input
              type="text"
              id="fullName"
              className={`${styles.input} ${styles.paragraph} px-4 py-2 w-full`}
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`${styles.paragraph} text-white block mb-2`}>Email:</label>
            <input
              type="email"
              id="email"
              className={`${styles.input} ${styles.paragraph} px-4 py-2 w-full`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className={`${styles.paragraph} text-white block mb-2`}>Password:</label>
            <input
              type="password"
              id="password"
              className={`${styles.input} ${styles.paragraph} px-4 py-2 w-full`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className={`${styles.button} ${styles.paragraph} px-4 py-2 w-full`}
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
