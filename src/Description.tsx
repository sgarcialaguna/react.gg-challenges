export default function Description({
  url,
  description,
}: {
  url: string;
  description: string;
}) {
  return (
    <div style={{ display: "grid", gap: "0.5rem", marginTop: "2rem" }}>
      <a href={url} target="_blank">
        Original component
      </a>
      <div>{description}</div>
    </div>
  );
}
