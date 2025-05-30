import { useState, useEffect } from "react"
import Form from "../Components/Form"
import List from "../Components/ToDoList"
import Header from "../Components/Header"
import styles from "./TodoList.module.css"
import "../style/App.css"

// import { useTasks } from "../Hooks/useTasks.js"

export default function TodoList() {
  const [isDarkMode, setIsDarkMode] = useState(false)


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.remove("dark-theme")
    }
  }, [isDarkMode])

  return (
    <>
      <Header onClick={setIsDarkMode} isDarkMode={isDarkMode} />
      <main>
        <section className={styles.todoInput}>
          <Form
          />
        </section>
        <section>
          <List
          />
        </section>
      </main>
    </>
  )
}
