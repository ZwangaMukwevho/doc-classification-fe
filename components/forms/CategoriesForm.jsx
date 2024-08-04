import React, { useState, useContext } from "react";
import { categoriesContext } from "@/logic/context/categoriesContext";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Textarea} from "@nextui-org/react";

export const CategoriesForm = () => {

  const categoriesNum = [1,2,3,4,5,6];
  const { categories, setCategories } = useContext(categoriesContext);

  const handleInputChange = (index, category, value) => {
    const newInputs = [...categories];
    newInputs[index][category] = value;
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
            <div className="flex gap-4 items-center">
              <Textarea
                type=""
                variant="bordered"
                label="Category"
                labelPlacement="outside"
                maxRows={4}
                minRows={4}
                placeholder=""
                value={categories[index]['category']}
                onChange={(e) => handleInputChange(index,'category', e.target.value)}
                className="sm:w-3/10 lg:w-1/5" 
              />
              <Textarea
                type="email"
                variant="bordered"
                label="Description"
                placeholder=""
                labelPlacement="outside"
                maxRows={4}
                minRows={4}
                value={categories[index]['description']}
                onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                className="sm:w-7/10 lg:w-4/5" 
              />
            </div>
          </TableCell>
        </TableRow>
        ))}

        </TableBody>
      </Table>    
  );
}
