// 'use client';
// import { useState } from 'react';

// export default function Signin() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const [token, setToken] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const response = await fetch('/api/auth/signin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();
//       setMessage(data.message);
//       if (response.ok) {
//         setToken(data.token); // Store this token in cookies or localStorage for further use
//         setForm({ email: '', password: '' });
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//       console.error('Signin error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Signin</h1>
//       {message && <p>{message}</p>}
//       {token && <p>Token: {token}</p>} {/* For testing; remove this in production */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Signin</button>
//       </form>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';
import styles from "@/app/page.module.css"; // Import your CSS module

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token); // Store the token as needed (localStorage, cookies, etc.)
        setEmail('');
        setPassword('');
      } else {
        setError(data.message); // Show any error messages
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Signin error:', err);
    }
  };

  return (
    <main className={styles.inmain1}>
      <div className={styles.inmain}>
        <div className={styles.inleft}>
          <h1 className={styles.inhead}>Welcome Back!</h1>
          <p className={styles.inintro}>
            Enter your credentials here to access your account
          </p>
          <form onSubmit={handleSubmit} className={styles.inform}>
            <label className={styles.uplabel}>Email</label>
            <input
              className={styles.ininput}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className={styles.uplabel}>Password</label>
            <input
              className={styles.ininput}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className={styles.inforgot}>
              Forgot Password?
            </a>
            <button type="submit" className={styles.inbutton}>
              Login
            </button>
            <p className={styles.inloginLink}>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </form>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <div className={styles.inimageContainer}>
          <img src="/museumin.jpeg" alt="Decorative" className={styles.inimage} />
        </div>
      </div>
    </main>
  );
}
