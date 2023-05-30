import { getDocs, collection, query, where, limit } from "firebase/firestore"; 
import { getDB } from "../firebase";

export async function getHotel(name) {
  const journeys = collection(getDB(), 'hotel2023');
  const journeyQuery = query(journeys, where('Region', '==', name), limit(30));
  const journeySnapShot = await getDocs(journeyQuery);
  const journeyList = journeySnapShot.docs.map(doc => doc.data());
  
  return journeyList;
}

export async function getTypeHotel(region, hotelType) {
  const journeys = collection(getDB(), 'hotel2023');
  const journeyQuery = query(journeys, where('Region', '==', region), where('Class', '==', hotelType), limit(10));
  const journeySnapShot = await getDocs(journeyQuery);
  const journeyList = journeySnapShot.docs.map(doc => doc.data());
  
  return journeyList;
}
