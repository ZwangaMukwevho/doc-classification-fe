
import { CategoriesForm } from "@/components/forms/CategoriesForm"
import { Buttons } from "@/components/forms/Buttons"

export default function Categories() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <CategoriesForm/>
        <Buttons/>
    </div>
    
  )
}