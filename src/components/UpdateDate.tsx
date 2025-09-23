interface UpdateDateProps {
  date: string;
}

export function UpdateDate({ date }: UpdateDateProps) {
  return (
    <div className="container-xxl px-4">
      <p className="my-4 text-secondary">
        Aggiornato il{" "}
        <time dateTime={date}>
          {new Intl.DateTimeFormat("it-IT", {
            timeZone: "Europe/Rome",
            day: "2-digit",
            month: "long",
            year: "numeric",
          }).format(new Date(date))}
        </time>
      </p>
    </div>
  );
}
