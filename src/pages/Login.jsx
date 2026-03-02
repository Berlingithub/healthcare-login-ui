import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error on change
    setErrors(prev => ({
      ...prev,
      [name]: "",
    }));
  };

  // validate
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, email: prev.email.trim() }));
    if (isLoading) return;

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setSuccessMsg('Login successful! Redirecting...');
  };

  // UI
  return (
    <AuthLayout>
    
      <div
        className="w-full bg-white rounded-2xl px-8 py-10 transition-all duration-300 hover:shadow-2xl"
        style={{
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.10), 0 2px 10px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-400 mt-2">Welcome back! Please enter your details</p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
         {/* custom validation handles this */}
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            autoFocus
            required
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />

          {/* remember + forgot */}
          <div className="flex justify-between items-center text-sm pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600 select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 border-gray-300 rounded accent-red-500 cursor-pointer hover:ring-2 hover:ring-red-300 hover:ring-offset-1 transition-all duration-200"
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={() => alert('Password reset flow coming soon!')}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Forgot password?
            </button>
          </div> 

          {successMsg && (
            <p className="text-green-500 text-sm text-center font-medium">
              {successMsg}
            </p>
          )}


          <div className="pt-3">
            <PrimaryButton
              type="submit"
              loading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </PrimaryButton>
          </div>

        
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setFormData({ email: '', password: '' });
                setErrors({});
                setSuccessMsg('');
                setRememberMe(false);
              }}
              disabled={isLoading}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed underline underline-offset-2"
            >
              Clear form
            </button>
          </div>
        </form>

        {/* footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-red-500 font-semibold hover:text-red-700 transition-colors duration-200"
          >
            Sign up
          </Link>
          </p>
        </div>

      </div>
    </AuthLayout>
  );
};

export default Login;
