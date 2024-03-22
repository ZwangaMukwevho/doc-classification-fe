
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
import { PushCategoriesData } from '@/logic/firebaseUtils';
import { useRouter } from 'next/router';
import { saveCategoties, saveCode } from '@/logic/authenticationUtils';
import { modifyPath } from '@/logic/redirectionUtils';
import { createUserData } from '@/ajax/createUserData';

export default function Categories() {

  const router = useRouter();
  const { slug } = router.query;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const MySwal = withReactContent(Swal);
  const [count, setCount] = useState(0);
  const [categories, setCategories] = useState(
      [
        {category: 'Education', description: 'This category can include documents related to educational pursuits, such as school transcripts, certificates, course materials, and research papers'},
        {category: 'Finance', description: 'Finance-related documents can cover a wide range of items, including bank statements, tax records, invoices, quotes, receipts, and investment reports'},
        {category: 'Work', description: 'Work-related documents can involve project plans, reports, emails, resumes, and other materials directly related to your professional life'},
        {category: 'Personal', description: 'This category can cover a wide range of personal documents, from family photos to personal notes, travel itineraries, and more. Give your reply as one word answer from the given categories'},
        {category: 'Health', description: 'Health-related documents can include medical records, insurance claims, prescriptions, and other materials related to your health and well-being'},
        {category: 'Entertainment', description: 'Entertainment-related documents can include movie tickets, concert programs, and other materials related to your leisure activities'},
        {category: 'default', description: 'Any other document that does not fit the above should fall in this category'}
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
        router.push(modifyPath(currentUrl,'next'));
      } 
      else if(movement === 'back' && count > 0){
        setCount(count - 1);
        router.push(modifyPath(currentUrl,'back'));
      }
  };

  useEffect(() => {
    if (count === 3) {
      // Trigger SweetAlert when count reaches 3
      createUserData(categories)
      .then(() => {
        MySwal.fire({
          title: 'Submitted!',
          text: 'You have completed the document classification journey.',
          icon: 'success',     
        }).then(() => {
          // setCount(0);
          // router.push('/categories/0/null');
        })
      })
      .catch(()=> {
        MySwal.fire({
          title: 'Failure!',
          text: 'An error occured while submitting the data.',
          icon: 'error',
        }).then(() => {
          // setCount(0);
          // router.push('/categories/0/null');
        });
      });
      
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
      saveCode(parsedCount,slug, categories);
    }

  }, [count, slug]);

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className={`w-full ${count !== 0 ? 'h-[600px]' : ''} flex flex-col gap-4 items-center justify-center`}>
      <categoriesContext.Provider value={{ categories, setCategories }}>
          {count === 0 && <CategoriesForm onSaveData />}
      </categoriesContext.Provider>
      {count === 1 && <SignInCard service ={'Gmail'} imgSrc={'../../../images/gmail_banner.jpg'} />}
      {count === 2 && <SignInCard service={'Google drive'} imgSrc={'../../../images/google_drive.jpg'}/>}
      </div>
      
      <div className="flex gap-4 items-center">
        <Button 
          isDisabled={count <= 0}
          color="primary" 
          variant="bordered" 
          endContent={<FontAwesomeIcon icon={faCircleLeft} />} 
          onClick={() => handleCount('back')}>
          Back
        </Button>    
        
        <Button 
          isDisabled={count >= 2}
          color="primary" 
          startContent={<FontAwesomeIcon icon={faCircleRight} />} 
          onClick={() => handleCount('next')}>
          Next
        </Button>
      </div>
    </div>
  )
}