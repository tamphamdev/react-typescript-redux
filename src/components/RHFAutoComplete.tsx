import { Controller, FieldValues, Path } from "react-hook-form"
import {
  Autocomplete as AutoComplete,
  TextField,
  Box,
  Checkbox,
} from "@mui/material"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank"
import { Option } from "../types/option"
type Props<T extends FieldValues> = {
  name: Path<T>
  options: Option[]
  label: string
}
export function RHFAutoComplete<T extends FieldValues>({
  name,
  options,
  label,
}: Props<T>) {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <AutoComplete
          options={options}
          value={value.map((id: string) =>
            options.find((item) => item.id === id),
          )}
          getOptionLabel={(option) =>
            options.find((item) => item.id === option.id)?.label ?? ""
          }
          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id))
          }}
          disableCloseOnSelect
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
              label={label}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <Box component="li" {...props}>
              <Checkbox
                icon={<CheckBoxIcon />}
                checkedIcon={<CheckBoxOutlineBlank />}
                checked={selected}
              />
              {option.label}
            </Box>
          )}
        />
      )}
    />
  )
}
