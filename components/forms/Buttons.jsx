import React from "react";
import {Button} from "@nextui-org/react";
import {CameraIcon} from './CameraIcon';

import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons'
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons'


export const Buttons = () => {
  return (
    <div className="flex gap-4 items-center">
      <Button color="primary" variant="bordered" endContent={<FontAwesomeIcon icon={faCircleLeft}/>}>
        Next
      </Button>    
      <Button color="primary" startContent={<FontAwesomeIcon icon={faCircleRight}/>}>
        Back
      </Button>
    </div>
  );
}