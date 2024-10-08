import { useFormContext } from "react-hook-form"
import { TextField, Stack } from "@mui/material"
import { Schema, schema } from "../types/schema"
import { RHFAutoComplete } from "../../components/RHFAutoComplete"
export function Users() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>()
  return (
    <>
      <Stack sx={{ gap: 2 }}>
        <TextField
          {...register("name")}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("email")}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <RHFAutoComplete<Schema> name="states" />
      </Stack>
    </>
  )
}
