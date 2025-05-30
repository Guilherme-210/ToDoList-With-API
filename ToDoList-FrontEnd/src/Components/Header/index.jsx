import styles from "./header.module.css"

export default function Header({ onClick, isDarkMode }) {
  return (
    <header className={styles.header}>
      <h1>ToDo List</h1>
      <button
        type="button"
        className={styles.themeToggleBtn}
        onClick={() => onClick(!isDarkMode)}
      >
        {isDarkMode ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
      </button>
    </header>
  )
}
