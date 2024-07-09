import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ResumeTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ResumeTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
