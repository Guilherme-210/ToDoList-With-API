import { Input } from "../Input"
import styles from "./Form.module.css"

export default function Form({
  // formData: { task, comment, completionDate, completionTime },
  // onChange,
  onSubmit,
}) {
  const dateInputs = [
    {
      label: "Qual é a tarefa:",
      type: "text",
      name: "task",
      id: "task",
      // value: task,
      // onChange: onChange,
      placeholder: "Nome da task...",
      required: true,
    },
    {
      label: "Comentário sobre a tarefa:",
      type: "text",
      name: "comment",
      id: "comment",
      // value: comment,
      // onChange: onChange,
      placeholder: "Sober a task...",
      required: true,
    },
    {
      label: "Completar até:",
      type: "datetime-local",
      name: "completionDate",
      id: "completionDate",
      // value: completionDate,
      // onChange: onChange,
    },
  ]

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        {dateInputs.map((dateInput) => (
          <Input dateInput={dateInput} key={dateInput.name} />
        ))}

        <button className={styles.btnSubmit} type="submit">
          Salvar
        </button>
      </form>
    </>
  )
}
