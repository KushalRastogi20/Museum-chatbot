// 'use client';
// import { useState } from 'react';

// export default function Signup() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();
//       setMessage(data.message);
//       if (response.ok) {
//         setForm({ name: '', email: '', password: '' });
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//       console.error('Signup error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Signup</h1>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
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
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';
import styles from "@/app/page.module.css"; // Import your CSS module

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        setForm({ name: '', email: '', password: '' });
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Signup error:', error);
    }
  };

  return (
    <main className={styles.inmain1}>
      <div className={styles.inmain}>
        <div className={styles.inleft}>
          <h1 className={styles.inhead}>Create an Account</h1>
          {message && <p className={styles.message}>{message}</p>}
          <form onSubmit={handleSubmit} className={styles.inform}>
            <label className={styles.uplabel}>Name</label>
            <input
              type="text"
              name="name"
              className={styles.ininput}
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label className={styles.uplabel}>Email</label>
            <input
              type="email"
              name="email"
              className={styles.ininput}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label className={styles.uplabel}>Password</label>
            <input
              type="password"
              name="password"
              className={styles.ininput}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.inbutton}>Signup</button>
            <p className={styles.inloginLink}>
              Already have an account? <a href="#">Login</a>
            </p>
          </form>
        </div>
        <div className={styles.inimageContainer}>
          <img src="/museumup.jpeg" alt="Decorative" className={styles.inimage} />
        </div>
      </div>
    </main>
  );
}
