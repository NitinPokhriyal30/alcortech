import * as React from 'react'

export function EditableInput({ children, ...props }) {
  const [isEditing, setIsEditing] = React.useState(false)
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    document.addEventListener('click', (ev) => {
      setIsEditing(false)
    })
  }, [])

  return (
    <div ref={inputRef}>
      {isEditing ? (
        <input
          autoFocus
          onClick={(ev) => ev.stopPropagation()}
          onKeyDown={(ev) => {
            if (ev.key == 'Enter' || ev.key == 'Escape') setIsEditing(false)
          }}
          style={{width: "100%"}}
          {...props}
        />
      ) : (
        <p
          onClick={(ev) => {
            ev.stopPropagation()
            setIsEditing(true)
          }}
          style={{ cursor: 'text' }}
          {...props}
        >
          {props.value}
        </p>
      )}
    </div>
  )
}
