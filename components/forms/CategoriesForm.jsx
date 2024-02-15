import React, { useState, useContext } from "react";
import { categoriesContext } from "@/logic/context/categoriesContext";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input} from "@nextui-org/react";

export const CategoriesForm = () => {

  const categoriesNum = [1,2,3,4,5,6,7];
  const { categories, setCategories } = useContext(categoriesContext);

  const handleInputChange = (index, value) => {
    const newInputs = [...categories];
    newInputs[index] = value;
    setCategories(newInputs);
  };

  return (
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Confirm or edit your 7 classification categories</TableColumn>
        </TableHeader>
        <TableBody>
          
        {categoriesNum.map((num, index) => (
          <TableRow key={num}>
            <TableCell>
              <Input
                type="email"
                variant="underlined"
                label={num}
                placeholder=""
                value={categories[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </TableCell>
          </TableRow>
        ))}

        </TableBody>
      </Table>    
  );
}
