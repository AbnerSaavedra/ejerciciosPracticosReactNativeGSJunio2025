import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: 600
    },
    container2:{
        backgroundColor: 'yellow',
        borderCurve: 'circular',
        borderRadius: '7px',
        width: 300,
        margin: 15
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 600
    },
});

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const FlatServerList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 60}}>Movies list</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.container2}>
                <Text style={styles.item}>
                {item.title}, {item.releaseYear}
                </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FlatServerList;