import React, { Children, ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png'

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaerProps{
    title: string;
    //React-Node permite receber um componente como propriedade
    headerRight?: ReactNode;
}


const Pageheader: React.FC<PageHeaerProps>=({title, headerRight ,children})=>{
    const { navigate } = useNavigation();
    function handleGoback(){
        navigate('Landing');
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoback}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>
                <Image source={logoImg} resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>

            {children}
        </View>
    )
}

export default Pageheader;