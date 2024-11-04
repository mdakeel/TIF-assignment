// Other form components would follow the same pattern...
// Update each to accept and utilize `setFormData` to update the preview data accordingly.

// PreviewCard.tsx
import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import React from "react";
import {
  IInterViewSettings,
  IJobDetails,
  IRequisitionDetails,
} from "../../interface/forms";

const DataCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box mt="1rem" bg="white" width="100%" p="16px 24px" borderRadius="10px">
    <Text fontSize="1rem" as="h6" fontWeight="600" mb="12px">
      {title}
    </Text>
    <Grid gap="16px" templateColumns="1fr 1fr">
      {children}
    </Grid>
  </Box>
);

const KeyValue: React.FC<{
  title: string;
  value?: string;
}> = ({ title, value }) => (
  <Box>
    <Text fontSize=".875rem" color="gray" mb="8px">
      {title}
    </Text>
    <Text fontSize=".875rem" mb="8px">
      {value || "-"}
    </Text>
  </Box>
);

const PreviewCard: React.FC<{
  requisitionDetails?: IRequisitionDetails;
  jobDetails?: IJobDetails;
  interviewSettings?: IInterViewSettings;
}> = ({ requisitionDetails, jobDetails, interviewSettings }) => (
  <Box p="1rem">
    <Box borderRadius="10px" bgColor="gray.100" height="fit-content">
      <Flex justifyContent="space-between">
        <Text fontWeight="bold" fontStyle="italic" m="0.4rem 2rem">
          Draft
        </Text>
        <Box
          bgColor="#EE5353"
          color="white"
          p="0.4rem 2rem"
          borderTopRightRadius="10px"
        >
          <Text fontStyle="italic">Preview</Text>
        </Box>
      </Flex>
      <Box w="100%" p="16px 24px">
        <DataCard title="Requisition Details">
          <KeyValue title="Title" value={requisitionDetails?.requisitionTitle} />
          <KeyValue title="Openings" value={String(requisitionDetails?.noOfOpenings)} />
          <KeyValue title="Urgency" value={requisitionDetails?.urgency} />
          <KeyValue title="Gender" value={requisitionDetails?.gender} />
        </DataCard>
        <DataCard title="Job Details">
          <KeyValue title="Job Title" value={jobDetails?.jobTitle} />
          <KeyValue title="Job Details" value={jobDetails?.jobDetails} />
          <KeyValue title="Location" value={jobDetails?.jobLocation} />
        </DataCard>
        <DataCard title="Interview Settings">
          <KeyValue title="Mode" value={interviewSettings?.interviewMode} />
          <KeyValue title="Duration" value={interviewSettings?.interviewDuration} />
          <KeyValue title="Language" value={interviewSettings?.interviewLanguage} />
        </DataCard>
      </Box>
    </Box>
  </Box>
);

export default PreviewCard;