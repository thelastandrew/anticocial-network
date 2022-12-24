import s from '../Dialogs.module.css';
import { useForm } from "react-hook-form";

const DialogsForm = (props) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const newMessageText = watch('messageText');

  const onSubmit = () => {
    props.addMessage(newMessageText);
    reset();
    console.log(errors.newMessageText);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className={s.textarea}
            placeholder='Enter your message'
            { ...register('messageText', { required: true }) }
          />
          <p className={s.errorMessage}>{errors.messageText && 'Message is required'}</p>
          <button
            type='submit'
            className={s.send_btn}
            disabled={errors.messageText}
          >Send</button>
    </form>
  );
};

export default DialogsForm;