import { getDocs, collection, query, where, limit } from "firebase/firestore"; 
import { getDB } from "../firebase";

// 從Firebase呼叫景點的搜尋結果
export async function getJourney(name) {
  console.log("name is ",name)
  const journeys = collection(getDB(), 'JourneyTaipei');
  const journeyQuery = query(journeys, where('Name', '>=', name), limit(10));
  const journeySnapShot = await getDocs(journeyQuery);
  const journeyList = journeySnapShot.docs.map((doc) => 
    doc.data()
  ); 
  return journeyList;
}
