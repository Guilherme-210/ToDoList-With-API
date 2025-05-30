import ButtonsFilter from "../ButtonsFilter"
import CardTaskList from "../CardTaskList"
import FilterButton from "../FilterButton"
import TaskStats from "../TaskStats"
import styles from "./List.module.css"

export default function List() {
  return (
    <div>
      <div>
        <ButtonsFilter />
      </div>

      <TaskStats />

      <ul className={styles.todoList}>
        <FilterButton
          label={`Ordenar 🔽`}
          // label={`Ordenar ${isAsc ? "🔼" : "🔽"}`}
          // onClick={order}
          className="orderTasksBtn"
        />

        {tableTodo.map((task) => {
          return <CardTaskList task={task} key={task.id} />
        })}
      </ul>
    </div>
  )
}

const tableTodo = [
  {
    id: 1,
    completed: false,
    title: "teste task 1",
    createdAt: "",
    comment: "comentario",
    completionDate: "",
  },
  {
    id: 2,
    completed: true,
    title: "teste task 2",
    createdAt: "",
    comment: "isso e um comentario",
    completionDate: "",
  },
]
