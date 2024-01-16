import React from "react";
import CustomTableRow from "./CustomTableRow";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input} from "@nextui-org/react";
import Buttons from "./Buttons";

export const CategoriesForm = () => {

  const categoriesNum = [1,2,3,4,5,6,7];

  return (
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Select 7 Email Categories</TableColumn>
        </TableHeader>
        <TableBody>
          {categoriesNum.map((num) => (
            CustomTableRow({key: num,label: num})
          ))}
        </TableBody>
      </Table>    
  );
}
