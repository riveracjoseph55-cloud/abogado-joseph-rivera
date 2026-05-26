export default function SchemaOrg({ data }: { data: object | object[] }) {
  // Render each schema in its own <script> tag.
  // Google has known parsing issues with JSON-LD arrays inside a single block;
  // separate script tags guarantee each schema is read independently.
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
