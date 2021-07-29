import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const getPics = async () => {
  const response = await fetch('https://picsum.photos/v2/list?limit=24');
  const data = await response.json();
  return data;
}

const ImageItem = ({img}) => {
  const width = Math.round(windowWidth/3);
  const urlImage = 'https://picsum.photos/id/'+img.id+'/'+width+'/'+width;
  return (
    <View>
      <Image
      source= {
        {width:  width,
        height: width,
        uri: urlImage}
      } />
    </View>
  )
}

const GalleryPage = () => {
  const [photoList,setPhotoList] = React.useState([]);

  React.useEffect(()=>{
    getPics().then(data => {
      // console.log(data);
      setPhotoList(data);
    })
  },[]);

  return(
    <View style={styles.content}>
      <FlatList data={photoList}
      renderItem={ 
        ({item}) => (<ImageItem img={item} />)
      }
      keyExtractor={(elem)=>elem.id}
      numColumns={3}
      onEndReached={
        () => {
          console.log("Fin de la liste !")
        }
      }
      onEndReachedThreshold={0.5}
      refreshing={true}
      onRefresh={
        () => {
          console.log("She's fresh so fresh !")
        }
      } />
    </View>
  )

};
  
export default GalleryPage

const styles = StyleSheet.create({
  content: {
    flex: 4,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});