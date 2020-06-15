import React from "react";
import SortByComponent from "./sortByComponent.js";
import FintechSVGComponent from "../fintechSVGComponent";
import DataHandler from "../data/dataHandler";
import { Button } from "react-bootstrap";

class TransactionHistoryContent extends React.Component {
  constructor(props) {
    super(props);
    let { transactions, totalPages } = DataHandler.getAllData({
      skip: 0,
      limit: 10
    });
    this.state = {
      transactions: transactions,
      totalPages: totalPages,
      totalTransactions: null,
      currentPage: 1,
      searchKey: "",
      sortBy: ""
    };
    this.pageSize = 10;

    this.handleOnChange = this.handleOnChange.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
  }
  
  async getData(){

    let { transactions, totalPages } = await DataHandler.getAllData({
      skip: 0,
      limit: 10
    });

    this.setState(prevState => ({ transactions: transactions.data
    }));

  }

  async componentWillMount() { this.getData(); }


  getNextPage(event) {
    event.preventDefault();
    let currentPage = this.state.currentPage;
    let skip = currentPage * this.pageSize;
    let limit = this.pageSize;
    let searchKey = this.state.searchKey;
    let sortBy = this.state.sortBy;

    let { transactions, totalPages } = DataHandler.getAllData({
      skip,
      limit,
      searchKey,
      sortBy
    });

    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      transactions: transactions,
      totalPages: totalPages
    }));
  }
  getPrevPage(event) {
    event.preventDefault();

    let currentPage = this.state.currentPage;
    let skip = (currentPage - 2) * this.pageSize;
    let limit = this.pageSize;
    let searchKey = this.state.searchKey;
    let sortBy = this.state.sortBy;
    let { transactions, totalPages } = DataHandler.getAllData({
      skip,
      limit,
      sortBy,
      searchKey
    });

    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1,
      transactions: transactions,
      totalPages: totalPages
    }));
  }

  handleSortBy(sortBy) {
    let skip = 0;
    let limit = 10;
    let searchKey = this.state.searchKey;
    this.setState({ sortBy });
    let { transactions, totalPages } = DataHandler.getAllData({
      skip,
      limit,
      sortBy,
      searchKey
    });
    this.setState(prevState => ({
      currentPage: 1,
      transactions: transactions,
      totalPages: totalPages
    }));
  }

  handleOnChange = event => {
    event.persist();
    let searchKey = event.target.value;
    this.setState({ searchKey });

    let skip = 0;
    let limit = 10;
    let sortBy = this.state.sortBy;
    let { transactions, totalPages } = DataHandler.getAllData({
      skip,
      limit,
      sortBy,
      searchKey
    });

    this.setState(prevState => ({
      currentPage: 1,
      transactions: transactions,
      totalPages: totalPages
    }));
  };

  render() {
    return (
      <div className="TransactionHistoryContent">
        <div className="header">
          <div className="header-left">
            <FintechSVGComponent />
            <h2>Transaction History</h2>
          </div>
          <div className="header-right">
            <input
              className="search-box"
              title="search by recipient (Transaction details)"
              value={this.state.searchKey}
              placeholder="Search By Transaction ID"
              onChange={this.handleOnChange}
            />
            <span>Sort by : </span>
            <SortByComponent handleSortBy={this.handleSortBy} />
          </div>
        </div>

        <div className="bottom">

          <div className="transaction title">
            <div className="transaction-id"> Transaction ID </div>
            <div className="transaction-date"> Transaction date </div>
            <div className="transaction-detail">Transaction Type </div>
            <div className="transaction-amnt"> Transaction amount </div>
            <div className="transaction-balance-amnt"> Balance </div>
          </div> 

          {this.state.transactions && this.state.transactions.map((transaction, id) => {
            
            const isBackgroundRed = transaction.type === 'CREDIT';
            
             return (
                
                <div className={"transaction" } key={id}>

                <div className="transaction-id"> {transaction.id} </div>

                 <div className="transaction-date"> {transaction.date} </div>
                
                 <div className={isBackgroundRed ? 'background-red' : 'background-green'} >{transaction.type} </div>
                
                 <div className="transaction-amnt " >{transaction.amount} </div>
                 
                 <div className="transaction-balance-amnt"> {transaction.balance} </div>
                
                </div>
              );
            })}
        </div>

        <div className="pagination">
          <Button
            variant={
              "outline-primary prev-btn " +
              (this.state.currentPage === 1 ? "disabled" : "")
            }
            onClick={this.getPrevPage}
          >
            Prev
          </Button>{" "}
          <Button
            variant={
              "outline-primary next-btn " +
              (this.state.currentPage === Math.ceil(this.state.totalPages)
                ? "disabled"
                : "")
            }
            onClick={this.getNextPage}
          >
            Next
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default TransactionHistoryContent;
