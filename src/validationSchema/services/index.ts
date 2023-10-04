import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  cost: yup.number().integer().required(),
  duration: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
