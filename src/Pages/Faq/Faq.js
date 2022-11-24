import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="md:text-2xl text-lg ">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 md:text-4xl text-2xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                When can I sell my book?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Textbooks are available for buyback during finals week and the
                  first week classes of every semester. Dates are subject to
                  change. Call +8801839934433 for current buy back status.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Can I have the books shipped to me?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes - choose "USPS 1-3 Day Delivery" during the checkout
                  process. Shipping costs $10.00 for the first item, and $2.00
                  for each additional item. Shipping takes about 1-4 business
                  days. We are not able to send USPS tracking numbers, but you
                  can log into your account on our website to check your order
                  status.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                When will my order be ready?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  You will know your order is ready for pickup after you receive
                  your second email, showing "Ready for Pickup". Bring your
                  photo ID and web order confirmation number to the pickup
                  counter. Most orders are processed in 24 business hours
                  (Monday-Friday only).
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
