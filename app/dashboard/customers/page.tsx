export default async function Page() {
  await new Promise((res) => setTimeout(() => res(null), 1000));
  return <p>Customers Page</p>;
}
