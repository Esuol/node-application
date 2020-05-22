import React from "react";
import Loadable from "react-loadable";
import { AppstoreOutlined, PicCenterOutlined, PlusOutlined } from "@ant-design/icons";
import Loading from "../components/jumpLoading/jumpLoading";

export default [
  {
    key: "article",
    title: "文章模块",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "article-a",
        text: "文章列表",
        path: "/",
        exact: true,
        icon: <PicCenterOutlined />,
        component: Loadable({
          loader: () => import("../pages/article"),
          loading: () => <Loading />,
        }),
      },
      {
        key: "article-b",
        text: "文章新增",
        path: "/article-add",
        exact: true,
        icon: <PlusOutlined />,
        component: Loadable({
          loader: () => import("../pages/article/create"),
          loading: () => <Loading />,
        }),
      },
    ],
  },
];
