import FilterButton from "../FilterButton"

export default function ButtonsFilter({ setFilter, filter, clearStorageOnClick }) {
  const filterButtons = [
    {
      id: 1,
      label: "Todas",
      value: () => setFilter("all"),
      classe: "all",
      className: "buttonAll",
    },
    {
      id: 2,
      label: "Feitas",
      value: () => setFilter("complet"),
      classe: "complet",
      className: "buttonComplet",
    },
    {
      id: 3,
      label: "A Fazer",
      value: () => setFilter("pending"),
      classe: "pending",
      className: "buttonPending",
    },
    {
      id: 4,
      label: "Limpar Tarefas",
      value: clearStorageOnClick,
      className: "deletButton",
    },
  ]

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    margin: "2rem 0",
  }

  return (
    <div style={style}>
      {filterButtons.map(({ id, label, value, classe, className }) => (
        <FilterButton
          key={id}
          label={label}
          onClick={value}
          isActive={filter === classe}
          className={className}
        />
      ))}
    </div>
  )
}
