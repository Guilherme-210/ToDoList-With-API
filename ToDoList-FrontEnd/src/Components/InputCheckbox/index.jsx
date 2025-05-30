import styles from "./InputCheckbox.module.css"

export default function InputCheckbox({ id, completed, onChange }) {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onChange(id)}
      />
      <span className={styles.checkmark}>
        {completed ? "Concluido" : "A fazer"}
      </span>
    </label>
  )
}
