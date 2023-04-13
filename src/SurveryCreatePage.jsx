import * as React from 'react'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import DraggableFormControl from './DraggableFormControl'
import { EditableInput } from './EditableInput'

export const formInputTypeMap = {
  textField: (props) => (
    <div>
      <input placeholder="Type here..." {...props} />
    </div>
  ),
  checkBox: (props) => (
    <div style={{ display: 'flex', alignItem: 'center', gap: '.5rem' }}>
      <input {...props} onChange={undefined} readOnly type="checkbox" />

      <EditableInput value={props.label} onChange={props.onChange} />
    </div>
  ),
  radioButton: (props) => (
    <div style={{ display: 'flex' }}>
      <input {...props} onChange={undefined} type="radio" readOnly />

      <EditableInput value={props.label} onChange={props.onChange} />
    </div>
  ),
  select: (props) => (
    <div>
      <select {...props} onChange={undefined} readOnly>
        {props.label.split('\n').map((optionValue) => (
          <option key={optionValue}>{optionValue}</option>
        ))}
      </select>

      <textarea
        style={{ display: 'block', resize:"vertical", height:"200px" }}
        value={props.label}
        onChange={props.onChange}
      ></textarea>
    </div>
  ),
}

const formInputs = Object.keys(formInputTypeMap)

function SurveryCreatePage() {
  const [form, setForm] = React.useState([])

  function reorder({ destination, source }) {
    const startIndex = source.index
    const endIndex = destination.index

    setForm((prev) => {
      const [removed] = prev.splice(startIndex, 1)
      prev.splice(endIndex, 0, removed)

      return [...prev]
    })
  }

  function addFormControl(formInputName) {
    return () => {
      setForm((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          question: 'Question Edit here',
          image: null,
          children: [{ type: formInputName, props: { label: formInputName } }],
        },
      ])
    }
  }

  return (
    <main>
      <h1>Create new survey</h1>

      <div style={S.wrapper}>
        <ul style={S.sideBar}>
          <li>
            <p>Form Control Toolbars</p>
          </li>

          {formInputs.map((formInputName) => (
            <li style={S.sideBarItem} key={formInputName}>
              <button
                style={S.sideBarItemBtn}
                type="button"
                onClick={addFormControl(formInputName)}
              >
                {formInputName}
              </button>
            </li>
          ))}
        </ul>

        {/* Form Builder */}
        <div style={S.formBuilder}>
          <DragDropContext onDragEnd={reorder}>
            <Droppable droppableId="form-builder-1">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {form.map(({ question, children, id, ...rest }, i) => (
                    <DraggableFormControl
                      setForm={setForm}
                      key={id}
                      questionValue={question}
                      inputElements={children}
                      id={id}
                      index={i}
                      {...rest}
                    />
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </main>
  )
}

const S = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: '1rem',
    padding: '1rem',
    justifyContent: 'start',
  },
  sideBar: {
    listStyle: 'none',
    width: '100%',
    boxShadow: '.4rem 0 1rem rgba(0 0 0 / 0.3)',
  },
  sideBarItem: {
    padding: '.5rem',
  },
  sideBarItemBtn: {
    padding: '.5rem',
  },

  formBuilder: {
    backgroundColor: '#eee',
    borderRadius: '10px',
    textAlign: 'left',
    minHeight: '100px',
    width: '100%',
  },
}

export default SurveryCreatePage
