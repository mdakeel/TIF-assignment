import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../components/formComponents/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import { IJobDetails } from "../../interface/forms";

const JobDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
  setFormData: (data: IJobDetails) => void;
}> = ({ handleTab, setFormData }) => {
  const formik = useFormik<IJobDetails>({
      initialValues: {
        jobTitle: "",
        jobDetails: "",
        jobLocation: "",
      },
      validationSchema: Yup.object().shape({
        jobTitle: Yup.string().required("Job Title is required"),
        jobDetails: Yup.string().required("Job Details is required"),
        jobLocation: Yup.string().required("Job Location is required"),
      }),
      onSubmit: (values) => {
        setFormData(values);
        handleTab(2);
      },
    });

  return (
    <Box as="form" onSubmit={formik.handleSubmit as any}>
      <Box width="100%">
        <FormInput
          label="Job Title"
          placeholder="Enter job title"
          name="jobTitle"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.jobTitle}
          error={formik.errors?.jobTitle}
          touched={formik.touched?.jobTitle}
        />
        <FormInput
          label="Job Details"
          placeholder="Enter job details"
          name="jobDetails"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.jobDetails}
          error={formik.errors?.jobDetails}
          touched={formik.touched?.jobDetails}
        />
        <FormInput
          label="Job Location"
          name="jobLocation"
          placeholder="Enter job location"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.jobLocation}
          touched={formik.touched.jobLocation}
          value={formik.values.jobLocation}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => handleTab(0)}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default JobDetailsForm;
