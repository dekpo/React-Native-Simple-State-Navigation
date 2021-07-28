import React from 'react';
import { StyleSheet,Text, View, FlatList } from 'react-native';

const getPics = async () => {
  const response = await fetch('https://picsum.photos/v2/list?limit=24');
  const data = await response.json();
  return data;
}

const GalleryPage = () => {
  const [photoList,setPhotoList] = React.useState([]);

  React.useEffect(()=>{
    getPics().then(data => {
      console.log(data);
      setPhotoList(data);
    })
  },[]);

  return(
    <View style={styles.content}>
      <Text>Gallery Page</Text>
      <FlatList 
      data={photoList}
      renderItem={ ({item}) => (
        <ImageItem item={item} />
      )}
      keyExtractor={(item)=>item.id}
       />
    </View>
  )

};
  
export default GalleryPage

const styles = StyleSheet.create({
  content: {
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});