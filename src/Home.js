import "./App.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PageHeader } from 'antd';

function Home() {

  return (
    <>
      <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"

      />

     
   </>
  );
}

export default Home;
