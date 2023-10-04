import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  vehicle_id: yup.string().nullable().required(),
  service_id: yup.string().nullable().required(),
});
