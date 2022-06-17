import  {useState} from 'react';

const useForm = (initialStateForm={inputSearch:''}):{form:{inputSearch:string},handleInputChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,handleReset:()=>void} => {

    const [form, setForm] = useState(initialStateForm);

    type inputType = React.ChangeEvent<HTMLInputElement>;
    
    const handleInputChange = (e:inputType) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        
    }

    const handleReset = () => {
        setForm(initialStateForm);
    }

    return {form,handleInputChange, handleReset};
}

export default useForm;