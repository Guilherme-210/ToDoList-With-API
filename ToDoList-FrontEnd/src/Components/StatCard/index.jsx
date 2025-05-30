import styles from "./StatCard.module.css"

export function StatCard({ data: { label, value, className } }) {
  return (
    <>
      <div className={`${styles.statCard} ${styles[className]}`}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </>
  )
}
