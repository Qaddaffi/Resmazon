import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESUMETEMPLATE_TITLE_FIELD } from "../resumeTemplate/ResumeTemplateTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
