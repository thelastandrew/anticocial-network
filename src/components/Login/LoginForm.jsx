import s from './Login.module.css';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder='email' type='email' {...register('email', { required: true })}/>
      </div>
      <div>
        <input placeholder='password' type='password' {...register('password', { required: true })}/>
      </div>
      <div>
        <input type='checkbox' {...register('rememberMe')}/>
        Remember me
      </div>
      <div>
        <button className={s.submitBtm} type='submit'>LogIn</button>
      </div>
    </form>
  );
};

export default LoginForm;
