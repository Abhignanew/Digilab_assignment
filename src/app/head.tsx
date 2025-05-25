// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Your App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* Link to PWA manifest and icons */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/icon-192x192.png" sizes="192x192" type="image/png" />
      <link rel="apple-touch-icon" href="/icon-192x192.png" />
    </>
  );
}
