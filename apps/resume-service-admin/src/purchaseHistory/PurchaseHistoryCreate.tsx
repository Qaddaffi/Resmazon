import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ResumeTemplateTitle } from "../resumeTemplate/ResumeTemplateTitle";
import { UserTitle } from "../user/UserTitle";

export const PurchaseHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
