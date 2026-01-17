import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    agreeToTerms: false,
    newsletter: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const getPasswordStrength = (password) => {
    if (password.length === 0) return '';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };
  
  const getStrengthColor = (strength) => {
    if (strength === 'Weak') return 'text-red-500';
    if (strength === 'Medium') return 'text-yellow-500';
    if (strength === 'Strong') return 'text-green-500';
    return '';
  };
  
  const passwordStrength = getPasswordStrength(formData.password);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = () => {
    if (!formData.username || !formData.email || !formData.password || 
        !formData.confirmPassword || !formData.country || !formData.agreeToTerms) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Account created successfully!');
  };
  
  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    alert('Google sign-in clicked');
  };
  
  const handleGithubSignIn = () => {
    console.log('GitHub sign in clicked');
    alert('GitHub sign-in clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        
        <div className="p-8">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
                <path d="M30 70L40 60L50 65L60 55L70 60L80 50" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 70H80V50" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M45 45L50 40L55 45" fill="#000"/>
                <text x="50" y="90" textAnchor="middle" className="font-bold text-xl" fill="#000">SKILL UP</text>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">SKILL UP</h1>
            <p className="text-gray-600">Create your educational account and unlock endless possibilities</p>
          </div>

          <div className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.password && (
                <p className={`text-xs mt-1 ${getStrengthColor(passwordStrength)}`}>
                  Password strength: {passwordStrength}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                </span>
              </label>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Subscribe to our newsletter for updates and exclusive offers
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition duration-200 shadow-sm"
            >
              Create Account
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>

            <button
              onClick={handleGithubSignIn}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              Github
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}