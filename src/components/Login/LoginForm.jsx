import s from './Login.module.css';
import { useForm } from 'react-hook-form';

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    const { email, password, rememberMe } = data;
    props.login(email, password, rememberMe);
    reset();
  };

  const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const errorMessage =
    errors.email?.type === 'pattern'
      ? 'Email format is not valid!'
      : 'Email is required!';

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
        />
        <p className={s.errorMessage}>{errors.email && errorMessage}</p>
      </div>
      <div>
        <input
          className={errors.password && s.errorField}
          placeholder="password"
          type="password"
          {...register('password', { required: true })}
        />
        <p className={s.errorMessage}>
          {errors.password && 'Password is required!'}
        </p>
      </div>
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
