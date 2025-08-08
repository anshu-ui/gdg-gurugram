import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp,
  DocumentData
} from "firebase/firestore";
import { db } from "./firebase";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Event {
  id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  registrationUrl?: string;
  type: 'upcoming' | 'past';
}

// Contact form functions
export const submitContactForm = async (data: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export const getContacts = async () => {
  try {
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting contacts:", error);
    throw error;
  }
};

// Events functions
export const getEvents = async (): Promise<Event[]> => {
  try {
    const q = query(collection(db, "events"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Event[];
  } catch (error) {
    console.error("Error getting events:", error);
    return [];
  }
};

export const addEvent = async (event: Omit<Event, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, "events"), {
      ...event,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
};