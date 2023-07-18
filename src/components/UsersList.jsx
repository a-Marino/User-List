import { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Pagination,
  Spinner,
} from "@nextui-org/react";

export const UsersList = ({ users }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <Table
      aria-label="User Table"
      classNames={{
        table: "min-h-[400px]",
      }}
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="user">User</TableColumn>
        <TableColumn key="country">Country</TableColumn>
        <TableColumn key="city">City</TableColumn>
        <TableColumn key="phone">Phone</TableColumn>
      </TableHeader>
      <TableBody
        items={items}
        isLoading={!items.length}
        loadingContent={<Spinner />}
      >
        {items.map((item) => {
          return (
            <TableRow key={item.email}>
              <TableCell key="user">
                <User
                  avatarProps={{ radius: "lg", src: item.picture.thumbnail }}
                  name={item.name.first}
                >
                  {item.email}
                </User>
              </TableCell>
              <TableCell key="country">{item.location.country}</TableCell>
              <TableCell key="city">{item.location.city}</TableCell>
              <TableCell key="phone">{item.phone}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
