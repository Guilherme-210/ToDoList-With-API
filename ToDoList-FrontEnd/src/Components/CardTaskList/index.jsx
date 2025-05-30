import InputCheckbox from "../InputCheckbox"
import styles from "./CardTaskList.module.css"

export default function CardTaskList({
  task: {
    id,
    completed,
    title,
    createdAt,
    comment,
    completionDate,
  },
  handleDelete,
  onChange,
  deletingItem,
}) {
  function formatarData(dataString) {
    if (dataString.includes("-")) {
      const [ano, mes, dia] = dataString.split("-")
      return `${dia}/${mes}/${ano}`
    }
    return dataString
  }

  function getStatusPrazo(dataString) {
    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)

    const [ano, mes, dia] = dataString.split("-")
    const dataTarefa = new Date(`${ano}-${mes}-${dia}`)
    dataTarefa.setHours(24, 0, 0, 0)

    if (dataTarefa > hoje) {
      return styles.noPrazo
    } else if (dataTarefa.getTime() == hoje.getTime()) {
      return styles.vencendo
    } else {
      return styles.vencida
    }
  }

  return (
    <li>
      <div
        className={`${styles.todoCard} ${completed ? styles.completed : ""} ${
          completed ? styles.completed : getStatusPrazo(completionDate)
        } ${deletingItem === id ? styles.deletingItem : ""}`}
        id={`cadtTask_${id}`}
      >
        <TodoHeader title={title} createdAt={createdAt} />

        <TodoMain comment={comment} />

        <TodoFooter
          id={id}
          completed={completed}
          completionDate={completionDate}
          formatarData={formatarData}
          handleDelete={handleDelete}
          onChange={onChange}
        />
      </div>
    </li>
  )
}

export function TodoFooter({
  id,
  completed,
  completionDate,
  formatarData,
  handleDelete,
  onChange,
}) {
  return (
    <div className={styles.todoFooter}>
      <InputCheckbox id={id} completed={completed} onChange={onChange} />

      <p className={styles.deadline}>
        {completionDate ? `Até: ${formatarData(completionDate)} ` : ""}
      </p>

      <button className={styles.iconBtn} onClick={() => handleDelete(id)}>
        🗑️
      </button>
    </div>
  )
}

export function TodoHeader({ title, createdAt }) {
  return (
    <div className={styles.todoHeader}>
      <h3>{title}</h3>
      <p className={styles.date}>{createdAt}</p>
    </div>
  )
}

export function TodoMain({ comment }) {
  return (
    <div className={styles.todoMain}>
      <p className={styles.comment}>{comment}</p>
    </div>
  )
}
