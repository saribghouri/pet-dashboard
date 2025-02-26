"use client";
import React, {  useState } from "react";
import {
  Layout,
  Menu,
  Button,
  theme,
  Dropdown,
} from "antd";
import Image from "next/image";
import {
  DownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import Cards from "../cards";

import Claims from "../claims"
import Faqs from "../faqs";
import Policies from "../policies";

const { Header, Sider } = Layout;
const App = () => {


  const [card, setCard] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [policies, setPolices] = useState(false);
  const [faqs, setFaqs] = useState(false);
  const [claims, setClaims] = useState(false);







  const handlePolicies =()=>{
    setPolices(true)
    setClaims(false);
    setFaqs(false)

    setCard(false);
  }
  const handleClaims =()=>{
    setClaims(true)
    setFaqs(false)

    setPolices(false);

    setCard(false);
  }


 
  const handleFaqs = () => {
    setFaqs(true)
    setCard(false);
    setPolices(false);
    setClaims(false)
  };

  const handleCard = () => {
    setFaqs(false)
    setCard(true);
    setClaims(false)
    setPolices(false)
  };
 

 
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);

    setShowMenu(false);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  function getItem(label, key, icon, children, onClick, classNames = "") {
    return {
      key,
      icon,
      children,
      label,
      onClick,
      classNames,
    };
  }
 
  const generateMenuItems = () => {
  

    return [
      getItem(
        "",
        "1",

        <button
          onClick={handleCard}
          className="w-[248px] h-[40px] !ml-[-28px] justify-center flex item-center pl-[10px] pr-[10px] !text-center !text-[#ffffff] "
        >
          <Image
            className=""
            src={"/assets/icon/whitedashboard.png"}
            width={30}
            height={30}
            alt=""
          />
          <h1 className="!w-[100%] ml-[-47px] text-[18px]">Dashboard</h1>
        </button>
      ),

      getItem(
        "Policies",
        "sub3",
        <Image
          onClick={() => setCollapsed(!collapsed)}
          src={"/assets/icon/healthicons_miner-white.png"}
          width={30}
          height={30}
          alt=""
        />,
        [
          getItem(
            "Policies",
            "sub13",
            <Image src={""} alt="" />,

            null,
            handlePolicies
          ),

        
        ]
      ),
      getItem(
        "Claims",
        "sub2",
        <Image
          onClick={() => setCollapsed(!collapsed)}
          src={"/assets/icon/iconamoon_category-duotone.png"}
          width={30}
          height={30}
          alt=""
        />,
        [
         
          getItem(
            "Claims",
            "sub16",
            <Image src={""} alt="" />,
            null,
            handleClaims
          ),
        ]
      ),

      getItem(
        " Profile ",
        "sub34",
        <Image
          onClick={() => setCollapsed(!collapsed)}
          src={"/assets/icon/carbon_batch-job.png"}
          width={30}
          height={30}
          alt=""
        />,

        [
       
        
          getItem(
            "Profile",
            "sub19",
            <Image src={""} alt="" />,
            null,
          ),
        ]
      ),

      getItem(
        "settings",
        "sub21",
        <Image
          onClick={() => setCollapsed(!collapsed)}
          src={"/assets/icon/Vector (1).png"}
          width={22}
          height={22}
          alt=""
        />,
        [
          getItem("FAQS", "sub20", <Image src={""} alt="" />, null, handleFaqs),
        
        ]
      ),
    ];
  };
  const item = generateMenuItems();


  const items = [
    {
      label: (
        <a className="font">
          <p className="bg-[#005eca] text-white rounded-l-[10px] rounded-r-[10px] text-center p-[5px]">
            { "John Doe"}
          </p>
        </a>
      ),
    },

  
 
    {
      key: "3",
      label: (
        <a
          className="flex justify-center text-center rounded-l-[20px] pt-[5px] pb-[5px] rounded-r-[20px]  bg-[#005eca] !text-white"
       
        >
          <LogoutOutlined />
          Logout
        </a>
      ),
    },
  ];





 


  const renderMenu = () => {
    if (collapsed) {
      return (
        <Menu
          className=""
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={item}
          openKeys={menuOpen ? ["sub1", "sub2", "sub3"] : []}

        />
      );
    } else {
      return (
        <Menu
          className=""
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"             items={item}
          />
          
      );
    }
  };

  return (
    <div
      className="!bg-[#fff] flex"
      style={{
        minHeight: "100vh",
        width: "auto",
      }}
    >
      <Sider
        className="siderStyle"
        width="350px"
        // style={siderStyle}
        collapsible
        collapsedWidth="110px"
        collapsed={collapsed}
        onCollapse={handleCollapse}
      >
        <div className="p-[20px] text-[22px] " onClick={handleCard}>
          <h1 className="text-white text-center cursor-pointer ">
            <Image
              onClick={() => handleCard()}
              width={1000}
              height={1000}
              alt=""
              className=""
              src="/assets/images/Adobe Express - file.png"
            />
          </h1>
        </div>

        <div className="demo-logo-vertical bg-[#fff]" />

        {renderMenu()}
      </Sider>

      <Layout className="!bg-[#fff] ">
        <Header
          className="!bg-[#fff] "
          style={{
            padding: 0,
            background: colorBgContainer,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
            <div>
         
            <div className="flex justify-between relative">
                <div className="flex text-center items-center w-[180px] h-[45px] bg-[#ffffff]">
                  <Dropdown
                    className="ml-[45px] mt-[20px] w-[100px]"
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <div className="text-[#054fb9] font-semibold flex items-center overflow-ellipsis justify-between">
                        <p className="overflow-ellipsis mr-2">{"john doe"}</p>
                        <DownOutlined className="" />
                      </div>
                    </a>
                  </Dropdown>
                </div>
                <img
                  alt=""
                  className="w-[50px] h-[50px] rounded-[50%] ml-[-20px] mt-[-2px] absolute"
                  src={ "/assets/images/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.avif"}
                />
              </div>
             
            </div>
          </div>
        </Header>
        <div>
          {policies && <Policies />}
          {claims && <Claims/>}
          {faqs && <Faqs />}
         

          {card && <Cards  />}
        
        </div>
      </Layout>
    </div>
  );
};
export default App;