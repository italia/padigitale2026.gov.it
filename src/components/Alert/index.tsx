import { AlertRecord } from "@/graphql/generated";
import { Alert as AlertComponent } from "design-react-kit";
import { StructuredText } from "react-datocms";

export function Alert({ props }: { props: AlertRecord }) {
  const { title, colore, testo } = props;
  return (
    <AlertComponent color={colore?.colore || "success"}>
      {title && <h4 className="alert-heading">{title}</h4>}
      {testo && (
        <StructuredText
          key={JSON.stringify(testo)}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data={testo as any}
        />
      )}
    </AlertComponent>
  );
}
