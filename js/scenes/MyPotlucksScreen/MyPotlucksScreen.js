import React from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';

import MyPotlucksListItem from '../../components/MyPotlucksListItem';

import styles from './styles';

const MyPotlucksScreen = ({ dataSource, isLoading, navigate }) => (
  <View>
    { !isLoading &&
      <ListView
        style={styles.listView}
        dataSource={dataSource}

        renderHeader={() => (
          <View style={styles.header}>
            <Text style={styles.leftText}>Upcoming</Text>
          </View>
        )}

        renderRow={(rowData) => (
          <MyPotlucksListItem
            navigate={navigate}
            potluckId={rowData.id}
            title={rowData.title}
            description={rowData.description}
            eventDate={rowData.eventDate}
            isHost={rowData.isHost}
            isNew={rowData.isNew}
          />
        )}
      />
    }
  </View>
);

export default MyPotlucksScreen;
