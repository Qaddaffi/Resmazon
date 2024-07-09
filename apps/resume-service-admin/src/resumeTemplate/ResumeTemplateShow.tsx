import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESUMETEMPLATE_TITLE_FIELD } from "./ResumeTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ResumeTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="industry" source="industry" />
        <TextField label="profession" source="profession" />
        <TextField label="fileWord" source="fileWord" />
        <TextField label="filePDF" source="filePdf" />
        <BooleanField label="freeDownload" source="freeDownload" />
        <TextField label="price" source="price" />
        <TextField label="author" source="author" />
        <ReferenceManyField
          reference="Comment"
          target="resumeTemplateId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <TextField label="author" source="author" />
            <ReferenceField
              label="resumeTemplate"
              source="resumetemplate.id"
              reference="ResumeTemplate"
            >
              <TextField source={RESUMETEMPLATE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Like"
          target="resumeTemplateId"
          label="Likes"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="resumeTemplate"
              source="resumetemplate.id"
              reference="ResumeTemplate"
            >
              <TextField source={RESUMETEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PurchaseHistory"
          target="resumeTemplateId"
          label="PurchaseHistories"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="pricePaid" source="pricePaid" />
            <TextField label="paymentMethod" source="paymentMethod" />
            <ReferenceField
              label="resumeTemplate"
              source="resumetemplate.id"
              reference="ResumeTemplate"
            >
              <TextField source={RESUMETEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
