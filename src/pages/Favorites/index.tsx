import React, { useState} from 'react';
import { View } from 'react-native';

import styles from './styles';

import Pageheader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function Favorites(){
    const [favorites,setFavorites] = useState([]);
    
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if(response){
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )
    
    return(
        <View style={styles.container}>
        <Pageheader title="Meus proffys favoritos"/>
        <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16,
                }}
            >
               {favorites.map((teacher: Teacher)=>{
                   return (
                       <TeacherItem 
                       key={teacher.id}
                       teacher={teacher}
                       favorited={true}
                       />
                   )
               })}
            </ScrollView>
    </View>
    )
}

export default Favorites;