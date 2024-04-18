import { ref as VueRef } from 'vue';
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQEgCy_fuSap1MHFYuFYBCPru49YrzK-8",
  authDomain: "portfolio-vue-61f72.firebaseapp.com",
  projectId: "portfolio-vue-61f72",
  storageBucket: "portfolio-vue-61f72.appspot.com",
  messagingSenderId: "957045661765",
  appId: "1:957045661765:web:765bdd0409edcc7da3032c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const getCards = () => {
  const card = VueRef({
    identifier: '',
    image: '', // Storing image URLs directly
    title: '',
    description: '', // Adding a description field
    category: '',
    modal_category: '',
    modal_tools: '',
    modal_description: '',
    modal_source: '', // Field for video, image, or PDF
    modal_link: '',
    modal_repository: ''
  });

  const cardList = VueRef([]);

  const cardsCollection = collection(db, 'cards');

  const fetchCards = async () => {
    onSnapshot(cardsCollection, async (snapshot) => {
      const newCardList = [];
      for (const doc of snapshot.docs) {
        const cardData = doc.data();
        // Fetch download URLs for images and modal sources
        cardData.image = await getDownloadUrl(cardData.image);
        cardData.modal_source = await getModalSourceUrl(cardData.modal_source);
        newCardList.push({ id: doc.id, ...cardData });
        console.log("Document data:", doc.data());
      }
      cardList.value = newCardList;
    });
  };

  const createCard = async () => {
    try {
      const docRef = await addDoc(cardsCollection, {
        identifier: card.value.identifier,
        title: card.value.title,
        description: card.value.description,
        image: card.value.image,
        modal_source: card.value.modal_source // Storing the modal source path directly
      });
      console.log("Document written with ID: ", docRef.id);
      card.value.title = '';
      card.value.description = '';
      card.value.image = ''; // Clearing image after creation
      card.value.modal_source = ''; // Clearing modal source after creation
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCard = async (card) => {
    try {
      await deleteDoc(doc(cardsCollection, card.id));
      console.log("Document deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    card,
    cardList,
    createCard,
    fetchCards,
    deleteCard
  };
};

const getDownloadUrl = async (filePath) => {
  try {
    const fileRef = storageRef(storage, filePath);
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error('Error retrieving file URL:', error);
    return null;
  }
};

const getModalSourceUrl = async (modalSourcePath) => {
  try {
    const modalSourceRef = storageRef(storage, modalSourcePath);
    return await getDownloadURL(modalSourceRef);
  } catch (error) {
    console.error('Error retrieving modal source URL:', error);
    return null;
  }
};

// Fetch initial cards and populate with image URLs and modal source URLs
const cards = getCards();
cards.fetchCards();

export default getCards;
