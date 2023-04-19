import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Radio,
  NativeSelect as Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import * as React from 'react'

export default function SurveyPreview({ style, form, ...props }) {
  const [formSubmission, setFormSubmission] = React.useState(() =>
    Array.from(form).map((input) => ({
      question: input.question,
      id: input.id,
      value: input.formInputName === 'checkBox' ? [] : '',
      required: input.required,
    }))
  )

  const formInputTypeMap = {
    textField: (props) => (
      <div>
        <TextField {...props} label={undefined} placeholder="Type here..." />
      </div>
    ),
    checkBox: (props) => (
      <FormControlLabel
        sx={{ display: 'block', marginBottom: 1 }}
        control={<Checkbox name={props.name} value={props.label} />}
        label={props.label}
        {...props}
      />
    ),
    radioButton: (props) => (
      <FormControlLabel
        sx={{ display: 'block', marginBottom: 1 }}
        control={
          <input style={{ marginInline: '.8rem' }} type="radio" {...props} value={props.label} />
        }
        label={props.label}
        {...props}
      />
    ),
    select: ({ label, ...props }) => {
      let options = label
        .split(',')
        .filter(Boolean)
        .map((x) => x.trim())

      return (
        <TextField
          select
          required
          {...props}
          label={undefined}
          SelectProps={{
            native: true,
            defaultValue: 'heyo',
          }}
        >
          <option hidden value="">
            Choose one below:
          </option>
          {options.map((optionValue) => (
            <option value={optionValue} key={optionValue}>
              {optionValue}
            </option>
          ))}
        </TextField>
      )
    },
  }

  function handleChange(ev) {}

  return (
    <Box
      component="form"
      sx={{
        position: 'absolute',
        inset: 0,
        marginInline: 'auto',
        marginBlock: 4,
        padding: 2,
        borderRadius: 1,
        maxWidth: '700px',
        backgroundColor: 'whitesmoke',
        overflowY: "auto"
      }}
      onSubmit={(ev) => {
        ev.preventDefault()
        try {
          formSubmission.forEach((inputControl) => {
            if (inputControl.required === true && inputControl.value.toString() === '')
              throw Error('User: Validation Failed: some input marked as required are empty.')
          })
          console.log(JSON.stringify(formSubmission, null, 4))
        } catch (error) {
          console.log(error)
        }
      }}
    >
      {form.map((formInput, i) => (
        <Box sx={{ marginBottom: 5 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            {i + 1}. {formInput.question}
            {formInput.required && " *"}
          </Typography>

          {formInput.children.map((child, child_i) => {
            const InputControl = formInputTypeMap[child.type]

            return (
              <>
                <InputControl
                  name={formInput.id}
                  key={child_i}
                  {...child.props}
                  required={formInput.required}
                  value={formSubmission[i].value}
                  checked={
                    child.type === 'checkBox'
                      ? formSubmission[i].value.includes(child.props.label)
                      : formSubmission[i].value === child.props.label
                  }
                  onChange={(ev) => {
                    setFormSubmission((prev) => {
                      const input = ev.target
                      if (input.type === 'checkbox') {
                        if (input.checked) prev[i].value.push(input.value)
                        else prev[i].value = prev[i].value.filter((value) => value !== input.value)
                      } else {
                        prev[i].value = input.value
                      }

                      return [...prev]
                    })
                  }}
                />
              </>
            )
          })}
        </Box>
      ))}

      <Stack direction="row" spacing={1}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Button>Clear</Button>
      </Stack>
    </Box>
  )
}
