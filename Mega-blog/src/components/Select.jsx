import React,{useId} from 'react'

function Select({
  optios,
  label,
  className,
  ...props

},ref)
 {
  const id=useId()

  return (
    <div className='w-full'>
      {label &&<label htmlFor={id} className=''></label>}
  <select 
  {...props}
  id={id}
  ref={ref}
  className={`px-3 py-2 rounded-lg bg-white text-color-white outline-none
  focus:bg-gray-50 duration-200 border broder-gray-200 w-full${className}`}
  >{option?.map((opotion)=>{
    <opotion>
      {option}
    </opotion>
  })}         </select>    
      </div>
  )
}

export default React.forwardRef(Select)