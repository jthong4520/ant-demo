import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Menu,
  Space,
  Table,
  TableProps,
  Tag,
} from "antd";
import { DownOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const { Column } = Table;

const fileData = [
  {
    key: "1",
    title: "Document 1",
    owner: "John Doe",
    language: "English",
  },
  {
    key: "2",
    title: "Document 2",
    owner: "Jane Smith",
    language: "Spanish",
  },
  {
    key: "3",
    title: "Document 3",
    owner: "Alice Johnson",
    language: "French",
  },
];

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Option 1
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Option 2
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Option 3
      </a>
    </Menu.Item>
  </Menu>
);

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function App() {
  return (
    <div className="App" style={{ marginLeft: "10px", marginRight: "10px" }}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Button type="dashed">Button</Button>
      <Button type="default">Button</Button>
      <Button type="link">Button</Button>
      <Button type="primary">Button</Button>
      <Button type="text">Button</Button>
      <Button disabled>Button</Button>
      <Button ghost>Ghost</Button>
      <Breadcrumb
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },
          {
            href: "",
            title: (
              <>
                <UserOutlined />
                <span>Application List</span>
              </>
            ),
          },
          {
            title: "Application",
          },
        ]}
      />
      <Table
        dataSource={fileData}
        bordered
        title={() => "Header"}
        footer={() => "Footer"}
      >
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Owner" dataIndex="owner" key="owner" />
        <Column title="Language" dataIndex="language" key="language" />
        <Column
          title="Options"
          key="options"
          render={(text, record) => (
            <Space size="middle">
              <Dropdown overlay={menu}>
                <Button>
                  More options <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          )}
        />
      </Table>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default App;
