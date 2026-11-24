import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scale, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setError('Registration is not yet connected to a backend. This is a UI preview.');
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
            <h1 className="text-2xl font-extrabold text-foreground">Create your account</h1>
            <p className="text-muted-foreground text-sm mt-1">Join Aadhikar to save guides, find lawyers, and more</p>
          </div>

          <form onSubmit={handleSubmit} className="trust-card p-6 md:p-8 space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-alert-pale text-alert text-sm">{error}</div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full h-11 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy" />
              </div>
            </div>
            <div>
              <label htmlFor="reg-email" className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full h-11 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy" />
              </div>
            </div>
            <div>
              <label htmlFor="reg-password" className="block text-sm font-semibold text-foreground mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input id="reg-password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full h-11 pl-10 pr-10 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-semibold text-foreground mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full h-11 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy" />
              </div>
            </div>
            <button type="submit"
              className="w-full h-11 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy-light transition-colors flex items-center justify-center gap-2">
              Create Account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-navy font-semibold hover:text-saffron transition-colors">Sign in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
