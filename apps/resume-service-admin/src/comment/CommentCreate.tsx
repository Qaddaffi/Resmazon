import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ResumeTemplateTitle } from "../resumeTemplate/ResumeTemplateTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
        <ReferenceInput
          source="resumeTemplate.id"
          reference="ResumeTemplate"
          label="resumeTemplate"
        >
          <SelectInput optionText={ResumeTemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
