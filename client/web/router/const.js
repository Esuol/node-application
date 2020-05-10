import React from "react";
import Loadable from "react-loadable";
import Loading from "../components/jumpLoading/jumpLoading";

export default [
  {
    key: "article",
    title: {
      icon: "ordered-list",
      text: "文章模块",
    },
    children: [
      {
        key: "article-a",
        text: "文章列表",
        path: "/",
        exact: true,
        component: Loadable({
          loader: () => import("../pages/article"),
          loading: () => <Loading />,
        }),
      },
      {
        key: "article-b",
        text: "文章新增",
        path: "/add-article",
        exact: true,
        component: Loadable({
          loader: () => import("../pages/article/list"),
          loading: () => <Loading />,
        }),
      },
    ],
  },
];
