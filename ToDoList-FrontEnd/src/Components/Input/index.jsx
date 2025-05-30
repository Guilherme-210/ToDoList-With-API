import styles from "./Input.module.css"

export function Input({
  dateInput: { label, type, name, id, placeholder, value, onChange, required },
}) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  )
}
