
import React, { useState } from 'react'; 
import { CategoriesForm } from "@/components/forms/CategoriesForm"
import { SignInCard } from "@/components/forms/SignInCard"
import {Button} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons'
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons'

export default function Categories() {

  const [count, setCount] = useState(0);

  const handleCount = (movement) => {
      if(movement === 'next'){
        setCount(count + 1);
      } 
      else if(movement === 'back' && count > 0){
        setCount(count - 1);
      }
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">

      <div className='w-full h-[600px] flex flex-col gap-4 items-center justify-center'>
      {count === 0 && <CategoriesForm />}
      {count === 1 && <SignInCard service ={'Gmail'} imgSrc={'../../../images/gmail_banner.jpg'} />}
      {count === 2 && <SignInCard service={'Google drive'} imgSrc={'../../../images/google_drive.jpg'}/>}
      </div>
     
      
      <div className="flex gap-4 items-center">
        <Button 
          color="primary" 
          variant="bordered" 
          endContent={<FontAwesomeIcon icon={faCircleLeft} />} 
          onClick={() => handleCount('back')}>
          Back
        </Button>    
        
        <Button 
          color="primary" 
          startContent={<FontAwesomeIcon icon={faCircleRight} />} 
          onClick={() => handleCount('next')}>
          Next
        </Button>
      </div>
    </div>
  )
}