import React, { Component, Dispatch } from "react";
import { message, Space } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";
import PaginationInput from "../../components/Pagination/Pagination";
import SearchInput from "../../components/Search/SearchInput";
import PeopleTable from "../../components/Tables/PeopleTable";
import { ApplicationState } from "../../store";
import {
  getPaginationRequest,
  getPeopleRequest,
  getSearchRequest,
  getSpeciesRequest,
} from "./actions";
import { People, speciesResult } from "./types";

interface PropsFromState {
  loading: boolean;
  people: People;
  species: speciesResult;
  errors: {
    peopleError?: {
      message:string;
    };
  };
}

interface PropsDispatchFromState {
  onGetPeopleRequest: typeof getPeopleRequest;
  onPaginationRequest: typeof getPaginationRequest;
  onSearchRequest: typeof getSearchRequest;
  onSpeciesRequest:typeof getSpeciesRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  searchQuery: string;
  pageNumber: number;
  searchError: string;
}

class Dashboard extends Component<AllProps, State> {
  state: State = {
    searchQuery: "",
    pageNumber: 1,
    searchError: "",
  };

  searchQueryInput = (query: string) => {
    this.setState({ searchQuery: query }, () =>
      this.props.onSearchRequest({ name: query })
    );
  };

  nextPage = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 },()=>{
      this.props.onPaginationRequest({page:this.state.pageNumber})
    });
  };

  prevPage = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 },()=>{
      this.props.onPaginationRequest({page:this.state.pageNumber})
    });
  };

  componentDidMount() {
    this.props.onGetPeopleRequest();
    this.props.onSpeciesRequest()
  }

  componentDidUpdate(prevProps:AllProps, prevState:State) {
    const prev = prevProps;
    const now = this.props;
    if(!prev.errors.peopleError&&now.errors.peopleError){
      message.warning(now.errors.peopleError.message);
    }
  }
  

  render() {
    const { loading, people } = this.props;

    return (
      <React.Fragment>
        <Container>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Layout>
              <PaginationInput
                people={people}
                loading={loading}
                pageRequest={this.props.onPaginationRequest}
                nextPage={this.nextPage}
                prevPage={this.prevPage}
                pageNumber={this.state.pageNumber}
              />
              <div>
                <span style={{ fontSize: "0.8rem", color: "red" }}>
                  {this.state.searchError}
                </span>
                <SearchInput
                  searchQueryInput={this.searchQueryInput}
                  searchQuery={this.state.searchQuery}
                />
              </div>
            </Layout>
            <div>
              <PeopleTable people={people} loading={loading} />
            </div>
          </Space>
        </Container>
        {loading ? <Loader /> : null}
      </React.Fragment>
    );
  }
}

const Container = styled.div`
  margin: 1.5rem;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const mapStateToProps: any = ({ people }: ApplicationState) => ({
  loading: people.loading,
  people: people.people,
  species:people.species,
  errors: people.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onGetPeopleRequest: () => dispatch(getPeopleRequest()),
  onPaginationRequest: (params: { page: number }) =>
    dispatch(getPaginationRequest(params)),
  onSearchRequest: (params: { name: string }) =>
    dispatch(getSearchRequest(params)),
  onSpeciesRequest:()=>dispatch(getSpeciesRequest()),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Dashboard);
