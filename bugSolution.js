This solution uses async/await for better readability:
```javascript
async function getData() {
  try {
    const docRef = doc(db, 'collection', 'docID');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      // Access data properties here
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
}
```
This shows how to handle promises:
```javascript
getDoc(docRef).then((docSnap) => {
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    // Access data properties here
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error fetching document:', error);
});
```