import React from "react";
import { Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { People } from "../../containers/dashboard/types";

interface Props {
  people: People;
  loading: boolean;
  pageRequest: (params: { page: number }) => void;
  nextPage: () => void;
  prevPage: () => void;
  pageNumber: number;
}

function PaginationInput(props: Props) {
  const { people, pageNumber } = props;

  return (
    <div>
      <Space size={"middle"}>
        <div>
          Total {people.count} records of page {pageNumber}
        </div>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              props.prevPage();
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon="caret-left" />
        </div>
        <div
          onClick={() => {
            if (pageNumber >= 1) {
              props.nextPage();
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon="caret-right" />
        </div>
      </Space>
    </div>
  );
}

export default PaginationInput;
