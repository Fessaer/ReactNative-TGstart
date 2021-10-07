import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from './UserStyles';

const User = props => {
  const {
    imageAvatar,
    avatarTitle,
    imageInfo,
    labelLeft,
    labelMiddle,
    labelRight,
    bodyTextLeft,
    bodyTextMiddle,
    bodyTextRight,
    navigation,
    id,
  } = props;

  const onPress = () => {
    navigation.navigate('UserDetails', {
      userId: id,
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleHeader}>
          <Image
            style={styles.avatar}
            source={{
              uri: imageAvatar,
            }}
          />
          <Text style={styles.titleName}>{avatarTitle}</Text>
        </View>
        <Image
          style={styles.infoImage}
          source={{
            uri: imageInfo,
          }}
        />
      </View>
      <View style={styles.bodyGroup}>
        <View style={styles.bodyContainerTitle}>
          <Text style={styles.label}>{labelLeft}</Text>
          <Text style={styles.bodyTitleText}>{bodyTextLeft}</Text>
        </View>
        <View style={styles.bodyContainerItem}>
          <Text style={styles.label}>{labelMiddle}</Text>
          <Text style={styles.text}>{bodyTextMiddle}</Text>
        </View>
        <View style={styles.bodyContainerItem}>
          <Text style={styles.label}>{labelRight}</Text>
          <Text style={styles.text}>{bodyTextRight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default User;
