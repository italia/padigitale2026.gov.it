import { TableRecord } from "@/graphql/generated";
import {
  Section,
  Row,
  Col,
  Container,
  Table as DTable,
} from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

// Interfaccia per definire la struttura della tabella
interface TableData {
  columns: string[];
  data: Record<string, string>[];
}

export function Table({ props }: { props: TableRecord }) {
  const { id, table } = props;
  // Verifica che table esista e abbia le proprietà necessarie
  if (!table || !(table as TableData).columns || !(table as TableData).data) {
    return null;
  }

  const tableData = table as TableData;

  return (
    <Section wrapperClassName={cn("p-0")}>
      <Container>
        <Row>
          <Col className="p-0">
            <DTable id={id} responsive>
              <thead>
                <tr>
                  {tableData.columns.map((column: string, index: number) => (
                    <th key={index} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.data.map(
                  (row: Record<string, string>, rowIndex: number) => (
                    <tr key={rowIndex}>
                      {tableData.columns.map(
                        (column: string, colIndex: number) =>
                          colIndex === 0 ? (
                            <th key={colIndex} scope="row">
                              {row[column] || ""}
                            </th>
                          ) : (
                            <td key={colIndex}>{row[column] || ""}</td>
                          )
                      )}
                    </tr>
                  )
                )}
              </tbody>
            </DTable>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
