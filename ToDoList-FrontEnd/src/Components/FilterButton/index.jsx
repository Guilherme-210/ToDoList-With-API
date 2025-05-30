import styles from "./FilterButton.module.css"

export default function FilterButton({ label, onClick, isActive, className }) {
  return (
    <button
      className={`${styles.filterButton} ${styles[className]} ${
        isActive ? styles.active : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
