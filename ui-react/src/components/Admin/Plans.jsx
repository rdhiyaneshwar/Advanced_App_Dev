import React, { useState } from 'react';
import { razorpayconfig, testuserconfig } from '../../constants/index'

const Plans = () => {
  const [membership, setMembership] = useState(false);
  const [plandata, setPlandata] = useState({
    planName: '',
    planPrice: 0,
    planDays: 0,
    key: ''
  });

  const handleUpgrade = (planname, planprice, plandays) => {
    if (planprice > 0) {
      const options = {
        key: razorpayconfig.key,
        key_secret: razorpayconfig.key_secret,
        amount: planprice * 100,
        currency: razorpayconfig.currency,
        name: razorpayconfig.name,
        handler: (res) => {
          alert(res.razorpay_payment_id);
          setPlandata({
            planName: planname,
            planPrice: planprice,
            planDays: plandays,
            key: res.razorpay_payment_id
          });
          setMembership(true);
        },
        prefill: {
          name: testuserconfig.name,
          email: testuserconfig.email,
          contact: testuserconfig.contact
        },
        notes: {
          address: " office",
        },
        theme: {
          color: '#f5f5f7'
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    } else {
      alert("Invalid amount");
    }
  };

  const plans = [
    {
      planname: "Basic",
      price: 199,
      days: 30,
      features: [
        "Access to course content",
        "Quizzes and assignments",
        "Certificate of completion"
      ]
    },
    {
      planname: "Premium",
      price: 299,
      days: 30,
      features: [
        "Access to course content",
        "Quizzes and assignments",
        "Certificate of completion",
        "Priority support"
      ]
    },
    {
      planname: "Ultimate",
      price: 399,
      days: 30,
      features: [
        "Access to course content",
        "Quizzes and assignments",
        "Certificate of completion",
        "Priority support",
        "One-on-one mentorship"
      ]
    }
  ];
  

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Choose Your Plan</h2>
          <p className="mt-4 text-lg text-gray-600">
            Select the perfect plan for your learning journey.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
        {plans.map((plan, index) => (
  <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-6 py-8">
      <div className="text-lg leading-6 font-medium text-gray-900">{plan.planname}</div>
      <div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900">
        ₹{plan.price}<span className="ml-1 text-2xl font-medium text-gray-500">/month</span>
      </div>
      <p className="mt-4 text-base text-gray-500">For {plan.planname.toLowerCase()} learners who want access to {plan.planname.toLowerCase()} features.</p>
    </div>
    <div className="px-6 pt-6 pb-8 bg-gray-50 sm:px-10">
      <ul className="space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="ml-3 text-base text-gray-700">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-md shadow">
        <button className="block w-full py-2 px-4 border border-transparent text-center bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700" onClick={() => { handleUpgrade(plan.planname, plan.price, plan.days) }}>
          Choose {plan.planname}
        </button>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Plans;
