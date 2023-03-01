
interface TextFieldProps { 
  placeholder: string;
  type: string;
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({props} : {props: TextFieldProps}) => {
  return (
    <input type={props.type} onChange={props.onChange} placeholder={props.placeholder} />
  )
}

export default TextField
