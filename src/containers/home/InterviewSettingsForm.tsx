import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import { IInterViewSettings } from "../../interface/forms";
import {
  interviewDurationOptions,
  interviewLanguageOptions,
  interviewModeOptions,
} from "./constants";

const InterviewDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
  setFormData: (data: IInterViewSettings) => void;
}> = ({ handleTab, setFormData }) => {
  const formik = useFormik<IInterViewSettings>({
    initialValues: {
      interviewMode: "",
      interviewDuration: "",
      interviewLanguage: "",
    },
    validationSchema: Yup.object().shape({
      interviewMode: Yup.string().required("Interview mode is required"),
      interviewDuration: Yup.string().required("Interview duration is required"),
      interviewLanguage: Yup.string().required("Interview language is required"),
    }),
    onSubmit: (values) => {
      setFormData(values); 
      alert("Form successfully submitted");
    },
  });

  return (
    <Box as="form" onSubmit={formik.handleSubmit as any}>
      <Box width="100%">
        <FormSelect
          label="Interview Mode"
          placeholder="Select interview mode"
          name="interviewMode"
          options={interviewModeOptions}
          onChange={formik.setFieldValue}
          onBlur={formik.setFieldTouched}
          value={formik.values?.interviewMode}
          error={formik.errors?.interviewMode}
          touched={formik.touched?.interviewMode}
        />
        <FormSelect
          label="Interview Duration"
          placeholder="Select interview duration"
          name="interviewDuration"
          options={interviewDurationOptions}
          onChange={formik.setFieldValue}
          onBlur={formik.setFieldTouched}
          value={formik.values?.interviewDuration}
          error={formik.errors?.interviewDuration}
          touched={formik.touched?.interviewDuration}
        />
        <FormSelect
          label="Job Location"
          name="interviewLanguage"
          placeholder="Select interview language"
          options={interviewLanguageOptions}
          onChange={formik.setFieldValue}
          onBlur={formik.setFieldTouched}
          error={formik.errors.interviewLanguage}
          touched={formik.touched.interviewLanguage}
          value={formik.values.interviewLanguage}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => handleTab(1)}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default InterviewDetailsForm;
