import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useEffect, useState} from "react";


interface PredictedItem {
  productID: string;
  amount: string;
  date: number;
}

interface RowData {
  category_ID: string;
  amount: number;
  prediction: PredictedItem[];
}

function useCreateData2 (category_ID: string, amount: number) {

  const [data, setData] = useState<RowData | null>(null);

  useEffect(() => {
    // Path to your CSV file
    const csvFilePath = './Out tables/B_placeholder.csv';

    const fetchData = async () => {
      try {
        const response = await fetch(csvFilePath);
        const text = await response.text();

        // Parse CSV data manually
        const rows = text.split('\n').map((line) => line.split(','));
        const headers = rows[0];

        const predictedItems: PredictedItem[] = rows.slice(1).map((row) => {
          return {
            productID: row[headers.indexOf('ID')],
            amount: row[headers.indexOf('AMOUNT')],
            date: parseFloat(row[headers.indexOf('DATE')]),
          };
        });

        // Set the data state
        setData({
          category_ID: category_ID,
          amount: amount,
          prediction: predictedItems,
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV file:', error);
      }
    };

    fetchData();
  }, [category_ID, amount]);

  return data;
}



function createData(
  category_ID: string,
  amount: number,
) {
  return {
    category_ID,
    amount,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: RowData }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{ color: '#86efac' }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right" style={{ color: '#86efac' }}>
          {row.category_ID}
        </TableCell>
        <TableCell align="right" style={{ color: '#86efac' }}>{row.amount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" style={{ color: '#86efac' }}>
                Separated by product
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: '#86efac' }}>Product ID</TableCell>
                    <TableCell style={{ color: '#86efac' }}>Units</TableCell>
                    <TableCell align="right" style={{ color: '#86efac' }}>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.prediction.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" style={{ color: '#86efac' }}>
                        {historyRow.date}
                      </TableCell>
                      <TableCell style={{ color: '#86efac' }}>{historyRow.productID}</TableCell>
                      <TableCell align="right" style={{ color: '#86efac' }}>{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function ProductsTable() {
  const rows = [
    useCreateData2('B', 159),
    useCreateData2('C', 237),
    useCreateData2('E', 262),
    useCreateData2('F', 305),
  ];

  return (
    <TableContainer className="max-h-60 w-full border rounded border-green-300 overflow-scroll">
      <Table aria-label="collapsible table" >
        <TableHead >
          <TableRow>
            <TableCell />
            <TableCell align="right" style={{ color: '#86efac' }}>Category</TableCell>
            <TableCell align="right" style={{ color: '#86efac' }}>Total amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            row === null ? (
              <Row key="ERROR" row={{category_ID: "ERROR", amount: 0, prediction: []}} />
            ) : (
              <Row key={row.category_ID} row={row} />
            )
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
