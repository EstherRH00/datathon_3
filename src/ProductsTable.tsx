import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import Papa from "papaparse";

interface CsvDataRow {
  ID: string;
  AMOUNT: string;
  DATE: string;
}

interface ProductsTableProps {
  csvInfo: string;
}

export default function ProductsTable({ csvInfo }: ProductsTableProps) {
  const [tableData, setTableData] = useState<CsvDataRow[]>([]);
  const [csvContent, setCSVContent] = useState<string>("");

  useEffect(() => {
    const fetchCsvContent = async () => {
      try {
        const response = await fetch(`/datathon_3/tables/${csvInfo}`); // Adjust the path based on your project structure
        if (response.ok) {
          const content = await response.text();
          setCSVContent(content);
          console.log(content);
        } else {
          console.error("Failed to fetch CSV content:", response.status);
          console.log("not found");
        }
      } catch (error) {
        console.error("Error fetching CSV content:", error);
      }
    };

    fetchCsvContent();
  }, [csvInfo]);

  useEffect(() => {
    parseCsvData();
    console.log("parsing data");
  }, [csvContent]);

  const parseCsvData = () => {
    Papa.parse<CsvDataRow>(csvContent, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        setTableData(result.data);
      },
    });
  };
  console.log(csvInfo);
  console.log(tableData);

  return (
    <TableContainer className="max-h-60 w-full border rounded border-green-300 overflow-scroll">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {tableData.length > 0 &&
              Object.keys(tableData[0]).map((header) => (
                <TableCell
                  key={header}
                  align="right"
                  style={{ color: "#86efac" }}
                >
                  {header}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((value, colIndex) => (
                <TableCell key={colIndex}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
