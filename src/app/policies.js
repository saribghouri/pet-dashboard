"use client";

import React from "react";
import { Card, Badge, Button, Divider } from "antd";
import Image from "next/image";

const policyStatusColors = {
  Active: "green",
  Expired: "red",
  "Pending Renewal": "orange",
};

const Policies = ({ policy = {} }) => {
  return (
    <div className="flex flex-col">
    <div className="flex justify-between  pl-[10px] pr-[10px] ml-[16px] mr-[16px] items-center mt-[20px] mb-[40px]">
            <h1 className="Doctors text-[22px] text-[#054fb9] font-sans">
              Policies
            </h1>
            
          </div>
          <Divider className="!w-[97%] text-[#054fb9]  flex justify-center mx-auto bg-[#054fb9] min-w-0" />

    <div className="flex justify-center items-center p-6 gap-[30px]">
        
      <Card className="w-full max-w-md shadow-lg rounded-2xl p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          {/* <h2 className="text-xl font-semibold">Active</h2> */}
          <Badge
            className="py-1 text-white rounded-lg text-[#059b5f]"
            color={policyStatusColors[policy?.status] || "#059b5f"}
            text={policy?.status || "Active"}
          />
        </div>

        <div className="flex items-center gap-4">
          {policy?.image && (
            <Image
              src={policy.image}
              alt={policy.petName || "Pet"}
              width={80}
              height={80}
              className="rounded-full border"
            />
          )}
          <div>
            <h3 className="text-lg font-bold">{policy?.petName || "🐶 Max"}</h3>
            <p className="text-gray-600">
              {policy?.petType || "Dog"} - {policy?.breed || "Unknown"} -{" "}
              {policy?.age ? `${policy.age} years old` : "Age not available"}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Coverage Details</h4>
          <p>Plan Type: {policy?.planType || "Premium Plan "}</p>
          <p>Coverage Limit: {policy?.coverageLimit || "Provides coverage for a specific time and ailment or damage"}</p>
          <p>Deductibles: {policy?.deductibles || "$10K Limit"}</p>
        </div>
      </Card>
      <Card className="w-full max-w-md shadow-lg rounded-2xl p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          {/* <h2 className="text-xl font-semibold">Pending Renewal</h2> */}
          <Badge
            className=" py-1 text-white rounded-lg"
            color={policyStatusColors[policy?.status] || "#ec8b0b"}
            text={policy?.status || "Pending Renewal"}
          />
        </div>

        <div className="flex items-center gap-4">
          {policy?.image && (
            <Image
              src={policy.image}
              alt={policy.petName || "Pet"}
              width={80}
              height={80}
              className="rounded-full border"
            />
          )}
          <div>
            <h3 className="text-lg font-bold">{policy?.petName || "🐶 Bella"}</h3>
            <p className="text-gray-600">
              {policy?.petType || "Dog"} - {policy?.breed || "Unknown"} -{" "}
              {policy?.age ? `${policy.age} years old` : "Age not available"}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Coverage Details</h4>
          <p>Plan Type: {policy?.planType || " Standard Plan"}</p>
          <p>Coverage Limit: {policy?.coverageLimit || "Pays out up to a specific amount for accidents and illnesses"}</p>
          <p>Deductibles: {policy?.deductibles || "$7.5K Limit "}</p>
        </div>
      </Card>
      <Card className="w-full max-w-md shadow-lg rounded-2xl p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          {/* <h2 className="text-xl font-semibold">Expired</h2> */}
          <Badge
            className="py-1 text-white rounded-lg"
            color={policyStatusColors[policy?.status] || "#b90505"}
            text={policy?.status || "Expired"}
          />
        </div>

        <div className="flex items-center gap-4">
          {policy?.image && (
            <Image
              src={policy.image}
              alt={policy.petName || "Pet"}
              width={80}
              height={80}
              className="rounded-full border"
            />
          )}
          <div>
            <h3 className="text-lg font-bold">{policy?.petName || "🐱 Luna "}</h3>
            <p className="text-gray-600">
              {policy?.petType || "Cat"} - {policy?.breed || "Unknown"} -{" "}
              {policy?.age ? `${policy.age} years old` : "Age not available"}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Coverage Details</h4>
          <p>Plan Type: {policy?.planType || "Basic Plan"}</p>
          <p>Coverage Limit: {policy?.coverageLimit || "Pays out up to a specific amount for accidents and illnesses"}</p>
          <p>Deductibles: {policy?.deductibles || "$5K Limit"}</p>
        </div>
      </Card>
    </div>
    </div>
  );
};

export default Policies;
