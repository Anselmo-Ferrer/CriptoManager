import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface Token {
  token: string;
  price: number;
}

interface MaintableProps {
  tokens: Token[];
}

export default function Maintable({ tokens }: MaintableProps) {
  return (
    <div className="flex flex-col gap-3">
      <Table
        aria-label="Example static collection table"
        color="primary"
        selectionMode="single"
        style={{ color: "#fff" }}
        className="bg-[rgba(28,28,28,0.6)] backdrop-blur-md rounded-xl nextui-table"
      >
        <TableHeader className="bg-black">
          <TableColumn>NAME</TableColumn>
          <TableColumn>PRICE</TableColumn>
          <TableColumn>COMPRA</TableColumn>
          <TableColumn>ATUAL</TableColumn>
          <TableColumn>DATA</TableColumn>
        </TableHeader>
        <TableBody>
          {tokens.map((token, i) => (
            <TableRow key={i}>
              <TableCell>{token.token}</TableCell>
              <TableCell>{token.price}</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}