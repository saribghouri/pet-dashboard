"use client";
import React, { useState } from "react";
import { Table, Input, Divider, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Claims = () => {
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([
    { ID: "CLM001", Date: "2024-02-15", Status: "Pending", Amount: "$500" },
    { ID: "CLM002", Date: "2024-02-10", Status: "Approved", Amount: "$1200" },
    { ID: "CLM003", Date: "2024-02-08", Status: "Rejected", Amount: "$300" },
    { ID: "CLM004", Date: "2024-02-05", Status: "Pending", Amount: "$750" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Define status colors
  const statusColors = {
    Pending: "orange",
    Approved: "green",
    Rejected: "red",
  };

  const columns = [
    { title: "Claims ID", dataIndex: "ID", key: "Claims" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (status) => <Tag color={statusColors[status]}>{status}</Tag>,
    },
    { title: "Amount", dataIndex: "Amount", key: "Amount" },
  ];

  const filteredData = items.filter(
    (claim) =>
      !searchText ||
      claim.ID.toLowerCase().includes(searchText.toLowerCase()) ||
      claim.Status.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between ml-6 mr-6 items-center mt-5 mb-5">
        <h1 className="text-2xl text-blue-700 font-sans">Claims</h1>
        <Input
          className="w-72 rounded-full"
          placeholder="Search"
          suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <Divider className="w-11/12 text-blue-700 mx-auto bg-blue-700" />
      <Table columns={columns} dataSource={filteredData} loading={isLoading} />
    </div>
  );
};

export default Claims;
