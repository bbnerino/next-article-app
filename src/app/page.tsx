import Link from "next/link";
import { connectDB } from "../../util/database";

export default async function Home() {
  return (
    <div>
      <h1>hi</h1>
      <Link href="/list">LIST</Link>
      <Link href="/write">WRITE</Link>
    </div>
  );
}
