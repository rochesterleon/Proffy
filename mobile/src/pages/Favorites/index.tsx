import React, { useState } from 'react';

import styles from './styles';
import { View, ScrollView, AsyncStorage } from 'react-native';
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from "@react-navigation/native";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }


    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >

                {favorites.map((teacher: Teacher) => {
                    return (<TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={true}
                    />)
                })}

            </ScrollView>
        </View>
    );
}

export default Favorites;