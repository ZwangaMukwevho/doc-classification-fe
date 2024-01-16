
import React from 'react';
import { TableRow, TableCell, Input} from "@nextui-org/react";

const CustomTableRow = ({ key, label }) => {

    return (
      <TableRow key={key}>
        <TableCell>
          <Input type="email" variant="underlined" label={label} placeholder="" />
        </TableCell>
      </TableRow>
    );
  };
  
  export default CustomTableRow;