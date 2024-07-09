import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ResumeTemplateTitle } from "../resumeTemplate/ResumeTemplateTitle";
import { UserTitle } from "../user/UserTitle";

export const PurchaseHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="pricePaid" source="pricePaid" />
        <TextInput label="paymentMethod" source="paymentMethod" />
        <ReferenceInput
          source="resumeTemplate.id"
          reference="ResumeTemplate"
          label="resumeTemplate"
        >
          <SelectInput optionText={ResumeTemplateTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
