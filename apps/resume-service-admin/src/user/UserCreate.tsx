import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceArrayInput,
} from "react-admin";

import { LikeTitle } from "../like/LikeTitle";
import { PurchaseHistoryTitle } from "../purchaseHistory/PurchaseHistoryTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <TextInput label="mobileNumber" source="mobileNumber" />
        <BooleanInput label="emailVerified" source="emailVerified" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchaseHistories"
          reference="PurchaseHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseHistoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
