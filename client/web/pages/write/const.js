export const columns = [
  {
    title: "Markdown",
    dataIndex: "markdown",
    key: "markdown",
  },
  {
    title: "说明",
    dataIndex: "explain",
    key: "explain",
  },
  {
    title: "快捷键",
    dataIndex: "keybord",
    key: "keybord",
  },
];

export const dataSource = [
  {
    markdown: "## 标题",
    explain: "H2",
    keybord: "Ctrl / ⌘ + H",
  },
  {
    markdown: "**文本**",
    explain: "加粗",
    keybord: "Ctrl / ⌘ + B",
  },
  {
    markdown: "*文本*",
    explain: "斜体",
    keybord: "Ctrl / ⌘ + Alt + I",
  },
  {
    markdown: "[描述](链接)",
    explain: "链接",
    keybord: "Ctrl / ⌘ + L",
  },
  {
    markdown: "![描述](链接)",
    explain: "插入图片",
    keybord: "Ctrl / ⌘ + I",
  },
  {
    markdown: "> 引用",
    explain: "引用",
    keybord: "Ctrl / ⌘ + Q",
  },
  {
    markdown: "```code```",
    explain: "代码块",
    keybord: "Ctrl / ⌘ + Alt + C",
  },
  {
    markdown: "`code`",
    explain: "行代码块",
    keybord: "Ctrl / ⌘ + Alt + K",
  },
  {
    markdown: "省略",
    explain: "表格",
    keybord: "Ctrl / ⌘ + Alt + T",
  },
];
