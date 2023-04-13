import {
  Box,
  Button,
  ButtonBase,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material'
import * as React from 'react'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import DraggableFormControl from './DraggableFormControl'
import { EditableInput } from './EditableInput'

export const formInputTypeMap = {
  textField: (props) => (
    <div>
      <TextField placeholder="Type here..." {...props} label={undefined} />
    </div>
  ),
  checkBox: (props) => (
    <Box
      style={{
        display: 'flex',
        width: 'fit-content',
        alignItem: 'center',
        gap: '.5rem',
        backgroundColor: '#ddd',
        padding: '0 0.5rem',
      }}
    >
      <input {...props} onChange={undefined} readOnly type="checkbox" />

      <InputBase value={props.label} onChange={props.onChange} />

      <ButtonBase
        onClick={() => props.handleDelete(props.id)}
        sx={(theme) => ({ color: theme.palette.warning })}
      >
        &times;
      </ButtonBase>
    </Box>
  ),
  radioButton: (props) => (
    <Box
      style={{
        display: 'flex',
        width: 'fit-content',
        alignItem: 'center',
        gap: '.5rem',
        backgroundColor: '#ddd',
        padding: '0 0.5rem',
      }}
    >
      <input {...props} onChange={undefined} type="radio" readOnly />

      <InputBase value={props.label} onChange={props.onChange} />

      <ButtonBase
        onClick={() => props.handleDelete(props.id)}
        sx={(theme) => ({ color: theme.palette.warning })}
      >
        &times;
      </ButtonBase>
    </Box>
  ),
  select: (props) => (
    <div>
      <Select {...props} onChange={undefined} readOnly native>
        {props.label
          .split('\n')
          .filter(Boolean)
          .map((optionValue) => (
            <option value={optionValue} key={optionValue}>
              {optionValue}
            </option>
          ))}
      </Select>

      <Box>
        <TextareaAutosize
          minRows={3}
          maxRows={10}
          style={{ width: 200, resize: 'horizontal' }}
          value={props.label}
          onChange={props.onChange}
        ></TextareaAutosize>
      </Box>
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
          formInputName,
          children: [{ type: formInputName, props: { label: formInputName } }],
        },
      ])
    }
  }

  return (
    <main>
      <div style={S.wrapper}>
        <Box sx={{ position: 'sticky', top: 0, height: '90vh', paddingTop: 2 }}>
          <Paper elevation={1} sx={{ backgroundColor: 'white', height: '100%' }}>
            <List>
              <ListItem sx={{ borderBottom: '1px solid', borderColor: 'gray' }}>
                <Typography variant="h6">Form Controls Toolbar</Typography>
              </ListItem>

              {formInputs.map((formInputName) => (
                <ListItem style={S.sideBarItem} key={formInputName}>
                  <ListItemButton
                    style={S.sideBarItemBtn}
                    type="button"
                    onClick={addFormControl(formInputName)}
                  >
                    {formInputName}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Form Builder */}
        <div style={S.formBuilder}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h3">Create new survey</Typography>

            <Button size="small" sx={{ marginLeft: 'auto' }}>
              Save
            </Button>
            <Button variant="contained" size="small">
              Publish
            </Button>
          </Stack>

          {form.length === 0 ? (
            <Box sx={{ paddingTop: 15, textAlign: 'center', color: 'gray' }}>
              <Typography>Drag or Click on any control from left sidebar</Typography>
            </Box>
          ) : (
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
          )}
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
  },
  sideBarItem: {
    padding: '.5rem',
  },
  sideBarItemBtn: {
    padding: '.5rem',
  },

  formBuilder: {
    borderRadius: '10px',
    textAlign: 'left',
    minHeight: '100px',
    width: '100%',
    padding: '0 .5rem',
  },
}

export default SurveryCreatePage
