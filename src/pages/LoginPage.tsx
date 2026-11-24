import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scale, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Future: Connect to auth API
    setError('Authentication is not yet connected to a backend. This is a UI preview.');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-4">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-extrabold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground text-sm mt-1">Sign in to your Aadhikar account</p>
          </div>

          <form onSubmit={handleSubmit} className="trust-card p-6 md:p-8 space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-alert-pale text-alert text-sm">{error}</div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full h-11 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-sm font-semibold text-foreground">Password</label>
                <Link to="/forgot-password" className="text-xs text-navy font-semibold hover:text-saffron transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full h-11 pl-10 pr-10 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-navy font-semibold hover:text-saffron transition-colors">Sign up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
