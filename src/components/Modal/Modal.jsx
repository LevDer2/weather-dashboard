import styles from './Modal.module.css';

export const Modal = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Sign up</h2>

        <form className={styles.form}>
          <label className={styles.label}>
            Username
            <input className={styles.input} type="text" name="username" placeholder="Username" />
          </label>

          <label className={styles.label}>
            E-Mail
            <input className={styles.input} type="email" name="email" placeholder="E-Mail" />
          </label>

          <label className={styles.label}>
            Password
            <input className={styles.input} type="password" name="password" placeholder="Password" />
          </label>

          <button className={styles.button} type="submit">
            Sign up
          </button>
        </form>

        <p className={styles.loginText}>
          Already have an account? <a className={styles.loginLink} href="/">Log in</a>
        </p>
      </div>
    </div>
  );
};
