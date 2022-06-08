import  {useState} from 'react';

const useForm = (initialStateForm={inputSearch:''}):{form:{inputSearch:string},handleInputChange:Function,handleReset:Function} => {

    const [form, setForm] = useState(initialStateForm);

    type inputType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
    
    const handleInputChange = (e:inputType) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleReset = () => {
        setForm(initialStateForm);
    }

    return {form,handleInputChange, handleReset};
}

export default useForm;