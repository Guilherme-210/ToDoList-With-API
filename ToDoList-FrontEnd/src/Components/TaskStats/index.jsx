import { StatCard } from "../StatCard"
import styles from "./TaskStats.module.css"

const stateNull = {
  label: "📋 Totais",
  value: "Você não possui tarefas cadastrada",
  className: "total",
}

export default function TaskStats() {
//   { tasksVal: { TasksAll, TasksComplet, TasksPending }, }
  const tasksVal = { TasksAll: 12, TasksComplet: 5, TasksPending: 7 }

  const statsData = [
    {
      label: "📋 Totais",
      value: tasksVal.TasksAll,
      className: "total",
    },
    {
      label: "✅ Concluídas",
      value: tasksVal.TasksComplet,
      className: "complete",
    },
    {
      label: "🕒 Pendentes",
      value: tasksVal.TasksPending,
      className: "pending",
    },
  ]

  return (
    <>
      <div className={styles.taskStats}>
        {tasksVal.TasksAll > 0 ? (
          statsData.map((statData) => {
            return statData.value > 0 ? (
              <StatCard key={statData.className} data={statData} />
            ) : (
              <></>
            )
          })
        ) : (
          <>
            <StatCard data={stateNull} />
          </>
        )}
      </div>
    </>
  )
}
