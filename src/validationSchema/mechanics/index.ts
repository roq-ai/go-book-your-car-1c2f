import * as yup from 'yup';

export const mechanicValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  experience: yup.number().integer().required(),
  specialization: yup.string().required(),
  rating: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
