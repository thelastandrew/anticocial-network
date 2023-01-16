import s from './Login.module.css';
import { useForm } from 'react-hook-form';

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    const { email, password, rememberMe } = data;
    props.login(email, password, rememberMe, setError);
    reset();
  };

  const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailErrorMessage =
    errors.email?.type === 'pattern'
      ? 'Email format is not valid!'
      : 'Email is required!';
  const passwordErrorMessage =
    errors.password?.type === 'minLength'
      ? 'Password is too short!'
      : 'Password required!'

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className={errors.email && s.errorField}
          placeholder="email"
          type="email"
          {...register('email', {
            required: true,
            pattern: emailRegExp,
          })}
          onFocus={()=>clearErrors('server')}
        />
        {errors.email && <p className={s.errorMessage}>{emailErrorMessage}</p>}
      </div>
      <div>
        <input
          className={errors.password?.type === 'required'
            ? s.errorField
            : ''
          }
          placeholder="password"
          type="password"
          {...register('password', { required: true, minLength: 4 })}
          onFocus={()=>clearErrors('server')}
        />
        {errors.password &&  <p className={s.errorMessage}>{passwordErrorMessage}</p>}
      </div>
      {errors.server && <p className={s.errorMessage}>{errors.server.message}</p>}
      <div>
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            {...register('rememberMe')}
          />
          Remember me
        </label>
      </div>
      <div>
        <button className={s.submitBtm} type="submit">
          LogIn
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
