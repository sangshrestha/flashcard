import { Deck } from "@/components/Deck";
import testList from "@/turkish.json";

export default function Home() {
  return <Deck list={testList}></Deck>;
}
