import s from '../Dialogs.module.css';
import { useForm } from "react-hook-form";

const DialogsForm = (props) => {
  const { register, handleSubmit, watch } = useForm();
  const newMessageText = watch('messageText');

  const onSubmit = () => {
    props.addMessage(newMessageText);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className={s.textarea}
            placeholder='Enter your message'
            { ...register('messageText') }
          ></textarea>
          <button type='submit'
            className={s.send_btn}
          >Send</button>
    </form>
  );
};

export default DialogsForm;