import {ref as VueRef} from 'vue';

import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection, onSnapshot } from 'firebase/firestore';



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
const db = getFirestore(app);   // Firestore


const cards = () => {

    const card = VueRef ({
        id: '',
        image: '',
        title: '',
        category: '',
        button: ''
    })

    const portfolioCards = VueRef([])
    const portfolioCardsCollection = collection('portfolioCards', db)

    const fetchCards = async () => {
        onSnapshot(portfolioCardsCollection, (snapshot)=>{
            portfolioCards.value = snapshot.docs.map(doc => ({
                id: doc.id, 
                ...doc.data()
            }))
        
        })

    }


    const createCard = async () => {
        try{
            const docRef = await addDoc(portfolioCardsCollection, {
                id: card.value.id,
                image: card.value.image,
                title: card.value.title,
                category: card.value.category,
                button: card.value.button
            } )
            console.log('Document written with ID: ', docRef.id)
         
        }
        catch(error) {
            console.log(error)
        }
    }

    return{
        card,
        portfolioCards,
        createCard,
        fetchCards
    }

}

export default cards;