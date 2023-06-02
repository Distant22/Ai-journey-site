import { getDocs, collection, query, where, limit } from "firebase/firestore"; 
import { getDB } from "../firebase";

export async function getJourney(name) {
  const journeys = collection(getDB(), 'JourneyTaipei');
  const journeyQuery = query(journeys, where('Name', '>=', name), limit(10));
  const journeySnapShot = await getDocs(journeyQuery);
  const journeyList = journeySnapShot.docs.map(doc => doc.data());
  
  return journeyList;
}
