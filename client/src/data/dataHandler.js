import TransactionHistoryData from "./transaction-history";
import axios from "axios";

const API_URL = `http://localhost:5000/api`;

let DataHandler = {};

DataHandler.getAllData = async  query => {

  var config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
  };

  let response = await axios.get(API_URL + '/transactions', {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
  );

  let transactions = response;
  let totalPages = transactions.length / 10;

  //console.log('transactions  ==> ' + JSON.stringify(transactions.data))

  return { transactions, totalPages };

};

/*
DataHandler.findByTransactionId = id => {
  return TransactionHistoryData.filter(transaction => {
    return transaction.id === id;
  });
};
*/

export default DataHandler;
