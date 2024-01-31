import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="default">Default Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button type="ghost">Ghost Button</Button>
    </main>
  );
}
