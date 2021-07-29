import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const getPics = async (limit) => {
  const response = await fetch('https://picsum.photos/v2/list?limit='+limit);
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
  const [limit,setLimit] = React.useState(15);

  React.useEffect(()=>{
    getPics(limit).then(data => {
      // console.log(data);
      setPhotoList(data);
    })
  },[limit]);

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
          setLimit(limit+6);
          console.log("End List: ", limit);
        }
      }
      onEndReachedThreshold={0.2}
       />
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