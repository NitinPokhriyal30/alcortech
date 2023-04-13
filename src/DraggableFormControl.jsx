import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { EditableInput } from './EditableInput'
import { formInputTypeMap } from './SurveryCreatePage'

function DraggableFormControl({ setForm, questionValue, inputElements, index, id, ...props }) {
  return (
    <Draggable index={index} draggableId={id}>
      {(provided) => (
        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
          <div style={{ padding: '0.5rem 1rem' }}>
            <div style={S.formControl}>
              <EditableInput
                onChange={(ev) =>
                  setForm((prev) => {
                    prev[index].question = ev.target.value
                    return [...prev]
                  })
                }
                value={questionValue}
              />

              {props.image && <img src={URL.createObjectURL(props.image)} width="200px" />}

              <div style={{ marginTop: '1rem' }}>
                {inputElements.map((child, child_i) => {
                  const InputControl = formInputTypeMap[child.type]

                  return (
                    <InputControl
                      key={child_i}
                      {...child.props}
                      onChange={(ev) => {
                        setForm((prev) => {
                          prev[index].children[child_i].props.label = ev.target.value
                          return [...prev]
                        })
                      }}
                    />
                  )
                })}

                <button
                  type="button"
                  onClick={() => {
                    setForm((prev) => {
                      prev[index].children.push({
                        type: inputElements[0].type,
                        props: { label: inputElements[0].type },
                      })

                      return [...prev]
                    })
                  }}
                >
                  add {inputElements[0].type}
                </button>

                <label>
                  <input
                    type="file"
                    onChange={(ev) => {
                      setForm((prev) => {
                        prev[index].image = ev.target.files.item(0)
                        return [...prev]
                      })
                    }}
                    accept="image/*"
                    hidden
                  />

                  <span
                    style={{
                      appearance: 'button',
                    }}
                  >
                    add image
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

const S = {
  formControl: {
    padding: '.5rem',
    border: '1px solid #666',
    borderRadius: '6px',
  },
}

export default DraggableFormControl
