import { useRouter } from 'next/router';
import { SignInCard } from "@/components/forms/SignInCard"

export default function Signin() {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log('id: ',id);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <SignInCard/>
    </div>
    
  )
}