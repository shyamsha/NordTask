import React from "react";
import { Table } from "antd";
import { People } from "../../containers/dashboard/types";
import WithLoader from "../WithLoader/WithLoader";

interface Props {
  people: People;
  loading: boolean;
}

function PeopleTable(props: Props) {
  const { people } = props;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
      sorter: (a:{name:string}, b:{name:string}) => a.name.localeCompare(b.name),
    },
    {
      title:"Gender",
      dataIndex:"gender",
      key:"4"
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "2",
    },
    {
      title: "Mass",
      dataIndex: "mass",
      key: "3",
    },
    {
      title:"Hair_Color",
      dataIndex:"hair_color",
      key:"5"
    },
    {
      title:"Eye_Color",
      dataIndex:"eye_color",
      key:"6"
    },
    {
      title:"Birth_Year",
      dataIndex:"birth_year",
      key:"7"
    }
  ];

  return (
    <React.Fragment>
        <Table
          dataSource={people.results}
          columns={columns}
          pagination={false}
          bordered
          size="middle"
        />
    </React.Fragment>
  );
}

export default WithLoader(PeopleTable);
