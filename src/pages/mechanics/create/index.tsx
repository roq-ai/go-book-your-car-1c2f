import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createMechanic } from 'apiSdk/mechanics';
import { mechanicValidationSchema } from 'validationSchema/mechanics';
import { CompanyInterface } from 'interfaces/company';
import { getCompanies } from 'apiSdk/companies';
import { MechanicInterface } from 'interfaces/mechanic';

function MechanicCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: MechanicInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createMechanic(values);
      resetForm();
      router.push('/mechanics');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MechanicInterface>({
    initialValues: {
      first_name: '',
      last_name: '',
      experience: 0,
      specialization: '',
      rating: 0,
      company_id: (router.query.company_id as string) ?? null,
    },
    validationSchema: mechanicValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Mechanics',
              link: '/mechanics',
            },
            {
              label: 'Create Mechanic',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Mechanic
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.first_name}
            label={'First Name'}
            props={{
              name: 'first_name',
              placeholder: 'First Name',
              value: formik.values?.first_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.last_name}
            label={'Last Name'}
            props={{
              name: 'last_name',
              placeholder: 'Last Name',
              value: formik.values?.last_name,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Experience"
            formControlProps={{
              id: 'experience',
              isInvalid: !!formik.errors?.experience,
            }}
            name="experience"
            error={formik.errors?.experience}
            value={formik.values?.experience}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('experience', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.specialization}
            label={'Specialization'}
            props={{
              name: 'specialization',
              placeholder: 'Specialization',
              value: formik.values?.specialization,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Rating"
            formControlProps={{
              id: 'rating',
              isInvalid: !!formik.errors?.rating,
            }}
            name="rating"
            error={formik.errors?.rating}
            value={formik.values?.rating}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('rating', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<CompanyInterface>
            formik={formik}
            name={'company_id'}
            label={'Select Company'}
            placeholder={'Select Company'}
            fetcher={getCompanies}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/mechanics')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'mechanic',
    operation: AccessOperationEnum.CREATE,
  }),
)(MechanicCreatePage);
