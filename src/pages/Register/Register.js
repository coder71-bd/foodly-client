import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    processSignUp,
    signInUsingGoogle,
    updateUserProfile,
    setIsLoading,
    setError,
    setUserName,
    error,
  } = useAuth();

  const location = useLocation();

  const history = useHistory();

  const redirect_uri = location.state?.from || '/home';

  const onSubmit = (data) => {
    setUserName(data.name);

    processSignUp(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name);
        history.push(redirect_uri);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignUp = () => {
    signInUsingGoogle()
      .then(() => {
        history.push(redirect_uri);
        setIsLoading(false);
      })
      .then((error) => setError(error.message));
  };

  const handleError = () => {
    setError('');
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 200px)' }}>
      <h3 className="d-3 my-3 text-center text-primary fw-bold">
        Register in Foodly
      </h3>
      <form
        className="form w-50 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 600 }}
      >
        {/* go to login page */}
        <div className="w-75 mx-auto mb-3 mt-2">
          <span className="pe-1">Already registerd?</span>
          <Link to="/login">Login here.</Link>
        </div>
        {/* name of the user */}
        <input
          className="w-75 d-block mx-auto form-control"
          placeholder="name"
          {...register('name', {
            required: 'this is a required field',
            minLength: {
              value: 3,
              message: 'Your name should be at least 3 characters',
            },
            maxLength: {
              value: 20,
              message: "Your name shouldn't exceed 6 characters",
            },
          })}
        />
        {errors.name && (
          <p className="text-danger w-75 mx-auto">{errors.name.message}</p>
        )}

        {/* email of the user */}
        <input
          className="w-75 d-block mx-auto mt-3 form-control"
          placeholder="Email"
          {...register('email', {
            required: 'this is a required field',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Please provide correct email address.',
            },
          })}
        />
        {errors.email && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.email.message}
          </p>
        )}

        {/* password of the user */}
        <input
          type="password"
          placeholder="password"
          className="mt-3 w-75 mx-auto d-block form-control"
          {...register('password', {
            required: 'this field is required',
            pattern: {
              value: /(?=.*[!@#$&*])/,
              message:
                'please provide atleast one special charaters (@, # etc.)',
            },
            minLength: {
              value: 6,
              message: 'Your password should be at least 6 characters',
            },
          })}
        />
        {errors.password && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.password.message}
          </p>
        )}

        {/* show the firebase error */}
        <div className="text-warning text-center" onBlur={handleError}>
          {error}
        </div>

        <input
          className="btn btn-primary my-3 text-white w-50 d-block mx-auto"
          type="submit"
          value="Register"
        />

        <Button
          variant="info"
          className="text-white w-50 d-block mx-auto"
          onClick={handleGoogleSignUp}
          style={{ minWidth: 150 }}
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span className="ms-3">Register With Google</span>
        </Button>
      </form>
    </div>
  );
};

export default Register;
