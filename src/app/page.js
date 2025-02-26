"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);

    // Simulating authentication check (replace this with API call)
    if (values.email === "admin@example.com" && values.password === "password123") {
      message.success("Login successful!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      message.error("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col justify-center items-center"
      style={{
        backgroundImage: `url("/assets/images/Rectangle.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-[22px]">
        <h1 className="text-white text-center">
          <Image width={537} height={127} alt="" quality={50} src="/assets/images/Adobe Express - file.png" />
        </h1>
      </div>

      <Form
        className="flex justify-center flex-col !w-[30%] items-center"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit} // Ensure validation before calling handleSubmit
        autoComplete="off"
      >
        <h1 className="w-[100%] mb-[20px] text-white text-[30px] flex justify-center text-center">
          Login
        </h1>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input placeholder="Email address" className="rounded-l-[20px] rounded-r-[20px] w-[300px]" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Password" className="rounded-l-[20px] rounded-r-[20px] w-[300px]" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="text-white mt-[10px]">Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="w-[100%] flex justify-center">
          <Button
            type="primary"
            className="bg-[#054FB9] !text-white border-none flex justify-center rounded-l-[20px] rounded-r-[20px] w-[150px]"
            htmlType="submit" // Triggers form validation & onFinish
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Page;
