
import React, { useState, useEffect } from 'react'; 
import { CategoriesForm } from "@/components/forms/CategoriesForm"
import { SignInCard } from "@/components/forms/SignInCard"
import {Button} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons'
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { categoriesContext } from '@/logic/context/categoriesContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { PushCategoriesToFirebase } from '@/logic/firebaseUtils';
import { useRouter } from 'next/router';
import { saveCode } from '@/logic/authenticationUtils';

export default function Categories() {

  const router = useRouter();
  const { slug } = router.query;
  console.log('slugs: ',slug);

  const MySwal = withReactContent(Swal);
  const [count, setCount] = useState(0);
  const [categories, setCategories] = useState(
      [
        'Education',
        'Finance',
        'Work',
        'Personal',
        'Health',
        'Home',
        'Entertainment',
      ]
    );

  const handleCount = (movement) => {
      // validations
      const emptyStringCount = categories.filter((category) => category === '').length;
      if(count === 0 && emptyStringCount !== 0){
        MySwal.fire({
          title: 'Incomplete!',
          text: 'Ensure you have entered 7 categories.',
          icon: 'error'
        })
        return
      }

      if(movement === 'next'){
        setCount(count + 1);
      } 
      else if(movement === 'back' && count > 0){
        setCount(count - 1);
      }
  };

  useEffect(() => {
    if (count === 3) {
      // Trigger SweetAlert when count reaches 3
      PushCategoriesToFirebase(categories);
      setCount(0);
      setCategories(Array(7).fill(''));
    }

    if (slug && Array.isArray(slug) && slug.length > 0) {
      // Extract the first item from the slug array and convert it to a number
      const firstSlug = slug[0];
      const parsedCount = parseInt(firstSlug, 10); // Parse the string to a base-10 integer
      if (!isNaN(parsedCount)) {
        // If parsing is successful, update the count state
        setCount(parsedCount);
      }

      saveCode(parsedCount,slug)
    }

  }, [count, slug]);

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className='w-full h-[600px] flex flex-col gap-4 items-center justify-center'>
      <categoriesContext.Provider value={{ categories, setCategories }}>
          {count === 0 && <CategoriesForm onSaveData />}
      </categoriesContext.Provider>
      {count === 1 && <SignInCard service ={'Gmail'} imgSrc={'../../../images/gmail_banner.jpg'} />}
      {count === 2 && <SignInCard service={'Google drive'} imgSrc={'../../../images/google_drive.jpg'}/>}
      </div>
      
      <div className="flex gap-4 items-center">
        <Button 
          disabled={count <= 0}
          color="primary" 
          variant="bordered" 
          endContent={<FontAwesomeIcon icon={faCircleLeft} />} 
          onClick={() => handleCount('back')}>
          Back
        </Button>    
        
        <Button 
          disabled={count >= 3}
          color="primary" 
          startContent={<FontAwesomeIcon icon={faCircleRight} />} 
          onClick={() => handleCount('next')}>
          Next
        </Button>
      </div>
    </div>
  )
}