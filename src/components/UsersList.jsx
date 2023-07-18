import { Table, User } from "@nextui-org/react";

export const UsersList = ({ users }) => {
  return (
    <Table
      aria-label="User Table"
      containerCss={{ border: 0, width: "100%" }}
      shadow={false}
      lined
    >
      <Table.Header>
        <Table.Column>User</Table.Column>
        <Table.Column>Country</Table.Column>
        <Table.Column>City</Table.Column>
        <Table.Column>Phone</Table.Column>
      </Table.Header>
      <Table.Body>
        {users.map((user) => {
          return (
            <Table.Row key={user.email}>
              <Table.Cell>
                <User
                  squared
                  zoomed
                  bordered
                  src={user.picture.thumbnail}
                  name={user.name.first}
                >
                  {user.email}
                </User>
              </Table.Cell>
              <Table.Cell>{user.location.country}</Table.Cell>
              <Table.Cell>{user.location.city}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
      <Table.Pagination shadow noMargin align="center" rowsPerPage={5} />
    </Table>
  );
};
