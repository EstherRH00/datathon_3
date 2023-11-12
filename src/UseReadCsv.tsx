import {useEffect, useState} from "react";

import Papa , {ParseResult} from 'papaparse';

export interface PredictedItem {
  ID: string;
  AMOUNT: string;
  DATE: number;
}

export interface RowData {
  categoryID: string;
  amount: number;
  prediction: PredictedItem[];
}

interface ReadyToRow{
  B: RowData,
  C: RowData,
  E: RowData,
  F: RowData
}

const useReadCSV = () => {
  const [result, setResult] = useState<ReadyToRow>({
    B: {categoryID: "B", amount: 0, prediction: []},
    C: {categoryID: "C", amount: 0, prediction: []},
    E: {categoryID: "E", amount: 0, prediction: []},
    F: {categoryID: "F", amount: 0, prediction: []}
  })
  const getCSV = () => {
    Papa.parse("/datathon_3/hospital1.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<PredictedItem>) => {
        for(let i = 0; i < results.data.length; i++){
          const o = results.data[i]
          if(o.ID[0] === "B"){
            setResult((result) => ({
              ...result,
              B: {categoryID: result.B.categoryID, amount: result.B.amount, prediction: [...result.B.prediction, o]}}))
          }
          if(o.ID[0] === "C"){
            setResult((result) => ({
              ...result,
              C: {categoryID: result.C.categoryID, amount: result.C.amount, prediction: result.C.prediction.concat(o)}}))
          }
          if(o.ID[0] === "E"){
            setResult((result) => ({
              ...result,
              E: {categoryID: result.E.categoryID, amount: result.E.amount, prediction: result.E.prediction.concat(o)}}))
          }
          if(o.ID[0] === "F"){
            setResult((result) => ({
              ...result,
              F: {categoryID: result.F.categoryID, amount: result.F.amount, prediction: result.F.prediction.concat(o)}}))
          }
        }
      },
    })
  }

  useEffect(() => {
    getCSV()
  }, [])

  return result

}

export default useReadCSV
