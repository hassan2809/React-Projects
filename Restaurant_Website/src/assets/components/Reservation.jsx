import React from "react";

import { SlCalender } from "react-icons/sl";
import { BsPencilSquare } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

const Reservation = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-4xl font-bold my-2">Reservations</h1>
      <h4 className="text-xl">
        Book a table online. Leads will reach in your email.
      </h4>
      <p className="bg-orange-300 h-[3px] w-[113px] mt-4 mb-14"></p>
      <div className="w-[1000px]">
        <form id="reservationform" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="form-group">
              <label
                htmlFor="datepicker"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <div className="relative mt-1">
                <input
                  type="date"
                  name="date"
                  className="form-control block w-full pl-10 p-2.5 border border-gray-300 rounded-md sm:text-sm"
                  id="datepicker"
                  placeholder="Pick a date"
                  title="Please choose a date"
                  required
                  aria-required="true"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SlCalender className="text-orange-300" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  className="form-control block w-full pl-10 p-2.5 border border-gray-300 rounded-md sm:text-sm"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  title="Your Full Name please"
                  required
                  aria-required="true"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BsPencilSquare className="text-orange-300" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="timepicker"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <div className="relative mt-1">
                <input
                  type="time"
                  className="form-control block w-full pl-10 p-2.5 border border-gray-300 rounded-md  sm:text-sm"
                  id="timepicker"
                  name="time"
                  placeholder="Pick a time"
                  title="Choose Preferred Time"
                  required
                  aria-required="true"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CiClock2 className="text-orange-300" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  className="form-control block w-full pl-10 p-2.5 border border-gray-300 rounded-md  sm:text-sm"
                  id="email"
                  name="email"
                  placeholder="Your Email ID"
                  title="Please enter your email id"
                  required
                  aria-required="true"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-orange-300" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700"
              >
                Guests
              </label>
              <div className="relative mt-1">
                <input
                  type="number"
                  className="form-control block w-full pl-10 p-2.5 border border-gray-300 rounded-md  sm:text-sm"
                  id="guests"
                  name="guests"
                  placeholder="How many of you?"
                  title="Please enter number of guests"
                  aria-required="true"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CiUser className="text-orange-300" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  className="form-control block w-full pl-10 p-2.5 border border-gray-300 rounded-md  sm:text-sm"
                  id="phone"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  title="Please enter your phone number"
                  required
                  aria-required="true"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-orange-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-default btn-lg bg-orange-300 text-black text-xl py-2 px-4 rounded-md hover:bg-orange-400 mt-4"
            >
              MAKE RESERVATION
            </button>
          </div>
        </form>
        <div className="text-center text-2xl border bg-gray-100 mt-10">
          You can also call: <strong>+1 224 6787 004</strong> to make a
          reservation.
        </div>
      </div>
    </div>
  );
};

export default Reservation;