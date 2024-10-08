import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
import { Controller } from 'react-hook-form'
export default function RTE({
    name,control,label,
    defaultValue=""
}) {
  return (
  <>
  <div
  className='w-full'>
    {label &&<label className='inline-block mb-1 pl-1'>{label}</label>}
<Controller
name={name|| content}
control={control}
render={({field : {onChange}})=>{
<Editor
initialValue='default value ' 
init={{
    height:500,
    menubar:true,
        plugins:[
            'advilst autolink list link  image charmap print preview anchor',
            'searchreplace  visualblocks code fullscreen ',
            'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
        'undo redo|formatselect|bolditalic|underline|\
        alignleft aligncenter alignright alignjustify|\
        bullist numllist outdent indent|removeformat|  help'
}}
onEditorChange={onChange}
/>
}}
/>



  </div>
  </>
)
}