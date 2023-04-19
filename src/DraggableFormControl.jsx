import Button from '@mui/material/Button'
import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { EditableInput } from './EditableInput'
import { formInputTypeMap } from './SurveryCreatePage'
import TextField from '@mui/material/TextField'
import { Box, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'

function DraggableFormControl({
  setForm,
  questionValue,
  inputElements: optionElements,
  index,
  id,
  ...props
}) {
  function handleDeleteFormControl(targetControlId) {
    setForm((prev) => prev.filter((formControl) => formControl.id !== targetControlId))
  }

  return (
    <Draggable index={index} draggableId={id}>
      {(provided) => (
        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
          <Box
            sx={{
              backgroundColor: '#efefef',
              borderRadius: 2,
              padding: 2,
              marginBottom: 2,
            }}
          >
            <TextField
              variant="outlined"
              onChange={(ev) =>
                setForm((prev) => {
                  prev[index].question = ev.target.value
                  return [...prev]
                })
              }
              value={questionValue}
              fullWidth
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Mark as required"
              onChange={(e) =>
                setForm((prev) => {
                  prev[index].required = e.target.checked
                  return [...prev]
                })
              }
            />

            {props.image && <img src={URL.createObjectURL(props.image)} width="200px" />}

            <Box sx={{ marginTop: 2 }}>
              {optionElements.map((child, child_i) => {
                const InputControl = formInputTypeMap[child.type]

                return (
                  <InputControl
                    key={child_i}
                    name={id}
                    {...child.props}
                    handleDelete={() =>
                      setForm((prev) => {
                        prev[index].children.splice(child_i, 1)
                        return [...prev]
                      })
                    }
                    onChange={(ev) => {
                      setForm((prev) => {
                        prev[index].children[child_i].props.label = ev.target.value
                        return [...prev]
                      })
                    }}
                  />
                )
              })}

              <Stack direction="row" spacing={1} paddingTop="1rem">
                {/radioButton|checkBox/.test(props.formInputName) && (
                  <Button
                    type="button"
                    variant="contained"
                    size="small"
                    onClick={() => {
                      setForm((prev) => {
                        prev[index].children.push({
                          type: optionElements[0].type,
                          props: { label: optionElements[0].type },
                        })

                        return [...prev]
                      })
                    }}
                  >
                    add {optionElements[0].type}
                  </Button>
                )}

                <Button component="label">
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
                  add image
                </Button>

                <Button color="warning" onClick={() => handleDeleteFormControl(id)}>
                  Delete
                </Button>
              </Stack>
            </Box>
          </Box>
        </div>
      )}
    </Draggable>
  )
}

const S = {
  formControl: {
    paddingBlock: '.5rem',
    borderBottom: '1px solid #666',
  },
  btnGroup: {
    paddingTop: '1rem',
  },
}

export default DraggableFormControl
