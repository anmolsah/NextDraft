import React, { useState } from "react";
import { appPlans } from "../assets/assets";
import Footer from "../components/Footer";

interface Plan {
  id: string;
  name: string;
  price: string;
  credits: number;
  description: string;
  features: string[];
}

const Pricing = () => {
  const [plans] = useState<Plan[]>(appPlans);

  const handlePurchase = async (planId: string) => {};

  return (
    <>
      <div className="w-full max-w-5xl mx-auto z-20 max-md:px-4 min-h-[80vh] bg-[#0E0F13]">
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#3AA9FF] via-[#6A6CFF] to-[#FF5DB1] bg-clip-text text-transparent">
            Choose your Plan
          </h2>
          <p className="text-[#B8BBC7] text-sm max-w-md mx-auto mt-2">
            Start using NextDraft for free and grow your project with us today 🚀
          </p>
        </div>

        <div className="pt-14 py-4 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className="p-6 mx-auto w-full max-w-sm rounded-xl text-white
                bg-white/5 backdrop-blur border border-white/10
                hover:border-[#6A6CFF]/60
                hover:shadow-[0_0_30px_rgba(106,108,255,0.25)]
                transition-all"
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <div className="my-3">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-[#B8BBC7]"> / {plan.credits} credits</span>
                </div>

                <p className="text-[#B8BBC7] mb-6">{plan.description}</p>

                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 mr-2 text-[#6A6CFF]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#B8BBC7]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePurchase(plan.id)}
                  className="w-full py-2 px-4 rounded-md text-sm text-white
                  bg-gradient-to-r from-[#3AA9FF] via-[#6A6CFF] to-[#FF5DB1]
                  hover:shadow-[0_0_25px_rgba(255,93,177,0.35)]
                  active:scale-95 transition"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto text-center text-sm max-w-md mt-10 text-white/60 font-light">
          Project <span className="text-white">Creation / Revision</span> consume{" "}
          <span className="text-white">5 credits</span>. You can purchase
          additional credits at any time.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Pricing;
