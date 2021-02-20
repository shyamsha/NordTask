import React from "react";
import Loader from "../Loader/Loader";

function WithLoader(LoadingComponent: any) {
  return function Loading(props: any) {
    if (!props.loading) {
      return <LoadingComponent {...props} />;
    }
    return <Loader />;
  };
}

export default WithLoader;
