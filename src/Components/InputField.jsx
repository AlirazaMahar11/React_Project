import {TextField} from '@mui/material'

export const InputField = (props) => {
  return (
    <div>
        <TextField error {...props} className="w-[100%] h-[60px]" />
    </div>
  )
}


