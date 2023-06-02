import { getDocs, collection, query, where, limit } from "firebase/firestore"; 
import { getDB } from "../firebase";

export async function getHotel(name) {
  const journeys = collection(getDB(), 'HotelTaipei');
  const journeyQuery = query(journeys, where('Name', '>=', name), limit(10));
  const journeySnapShot = await getDocs(journeyQuery);
  const journeyList = journeySnapShot.docs.map(doc => doc.data());
  
  return journeyList;
}

export async function getTypeHotel(name, hotelType) {
  const journeys = collection(getDB(), 'HotelTaipei');
  const journeyQuery = query(journeys, where('Name', '>=', name), where('Class', '==', hotelType), limit(10));
  const journeySnapShot = await getDocs(journeyQuery);
  const journeyList = journeySnapShot.docs.map(doc => doc.data());
  
  return journeyList;
}
